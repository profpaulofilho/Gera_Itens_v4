/* =============================================
   GERADOR DE ITENS v5 — app.js
   ============================================= */

const STORAGE_KEY = 'gerador_itens_v5_hist';

// Elementos
const form          = document.getElementById('itemForm');
const statusEl      = document.getElementById('status');
const resultadoEl   = document.getElementById('resultado');
const historicoEl   = document.getElementById('historico');
const competenciaEl = document.getElementById('competencia');
const habilidadeEl  = document.getElementById('habilidade');
const conhecimentoEl= document.getElementById('conhecimento');
const bloomNivelEl  = document.getElementById('bloomNivel');
const bloomProcessoEl= document.getElementById('bloomProcesso');
const uploadArea    = document.getElementById('uploadArea');
const arquivoInput  = document.getElementById('arquivoAnexo');
const fileInfoEl    = document.getElementById('fileInfo');
const uploadText    = document.getElementById('uploadText');

let currentItem = null;
let anexoTexto  = null;   // conteúdo textual do arquivo anexado

/* ─── INIT ───────────────────────────────────── */
function init() {
  setDefaultDate();
  loadCompetencias();
  loadBloomNiveis();

  competenciaEl.addEventListener('change', refreshConhecimentos);
  bloomNivelEl.addEventListener('change', refreshBloomProcessos);

  form.addEventListener('submit', onSubmit);
  document.getElementById('limparBtn').addEventListener('click', limparForm);
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('exportJsonBtn').addEventListener('click', exportJSON);
  document.getElementById('exportTxtBtn').addEventListener('click', exportTXT);
  document.getElementById('exportHtmlBtn').addEventListener('click', exportHTML);
  document.getElementById('limparHistoricoBtn').addEventListener('click', clearHistory);

  // Upload
  uploadArea.addEventListener('click', () => arquivoInput.click());
  arquivoInput.addEventListener('change', handleFileSelect);
  uploadArea.addEventListener('dragover',  e => { e.preventDefault(); uploadArea.classList.add('drag-over'); });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    const f = e.dataTransfer.files[0];
    if (f) processFile(f);
  });

  renderHistory();
}

function setDefaultDate() {
  const today = new Date().toISOString().slice(0, 10);
  document.getElementById('dataElaboracao').value = today;
}

/* ─── COMPETÊNCIAS ───────────────────────────── */
function loadCompetencias() {
  const d = window.COURSE_DATA;
  d.competencias.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.id} — ${c.texto}`;
    competenciaEl.appendChild(opt);
  });
  competenciaEl.value = 'C1';
  refreshConhecimentos();
}

function refreshConhecimentos() {
  const cid = competenciaEl.value;
  const lista = window.COURSE_DATA.conhecimentos[cid] || [];
  conhecimentoEl.innerHTML = '';
  lista.forEach(k => {
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = k;
    conhecimentoEl.appendChild(opt);
  });

  // Carregar habilidades (transversais, independem da competência)
  const habs = window.COURSE_DATA.habilidades;
  habilidadeEl.innerHTML = '';
  habs.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h.id;
    opt.textContent = `${h.id} — ${h.texto}`;
    habilidadeEl.appendChild(opt);
  });
  habilidadeEl.value = 'HAB2';
}

/* ─── BLOOM ──────────────────────────────────── */
function loadBloomNiveis() {
  const niveis = window.COURSE_DATA.bloomNiveis;
  niveis.forEach(n => {
    const opt = document.createElement('option');
    opt.value = n;
    opt.textContent = n;
    bloomNivelEl.appendChild(opt);
  });
  bloomNivelEl.value = 'Analisar';
  refreshBloomProcessos();
}

function refreshBloomProcessos() {
  const nivel = bloomNivelEl.value;
  const procs = window.COURSE_DATA.bloomProcessos[nivel] || [];
  bloomProcessoEl.innerHTML = '';
  procs.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p;
    opt.textContent = p;
    bloomProcessoEl.appendChild(opt);
  });
}

/* ─── UPLOAD ─────────────────────────────────── */
function handleFileSelect(e) {
  const f = e.target.files[0];
  if (f) processFile(f);
}

function processFile(file) {
  if (file.size > 5 * 1024 * 1024) {
    setStatus('Arquivo muito grande (máximo 5 MB).', true);
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    anexoTexto = e.target.result;
    showFileInfo(file.name, file.size);
  };
  reader.onerror = () => setStatus('Erro ao ler o arquivo.', true);

  if (file.type === 'application/pdf') {
    // Para PDF, informamos que só extraímos texto plano
    anexoTexto = `[Arquivo PDF anexado: ${file.name} — ${(file.size/1024).toFixed(1)} KB. Conteúdo binário não extraído automaticamente. Use as observações para descrever instruções específicas.]`;
    showFileInfo(file.name, file.size);
  } else {
    reader.readAsText(file, 'utf-8');
  }
}

function showFileInfo(name, size) {
  fileInfoEl.classList.remove('hidden');
  fileInfoEl.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    <span>${escapeHtml(name)} <span style="color:var(--muted)">(${(size/1024).toFixed(1)} KB)</span></span>
    <button class="remove-file" title="Remover" onclick="removeFile()">×</button>
  `;
  uploadText.textContent = 'Arquivo anexado';
}

window.removeFile = function() {
  anexoTexto = null;
  arquivoInput.value = '';
  fileInfoEl.classList.add('hidden');
  uploadText.textContent = 'Anexar ficha ou documento complementar';
};

/* ─── PAYLOAD ────────────────────────────────── */
function buildPayload() {
  const cid  = competenciaEl.value;
  const comp = window.COURSE_DATA.competencias.find(c => c.id === cid);
  const habId = habilidadeEl.value;
  const hab  = window.COURSE_DATA.habilidades.find(h => h.id === habId);

  return {
    data:            document.getElementById('dataElaboracao').value || new Date().toLocaleDateString('pt-BR'),
    prazo:           document.getElementById('prazoEntrega').value || '2026-03-23',
    fichaId:         document.getElementById('fichaId').value.trim() || `REDES_ENT_${Date.now()}`,
    elaborador:      document.getElementById('elaborador').value.trim() || 'Não informado',
    banco:           'SENAC_MG_24_ENTRADA',
    area:            'Técnico em Redes de Computadores',
    competencia_id:  cid,
    competencia:     comp ? comp.texto : '',
    habilidade_id:   habId,
    habilidade:      hab ? hab.texto : habilidadeEl.options[habilidadeEl.selectedIndex]?.text || '',
    conhecimento:    conhecimentoEl.value,
    bloom_nivel:     bloomNivelEl.value,
    bloom_processo:  bloomProcessoEl.value,
    bloom_conhecimento: document.getElementById('bloomConhecimento').value,
    dificuldade:     document.querySelector('input[name="dificuldade"]:checked')?.value || 'Médio',
    tipo_item:       'Múltipla escolha — 4 opções',
    observacoes:     document.getElementById('observacoes').value.trim(),
    anexo:           anexoTexto || null
  };
}

/* ─── CLAUDE ─────────────────────────────────── */
async function generateWithClaude(payload) {
  const res = await fetch('/api/gerar-item', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Erro ao gerar com Claude');
  return { ...payload, ...data };
}

function validateItem(item) {
  ['analise','situacao','comando','alternativas','gabarito','justificativas','validacao'].forEach(key => {
    if (!item[key]) throw new Error(`Campo ausente: ${key}`);
  });
  ['A','B','C','D'].forEach(l => {
    if (!item.alternativas[l]) throw new Error(`Alternativa ${l} ausente`);
    if (!item.justificativas[l]) throw new Error(`Justificativa ${l} ausente`);
  });
}

/* ─── SUBMIT ─────────────────────────────────── */
async function onSubmit(e) {
  e.preventDefault();
  showLoading();
  try {
    const payload = buildPayload();
    const item    = await generateWithClaude(payload);
    validateItem(item);
    currentItem = item;
    renderItem(item);
    saveHistory(item);
    renderHistory();
    setStatus('✓ Item gerado com sucesso.');
  } catch (err) {
    setStatus(err.message || 'Erro inesperado', true);
    resultadoEl.innerHTML = `<div class="empty-state"><p style="color:var(--red)">${escapeHtml(err.message)}</p></div>`;
  }
}

function showLoading() {
  resultadoEl.classList.remove('vazio');
  resultadoEl.innerHTML = `
    <div class="loading-indicator">
      <div class="spinner"></div>
      <span class="loading-text">Gerando item com Claude...</span>
    </div>`;
  setStatus('Aguardando resposta da API...');
}

function limparForm() {
  form.reset();
  setDefaultDate();
  refreshConhecimentos();
  refreshBloomProcessos();
  window.removeFile();
  setStatus('Pronto para gerar.');
}

/* ─── RENDER ─────────────────────────────────── */
function renderItem(item) {
  const gab = item.gabarito;

  const altsHtml = ['A','B','C','D'].map(l => `
    <div class="alt-item ${l === gab ? 'gabarito-item' : ''}">
      <span class="alt-letter">${l})</span>
      <span>${escapeHtml(item.alternativas[l])}</span>
    </div>`).join('');

  const justHtml = ['A','B','C','D'].map(l => `
    <div class="alt-item">
      <span class="alt-letter">${l})</span>
      <span>${escapeHtml(item.justificativas[l])}</span>
    </div>`).join('');

  const valHtml = Object.entries(item.validacao).map(([k, v]) => `
    <div class="validation-item">
      <strong>${escapeHtml(k.replace(/_/g,' '))}</strong>
      <span class="${v ? 'ok' : 'fail'}">${v ? '✓ Atende' : '✗ Não atende'}</span>
    </div>`).join('');

  resultadoEl.classList.remove('vazio');
  resultadoEl.innerHTML = `
    <div class="result-block">
      <h3>Dados-base</h3>
      <div class="dados-grid">
        <div class="dado-row"><strong>ID:</strong> ${escapeHtml(item.fichaId)}</div>
        <div class="dado-row"><strong>Banco:</strong> ${escapeHtml(item.banco)}</div>
        <div class="dado-row"><strong>Elaborador:</strong> ${escapeHtml(item.elaborador)}</div>
        <div class="dado-row"><strong>Data:</strong> ${escapeHtml(item.data)}</div>
        <div class="dado-row" style="grid-column:1/-1"><strong>Competência:</strong> ${escapeHtml(item.competencia_id)} — ${escapeHtml(item.competencia)}</div>
        <div class="dado-row" style="grid-column:1/-1"><strong>Habilidade:</strong> ${escapeHtml(item.habilidade_id)} — ${escapeHtml(item.habilidade)}</div>
        <div class="dado-row" style="grid-column:1/-1"><strong>Conhecimento:</strong> ${escapeHtml(item.conhecimento)}</div>
        <div class="dado-row"><strong>Bloom:</strong> ${escapeHtml(item.bloom_nivel)} · ${escapeHtml(item.bloom_processo)} · ${escapeHtml(item.bloom_conhecimento)}</div>
        <div class="dado-row"><strong>Dificuldade:</strong> ${escapeHtml(item.dificuldade)}</div>
      </div>
    </div>

    <div class="result-block">
      <h3>Análise metodológica</h3>
      <p>${escapeHtml(item.analise)}</p>
    </div>

    <div class="result-block">
      <h3>Situação-estímulo</h3>
      <p>${escapeHtml(item.situacao)}</p>
    </div>

    <div class="result-block">
      <h3>Comando</h3>
      <p>${escapeHtml(item.comando)}</p>
    </div>

    <div class="result-block">
      <h3>Alternativas</h3>
      ${altsHtml}
    </div>

    <div class="result-block">
      <h3>Gabarito</h3>
      <span class="gabarito-badge">Alternativa ${escapeHtml(gab)}</span>
    </div>

    <div class="result-block">
      <h3>Justificativas</h3>
      ${justHtml}
    </div>

    <div class="result-block">
      <h3>Validação metodológica</h3>
      <div class="validation-grid">${valHtml}</div>
    </div>`;
}

/* ─── HISTÓRICO ──────────────────────────────── */
function getHistory()  { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
function clearHistory(){ localStorage.removeItem(STORAGE_KEY); renderHistory(); }

function saveHistory(item) {
  const list = [item, ...getHistory()].slice(0, 30);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function renderHistory() {
  const list = getHistory();
  if (!list.length) {
    historicoEl.innerHTML = '<p style="color:var(--faint);font-size:13px">Nenhum item salvo ainda.</p>';
    return;
  }
  historicoEl.innerHTML = list.map(item => `
    <div class="history-card" onclick="loadFromHistory(${escapeHtml(JSON.stringify(JSON.stringify(item)))})">
      <div class="ficha-id">${escapeHtml(item.fichaId)}</div>
      <div class="hab-text">${escapeHtml(item.habilidade_id || '')} — ${escapeHtml(item.habilidade || '')}</div>
      <div class="history-meta">
        <span class="history-tag">${escapeHtml(item.competencia_id || '')}</span>
        <span class="history-tag">${escapeHtml(item.bloom_nivel || '')}</span>
        <span class="history-tag">${escapeHtml(item.dificuldade || '')}</span>
        <span class="history-tag">${escapeHtml(item.data || '')}</span>
      </div>
    </div>`).join('');
}

window.loadFromHistory = function(jsonStr) {
  try {
    const item = JSON.parse(jsonStr);
    currentItem = item;
    renderItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStatus(`✓ Item ${item.fichaId} carregado do histórico.`);
  } catch(e) { /* silencioso */ }
};

/* ─── EXPORTAÇÃO ─────────────────────────────── */
function buildFichaText(item) {
  return [
    `FICHA AVALIATIVA — ${item.fichaId}`,
    `Data: ${item.data}`,
    `Prazo de entrega: ${item.prazo || '23/03/2026'}`,
    `Elaborador: ${item.elaborador}`,
    `Banco: ${item.banco}`,
    `Área: ${item.area}`,
    ``,
    `COMPETÊNCIA`,
    `${item.competencia_id} — ${item.competencia}`,
    ``,
    `HABILIDADE`,
    `${item.habilidade_id} — ${item.habilidade}`,
    ``,
    `CONHECIMENTO RELACIONADO`,
    item.conhecimento,
    ``,
    `TIPO DO ITEM`,
    `Múltipla escolha — 4 opções`,
    ``,
    `BLOOM`,
    `Dimensão do processo cognitivo: ${item.bloom_nivel}`,
    `Processo cognitivo: ${item.bloom_processo}`,
    `Dimensão do conhecimento: ${item.bloom_conhecimento}`,
    ``,
    `DIFICULDADE`,
    item.dificuldade,
    ``,
    `ANÁLISE METODOLÓGICA`,
    item.analise,
    ``,
    `SITUAÇÃO-ESTÍMULO`,
    item.situacao,
    ``,
    `COMANDO`,
    item.comando,
    ``,
    `ALTERNATIVAS`,
    `A) ${item.alternativas.A}`,
    `B) ${item.alternativas.B}`,
    `C) ${item.alternativas.C}`,
    `D) ${item.alternativas.D}`,
    ``,
    `GABARITO`,
    item.gabarito,
    ``,
    `JUSTIFICATIVAS`,
    `A) ${item.justificativas.A}`,
    `B) ${item.justificativas.B}`,
    `C) ${item.justificativas.C}`,
    `D) ${item.justificativas.D}`,
    ``,
    `VALIDAÇÃO METODOLÓGICA`,
    ...Object.entries(item.validacao).map(([k,v]) => `- ${k}: ${v}`)
  ].join('\n');
}

function downloadFile(filename, content, type) {
  if (!currentItem) return setStatus('Gere um item antes de exportar.', true);
  const blob = new Blob([content], { type });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

function exportTXT()  { downloadFile(currentItem.fichaId+'.txt',  buildFichaText(currentItem), 'text/plain;charset=utf-8'); }
function exportJSON() { downloadFile(currentItem.fichaId+'.json', JSON.stringify(currentItem, null, 2), 'application/json'); }
function exportHTML() {
  const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>${currentItem.fichaId}</title><style>body{font-family:Georgia,serif;max-width:800px;margin:40px auto;padding:0 20px;color:#1e293b;line-height:1.7}h1{font-size:18px;border-bottom:2px solid #1e293b;padding-bottom:8px}h2{font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:#475569;margin-top:28px}p,li{font-size:14px}.alt{padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;margin:4px 0}.gab{background:#f0fdf4;border-color:#16a34a;color:#15803d;font-weight:700}</style></head><body><pre>${escapeHtml(buildFichaText(currentItem))}</pre></body></html>`;
  downloadFile(currentItem.fichaId+'.html', html, 'text/html;charset=utf-8');
}

/* ─── HELPERS ────────────────────────────────── */
function setStatus(text, isError = false) {
  statusEl.textContent = text;
  statusEl.className   = 'status' + (isError ? ' error' : '');
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
}

/* ─── START ──────────────────────────────────── */
init();

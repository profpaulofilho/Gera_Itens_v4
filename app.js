const STORAGE_KEY='gerador_itens_v4_hist';
const form=document.getElementById('itemForm');
const statusEl=document.getElementById('status');
const resultadoEl=document.getElementById('resultado');
const historicoEl=document.getElementById('historico');
const ucEl=document.getElementById('uc');
const competenciaEl=document.getElementById('competencia');
const habilidadeEl=document.getElementById('habilidade');
const conhecimentoEl=document.getElementById('conhecimento');
const normaEl=document.getElementById('normaTecnica');
let currentItem=null;

function init(){
  loadUCs();
  ucEl.addEventListener('change',refreshDependentFields);
  form.addEventListener('submit',onSubmit);
  document.getElementById('limparBtn').addEventListener('click',()=>{form.reset();refreshDependentFields();});
  document.getElementById('printBtn').addEventListener('click',()=>window.print());
  document.getElementById('exportJsonBtn').addEventListener('click',exportJSON);
  document.getElementById('exportTxtBtn').addEventListener('click',exportTXT);
  document.getElementById('exportHtmlBtn').addEventListener('click',exportHTML);
  document.getElementById('limparHistoricoBtn').addEventListener('click',clearHistory);
  renderHistory();
}

function loadUCs(){
  window.COURSE_DATA.ucs.forEach(uc=>{
    const opt=document.createElement('option');
    opt.value=uc.id;
    opt.textContent=`${uc.id} \u2013 ${uc.nome}`;
    ucEl.appendChild(opt);
  });
  ucEl.value='UC7';
  refreshDependentFields();
}

function getSelectedUC(){
  return window.COURSE_DATA.ucs.find(uc=>uc.id===ucEl.value)||window.COURSE_DATA.ucs[0];
}

function refillSelect(selectEl,items){
  selectEl.innerHTML='';
  items.forEach(item=>{
    const opt=document.createElement('option');
    opt.value=item;
    opt.textContent=item;
    selectEl.appendChild(opt);
  });
}

function refreshDependentFields(){
  const uc=getSelectedUC();
  competenciaEl.value=uc.competencia;
  refillSelect(habilidadeEl,uc.habilidades);
  refillSelect(conhecimentoEl,uc.conhecimentos);
  refillSelect(normaEl,uc.normas);
}

function setStatus(text,isError=false){
  statusEl.textContent=text;
  statusEl.style.color=isError?'#ef4444':'#38bdf8';
}

function buildPayload(){
  return{
    data:new Date().toLocaleString('pt-BR'),
    fichaId:document.getElementById('fichaId').value.trim()||`AUTO-${Date.now()}`,
    elaborador:document.getElementById('elaborador').value.trim()||'N\u00e3o informado',
    uc:ucEl.value,
    uc_nome:getSelectedUC().nome,
    competencia:competenciaEl.value,
    habilidade:habilidadeEl.value,
    conhecimento:conhecimentoEl.value,
    bloom_nivel:document.getElementById('bloomNivel').value,
    bloom_processo:document.getElementById('bloomProcesso').value,
    bloom_conhecimento:document.getElementById('bloomConhecimento').value,
    dificuldade:document.getElementById('dificuldade').value,
    tipo_conhecimento:document.getElementById('tipoConhecimento').value,
    norma_tecnica:normaEl.value,
    observacoes:document.getElementById('observacoes').value.trim()
  };
}

async function generateWithClaude(payload){
  const res=await fetch('/api/gerar-item',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  });
  const data=await res.json();
  if(!res.ok)throw new Error(data.error||'Erro ao gerar com Claude');
  return{...payload,...data};
}

function validateItem(item){
  ['analise','situacao','comando','alternativas','gabarito','justificativas','validacao'].forEach(key=>{
    if(!item[key])throw new Error(`Campo ausente: ${key}`);
  });
  ['A','B','C','D'].forEach(letter=>{
    if(!item.alternativas[letter])throw new Error(`Alternativa ${letter} ausente`);
    if(!item.justificativas[letter])throw new Error(`Justificativa ${letter} ausente`);
  });
}

async function onSubmit(e){
  e.preventDefault();
  setStatus('Gerando item com Claude...');
  try{
    const payload=buildPayload();
    const item=await generateWithClaude(payload);
    validateItem(item);
    currentItem=item;
    renderItem(item);
    saveHistory(item);
    renderHistory();
    setStatus('Item gerado com sucesso.');
  }catch(err){
    setStatus(err.message||'Erro inesperado',true);
  }
}

function renderItem(item){
  resultadoEl.classList.remove('vazio');
  resultadoEl.innerHTML=
    '<div class="result-block"><h3>Dados-base</h3><p>'+
    '<strong>ID:</strong> '+escapeHtml(item.fichaId)+'<br>'+
    '<strong>Elaborador:</strong> '+escapeHtml(item.elaborador)+'<br>'+
    '<strong>UC:</strong> '+escapeHtml(item.uc)+' \u2013 '+escapeHtml(item.uc_nome)+'<br>'+
    '<strong>Compet\u00eancia:</strong> '+escapeHtml(item.competencia)+'<br>'+
    '<strong>Habilidade:</strong> '+escapeHtml(item.habilidade)+'<br>'+
    '<strong>Conhecimento:</strong> '+escapeHtml(item.conhecimento)+'<br>'+
    '<strong>Bloom:</strong> '+escapeHtml(item.bloom_nivel)+' | '+escapeHtml(item.bloom_processo)+' | '+escapeHtml(item.bloom_conhecimento)+'<br>'+
    '<strong>Dificuldade:</strong> '+escapeHtml(item.dificuldade)+'<br>'+
    '<strong>Norma:</strong> '+escapeHtml(item.norma_tecnica)+
    '</p></div>'+
    '<div class="result-block"><h3>An\u00e1lise metodol\u00f3gica</h3><p>'+escapeHtml(item.analise)+'</p></div>'+
    '<div class="result-block"><h3>Situa\u00e7\u00e3o-est\u00edmulo</h3><p>'+escapeHtml(item.situacao)+'</p></div>'+
    '<div class="result-block"><h3>Comando</h3><p>'+escapeHtml(item.comando)+'</p></div>'+
    '<div class="result-block alt-list"><h3>Alternativas</h3>'+
    '<p><strong>A)</strong> '+escapeHtml(item.alternativas.A)+'</p>'+
    '<p><strong>B)</strong> '+escapeHtml(item.alternativas.B)+'</p>'+
    '<p><strong>C)</strong> '+escapeHtml(item.alternativas.C)+'</p>'+
    '<p><strong>D)</strong> '+escapeHtml(item.alternativas.D)+'</p></div>'+
    '<div class="result-block"><h3>Gabarito</h3><p><strong>'+escapeHtml(item.gabarito)+'</strong></p></div>'+
    '<div class="result-block just-list"><h3>Justificativas</h3>'+
    '<p><strong>A)</strong> '+escapeHtml(item.justificativas.A)+'</p>'+
    '<p><strong>B)</strong> '+escapeHtml(item.justificativas.B)+'</p>'+
    '<p><strong>C)</strong> '+escapeHtml(item.justificativas.C)+'</p>'+
    '<p><strong>D)</strong> '+escapeHtml(item.justificativas.D)+'</p></div>'+
    '<div class="result-block"><h3>Valida\u00e7\u00e3o metodol\u00f3gica</h3><div class="validation-grid">'+
    Object.entries(item.validacao).map(([k,v])=>
      '<div class="validation-item"><strong>'+escapeHtml(k)+'</strong><br><span class="'+(v?'ok':'fail')+'">'+(v?'Atende':'N\u00e3o atende')+'</span></div>'
    ).join('')+
    '</div></div>';
}

function getHistory(){return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');}
function saveHistory(item){const list=[item,...getHistory()].slice(0,20);localStorage.setItem(STORAGE_KEY,JSON.stringify(list));}
function clearHistory(){localStorage.removeItem(STORAGE_KEY);renderHistory();}
function renderHistory(){
  const list=getHistory();
  historicoEl.innerHTML=list.length
    ?list.map(item=>'<div class="history-card"><strong>'+escapeHtml(item.fichaId)+'</strong> \u2014 '+escapeHtml(item.habilidade)+'<div class="meta">'+escapeHtml(item.data)+' \u2022 '+escapeHtml(item.uc)+' \u2022 '+escapeHtml(item.dificuldade)+'</div></div>').join('')
    :'<p class="meta">Nenhum item salvo ainda.</p>';
}

function buildFichaText(item){
  return 'FICHA AVALIATIVA \u2014 '+item.fichaId+'\n'+
    'Data: '+item.data+'\n'+
    'Elaborador: '+item.elaborador+'\n'+
    'Unidade Curricular / M\u00f3dulo: '+item.uc+' \u2013 '+item.uc_nome+'\n'+
    'Compet\u00eancia: '+item.competencia+'\n'+
    'Habilidade: '+item.habilidade+'\n'+
    'Conhecimento relacionado: '+item.conhecimento+'\n'+
    'Tipo do item: M\u00faltipla escolha \u2014 4 op\u00e7\u00f5es\n'+
    'Bloom: '+item.bloom_nivel+' | '+item.bloom_processo+' | '+item.bloom_conhecimento+'\n'+
    'Dificuldade: '+item.dificuldade+'\n'+
    'Norma t\u00e9cnica: '+item.norma_tecnica+'\n\n'+
    'AN\u00c1LISE METODOL\u00d3GICA\n'+item.analise+'\n\n'+
    'SITUA\u00c7\u00c3O-EST\u00cdMULO\n'+item.situacao+'\n\n'+
    'COMANDO\n'+item.comando+'\n\n'+
    'ALTERNATIVAS\n'+
    'A) '+item.alternativas.A+'\n'+
    'B) '+item.alternativas.B+'\n'+
    'C) '+item.alternativas.C+'\n'+
    'D) '+item.alternativas.D+'\n\n'+
    'GABARITO\n'+item.gabarito+'\n\n'+
    'JUSTIFICATIVAS\n'+
    'A) '+item.justificativas.A+'\n'+
    'B) '+item.justificativas.B+'\n'+
    'C) '+item.justificativas.C+'\n'+
    'D) '+item.justificativas.D+'\n\n'+
    'VALIDA\u00c7\u00c3O METODOL\u00d3GICA\n'+
    Object.entries(item.validacao).map(([k,v])=>'- '+k+': '+v).join('\n');
}

function downloadFile(filename,content,type){
  if(!currentItem)return setStatus('Gere um item antes de exportar.',true);
  const blob=new Blob([content],{type});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=filename;
  a.click();
  URL.revokeObjectURL(url);
}

function exportTXT(){downloadFile(currentItem.fichaId+'.txt',buildFichaText(currentItem),'text/plain;charset=utf-8');}
function exportJSON(){downloadFile(currentItem.fichaId+'.json',JSON.stringify(currentItem,null,2),'application/json');}
function exportHTML(){
  const html='<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>'+currentItem.fichaId+'</title></head><body><pre>'+escapeHtml(buildFichaText(currentItem))+'</pre></body></html>';
  downloadFile(currentItem.fichaId+'.html',html,'text/html;charset=utf-8');
}

function escapeHtml(value){
  return String(value==null?'':value).replace(/[&<>"]/g,function(s){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s];});
}

init();

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const PORT = process.env.PORT || 10000;

app.use(express.json({ limit: '4mb' }));

const rootDir = path.resolve(__dirname, '..');
app.use(express.static(rootDir));

// ─── PROMPT ─────────────────────────────────────────────────────────────────
function buildPrompt(body) {
  const anexo = body.anexo
    ? `\n\nDOCUMENTO COMPLEMENTAR ANEXADO PELO ELABORADOR:\n${body.anexo.slice(0, 3000)}\n`
    : '';

  return `Você é um especialista em elaboração de itens de múltipla escolha para o Curso Técnico em Redes de Computadores do SENAC, seguindo rigorosamente a metodologia Cebraspe e a Taxonomia de Bloom Revisada.

═══════════════════════════════════════════════
REGRAS METODOLÓGICAS OBRIGATÓRIAS (Cebraspe)
═══════════════════════════════════════════════
1. Avaliar apenas UMA habilidade por item.
2. Produzir a tríade obrigatória: SITUAÇÃO-ESTÍMULO → COMANDO → ALTERNATIVAS.
3. A situação-estímulo deve criar o problema de forma objetiva, profissional e funcional.
4. O comando deve ser continuação DIRETA da situação-estímulo — nunca autossuficiente.
5. Sem o contexto da situação-estímulo, o aluno NÃO deve conseguir resolver corretamente.
6. O comando deve retomar elementos concretos do contexto.
7. As 4 alternativas devem ser HOMOGÊNEAS (mesmo universo conceitual, mesma extensão, mesmo tipo de resposta).
8. Os distratores devem ser plausíveis, baseados em erros técnicos reais comuns.
9. A dificuldade deve vir da tarefa cognitiva — NUNCA de pegadinha, ambiguidade ou texto excessivo.
10. Citar norma técnica quando útil (TIA/EIA-568, TIA-569, TIA-606, etc.).
11. Sustentar a justificativa técnica da alternativa correta e de CADA distrator.

═══════════════════════════════════════════════
TAXONOMIA DE BLOOM REVISADA — REFERÊNCIA
═══════════════════════════════════════════════
Nível "${body.bloom_nivel}" / Processo "${body.bloom_processo}" / Conhecimento "${body.bloom_conhecimento}":
- Lembrar (Reconhecer/Recordar) → identificar, listar, definir
- Compreender (Interpretar/Classificar/Inferir…) → descrever, distinguir, relacionar
- Aplicar (Executar/Implementar) → usar procedimentos em situações concretas
- Analisar (Diferenciar/Organizar/Atribuir) → decompor, comparar cenários, diagnosticar
- Avaliar (Verificar/Criticar) → julgar soluções, validar configurações
- Criar (Gerar/Planejar/Produzir) → elaborar projetos, propor soluções novas

Tipos de conhecimento:
- Factual: terminologia e fatos básicos
- Conceitual: princípios, teorias e modelos
- Procedural: como fazer — técnicas, métodos, critérios
- Metacognitivo: conhecimento sobre o próprio aprendizado

═══════════════════════════════════════════════
DADOS DA FICHA
═══════════════════════════════════════════════
Banco:            ${body.banco}
ID da ficha:      ${body.fichaId}
Elaborador:       ${body.elaborador}
Área:             ${body.area}
Competência:      ${body.competencia_id} — ${body.competencia}
Habilidade:       ${body.habilidade_id} — ${body.habilidade}
Conhecimento:     ${body.conhecimento}
Tipo do item:     Múltipla escolha — 4 opções
Bloom – Nível:    ${body.bloom_nivel}
Bloom – Processo: ${body.bloom_processo}
Bloom – Conhecimento: ${body.bloom_conhecimento}
Dificuldade:      ${body.dificuldade}
Observações:      ${body.observacoes || 'Nenhuma'}
${anexo}

═══════════════════════════════════════════════
SAÍDA — APENAS JSON VÁLIDO, SEM MARKDOWN, SEM TEXTO EXTRA
═══════════════════════════════════════════════
{
  "analise": "Texto da análise metodológica explicando a habilidade-alvo, o cenário e as escolhas de construção.",
  "situacao": "Texto da situação-estímulo: contexto profissional realista, objetivo e necessário.",
  "comando": "Texto do comando: continuação direta da situação-estímulo, dependente do contexto.",
  "alternativas": {
    "A": "Texto da alternativa A",
    "B": "Texto da alternativa B",
    "C": "Texto da alternativa C",
    "D": "Texto da alternativa D"
  },
  "gabarito": "A",
  "justificativas": {
    "A": "Por que A é correta ou incorreta (com fundamento técnico).",
    "B": "Por que B é correta ou incorreta (com fundamento técnico).",
    "C": "Por que C é correta ou incorreta (com fundamento técnico).",
    "D": "Por que D é correta ou incorreta (com fundamento técnico)."
  },
  "validacao": {
    "contexto_funcional": true,
    "comando_depende_contexto": true,
    "sem_contexto_perde_sentido": true,
    "comando_retoma_elementos": true,
    "alternativas_mesmo_universo": true,
    "correta_nao_obvia": true,
    "distratores_plausiveis": true,
    "justificativa_sustentada": true
  }
}`;
}

// ─── ROTA ────────────────────────────────────────────────────────────────────
app.post('/api/gerar-item', async (req, res) => {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'ANTHROPIC_API_KEY não configurada no Render.' });
    }

    const prompt = buildPrompt(req.body || {});

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model:      'claude-haiku-4-5-20251001',
        max_tokens: 2500,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || 'Erro na API Anthropic',
        raw: data
      });
    }

    const text = data.content?.[0]?.text;
    if (!text) return res.status(500).json({ error: 'Resposta vazia do Claude.' });

    const clean = text.replace(/```json|```/g, '').trim();
    res.json(JSON.parse(clean));

  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro interno.' });
  }
});

app.listen(PORT, () =>
  console.log(`Servidor v5 iniciado na porta ${PORT} | modelo: claude-haiku-4-5-20251001`)
);

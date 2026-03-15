import express from 'express';
const app = express();
const PORT = process.env.PORT || 10000;
app.use(express.json({ limit: '1mb' }));
app.use(express.static('.'));

function buildPrompt(body) {
  return `Você é um especialista em elaboração de itens técnicos de Redes de Computadores.

Regras obrigatórias:
1. Avaliar apenas uma habilidade.
2. Produzir situação-estímulo, comando dependente do contexto, 4 alternativas homogêneas, gabarito e justificativas A a D.
3. Garantir que sem o contexto o comando não seja corretamente resolvível.
4. Criar distratores plausíveis com base em erros técnicos comuns.
5. Restringir o item ao escopo curricular informado.
6. Quando houver norma técnica, usá-la de modo coerente, sem inventar exigências falsas.
7. Responder apenas com JSON válido, sem markdown, sem texto extra.

Saída JSON exata:
{
  "analise": "...",
  "situacao": "...",
  "comando": "...",
  "alternativas": {"A": "...", "B": "...", "C": "...", "D": "..."},
  "gabarito": "A",
  "justificativas": {"A": "...", "B": "...", "C": "...", "D": "..."},
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
}

Dados do item:
UC: ${body.uc} - ${body.uc_nome}
Competência: ${body.competencia}
Habilidade: ${body.habilidade}
Conhecimento relacionado: ${body.conhecimento}
Bloom: ${body.bloom_nivel} | ${body.bloom_processo} | ${body.bloom_conhecimento}
Dificuldade: ${body.dificuldade}
Tipo de conhecimento: ${body.tipo_conhecimento}
Norma técnica: ${body.norma_tecnica}
Observações: ${body.observacoes || 'Nenhuma'}
`;
}

app.post('/api/gerar-item', async (req, res) => {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'A variável ANTHROPIC_API_KEY não foi configurada no Render.' });

    const prompt = buildPrompt(req.body || {});

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 2000,
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
    if (!text) return res.status(500).json({ error: 'A resposta do Claude veio vazia.' });

    // Limpar possível markdown antes de parsear
    const clean = text.replace(/```json|```/g, '').trim();
    res.json(JSON.parse(clean));

  } catch (error) {
    res.status(500).json({ error: error.message || 'Erro interno.' });
  }
});

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT} | API: anthropic`));

# 📋 Elaborador de Itens

> Gerador de itens avaliativos com IA — Metodologia Cebraspe · Taxonomia de Bloom  
> Multi-institucional: SENAC, SENAI, ou qualquer curso técnico

---

## 🚀 Como usar localmente

### Pré-requisitos
- [Node.js 18+](https://nodejs.org) instalado
- Conta na [Anthropic](https://console.anthropic.com) para obter chave de API

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/profpaulofilho/elaborador-itens.git
cd elaborador-itens

# 2. Instale as dependências
npm install

# 3. Configure a chave de API
cp .env.example .env.local
# Edite .env.local e coloque sua chave:
# REACT_APP_ANTHROPIC_KEY=sk-ant-...

# 4. Inicie o servidor de desenvolvimento
npm start
```

---

## 🌐 Deploy no GitHub Pages

```bash
# 1. Edite package.json — troque SEU_USUARIO pelo seu usuário GitHub:
# "homepage": "https://profpaulofilho.github.io/elaborador-itens"

# 2. Faça o deploy
npm run deploy
```

⚠️ **ATENÇÃO:** O GitHub Pages é estático — não há backend.  
Para usar a API Anthropic em produção com segurança, configure um backend proxy (ex: Vercel, Railway) e nunca exponha sua chave no código-fonte.

---

## 📁 Estrutura do projeto

```
elaborador-itens/
├── public/
│   └── index.html          ← Entrada HTML
├── src/
│   ├── App.jsx             ← Componente principal (toda a lógica)
│   └── index.js            ← Entry point React
├── .env.example            ← Modelo de variáveis de ambiente
├── .gitignore
├── package.json
└── README.md
```

---

## ➕ Adicionar novo banco de fichas (nova instituição)

No arquivo `src/App.jsx`, localize o objeto `BANCOS_FICHAS` e adicione um novo banco seguindo o padrão:

```js
"SENAI_MG_INFORMATICA": {
  label: "SENAI MG — Técnico em Informática",
  area: "Tecnologia da Informação",
  subarea: "Desenvolvimento de Sistemas",
  cargaHoraria: "1200h",
  ucs: {
    "Nome da UC": {
      qualificacao: "Nome da Qualificação",
      cargaHoraria: "80h",
      competencia: "Texto da competência conforme plano de curso.",
      indicadores: [
        "Indicador 1...",
        "Indicador 2...",
      ],
      conhecimentos: [
        "Conhecimento 1...",
        "Conhecimento 2...",
      ],
      habilidades: [
        "Habilidade 1...",
        "Habilidade 2...",
      ],
    },
  },
},
```

---

## 🎯 Bancos disponíveis atualmente

| Código | Instituição | Curso | C/H |
|--------|------------|-------|-----|
| `SENAC_SP_REDES` | SENAC SP | Técnico em Redes de Computadores (PC 296) | 1000h |
| `PERSONALIZADO` | Qualquer | Configuração manual livre | — |

---

## ✅ Funcionalidades

- Geração de itens completos via IA (Claude Sonnet)
- Ficha completa com situação-estímulo, comando e 4 alternativas
- Validação metodológica Cebraspe (8 critérios)
- Classificação pela Taxonomia de Bloom (nível, processo, conhecimento)
- Justificativa técnica para cada alternativa
- Download da ficha em HTML (pronta para impressão)
- Histórico de até 50 itens por sessão
- Suporte multi-institucional (campo Banco/Instituição editável)
- Dados do SENAC SP alinhados ao Plano de Curso nº 296

---

## 👤 Autor

**Paulo Filho** — 2026  
paulosilvafilhoba@gmail.com

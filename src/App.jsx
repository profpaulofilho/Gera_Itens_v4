import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════
//  BANCO DE FICHAS — SENAC SP | Técnico em Redes de Computadores
//  Plano de Curso nº 296 | 1000h | Resolução CRS nº 07/2021
// ═══════════════════════════════════════════════════════════════
export const BANCOS_FICHAS = {
  "SENAC_SP_REDES": {
    label: "SENAC — Técnico em Redes de Computadores",
    area: "Tecnologia da Informação",
    subarea: "Redes e Infraestrutura",
    cargaHoraria: "1000h",
    ucs: {
      // ── QUALIFICAÇÃO 1: Assistente de Operação de Redes (308h) ──
      "UC1 — Instalar redes locais de computadores": {
        qualificacao: "Assistente de Operação de Redes de Computadores",
        cargaHoraria: "96h",
        competencia: "Planejar e executar a instalação de redes locais de computadores.",
        habilidades: [
          "Planeja redes locais conforme as condições do ambiente.",
          "Interpreta requisitos pré-estabelecidos de acordo com projetos de rede.",
          "Instala fisicamente redes locais de acordo com as normas e padrões dos fabricantes.",
          "Configura equipamentos de redes locais de acordo com projeto ou documentação pré-definida.",
          "Configura a segurança da rede local de acordo com a política de segurança da organização.",
          "Testa e realiza correções no funcionamento dos equipamentos usando ferramentas de diagnóstico.",
          "Instala e configura ferramentas de monitoramento conforme especificações dos fabricantes.",
          "Realiza etapas do processo de instalação de acordo com normas e procedimentos técnicos.",
          "Comunicar-se de maneira assertiva.",
          "Elaborar documentos técnicos.",
          "Interpretar textos técnicos.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
          "Organizar materiais, ferramentas, instrumentos, documentos e local de trabalho.",
          "Administrar as etapas do processo de instalação e os recursos disponíveis.",
          "Mediar conflitos nas situações de trabalho.",
          "Analisar as etapas do processo de trabalho.",
        ],
        conhecimentos: [
          "Eletricidade aplicada a redes: conceitos, equipamentos de medição, aterramento, riscos elétricos.",
          "Sistema operacional: instalação para configuração de redes locais, compartilhamento de pastas, recursos periféricos.",
          "Arquiteturas de redes: conceitos, topologias, tipos, protocolos, modelo ISO/OSI e TCP/IP, máscaras IP.",
          "Planejamento de redes: conceito, tipos, projeto de topologia LAN, análise de cenários, etapas de projeto.",
          "Cabeamento: conceitos, tipos, cabos para redes locais, crimpagem, normas técnicas, manuais de fabricantes.",
          "Configurações de redes locais: sistemas operacionais, terminal de comandos, protocolos TCP/IP, sub-redes.",
          "Segurança de redes: conceito, tipos, ameaças digitais, malwares, técnicas de ataques e proteção.",
        ],
      },

      "UC2 — Manutenção de redes locais de computadores": {
        qualificacao: "Assistente de Operação de Redes de Computadores",
        cargaHoraria: "96h",
        competencia: "Planejar e executar a manutenção de redes locais de computadores.",
        habilidades: [
          "Realiza diagnóstico de funcionalidade da rede local conforme recomendações técnicas de software de monitoramento.",
          "Substitui componentes de rede local conforme diagnóstico e recomendações técnicas dos fabricantes.",
          "Repara cabeamento de redes locais conforme as recomendações técnicas dos fabricantes.",
          "Testa e realiza correções na rede local conforme as recomendações técnicas dos fabricantes.",
        ],
        conhecimentos: [
          "Manuais de fabricantes: informações técnicas, requisitos, compatibilidades, procedimentos.",
          "Fundamentos de segurança da rede: tipos, gestão de ativos, gestão de incidentes, riscos de integridade.",
          "Legislação da Segurança da Informação: direitos, deveres, sanções.",
          "Ferramentas de monitoramento: antivírus, anti-malware, firewall, sniffer, exploits, port scanner, honeypot.",
          "Monitoramento de tráfego: desempenho, segurança, integridade, disponibilidade e autenticidade.",
          "Infraestrutura de redes locais: anomalias, normas e métodos de resolução de problemas.",
          "Manutenção de cabeamento: tipos e procedimentos, normas técnicas, manuais de fabricantes.",
          "Homologação do funcionamento: plano de testes, tipos, instrumentos e software de testes.",
          "Sustentabilidade: legislação ambiental, descarte de resíduos tecnológicos.",
          "Normas técnicas de segurança do trabalho: ergonomia, riscos visuais, lesões por esforço repetitivo.",
        ],
        habilidades: [
          "Comunicar-se de maneira assertiva.",
          "Elaborar documentos técnicos.",
          "Interpretar textos técnicos.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
          "Organizar materiais, ferramentas, instrumentos, documentos e local de trabalho.",
          "Administrar as etapas do processo de instalação e os recursos disponíveis.",
          "Mediar conflitos nas situações de trabalho.",
          "Analisar as etapas do processo de trabalho.",
        ],
      },

      "UC3 — Instalação e monitoramento de servidores (redes locais)": {
        qualificacao: "Assistente de Operação de Redes de Computadores",
        cargaHoraria: "96h",
        competencia: "Planejar e executar a instalação, a configuração e o monitoramento de sistemas operacionais de redes locais (servidores).",
        habilidades: [
          "Elabora plano de trabalho de instalação e configuração do servidor conforme necessidades do cliente.",
          "Instala equipamento de gerenciamento da rede local (servidor) conforme normas e procedimentos técnicos.",
          "Instala sistema operacional de rede local (servidor) conforme normas e procedimentos técnicos.",
          "Configura os serviços de gerenciamento da rede local (servidor) conforme planejamento e fabricantes.",
          "Realiza monitoramento de redes com software de segurança e gera relatórios de atividades.",
          "Configura máquinas virtuais por meio de ferramentas de virtualização conforme normas técnicas.",
        ],
        conhecimentos: [
          "Planejamento e implementação de servidores: instalação e configuração de sistemas livres e proprietários.",
          "Configuração de serviços de redes locais: controle de recursos, protocolos, políticas de administração.",
          "Políticas de segurança de rede: padrões e normas, portas de comunicação, políticas de backup.",
          "Gerenciamento de interoperabilidade: modelos de interoperabilidade, tipos de arquitetura de rede.",
          "Virtualização: máquinas virtuais, sistemas operacionais, switches, roteadores, firewalls virtuais.",
          "Tipos de virtualização: hardware, apresentação e aplicativos. Cloud computing. Ferramentas de virtualização.",
          "Tecnologias de redes emergentes: tipos e aplicações.",
        ],
        habilidades: [
          "Comunicar-se de maneira assertiva.",
          "Elaborar documentos técnicos.",
          "Interpretar textos técnicos.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
          "Organizar materiais, ferramentas, instrumentos, documentos e local de trabalho.",
          "Analisar as etapas do processo de trabalho.",
          "Administrar as etapas do processo de instalação e os recursos disponíveis.",
          "Mediar conflitos nas situações de trabalho.",
        ],
      },

      // ── QUALIFICAÇÃO 2: Assistente de Implantação e Adm. Infraestrutura (402h) ──
      "UC5 — Protocolos de rede em roteadores e switches": {
        qualificacao: "Assistente de Implantação e Adm. de Infraestrutura de Redes",
        cargaHoraria: "96h",
        competencia: "Implementar protocolos de rede em roteadores e switches.",
        habilidades: [
          "Configura protocolos de interconexão de rede conforme modelo do roteador ou switch e camadas OSI/TCP-IP.",
          "Elabora mapa de distribuição de endereçamento IP conforme necessidades de conectividade e segurança.",
          "Configura endereçamento IPv4 e IPv6 conforme planejamento e segmentação de redes.",
          "Documenta as configurações de ativos de rede conforme especificidades do projeto.",
          "Configura segurança de acesso aos roteadores e switches Cisco conforme recomendações dos fabricantes.",
        ],
        conhecimentos: [
          "Plataforma Cisco: switch básico, configuração de dispositivo, Switching Ethernet, configuração básica do roteador.",
          "Protocolos de comunicação Cisco: tipos, características e aplicações.",
          "Redes LAN e WAN: características e aplicações.",
          "Modelo de rede OSI e TCP/IP: camadas e protocolos.",
          "Endereçamento de rede IPv4 e IPv6 e sub-redes.",
          "Segurança de rede: segurança de roteadores e switch.",
        ],
        habilidades: [
          "Comunicar-se de maneira assertiva.",
          "Calcular números entre sistemas decimal e binário.",
          "Testar conectividade, cabos e interface.",
          "Calcular esquema de sub-redes IPv4 e IPv6 para segmentar a rede.",
          "Elaborar documentos técnicos.",
          "Interpretar textos técnicos.",
          "Mediar conflitos nas situações de trabalho.",
          "Utilizar termos técnicos nas rotinas de trabalho.",
        ],
      },

      "UC6 — Roteamento e switching": {
        qualificacao: "Assistente de Implantação e Adm. de Infraestrutura de Redes",
        cargaHoraria: "96h",
        competencia: "Implementar roteamento e switching.",
        habilidades: [
          "Verifica o roteamento estático e padrão conforme características das configurações dos equipamentos.",
          "Configura operações básicas de roteadores e de switches conforme a rede roteada.",
          "Monitora o desempenho dos recursos de redes conforme recomendações técnicas.",
          "Configura redes WLAN conforme especificações do fabricante.",
          "Configura redes VLAN conforme especificações do fabricante.",
        ],
        conhecimentos: [
          "Modelos de protocolos de rede, camadas de comunicação, máscaras de sub-rede e endereçamento IP.",
          "Roteamento estático IPv4 e IPv6: rotas estáticas, padrão, flutuantes, resumidas e solução de problemas.",
          "Roteamento dinâmico: vetor de distância, protocolos RIP, RIPng, tabelas de roteamento e segurança.",
          "Monitoramento de recursos redes: conceitos, ferramentas.",
          "Ambiente comutado: domínios de Switching.",
          "Switch: configurações iniciais, segurança de porta, Ether Channel.",
          "VLAN: segmentação, implementação, segurança e roteamento.",
          "WLAN: segmentação, implementação, segurança e roteamento.",
          "ACL: IPv4 padrão e estendidas, solução de problemas.",
          "Protocolos DHCP, STP, FHRP, DHCPv6, DHCPv4, SLAAC, IPv4 e IPv6.",
          "Protocolo de tradução de endereços: NAT.",
          "Descoberta, gerenciamento e manutenção de dispositivos Cisco.",
        ],
        habilidades: [
          "Comunicar-se de maneira assertiva.",
          "Elaborar documentos técnicos.",
          "Interpretar textos técnicos.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
          "Organizar materiais, ferramentas, instrumentos, documentos e local de trabalho.",
          "Administrar as etapas do processo de instalação e os recursos disponíveis.",
          "Mediar conflitos nas situações de trabalho.",
          "Analisar as etapas do processo de trabalho.",
        ],
      },

      "UC7 — Manutenção de servidores": {
        qualificacao: "Assistente de Implantação e Adm. de Infraestrutura de Redes",
        cargaHoraria: "48h",
        competencia: "Planejar e executar a manutenção de servidores.",
        habilidades: [
          "Elabora plano de trabalho de manutenção do servidor conforme necessidades do cliente e fabricantes.",
          "Seleciona servidor e componentes conforme funcionalidade e aplicação dos modelos de hardware.",
          "Realiza montagem e desmontagem de computadores ou servidores conforme arquitetura.",
          "Realiza reparação de computadores e servidores conforme diagnóstico a partir de testes de funcionamento.",
        ],
        conhecimentos: [
          "Eletricidade: conceito, tipos de tensões, correntes, riscos, unidades de medida.",
          "Multímetros: tipos analógico e digital, procedimento de utilização, teste de componentes.",
          "Aterramento aplicado à proteção eletrostática dos componentes de hardware.",
          "Fundamentos de arquitetura de computadores desktop e servidores: barramentos, ALU, registradores.",
          "Componentes de hardware: placa-mãe, processadores, memórias RAM, tipos DDR, hierarquia de memória.",
          "Gabinetes: AT, ATX, BTX, servidores de rack em U, regras de conectorização.",
          "Unidades de armazenamento: HDs IDE, PATA, SATA, SCSI, SAS, SSDs, RAID, unidades óticas.",
          "Técnicas de montagem: seleção de hardware, ferramentas, manuais, sequencialidade, multímetro.",
          "Homologação: plano de testes, tipos físicos e funcionais, instrumentos, procedimentos.",
          "Organização e saúde no trabalho: checklist, segurança do ambiente, riscos ergonômicos.",
        ],
        habilidades: [
          "Comunicar-se de maneira assertiva.",
          "Elaborar documentos técnicos.",
          "Interpretar textos técnicos.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
          "Organizar materiais, ferramentas, instrumentos, documentos e local de trabalho.",
          "Administrar as etapas do processo de instalação e os recursos disponíveis.",
          "Mediar conflitos nas situações de trabalho.",
          "Analisar as etapas do processo de trabalho.",
        ],
      },

      "UC8 — Cabeamento estruturado e telefonia IP": {
        qualificacao: "Assistente de Implantação e Adm. de Infraestrutura de Redes",
        cargaHoraria: "72h",
        competencia: "Implementar cabeamento estruturado e telefonia IP.",
        habilidades: [
          "Planeja e instala fisicamente cabeamento estruturado para redes convergentes conforme normas.",
          "Configura serviços de telefonia IP em redes convergentes conforme tecnologia do dispositivo e VoIP.",
          "Realiza diagnóstico e repara serviços de telefonia IP conforme conectividade dos equipamentos.",
        ],
        conhecimentos: [
          "Telefonia IP: protocolos, codificadores (codec) e equipamentos.",
          "Arquiteturas de redes: topologias de rede de telefonia IP, LAN, MAN e WAN, protocolos VoIP.",
          "Projeto de telefonia IP: análise de cenários, seleção de topologia, etapas, equipamentos e soluções.",
          "Cabeamento estruturado: normas técnicas, tipos de cabos, terminação de cabeamento.",
          "Tecnologia FTTx e suas aplicações.",
          "Configuração lógica de telefonia IP: softphone, servidor IPBX, ATA e telefone IP.",
        ],
        habilidades: [
          "Identificar as etapas do processo de trabalho.",
          "Analisar as etapas do processo de trabalho.",
          "Testar e corrigir funcionamento de telefonia.",
          "Comunicar-se de maneira assertiva.",
          "Interpretar textos técnicos.",
          "Organizar materiais, ferramentas, instrumentos, documentos e local de trabalho.",
          "Realizar terminação de cabos de rede.",
          "Mediar conflitos nas situações de trabalho.",
        ],
      },

      "UC9 — Política de administração de redes e disponibilidade": {
        qualificacao: "Assistente de Implantação e Adm. de Infraestrutura de Redes",
        cargaHoraria: "60h",
        competencia: "Implementar política de administração de redes e serviços de disponibilidade.",
        habilidades: [
          "Realiza monitoramento de desempenho de rede conforme análise de protocolos e throughput.",
          "Elabora políticas de administração e de uso de redes conforme necessidades do ambiente.",
          "Configura serviços de RAID, SAN e NAS em sistema operacional de redes conforme o ambiente.",
        ],
        conhecimentos: [
          "Controle de tráfego: ferramentas de análise de protocolos de comunicação e throughput da rede.",
          "Política de administração de redes: modelos e disponibilidade de informação.",
          "Sistemas RAID: replicação de dados, redundância, sistemas NAS, sistemas SAN e LUN.",
          "Clusterização e balanceamento de carga de rede.",
        ],
        habilidades: [
          "Elaborar documentos técnicos.",
          "Comunicar-se de maneira assertiva.",
          "Interpretar textos técnicos.",
          "Mediar conflitos nas situações de trabalho.",
          "Utilizar termos técnicos nas rotinas de trabalho.",
          "Analisar as etapas do processo de trabalho.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
        ],
      },

      // ── QUALIFICAÇÃO 3: Assistente de Segurança em Redes (290h) ──
      "UC11 — Segurança física e lógica em redes": {
        qualificacao: "Assistente de Segurança em Redes de Computadores",
        cargaHoraria: "72h",
        competencia: "Planejar e implementar a segurança física e lógica em redes de computadores.",
        habilidades: [
          "Propõe política de segurança em redes de computadores conforme necessidades da empresa.",
          "Instala e configura arquitetura de segurança considerando o perímetro físico e lógico.",
          "Configura protocolos de segurança no ambiente de rede, considerando a confidencialidade dos dados.",
        ],
        conhecimentos: [
          "Segurança em redes: tríade CIA (confidencialidade, integridade e disponibilidade), segurança física e lógica.",
          "Política de Segurança da Informação: elaboração e implantação.",
          "Crimes cibernéticos: hackers, crackers, carders, malwares, perfil de atacante e de ataque.",
          "Riscos de segurança: impactos de incidentes, gerenciamento de incidentes.",
          "Monitoramento de perímetro físico e lógico: CPTED, mídias de armazenamento, Marco Civil.",
          "Ataques e contramedidas: vírus, worms, buffer-overflow, backdoors, phishing, spam, CVE.",
          "Compliance: auditoria, relatórios, controle de configurações, GMUD-ITIL, testes white/gray/black-box.",
          "Tecnologias de segurança: arquitetura firewall, VPN, NAT, Proxy, IDS, HIDS, NIDS e IPS.",
        ],
        habilidades: [
          "Elaborar documentos técnicos.",
          "Comunicar-se de maneira assertiva.",
          "Interpretar textos técnicos.",
          "Mediar conflitos nas situações de trabalho.",
          "Utilizar termos técnicos nas rotinas de trabalho.",
          "Analisar as etapas do processo de trabalho.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
        ],
      },

      "UC12 — Segurança em redes sem fio": {
        qualificacao: "Assistente de Segurança em Redes de Computadores",
        cargaHoraria: "36h",
        competencia: "Planejar e implementar a segurança em redes sem fio.",
        habilidades: [
          "Elabora plano de configuração de segurança em redes sem fio conforme necessidades do cliente.",
          "Realiza interligação de redes sem fio considerando alcance do sinal e especificações tecnológicas.",
          "Configura Access Point e estações de trabalho em redes sem fio conforme estabilidade do sinal.",
          "Realiza diagnóstico de funcionamento da rede sem fio conforme conectividade dos equipamentos.",
        ],
        conhecimentos: [
          "Dispositivos de redes sem fio: conceito, configuração e tecnologias.",
          "Normatização de frequências indoor/outdoor.",
          "Arquiteturas de redes sem fio: topologias WPAN, WLAN, WMAN e WWAN, protocolos, gestão de serviços.",
          "Segurança e autenticação de redes sem fio.",
          "Equipamentos e componentes: antenas (tipos, polarização, montagem), bridge, Access Point, SNR.",
        ],
        habilidades: [
          "Elaborar documentos técnicos.",
          "Comunicar-se de maneira assertiva.",
          "Interpretar textos técnicos.",
          "Mediar conflitos nas situações de trabalho.",
          "Utilizar termos técnicos nas rotinas de trabalho.",
          "Analisar as etapas do processo de trabalho.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
        ],
      },

      "UC13 — Criptografia de dados e certificados digitais": {
        qualificacao: "Assistente de Segurança em Redes de Computadores",
        cargaHoraria: "44h",
        competencia: "Planejar e implementar a criptografia de dados e certificados digitais.",
        habilidades: [
          "Elabora plano de implementação de criptografia de dados e certificados digitais.",
          "Realiza criptografia de arquivos digitais conforme necessidades de segurança do usuário.",
          "Configura autoridade certificadora em sistemas operacionais de redes conforme o ambiente.",
          "Instala certificados digitais em sistemas operacionais, solicitando, emitindo e revogando certificados.",
        ],
        conhecimentos: [
          "Criptografia: simétrica e assimétrica, assinaturas digitais, algoritmos de hash, autenticação de terceiros.",
          "Criptografia em disco.",
          "Certificados digitais: formas de entrega, instalação e configuração de autoridade certificadora.",
          "Protocolos de autenticação.",
          "Certificados digitais em sistemas operacionais: solicitação, emissão, instalação e revogação.",
        ],
        habilidades: [
          "Comunicar-se de maneira assertiva.",
          "Interpretar textos técnicos.",
          "Mediar conflitos nas situações de trabalho.",
          "Utilizar termos técnicos nas rotinas de trabalho.",
          "Analisar as etapas do processo de trabalho.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
        ],
      },

      "UC14 — Segurança em servidores Windows e Linux": {
        qualificacao: "Assistente de Segurança em Redes de Computadores",
        cargaHoraria: "72h",
        competencia: "Planejar e implementar a segurança em servidores Windows e Linux.",
        habilidades: [
          "Elabora plano de implementação de segurança em servidores Windows e Linux conforme necessidades do cliente.",
          "Instala e configura segurança do servidor Linux conforme especificações e política de segurança.",
          "Instala e configura segurança do servidor Windows conforme especificações e política de segurança.",
          "Configura ferramentas de monitoramento de redes conforme especificações dos fabricantes.",
          "Documenta topologia, ativos de redes e configurações de segurança conforme política do ambiente.",
        ],
        conhecimentos: [
          "Sistema operacional de redes: instalação Linux e Windows Server para configuração de redes locais.",
          "Arquiteturas de redes: conceitos, topologias LAN, MAN e WAN, gestão de redes e serviços.",
          "Tríade CIA: confidencialidade, integridade e disponibilidade, segurança física e lógica, RAID.",
          "Principais ataques a servidores: TCP SYN Flood, IP Spoofing, TCP Hijacking, DoS, DDoS, DNS Spoofing.",
          "Ataques: ICMP, MAC Spoofing, Smurf, Fraggle, Ping of Death, Stack Smashing, Adware, Spyware.",
          "Tecnologias de segurança: firewall, NAT, Proxy, IDS, HIDS, NIDS e IPS para Linux e Windows.",
          "Configurações baseadas em política de segurança: comandos de manipulação, protocolos TCP/IP, IPSEC.",
          "Protocolos: Kerberos, IPv6, HTTPS, TLS/SSL, DNS, DHCP, vulnerabilidades nos protocolos.",
          "Virtualização Windows Server: GPO, quotas, Active Directory, permissões NTFS, backup.",
        ],
        habilidades: [
          "Comunicar-se de maneira assertiva.",
          "Identificar as etapas do trabalho.",
          "Analisar as etapas do trabalho.",
          "Elaborar documentos técnicos de segurança da informação.",
          "Selecionar informações necessárias ao desenvolvimento do trabalho.",
          "Mediar conflitos nas situações de trabalho.",
          "Elaborar diagnóstico de redes de computadores.",
          "Utilizar termos técnicos nas rotinas de trabalho.",
        ],
      },

      "UC15 — Gerenciamento de projetos e governança de TI": {
        qualificacao: "Assistente de Segurança em Redes de Computadores",
        cargaHoraria: "36h",
        competencia: "Implantar etapas de gerenciamento de projetos e governança de processos em TI.",
        habilidades: [
          "Elabora documentação de projetos conforme regras de negócio da organização.",
          "Executa governança de processos em TI conforme a metodologia utilizada.",
          "Elabora métricas conforme as regras de negócio da organização.",
          "Aplica técnicas e ferramentas de gestão conforme metodologia de gerenciamento utilizada.",
        ],
        conhecimentos: [
          "ITIL: gerenciamento de serviços, ciclo de vida do serviço, estratégia, transição, operação e MCS.",
          "COBIT: evolução, modelo de governança e gestão, benefícios, inter-relacionamento com outros modelos.",
          "GREEN IT: práticas verdes, ações para componentes de TI e ações organizacionais.",
          "Estratégias de TI: gerenciamento de chamados, qualidade de serviço, alinhamento ao negócio.",
          "Ferramentas para planejamento, gerenciamento e análise de projetos: características e tipos.",
        ],
        habilidades: [
          "Utilizar ferramentas de gerenciamento de projetos.",
          "Implementar práticas da governança de processos.",
          "Utilizar métricas para acompanhamento dos processos administrativos em TI.",
          "Comunicar-se de maneira assertiva.",
          "Elaborar documentos técnicos de segurança da informação.",
          "Mediar conflitos nas situações de trabalho.",
          "Utilizar termos técnicos nas rotinas de trabalho.",
        ],
      },
    },
  },

  // ── Slot vazio para outras instituições ──
  "PERSONALIZADO": {
    label: "Personalizado — outra instituição ou curso",
    area: "",
    subarea: "",
    cargaHoraria: "",
    ucs: {},
  },
};

// ═══════════════════════════════════════════════════════════════
//  SYSTEM PROMPT — Regras metodológicas do agente
// ═══════════════════════════════════════════════════════════════
const buildSystemPrompt = (banco, area) => `Você é um elaborador especialista em itens avaliativos com domínio da metodologia Cebraspe e da Taxonomia de Bloom revisada. Sua função é criar itens técnicos para banco de itens de ${area || "cursos técnicos profissionalizantes"}.

FUNDAMENTOS METODOLÓGICOS:
- Todo item deve nascer da habilidade/indicador previsto na ficha avaliativa.
- A tríade obrigatória do item é: situação-estímulo + comando + alternativas.
- Cada item deve avaliar apenas uma habilidade.
- A dificuldade deve vir da tarefa cognitiva, não de ambiguidade ou pegadinha.
- As alternativas devem ser homogêneas e os distratores plausíveis.

REGRA CRÍTICA — DEPENDÊNCIA CONTEXTO × COMANDO:
- A situação-estímulo CRIA o problema; o comando APENAS direciona a ação.
- Sem o contexto, o aluno NÃO deve conseguir resolver corretamente.
- Se o comando puder ser respondido sozinho, é AUTOSSUFICIENTE e deve ser reescrito.
- O comando deve retomar explicitamente elementos do contexto.

REGRAS OBRIGATÓRIAS:
1. Comece sempre pela habilidade/indicador da ficha.
2. Produza situação-estímulo objetiva, profissional, funcional e necessária.
3. O comando deve ser complemento direto da situação-estímulo.
4. Sem a situação-estímulo, o comando não permite resolver a questão.
5. Evite comando autossuficiente.
6. Cada item avalia apenas uma habilidade.
7. Alternativas homogêneas, mesmo domínio conceitual, sem pistas linguísticas.
8. Distratores representam erros técnicos reais e plausíveis.
9. Dificuldade vem da tarefa cognitiva.
10. Justificativa técnica explica a correta e cada distrator, citando normas quando aplicável.
11. Respeite rigorosamente todos os dados da ficha.

RETORNE APENAS UM JSON VÁLIDO, SEM MARKDOWN, SEM TEXTO EXTRA:
{"analise":"texto da análise metodológica","situacao":"texto da situação-estímulo","comando":"texto do comando","alternativas":{"A":"texto","B":"texto","C":"texto","D":"texto"},"gabarito":"A","justificativas":{"A":"justificativa","B":"justificativa","C":"justificativa","D":"justificativa"},"bloom_nivel":"Aplicar","bloom_processo":"Executar","bloom_conhecimento":"Procedimental","validacao":{"contexto_funcional":true,"comando_depende_contexto":true,"sem_contexto_perde_sentido":true,"comando_retoma_elementos":true,"alternativas_mesmo_universo":true,"correta_nao_obvia":true,"distratores_plausiveis":true,"justificativa_sustentada":true}}`;

const bloomLevels = ["Lembrar", "Compreender", "Aplicar", "Analisar", "Avaliar", "Criar"];
const difficulties = ["Fácil", "Médio", "Difícil"];
const STORAGE_KEY = "elaborador-itens-v7";

export default function App() {
  // ── Dados institucionais (flexíveis) ──
  const [bancoSel, setBancoSel] = useState("SENAC_SP_REDES");
  const [areaCustom, setAreaCustom] = useState("");
  const [bancoCustom, setBancoCustom] = useState("");

  // ── Ficha do item ──
  const [nome, setNome] = useState("");
  const [fichaId, setFichaId] = useState("");
  const [prazoEntrega, setPrazoEntrega] = useState(() => {
    const d = new Date(); d.setDate(d.getDate() + 6);
    return d.toISOString().split("T")[0];
  });
  const [ucSel, setUcSel] = useState("");
  const [habSel, setHabSel] = useState("");
  const [habCustom, setHabCustom] = useState("");
  const [conhecSel, setConhecSel] = useState("");
  const [bloom, setBloom] = useState("Aplicar");
  const [dificuldade, setDificuldade] = useState("Médio");
  const [extra, setExtra] = useState("");

  // ── Estado geral ──
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [view, setView] = useState("form");
  const [errMsg, setErrMsg] = useState("");

  // ── Derivados ──
  const bancoAtual = BANCOS_FICHAS[bancoSel];
  const ucAtual = ucSel && bancoAtual?.ucs?.[ucSel] ? bancoAtual.ucs[ucSel] : null;
  const habilidades = ucAtual?.habilidades || [];
  const conhecimentos = ucAtual?.conhecimentos || [];
  const areaExibida = bancoAtual?.area || areaCustom || "";
  const bancoExibido = bancoSel === "PERSONALIZADO" ? bancoCustom : bancoAtual?.label || "";

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get(STORAGE_KEY);
        if (r?.value) setHistorico(JSON.parse(r.value));
      } catch {}
    })();
  }, []);

  const salvar = async (novo) => {
    const lista = [novo, ...historico].slice(0, 50);
    setHistorico(lista);
    try { await window.storage.set(STORAGE_KEY, JSON.stringify(lista)); } catch {}
  };

  const gerar = async () => {
    const hab = habCustom.trim() || habSel;
    if (!hab) { alert("Selecione ou escreva um indicador/habilidade."); return; }
    setLoading(true); setItem(null); setErrMsg(""); setView("resultado");

    const userMsg = `Ficha do Item:
- Banco: ${bancoExibido}
- Área: ${areaExibida}
- Elaborador: ${nome || "Não informado"}
- ID da Ficha: ${fichaId || "AUTO"}
- Prazo de Entrega: ${prazoEntrega}
- Unidade Curricular / Componente: ${ucSel || "Não especificado"}
- Qualificação / Módulo: ${ucAtual?.qualificacao || "Não especificado"}
- Competência: ${ucAtual?.competencia || "Não especificada"}
- Habilidade: ${hab}
- Conhecimento relacionado: ${conhecSel || "Conforme indicador"}
- Nível Bloom: ${bloom}
- Dificuldade: ${dificuldade}
${extra ? `- Instruções adicionais: ${extra}` : ""}

Elabore um item completo seguindo todas as regras. Retorne APENAS JSON válido.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 4000,
          system: buildSystemPrompt(bancoExibido, areaExibida),
          messages: [{ role: "user", content: userMsg }],
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      const raw = (data.content || []).map((b) => b.text || "").join("").trim();
      if (!raw) throw new Error("Resposta vazia da API.");
      const clean = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
      const parsed = JSON.parse(clean);
      const entry = {
        fichaId: fichaId || `AUTO_${Date.now()}`,
        nome, banco: bancoExibido, area: areaExibida,
        prazoEntrega, uc: ucSel, qualificacao: ucAtual?.qualificacao || "",
        competencia: ucAtual?.competencia || "",
        hab, bloom, dificuldade, conhecimento: conhecSel,
        item: parsed, data: new Date().toLocaleString("pt-BR"),
      };
      setItem(entry);
      await salvar(entry);
    } catch (e) {
      setErrMsg(e.message || "Erro desconhecido.");
      setItem({ error: true });
    }
    setLoading(false);
  };

  const baixar = (entry) => {
    try {
      const it = entry?.item;
      if (!it || entry.error) { alert("Item inválido para download."); return; }
      const dl = entry.dificuldade === "Fácil"
        ? "(X) Fácil &nbsp; ( ) Média &nbsp; ( ) Difícil"
        : entry.dificuldade === "Médio"
        ? "( ) Fácil &nbsp; (X) Média &nbsp; ( ) Difícil"
        : "( ) Fácil &nbsp; ( ) Média &nbsp; (X) Difícil";
      const v = (x) => (x ? "✓" : "✗");
      const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"/>
<title>Ficha ${entry.fichaId}</title>
<style>
body{font-family:Arial,sans-serif;font-size:11.5pt;margin:28px 38px;color:#000}
h1{text-align:center;font-size:14pt;margin-bottom:3px}
.sub{text-align:center;font-size:9pt;color:#444;margin-bottom:18px}
table{width:100%;border-collapse:collapse;margin-bottom:13px}
td,th{border:1px solid #000;padding:5px 9px;vertical-align:top}
th{background:#f0f0f0;font-weight:bold;width:30%}
.sec{font-weight:bold;margin:13px 0 5px;border-bottom:1.5px solid #000;padding-bottom:2px}
.alt{margin:4px 0 4px 10px}
.just{margin:5px 0 5px 10px;font-size:10.5pt}
.vg{display:grid;grid-template-columns:1fr 1fr;gap:3px 14px;margin:5px 0;font-size:10.5pt}
.footer{margin-top:26px;font-size:8.5pt;color:#666;text-align:center;border-top:1px solid #ccc;padding-top:7px}
@media print{body{margin:14px 18px}}
</style></head><body>
<h1>FICHA AVALIATIVA — ELABORAÇÃO DE ITEM</h1>
<div class="sub">${entry.banco || "Banco de Itens"} &nbsp;|&nbsp; Área: ${entry.area || "—"}</div>
<table>
<tr><th>Data de elaboração</th><td>${new Date().toLocaleDateString("pt-BR")}</td></tr>
<tr><th>Prazo de entrega</th><td>${entry.prazoEntrega || "—"}</td></tr>
<tr><th>Elaborador</th><td>${entry.nome || "—"}</td></tr>
<tr><th>ID da Ficha</th><td>${entry.fichaId}</td></tr>
<tr><th>Unidade Curricular / Componente</th><td>${entry.uc || "—"}</td></tr>
<tr><th>Qualificação / Módulo</th><td>${entry.qualificacao || "—"}</td></tr>
<tr><th>Competência</th><td>${entry.competencia || "—"}</td></tr>
<tr><th>Habilidade avaliada</th><td>${entry.hab}</td></tr>
<tr><th>Conhecimento relacionado</th><td>${entry.conhecimento || "Conforme indicador"}</td></tr>
<tr><th>Tipo do item</th><td>Múltipla Escolha — 4 opções</td></tr>
<tr><th>Nível Bloom</th><td>${it.bloom_nivel || entry.bloom}</td></tr>
<tr><th>Processo cognitivo</th><td>${it.bloom_processo || "—"}</td></tr>
<tr><th>Tipo de conhecimento</th><td>${it.bloom_conhecimento || "—"}</td></tr>
<tr><th>Dificuldade do item</th><td>${dl}</td></tr>
</table>
<div class="sec">Análise Metodológica</div><p>${it.analise || "—"}</p>
<div class="sec">Situação-Estímulo (Contexto)</div><p>${it.situacao || "—"}</p>
<div class="sec">Comando</div><p><strong>${it.comando || "—"}</strong></p>
<div class="sec">Alternativas</div>
<div class="alt"><b>A)</b> ${it.alternativas?.A || "—"}</div>
<div class="alt"><b>B)</b> ${it.alternativas?.B || "—"}</div>
<div class="alt"><b>C)</b> ${it.alternativas?.C || "—"}</div>
<div class="alt"><b>D)</b> ${it.alternativas?.D || "—"}</div>
<div class="sec">Gabarito</div><p><strong>Alternativa correta: ${it.gabarito || "—"}</strong></p>
<div class="sec">Justificativa Técnica</div>
<div class="just"><b>A)</b> ${it.justificativas?.A || "—"}</div>
<div class="just"><b>B)</b> ${it.justificativas?.B || "—"}</div>
<div class="just"><b>C)</b> ${it.justificativas?.C || "—"}</div>
<div class="just"><b>D)</b> ${it.justificativas?.D || "—"}</div>
<div class="sec">Classificação Bloom</div>
<table><tr><th>Nível</th><td>${it.bloom_nivel || "—"}</td></tr>
<tr><th>Processo cognitivo</th><td>${it.bloom_processo || "—"}</td></tr>
<tr><th>Tipo de conhecimento</th><td>${it.bloom_conhecimento || "—"}</td></tr></table>
<div class="sec">Validação Metodológica</div>
<div class="vg">
<div>${v(it.validacao?.contexto_funcional)} Contexto enxuto e funcional</div>
<div>${v(it.validacao?.alternativas_mesmo_universo)} Alternativas mesmo universo técnico</div>
<div>${v(it.validacao?.comando_depende_contexto)} Comando depende do contexto</div>
<div>${v(it.validacao?.correta_nao_obvia)} Correta não óbvia por eliminação</div>
<div>${v(it.validacao?.sem_contexto_perde_sentido)} Sem contexto, comando perde sentido</div>
<div>${v(it.validacao?.distratores_plausiveis)} Distratores plausíveis</div>
<div>${v(it.validacao?.comando_retoma_elementos)} Comando retoma elementos do contexto</div>
<div>${v(it.validacao?.justificativa_sustentada)} Justificativa tecnicamente sustentada</div>
</div>
<div class="footer">
Elaborador de Itens &nbsp;|&nbsp; ${entry.banco || "Banco de Itens"} &nbsp;|&nbsp; ${new Date().toLocaleString("pt-BR")}<br/>
Criado por <strong>Paulo Filho</strong> – 2026 &nbsp;·&nbsp; paulosilvafilhoba@gmail.com
</div>
</body></html>`;
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Ficha_${entry.fichaId}_${Date.now()}.html`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 300);
    } catch (e) { alert("Erro ao gerar arquivo: " + e.message); }
  };

  // ── Helpers de estilo ──
  const Lbl = ({ c, req }) => (
    <div style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
      {c} {req && <span style={{ color: "#ef4444" }}>*</span>}
    </div>
  );
  const Sec = ({ t }) => (
    <div style={{ fontWeight: 700, fontSize: 10, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.07em", borderBottom: "2px solid #e0e7ff", paddingBottom: 4, margin: "16px 0 8px" }}>{t}</div>
  );
  const inp = { border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 11px", fontSize: 13, width: "100%", boxSizing: "border-box", background: "#fff" };
  const sel = { ...inp, background: "#fff" };

  const Card = ({ entry, sd = true }) => {
    const it = entry?.item;
    if (!it || entry.error) return (
      <div style={{ padding: 16 }}>
        <div style={{ color: "#ef4444", fontWeight: 700, marginBottom: 8 }}>❌ Erro ao gerar o item.</div>
        {errMsg && (
          <details style={{ marginTop: 8 }}>
            <summary style={{ cursor: "pointer", fontSize: 12, color: "#64748b" }}>Ver detalhes técnicos</summary>
            <pre style={{ fontSize: 11, background: "#fef2f2", padding: 10, borderRadius: 6, whiteSpace: "pre-wrap", wordBreak: "break-all", color: "#991b1b", marginTop: 6 }}>{errMsg}</pre>
          </details>
        )}
        <div style={{ marginTop: 10, fontSize: 12, color: "#64748b", background: "#f8fafc", padding: "8px 12px", borderRadius: 8 }}>💡 Volte ao formulário e tente novamente.</div>
      </div>
    );
    const vc = (v) => v
      ? <span style={{ color: "#16a34a", fontWeight: 700, marginRight: 4 }}>✓</span>
      : <span style={{ color: "#ef4444", fontWeight: 700, marginRight: 4 }}>✗</span>;
    return (
      <div style={{ fontSize: 13, lineHeight: 1.75, color: "#1e293b" }}>
        {sd && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
            <button onClick={() => baixar(entry)} style={{ padding: "8px 18px", background: "#0f766e", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>⬇ Baixar Ficha (HTML)</button>
          </div>
        )}
        <Sec t="Análise Metodológica" />
        <p style={{ background: "#f8fafc", padding: "10px 14px", borderRadius: 8, borderLeft: "3px solid #6366f1", margin: 0 }}>{it.analise}</p>
        <Sec t="Situação-Estímulo" />
        <p style={{ background: "#f0fdf4", padding: "10px 14px", borderRadius: 8, borderLeft: "3px solid #22c55e", margin: 0 }}>{it.situacao}</p>
        <Sec t="Comando" />
        <p style={{ background: "#fefce8", padding: "10px 14px", borderRadius: 8, borderLeft: "3px solid #eab308", fontWeight: 600, margin: 0 }}>{it.comando}</p>
        <Sec t="Alternativas" />
        {["A", "B", "C", "D"].map((l) => (
          <div key={l} style={{ margin: "5px 0", padding: "8px 12px", borderRadius: 8, border: `1px solid ${it.gabarito === l ? "#bbf7d0" : "#f1f5f9"}`, background: it.gabarito === l ? "#f0fdf4" : "#fafafa", display: "flex", gap: 8, alignItems: "flex-start" }}>
            <strong style={{ color: it.gabarito === l ? "#16a34a" : "#64748b", minWidth: 18 }}>{l})</strong>
            <span style={{ flex: 1 }}>{it.alternativas?.[l]}</span>
            {it.gabarito === l && <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 700, whiteSpace: "nowrap" }}>✓ CORRETA</span>}
          </div>
        ))}
        <Sec t="Justificativa Técnica" />
        {["A", "B", "C", "D"].map((l) => (
          <div key={l} style={{ margin: "5px 0", padding: "8px 12px", borderRadius: 8, background: "#f8fafc", fontSize: 12 }}>
            <strong style={{ color: "#475569" }}>{l})</strong> {it.justificativas?.[l]}
          </div>
        ))}
        <Sec t="Classificação Bloom" />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[["Nível", "bloom_nivel"], ["Processo", "bloom_processo"], ["Conhecimento", "bloom_conhecimento"]].map(([lb, k]) => (
            <div key={k} style={{ background: "#eef2ff", borderRadius: 8, padding: "6px 14px", fontSize: 12 }}>
              <span style={{ color: "#6366f1", fontWeight: 700 }}>{lb}:</span> <span style={{ color: "#312e81" }}>{it[k]}</span>
            </div>
          ))}
        </div>
        <Sec t="Validação Metodológica (Cebraspe)" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 12px" }}>
          {[
            ["contexto_funcional", "Contexto funcional"],
            ["comando_depende_contexto", "Comando depende do contexto"],
            ["sem_contexto_perde_sentido", "Sem contexto perde sentido"],
            ["comando_retoma_elementos", "Comando retoma elementos"],
            ["alternativas_mesmo_universo", "Alternativas mesmo universo"],
            ["correta_nao_obvia", "Correta não óbvia"],
            ["distratores_plausiveis", "Distratores plausíveis"],
            ["justificativa_sustentada", "Justificativa sustentada"],
          ].map(([k, lb]) => (
            <div key={k} style={{ display: "flex", alignItems: "center", fontSize: 12, background: "#f8fafc", padding: "4px 8px", borderRadius: 6 }}>
              {vc(it.validacao?.[k])}{lb}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'Segoe UI',system-ui,sans-serif", background: "#f1f5f9", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg,#1e293b,#0f172a)", padding: "13px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 8px rgba(0,0,0,.3)" }}>
        <div>
          <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 16 }}>📋 Elaborador de Itens</div>
          <div style={{ color: "#64748b", fontSize: 10, marginTop: 1 }}>Metodologia Cebraspe · Taxonomia de Bloom · Multi-institucional</div>
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          {[["form", "✏️ Novo"], ["resultado", "📄 Resultado"], ["historico", `🗂 Histórico (${historico.length})`]].map(([v, label]) => (
            <button key={v} onClick={() => setView(v)} style={{ padding: "6px 12px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 10, fontWeight: 600, background: view === v ? "#6366f1" : "transparent", color: view === v ? "#fff" : "#94a3b8", boxShadow: view === v ? "0 0 0 2px #818cf8" : "none" }}>{label}</button>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "22px 14px", flex: 1, width: "100%", boxSizing: "border-box" }}>

        {/* ── FORM ── */}
        {view === "form" && (
          <div style={{ background: "#fff", borderRadius: 16, padding: 26, boxShadow: "0 1px 6px rgba(0,0,0,.07)" }}>
            <h2 style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", marginBottom: 20, paddingBottom: 10, borderBottom: "2px solid #f1f5f9" }}>📝 Ficha do Item</h2>

            {/* BLOCO 1 — Dados Institucionais */}
            <div style={{ background: "#f8fafc", borderRadius: 10, padding: "14px 16px", marginBottom: 18, border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>🏛 Identificação Institucional</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div>
                  <Lbl c="Banco / Instituição" />
                  <select value={bancoSel} onChange={e => { setBancoSel(e.target.value); setUcSel(""); setHabSel(""); setConhecSel(""); setHabCustom(""); }} style={sel}>
                    {Object.entries(BANCOS_FICHAS).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Lbl c="Área (editável)" />
                  <input value={bancoSel !== "PERSONALIZADO" ? (BANCOS_FICHAS[bancoSel]?.area || "") : areaCustom}
                    onChange={e => setAreaCustom(e.target.value)}
                    readOnly={bancoSel !== "PERSONALIZADO"}
                    placeholder="Ex: Tecnologia da Informação"
                    style={{ ...inp, background: bancoSel !== "PERSONALIZADO" ? "#f1f5f9" : "#fff", color: "#475569" }} />
                </div>
              </div>
              {bancoSel === "PERSONALIZADO" && (
                <div style={{ marginBottom: 12 }}>
                  <Lbl c="Nome do banco / instituição" />
                  <input value={bancoCustom} onChange={e => setBancoCustom(e.target.value)} placeholder="Ex: SENAI MG — Técnico em Informática" style={inp} />
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <Lbl c="Subárea / Segmento" />
                  <input value={bancoSel !== "PERSONALIZADO" ? (BANCOS_FICHAS[bancoSel]?.subarea || "") : ""}
                    readOnly={bancoSel !== "PERSONALIZADO"}
                    placeholder="Ex: Redes e Infraestrutura"
                    style={{ ...inp, background: bancoSel !== "PERSONALIZADO" ? "#f1f5f9" : "#fff", color: "#475569" }} />
                </div>
                <div>
                  <Lbl c="Carga Horária do Curso" />
                  <input value={bancoSel !== "PERSONALIZADO" ? (BANCOS_FICHAS[bancoSel]?.cargaHoraria || "") : ""}
                    readOnly={bancoSel !== "PERSONALIZADO"}
                    placeholder="Ex: 1000h"
                    style={{ ...inp, background: bancoSel !== "PERSONALIZADO" ? "#f1f5f9" : "#fff", color: "#475569" }} />
                </div>
              </div>
            </div>

            {/* BLOCO 2 — Identificação do elaborador */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 16 }}>
              <div>
                <Lbl c="Nome do elaborador" />
                <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Ex: Paulo da Silva Filho" style={inp} />
              </div>
              <div>
                <Lbl c="ID da Ficha" />
                <input value={fichaId} onChange={e => setFichaId(e.target.value)} placeholder="Ex: REDES_ENT_013" style={inp} />
              </div>
              <div>
                <Lbl c="Prazo de entrega" />
                <input type="date" value={prazoEntrega} onChange={e => setPrazoEntrega(e.target.value)} style={inp} />
              </div>
            </div>

            {/* BLOCO 3 — Componentes Curriculares */}
            <div style={{ fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>📚 Componentes Curriculares</div>

            <div style={{ marginBottom: 14 }}>
              <Lbl c="Unidade Curricular / Componente" req />
              {bancoSel !== "PERSONALIZADO" ? (
                <select value={ucSel} onChange={e => { setUcSel(e.target.value); setHabSel(""); setConhecSel(""); setHabCustom(""); }} style={sel}>
                  <option value="">Selecione uma UC ou componente curricular...</option>
                  {Object.keys(bancoAtual?.ucs || {}).map(k => (
                    <option key={k} value={k}>{k} — {bancoAtual.ucs[k].cargaHoraria}</option>
                  ))}
                </select>
              ) : (
                <input value={ucSel} onChange={e => setUcSel(e.target.value)} placeholder="Ex: Fundamentos de Redes de Computadores" style={inp} />
              )}
            </div>

            {ucAtual && (
              <>
                <div style={{ marginBottom: 14, background: "#eff6ff", borderRadius: 10, padding: "10px 14px", fontSize: 11, color: "#1d4ed8", borderLeft: "3px solid #3b82f6" }}>
                  <strong>Qualificação:</strong> {ucAtual.qualificacao}<br />
                  <strong>Competência:</strong> {ucAtual.competencia}
                </div>
              </>
            )}

            <div style={{ marginBottom: 14 }}>
              <Lbl c="Habilidade a avaliar" req />
              {habilidades.length > 0 && (
                <select value={habSel} onChange={e => setHabSel(e.target.value)} style={{ ...sel, marginBottom: 8 }}>
                  <option value="">— Selecione uma habilidade da UC —</option>
                  {habilidades.map((h, i) => <option key={i} value={h}>{h}</option>)}
                </select>
              )}
              <input value={habCustom} onChange={e => setHabCustom(e.target.value)}
                placeholder={habilidades.length ? "Ou escreva uma habilidade personalizada..." : "Escreva a habilidade a ser avaliada..."}
                style={inp} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <Lbl c="Conhecimento relacionado" />
              {conhecimentos.length > 0 ? (
                <select value={conhecSel} onChange={e => setConhecSel(e.target.value)} style={sel}>
                  <option value="">— Selecione um conhecimento (opcional) —</option>
                  {conhecimentos.map((c, i) => <option key={i} value={c}>{c}</option>)}
                </select>
              ) : (
                <input value={conhecSel} onChange={e => setConhecSel(e.target.value)} placeholder="Ex: Protocolos TCP/IP, normas TIA/EIA, ITIL..." style={inp} />
              )}
            </div>

            {/* BLOCO 4 — Parâmetros do item */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <Lbl c="Nível Bloom" />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {bloomLevels.map((b, i) => (
                    <button key={b} onClick={() => setBloom(b)} style={{ padding: "4px 10px", borderRadius: 20, border: `1.5px solid ${bloom === b ? "#6366f1" : "#e2e8f0"}`, fontSize: 11, fontWeight: 600, cursor: "pointer", background: bloom === b ? "#eef2ff" : "#fff", color: bloom === b ? "#6366f1" : "#64748b" }}>
                      {i + 1}. {b}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <Lbl c="Dificuldade" />
                <div style={{ display: "flex", gap: 8 }}>
                  {difficulties.map(d => (
                    <button key={d} onClick={() => setDificuldade(d)} style={{ flex: 1, padding: "8px 0", borderRadius: 8, border: `1.5px solid ${dificuldade === d ? "#6366f1" : "#e2e8f0"}`, fontSize: 12, fontWeight: 600, cursor: "pointer", background: dificuldade === d ? "#eef2ff" : "#fff", color: dificuldade === d ? "#6366f1" : "#64748b" }}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 22 }}>
              <Lbl c="Instruções adicionais (opcional)" />
              <textarea value={extra} onChange={e => setExtra(e.target.value)} rows={2}
                placeholder="Cenário específico, restrições, foco desejado no item..."
                style={{ ...inp, resize: "vertical" }} />
            </div>

            <button onClick={gerar} style={{ width: "100%", padding: "13px 0", background: "linear-gradient(135deg,#6366f1,#4f46e5)", color: "#fff", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(99,102,241,.4)" }}>
              ✦ Gerar Item com IA
            </button>
          </div>
        )}

        {/* ── RESULTADO ── */}
        {view === "resultado" && (
          <div>
            <button onClick={() => setView("form")} style={{ marginBottom: 14, background: "none", border: "none", color: "#6366f1", fontWeight: 600, fontSize: 13, cursor: "pointer", padding: 0 }}>← Novo Item</button>
            <div style={{ background: "#fff", borderRadius: 16, padding: 26, boxShadow: "0 1px 6px rgba(0,0,0,.07)" }}>
              {loading ? (
                <div style={{ textAlign: "center", padding: "52px 0", color: "#64748b" }}>
                  <div style={{ fontSize: 34, marginBottom: 12 }}>⚙️</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>Elaborando item...</div>
                  <div style={{ fontSize: 11, marginTop: 6 }}>Aplicando regras Cebraspe · Bloom · Validação metodológica</div>
                </div>
              ) : item && <Card entry={item} />}
            </div>
          </div>
        )}

        {/* ── HISTÓRICO ── */}
        {view === "historico" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", margin: 0 }}>🗂 Histórico de Itens</h2>
              {historico.length > 0 && <span style={{ fontSize: 11, color: "#94a3b8" }}>{historico.length} item(ns) salvos</span>}
            </div>
            {historico.length === 0 ? (
              <div style={{ textAlign: "center", padding: "52px 0", color: "#94a3b8", background: "#fff", borderRadius: 16 }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>📭</div>Nenhum item gerado ainda.
              </div>
            ) : historico.map((h, i) => (
              <details key={i} style={{ background: "#fff", borderRadius: 12, padding: "12px 16px", marginBottom: 10, boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
                <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 12, color: "#1e293b", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, minWidth: 0, overflow: "hidden" }}>
                    <span style={{ fontSize: 9, background: "#f0fdf4", color: "#15803d", padding: "2px 6px", borderRadius: 8, whiteSpace: "nowrap" }}>{h.fichaId}</span>
                    {h.banco && <span style={{ fontSize: 9, background: "#fef3c7", color: "#92400e", padding: "2px 6px", borderRadius: 8, whiteSpace: "nowrap" }}>{h.banco.slice(0, 20)}</span>}
                    {h.uc && <span style={{ fontSize: 9, background: "#eef2ff", color: "#6366f1", padding: "2px 6px", borderRadius: 8, whiteSpace: "nowrap" }}>{h.uc.slice(0, 28)}</span>}
                    <span style={{ color: "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{h.hab?.slice(0, 48)}…</span>
                  </span>
                  <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
                    <button onClick={e => { e.preventDefault(); baixar(h); }} style={{ padding: "3px 10px", background: "#0f766e", color: "#fff", border: "none", borderRadius: 5, fontSize: 10, fontWeight: 600, cursor: "pointer" }}>⬇ Baixar</button>
                    <span style={{ fontSize: 10, color: "#94a3b8" }}>{h.data}</span>
                  </div>
                </summary>
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #f1f5f9" }}><Card entry={h} sd={false} /></div>
              </details>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div style={{ background: "#0f172a", padding: "10px 22px", textAlign: "center", borderTop: "1px solid #1e293b" }}>
        <span style={{ fontSize: 10, color: "#475569" }}>
          Criado por <strong style={{ color: "#94a3b8" }}>Paulo Filho</strong> – 2026 &nbsp;·&nbsp;
          <a href="mailto:paulosilvafilhoba@gmail.com" style={{ color: "#6366f1", textDecoration: "none" }}>paulosilvafilhoba@gmail.com</a>
        </span>
      </div>
    </div>
  );
}

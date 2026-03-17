window.COURSE_DATA = {
  curso: 'Técnico em Redes de Computadores',
  banco: 'SENAC_MG_24_ENTRADA',
  metodologia: 'Cebraspe',

  competencias: [
    { id:'C1',  texto:'Planejar e executar a instalação de redes locais de computadores.' },
    { id:'C2',  texto:'Planejar e executar a manutenção de redes locais de computadores.' },
    { id:'C3',  texto:'Planejar e executar a instalação, a configuração e o monitoramento de sistemas operacionais de redes locais (servidores).' },
    { id:'C4',  texto:'Implementar protocolos de rede em roteadores e switches.' },
    { id:'C5',  texto:'Implementar roteamento e switching.' },
    { id:'C6',  texto:'Planejar e executar a manutenção de servidores.' },
    { id:'C7',  texto:'Implementar cabeamento estruturado e telefonia IP.' },
    { id:'C8',  texto:'Implementar política de administração de redes e serviços de disponibilidade.' },
    { id:'C9',  texto:'Planejar e implementar a segurança física e lógica em redes de computadores.' },
    { id:'C10', texto:'Planejar e implementar a segurança em redes sem fio.' },
    { id:'C11', texto:'Planejar e implementar a criptografia de dados e certificados digitais.' },
    { id:'C12', texto:'Planejar e implementar a segurança em servidores Windows e Linux.' },
    { id:'C13', texto:'Implantar etapas de gerenciamento de projetos e governança de processos em TI.' }
  ],

  habilidades: [
    { id:'HAB1', texto:'Organizando o próprio trabalho de acordo com as prioridades das atividades e dos prazos.' },
    { id:'HAB2', texto:'Selecionando informações necessárias ao desenvolvimento do seu trabalho por meio de conhecimento sobre técnicas, processos e procedimentos.' },
    { id:'HAB3', texto:'Executando as atividades com qualidade, atenção e precisão.' },
    { id:'HAB4', texto:'Utilizando ferramentas e equipamentos específicos da área de redes conforme normas e procedimentos técnicos.' },
    { id:'HAB5', texto:'Identificando e solucionando problemas técnicos com base em diagnóstico sistemático.' },
    { id:'HAB6', texto:'Documentando e registrando procedimentos, configurações e resultados de forma clara e organizada.' },
    { id:'HAB7', texto:'Aplicando normas de segurança do trabalho e saúde ocupacional nas atividades técnicas.' },
    { id:'HAB8', texto:'Comunicando-se de forma clara e objetiva com equipes e usuários no ambiente profissional.' }
  ],

  conhecimentos: {
    C1:  ['CON1 – Sistema operacional: instalação para configuração de redes locais. Compartilhamento de pastas. Recursos periféricos.','CON2 – Topologias de rede: estrela, barramento, anel e malha.','CON3 – Dispositivos de rede: switch, roteador, hub, access point e placa de rede.','CON4 – Endereçamento IP: IPv4, máscara de sub-rede, gateway e DNS.','CON5 – Cabeamento estruturado: categorias de cabos, crimpagem e padrões TIA/EIA-568.'],
    C2:  ['CON6 – Diagnóstico de falhas: ferramentas ping, tracert, ipconfig e netstat.','CON7 – Manutenção preventiva e corretiva em equipamentos de rede.','CON8 – Substituição e atualização de componentes de rede.'],
    C3:  ['CON9 – Instalação e configuração de Windows Server e Linux Server.','CON10 – Serviços de rede: DNS, DHCP, servidor de arquivos e impressão.','CON11 – Monitoramento de servidores: logs, desempenho e disponibilidade.','CON12 – Virtualização: conceitos e ambientes virtualizados.'],
    C4:  ['CON13 – Modelo OSI: camadas e funções.','CON14 – Modelo TCP/IP: camadas e protocolos.','CON15 – Protocolos de rede: ARP, ICMP, TCP, UDP, HTTP, FTP, SMTP.','CON16 – Configuração básica de switches e roteadores Cisco via CLI.'],
    C5:  ['CON17 – VLANs e trunking 802.1Q.','CON18 – Roteamento estático e dinâmico: RIP, OSPF.','CON19 – STP e RSTP: prevenção de loops.','CON20 – Roteamento inter-VLAN.'],
    C6:  ['CON21 – Backup e recuperação de dados em servidores.','CON22 – Hardening e atualizações de segurança em servidores.','CON23 – Gerenciamento de usuários, grupos e permissões.'],
    C7:  ['CON24 – Normas de cabeamento: TIA/EIA-568, TIA-569, TIA-606.','CON25 – Subsistemas do cabeamento estruturado.','CON26 – VoIP: conceitos, protocolos SIP e RTP, dispositivos IP.','CON27 – QoS para voz em redes IP.'],
    C8:  ['CON28 – SNMP e monitoramento de redes.','CON29 – Alta disponibilidade: redundância, failover e balanceamento de carga.','CON30 – Gerenciamento de endereços e serviços de rede (DNS, DHCP, NTP).'],
    C9:  ['CON31 – Fundamentos de segurança da informação: tríade CIA.','CON32 – Controle de acesso físico e lógico.','CON33 – Firewalls: stateful, NGFW e ACLs.','CON34 – IDS e IPS: detecção e prevenção de intrusão.'],
    C10: ['CON35 – Padrões IEEE 802.11 e frequências.','CON36 – Protocolos de segurança Wi-Fi: WEP, WPA, WPA2, WPA3.','CON37 – Ataques a redes sem fio e contramedidas.','CON38 – Autenticação 802.1X em redes sem fio.'],
    C11: ['CON39 – Criptografia simétrica e assimétrica: AES, RSA.','CON40 – PKI: autoridades certificadoras, certificados digitais e assinatura digital.','CON41 – Protocolos seguros: HTTPS, SSH, TLS/SSL.','CON42 – VPN: conceitos, IPSec e SSL VPN.'],
    C12: ['CON43 – Hardening de Windows Server: políticas de grupo, auditoria e controle de acesso.','CON44 – Hardening de Linux: permissões, firewall (iptables/ufw) e serviços mínimos.','CON45 – Gestão de vulnerabilidades e patches em servidores.'],
    C13: ['CON46 – ITIL: gestão de incidentes, problemas, mudanças e configuração.','CON47 – Metodologias de projetos: PMBOK e metodologias ágeis.','CON48 – Governança de TI: COBIT e ISO/IEC 20000.','CON49 – Documentação técnica e relatórios de TI.']
  },

  bloomNiveis: ['Lembrar','Compreender','Aplicar','Analisar','Avaliar','Criar'],

  bloomProcessos: {
    'Lembrar':     ['Reconhecer','Recordar'],
    'Compreender': ['Interpretar','Exemplificar','Classificar','Resumir','Inferir','Comparar','Explicar'],
    'Aplicar':     ['Executar','Implementar'],
    'Analisar':    ['Diferenciar','Organizar','Atribuir'],
    'Avaliar':     ['Verificar','Criticar'],
    'Criar':       ['Gerar','Planejar','Produzir']
  },

  dimensoesConhecimento: ['Factual','Conceitual','Procedural','Metacognitivo']
};

import type {
  Commit,
  ContactCommand,
  LinkCardData,
  NavItem,
  Project,
  SkillGroup,
  Stat,
  TrainingItem,
} from "./types";

export const EMAIL = "pablomoreirasantos.hp@gmail.com";

export const navItems: NavItem[] = [
  { label: "sobre", href: "#sobre" },
  { label: "carreira", href: "#carreira" },
  { label: "projetos", href: "#projetos" },
  { label: "github", href: "#github" },
  { label: "creator", href: "#creator" },
  { label: "contato", href: "#contato", accent: true },
];

export const stats: Stat[] = [
  {
    label: "xp",
    icon: "coffee",
    iconSize: 16,
    value: "3+",
    valueSize: "xl",
    caption: "Full-Stack",
  },
  {
    label: "empresas",
    icon: "building",
    iconSize: 16,
    value: "WDA • SesaTech",
    valueSize: "md",
    caption: "Sistemas web e corporativos",
  },
  {
    label: "GITLAB & GITHUB",
    icon: "git-merge",
    iconSize: 16,
    value: "1.000+",
    valueSize: "xl",
    caption: "Contribuições em código",
  },
  {
    label: "ENTREGAS",
    icon: "zap",
    iconSize: 15,
    value: "Ágil",
    valueSize: "lg",
    caption: "Sprints e Scrum",
  },
];

export const bio: string[] = [
  "Sou **desenvolvedor Full-Stack há 3 anos com Java**. Comecei em 2024 construindo **APIs REST** para a **WDA Tecnologia**, passando por sistemas de faculdade, sistemas internos e desenvolvimento mobile de uso interno e externo",
  "Hoje, na **SesaTech**, atuo em projetos para a **TIM**, sendo responsável por definir estrutura, processos e melhorias com foco em **manutenibilidade** construindo interfaces performáticas com **Vue.js, Nuxt.js, Vuetify** e **Microsoft Azure**.",
  "Curto **código organizado** e entender o problema antes de codar. No momento, **estudando mensageria e AWS**",
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Linguagens",
    icon: "code",
    items: ["Java 11 / 17 / 21", "TypeScript", "JavaScript", "Dart"],
  },
  {
    label: "FRAMEWORKS BACKEND",
    icon: "layers",
    items: ["Spring Boot", "Spring Data JPA", "Spring Security"],
  },
  {
    label: "FRONTEND & MOBILE",
    icon: "panels",
    items: [
      "Vue.js",
      "Nuxt.js",
      "React.js",
      "Next.js",
      "Vuetify",
      "Quasar",
      "Flutter",
    ],
  },
  {
    label: "MENSAGERIA & EVENTOS",
    icon: "radio",
    iconWidth: 12,
    items: ["Apache Kafka (estudando)", "RabbitMQ (estudando)"],
  },
  {
    label: "INTEGRAÇÕES & APIS",
    icon: "plug",
    items: ["APIs RESTful", "OAuth 2.0 / JWT", "Postman", "Swagger / OpenAPI"],
  },
  {
    label: "Cloud & DevOps",
    icon: "cloud",
    items: [
      "Microsoft Azure",
      "AWS (estudando)",
      "Docker",
      "Git",
      "Azure DevOps",
    ],
  },
  {
    label: "Dados",
    icon: "database",
    items: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "ARQUITETURA & METODOLOGIAS",
    icon: "compass",
    items: ["Clean Code", "Arquitetura em Camadas", "Scrum", "Kanban"],
  },
  {
    label: "Qualidade & testes",
    icon: "flask",
    iconWidth: 13,
    items: ["JUnit", "Mockito", "Spring Test", "TDD"],
  },
];

export const training: TrainingItem[] = [
  {
    name: "Análise e Desenvolvimento de Sistemas",
    institution: "UNINASSAU",
    period: "2025 – 2027",
  },
  {
    name: "Técnico em Informática",
    institution: "EEEP Profª Luiza de Teodoro Vieira",
    period: "2022 – 2024",
  },
];

export const languages =
  "Idiomas: Português (nativo) · Inglês (leitura técnica / em evolução)";

export const commits: Commit[] = [
  {
    hash: "f8c2a1b",
    showHash: "f8c2a1b",
    period: "02/2026 – atual",
    location: "Rio de Janeiro",
    message:
      "feat(sesatech): desenvolvimento e reestruturação de sistemas internos da TIM",
    roleTitle: "Desenvolvedor Júnior",
    company: "SesaTech",
    tags: [
      "Vue.js",
      "Nuxt.js",
      "Vuetify",
      "TypeScript",
      "Java Spring",
      "Pinia",
      "Azure DevOps",
      "Scrum",
    ],
    changes: [
      "Atuo no **desenvolvimento e evolução de aplicações web** para sistemas empresariais críticos da **TIM**, focando na construção de **interfaces escaláveis, performáticas** e orientadas à experiência do usuário.",
      "Implementei melhorias de **arquitetura frontend, componentização e reutilização de código** migrando estruturas e aplicando **TypeScript**.",
      "Gerenciei o **estado global** das aplicações utilizando **Pinia**, além de estruturar **validações** e o fluxo eficiente de dados.",
      "Otimizei o carregamento e manipulação de **dados de alta complexidade** com estratégias de **cache** e **redução de requisições**, melhorando drasticamente a performance em cenários de grande volume de registros.",
      "Desenvolvi fluxos de **importação/exportação de arquivos** e **templates de e-mail corporativo** integrados ao ecossistema da operação TIM.",
      "Colaboro ativamente em ambiente ágil (**Scrum**), utilizando **Azure DevOps** para versionamento, code reviews e alinhamento técnico com equipes multidisciplinares.",
    ],
  },
  {
    hash: "7a4d9e2",
    showHash: "b53f653",
    period: "01/2024 – 02/2026",
    location: "Fortaleza",
    message:
      "feat(wda): evolução full-stack em APIs REST, Spring Boot e interfaces web/mobile",
    roleTitle: "Desenvolvedor Full-Stack Júnior",
    company: "WDA Tecnologia & Inovação",
    tags: [
      "Java 11/17",
      "Spring Boot",
      "PostgreSQL",
      "Oracle",
      "Redis",
      "Vue.js",
      "Quasar",
      "React.js",
      "Flutter",
      "Docker",
    ],
    changes: [
      "**Liderei o desenvolvimento de microsserviços** em Java com **Quarkus** e **Apache Camel** para integração de sistemas corporativos com o **Salesforce**, atendendo uma operadora de distribuição de energia elétrica do Reino Unido.",
      "Atuei em projetos de grande porte cobrindo **toda a stack frontend, backend e mobile**, com foco em evolução contínua de sistemas em produção, criação de **novas features e melhoria de performance.**",
      "Atuei como **referência técnica sênior** no projeto, conduzindo **decisões de arquitetura**, **code reviews** e **mentoria técnica** da equipe.",
      "Desenvolvi e refatorei APIs RESTful com **Java 11, Java 17 e Spring Boot**, atuando na criação de novas funcionalidades e **modernização de código legado.**",
      "Implementei **integrações orientadas a eventos** com **Apache Kafka**, processando grandes volumes de dados de clientes e casos via **Salesforce API**.",
      "Configurei **autenticação segura entre serviços** utilizando fluxos **JWT Bearer OAuth** e **OAuth 2.0** com Salesforce Connected Apps, incluindo geração de pares de chaves via **OpenSSL** e gerenciamento de tokens.",
      "Otimizei operações de **CRUD em massa** no backend, reduzindo o tempo de execução de **~2 minutos para menos de 10 segundos** utilizando reestruturação e **Redis** para cache.",
      "Construí e evoluí interfaces web utilizando **Vue.js, TypeScript e Quasar Framework** (além de React.js/Next.js), priorizando **componentização, responsividade** e experiência do usuário.",
      "Construí **rotas de integração resilientes** com **Apache Camel**, aplicando tratamento de erros, **estratégias de retry**, **processamento assíncrono via wireTap** e codificação correta de parâmetros de consulta em chamadas **HTTP/OData**.",
      "Desenvolvi novas features e refatorei componentes no **aplicativo mobile com Flutter e Dart**, com foco em arquitetura limpa e usabilidade.",
      "Implementei **testes unitários e de integração** utilizando **JUnit 5 e Mockito**, aumentando a cobertura e a confiabilidade das entregas.",
      "Realizei o **deploy e a operação** de aplicações em ambientes **OpenShift/Kubernetes**, garantindo escalabilidade e alta disponibilidade.",
      "Organizei e padronizei a **estrutura de banco de dados** (PostgreSQL e Oracle), aplicando boas práticas para leitura e escrita.",
    ],
  },
  {
    hash: "3c8e1f4",
    showHash: "9d2a7b1",
    period: "01/2024 – 12/2024",
    location: "Fortaleza",
    message:
      "feat(wda): início da jornada full-stack em sistemas de produção web, backend e mobile",
    roleTitle: "Desenvolvedor Full-Stack (Estágio)",
    company: "WDA Tecnologia & Inovação",
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Oracle",
      "Vue.js",
      "Vuetify",
      "Quasar",
      "Flutter",
      "Dart",
      "JUnit",
      "Mockito",
      "Selenium",
      "Swagger",
    ],
    changes: [
      "Atuei diretamente em **código de produção** desde o início em sistemas corporativos de grande porte, assumindo responsabilidades reais nas frentes **frontend, backend e mobile**.",
      "Contribuí na criação e refatoração de interfaces web com **Vue.js, Vuetify e Quasar**, desenvolvendo componentes, dashboards, tabelas e melhorias de fluxo e usabilidade.",
      "Apoiei a implementação de **testes automatizados com Selenium** para validação de fluxos críticos de interface e responsividade.",
      "Implementei e mantive funcionalidades backend com **Java e Spring Boot**, desenvolvendo endpoints REST para sistemas em produção.",
      "Participei de **otimizações de CRUDs em massa**, reduzindo tempos de execução de minutos para segundos.",
      "Desenvolvi **testes unitários e de integração** com **JUnit e Mockito**, além de apoiar a documentação técnica de APIs via **Swagger**.",
      "Contribuí na estruturação e padronização de bancos de dados **PostgreSQL e Oracle**, aplicando boas práticas de modelagem e nomenclatura.",
      "Participei do desenvolvimento de novas features e refatoração de componentes no **aplicativo mobile com Flutter e Dart** sob metodologia **Scrum**.",
    ],
  },
];

export const projects: Project[] = [

];

export const linkCards: LinkCardData[] = [
  {
    icon: "users",
    label: "LINKEDIN",
    title: "in/pablo-m-santos",
    description: "Conexões, artigos e trajetória profissional",
    cta: "Conectar →",
    href: "https://linkedin.com/in/pablo-m-santos",
  },
  {
    icon: "folder-git2",
    label: "GITHUB",
    title: "@Pablo-M-Santos",
    description: "Repositórios de projetos backend e full-stack",
    cta: "Explorar →",
    href: "https://github.com/Pablo-M-Santos",
  },
];

export const contactCommands: ContactCommand[] = [
  {
    command: "contact --github",
    icon: "github",
    text: "github.com/Pablo-M-Santos",
    href: "https://github.com/Pablo-M-Santos",
    external: true,
    isLink: true,
  },
  {
    command: "contact --linkedin",
    icon: "linkedin",
    text: "linkedin.com/in/pablo-m-santos",
    href: "https://linkedin.com/in/pablo-m-santos",
    external: true,
    isLink: true,
  },
  {
    command: "contact --phone",
    icon: "phone",
    text: "+55 (85) 99282-2527",
    href: "tel:+5585992822527",
  },
];

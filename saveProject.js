import admin from "firebase-admin";
import fs from "fs";
import { cover } from "three/src/extras/TextureUtils.js";

// Inicializa o Firebase Admin com a conta de serviço
const serviceAccount = JSON.parse(fs.readFileSync("../../serviceAccountKey.json", "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// === Lista de projetos ===
const projects = [
{
  title: "DayFlow",
  area: "fullstack",
  link_bg_light: "none",
  link_bg_dark: "none",
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760588478/dayflow_b4vjnh.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760589286/Captura_de_tela_de_2025-10-16_01-25-18_mdvuvu.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760589287/Captura_de_tela_de_2025-10-16_01-25-29_c7fgce.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760589288/Captura_de_tela_de_2025-10-16_01-25-43_jv3hi7.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760589290/Captura_de_tela_de_2025-10-16_01-26-06_tks0yk.png"
  ],
  description:
    "DayFlow é um app para registrar o dia a dia do usuário, marcando horários, tarefas, atividades e oferecendo insights automáticos com IA para produtividade e autoanálise.",
  color: "#3b82f6",
  date: "2024",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760588589/coverDayflow_wcfqp8.png",
  link: "https://dayflow-ai-insights-zp6d.vercel.app/",
  github: "https://github.com/Carlos-Manoel-WorkTi/dayflow",
  context:
    "Criado para auxiliar usuários a acompanhar sua rotina, o DayFlow combina registro diário de atividades, controle de agenda e insights gerados por IA, ajudando na reflexão e planejamento pessoal.",
  preview: "",
  technologies: ["React", "Firebase", "Tailwind", "Cloud Functions", "OpenAI", "TypeScript", "Auth0","IA"],
  content: [
    {
      title: "Objetivo",
      text: "O DayFlow visa permitir que o usuário registre e acompanhe sua rotina diária de forma simples, monitorando tarefas, horários e hábitos. Ele transforma registros em insights úteis, ajudando no autoconhecimento e na produtividade.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760588478/dayflow_b4vjnh.png",
    },
    {
      title: "Funcionalidades",
      text: "O app permite criar, editar e organizar tarefas e eventos na agenda diária. Cada registro pode conter hora, descrição, categoria e prioridade. Ele também oferece notificações de lembrete e permite visualizar padrões de comportamento ao longo do tempo.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760589288/Captura_de_tela_de_2025-10-16_01-25-43_jv3hi7.png",
    },
    {
      title: "Integração com IA",
      text: "Usando OpenAI, o DayFlow analisa os registros do usuário e fornece insights automáticos, como tendências de produtividade, sugestões de melhoria de hábitos, alertas de sobrecarga e recomendações de foco para aumentar a eficiência no dia a dia.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760589290/Captura_de_tela_de_2025-10-16_01-26-06_tks0yk.png",
    },
    {
      text: "Construído totalmente com React no frontend e Firebase no back-end, sem servidor dedicado. Funções de back-end são implementadas em Cloud Functions, garantindo processamento seguro e em tempo real, incluindo geração de insights por IA.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760589287/Captura_de_tela_de_2025-10-16_01-25-29_c7fgce.png",
    },
    {
      text: "Planeja-se integrar dashboards inteligentes, relatórios automáticos, recomendações personalizadas e integrações com outros apps de produtividade para que o usuário tenha uma visão completa do seu dia a dia e evolução pessoal.",
      
    }
  ]
},

 {
  title: "DuoWord",
  area: "fullstack",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591060/duoLight_ebhzku.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591062/duoDark_xstcc8.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760590919/cover_imd0kn.png",
  description:
    "DuoWord é uma plataforma interativa para aprender inglês de forma divertida e imersiva, combinando música, histórias e desafios linguísticos personalizados com recursos de gamificação e progresso em tempo real.",
  color: "cornflowerblue",
  date: "2024",
  technologies: [
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "Prisma ORM",
    "PostgreSQL",
    "NextAuth.js",
    "Vercel",
    "Zustand",
    "React Query",
    "React Hook Form",
    "OpenAI API",
    "Cloudinary"
  ],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760621940/duoword1_yzhkcr.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760621944/duoword2_vnt3uj.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760621940/duoword3_ullvr0.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760621940/duoword4_vduboa.png"
  ],
  link: "https://duoworld.vercel.app/",
  github: "https://github.com/Carlos-Manoel-WorkTi/duoworld",
  preview: "",
  context:
    "DuoWord foi criado para transformar o aprendizado de idiomas em uma experiência interativa e personalizada. O usuário aprende inglês ouvindo músicas, explorando histórias narradas e salvando palavras que encontra durante a jornada.",
  content: [
    {
      title: "Contexto",
      text: "O DuoWord nasceu da vontade de tornar o aprendizado de inglês mais natural e prazeroso, unindo entretenimento e educação. A proposta é oferecer uma plataforma que incentive a prática diária através da imersão em músicas e histórias interativas, com um sistema inteligente que salva palavras, exibe traduções e gera desafios personalizados.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760621940/duoword1_yzhkcr.png"
    },
    {
      title: "Desenvolvimento",
      text: "A aplicação foi construída com foco em performance, escalabilidade e experiência do usuário. O frontend utiliza Next.js e Tailwind CSS, com animações fluidas feitas com Framer Motion. No back-end, Prisma ORM gerencia o banco de dados PostgreSQL, e a autenticação é implementada via NextAuth.js. Foram utilizados também Zustand para gerenciamento de estado, React Query para caching e Cloudinary para otimização de imagens.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760621944/duoword2_vnt3uj.png"
    },
    {
      title: "Funcionalidades",
      text: "O DuoWord conta com sistema de login seguro, salvamento automático de palavras aprendidas, modo escuro/claro, progresso de aprendizado, reprodução de áudio com legendas sincronizadas e desafios interativos. O conteúdo se adapta ao ritmo do usuário e é enriquecido com inteligência artificial (OpenAI API) para gerar explicações e exercícios personalizados.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760621940/duoword3_ullvr0.png"
    },
    {
      title: "Resultados",
      text: "O resultado é uma aplicação envolvente e moderna, capaz de transformar o estudo do inglês em uma jornada imersiva e motivadora. A interface fluida, o design responsivo e o uso inteligente de IA tornam o DuoWord uma experiência única para quem busca aprender inglês de forma criativa e dinâmica.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760621940/duoword4_vduboa.png"
    }
  ]
  },
{
  title: "Planets Cards",
  area: "fullstack",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760590961/plLight_nk0v3l.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591059/plDark_s7rfak.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591508/cover_ckeusw.png",
  description:
    "Planets Cards é um jogo de memória interativo e educativo que desafia os jogadores a combinar pares de cartas sobre os planetas do Sistema Solar, estimulando o raciocínio, a concentração e o aprendizado de forma divertida.",
  color: "#d33030",
  date: "2024",
  technologies: [
    "JavaScript (ES6+)",
    "Bootstrap 5",
    "PHP",
    "MySQL",
    "WAMP",
    "HTML5",
    "CSS3",
    "Vercel"
  ],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591508/cover_ckeusw.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760590961/plLight_nk0v3l.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591059/plDark_s7rfak.png",
  ],
  link: "https://github.com/Carlos-Manoel-WorkTi/PlanetsCards",
  github: "https://github.com/Carlos-Manoel-WorkTi/PlanetsCards",
  preview: "",
  context:
    "Planets Cards foi desenvolvido para unir aprendizado e diversão, combinando a simplicidade de um jogo da memória com o fascínio do universo e seus planetas.",
  content: [
    {
      title: "Contexto",
      text: "O projeto nasceu com o propósito de tornar o aprendizado sobre o Sistema Solar mais interativo e acessível. O jogo estimula o raciocínio e a concentração enquanto o jogador descobre curiosidades sobre cada planeta. O design visual foi inspirado em temas espaciais vibrantes, com uma interface amigável e adaptável a qualquer dispositivo.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591508/cover_ckeusw.png"
    },
    {
      title: "Desenvolvimento",
      text: "A aplicação foi construída com JavaScript moderno (ES6+) para controlar toda a lógica de virada e comparação das cartas, combinando com Bootstrap 5 para garantir um layout limpo, responsivo e intuitivo. O back-end foi implementado em PHP, com suporte a banco de dados MySQL para registro de pontuações e estatísticas. Durante o desenvolvimento, o ambiente WAMP foi utilizado localmente, e a hospedagem foi realizada na Vercel, proporcionando velocidade e acessibilidade.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760590961/plLight_nk0v3l.png"
    },
    {
      title: "Resultados e Aprendizados",
      text: "O resultado final é um jogo funcional, educativo e visualmente atrativo, que pode ser jogado diretamente pelo navegador. O Planets Cards demonstra o equilíbrio entre design, lógica e interatividade, servindo como base para projetos futuros com foco em entretenimento educativo e gamificação."
    }
  ]
},
{
  title: "Talk Learning",
  area: "front-end",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591175/TalkLight_qurglo.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591176/TalkDark_xzh5nb.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591424/cover_qz04bd.png",
  description:
    "Talk Learning é um aplicativo web inteligente que utiliza IA para ensinar inglês por meio de conversas interativas e personalizadas. A proposta é transformar o aprendizado em uma experiência natural, envolvente e adaptada ao ritmo de cada usuário.",
  color: "#48d330",
  date: "2023",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Styled Components",
    "Vercel",
    "OpenAI API",
    "Axios"
  ],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591424/cover_qz04bd.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591176/TalkDark_xzh5nb.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591175/TalkLight_qurglo.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760623633/talklearning1_o3jsbq.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760623634/talklearning2_wvxom5.png"
  ],
  link: "https://talk-learning.vercel.app/",
  github: "https://github.com/Carlos-Manoel-WorkTi/TalkLearning",
  preview: "",
  context:
    "Talk Learning foi criado com o objetivo de modernizar o aprendizado de inglês através de uma experiência de conversação guiada por IA. O sistema simula diálogos reais e oferece feedback dinâmico, tornando o processo de aprendizado mais natural e intuitivo.",
  content: [
    {
      title: "Contexto",
      text: "O Talk Learning nasceu da ideia de que aprender inglês pode ser mais eficiente quando o aluno pratica em contextos reais de conversação. Inspirado em aplicativos de chat, o sistema oferece interações com uma inteligência artificial que compreende e responde em tempo real, ajudando o usuário a desenvolver vocabulário, fluência e compreensão auditiva. A interface foi desenhada para ser leve, acolhedora e funcional em qualquer dispositivo.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591175/TalkLight_qurglo.png"
    },
    {
      title: "Desenvolvimento",
      text: "O projeto foi construído com React e TypeScript, garantindo tipagem segura e componentes escaláveis. O estilo é gerenciado com Tailwind CSS e Styled Components, permitindo uma UI moderna e responsiva, enquanto o Framer Motion adiciona animações suaves que tornam a experiência mais fluida. A comunicação com a IA é feita via OpenAI API, e o gerenciamento de estado é realizado com Zustand. O deploy foi feito na Vercel, assegurando desempenho e estabilidade.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760623633/talklearning1_o3jsbq.png"
    },
    {
      title: "Funcionalidades",
      text: "O Talk Learning oferece recursos inteligentes como correção contextual automática, sugestões de frases, registro de progresso e alternância entre temas claro e escuro. O chat simula conversas autênticas com a IA, permitindo prática livre ou guiada. O usuário pode definir objetivos, acompanhar estatísticas e receber feedback imediato sobre erros e acertos.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760623634/talklearning2_wvxom5.png"
    },
    {
      title: "Resultados e Aprendizados",
      text: "O resultado é uma aplicação moderna e eficiente, que alia design minimalista e inteligência artificial para transformar o aprendizado de idiomas em algo prático e motivador. O Talk Learning demonstrou o potencial do React aliado à IA para criar experiências educacionais dinâmicas, e serviu como base para o desenvolvimento de futuras aplicações voltadas à educação interativa."
    }
  ]
},
{
  title: "Tec Notícias",
  area: "front-end",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591064/TecLight_bbr946.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591065/TecDark_uhesps.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591531/cover_hucoo8.png",
  description:
    "O projeto 'TEC Notícias' é um portal de notícias voltado ao universo da tecnologia, desenvolvido para entregar informações atualizadas de forma acessível, responsiva e inclusiva.",
  color: "rgb(155, 90, 229)",
  date: "2023",
  technologies: ["VLibras", "TypeScript", "BootStrap", "Vercel"],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760625741/tecnoticia1_iozwxk.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760625741/tecnoticia2_e5wkyg.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760625742/tecnoticia3_kkdjhe.png"
  ],
  link: "https://tec_noticias.vercel.app/",
  github: "https://github.com/Carlos-Manoel-WorkTi/Tec-Noticias",
  preview: "",
  context:
    "TEC Notícias foi criado com o objetivo de democratizar o acesso à informação tecnológica, trazendo notícias confiáveis e adaptadas a diferentes públicos. O projeto também busca aplicar práticas de acessibilidade e design inclusivo.",
  content: [
    {
      title: "Contexto e Objetivo",
      text: "O TEC Notícias nasceu da observação de que muitos portais de tecnologia possuem interfaces complexas e pouco acessíveis. O objetivo foi desenvolver uma plataforma intuitiva, com design limpo e fácil navegação, oferecendo conteúdo tecnológico atualizado e confiável para qualquer tipo de usuário — inclusive pessoas com deficiência visual e auditiva.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760625741/tecnoticia1_iozwxk.png"
    },
    {
      title: "Design e Acessibilidade",
      text: "A experiência do usuário foi uma prioridade desde o início. As interfaces foram criadas com base em princípios de contraste, legibilidade e hierarquia visual, garantindo uma leitura agradável em diferentes dispositivos. O projeto também integra o VLibras, que traduz o conteúdo para Libras, tornando o site acessível a pessoas surdas. Além disso, a estrutura semântica do HTML foi cuidadosamente planejada para leitores de tela.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760625741/tecnoticia2_e5wkyg.png"
    },
    {
      title: "Desenvolvimento e Tecnologias",
      text: "O front-end foi desenvolvido em TypeScript, combinando tipagem forte e organização de código para maior escalabilidade. O Bootstrap foi utilizado para um layout responsivo e consistente, e a aplicação foi hospedada na Vercel, garantindo alta performance e tempo de carregamento reduzido. Foram aplicadas boas práticas de SEO e otimização de imagens para melhorar a experiência do usuário e o desempenho geral.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760625742/tecnoticia3_kkdjhe.png"
    },
    {
      title: "Resultados e Impacto",
      text: "O projeto entregou uma experiência fluida, informativa e inclusiva, sendo bem recebido por usuários que buscavam uma alternativa moderna e acessível a sites tradicionais. O TEC Notícias consolidou-se como uma vitrine prática de boas práticas de front-end, acessibilidade e usabilidade, além de demonstrar o potencial do TypeScript e da Vercel em projetos de conteúdo dinâmico.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760625742/tecnoticia3_kkdjhe.png"
    },
    {
      title: "Próximos Passos",
      text: "As próximas versões do projeto incluirão integração com APIs de notícias em tempo real, dark mode dinâmico e recursos de personalização de temas. Também está planejada a implementação de um sistema de favoritos e histórico de leitura, aprimorando a interação do usuário com o conteúdo.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760625741/tecnoticia2_e5wkyg.png"
    }
  ]
},
{
  title: "Conversor de Moedas",
  area: "back-end",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591205/currencyConverterLight_uhv8tq.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591206/currencyConverterDark_tzyttf.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591427/cover_gyasxk.png",
  description:
    "Conversor de Moedas é uma aplicação back-end desenvolvida em Java que realiza conversões monetárias em tempo real, integrando-se à API Exchangerate para buscar as taxas de câmbio mais recentes com precisão e eficiência.",
  color: "#1abc9c",
  date: "2024",
  technologies: [
    "Java 17",
    "GSON",
    "HTTP Client",
    "Exchangerate-API",
    "Maven",
    "JSON Parsing",
    "Java Spring Boot"
  ],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591427/cover_gyasxk.png"
  ],
  link: "https://github.com/Carlos-Manoel-WorkTi/ONE-Fase-3---Especializa-o-Back-End/tree/main/desafio_conversor_de_moedas",
  github: "https://github.com/Carlos-Manoel-WorkTi/ONE-Fase-3---Especializa-o-Back-End/tree/main/desafio_conversor_de_moedas",
  preview: "",
  context:
    "O Conversor de Moedas foi criado para oferecer uma solução prática e precisa para conversões financeiras, consumindo dados atualizados de APIs externas e apresentando os resultados de forma ágil e confiável.",
  content: [
    {
      title: "Contexto",
      text: "A ideia do projeto surgiu da necessidade de realizar conversões monetárias com rapidez e exatidão, sem depender de serviços online limitados. O objetivo foi criar uma ferramenta leve e eficiente, capaz de buscar dados em tempo real e retornar valores atualizados de forma imediata."
    },
    {
      title: "Desenvolvimento",
      text: "O back-end foi desenvolvido em Java 17, utilizando o cliente HTTP nativo para realizar requisições à API Exchangerate. Os dados recebidos em formato JSON são tratados com a biblioteca GSON, permitindo parse e manipulação dos valores de forma segura e tipada. O projeto segue princípios de programação orientada a objetos, garantindo modularidade, reuso e manutenção simples. O build e a organização das dependências são gerenciados com Maven."
    },
    {
      title: "Resultados e Aprendizados",
      text: "O resultado é uma aplicação robusta e confiável, ideal para integrar em sistemas financeiros, e-commerces ou dashboards de análise econômica. Além de entregar desempenho consistente, o projeto fortaleceu o domínio sobre consumo de APIs, manipulação de dados JSON e práticas de arquitetura back-end em Java."
    }
  ]
},
{
  title: "Java Poster",
  area: "back-end",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760648054/javaPosterLight_mzdypt.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760648053/javaPosterDark_ffwd2u.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760648053/cover_ayb8ir.png",
  description:
    "Java Poster é uma aplicação back-end em Java com Spring Boot para criação de posts, gerenciamento de comentários e autenticação segura via JWT.",
  color: "#f39c12",
  date: "2024",
  technologies: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JPA / Hibernate",
    "Flyway",
    "PostgreSQL",
    "JWT",
    "Lombok"
  ],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760648053/cover_ayb8ir.png"
  ],
  link: "https://github.com/Carlos-Manoel-WorkTi/ONE-Fase-3---Especializa-o-Back-End/tree/main/Desafio_java_poster",
  github: "https://github.com/Carlos-Manoel-WorkTi/ONE-Fase-3---Especializa-o-Back-End/tree/main/Desafio_java_poster",
  preview: "",
  context:
    "Java Poster foi desenvolvido para demonstrar um back-end seguro e escalável, com autenticação JWT, controle de acesso por perfis e versionamento de banco via Flyway.",
  content: [
    {
      title: "Contexto",
      text: "A proposta do projeto foi criar uma API REST capaz de gerenciar publicações e comentários, garantindo autenticação segura e controle de acesso. A arquitetura segue o padrão MVC, assegurando modularidade e manutenção facilitada."
    },
    {
      title: "Desenvolvimento",
      text: "O back-end foi implementado em Java com Spring Boot. Spring Security e JWT foram utilizados para autenticação, Flyway para versionamento do banco e PostgreSQL como base de dados. O uso do Lombok reduziu a verbosidade e simplificou a manutenção das entidades."
    },
    {
      title: "Resultados",
      text: "O resultado é uma aplicação robusta e segura, com endpoints RESTful bem definidos e integração eficiente entre as camadas de autenticação, persistência e controle de dados."
    }
  ]
},
{
  title: "BooksJava",
  area: "back-end",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760647175/booksJavaLight_bocf2z.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760647174/booksJavaDark_iwbm4h.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760647173/cover_spuvrx.png",
  description:
    "BooksJava é uma API back-end em Java desenvolvida com Spring Boot para gerenciamento e consulta de informações de livros.",
  color: "#8e44ad",
  date: "2024",
  technologies: [
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "Jackson Databind",
    "PostgreSQL"
  ],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760647173/cover_spuvrx.png"
  ],
  link: "https://github.com/Carlos-Manoel-WorkTi/ONE-Fase-3---Especializa-o-Back-End/tree/main/desafio_java_books",
  github: "https://github.com/Carlos-Manoel-WorkTi/ONE-Fase-3---Especializa-o-Back-End/tree/main/desafio_java_books",
  preview: "",
  context:
    "BooksJava foi desenvolvido como uma API RESTful que realiza o gerenciamento completo de livros, oferecendo endpoints para cadastro, atualização, listagem e exclusão.",
  content: [
    {
      title: "Contexto",
      text: "O projeto foi criado como um desafio técnico para consolidar conhecimentos em desenvolvimento de APIs REST, boas práticas com Spring Boot e integração com banco de dados relacional."
    },
    {
      title: "Desenvolvimento",
      text: "A aplicação foi construída em Java com Spring Boot, utilizando Spring Data JPA para mapeamento objeto-relacional e Jackson Databind para manipulação de dados JSON. O PostgreSQL foi usado como banco principal, com foco em performance e consistência."
    },
    {
      title: "Resultados",
      text: "O resultado é um back-end sólido e escalável, pronto para ser consumido por aplicações frontend ou outros serviços, com endpoints bem documentados e estrutura de código limpa e modular."
    }
  ]
}
,
{
  title: "TVZ",
  area: "fullstack",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627157/tvz_hxzjhf.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627157/tvz_hxzjhf.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760626720/cover_bvg4eg.png",
  description:
    "TVZ é um aplicativo completo de streaming com canais ao vivo, conteúdos sob demanda e recursos interativos — desenvolvido em versões Web e Mobile.",
  color: "#e74c3c",
  date: "2024",
  technologies: [
    "Next.js",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "HLS.js",
    "Styled Components",
    "JWT",
    "APIs REST",
    "Vercel"
  ],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760626720/cover_bvg4eg.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627157/tvz_hxzjhf.png"
  ],
  link: "https://tv-z.vercel.app/",
  github: "https://github.com/Carlos-Manoel-WorkTi/tvZ",
  preview: "",
  context:
    "O TVZ é um sistema de streaming dividido em três módulos — Web, Mobile e API back-end — oferecendo suporte a canais de TV ao vivo, vídeos sob demanda e autenticação JWT. A versão Web está online, enquanto a versão Mobile (APK) contém recursos mais completos, otimizados para reprodução de mídia nativa.",
  content: [
    {
      title: "Contexto",
      text: "O projeto surgiu com o objetivo de criar uma plataforma de streaming versátil e multiplataforma. A versão Web foi desenvolvida em Next.js para navegadores, enquanto a versão Mobile, feita em React Native, aproveita recursos avançados de mídia e desempenho nativo. O back-end em Node.js com Express e JWT faz a ponte entre as duas aplicações, fornecendo APIs seguras e escaláveis."
    },
    {
      title: "Desenvolvimento",
      text: "O desenvolvimento do TVZ foi dividido em três partes: o frontend Web (Next.js + Styled Components), o aplicativo Mobile (React Native) e o back-end (Node.js + Express). A transmissão de vídeo utiliza HLS.js para streaming adaptativo, e o sistema de autenticação JWT garante segurança entre as requisições. A integração com APIs externas de mídia e gerenciamento de playlists torna a experiência completa e dinâmica."
    },
    {
      title: "Resultados",
      text: "O resultado é um ecossistema completo de streaming, com suporte a múltiplas plataformas e arquitetura modular. Embora a versão Web seja a única disponível publicamente, a versão Mobile entrega a experiência mais completa, com suporte nativo a formatos de mídia e melhor desempenho geral."
    }
  ]
},
{
  title: "Primeon",
  area: "frontend",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627631/primeon2_lgfgvz.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627632/primeon3_fxpmu6.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627444/cover_o0j5sk.png",
  description:
    "Primeon é uma landing page de ecommerce premium construída com React, Vite e Shadcn/UI, destacando produtos de alto padrão com navegação fluida, parallax e animações suaves.",
  color: "#8B5CF6",
  date: "2025",
  technologies: [
    "Vite",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/UI",
    "Radix UI",
    "Lucide React",
    "Framer Motion",
    "Responsive Design"
  ],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627444/cover_o0j5sk.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627630/primeon1_hhhi07.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627631/primeon2_lgfgvz.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627632/primeon3_fxpmu6.png"
  ],
  link: "https://primeon.vercel.app/",
  github: "https://github.com/Carlos-Manoel-WorkTi/Primeon",
  preview: "",
  context:
    "Primeon foi criado para oferecer uma experiência de ecommerce sofisticada, combinando design moderno, navegação intuitiva e efeitos visuais elegantes que destacam produtos premium.",
  content: [
    {
      title: "Contexto",
      text: "O projeto nasceu da ideia de construir uma landing page de ecommerce que transmitisse sofisticação, facilidade de navegação e engajamento visual, ideal para produtos de alto padrão.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627630/primeon1_hhhi07.png"
    },
    {
      title: "Desenvolvimento",
      text: "Desenvolvido com React 18 e Vite para alta performance, o projeto utiliza Tailwind CSS para estilização, Shadcn/UI e Radix UI para componentes modernos e Lucide React para ícones consistentes. Framer Motion foi integrado para animações suaves, parallax e transições de elementos.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627631/primeon2_lgfgvz.png"
    },
    {
      title: "Resultados",
      text: "O resultado é uma landing page premium, responsiva e interativa, que proporciona excelente experiência ao usuário, destacando produtos de forma elegante e atraente, adequada para estratégias de marketing de alto padrão.",
      image: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760627632/primeon3_fxpmu6.png"
    }
  ]
},
 {
  title: "GameUp",
  area: "fullstack",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633426/gameup1_jjgkeb.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633425/gameup2_rfw7qv.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591313/cover_ihfsob.png",
  description:
    "GameUp é uma plataforma de mini-games multiplayer em tempo real, com lobby interativo, partidas rápidas e suporte a diversos jogos. Atualmente, apenas um jogo foi implementado, mas a arquitetura permite expansão fácil para outros jogos.",
  color: "#e76225",
  date: "2025",
  technologies: [
    "Vite",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/UI",
    "Radix UI",
    "Zustand",
    "Zod",
    "React Query",
    "Socket.IO",
    "Express",
    "Node.js"
  ],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760591313/cover_ihfsob.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633426/gameup1_jjgkeb.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633425/gameup2_rfw7qv.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633426/gameup3_qsz4v6.png",
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633425/gameup4_lvyjzp.png"
  ],
  link: "https://gameup.onrender.com/",
  github: "https://github.com/Carlos-Manoel-WorkTi/gameup",
  preview: "",
  context:
    "GameUp foi desenvolvido como uma plataforma de mini-games multiplayer fullstack, combinando frontend Vite + React com back-end Node.js + Express + Socket.IO. A ideia é permitir que novos jogos sejam adicionados facilmente no futuro, criando uma coleção de jogos interativos e em tempo real.",
  content: [
    {
      title: "Contexto",
      text: "O projeto foi pensado como uma plataforma de mini-games para proporcionar diversão e competição em tempo real. Atualmente, apenas um jogo está implementado, mas a arquitetura permite expansão rápida para múltiplos jogos com o mesmo back-end e sistema de lobby."
    },
    {
      title: "Desenvolvimento",
      text: "O frontend utiliza Vite, React, TypeScript, Tailwind CSS e Shadcn/UI para interface moderna e responsiva. O back-end usa Node.js, Express e Socket.IO para partidas multiplayer em tempo real e gerenciamento de lobbies."
    },
    {
      title: "Resultados",
      text: "O GameUp já funciona como plataforma fullstack de mini-games, com partidas multiplayer estáveis e lobby interativo. A estrutura permite adicionar novos jogos futuramente, mantendo a integração entre frontend e back-end de forma escalável."
    }
  ]
},
{
  title: "TVZ Guide",
  area: "back-end",
  link_bg_light: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633838/cover_mtygcm.png",
  link_bg_dark: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633838/cover_mtygcm.png",
  cover: "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633838/cover_mtygcm.png",
  description:
    "TVZ Guide é uma API back-end que automatiza a captura de horários de programas de TV do dia via web scraping, disponibilizando dados estruturados para consumo externo.",
  color: "#1d72b8",
  date: "2024",
  technologies: ["Node.js", "Express", "Cheerio", "Node-Fetch"],
  images: [
    "https://res.cloudinary.com/ddchzbetg/image/upload/v1760633838/cover_mtygcm.png"
  ],
  link: "https://tvz_guide.vercel.app/",
  github: "https://github.com/Carlos-Manoel-WorkTi/tvz_guide",
  preview: "",
  context:
    "TVZ Guide foi desenvolvido como uma ferramenta back-end para coletar automaticamente a programação televisiva diária de diversos canais e disponibilizá-la em formato de API RESTful, permitindo integração com outras aplicações.",
  content: [
    {
      title: "Contexto",
      text: "O projeto surgiu da necessidade de disponibilizar dados atualizados de programação de TV de forma programática e estruturada, facilitando integração com plataformas externas ou aplicativos de streaming."
    },
    {
      title: "Desenvolvimento",
      text: "Construído com Node.js e Express, a API utiliza Cheerio para web scraping e Node-Fetch para realizar requisições externas aos sites dos canais de TV, processando e retornando os dados de forma limpa e organizada."
    },
    {
      title: "Resultados",
      text: "O resultado é uma API confiável e de fácil consumo, que fornece horários de programas de TV atualizados diariamente, pronta para integração em dashboards, apps ou outras plataformas que necessitem dessas informações."
    }
  ]
},
  {
    title: "Encontre seu GitHub",
    area: "frontend",
    link_bg_light: "/bg_project/githubFinderLight.png",
    link_bg_dark: "/bg_project/githubFinderDark.png",
    cover: "/bg_project/githubFinder/cover.png",
    description:
      "Encontre seu GitHub é uma aplicação frontend em React para adicionar e visualizar repositórios do GitHub de forma prática e intuitiva.",
    color: "#24292e",
    date: "2022",
    technologies: ["React", "JavaScript", "Node.js", "CSS", "Vite"],
    images: [
      "/bg_project/github_finder/github_finder01.png",
      "/bg_project/github_finder/github_finder02.png"
    ],
    link: "https://githubfinder.vercel.app/",
    github: "https://github.com/CarlosCavalcanti/githubfinder",
    preview: "",
    context: "O projeto foi desenvolvido para facilitar a visualização e organização de repositórios GitHub, proporcionando uma interface simples e eficiente.",
    content: [
      {
        title: "Contexto",
        text: "A ideia surgiu para criar uma ferramenta prática que permita aos usuários explorar e gerenciar repositórios do GitHub rapidamente.",
        image: "/bg_project/github_finder/context1.png"
      },
      {
        title: "Desenvolvimento",
        text: "Construído com React e Vite, utilizando JavaScript e CSS para criar uma interface responsiva e intuitiva.",
        image: "/bg_project/github_finder/dev1.png"
      },
      {
        title: "Resultados",
        text: "O resultado é uma aplicação prática e funcional, permitindo adicionar repositórios, visualizar detalhes e explorar informações de perfis GitHub facilmente.",
        image: "/bg_project/github_finder/result1.png"
      }
    ]
  },
  {
    title: "Lumo",
    area: "fullstack",
    link_bg_light: "/bg_project/AgricLight.png",
    link_bg_dark: "/bg_project/AgricDark.png",
    cover: "/bg_project/lumo/cover.png",
    description:
      "Lumo é um assistente virtual com IA generativa, oferecendo conversas naturais, produtivas e personalizadas diretamente no navegador.",
    color: "#236bd8",
    date: "2025",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenIA", "NextAuth.js", "Vercel"],
    images: [
      "/bg_project/lumo/lumo01.png",
      "/bg_project/lumo/lumo02.png"
    ],
    link: "https://lumo.vercel.app/",
    github: "https://github.com/CarlosCavalcanti/lumo",
    preview: "",
    context: "Lumo foi criado para oferecer interações inteligentes no navegador, permitindo respostas personalizadas e integração com IA generativa.",
    content: [
      {
        title: "Contexto",
        text: "O projeto visa criar um assistente virtual moderno e confiável, acessível diretamente do navegador, para melhorar a produtividade do usuário.",
        image: "/bg_project/lumo/context1.png"
      },
      {
        title: "Desenvolvimento",
        text: "Desenvolvido com Next.js e TypeScript, integrando OpenIA para processamento de linguagem natural e NextAuth.js para autenticação segura.",
        image: "/bg_project/lumo/dev1.png"
      },
      {
        title: "Resultados",
        text: "O resultado é um assistente virtual eficiente e interativo, capaz de oferecer respostas personalizadas e manter conversas naturais com os usuários.",
        image: "/bg_project/lumo/result1.png"
      }
    ]
  },
  {
    title: "Nag",
    area: "back-end",
    link_bg_light: "/bg_project/nag/bgNag.png",
    link_bg_dark: "/bg_project/nag/bgNag.png",
    cover: "/bg_project/nag/cover.png",
    description:
      "Nag é um chatbot inteligente para WhatsApp, atuando como atendente virtual e assistente multifuncional.",
    color: "#25D366",
    date: "2025",
    technologies: ["Baileys", "Flask", "TypeScript", "Python", "Selenium", "BeautifulSoup", "FFmpeg", "Node.js"],
    images: [
      "/bg_project/nag/nag01.png",
      "/bg_project/nag/nag02.png"
    ],
    link: "https://nag.vercel.app/",
    github: "https://github.com/CarlosCavalcanti/nag",
    preview: "",
    context: "Nag foi criado para automatizar interações no WhatsApp, incluindo download de mídias, geração de figurinhas e pesquisas online.",
    content: [
      {
        title: "Contexto",
        text: "O objetivo era desenvolver um chatbot multifuncional para WhatsApp, capaz de atender demandas comuns de forma automática e inteligente.",
        image: "/bg_project/nag/context1.png"
      },
      {
        title: "Desenvolvimento",
        text: "back-end em Python/Flask e Node.js, usando Baileys para WhatsApp, Selenium e BeautifulSoup para automação e coleta de dados.",
        image: "/bg_project/nag/dev1.png"
      },
      {
        title: "Resultados",
        text: "O Nag permite interação eficiente no WhatsApp, realizando tarefas diversas com rapidez e confiabilidade.",
        image: "/bg_project/nag/result1.png"
      }
    ]
  },
  {
    title: "FireBurg",
    area: "frontend",
    link_bg_light: "/bg_project/FireBurgLight.png",
    link_bg_dark: "/bg_project/FireBurgDark.png",
    cover: "/bg_project/fireBurg/cover.png",
    description:
      "FireBurg é um site moderno para divulgação de um restaurante, focado em performance e experiência do usuário.",
    color: "#E63946",
    date: "2025",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Radix UI", "React Router", "Zod"],
    images: [
      "/bg_project/fireburg/fireburg01.png",
      "/bg_project/fireburg/fireburg02.png"
    ],
    link: "https://fireburg.vercel.app/",
    github: "https://github.com/CarlosCavalcanti/fireburg",
    preview: "",
    context: "FireBurg foi criado para apresentar o restaurante de forma moderna, com menus interativos, formulários e animações fluidas.",
    content: [
      {
        title: "Contexto",
        text: "O projeto visa promover um restaurante online, unindo performance, design moderno e boa experiência do usuário.",
        image: "/bg_project/fireburg/context1.png"
      },
      {
        title: "Desenvolvimento",
        text: "Construído com Vite, React e Tailwind CSS, usando Shadcn/UI e Radix UI para componentes modernos e responsivos.",
        image: "/bg_project/fireburg/dev1.png"
      },
      {
        title: "Resultados",
        text: "O site proporciona navegação rápida, menus interativos e visual moderno, reforçando a presença online do restaurante.",
        image: "/bg_project/fireburg/result1.png"
      }
    ]
  },
  {
    title: "Nova Reveal",
    area: "frontend",
    link_bg_light: "/bg_project/NovaRevealLight.png",
    link_bg_dark: "/bg_project/NovaRevealDark.png",
    cover: "/bg_project/novaReveal/cover.png",
    description:
      "Nova Reveal é uma landing page interativa com foco em animações suaves e experiência do usuário.",
    color: "#7C3AED",
    date: "2025",
    technologies: ["Vite", "React", "TypeScript", "Shadcn/UI", "Tailwind CSS", "Radix UI"],
    images: [
      "/bg_project/novaReveal/novaReveal01.png",
      "/bg_project/novaReveal/novaReveal02.png"
    ],
    link: "https://novareveal.vercel.app/",
    github: "https://github.com/CarlosCavalcanti/novareveal",
    preview: "",
    context: "Nova Reveal foi criada para apresentar conteúdos interativos de forma suave, usando scroll reveal e navegação fluida.",
    content: [
      {
        title: "Contexto",
        text: "O projeto nasceu para criar uma landing page moderna, interativa e com animações que destacam seções importantes como portfólio e depoimentos.",
        image: "/bg_project/novaReveal/context1.png"
      },
      {
        title: "Desenvolvimento",
        text: "Desenvolvido com React e Vite, integrando Shadcn/UI, Tailwind CSS e Radix UI para componentes interativos e responsivos.",
        image: "/bg_project/novaReveal/dev1.png"
      },
      {
        title: "Resultados",
        text: "O resultado é uma landing page elegante, responsiva e animada, oferecendo excelente experiência de navegação para o usuário.",
        image: "/bg_project/novaReveal/result1.png"
      }
    ]
  }


];

// === Função para salvar todos os projetos ===
async function saveAllProjects() {
  try {
    const batch = db.batch();

    projects.forEach((project) => {
      const docRef = db.collection("projects").doc(project.title);
      batch.set(docRef, project);
    });

    await batch.commit();
    console.log(`${projects.length} projetos salvos com sucesso!`);
  } catch (err) {
    console.error("Erro ao salvar projetos:", err);
  }
}

saveAllProjects();

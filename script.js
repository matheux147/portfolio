const translations = {
    pt: {
        "nav.role": "Software & AI Engineer",
        "nav.about": "Especialidades",
        "nav.experience": "Experiência",
        "nav.cases": "Projetos & Cases",
        "nav.education": "Acadêmico & Certificados",
        "nav.articles": "Artigos",
        "nav.stack": "Stack",
        "nav.contact": "Contato",

        "hero.status": "Fullstack Software Engineer @ LUXCLUSIF / FARFETCH",
        "hero.title": "Arquitetura de software escalável &amp; <span>Inteligência Artificial</span> aplicada.",
        "hero.lead": "Engenheiro de Software com sólida atuação em sistemas distribuídos utilizando <strong>.NET 8/10</strong>, <strong>Microsoft Azure</strong> e <strong>Domain-Driven Design</strong>, aliado à pesquisa acadêmica em <strong>LLMs, RAG e Fine-tuning</strong> pela UFCA/FINEP.",
        "hero.ctaContact": "Contato profissional",
        "hero.ctaCv": "Baixar Currículo (PDF)",
        "hero.researchGroup": "Grupo de Pesquisa UFCA LLMs",
        "hero.captionSub": "Atuação Remota Global · Inglês C1 Advanced",

        "metrics.m1Label": "Foco Principal",
        "metrics.m2Label": "Pesquisa em IA (FINEP)",
        "metrics.m3Label": "Certificação Destaque",
        "metrics.m4Label": "Proficiência em Idiomas",
        "metrics.m4Value": "Português Nativo · Inglês C1",

        "about.index": "DOMÍNIOS",
        "about.heading": "Engenharia de software encontra pesquisa em IA.",
        "about.desc": "Minha trajetória combina o rigor arquitetural de sistemas financeiros e plataformas globais de e-commerce de luxo com a pesquisa acadêmica em modelos de linguagem de grande escala.",
        "about.p1Title": "Backend Engineering & Software Architecture",
        "about.p1Text": "Construção e modernização de microsserviços escaláveis com <strong>.NET (6/8/10)</strong>, <strong>C#</strong> e <strong>Spring Boot</strong>. Aplicação prática de <strong>Domain-Driven Design (DDD)</strong>, <strong>CQRS</strong> (MediatR), <strong>Arquitetura Hexagonal</strong>, mensageria assíncrona com <strong>Azure Service Bus</strong>, <strong>MassTransit</strong> e <strong>RabbitMQ</strong>, além de camadas de orquestração <strong>BFF/BFI</strong> e testes automatizados (xUnit, NSubstitute, Bogus).",
        "about.p2Title": "Generative AI, Agents & LLM Engineering",
        "about.p2Text": "Desenvolvimento de agentes inteligentes e arquiteturas <strong>RAG</strong> utilizando <strong>Microsoft Agent Framework</strong>, <strong>Microsoft.Extensions.AI (MEAI)</strong>, <strong>Semantic Kernel</strong>, <strong>LangChain</strong> e <strong>LlamaIndex</strong>. Experiência em curadoria de datasets, treinamento de tokenizers customizados, <strong>continuous pre-training</strong> e <strong>fine-tuning</strong> com Hugging Face, além de avaliação quantitativa com <strong>Databricks</strong> e <strong>RAGAS</strong>.",
        "about.p3Title": "Cloud-Native, Serverless & Applied AI",
        "about.p3Text": "Implantação e observabilidade em <strong>Microsoft Azure</strong> (Service Bus, App Service, Application Insights, Feature Flags) e <strong>AWS</strong> (Lambda, SQS, S3, Textract) com infraestrutura como código em <strong>Terraform</strong>, <strong>Docker</strong> e <strong>Kubernetes</strong>. Vivência adicional em Visão Computacional com <strong>YOLOX</strong>, <strong>Detectron2</strong> e <strong>OpenCV</strong>.",

        "exp.index": "TRAJETÓRIA",
        "exp.heading": "Experiência Profissional",
        "exp.desc": "Atuação em equipes internacionais, grandes instituições financeiras e projetos de pesquisa financiados em Inteligência Artificial.",
        "exp.r1Date": "ABR 2026 — ATUAL",
        "exp.r1Loc": "Porto, Portugal · Remoto",
        "exp.r1b1": "Desenvolvimento e evolução de microsserviços em nuvem utilizando <strong>.NET 8/10</strong> e <strong>Microsoft Azure</strong> (Service Bus para mensageria assíncrona, App Service, Application Insights e Feature Flags).",
        "exp.r1b2": "Modernização ativa de aplicações legadas em PHP para arquitetura moderna de microsserviços em .NET, implementando segurança em APIs RESTful com <strong>JWT</strong> e <strong>OAuth2/OIDC</strong>.",
        "exp.r1b3": "Automação de infraestrutura com <strong>Terraform</strong> e colaboração com times internacionais multidisciplinares utilizando Gitflow (Bitbucket), Jira e ferramentas de engenharia assistidas por IA.",

        "exp.r2Date": "FEV 2025 — ATUAL",
        "exp.r2Loc": "Juazeiro do Norte, CE · Remoto",
        "exp.r2Role": "Pesquisador em IA Generativa (FINEP)",
        "exp.r2b1": "Atuação no projeto financiado pela FINEP <em>“Pre-training and Fine-tuning LLMs for Legal Interpretation and Analysis”</em>, focado em raciocínio jurídico automatizado em português.",
        "exp.r2b2": "Construção de pipelines <strong>RAG</strong> com <strong>LangChain</strong> e <strong>LlamaIndex</strong> para recuperação semântica de jurisprudência, além de geração, limpeza e otimização de datasets jurídicos.",
        "exp.r2b3": "Treinamento de tokenizers customizados, <strong>continuous pre-training</strong> e ajustes em camadas com <strong>Hugging Face</strong>, avaliando pipelines com <strong>Databricks</strong> e <strong>RAGAS</strong> (BLEU, ROUGE, Response Relevancy).",

        "exp.r3Date": "DEZ 2024 — ABR 2026",
        "exp.r3Loc": "Belo Horizonte, MG · Remoto",
        "exp.r3Role": "Mid Software Engineer (Engenheiro Pleno)",
        "exp.r3b1": "Atuação na modernização de plataforma de <strong>digital banking</strong> de grande escala para instituição financeira corporativa, aplicando <strong>DDD</strong>, <strong>CQRS</strong> (MediatR/AutoMapper) e <strong>Arquitetura Hexagonal</strong>.",
        "exp.r3b2": "Implementação de fluxos de orquestração em camadas <strong>BFF/BFI</strong> e serviços backend em <strong>ASP.NET Core</strong>, otimizando consultas em <strong>SQL Server</strong> com <strong>Entity Framework Core</strong> e <strong>Dapper</strong>.",
        "exp.r3b3": "Garantia de alta cobertura em regras críticas com testes unitários e de integração (<strong>xUnit, NSubstitute, Bogus</strong>) e entregas contínuas com <strong>Docker, Kubernetes</strong> e <strong>Azure DevOps</strong>.",

        "exp.r4Date": "JUL 2023 — NOV 2024",
        "exp.r4Loc": "São Paulo, SP · Remoto",
        "exp.r4Role": "Software Developer",
        "exp.r4b1": "Desenvolvimento de microsserviço serverless de validação documental com <strong>AWS Lambda</strong>, acionado por <strong>Amazon SQS</strong> e integrado ao <strong>Amazon Textract (OCR)</strong> e LLMs da OpenAI via <strong>Semantic Kernel (.NET)</strong>.",
        "exp.r4b2": "Construção de Web APIs em <strong>ASP.NET Core</strong> e evolução de plataforma interna de gestão em <strong>Spring Boot</strong> (DDD, Spring Data JPA, Spring Security e <strong>PostgreSQL</strong>).",
        "exp.r4b3": "Criação de chatbots educacionais em <strong>Python (Django/Flask)</strong> com pipelines <strong>RAG (LangChain + FAISS)</strong>, context caching e transcrição de voz com <strong>OpenAI Whisper (STT)</strong>.",

        "exp.r5Date": "JAN 2023 — AGO 2023",
        "exp.r5Loc": "Portugal · Remoto",
        "exp.r5Role": "Artificial Intelligence Intern",
        "exp.r5b1": "Desenvolvimento de modelos de Deep Learning para detecção de comportamento equino em imagens e vídeos com <strong>YOLOX, Detectron2 e OpenCV</strong> (Object Detection e Instance Segmentation).",
        "exp.r5b2": "Criação de sistema de tradução de linguagem natural para SQL (<strong>NL-to-SQL</strong>) utilizando LLMs e implantação de soluções de IA Generativa com <strong>LangChain, Ollama e Flask</strong>.",

        "cases.index": "PROJETOS & ARQUITETURA",
        "cases.heading": "Soluções e Arquiteturas em Destaque",
        "cases.desc": "Projetos autorais e arquiteturas de software desenvolvidos com foco em .NET, Inteligência Artificial Generativa e sistemas distribuídos.",
        "cases.c1Category": "Arquitetura Hexagonal & .NET 10",
        "cases.c1Title": "Inventory Management API (.NET 10 & Hexagonal)",
        "cases.c1Text": "API RESTful construída com .NET 10 aplicando Arquitetura Hexagonal (Ports & Adapters), CQRS e Result Pattern para gestão do ciclo de vida de produtos, categorias e fornecedores, com cache distribuído híbrido (Redis + MemoryCache) e integrações externas (WMS, Auditoria e E-mail).",
        "cases.c2Category": "IA Generativa & Agentes",
        "cases.c2Title": "Personal Assistant API (.NET + Semantic Kernel)",
        "cases.c2Text": "Backend construído com .NET 8 projetado para atuar como o núcleo de um assistente pessoal inteligente. Transforma linguagem natural em ações de organização pessoal utilizando Microsoft Semantic Kernel e Function Calling para executar funções nativas em C# no gerenciamento de tarefas e contas financeiras.",
        "cases.c3Category": "Arquitetura Orientada a Eventos",
        "cases.c3Title": "Validação Documental Inteligente com OCR & Semantic Kernel",
        "cases.c3Text": "Microsserviço serverless em .NET acionado de forma assíncrona via Amazon SQS e AWS Lambda. Combina extração óptica do Amazon Textract com orquestração de LLMs via Microsoft Semantic Kernel para validar e estruturar dados contextuais com mínima intervenção manual.",

        "edu.index": "CREDENCIAIS",
        "edu.heading": "Formação Acadêmica & Certificações",
        "edu.desc": "Base acadêmica em Ciência da Computação pela UFCA combinada com certificações internacionais em IA Generativa, Cloud e proficiência no idioma inglês.",
        "edu.academicLabel": "FORMAÇÃO ACADÊMICA",
        "edu.csTitle": "Bacharelado em Ciência da Computação",
        "edu.csPeriod": "AGO 2023 — JUL 2028",
        "edu.csSummary": "Bolsista de pesquisa em Inteligência Artificial Generativa (FINEP) desde fevereiro de 2025, integrando o grupo <strong>UFCA LLMs</strong> no pré-treinamento, fine-tuning e avaliação de modelos de linguagem para o domínio jurídico brasileiro.",
        "edu.csLink": "Conhecer o grupo de pesquisa UFCA LLMs ↗",
        "edu.certsLabel": "CERTIFICAÇÕES OFICIAIS",
        "edu.c1BadgeTag": "CERTIFICAÇÃO EM DESTAQUE",
        "edu.c1Date": "Jan 2026 (Válido até Jan 2028)",
        "edu.c1Cred": "Código da credencial: <code>172617930</code>",
        "edu.c2Date": "Fev 2025",
        "edu.c2Cred": "Engenharia de Software Assistida por IA",
        "edu.c3Date": "Jan 2025",
        "edu.c3Cred": "Generative AI & Artificial Intelligence Principles",
        "edu.c4Date": "Abr 2024",
        "edu.c4Cred": "Pontuação: <code>67/100</code> (Proficiência Avançada)",

        "articles.index": "PUBLICAÇÕES",
        "articles.heading": "Artigos Técnicos",
        "articles.desc": "Publicações sobre arquitetura de agentes inteligentes no ecossistema .NET e engenharia de alta performance em comunicação HTTP.",
        "articles.readLink": "Ler artigo no LinkedIn ↗",
        "articles.a1Topic": "IA & Agentes em .NET",
        "articles.a1b1": "Exploração prática do <strong>Microsoft Agent Framework (MAF)</strong> construído sobre as abstrações padronizadas do <strong>Microsoft.Extensions.AI (MEAI)</strong> para criação de agentes autônomos e fluxos multiagentes no ecossistema .NET.",
        "articles.a1b2": "Demonstração de integração com <code>IChatClient</code>, exposição de métodos C# nativos como ferramentas (Function Calling), gerenciamento de sessão/estado e injeção de dependência idiomática.",
        "articles.a2Topic": "Performance & Backend",
        "articles.a2b1": "Análise arquitetural sobre como evitar armadilhas clássicas do uso manual de <code>HttpClient</code> em sistemas distribuídos, como exaustão de sockets (<em>socket exhaustion</em>) e cache de DNS obsoleto.",
        "articles.a2b2": "Implementação de requisições HTTP resilientes e de alta performance utilizando <strong>IHttpClientFactory</strong>, clientes tipados, gerenciamento do ciclo de vida de handlers e políticas de retentativa.",

        "stack.index": "COMPETÊNCIAS",
        "stack.heading": "Stack Técnica Consolidada",
        "stack.fAll": "Todas",
        "stack.fBackend": "Backend & Arquitetura",
        "stack.fAi": "IA, LLMs & Visão",
        "stack.fCloud": "Cloud, Dados & DevOps",
        "stack.g1Title": "Linguagens & Ecossistema Backend",
        "stack.g2Title": "Arquitetura, Qualidade & Persistência",
        "stack.g3Title": "IA Generativa, Agentes & LLMs",
        "stack.g4Title": "Visão Computacional & Engenharia de Dados",
        "stack.g5Title": "Cloud, Mensageria & Infraestrutura",
        "stack.g6Title": "Metodologias & Idiomas",
        "stack.langPt": "Nativo",
        "stack.langEn": "C1 Advanced (EF SET 67/100 · Equipes Globais)",

        "contact.index": "CONTATO",
        "contact.heading": "Contato Profissional",
        "contact.desc": "Canais diretos para comunicação profissional, redes de engenharia de software e publicações acadêmicas.",
        "contact.researchLabel": "Pesquisa UFCA",
        "contact.locationLabel": "Localização",

        "footer.rights": "Desenvolvido com foco em clareza, performance e engenharia.",
        "footer.top": "Voltar ao topo ↑"
    },

    en: {
        "nav.role": "Software & AI Engineer",
        "nav.about": "Expertise",
        "nav.experience": "Experience",
        "nav.cases": "Projects & Cases",
        "nav.education": "Education & Certs",
        "nav.articles": "Articles",
        "nav.stack": "Tech Stack",
        "nav.contact": "Contact",

        "hero.status": "Fullstack Software Engineer @ LUXCLUSIF / FARFETCH",
        "hero.title": "Scalable software architecture &amp; applied <span>Artificial Intelligence</span>.",
        "hero.lead": "Software Engineer experienced in building distributed systems with <strong>.NET 8/10</strong>, <strong>Microsoft Azure</strong>, and <strong>Domain-Driven Design</strong>, combined with academic research in <strong>LLMs, RAG, and Fine-tuning</strong> at UFCA/FINEP.",
        "hero.ctaContact": "Professional contact",
        "hero.ctaCv": "Download Resume (PDF)",
        "hero.researchGroup": "UFCA LLMs Research Group",
        "hero.captionSub": "Global Remote · C1 Advanced English",

        "metrics.m1Label": "Core Focus",
        "metrics.m2Label": "AI Research (FINEP)",
        "metrics.m3Label": "Featured Credential",
        "metrics.m4Label": "Languages",
        "metrics.m4Value": "Native Portuguese · C1 English",

        "about.index": "DOMAINS",
        "about.heading": "Software engineering meets AI research.",
        "about.desc": "My background bridges architectural rigor from corporate banking and global luxury e-commerce platforms with academic research in large language models.",
        "about.p1Title": "Backend Engineering & Software Architecture",
        "about.p1Text": "Designing and modernizing scalable microservices using <strong>.NET (6/8/10)</strong>, <strong>C#</strong>, and <strong>Spring Boot</strong>. Hands-on application of <strong>Domain-Driven Design (DDD)</strong>, <strong>CQRS</strong> (MediatR), <strong>Hexagonal Architecture</strong>, asynchronous messaging with <strong>Azure Service Bus</strong>, <strong>MassTransit</strong>, and <strong>RabbitMQ</strong>, <strong>BFF/BFI</strong> orchestration layers, and automated testing (xUnit, NSubstitute, Bogus).",
        "about.p2Title": "Generative AI, Agents & LLM Engineering",
        "about.p2Text": "Building intelligent agents and <strong>RAG</strong> pipelines with <strong>Microsoft Agent Framework</strong>, <strong>Microsoft.Extensions.AI (MEAI)</strong>, <strong>Semantic Kernel</strong>, <strong>LangChain</strong>, and <strong>LlamaIndex</strong>. Experienced in dataset curation, custom tokenizer training, <strong>continuous pre-training</strong>, and <strong>fine-tuning</strong> via Hugging Face, evaluated with <strong>Databricks</strong> and <strong>RAGAS</strong>.",
        "about.p3Title": "Cloud-Native, Serverless & Applied AI",
        "about.p3Text": "Deployment and observability across <strong>Microsoft Azure</strong> (Service Bus, App Service, Application Insights, Feature Flags) and <strong>AWS</strong> (Lambda, SQS, S3, Textract) with <strong>Terraform</strong>, <strong>Docker</strong>, and <strong>Kubernetes</strong>, plus Computer Vision models using <strong>YOLOX</strong>, <strong>Detectron2</strong>, and <strong>OpenCV</strong>.",

        "exp.index": "CAREER",
        "exp.heading": "Professional Experience",
        "exp.desc": "Delivering software across international teams, major financial institutions, and funded Artificial Intelligence research.",
        "exp.r1Date": "APR 2026 — PRESENT",
        "exp.r1Loc": "Porto, Portugal · Remote",
        "exp.r1b1": "Developing and maintaining cloud-based microservices using <strong>.NET 8/10</strong> and <strong>Microsoft Azure</strong> (Service Bus for asynchronous messaging, App Service, Application Insights, and Feature Flags).",
        "exp.r1b2": "Actively modernizing legacy PHP applications into a modern .NET microservices architecture while securing RESTful APIs with <strong>JWT</strong> and <strong>OAuth2/OIDC</strong>.",
        "exp.r1b3": "Automating infrastructure with <strong>Terraform</strong> and collaborating with cross-functional international teams across time zones using Bitbucket (Gitflow), Jira, and AI-assisted CLI workflows.",

        "exp.r2Date": "FEB 2025 — PRESENT",
        "exp.r2Loc": "Juazeiro do Norte, Brazil · Remote",
        "exp.r2Role": "Graduate Researcher in Generative AI (FINEP)",
        "exp.r2b1": "Contributing to the FINEP-funded project <em>“Pre-training and Fine-tuning LLMs for Legal Interpretation and Analysis”</em>, improving automated legal reasoning in Portuguese.",
        "exp.r2b2": "Building <strong>RAG</strong> pipelines with <strong>LangChain</strong> and <strong>LlamaIndex</strong> for jurisprudence retrieval, alongside generating, cleaning, and optimizing domain-specific legal datasets.",
        "exp.r2b3": "Training custom tokenizers and performing <strong>continuous pre-training</strong> and layer adjustments with <strong>Hugging Face</strong>, evaluating pipelines via <strong>Databricks</strong> and <strong>RAGAS</strong>.",

        "exp.r3Date": "DEC 2024 — APR 2026",
        "exp.r3Loc": "Belo Horizonte, Brazil · Remote",
        "exp.r3Role": "Mid Software Engineer",
        "exp.r3b1": "Contributed to modernizing a large-scale <strong>digital banking</strong> platform for a leading corporate financial institution, applying <strong>DDD</strong>, <strong>CQRS</strong> (MediatR/AutoMapper), and <strong>Hexagonal Architecture</strong>.",
        "exp.r3b2": "Implemented orchestration flows in <strong>BFF/BFI</strong> layers and backend services in <strong>ASP.NET Core</strong>, optimizing SQL queries with <strong>Entity Framework Core</strong> and <strong>Dapper</strong> on <strong>SQL Server</strong>.",
        "exp.r3b3": "Ensured high test coverage of critical business rules with <strong>xUnit, NSubstitute, and Faker (Bogus)</strong>, deploying containerized workloads via <strong>Docker, Kubernetes</strong>, and <strong>Azure DevOps</strong>.",

        "exp.r4Date": "JUL 2023 — NOV 2024",
        "exp.r4Loc": "São Paulo, Brazil · Remote",
        "exp.r4Role": "Software Developer",
        "exp.r4b1": "Developed a serverless document validation microservice using <strong>AWS Lambda</strong>, triggered via <strong>Amazon SQS</strong> and powered by <strong>Amazon Textract (OCR)</strong> and OpenAI LLMs through <strong>Semantic Kernel (.NET)</strong>.",
        "exp.r4b2": "Built and optimized Web APIs in <strong>ASP.NET Core</strong> and contributed to an internal management platform using <strong>Spring Boot</strong> (DDD, Spring Data JPA, Spring Security, and <strong>PostgreSQL</strong>).",
        "exp.r4b3": "Designed intelligent educational chatbots using <strong>Python (Django/Flask)</strong> with <strong>RAG pipelines (LangChain + FAISS)</strong>, context caching, and <strong>OpenAI Whisper (STT)</strong>.",

        "exp.r5Date": "JAN 2023 — AUG 2023",
        "exp.r5Loc": "Portugal · Remote",
        "exp.r5Role": "Artificial Intelligence Intern",
        "exp.r5b1": "Developed deep learning models for equine behavior detection in images and video using <strong>YOLOX, Detectron2, and OpenCV</strong> (Object Detection and Instance Segmentation).",
        "exp.r5b2": "Created a natural language to SQL (<strong>NL-to-SQL</strong>) translation system using LLMs and supported deployment of Generative AI applications with <strong>LangChain, Ollama, and Flask</strong>.",

        "cases.index": "PROJECTS & ARCHITECTURE",
        "cases.heading": "Featured Solutions & Architectures",
        "cases.desc": "Selected software projects and system architectures focused on .NET, Generative AI, and distributed systems.",
        "cases.c1Category": "Hexagonal Architecture & .NET 10",
        "cases.c1Title": "Inventory Management API (.NET 10 & Hexagonal)",
        "cases.c1Text": "RESTful API built with .NET 10 applying Hexagonal Architecture (Ports & Adapters), CQRS, and Result Pattern to manage product lifecycles, categories, and suppliers, featuring hybrid distributed caching (Redis + MemoryCache) and external integrations (WMS, Audit Log, Email).",
        "cases.c2Category": "Generative AI & Agents",
        "cases.c2Title": "Personal Assistant API (.NET + Semantic Kernel)",
        "cases.c2Text": "Intelligent backend built with .NET 8 designed as the core of a personal assistant. Transforms natural language into personal organization actions using Microsoft Semantic Kernel and Function Calling to execute native C# functions for managing tasks and financial bills.",
        "cases.c3Category": "Event-Driven Architecture",
        "cases.c3Title": "Serverless Document Validation with OCR & Semantic Kernel",
        "cases.c3Text": "Event-driven .NET microservice triggered asynchronously via Amazon SQS and AWS Lambda. Combines Amazon Textract OCR with OpenAI LLMs orchestrated through Microsoft Semantic Kernel to automate contextual data extraction.",

        "edu.index": "CREDENTIALS",
        "edu.heading": "Academic Education & Certifications",
        "edu.desc": "Academic foundation in Computer Science at UFCA paired with industry certifications in Generative AI, Cloud, and advanced English proficiency.",
        "edu.academicLabel": "ACADEMIC EDUCATION",
        "edu.csTitle": "B.Sc. in Computer Science",
        "edu.csPeriod": "AUG 2023 — JUL 2028",
        "edu.csSummary": "Generative AI Research Fellow (FINEP) since February 2025, working with the <strong>UFCA LLMs</strong> research group on pre-training, fine-tuning, and evaluating legal-domain language models.",
        "edu.csLink": "Explore the UFCA LLMs Research Group ↗",
        "edu.certsLabel": "OFFICIAL CERTIFICATIONS",
        "edu.c1BadgeTag": "FEATURED CERTIFICATION",
        "edu.c1Date": "Jan 2026 (Valid until Jan 2028)",
        "edu.c1Cred": "Credential ID: <code>172617930</code>",
        "edu.c2Date": "Feb 2025",
        "edu.c2Cred": "AI-Assisted Software Engineering",
        "edu.c3Date": "Jan 2025",
        "edu.c3Cred": "Generative AI & Artificial Intelligence Principles",
        "edu.c4Date": "Apr 2024",
        "edu.c4Cred": "Score: <code>67/100</code> (C1 Advanced Proficiency)",

        "articles.index": "PUBLICATIONS",
        "articles.heading": "Technical Articles",
        "articles.desc": "Articles covering intelligent AI agent architectures in .NET and high-performance HTTP communication engineering.",
        "articles.readLink": "Read article on LinkedIn ↗",
        "articles.a1Topic": "AI & Agents in .NET",
        "articles.a1b1": "Hands-on exploration of the <strong>Microsoft Agent Framework (MAF)</strong> built on top of standardized <strong>Microsoft.Extensions.AI (MEAI)</strong> abstractions for creating autonomous agents and multi-agent workflows in .NET.",
        "articles.a1b2": "Demonstrates <code>IChatClient</code> integration, exposing native C# methods as tools (Function Calling), session/state management, and idiomatic dependency injection.",
        "articles.a2Topic": "Performance & Backend",
        "articles.a2b1": "Architectural analysis on preventing classic pitfalls of manual <code>HttpClient</code> instantiation in distributed systems, such as socket exhaustion and stale DNS caching.",
        "articles.a2b2": "Implementing resilient, high-performance HTTP requests using <strong>IHttpClientFactory</strong>, typed clients, handler lifecycle management, and retry policies.",

        "stack.index": "CAPABILITIES",
        "stack.heading": "Consolidated Tech Stack",
        "stack.fAll": "All",
        "stack.fBackend": "Backend & Architecture",
        "stack.fAi": "AI, LLMs & Vision",
        "stack.fCloud": "Cloud, Data & DevOps",
        "stack.g1Title": "Languages & Backend Ecosystem",
        "stack.g2Title": "Architecture, Quality & Persistence",
        "stack.g3Title": "Generative AI, Agents & LLMs",
        "stack.g4Title": "Computer Vision & Data Engineering",
        "stack.g5Title": "Cloud, Messaging & Infrastructure",
        "stack.g6Title": "Methodologies & Languages",
        "stack.langPt": "Native",
        "stack.langEn": "C1 Advanced (EF SET 67/100 · Global Teams)",

        "contact.index": "CONTACT",
        "contact.heading": "Professional Contact",
        "contact.desc": "Direct channels for professional communication, software engineering networks, and academic publications.",
        "contact.researchLabel": "UFCA Research",
        "contact.locationLabel": "Location",

        "footer.rights": "Engineered with focus on clarity, performance, and craft.",
        "footer.top": "Back to top ↑"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebarBackdrop = document.getElementById("sidebarBackdrop");
    const langToggle = document.getElementById("langToggle");
    const themeToggle = document.getElementById("themeToggle");
    const cvDownloadLink = document.getElementById("cvDownloadLink");
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    const navLinksContainer = document.getElementById("navLinks");

    let currentTheme = localStorage.getItem("mr_theme_v2") || "light";
    htmlEl.setAttribute("data-theme", currentTheme);

    themeToggle.addEventListener("click", () => {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        htmlEl.setAttribute("data-theme", currentTheme);
        localStorage.setItem("mr_theme_v2", currentTheme);
    });

    function setSidebarCollapsed(collapsed) {
        if (!sidebar) return;
        sidebar.classList.toggle("collapsed", collapsed);
        bodyEl.classList.toggle("sidebar-is-collapsed", collapsed);
        if (sidebarBackdrop) {
            const isMobile = window.innerWidth <= 1080;
            sidebarBackdrop.classList.toggle("active", isMobile && !collapsed);
        }
    }

    const mobileQuery = window.matchMedia("(max-width: 1080px)");

    if (mobileQuery.matches) {
        setSidebarCollapsed(true);
    }

    mobileQuery.addEventListener("change", (e) => {
        setSidebarCollapsed(e.matches);
    });

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener("click", () => {
            const willCollapse = !sidebar.classList.contains("collapsed");
            setSidebarCollapsed(willCollapse);
        });
    }

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener("click", () => {
            setSidebarCollapsed(true);
        });
    }

    let currentLang = localStorage.getItem("mr_lang") || "pt";

    function applyLanguage(lang) {
        const dict = translations[lang] || translations.pt;
        htmlEl.setAttribute("lang", lang === "en" ? "en" : "pt-BR");

        if (langToggle) {
            langToggle.setAttribute("data-active-lang", lang);
        }

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll("[data-lang-indicator]").forEach((ind) => {
            ind.classList.toggle("active", ind.getAttribute("data-lang-indicator") === lang);
        });

        if (cvDownloadLink) {
            cvDownloadLink.setAttribute(
                "href",
                lang === "en"
                    ? "assets/cv/Resume_MatheusRennan.pdf"
                    : "assets/cv/Curriculo_MatheusRennan.pdf"
            );
        }
    }

    applyLanguage(currentLang);

    langToggle.addEventListener("click", () => {
        currentLang = currentLang === "pt" ? "en" : "pt";
        localStorage.setItem("mr_lang", currentLang);
        applyLanguage(currentLang);
    });

    const filterButtons = document.querySelectorAll(".filter-btn");
    const stackGroups = document.querySelectorAll(".stack-group");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");

            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            stackGroups.forEach((group) => {
                const category = group.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    group.classList.remove("hidden");
                } else {
                    group.classList.add("hidden");
                }
            });
        });
    });

    if (copyEmailBtn) {
        let copyTimeout;
        copyEmailBtn.addEventListener("click", async () => {
            const email = copyEmailBtn.getAttribute("data-email");
            try {
                await navigator.clipboard.writeText(email);
                copyEmailBtn.classList.add("copied");
                clearTimeout(copyTimeout);
                copyTimeout = setTimeout(() => {
                    copyEmailBtn.classList.remove("copied");
                }, 2000);
            } catch {
                window.location.href = `mailto:${email}`;
            }
        });
    }

    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));
    let isManualScrolling = false;
    let manualScrollTimeout;

    function setActiveSection(id) {
        navAnchors.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
    }

    function updateActiveNav() {
        if (isManualScrolling || sections.length === 0) return;

        const scrollBottom = window.innerHeight + window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;

        if (scrollBottom >= pageHeight - 140) {
            setActiveSection(sections[sections.length - 1].id);
            return;
        }

        const triggerLine = window.innerHeight * 0.38;
        let currentId = sections[0].id;

        for (const sec of sections) {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= triggerLine) {
                currentId = sec.id;
            }
        }

        const lastSection = sections[sections.length - 1];
        if (lastSection && lastSection.getBoundingClientRect().top <= window.innerHeight * 0.6) {
            currentId = lastSection.id;
        }

        setActiveSection(currentId);
    }

    window.addEventListener("scroll", updateActiveNav, { passive: true });
    window.addEventListener("resize", updateActiveNav);
    updateActiveNav();

    if (navLinksContainer) {
        navAnchors.forEach((link) => {
            link.addEventListener("click", () => {
                const targetId = link.getAttribute("href").replace("#", "");
                isManualScrolling = true;
                setActiveSection(targetId);
                clearTimeout(manualScrollTimeout);
                manualScrollTimeout = setTimeout(() => {
                    isManualScrolling = false;
                    updateActiveNav();
                }, 750);

                if (window.innerWidth <= 1080) {
                    setSidebarCollapsed(true);
                }
            });
        });
    }

    document.querySelectorAll('a[href="#topo"]').forEach((topLink) => {
        topLink.addEventListener("click", (e) => {
            e.preventDefault();
            isManualScrolling = true;
            if (sections.length > 0) {
                setActiveSection(sections[0].id);
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", window.location.pathname);
            clearTimeout(manualScrollTimeout);
            manualScrollTimeout = setTimeout(() => {
                isManualScrolling = false;
                updateActiveNav();
            }, 750);

            if (window.innerWidth <= 1080) {
                setSidebarCollapsed(true);
            }
        });
    });
});

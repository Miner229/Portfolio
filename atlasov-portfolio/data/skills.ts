import { l } from "./i18n";

export const skills = [
  {
    group: l("Backend", "Бэкенд"),
    items: l(
      "C#, ASP.NET Core, .NET 6/7/8, Python, Node.js, REST API, gRPC, SignalR, JWT, Entity Framework Core, Dapper, CQRS, MediatR, Clean Architecture",
      "C#, ASP.NET Core, .NET 6/7/8, Python, Node.js, REST API, gRPC, SignalR, JWT, Entity Framework Core, Dapper, CQRS, MediatR, Clean Architecture",
    ),
  },
  {
    group: l("Frontend", "Фронтенд"),
    items: l(
      "Vue.js 2/3, Nuxt.js, Vuex, Pinia, Vue Router, React, JavaScript ES6+, TypeScript, HTML5, CSS3, SASS/SCSS, Less, responsive interfaces",
      "Vue.js 2/3, Nuxt.js, Vuex, Pinia, Vue Router, React, JavaScript ES6+, TypeScript, HTML5, CSS3, SASS/SCSS, Less, адаптивные интерфейсы",
    ),
  },
  {
    group: l("Data and enterprise systems", "Данные и корпоративные системы"),
    items: l(
      "SQL, PostgreSQL, MySQL, Redis, Microsoft Dynamics CRM/365, database migrations, query optimisation, REST/SOAP integrations",
      "SQL, PostgreSQL, MySQL, Redis, Microsoft Dynamics CRM/365, миграции баз данных, оптимизация запросов, интеграции REST/SOAP",
    ),
  },
  {
    group: l("Delivery and quality", "Поставка и качество"),
    items: l(
      "Git, GitHub, GitLab, Docker, CI/CD, GitHub Actions, Azure DevOps, VPS deployment, xUnit, NUnit, Moq, Prometheus, Grafana, code review",
      "Git, GitHub, GitLab, Docker, CI/CD, GitHub Actions, Azure DevOps, развёртывание на VPS, xUnit, NUnit, Moq, Prometheus, Grafana, code review",
    ),
  },
];

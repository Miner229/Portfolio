import { l } from "./i18n";

export const site = {
  name: "Alexei Atlasov",
  initials: "AA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  role: l("Senior Full Stack Developer", "Senior Full Stack разработчик"),
  title: l("Alexei Atlasov | Senior Full Stack Developer", "Алексей Атласов | Senior Full Stack разработчик"),
  description: l(
    "Portfolio of Alexei Atlasov, a full stack developer from Kazakhstan working with C#/.NET, Vue.js, React, Python and Node.js. Customer portals, CRM integrations and internal tools.",
    "Портфолио Алексея Атласова, full stack разработчика из Казахстана: C#/.NET, Vue.js, React, Python и Node.js. Клиентские порталы, интеграции с CRM и внутренние инструменты.",
  ),
  headline: l(
    "I build customer portals, CRM integrations and internal tools.",
    "Я создаю клиентские порталы, интеграции с CRM и внутренние инструменты.",
  ),
  intro: l(
    "My work covers APIs, database changes and the interfaces people use every day. I work mainly with C#/.NET, Vue and React, alongside Python and Node.js.",
    "Я занимаюсь API, изменениями в базах данных и интерфейсами, которыми люди пользуются каждый день. Основной стек: C#/.NET, Vue и React, а также Python и Node.js.",
  ),
  about: l(
    [
      "I am a full stack developer with commercial experience since 2018. Most of that time has been at Smart Team Service, where I work on enterprise applications for Tricolor and MTT: ASP.NET Core APIs, Microsoft Dynamics CRM/365 and Vue.js interfaces.",
      "Since 2025 I have also taken on freelance work in Python, React and Node.js, from backend logic and authentication to deployment on a VPS.",
      "I usually take a feature from API and database design through implementation, testing and release. I review code, estimate tasks and keep technical documentation up to date.",
      "I am based in Kazakhstan and open to remote roles.",
    ],
    [
      "Я full stack разработчик с коммерческим опытом с 2018 года. Большую часть этого времени я работаю в Smart Team Service над корпоративными приложениями для Tricolor и MTT: API на ASP.NET Core, Microsoft Dynamics CRM/365 и интерфейсы на Vue.js.",
      "С 2025 года я также беру фриланс-проекты на Python, React и Node.js: от бэкенд-логики и аутентификации до развёртывания на VPS.",
      "Обычно я веду фичу от проектирования API и базы данных через реализацию и тестирование до релиза. Провожу code review, оцениваю задачи и поддерживаю техническую документацию.",
      "Я живу в Казахстане и открыт к удалённой работе.",
    ],
  ),
  // Empty values are never rendered. Telegram is the main contact.
  contact: { telegram: "Osyaass", email: "", linkedin: "", github: "" },
};

export const telegramHref = `https://t.me/${site.contact.telegram}`;
export const telegramHandle = `@${site.contact.telegram}`;

/** Every configured contact link, Telegram first. */
export function contactLinks() {
  const { telegram, email, linkedin, github } = site.contact;
  return [
    telegram && { key: "telegram", href: telegramHref, label: "Telegram " + telegramHandle },
    email && { key: "email", href: `mailto:${email}`, label: email },
    linkedin && { key: "linkedin", href: linkedin, label: "LinkedIn" },
    github && { key: "github", href: github, label: "GitHub" },
  ].filter(Boolean) as { key: string; href: string; label: string }[];
}

/** Plain technology names for the strip under the introduction (all taken from the CV). */
export const ticker = [
  "C#", "ASP.NET Core", ".NET 8", "Vue.js", "Nuxt.js", "React", "TypeScript", "Python", "Node.js",
  "PostgreSQL", "Dynamics 365", "Redis", "gRPC", "SignalR", "Docker", "CI/CD",
];

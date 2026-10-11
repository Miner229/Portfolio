export const site = {
  name: "Alexei Atlasov",
  initials: "AA",
  role: "Senior Full Stack Developer",
  title: "Alexei Atlasov | Senior Full Stack Developer",
  description:
    "Portfolio of Alexei Atlasov, a full stack developer working with C#/.NET, Vue.js, React, Python and Node.js. Customer portals, CRM integrations and internal tools.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  headline: "I build customer portals, CRM integrations and internal tools.",
  intro:
    "My work covers APIs, database changes and the interfaces people use every day. I work mainly with C#/.NET, Vue and React, alongside Python and Node.js.",
  // Fill these in when real details exist. Empty values are not rendered anywhere.
  contact: {
    email: "",
    linkedin: "",
    github: "",
  },
};

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
];

export const about = [
  "I am a full stack developer with commercial experience since 2018. Most of that time has been at Smart Team Service, where I work on enterprise applications for Tricolor and MTT: ASP.NET Core APIs, Microsoft Dynamics CRM/365 and Vue.js interfaces.",
  "Since 2025 I have also taken on freelance work in Python, React and Node.js, from backend logic and authentication to deployment on a VPS.",
  "I usually take a feature from API and database design through implementation, testing and release. I review code, estimate tasks and keep technical documentation up to date.",
];

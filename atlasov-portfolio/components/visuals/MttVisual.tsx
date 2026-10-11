import { l, type Lang } from "@/data/i18n";

const T = l(
  {
    requests: "Requests",
    queue: [["Payment status", "Chat"], ["Tariff question", "Phone"], ["Service access", "Message"]],
    card: "Customer card",
    fields: [["Customer", "Sample Customer"], ["Account", "C-2077"], ["Plan", "Standard"], ["Channel", "Chat"]],
    form: "Request form",
    reason: "Reason for contact",
    comment: "Comment",
    steps: ["Received", "In progress", "Resolved"],
  },
  {
    requests: "Заявки",
    queue: [["Статус платежа", "Чат"], ["Вопрос по тарифу", "Телефон"], ["Доступ к услуге", "Сообщение"]],
    card: "Карточка клиента",
    fields: [["Клиент", "Тестовый клиент"], ["Аккаунт", "C-2077"], ["Тариф", "Стандарт"], ["Канал", "Чат"]],
    form: "Форма заявки",
    reason: "Причина обращения",
    comment: "Комментарий",
    steps: ["Принята", "В работе", "Решена"],
  },
);

export default function MttVisual({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="grid gap-px bg-line text-[0.78rem] leading-snug sm:grid-cols-[0.9fr_1.1fr_1fr]">
      <div className="hidden bg-panel p-4 sm:block">
        <p className="mb-3 font-medium">{t.requests}</p>
        <ul className="space-y-2">
          {t.queue.map(([title, channel], i) => (
            <li key={title} className={`border px-2.5 py-2 ${i === 0 ? "border-accent" : "border-line"}`}>
              <span className="block">{title}</span>
              <span className="font-mono text-[0.68rem] text-muted">{channel}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">{t.card}</p>
        <dl className="space-y-2">
          {t.fields.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3 border-b border-line/70 pb-1.5 last:border-0">
              <dt className="text-muted">{k}</dt>
              <dd className="min-w-0 truncate text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-panel p-4">
        <p className="mb-3 font-medium">{t.form}</p>
        <div className="mb-3 border border-line px-2.5 py-2 text-muted">{t.reason}</div>
        <div className="mb-4 border border-line px-2.5 py-2 text-muted">{t.comment}</div>
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-[0.66rem]">
          <li className="text-accent">{t.steps[0]}</li>
          <li aria-hidden="true" className="text-muted">›</li>
          <li className="border-b border-accent text-accent">{t.steps[1]}</li>
          <li aria-hidden="true" className="text-muted">›</li>
          <li className="text-muted">{t.steps[2]}</li>
        </ol>
      </div>
    </div>
  );
}

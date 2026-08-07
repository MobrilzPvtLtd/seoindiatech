export default function GeoQuickAnswer({ data }) {
  if (!data?.question) return null

  return (
    <aside
      className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-accent/10 p-6 shadow-sm dark:from-primary/10 dark:via-card dark:to-primary/5"
      aria-label="Quick answer"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Quick Answer</p>
      <h2 className="mt-2 font-heading text-lg font-bold text-heading md:text-xl">{data.question}</h2>
      <p className="premium-prose mt-3 text-[15px]">{data.answer}</p>
      {data.takeaways?.length > 0 && (
        <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
          {data.takeaways.map((item) => (
            <li key={item} className="premium-list-item flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

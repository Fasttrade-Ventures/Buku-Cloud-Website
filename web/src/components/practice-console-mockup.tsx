export function PracticeConsoleMockup() {
  return (
    <div className="overflow-hidden rounded-[16px] border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(26,26,26,0.25)]">
      <div className="flex items-center gap-3 border-b border-border bg-bg-cream px-4 py-3">
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="truncate font-mono text-[11px] text-ink-muted">
          app.bukucloud.com/practice
        </span>
      </div>

      <div className="flex flex-col gap-5 p-5 md:p-6">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
            BukuCloud Demo Accountancy
          </div>
          <div className="font-display text-[22px] font-medium text-ink">
            Practice console
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["ACTIVE", "30"],
            ["REVENUE MTD", "RM 24K"],
            ["AR", "RM 8.2K"],
            ["OVERDUE", "3"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex min-w-0 flex-col gap-1 rounded-[8px] border border-border bg-bg-cream p-3"
            >
              <div className="truncate text-[9px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                {k}
              </div>
              <div className="truncate font-mono text-[18px] leading-none font-medium text-ink">
                {v}
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-[8px] border border-border">
          <div className="flex items-center justify-between border-b border-border bg-bg-cream px-4 py-2.5">
            <span className="font-display text-[13px] font-medium text-ink">
              All clients
            </span>
            <span className="text-[11px] text-ink-muted">30 active</span>
          </div>
          {[
            { name: "Fasttrade Ventures", plan: "GROWTH", revenue: "RM 4,820", color: "var(--color-forest)" },
            { name: "Andalus Catering", plan: "SOLO", revenue: "RM 2,140", color: "var(--color-mustard)" },
            { name: "Maju Hardware", plan: "CORPORATE", revenue: "RM 1,890", color: "var(--color-accent)" },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-b-0"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: row.color }}
              />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13px] font-semibold text-ink">
                  {row.name}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                  {row.plan}
                </div>
              </div>
              <div className="hidden shrink-0 font-mono text-[12px] text-ink sm:block">
                {row.revenue}
              </div>
              <div className="shrink-0 text-[11px] font-semibold text-accent">
                Enter →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

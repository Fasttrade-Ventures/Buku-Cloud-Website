export function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-[16px] border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(26,26,26,0.25)]">
      <div className="flex items-center gap-3 border-b border-border bg-bg-cream px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <span className="font-mono text-[11px] text-ink-muted">
          app.bukucloud.com
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[160px_minmax(0,1fr)] lg:grid-cols-[200px_minmax(0,1fr)]">
        <aside className="border-b border-border bg-bg-cream p-4 sm:border-b-0 sm:border-r">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted">
            Main
          </div>
          <ul className="flex gap-1.5 overflow-x-auto text-[12px] sm:flex-col [&::-webkit-scrollbar]:hidden">
            <li className="shrink-0 rounded-md bg-accent px-2.5 py-1.5 font-semibold text-white">
              Dashboard
            </li>
            <li className="shrink-0 px-2.5 py-1.5 text-ink-muted">Sales</li>
            <li className="shrink-0 px-2.5 py-1.5 text-ink-muted">Purchases</li>
            <li className="shrink-0 px-2.5 py-1.5 text-ink-muted">Accounting</li>
            <li className="shrink-0 px-2.5 py-1.5 text-ink-muted">Reports</li>
            <li className="shrink-0 px-2.5 py-1.5 text-ink-muted">Company</li>
          </ul>
        </aside>

        <div className="flex min-w-0 flex-col gap-5 p-5">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
              Fasttrade Ventures
            </div>
            <div className="font-display text-[22px] font-medium text-ink">
              Your weekly numbers
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ["REVENUE MTD", "RM 24,820", "+12%", true],
              ["AR OUTSTANDING", "RM 8,240", "−4%", true],
              ["BILLS DUE", "RM 3,180", "7 days", false],
              ["CASH ON HAND", "RM 41,920", "+RM 4K", true],
            ].map(([k, v, delta, up]) => (
              <div
                key={k as string}
                className="flex min-w-0 flex-col gap-1 rounded-[8px] border border-border bg-bg-cream p-3"
              >
                <div className="truncate text-[9px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                  {k}
                </div>
                <div className="truncate font-mono text-[15px] font-medium leading-none text-ink">
                  {v}
                </div>
                <div
                  className={`text-[10px] font-semibold ${
                    up ? "text-forest" : "text-ink-muted"
                  }`}
                >
                  {delta}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[12px] border border-border bg-surface p-4">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="font-display text-[13px] font-medium text-ink">
                Revenue (last 6 months)
              </span>
              <span className="shrink-0 text-[11px] text-ink-muted">
                RM 24K MTD
              </span>
            </div>
            <div className="flex h-24 items-end gap-2">
              {[28, 42, 38, 56, 48, 72].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[4px] bg-accent/85"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 grid grid-cols-6 text-[9px] text-ink-muted">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

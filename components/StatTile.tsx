import { cn } from "@/lib/cn";

export function StatTile({
  label,
  value,
  sub,
  accent = "blue",
  className,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: "blue" | "orange";
  className?: string;
}) {
  const ring =
    accent === "orange"
      ? "ring-1 ring-amazon-orange/30"
      : "ring-1 ring-brand-blue/25";
  const chip =
    accent === "orange"
      ? "bg-amazon-orange/10 text-amazon-orange"
      : "bg-brand-blue/10 text-brand-blue";

  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] bg-card p-4 shadow-soft",
        ring,
        className,
      )}
    >
      <div className={cn("inline-flex rounded-full px-3 py-1 text-xs", chip)}>
        {label}
      </div>
      <div className="mt-3 text-2xl font-extrabold tracking-tight">
        {value}
      </div>
      {sub ? <div className="mt-1 text-sm text-foreground/70">{sub}</div> : null}
    </div>
  );
}


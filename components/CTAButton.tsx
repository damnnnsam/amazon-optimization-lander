import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export function CTAButton({
  href,
  children,
  className,
  variant = "primary",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none";
  const styles =
    variant === "primary"
      ? "bg-brand-blue text-white hover:brightness-110 shadow-soft"
      : "border border-border bg-card text-foreground hover:bg-muted";

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}


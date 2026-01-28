import { cn } from "@/lib/cn";

export function Section(
  props: React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
  },
) {
  const { className, children, ...rest } = props;
  return (
    <section {...rest} className={cn("px-5 sm:px-8", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}


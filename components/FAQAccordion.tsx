import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/cn";

export function FAQAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="rounded-[var(--radius-lg)] border border-border bg-card shadow-soft"
    >
      {items.map((item, idx) => (
        <Accordion.Item
          key={item.q}
          value={`item-${idx}`}
          className={cn(idx !== 0 && "border-t border-border")}
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-extrabold">
              <span>{item.q}</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-muted text-foreground/80 transition group-data-[state=open]:rotate-45">
                +
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-5 pb-5 text-sm leading-6 text-foreground/75 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
            {item.a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}


/* eslint-disable @next/next/no-img-element */

import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { StatTile } from "@/components/StatTile";
import { CaseStudyDrawer } from "@/components/CaseStudyDrawer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CALENDLY_URL, CASE_STUDIES, FAQ, PACKAGE_SCOPE, TOP_STATS } from "@/lib/content";

export default function Home() {
  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <Header />

      <main>
        {/* HERO */}
        <Section className="relative overflow-hidden py-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="absolute -right-40 -top-20 h-[520px] w-[520px] rounded-full bg-brand-orange/15 blur-3xl" />
            <div className="absolute bottom-[-220px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-xs font-semibold text-foreground/70 ring-1 ring-border">
                Amazon optimization audit + strategy call
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Turn your Amazon store into a
                <span className="text-brand-blue"> predictable growth engine</span>
                —without guessing.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-foreground/75">
                If you’re already getting traffic and sales, the fastest wins usually
                come from fixing conversion, PPC efficiency, inventory constraints,
                and brand control. We’ll show you exactly what to do first.
              </p>

              <ul className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-foreground/80">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                  <span>
                    A prioritized roadmap for listings, ads, creative, inventory, and
                    brand protection.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                  <span>
                    What to fix now vs. later (so you don’t waste time on low-impact
                    tweaks).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                  <span>
                    A clear path to better CVR, better ROAS, and stable scaling.
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={CALENDLY_URL} className="w-full sm:w-auto">
                  Book your free audit
                </CTAButton>
                <CTAButton
                  href="#case-studies"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  See proof & case studies
                </CTAButton>
              </div>

              <div className="mt-6 text-xs text-foreground/60">
                No VSL. No fluff. Just a concrete plan you can execute.
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-soft sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-extrabold">Proof from real accounts</div>
                <span className="rounded-full bg-amazon-orange/10 px-3 py-1 text-xs font-semibold text-amazon-orange">
                  Amazon-first
                </span>
              </div>

              <div className="mt-4 grid gap-4">
                <div className="flex items-center justify-center rounded-2xl bg-muted p-5 ring-1 ring-border">
                  <img
                    src="/amazon-logo-white-hd.png"
                    alt="Amazon"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <StatTile
                    label={TOP_STATS[0].label}
                    value={TOP_STATS[0].value}
                    sub={TOP_STATS[0].sub}
                    accent="blue"
                  />
                  <StatTile
                    label={TOP_STATS[1].label}
                    value={TOP_STATS[1].value}
                    sub={TOP_STATS[1].sub}
                    accent="orange"
                  />
                  <StatTile
                    label={TOP_STATS[2].label}
                    value={TOP_STATS[2].value}
                    sub={TOP_STATS[2].sub}
                    accent="blue"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* PROBLEM */}
        <Section className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Most Amazon brands aren’t stuck because of effort.
              </h2>
              <p className="mt-4 text-lg leading-8 text-foreground/75">
                They’re stuck because the next level requires the right sequence:
                conversion first, then paid efficiency, then operational leverage and
                protection.
              </p>
              <div className="mt-7 rounded-[var(--radius-lg)] bg-muted p-6 ring-1 ring-border">
                <div className="text-sm font-extrabold">Common bottlenecks</div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground/75">
                  <li>Low conversion from weak creative, copy, or offer framing</li>
                  <li>PPC that spends but doesn’t scale profitably</li>
                  <li>Inventory & fulfillment causing stockouts and rank loss</li>
                  <li>Unauthorized sellers siphoning buy box and margin</li>
                  <li>“Random acts of optimization” with no roadmap</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-soft">
              <div className="text-sm font-extrabold">What you get on the call</div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/75">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span>
                    A snapshot of your conversion levers: title, images, A+, reviews,
                    and positioning.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span>
                    PPC diagnosis: where efficiency is leaking and what to restructure.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span>
                    A prioritized roadmap: next 7 days, next 30 days, next 90 days.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span>
                    Brand control & ops notes: buy box leaks, forecasting, and fulfillment risks.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={CALENDLY_URL} className="w-full sm:w-auto">
                  Book free audit
                </CTAButton>
                <CTAButton href="#package" variant="secondary" className="w-full sm:w-auto">
                  What we optimize
                </CTAButton>
              </div>
            </div>
          </div>
        </Section>

        {/* PACKAGE */}
        <Section id="package" className="py-14 sm:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold tracking-tight">
              What we optimize (the stuff that actually moves the needle)
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-foreground/75">
              We focus on the levers that compound: conversion → ads efficiency →
              operational scale → brand control.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGE_SCOPE.map((s) => (
              <div
                key={s.title}
                className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-soft"
              >
                <div className="text-sm font-extrabold">{s.title}</div>
                <div className="mt-2 text-sm leading-6 text-foreground/75">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--radius-lg)] bg-brand-blue p-7 text-white shadow-soft sm:p-8">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-white/80">
                  Ready for a clear plan?
                </div>
                <div className="mt-2 text-2xl font-extrabold tracking-tight">
                  Book the free audit + strategy call.
                </div>
                <div className="mt-2 text-sm leading-6 text-white/80">
                  We’ll tell you exactly what to fix first—and why.
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <CTAButton
                  href={CALENDLY_URL}
                  className="bg-white text-brand-blue hover:brightness-105"
                >
                  Schedule on Calendly
                </CTAButton>
                <CTAButton
                  href="#case-studies"
                  variant="secondary"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/15"
                >
                  See case studies
                </CTAButton>
              </div>
            </div>
          </div>
        </Section>

        {/* CASE STUDIES */}
        <Section id="case-studies" className="py-14 sm:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold tracking-tight">Case studies</h2>
            <p className="max-w-3xl text-lg leading-8 text-foreground/75">
              Preview the full PDFs inline. Each drawer includes the headline results and the
              strategy used to achieve them.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyDrawer key={cs.id} caseStudy={cs} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-soft sm:flex-row">
            <div>
              <div className="text-sm font-extrabold">
                Want results like this for your Amazon channel?
              </div>
              <div className="mt-1 text-sm text-foreground/70">
                Start with a free audit + strategy call.
              </div>
            </div>
            <CTAButton href={CALENDLY_URL} className="w-full sm:w-auto">
              Book free audit
            </CTAButton>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="py-14 sm:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold tracking-tight">FAQ</h2>
            <p className="max-w-3xl text-lg leading-8 text-foreground/75">
              Quick answers to the most common questions.
            </p>
          </div>
          <div className="mt-8">
            <FAQAccordion items={FAQ} />
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section className="py-14 sm:py-20">
          <div className="rounded-[var(--radius-lg)] bg-muted p-8 ring-1 ring-border">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-foreground/70">
                  Final step
                </div>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight">
                  Get your Amazon growth roadmap.
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/75">
                  Book the free audit + strategy call. If there’s a fit, we’ll recommend the
                  best path forward (one-time optimization, ongoing management, or a hybrid).
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <CTAButton href={CALENDLY_URL} className="w-full sm:w-auto">
                  Book free audit
                </CTAButton>
                <div className="text-xs text-foreground/60">
                  Calendly link is currently a placeholder.
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-10">
        <Section>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="text-sm font-semibold text-foreground/70">
              © {new Date().getFullYear()} Axis Brands. All rights reserved.
            </div>
            <div className="text-xs text-foreground/55">
              Results shown are case-study outcomes and may vary by account.
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}

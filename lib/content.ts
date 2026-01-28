export const CALENDLY_URL = "https://calendly.com/YOUR-CALENDLY-LINK";

export type CaseStudy = {
  id: string;
  brandName: string;
  claim: string;
  pdfUrl: string;
  keyMetrics: { label: string; value: string }[];
  bullets: string[];
};

export const TOP_STATS = [
  {
    label: "Revenue growth",
    value: "$24M → $55M",
    sub: "in 24 months (Molly Suds)",
  },
  {
    label: "Launch to scale",
    value: "$0 → $1.5M/yr",
    sub: "in 10 months (Spartan Bee Bread)",
  },
  {
    label: "ROAS improvement",
    value: "4.1 → 9.4",
    sub: "Molly Suds",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "barebells",
    brandName: "Barebells",
    claim:
      "Scaled from $3M/yr → $38M/yr in 24 months while improving ROAS 3.8 → 6.8 and securing 99% Buy Box.",
    pdfUrl: "/case-studies/barebells.pdf",
    keyMetrics: [
      { label: "Revenue (24 months)", value: "$3M/yr → $38M/yr" },
      { label: "Conversion rate", value: "+35%" },
      { label: "ROAS", value: "3.8 → 6.8" },
      { label: "Buy Box ownership", value: "99%" },
    ],
    bullets: [
      "Established brand control and consistent pricing (reduced gray-market interference).",
      "Rebuilt advertising strategy for efficient growth and profitability.",
      "Upgraded creative assets to increase engagement and conversion rate.",
      "Improved inventory forecasting and supply chain processes to meet demand.",
    ],
  },
  {
    id: "im-a-nut",
    brandName: "I'M A Nut",
    claim:
      "Grew from $200K/mo → $700K/mo in 9 months while improving ROAS 4.0 → 9.1 and securing 98% Buy Box.",
    pdfUrl: "/case-studies/im-a-nut.pdf",
    keyMetrics: [
      { label: "Revenue (9 months)", value: "$200K/mo → $700K/mo" },
      { label: "Conversion rate", value: "+28%" },
      { label: "ROAS", value: "4.0 → 9.1" },
      { label: "Buy Box ownership", value: "98%" },
    ],
    bullets: [
      "Established brand control and eliminated unauthorized sellers to stabilize pricing.",
      "Optimized advertising structure to scale efficiently with strong returns.",
      "Improved creative assets to lift conversion rate and revenue.",
      "Streamlined logistics and inventory management to reduce stockouts and missed sales.",
    ],
  },
  {
    id: "molly-suds",
    brandName: "Molly Suds",
    claim:
      "Grew from $24M → $55M in 24 months while improving ROAS 4.1 → 9.4 and lifting conversion +25–35%.",
    pdfUrl: "/case-studies/molly-suds.pdf",
    keyMetrics: [
      { label: "Revenue (24 months)", value: "$24M → $55M" },
      { label: "Conversion rate", value: "+25–35%" },
      { label: "ROAS", value: "4.1 → 9.4" },
    ],
    bullets: [
      "Enrolled in Amazon Transparency and enforced brand control.",
      "Removed unauthorized sellers to protect pricing + conversion.",
      "Built the operational + logistics structure to scale reliably.",
      "Improved paid performance with disciplined PPC management.",
    ],
  },
  {
    id: "airnex",
    brandName: "Airnex",
    claim:
      "Grew from $3M → $5M in 18 months while improving ROAS 4.8 → 6.4 and lifting conversion +40–50%.",
    pdfUrl: "/case-studies/airnex.pdf",
    keyMetrics: [
      { label: "Revenue (18 months)", value: "$3M → $5M" },
      { label: "Conversion rate", value: "+40–50%" },
      { label: "ROAS", value: "4.8 → 6.4" },
    ],
    bullets: [
      "Removed unauthorized sellers to protect consistency and trust.",
      "Built an Amazon roadmap and improved listing quality (copy, keywords, infographics).",
      "Implemented PPC management to improve efficiency and scale.",
      "Launched new SKUs with a structured rollout strategy.",
    ],
  },
  {
    id: "spartan",
    brandName: "Spartan Bee Bread",
    claim:
      "Launched from $0 → $1.5M/yr in 10 months while improving ROAS 3.2 → 6.5 (+40% conversion) and earning Amazon’s Choice.",
    pdfUrl: "/case-studies/spartan.pdf",
    keyMetrics: [
      { label: "Revenue (10 months)", value: "$0 → $1.5M/yr" },
      { label: "Conversion rate", value: "+40%" },
      { label: "ROAS", value: "3.2 → 6.5" },
      { label: "Category traction", value: "Amazon’s Choice" },
    ],
    bullets: [
      "Built brand presence and category credibility from scratch.",
      "Optimized keywords, listings, and conversion-focused creative.",
      "Launched aggressive but profitable PPC to drive velocity.",
      "Improved forecasting and fulfillment to avoid stockouts/overstocks.",
    ],
  },
  {
    id: "branch-basics",
    brandName: "Branch Basics",
    claim:
      "Grew from $100K → $1M in 14 months while improving ROAS 3.3 → 5.6 and lifting conversion +25–50%.",
    pdfUrl: "/case-studies/branch.pdf",
    keyMetrics: [
      { label: "Revenue (14 months)", value: "$100K → $1M" },
      { label: "Conversion rate", value: "+25–50%" },
      { label: "ROAS", value: "3.3 → 5.6" },
    ],
    bullets: [
      "Removed unauthorized sellers to regain control over pricing and CX.",
      "Rebuilt brand representation across listings (messaging + visual assets).",
      "Centralized customer experience (fulfillment, returns, communication) to reduce confusion.",
      "Improved PPC management to drive efficient, scalable growth.",
    ],
  },
];

export const PACKAGE_SCOPE = [
  {
    title: "Listing optimization",
    desc: "Keyword strategy, PDP structure, and conversion-first copy so your traffic actually converts.",
  },
  {
    title: "PPC optimization",
    desc: "Account structure + targeting + bids + negatives—built to scale profitably, not just spend.",
  },
  {
    title: "Creative assets",
    desc: "High-converting images + A+ content guidance that lifts CVR and supports premium positioning.",
  },
  {
    title: "Inventory + logistics",
    desc: "Forecasting, replenishment cadence, and fulfillment planning to reduce stockouts and missed revenue.",
  },
  {
    title: "Brand protection",
    desc: "Unauthorized seller cleanup and brand control strategies (where applicable) to defend pricing and CX.",
  },
];

export const FAQ = [
  {
    q: "Who is this for?",
    a: "Amazon brands that already have traction but know they’re leaving money on the table—conversion, ads efficiency, rank, or operational bottlenecks.",
  },
  {
    q: "What happens on the audit + strategy call?",
    a: "We review your listings, ads, and operational constraints, then give you a clear priority roadmap (what to fix first, what to ignore, and what will move the needle fastest).",
  },
  {
    q: "Do you work with brands with unauthorized sellers?",
    a: "Yes—when it’s relevant, we’ll outline a plan to regain control and reduce buy-box leakage. The specific steps depend on your brand registry status and current channel setup.",
  },
  {
    q: "Is this a one-time package or ongoing?",
    a: "This landing page is focused on a free audit + strategy call. If there’s a fit, we’ll recommend the best path forward (one-time optimization, ongoing management, or a hybrid).",
  },
];


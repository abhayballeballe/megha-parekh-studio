import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/Actions";
import { Chips } from "@/components/site/Chips";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionIntro } from "@/components/site/Section";

export const Route = createFileRoute("/tarot")({
  head: () => ({
    meta: [
      { title: "Tarot Sessions with Megha Parekh — TRIKAAL, Mumbai" },
      {
        name: "description",
        content:
          "Tarot sessions for career, relationships, marriage, money, business and decisions. ₹3,000 for 60 minutes with Megha Parekh, Mumbai.",
      },
      {
        property: "og:title",
        content: "Tarot Sessions with Megha Parekh — TRIKAAL, Mumbai",
      },
      {
        property: "og:description",
        content: "You have the question. Let’s look at it clearly.",
      },
    ],
    links: [{ rel: "canonical", href: "/tarot" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tarot Reading Session",
          serviceType: "Tarot reading and personal guidance",
          provider: { "@type": "Person", name: "Megha Parekh" },
          areaServed: "Mumbai, India",
          offers: {
            "@type": "Offer",
            price: "3000",
            priceCurrency: "INR",
            description: "60-minute personal Tarot session.",
          },
        }),
      },
    ],
  }),
  component: TarotPage,
});

const TOPICS = ["Career","Job change","Business","Partnership","Marriage","Relationships","Money","Family","Important decisions"];
const STEPS = ["Tell Megha what’s on your mind.","Look at the current situation and patterns.","Leave with a clearer perspective on what comes next."];
const FAQS = [
  {q:"Does Tarot predict a fixed future?",a:"No. A session looks at your current situation and the patterns around it. No particular outcome is guaranteed."},
  {q:"Can I take a shorter session?",a:"Yes. Shorter sessions are charged proportionately by duration. Message Megha and she’ll suggest what fits."},
  {q:"What if I’m not sure what to ask?",a:"That’s fine. Say what’s been on your mind and Megha will help shape the question with you."},
];

function TarotPage() {
  return <>
    <section className="surface-grain px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20"><div className="mx-auto w-full max-w-4xl"><Reveal><p className="eyebrow">Tarot</p><h1 className="mt-6 text-balance text-[2.5rem] leading-[1.05] sm:text-6xl">You have the question. Let’s look at it clearly.</h1><p className="mt-6 text-sm tracking-wide text-muted-foreground sm:text-base">Career • Relationships • Marriage • Money • Business • Decisions</p><WhatsAppButton intent="tarot" size="lg" className="mt-9">Book Tarot</WhatsAppButton></Reveal></div></section>
    <Section><SectionIntro title="What people ask Megha about" /><Reveal className="mt-8"><Chips items={TOPICS} className="gap-2.5" /></Reveal></Section>
    <Section className="bg-ink text-parchment"><Reveal className="max-w-2xl"><h2 className="text-balance text-3xl leading-[1.12] sm:text-4xl">How a Tarot session works</h2></Reveal><ol className="mt-12 grid gap-8 md:grid-cols-3">{STEPS.map((step,i)=><Reveal key={step} as="li" delay={i*80} className="border-t border-parchment/25 pt-6"><span className="font-display text-sm text-clay">{String(i+1).padStart(2,"0")}</span><p className="mt-3 font-display text-xl leading-snug sm:text-2xl">{step}</p></Reveal>)}</ol></Section>
    <Section className="bg-muted"><div className="flex flex-wrap items-end justify-between gap-8"><Reveal><p className="eyebrow">Session & fee</p><p className="mt-4 font-display text-4xl sm:text-5xl">₹3,000 / 60 min</p><p className="mt-3 text-sm text-muted-foreground">Shorter sessions available proportionately.</p></Reveal><Reveal delay={90}><WhatsAppButton intent="tarot" size="lg">Book Tarot</WhatsAppButton></Reveal></div></Section>
    <Section><Reveal className="mx-auto max-w-3xl text-center"><p className="font-display text-2xl leading-snug sm:text-[2.1rem]">“A reading is a perspective on the current situation — not a permanent sentence about your future.”</p></Reveal></Section>
    <Section className="bg-muted"><SectionIntro eyebrow="FAQs" title="Before you book." /><div className="mt-10"><FAQAccordion items={FAQS} /></div></Section>
    <Section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-2xl text-center"><Reveal><h2 className="text-balance text-3xl leading-[1.12] sm:text-4xl">Bring the question you keep returning to.</h2><div className="mt-8 flex justify-center"><WhatsAppButton intent="tarot" size="lg" className="bg-parchment text-ink hover:bg-mineral">Book Tarot</WhatsAppButton></div></Reveal></div></Section>
  </>;
}

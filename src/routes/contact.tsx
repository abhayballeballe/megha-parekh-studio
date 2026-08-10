import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/site/Actions";
import { EditorialCard } from "@/components/site/EditorialCard";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  whatsappLink,
} from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Megha Parekh — TRIKAAL, Mumbai" },
      {
        name: "description",
        content:
          "Message Megha Parekh on WhatsApp about a personal question, your home or property, or if you’re not sure where to start.",
      },
      { property: "og:title", content: "Contact Megha Parekh — TRIKAAL, Mumbai" },
      { property: "og:description", content: "What’s on your mind?" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const OPTIONS = [
  { title: "Personal question", line: "Career, relationships, money or a decision.", cta: "Start with Tarot", intent: "tarot" as const },
  { title: "Home or property", line: "A home, office or a property you’re considering.", cta: "Discuss Vastu", intent: "vastu" as const },
  { title: "Not sure", line: "Say what’s been on your mind and Megha will guide you.", cta: "Talk to Megha", intent: "general" as const },
];

function ContactPage() {
  return <><section className="surface-grain px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-20"><div className="mx-auto w-full max-w-4xl"><Reveal><p className="eyebrow">Contact</p><h1 className="mt-6 text-balance text-[2.5rem] leading-[1.05] sm:text-6xl">What’s on your mind?</h1></Reveal></div></section><Section><div className="grid gap-5 md:grid-cols-3">{OPTIONS.map((o,i)=><Reveal key={o.title} delay={i*70}><EditorialCard className="h-full justify-between"><div><h2 className="text-xl leading-snug sm:text-2xl">{o.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.line}</p></div><WhatsAppButton intent={o.intent} variant="ghost" className="mt-6 self-start">{o.cta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></WhatsAppButton></EditorialCard></Reveal>)}</div><Reveal className="rule-top mt-14 flex flex-wrap gap-x-10 gap-y-4 pt-8 text-sm"><a href={whatsappLink("general")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"><MessageCircle className="h-4 w-4" aria-hidden="true" />WhatsApp {PHONE_DISPLAY}</a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"><Instagram className="h-4 w-4" aria-hidden="true" />{INSTAGRAM_HANDLE}</a><span className="text-muted-foreground">Mumbai, India</span></Reveal></Section></>;
}

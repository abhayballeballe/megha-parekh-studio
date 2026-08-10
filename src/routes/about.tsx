import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/Actions";
import { PortraitFrame } from "@/components/site/PortraitFrame";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { TRAINING_LINE } from "@/lib/brand";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Megha Parekh — The person behind TRIKAAL" }, { name: "description", content: "A skeptic first. Then a student. Today, a guide. Megha Parekh works with Tarot and Vastu from Mumbai." }, { property: "og:title", content: "About Megha Parekh — The person behind TRIKAAL" }, { property: "og:description", content: "A skeptic first. Then a student. Today, a guide." }], links: [{ rel: "canonical", href: "/about" }] }),
  component: AboutPage,
});

const CHAPTERS = [
  { label: "Skeptic", title: "Vastu was the last place she thought she’d look.", body: "Megha came to Vastu during a difficult phase in her own life, and she did not expect much from it." },
  { label: "Student", title: "Curiosity became study.", body: TRAINING_LINE },
  { label: "Second lens", title: "Tarot entered differently.", body: "Tarot came through a separate journey and became her way of looking at the question someone is living with." },
  { label: "Guide", title: "Today, the question is simpler: what do you need clarity on?", body: "She starts with your concern, then chooses the tool that fits it." },
];
const APPROACH = [{ word: "Listen.", line: "Your concern comes first." }, { word: "Explain.", line: "You hear what she’s seeing, in plain words." }, { word: "Guide.", line: "You leave with a next step you can act on." }];

function AboutPage() {
  return <><section className="surface-grain px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20"><div className="mx-auto w-full max-w-4xl"><Reveal><p className="eyebrow">About</p><h1 className="mt-6 text-balance text-[2.5rem] leading-[1.05] sm:text-6xl">The person behind TRIKAAL.</h1><p className="mt-6 text-base text-muted-foreground sm:text-lg">A skeptic first. Then a student. Today, a guide.</p></Reveal></div></section><Section><div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start"><div className="grid gap-10">{CHAPTERS.map((c,i)=><Reveal key={c.label} delay={i*70} className="rule-top pt-6"><p className="eyebrow">{c.label}</p><h2 className="mt-3 text-2xl leading-snug sm:text-[1.8rem]">{c.title}</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{c.body}</p></Reveal>)}</div><Reveal delay={120} className="lg:sticky lg:top-28"><PortraitFrame className="mx-auto max-w-xs lg:max-w-none" label="Portrait of Megha Parekh" caption="Portrait frame — reserved for Megha’s photograph." /></Reveal></div></Section><Section className="bg-ink text-parchment"><Reveal className="max-w-2xl"><h2 className="text-balance text-3xl leading-[1.12] sm:text-4xl">Listen. Explain. Guide.</h2></Reveal><div className="mt-12 grid gap-8 md:grid-cols-3">{APPROACH.map((a,i)=><Reveal key={a.word} delay={i*80} className="border-t border-parchment/25 pt-6"><h3 className="font-display text-2xl">{a.word}</h3><p className="mt-3 text-sm leading-relaxed text-parchment/70">{a.line}</p></Reveal>)}</div></Section><Section className="bg-muted"><div className="mx-auto max-w-2xl text-center"><Reveal><h2 className="text-balance text-3xl leading-[1.12] sm:text-4xl">Tell Megha what’s been on your mind.</h2><div className="mt-8 flex justify-center"><WhatsAppButton size="lg">Talk to Megha</WhatsAppButton></div></Reveal></div></Section></>;
}

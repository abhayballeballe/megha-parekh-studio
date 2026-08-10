import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/Actions";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Client Stories — Megha Parekh · TRIKAAL" },
      {
        name: "description",
        content:
          "Verified client experiences with Megha Parekh’s Tarot and Vastu work will be published here as they are approved.",
      },
      { property: "og:title", content: "Client Stories — Megha Parekh · TRIKAAL" },
      {
        property: "og:description",
        content: "Client stories, coming soon.",
      },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <section className="surface-grain flex min-h-[70vh] items-center px-5 py-24 sm:px-8">
      <div className="mx-auto w-full max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">Client Stories</p>
          <h1 className="mt-6 text-balance text-[2.4rem] leading-[1.06] sm:text-5xl">
            Client stories, coming soon.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Verified client experiences will be added here as they are approved
            for publication.
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton size="lg">Talk to Megha</WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

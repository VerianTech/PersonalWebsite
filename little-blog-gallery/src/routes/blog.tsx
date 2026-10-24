import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Blog — Dorian Verna" },
    { name: "description", content: "Writing by Dorian Verna, Site Reliability Engineer at Google in Zürich." },
    { property: "og:title", content: "Blog — Dorian Verna" },
    { property: "og:description", content: "Writing by Dorian Verna on engineering and technology." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Blog,
});

function Blog() {
  return <main className="mx-auto min-h-[70vh] max-w-6xl px-6 pb-24 pt-12 md:pt-20">
    <div className="flex justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground"><span>02 / BLOG</span><span>DORIAN VERNA</span></div>
    <h1 className="mt-10 font-display text-6xl font-semibold md:text-8xl">Blog<span className="text-primary">.</span></h1>
    <p className="mt-7 max-w-xl text-xl leading-relaxed text-muted-foreground">Notes on systems, software, and the things I’m learning.</p>
    <div className="mt-16 border-y border-border py-16">
      <FileText className="size-8 text-primary" strokeWidth={1.5} />
      <h2 className="mt-6 font-display text-2xl font-medium">No articles yet.</h2>
      <p className="mt-3 text-muted-foreground">The first entry is still ahead.</p>
      <Button asChild variant="link" className="mt-5 px-0"><Link to="/">Back to portfolio <ArrowUpRight /></Link></Button>
    </div>
  </main>;
}

import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg.asset.json";
import portrait from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dorian Verna — Site Reliability Engineer at Google" },
      { name: "description", content: "Dorian Verna, Site Reliability Engineer at Google in Zürich, keeping Google's global datacenter fleet reliable, with a focus on large-scale ML and Cloud compute." },
      { property: "og:title", content: "Dorian Verna — Site Reliability Engineer at Google" },
      { property: "og:description", content: "Site Reliability Engineer at Google: datacenter reliability, self-healing repair workflows and AI-driven triage." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "FLSEHM", lang: "Python", tag: "Thesis", stack: "PyTorch · Federated Averaging", desc: "Federated Learning in scenarios of external human mobility. My thesis work on distributed learning under real-world movement patterns.", featured: true },
  { name: "Accessible Population GPU", lang: "CUDA", tag: "HPC", stack: "CUDA · C++ · Profiling", desc: "Accessible Population algorithm accelerated on the GPU with CUDA, from a naive kernel to a coalesced, profiled one." },
  { name: "Exec-Loader", lang: "C", tag: "Systems", stack: "ELF · Linux", desc: "Executable loader for ELF files, built from scratch: segments, relocations and entry point setup." },
  { name: "STDIO library", lang: "C", tag: "Systems", stack: "POSIX · File descriptors", desc: "Own implementation of C stdio: read, write, create, truncate and more, on top of raw syscalls." },
  { name: "Mini-Preprocessor", lang: "C", tag: "Compilers", stack: "Lexing · Macros", desc: "C preprocessor for Linux and Windows supporting #define, #include, #if and friends." },
  { name: "Ansible playground", lang: "Shell", tag: "DevOps", stack: "Ansible · YAML", desc: "Automation configurations written while learning Ansible: roles, playbooks and inventory patterns." },
  { name: "TSP Genetic", lang: "C", tag: "Algorithms", stack: "Heuristics · C", desc: "Genetic algorithm approach to the Travelling Salesman problem, with crossover and mutation strategies." },
  { name: "fitness-agent", lang: "HTML", tag: "AI", stack: "Agents · Web", desc: "An agent that helps plan and track fitness goals." },
];

const experience = [
  { role: "Site Reliability Engineer", org: "Google", place: "Zürich, CH", when: "Sep 2026 — now", desc: "Unplanned Maintenance SRE. Reliability, observability and fast recovery for Google's global datacenter fleet, with a focus on ML (TPU/GPU) and Cloud compute. Automated diagnostics, self-healing repairs and AI-driven triage." },
  { role: "Software Engineer", org: "Google", place: "Warsaw, PL", when: "Sep 2024 — Oct 2026", desc: "GCP IPAM (IP Address Management). Backend for Google's Network Connectivity: reliable IP range management and the Internal Ranges feature in Console, API, gcloud and Terraform." },
  { role: "Software Engineer", org: "HELLA", place: "Timișoara, RO", when: "Nov 2023 — Aug 2024" },
  { role: "Site Reliability Engineer Intern", org: "Google", place: "London, UK", when: "Jul 2023 — Oct 2023" },
  { role: "DevOps Engineer", org: "Thales", place: "Bucharest, RO", when: "Oct 2022 — Jul 2023" },
  { role: "Software Engineer Intern", org: "Google", place: "London, UK", when: "Jul 2022 — Sep 2022" },
  { role: "Software Test Developer Intern", org: "NXP Semiconductors", place: "Bucharest, RO", when: "Jun 2021 — Jun 2022" },
  { role: "Football Referee, First Category", org: "AJF Caraș-Severin", place: "Reșița, RO", when: "Aug 2015 — Aug 2019" },
];

const skills = ["Go", "Java", "Python", "PostgreSQL", "Docker", "Google Cloud", "C", "CUDA", "Linux"];
const exploring = ["Backend app development & scalable deployment", "Machine Learning engineering"];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12 md:pt-20">
        <div className="flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
          <span>01 / PORTFOLIO</span><span>ZÜRICH, SWITZERLAND</span>
        </div>
        <h1 className="mt-10 font-display text-5xl font-semibold leading-tight md:text-7xl">Dorian Verna<span className="text-primary">_</span></h1>
        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-6">
            <figure className="aspect-square w-full max-w-[240px] overflow-hidden rounded-full border-2 border-primary bg-secondary">
              <img src={portrait.url} alt="Dorian Verna" width={640} height={640} className="h-full w-full object-cover" />
            </figure>
            <p className="font-mono text-sm text-primary">Site Reliability Engineer<br /><span className="text-foreground">Google · Zürich</span></p>
          </div>
          <div>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">I keep Google's global datacenter fleet reliable, with a focus on large-scale ML (TPU/GPU) and Cloud compute. Before that, I built IP Address Management for Google Cloud.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-none"><a href="#work">Selected work <ArrowUpRight /></a></Button>
              <Button asChild variant="outline" className="rounded-none"><a href="https://github.com/dorianverna17" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a></Button>
              <Button asChild variant="outline" className="rounded-none"><a href="https://www.linkedin.com/in/dorian-verna/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a></Button>
            </div>
          </div>
        </div>
        <figure className="mt-12">
          <img src={hero.url} alt="Dorian walking across a plaza in front of a curved glass facade in Warsaw" width={1376} height={768} className="h-auto w-full" />
          <figcaption className="mt-3 flex justify-between font-mono text-xs text-muted-foreground"><span>Where I've been: Warsaw, in black and white</span><span>From the field notes</span></figcaption>
        </figure>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 border-b border-border pb-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Experience</h2>
        </div>
        <ol className="space-y-10">
          {experience.map((e) => (
            <li key={e.role + e.when} className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-10">
              <span className="font-mono text-sm text-muted-foreground">{e.when}</span>
              <div>
                <h3 className="font-display text-lg font-semibold md:text-xl">{e.role} <span className="text-primary">@ {e.org}</span></h3>
                <p className="font-mono text-xs text-muted-foreground">{e.place}</p>
                {e.desc && <p className="mt-2 max-w-3xl text-muted-foreground">{e.desc}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Selected work</h2>
          <span className="font-mono text-sm text-muted-foreground">62 public repos</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((p, i) => (
            <article key={p.name} className="group flex w-full flex-col border border-border bg-card p-6 transition hover:border-primary hover:bg-secondary md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{String(i + 1).padStart(2, "0")} / {p.tag}</span>
                <span className="text-primary">{p.lang}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold group-hover:text-primary">{p.name}</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <p className="mt-auto border-t border-border pt-3 font-mono text-xs text-muted-foreground">{p.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-3xl font-bold md:text-4xl">About</h2>
        <div>
          <p className="text-xl leading-relaxed text-muted-foreground">
            I'm a Site Reliability Engineer at Google in Zürich, building automated diagnostics, self-healing repair workflows and AI-driven triage tools that keep hardware downtime low. Before that I spent two years on GCP IPAM in Warsaw, working on the Internal Ranges feature across the Console, API, gcloud and Terraform. Earlier, I studied Computer Science at University Politehnica of Bucharest, where I built everything from ELF loaders and C libraries to CUDA kernels, and wrote my thesis on federated learning under human mobility.
          </p>
          <p className="mt-10 font-mono text-sm text-primary">// currently exploring</p>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            {exploring.map((e) => <li key={e}>→ {e}</li>)}
          </ul>
          <div className="mt-10 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="border border-border px-4 py-1.5 font-mono text-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-32 text-center">
        <p className="font-mono text-sm text-primary">$ ./say-hello</p>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Let's build something.</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:dorianverna7@gmail.com" className="font-mono text-primary underline underline-offset-8">dorianverna7@gmail.com</a>
          <a href="https://www.linkedin.com/in/dorian-verna/" target="_blank" rel="noreferrer" className="border border-border px-8 py-4 font-medium transition hover:border-primary">LinkedIn ↗</a>
          <a href="https://drive.google.com/file/d/1TH3-Kxr6Lrkb8GXx2XT84vu9Y3NTCeAV/view?usp=sharing" target="_blank" rel="noreferrer" className="border border-border px-8 py-4 font-medium transition hover:border-primary">Resume ↗</a>
          <a href="https://github.com/dorianverna17" target="_blank" rel="noreferrer" className="border border-border px-8 py-4 font-medium transition hover:border-primary">GitHub ↗</a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dorian Verna
      </footer>
    </main>
  );
}

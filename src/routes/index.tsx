import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Scissors, Sparkles, Droplets, Palette, Heart, MapPin, Phone, Star, Clock, Award, Smile } from "lucide-react";
import hero from "@/assets/hero-salao.jpg";
import t1 from "@/assets/trabalho-1.png.asset.json";
import t2 from "@/assets/trabalho-2.png.asset.json";
import t3 from "@/assets/trabalho-3.png.asset.json";
import t4 from "@/assets/trabalho-4.png.asset.json";
import t5 from "@/assets/trabalho-5.png.asset.json";
import t6 from "@/assets/trabalho-6.png.asset.json";

const TITLE = "Reginilda Cabeleireira Unissex | Salão em Pouso Alegre/MG";
const DESC = "Cortes, escovas, coloração, mechas e tratamentos capilares no Centro de Pouso Alegre. Agende seu horário pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/553534217171?text=" + encodeURIComponent("Olá! Gostaria de agendar um horário.");
const IG = "https://www.instagram.com/espacoreginilda_equipe/";
const ADDR = "Rua Gabriel Baret de Barros, 140 - Centro, Pouso Alegre - MG";
const MAP = "https://www.google.com/maps?q=" + encodeURIComponent(ADDR) + "&output=embed";

function WaIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.8.4 3.5 3.5 0 0 0-1.1 2.6 6 6 0 0 0 1.3 3.2 13.7 13.7 0 0 0 5.3 4.7c2 .8 2.7.9 3.7.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3M12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8M12 0a12 12 0 0 0-10.3 18L0 24l6.2-1.6A12 12 0 1 0 12 0" />
    </svg>
  );
}
function IgIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

const btnWa = "inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-medium text-accent-foreground shadow-lg transition hover:scale-105";
const btnGold = "inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 font-medium text-foreground transition hover:bg-gold hover:text-accent-foreground";

function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <span className="text-xs uppercase tracking-[0.3em] text-gold">{kicker}</span>
      <h2 className="mt-3 text-4xl font-semibold md:text-5xl">{title}</h2>
      <div className="gold-line mt-5" />
    </div>
  );
}

const services = [
  { icon: Scissors, t: "Cortes unissex", d: "Cortes femininos e masculinos pensados para o seu estilo e formato de rosto." },
  { icon: Sparkles, t: "Escovas e finalizações", d: "Escovas modeladas, babyliss e penteados para o dia a dia e ocasiões especiais." },
  { icon: Droplets, t: "Tratamentos capilares", d: "Hidratação, nutrição e reconstrução para fios saudáveis e brilhantes." },
  { icon: Palette, t: "Coloração e mechas", d: "Coloração, luzes, mechas e tons vibrantes com técnica e cuidado." },
  { icon: Heart, t: "Outros serviços", d: "Maquiagem, penteados para eventos e cuidados de beleza completos." },
];
const gallery = [t1, t2, t3, t4, t5, t6];
const reviews = [
  { n: "Mariana S.", t: "Atendimento maravilhoso! Saí do salão me sentindo outra pessoa. Recomendo demais." },
  { n: "Carlos R.", t: "Corte impecável e ambiente muito acolhedor. Virei cliente fiel." },
  { n: "Juliana P.", t: "As mechas ficaram exatamente como eu queria. Profissionais atenciosas e caprichosas." },
];
const why = [
  { icon: Award, t: "Experiência", d: "Anos cuidando da beleza de Pouso Alegre." },
  { icon: Smile, t: "Atendimento acolhedor", d: "Você é ouvida(o) e tratada(o) com carinho." },
  { icon: Sparkles, t: "Produtos de qualidade", d: "Marcas profissionais para resultados duradouros." },
  { icon: Clock, t: "Pontualidade", d: "Respeito ao seu tempo, com horário marcado." },
];

function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(!localStorage.getItem("cookies-ok")); }, []);
  if (!show) return null;
  const close = (v: string) => { localStorage.setItem("cookies-ok", v); setShow(false); };
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-gold/40 bg-card p-5 shadow-2xl fade-up md:right-auto md:left-6">
      <p className="text-sm text-muted-foreground">Usamos cookies para melhorar sua experiência no site. Ao continuar, você concorda com nossa política de privacidade.</p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => close("1")} className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-accent-foreground">Aceitar</button>
        <button onClick={() => close("0")} className="rounded-full border border-border px-5 py-2 text-sm">Recusar</button>
      </div>
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
  const nav = [["Serviços", "#servicos"], ["Sobre", "#sobre"], ["Galeria", "#galeria"], ["Contato", "#contato"]];
  return (
    <div className="scroll-smooth">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-serif text-xl font-semibold leading-tight">Reginilda <span className="block text-[10px] font-sans uppercase tracking-[0.3em] text-gold">Cabeleireira Unissex</span></a>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="transition hover:text-gold">{l}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={IG} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-gold/60 p-2 text-gold transition hover:bg-gold hover:text-accent-foreground"><IgIcon /></a>
            <a href={WA} target="_blank" rel="noreferrer" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground sm:inline-block">Agende seu horário</a>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-20">
        <img src={hero} alt="Interior aconchegante do salão" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5">
          <div className="max-w-xl fade-up">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Centro · Pouso Alegre/MG</span>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] md:text-7xl">Beleza que <em className="text-gold">valoriza</em> você</h1>
            <p className="mt-6 text-lg text-muted-foreground">Cortes, cores e cuidados feitos com carinho, técnica e atenção a cada detalhe — para elas e para eles.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WA} target="_blank" rel="noreferrer" className={btnWa}><WaIcon /> Agende seu horário</a>
              <a href="#servicos" className={btnGold}>Ver serviços</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="gold-line mx-auto mb-6" />
          <p className="font-serif text-2xl italic leading-relaxed md:text-3xl">
            “No salão Reginilda, cada cliente é recebido como alguém da família. Unimos técnica, produtos de qualidade e um olhar atento para criar um visual que combina com você — do corte clássico à transformação completa. Aqui, beleza é acessível, cuidado é de verdade.”
          </p>
        </div>
      </section>

      <section id="servicos" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Heading kicker="O que fazemos" title="Nossos serviços" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: I, t, d }) => (
              <div key={t} className="group rounded-3xl border border-border bg-card p-8 transition duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl">
                <div className="mb-5 inline-flex rounded-full border border-gold/50 p-3 text-gold transition group-hover:bg-gold group-hover:text-accent-foreground"><I className="h-6 w-6" /></div>
                <h3 className="text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
            <a href={WA} target="_blank" rel="noreferrer" className="flex flex-col justify-center rounded-3xl bg-primary p-8 text-primary-foreground transition hover:-translate-y-1">
              <h3 className="text-3xl font-semibold">Agende seu horário</h3>
              <p className="mt-2 opacity-80">Fale conosco pelo WhatsApp e reserve o seu momento.</p>
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-muted py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/60" />
            <img src={t1.url} alt="Trabalho do salão Reginilda" loading="lazy" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Nossa história</span>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Sobre a Reginilda</h2>
            <div className="gold-line mt-5" />
            <p className="mt-6 text-muted-foreground">Com amor pela profissão e dedicação a cada cliente, Reginilda construiu no Centro de Pouso Alegre um espaço onde todos se sentem em casa. O que começou como um sonho virou referência em atendimento próximo e resultados que encantam.</p>
            <p className="mt-4 text-muted-foreground">Nosso foco é o atendimento personalizado: ouvimos você, entendemos seu estilo e indicamos o melhor para seus cabelos — sempre com honestidade, carinho e um cafezinho.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Heading kicker="Diferenciais" title="Por que escolher a Reginilda?" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({ icon: I, t, d }) => (
              <div key={t} className="text-center">
                <I className="mx-auto h-8 w-8 text-gold" />
                <h3 className="mt-4 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-5xl px-5">
          <Heading kicker="Antes e depois" title="Galeria de trabalhos" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl border border-gold/30">
                <img src={g.url} alt={`Trabalho ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={IG} target="_blank" rel="noreferrer" className={btnGold}><IgIcon /> Veja mais no Instagram</a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Heading kicker="Depoimentos" title="Quem vem, volta" />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.n} className="rounded-3xl border border-border bg-card p-8">
                <div className="flex gap-1 text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-4 font-serif text-xl italic">“{r.t}”</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">— {r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-muted py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Heading kicker="Contato" title="Agende seu horário" />
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold" /> Rua Gabriel Baret de Barros, nº 140 – Centro – Pouso Alegre/MG</p>
              <p className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold" /> <a href="tel:+553534217171">(35) 3421-7171</a></p>
              <a href={WA} target="_blank" rel="noreferrer" className={`${btnWa} w-full justify-center py-5 text-lg`}><WaIcon className="h-6 w-6" /> Agendar pelo WhatsApp</a>
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-3 rounded-3xl bg-card p-6">
                <input required placeholder="Seu nome" className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-gold" />
                <input required placeholder="Telefone ou e-mail" className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-gold" />
                <textarea required rows={3} placeholder="Mensagem" className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-gold" />
                <button className="w-full rounded-full bg-gold py-3 font-medium text-accent-foreground">Enviar mensagem</button>
                {sent && <p className="text-center text-sm text-gold">Obrigada! Entraremos em contato em breve.</p>}
              </form>
            </div>
            <iframe title="Mapa" src={MAP} loading="lazy" className="h-full min-h-[400px] w-full rounded-3xl border border-gold/30" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <a href={IG} target="_blank" rel="noreferrer" aria-label="Instagram" className="mx-auto mb-4 inline-flex rounded-full border border-gold/60 p-2 text-gold"><IgIcon /></a>
        <p>© {new Date().getFullYear()} Reginilda Cabeleireira Unissex · Pouso Alegre/MG</p>
      </footer>

      <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed right-5 bottom-5 z-40 rounded-full bg-whatsapp p-4 text-accent-foreground shadow-2xl transition hover:scale-110"><WaIcon className="h-7 w-7" /></a>
      <CookieBanner />
    </div>
  );
}

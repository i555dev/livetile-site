import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const A = "/livetile/";

const images = {
  logo: `${A}livetile-logo-grow.svg`,
  hero: `${A}microgreens-home-slide.png`,
  water: `${A}water-system-slide.png`,
  wall: `${A}hero-modular-wall.png`,
  tile: `${A}product-single-tile.png`,
  light: `${A}lighting-modules.png`,
  tech: `${A}technical-sheet.png`,
  texture: `${A}product-texture-close.png`,
  texture2: `${A}product-texture-close2.png`,
  materialStrip: `${A}material-details-strip.png`,
  front: `${A}front-view.png`,
  section: `${A}side-view.png`,
  assembly: `${A}edge2edge.png`,
  interior: `${A}interior-wall-wide.png`,
  exterior: `${A}exterior-wall-wide.png`,
  brand: `${A}brand-system-board.png`,
  foundation: `${A}foundation-board.png`,
  atmosphere: `${A}atmosphere-board.png`,
};

const navItems = ["Food", "System", "Water", "Module", "Access"];

const greens = ["Basil", "Mint", "Dill", "Parsley", "Arugula", "Cilantro", "Chives", "Microgreens", "Leafy salads"];

const foodBenefits = [
  ["Always fresh", "Harvest only what you need, exactly when you need it."],
  ["Daily greens", "Herbs, salads and microgreens become part of the home."],
  ["7–14 days", "Fast microgreen cycles from seed to plate."],
  ["Within reach", "Fresh nutrition grows directly on the wall, not hidden away."],
];

const waterPoints = [
  ["Water supply", "Clean water and nutrients enter the wall through a dedicated supply line."],
  ["Cascade flow", "Water moves through connected modules and reaches each insert cup."],
  ["Overflow drain", "Excess water exits through a separate drain line — never the same pipe."],
  ["Service access", "The rear layer remains readable, accessible and maintainable."],
];

const modulePoints = [
  ["Regular hex", "A point-up 200 mm module for precise honeycomb composition."],
  ["45° insert", "The plant cup angles inward so growth emerges from the surface."],
  ["Stone texture", "A tactile shell that feels architectural, not gadget-like."],
  ["Integrated light", "Soft vertical light supports plants and creates atmosphere."],
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src={images.logo} alt="LIVETILE mark" className="h-8 w-8 object-contain mix-blend-multiply" />
      <span className="text-[13px] font-medium tracking-[0.34em] text-[#1f1f1f]">LIVETILE</span>
    </div>
  );
}

function Kicker({ children }) {
  return <div className="mb-5 text-[11px] uppercase tracking-[0.28em] text-[#66735d]">{children}</div>;
}

function ImageFrame({ src, alt, className = "", contain = false }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-[#e7e4dd] ${className}`}>
      <img src={src} alt={alt} className={`h-full w-full ${contain ? "object-contain p-4 md:p-8" : "object-cover"}`} />
    </div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  return (
    <form
  action="https://formspree.io/f/mgoqwogg"
  method="POST"
  className="mt-8 flex flex-col gap-3 sm:flex-row"
>
  <input
    type="email"
    name="email"
    required
    placeholder="Email address"
    className="min-h-14 flex-1 rounded-full border border-black/10 bg-white/70 px-6 text-sm text-[#1f1f1f] outline-none transition placeholder:text-[#8c8982] focus:border-[#66735d]"
  />

  <button className="group min-h-14 rounded-full bg-[#1f1f1f] px-7 text-sm font-medium text-[#f3f2ee] transition hover:bg-black">
    Request early access
    <ArrowUpRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </button>
</form>
  );
}

export default function LivetileWebsite() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, -80]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f2ee] text-[#1f1f1f] selection:bg-[#9dbb92] selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(31,31,31,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(31,31,31,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/[0.06] bg-[#f3f2ee]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.24em] text-[#6f6c66] md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#1f1f1f]">
                {item}
              </a>
            ))}
          </nav>
          <a href="#access" className="hidden rounded-full border border-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-[#4c4944] transition hover:border-black/25 hover:text-black md:block">
            Early access
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-black/10 bg-[#f3f2ee] px-5 py-5 md:hidden">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-3 text-sm uppercase tracking-[0.25em] text-[#4c4944]" onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="relative px-5 pb-14 pt-24 md:px-8 md:pb-28 md:pt-36">
  <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.78fr_1.22fr]">

    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="relative z-10"
    >

      <div className="mb-10 text-[11px] uppercase tracking-[0.34em] text-[#66735d]">
        Fresh greens. Living wall. Calm technology.
      </div>

      <h1 className="max-w-3xl text-4xl font-light tracking-[-0.055em] text-[#1f1f1f] md:text-7xl lg:text-8xl">
        Fresh greens, built into the wall.
      </h1>

      <p className="mt-7 max-w-xl text-lg font-light leading-8 text-[#5f5b54]">
        LIVETILE is a modular wall system for growing fresh herbs,
        salads and microgreens at home — basil, mint, dill,
        parsley and leafy greens, always alive and always within reach.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="#access"
          className="rounded-full bg-[#1f1f1f] px-7 py-4 text-center text-sm font-medium text-[#f3f2ee] transition hover:bg-black"
        >
          Join waitlist
        </a>

        <a
          href="#food"
          className="rounded-full border border-black/10 bg-white/40 px-7 py-4 text-center text-sm text-[#4c4944] transition hover:border-black/25 hover:text-black"
        >
          Explore system
        </a>
      </div>
    </motion.div>

    <motion.div style={{ y: heroY }} className="relative">
      <ImageFrame
        src={images.hero}
        alt="LIVETILE fresh herbs and microgreens at home"
        className="min-h-[340px] md:min-h-[620px] shadow-2xl shadow-black/10"
      />
    </motion.div>
  </div>
</section>
      <section id="food" className="px-5 py-14 md:px-8 md:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <div>
        <Kicker>Living nutrition</Kicker>

        <h2 className="max-w-4xl text-3xl font-light tracking-[-0.04em] md:text-6xl">
          Not only atmosphere. Everyday food, grown at home.
        </h2>
      </div>

      <p className="max-w-xl text-base leading-8 text-[#605c55]">
        The system is designed first as a calm domestic food source:
        fresh herbs, vitamin-rich microgreens and salad leaves growing
        directly on the wall. It looks architectural because the food
        system deserves to belong in the interior.
      </p>
    </div>

    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <ImageFrame
        src={images.wall}
        alt="LIVETILE modular wall with plants and light"
        className="min-h-[320px] md:min-h-[560px] shadow-xl shadow-black/5"
      />

      <div className="grid gap-5">
        <div className="rounded-[2rem] border border-black/8 bg-white/60 p-5 md:p-8">
          <div className="mb-6 text-[11px] uppercase tracking-[0.25em] text-[#8c8982]">
            Grow what you love
          </div>

          <div className="flex flex-wrap gap-2">
            {greens.map((green) => (
              <span
                key={green}
                className="rounded-full border border-black/10 bg-[#f3f2ee] px-4 py-2 text-sm text-[#4f4b45]"
              >
                {green}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {foodBenefits.map(([title, body]) => (
            <div
              key={title}
              className="rounded-[1.5rem] border border-black/8 bg-white/55 p-5"
            >
              <h3 className="text-lg font-light tracking-[-0.02em]">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#68645d]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="system" className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <Kicker>Living wall system</Kicker>
            <h2 className="max-w-4xl text-4xl font-light tracking-[-0.045em] md:text-6xl">
              A modular surface for growing, watering and lighting plants cleanly.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#605c55]">
              LIVETILE combines a textured hexagonal shell, angled plant insert, integrated lighting and irrigation routing into one repeatable wall module. The result is useful, edible and architectural at the same time.
            </p>
          </div>
          <ImageFrame src={images.light} alt="LIVETILE modules with integrated lighting" className="min-h-[560px] shadow-xl shadow-black/5" />
        </div>
      </section>

      <section id="water" className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Kicker>Water logic</Kicker>
              <h2 className="max-w-4xl text-4xl font-light tracking-[-0.045em] md:text-6xl">
                Separate water in. Separate overflow out.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#605c55]">
              The wall uses a closed irrigation logic with two different lines: clean supply water enters the modules, while excess water leaves through a separate overflow drain. One pipe cannot do both jobs.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <ImageFrame src={images.water} alt="LIVETILE irrigation system diagram" className="min-h-[640px] bg-white shadow-xl shadow-black/5" />
            <div className="grid gap-4">
              {waterPoints.map(([title, body], i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.05 }} className="rounded-[1.6rem] border border-black/8 bg-white/60 p-6">
                  <div className="mb-8 text-xs text-[#9b978f]">0{i + 1}</div>
                  <h3 className="text-xl font-light tracking-[-0.02em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#68645d]">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="module" className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Kicker>The module</Kicker>
              <h2 className="max-w-4xl text-4xl font-light tracking-[-0.045em] md:text-6xl">
                A physical tile, not a decorative panel.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#66625a]">
              Textured exterior, smooth interior, angled insert, lighting aperture, rear access and edge-to-edge hex connection.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
            <ImageFrame src={images.tile} alt="single LIVETILE hexagonal module" contain className="min-h-[560px] bg-[#e8e5df]" />
            <div className="grid gap-5 md:grid-cols-2">
              {modulePoints.map(([title, body], i) => (
                <div key={title} className="rounded-[1.6rem] border border-black/8 bg-white/60 p-6">
                  <div className="mb-8 text-xs text-[#9b978f]">0{i + 1}</div>
                  <h3 className="text-xl font-light tracking-[-0.02em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#68645d]">{body}</p>
                </div>
              ))}
              <ImageFrame src={images.front} alt="front view diagram" contain className="min-h-[260px] bg-white" />
              <ImageFrame src={images.section} alt="section view diagram" contain className="min-h-[260px] bg-white" />
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="px-5 py-14 md:px-8 md:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
      <div>
        <Kicker>Material & wall logic</Kicker>

        <h2 className="max-w-4xl text-3xl font-light tracking-[-0.04em] md:text-6xl">
          A quiet surface with visible system intelligence.
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-[#66625a]">
        The product should feel architectural and useful: matte texture,
        precise seams, living inserts, soft light and readable irrigation.
      </p>
    </div>

    <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-[2rem] bg-[#1f1f1f] p-5 text-[#f3f2ee] md:rounded-[2.5rem] md:p-8">
        <div className="mb-6 flex flex-col gap-2 text-[11px] uppercase tracking-[0.24em] text-[#b8b6b0] sm:flex-row sm:items-center sm:justify-between md:mb-8">
          <span>Surface detail</span>
          <span>Matte / mineral / precise</span>
        </div>

        <ImageFrame
          src={images.texture}
          alt="LIVETILE stone-like texture and material close-up"
          className="min-h-[300px] md:min-h-[460px] bg-[#242420]"
        />

        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#c9c6bd] md:mt-7">
          The shell should feel closer to mineral composite or architectural
          stone than consumer plastic. Texture matters because the object lives
          at wall scale.
        </p>

        <div className="mt-5 md:mt-7">
          <ImageFrame
            src={images.texture2}
            alt="LIVETILE stone-like texture and material close-up"
            className="min-h-[300px] md:min-h-[460px] bg-[#242420]"
          />
        </div>
      </div>

      <div className="grid gap-5">
        <div className="rounded-[2rem] border border-black/8 bg-white/60 p-5 md:p-6">
          <div className="mb-5 flex flex-col gap-2 text-[11px] uppercase tracking-[0.24em] text-[#8c8982] sm:flex-row sm:items-center sm:justify-between">
            <span>System composition</span>
            <span>Edge-to-edge</span>
          </div>

          <ImageFrame
            src={images.assembly}
            alt="LIVETILE modular honeycomb assembly logic"
            contain
            className="min-h-[240px] md:min-h-[300px] bg-white"
          />

          <p className="mt-5 text-sm leading-7 text-[#68645d]">
            Modules connect side by side into a honeycomb wall. Living inserts
            appear through repetition, not as decoration.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white/60 p-5 md:p-6">
          <div className="mb-5 flex flex-col gap-2 text-[11px] uppercase tracking-[0.24em] text-[#8c8982] sm:flex-row sm:items-center sm:justify-between">
            <span>Technical sheet</span>
            <span>Prototype logic</span>
          </div>

          <ImageFrame
            src={images.tech}
            alt="LIVETILE technical sheet"
            contain
            className="min-h-[240px] md:min-h-[300px] bg-white"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="px-5 py-14 md:px-8 md:py-32">
  <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr]">
    <div>
      <Kicker>Where it belongs</Kicker>

      <h2 className="max-w-4xl text-3xl font-light tracking-[-0.04em] md:text-6xl">
        Kitchen, studio, cafe, showroom, apartment.
      </h2>

      <p className="mt-5 max-w-xl text-base leading-7 text-[#605c55] md:mt-7 md:leading-8">
        The first installations should feel curated and useful:
        a beautiful working wall that grows real food and gives
        the interior a living rhythm.
      </p>
    </div>

    <ImageFrame
      src={images.interior}
      alt="LIVETILE interior wall installation"
      className="min-h-[320px] md:min-h-[540px] shadow-xl shadow-black/5"
    />
  </div>
</section>
      <section id="access" className="px-5 py-16 md:px-8 md:py-36">
  <div className="mx-auto grid max-w-7xl items-center gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr]">
    <div>
      <Kicker>System of living architectural surfaces</Kicker>

      <h2 className="mt-6 max-w-3xl text-3xl font-light tracking-[-0.04em] md:mt-10 md:text-6xl">
        Early access for homes and curated installations.
      </h2>

      <p className="mt-5 max-w-xl text-base leading-7 text-[#605c55] md:mt-6 md:leading-8">
        For people who want fresh greens at home — and for architects,
        interior studios, cafes, hospitality spaces and showrooms
        building the first LIVETILE walls.
      </p>

      <WaitlistForm />
    </div>

    <ImageFrame
      src={images.exterior}
      alt="LIVETILE exterior or terrace wall installation"
      className="min-h-[320px] md:min-h-[520px]"
    />
  </div>
</section>

      <footer className="border-t border-black/8 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-[11px] uppercase tracking-[0.25em] text-[#8c8982] md:flex-row">
          <span>LIVETILE</span>
          <span>Fresh greens / Modular wall system / Integrated irrigation / Calm technology</span>
        </div>
      </footer>
    </main>
  );
}

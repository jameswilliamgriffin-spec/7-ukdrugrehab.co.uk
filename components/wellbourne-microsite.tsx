"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LiveChatWidget } from "@livechat/widget-react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phoneNumber = "0330 043 1715";
const phoneHref = "tel:+443300431715";
const contactUrl = "https://thewellbourneclinic.co.uk/contact/";
const mainSiteUrl = "https://thewellbourneclinic.co.uk/";
const drugsRehabUkUrl = "https://drugsrehabuk.com";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease },
};

const heroTrustMarkers = [
  { icon: LockKeyhole, title: "100% confidential", text: "Private from your first call" },
  { icon: BadgeCheck, title: "CQC registered", text: "Standards you can check" },
  { icon: Clock3, title: "Here every day", text: "Talk when you're ready" },
];

const heroVisuals = [
  {
    src: "/images/wellbourne/talking-recovery.png",
    alt: "A calm therapeutic conversation at The Wellbourne Clinic",
    className:
      "left-[5%] top-[16%] h-[56%] w-[58%] rounded-[2rem] shadow-editorial lg:left-[3%] lg:top-[14%]",
    imageClassName: "object-cover object-center",
    delay: 0.1,
  },
  {
    src: "/images/wellbourne/talking-over-tea.png",
    alt: "Female-led support conversation in a relaxed residential setting",
    className:
      "right-[3%] top-[7%] h-[33%] w-[36%] rounded-[1.65rem] shadow-[0_24px_70px_rgba(17,24,39,0.26)]",
    imageClassName: "object-cover object-center",
    delay: 0.18,
  },
  {
    src: "/images/wellbourne/therapy-chairs.png",
    alt: "Private therapy chairs in a quiet treatment room",
    className:
      "bottom-[7%] right-[9%] h-[38%] w-[44%] rounded-[1.8rem] shadow-[0_26px_78px_rgba(17,24,39,0.28)]",
    imageClassName: "object-cover object-center",
    delay: 0.26,
  },
  {
    src: "/images/wellbourne/book-and-tea.png",
    alt: "Tea and reading in a calm recovery space",
    className:
      "bottom-[13%] left-[14%] h-[25%] w-[31%] rounded-[1.35rem] shadow-[0_20px_58px_rgba(17,24,39,0.22)]",
    imageClassName: "object-cover object-center",
    delay: 0.34,
  },
];

const treatmentSteps = [
  {
    number: "01",
    title: "Assessment",
    text: "A private clinical conversation to understand the substances involved, your health history and what care is most appropriate.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Detox",
    text: "Medically managed withdrawal in a residential setting — safe, supervised and planned around the specific substances involved.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Therapy",
    text: "Individual and group sessions that explore the patterns, triggers and experiences that sit beneath substance use.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Aftercare",
    text: "A realistic plan for life after treatment — built before you leave, not handed to you at the door.",
    icon: Route,
  },
];

const locations = [
  {
    city: "Birmingham",
    region: "West Midlands",
    href: "/birmingham",
    image: "/images/wellbourne/friends-laughing.png",
    note: "Private residential care around 40 minutes south of the city — close enough for family, far enough for focus.",
  },
  {
    city: "Coventry",
    region: "West Midlands",
    href: "/coventry",
    image: "/images/wellbourne/talking-over-tea.png",
    note: "The Wellbourne Clinic is around 15 minutes from Coventry — the closest major city to the clinic.",
  },
  {
    city: "Warwickshire",
    region: "Heart of England",
    href: "/warwickshire",
    image: "/images/wellbourne/walking-in-meadow.png",
    note: "The clinic is based in Kenilworth — private residential treatment within Warwickshire itself.",
  },
  {
    city: "Solihull",
    region: "West Midlands",
    href: "/solihull",
    image: "/images/wellbourne/morning-coffee.png",
    note: "Confidential, discreet care for professionals and families, around 30 minutes from Solihull.",
  },
  {
    city: "West Midlands",
    region: "Regional overview",
    href: "/west-midlands",
    image: "/images/wellbourne/grass-with-path.png",
    note: "An overview of drug rehab across the region and where The Wellbourne Clinic sits within it.",
  },
];

const substanceLinks = [
  {
    label: "Cocaine addiction",
    href: "https://thewellbourneclinic.co.uk/what-is-cocaine-addiction-understanding-the-risks-and-recovery/",
    category: "Stimulants",
  },
  {
    label: "Cannabis dependency",
    href: "https://thewellbourneclinic.co.uk/drug-rehab/",
    category: "Cannabinoids",
  },
  {
    label: "Prescription drug detox",
    href: "https://thewellbourneclinic.co.uk/prescription-drug-detox-overcoming-hidden-addictions/",
    category: "Opioids & benzos",
  },
  {
    label: "Heroin and opioids",
    href: "https://thewellbourneclinic.co.uk/the-dangers-of-heroin-use-what-you-need-to-know/",
    category: "Opioids",
  },
];

const faqs = [
  {
    q: "What is the difference between drug detox and drug rehab?",
    a: "Drug detox addresses the physical process of withdrawing from substances safely, usually with medical supervision and sometimes prescribed medication. Drug rehab goes further — it explores the psychological, behavioural and emotional factors that sustain addiction through therapy, structured support and recovery planning. Most people with significant drug dependency benefit from both.",
  },
  {
    q: "Where exactly is The Wellbourne Clinic?",
    a: "43 Waverley Road, Kenilworth, Warwickshire, CV8 1JL. Kenilworth is a market town between Coventry and Warwick, with good road links from across the West Midlands. It is around 15 minutes from Coventry, 30 minutes from Solihull and 40 minutes from Birmingham city centre.",
  },
  {
    q: "How quickly can I start treatment?",
    a: "First conversations can take place the same day. A clinical assessment is usually arranged within a day or two of initial contact, and admission dates depend on the individual's situation and the clinic's availability. If there is medical urgency, the team can often move more quickly.",
  },
  {
    q: "Is treatment confidential?",
    a: "Yes. Your first call is entirely private. The clinic does not contact your GP, employer or family without your explicit consent. You can ask questions and understand your options fully before making any decision.",
  },
  {
    q: "Do I need to live in the West Midlands to receive treatment here?",
    a: "No. People travel to The Wellbourne Clinic from across the UK — from London, the North West, the East Midlands and beyond. Being local makes some things easier, particularly family visits and the transition home after treatment, but proximity is not a requirement.",
  },
  {
    q: "What if drug rehab hasn't worked for me before?",
    a: "Previous treatment that didn't hold is not a barrier to trying again — and understanding what didn't work last time is genuinely useful information. A thorough clinical assessment helps identify whether a different approach, environment or programme length might make a more lasting difference.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 inline-flex rounded-full border border-graphite/10 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-ink shadow-sm backdrop-blur">
      {children}
    </p>
  );
}

export function WellbourneMicrosite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatVisibility, setChatVisibility] = useState<"maximized" | "minimized">("minimized");
  const openChat = () => setChatVisibility("maximized");

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-graphite">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-white/55 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" aria-label="UK Drug Rehab home">
            <Image
              src="/mainlogo.png"
              alt="The Wellbourne Clinic"
              width={280}
              height={42}
              className="h-auto w-[200px] sm:w-[260px]"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
            <a href="#treatment" className="transition hover:text-graphite">About treatment</a>
            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-graphite">
                Locations
                <ChevronDown size={13} className="transition duration-200 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-52 overflow-hidden rounded-2xl border border-graphite/8 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                  {locations.map((loc) => (
                    <Link
                      key={loc.city}
                      href={loc.href}
                      className="flex items-center justify-between px-4 py-3 text-sm text-graphite/80 transition hover:bg-cream hover:text-graphite"
                    >
                      {loc.city}
                      <ArrowRight size={13} className="text-muted" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <a href="#faqs" className="transition hover:text-graphite">FAQs</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a href={phoneHref} className="flex items-center gap-2 text-sm font-semibold text-graphite transition hover:text-brand">
              <Phone size={15} />{phoneNumber}
            </a>
            <button
              type="button"
              onClick={openChat}
              className="flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#e88975]"
            >
              <MessageCircle size={15} />
              Speak privately
            </button>
          </div>
          <button
            className="grid size-11 place-items-center rounded-full border border-black/10 lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-black/5 bg-cream px-5 py-4 text-sm font-semibold">
            <div className="flex flex-col gap-4">
              <a href="#treatment" onClick={() => setMenuOpen(false)}>About treatment</a>
              <div>
                <span className="text-graphite">Locations</span>
                <ul className="mt-2 flex flex-col gap-0.5 border-l-2 border-brand/40 pl-4">
                  {locations.map((loc) => (
                    <li key={loc.city}>
                      <Link
                        href={loc.href}
                        className="flex items-center justify-between py-1.5 font-medium text-muted hover:text-graphite"
                        onClick={() => setMenuOpen(false)}
                      >
                        {loc.city} <ArrowRight size={13} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#faqs" onClick={() => setMenuOpen(false)}>FAQs</a>
              <a href={phoneHref}>Call {phoneNumber}</a>
            </div>
          </nav>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        id="top"
        className="hero-atmosphere relative overflow-hidden px-5 pb-14 pt-8 text-white md:px-8 md:pb-18 md:pt-10"
      >
        <div className="absolute inset-0 -z-10">
          <div className="hero-gradient-drift absolute inset-0" />
          <div className="hero-noise absolute inset-0 opacity-[0.18]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 to-transparent" />
        </div>
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 py-6 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease }}
            className="relative z-10 max-w-3xl"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-xl">
              <Sparkles size={15} className="text-brand" />
              Private drug rehab — West Midlands
            </p>
            <h1 className="max-w-[760px] text-balance font-heading text-[2.65rem] font-semibold leading-[0.98] tracking-normal text-white sm:text-[3.45rem] md:text-[4.85rem]">
              <span className="block">Drug Rehab in the</span>
              <span className="block">West Midlands.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/78 md:text-xl md:leading-9">
              Private residential drug rehab and detox, based in Kenilworth — serving Birmingham,
              Coventry, Warwickshire, Solihull and the surrounding region.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/76">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 backdrop-blur-xl">
                <MapPin size={15} className="text-brand" />
                43 Waverley Rd, Kenilworth CV8 1JL
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 backdrop-blur-xl">
                <Check size={15} className="text-brand" />
                In the heart of the West Midlands
              </span>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openChat}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-extrabold text-graphite shadow-[0_20px_56px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white hover:shadow-[0_26px_70px_rgba(241,152,133,0.32)]"
              >
                Talk confidentially <MessageCircle size={18} />
              </button>
              <a
                href="#locations"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/28 bg-white/10 px-7 py-4 text-base font-bold text-white shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/18"
              >
                Find your location <ArrowRight size={18} />
              </a>
            </div>
            <dl className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
              {heroTrustMarkers.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/20 bg-white/[0.095] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.14]"
                >
                  <item.icon className="mb-4 h-5 w-5 text-brand" />
                  <dt className="text-base font-bold tracking-normal text-white">{item.title}</dt>
                  <dd className="mt-1 text-sm leading-6 text-white/67">{item.text}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="relative z-10 lg:min-h-[720px]"
            aria-label="The Wellbourne Clinic treatment and recovery imagery"
          >
            <div className="relative min-h-[430px] sm:min-h-[560px] lg:absolute lg:inset-0 lg:min-h-0">
              <div className="absolute left-[6%] top-[8%] h-24 w-24 rounded-full bg-brand/45 blur-3xl" />
              <div className="absolute bottom-[14%] right-[5%] h-36 w-36 rounded-full bg-sky-300/25 blur-3xl" />
              {heroVisuals.map((visual) => (
                <motion.div
                  key={visual.src}
                  className={`hero-float-card absolute overflow-hidden border border-white/35 bg-white/12 p-1.5 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:rotate-0 hover:border-white/55 hover:bg-white/18 ${visual.className}`}
                  initial={{ opacity: 0, y: 26, rotate: -2 }}
                  animate={{ opacity: 1, y: [0, -9, 0], rotate: [0, 1.1, 0] }}
                  transition={{
                    opacity: { duration: 0.55, delay: visual.delay, ease },
                    y: { duration: 7.5, delay: visual.delay, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8.5, delay: visual.delay, repeat: Infinity, ease: "easeInOut" },
                  }}
                  whileHover={{ y: -14, rotate: 0, scale: 1.015 }}
                >
                  <div className="relative h-full overflow-hidden rounded-[inherit]">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      className={visual.imageClassName}
                      sizes="(max-width: 768px) 68vw, (max-width: 1200px) 44vw, 34vw"
                      priority={visual.src.includes("talking-recovery")}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0)_45%,rgba(17,24,39,0.32)_100%)]" />
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.48, ease }}
              className="relative z-10 mx-auto mt-4 w-full max-w-[520px] rounded-[1.45rem] border border-white bg-white p-4 text-graphite shadow-[0_28px_76px_rgba(0,0,0,0.28)] sm:w-[88%] lg:absolute lg:bottom-0 lg:left-auto lg:right-[4%] lg:mt-0 lg:w-[58%] lg:translate-x-0"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-ink">
                    The Wellbourne Clinic
                  </p>
                  <p className="mt-1 text-lg font-bold leading-6 tracking-normal">
                    Private rehab, detox and therapy in Kenilworth
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-graphite text-white">
                  <ShieldCheck size={19} />
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-graphite/72">
                <span className="inline-flex min-w-0 items-center gap-2 whitespace-nowrap">
                  <Check size={15} className="text-brand" />
                  Residential care
                </span>
                <span className="inline-flex min-w-0 items-center gap-2 whitespace-nowrap">
                  <Check size={15} className="text-brand" />
                  Family-accessible location
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What drug rehab involves ── */}
      <section id="treatment" className="scroll-mt-24 bg-porcelain px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
            <SectionLabel>What treatment involves</SectionLabel>
            <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.8rem]">
              From first call to life after rehab.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-8 text-muted">
              Drug rehab is more than detox. A proper programme addresses the physical and psychological
              dimensions of addiction — with care planned around the individual, not the substance alone.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {treatmentSteps.map((step, index) => (
              <motion.article
                key={step.title}
                {...reveal}
                transition={{ duration: 0.65, delay: index * 0.08, ease }}
                className="flex flex-col rounded-[2rem] border border-graphite/10 bg-white p-7 shadow-card"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand bg-brand-soft text-sm font-extrabold tracking-[0.12em] text-brand">
                  {step.number}
                </span>
                <step.icon className="mb-4 h-5 w-5 text-brand" />
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">{step.text}</p>
              </motion.article>
            ))}
          </div>
          <motion.div
            {...reveal}
            className="mt-10 rounded-[1.5rem] border border-brand/25 bg-brand-soft/65 p-6 md:flex md:items-center md:justify-between md:gap-8"
          >
            <p className="max-w-3xl leading-7 text-graphite/75">
              <strong className="text-graphite">Drug rehab and drug detox are not the same thing.</strong>{" "}
              Detox manages physical withdrawal. Rehab addresses what lies beneath it. Both matter for lasting recovery.
            </p>
            <div className="mt-5 flex shrink-0 flex-col gap-3 md:mt-0">
              <a
                href={drugsRehabUkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-brand-ink underline decoration-brand/40 underline-offset-4"
              >
                Substance-specific guides <ArrowRight size={16} />
              </a>
              <a
                href="https://thewellbourneclinic.co.uk/what-makes-the-west-midlands-a-trusted-choice-for-drug-rehab/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-brand-ink underline decoration-brand/40 underline-offset-4"
              >
                Drug rehab in the West Midlands <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Editorial image strip — documentary moment ── */}
      <section aria-label="Recovery imagery" className="overflow-hidden bg-cream py-4 md:py-5">
        <div className="grid grid-cols-3 gap-2 px-2 md:gap-3 md:px-3">
          {[
            {
              src: "/images/wellbourne/book-and-tea.png",
              alt: "A book and tea — the quiet, reflective moments that mark the early days of recovery",
              caption: "Reflection",
            },
            {
              src: "/images/wellbourne/talking-over-tea.png",
              alt: "Two people in open conversation — the honest dialogue that recovery begins with",
              caption: "Connection",
            },
            {
              src: "/images/wellbourne/yoga-in-rehab.png",
              alt: "Yoga as part of a residential rehabilitation programme — movement and mindfulness in recovery",
              caption: "Wellbeing",
            },
          ].map((img, i) => (
            <motion.div
              key={img.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, delay: i * 0.1, ease }}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 md:bottom-5 md:left-5 md:text-sm">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Why local residential ── */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div {...reveal} className="relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/images/wellbourne/therapy-woodland-chat.png"
              alt="A therapy session in an outdoor woodland setting — The Wellbourne Clinic's approach to human, grounded care"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(17,24,39,0.7)_100%)]" />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/30 bg-white/20 px-5 py-3 text-white backdrop-blur-md">
              <p className="text-sm font-semibold">Residential · Therapeutic · Local</p>
            </div>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
            <SectionLabel>Why residential, why here</SectionLabel>
            <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.8rem]">
              A clinic in the region.<br />Not a referral elsewhere.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              The Wellbourne Clinic provides private residential drug rehab from Kenilworth — in the heart
              of the West Midlands. For people across Birmingham, Coventry, Warwickshire and Solihull,
              that means treatment that is close enough to be practical for family, and far enough from
              daily life to allow real focus.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Users, title: "Family involvement", text: "Planned visits and family sessions are accessible from across the region." },
                { icon: ShieldCheck, title: "Residential privacy", text: "A residential setting means stepping away from familiar pressures and routines." },
                { icon: Stethoscope, title: "Clinical safety", text: "Medically managed detox with appropriate supervision throughout." },
                { icon: HeartHandshake, title: "Aftercare continuity", text: "Coming home after treatment is a short, manageable journey from Kenilworth." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 rounded-2xl border border-graphite/10 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-card">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Human pull quote — family and connection ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-[480px] md:h-[560px]">
          <Image
            src="/images/wellbourne/father-and-son-walking.png"
            alt="A father and son walking together — relationships matter deeply in the recovery process"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-midnight/62" />
          <motion.div
            {...reveal}
            className="relative flex h-full flex-col items-center justify-center px-5 text-center text-white md:px-8"
          >
            <Sparkles className="mb-6 h-7 w-7 text-brand" />
            <blockquote className="mx-auto max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
              &ldquo;Many people who reach out are doing so for someone they love.&rdquo;
            </blockquote>
            <p className="mt-6 max-w-xl text-lg text-white/68">
              Whether you are seeking help for yourself or for someone close to you — we are here to listen, without pressure.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={openChat}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#e88975]"
              >
                <MessageCircle size={17} /> Talk to us confidentially
              </button>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Phone size={17} /> {phoneNumber}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Location cards ── */}
      <section id="locations" className="scroll-mt-24 bg-porcelain px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
            <SectionLabel>Find your location</SectionLabel>
            <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.8rem]">
              Where are you searching from?
            </h2>
            <p className="mt-5 text-pretty text-lg leading-8 text-muted">
              Each page gives specific information about drug rehab from your area — including travel to
              the clinic, what that means for family visits, and local considerations.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.city}
                {...reveal}
                transition={{ duration: 0.65, delay: index * 0.07, ease }}
              >
                <Link
                  href={loc.href}
                  className="group relative block overflow-hidden rounded-[2rem] border border-white/75 shadow-[0_18px_48px_rgba(30,24,18,0.18)] ring-1 ring-graphite/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_68px_rgba(30,24,18,0.24)] hover:ring-brand/35"
                  style={{ minHeight: "320px" }}
                >
                  <Image
                    src={loc.image}
                    alt={`Drug rehab options near ${loc.city}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.18)_0%,rgba(17,24,39,0.52)_48%,rgba(17,24,39,0.88)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_28%)] opacity-70" />
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/35 bg-white/30 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-md">
                        {loc.region}
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/25 text-white shadow-sm backdrop-blur-md transition duration-300 group-hover:bg-brand">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                        Drug Rehab in {loc.city}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/78">{loc.note}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Substance cross-links — image-led panel ── */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            className="overflow-hidden rounded-[2rem] shadow-soft lg:grid lg:grid-cols-[2fr_3fr]"
          >
            <div className="relative hidden min-h-[500px] lg:block">
              <Image
                src="/images/wellbourne/reflection.png"
                alt="A quiet moment of reflection — the beginning of understanding the path ahead"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 0vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_60%,rgba(255,252,247,0.35)_100%)]" />
            </div>
            <div className="bg-porcelain p-8 lg:p-12">
              <SectionLabel>Substance-specific guides</SectionLabel>
              <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.2rem]">
                Looking for information about a specific drug?
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Detailed guides on cocaine, cannabis, prescription drugs, heroin and opioids are
                available at{" "}
                <a
                  href={drugsRehabUkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-ink underline decoration-brand/40 underline-offset-4"
                >
                  drugsrehabuk.com
                </a>
                .
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {substanceLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.07, ease }}
                    className="group flex items-center justify-between gap-5 rounded-2xl border border-graphite/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">{item.category}</p>
                      <p className="mt-1 font-semibold leading-6">{item.label}</p>
                    </div>
                    <ArrowRight size={16} className="shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-brand" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Quote break — atmospheric full-bleed ── */}
      <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36">
        <Image
          src="/images/wellbourne/forest.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-midnight/74" />
        <motion.div {...reveal} className="relative mx-auto max-w-4xl text-center text-white">
          <Sparkles className="mx-auto mb-6 h-8 w-8 text-brand" />
          <blockquote className="text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
            &ldquo;You do not have to have the words. A first call is enough to begin.&rdquo;
          </blockquote>
          <p className="mt-6 text-lg text-white/65">Confidential. No obligation. Available today.</p>
          <a
            href={phoneHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#e88975]"
          >
            <Phone size={17} /> Call {phoneNumber}
          </a>
        </motion.div>
      </section>

      {/* ── FAQs ── */}
      <section id="faqs" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:items-start">
            <motion.div {...reveal}>
              <SectionLabel>Common questions</SectionLabel>
              <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.2rem]">
                Questions people ask before calling.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Clear answers about drug rehab, detox and treatment at The Wellbourne Clinic.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={openChat}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#e88975]"
                >
                  <MessageCircle size={17} /> Chat now
                </button>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-graphite/10 bg-white px-7 py-4 text-base font-bold text-graphite transition hover:-translate-y-0.5 hover:border-brand/50"
                >
                  <Phone size={17} /> Call {phoneNumber}
                </a>
              </div>
              <div className="relative mt-10 hidden overflow-hidden rounded-[1.5rem] lg:block" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/images/wellbourne/book-and-tea.png"
                  alt="A quiet, reflective moment — reading and a cup of tea"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 0vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(17,24,39,0.55)_100%)]" />
              </div>
            </motion.div>
            <motion.div {...reveal}>
              <Accordion type="single" collapsible className="divide-y divide-graphite/10">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.q} value={`faq-${index}`} className="border-none">
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-midnight px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div {...reveal}>
              <SectionLabel>When you are ready</SectionLabel>
              <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] text-white md:text-[3.8rem]">
                A private conversation is all it takes to start.
              </h2>
            </motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
              <p className="text-lg leading-8 text-white/68">
                Tell us as much or as little as you can. The team will listen, explain the options and
                help you find a sensible next step — without pressure and without obligation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#e88975]"
                >
                  <Phone size={17} /> Call {phoneNumber}
                </a>
                <a
                  href={contactUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Send a message <ArrowRight size={17} />
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/55">
                <span className="flex items-center gap-2"><Check size={15} className="text-brand" /> Confidential</span>
                <span className="flex items-center gap-2"><Check size={15} className="text-brand" /> No obligation</span>
                <span className="flex items-center gap-2"><Check size={15} className="text-brand" /> Available today</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0a1018] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Image
              src="/mainlogo.png"
              alt="The Wellbourne Clinic"
              width={240}
              height={36}
              className="h-auto w-[180px] brightness-0 invert opacity-70"
            />
            <div className="flex flex-wrap gap-5 text-sm text-white/40">
              <a href={mainSiteUrl} className="hover:text-white/70">Privacy</a>
              <a href={mainSiteUrl} className="hover:text-white/70">Terms</a>
              <a href={mainSiteUrl} className="hover:text-white/70">CQC information</a>
              <a
                href="https://thewellbourneclinic.co.uk/drug-rehab/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70"
              >
                Drug rehab at Wellbourne
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8">
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} The Wellbourne Clinic — 43 Waverley Road, Kenilworth CV8 1JL
            </p>
          </div>
        </div>
      </footer>

      <LiveChatWidget license="19162658" visibility={chatVisibility} />
    </main>
  );
}

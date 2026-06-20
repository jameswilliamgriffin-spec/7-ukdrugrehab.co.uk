"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LiveChatWidget } from "@livechat/widget-react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
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
  Stethoscope,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLocations = [
  { city: "Birmingham", href: "/birmingham" },
  { city: "Coventry", href: "/coventry" },
  { city: "Warwickshire", href: "/warwickshire" },
  { city: "Solihull", href: "/solihull" },
  { city: "West Midlands", href: "/west-midlands" },
];

export interface RelatedLocation {
  city: string;
  href: string;
  image: string;
  note: string;
}

export interface LocationData {
  city: string;
  region: string;
  heroHeadline: string;
  heroSubline: string;
  heroImage: string;
  contextTitle: string;
  contextLead: string;
  contextBody: string;
  proximityTitle: string;
  proximityLead: string;
  proximityDetail: string;
  site6: {
    label: string;
    href: string;
    description: string;
  };
  faqs: Array<{ q: string; a: string }>;
  relatedLocations: RelatedLocation[];
  localStat?: {
    figure: string;
    label: string;
    subFigure?: string;
    subLabel?: string;
    sourceText: string;
    sourceUrl: string;
    cityBreakdown?: Array<{ city: string; figure: string; href: string }>;
  };
}

const phoneNumber = "0330 043 1715";
const phoneHref = "tel:+443300431715";
const contactUrl = "https://thewellbourneclinic.co.uk/contact/";
const mainSiteUrl = "https://thewellbourneclinic.co.uk/";
const drugRehabUrl = "https://thewellbourneclinic.co.uk/drug-rehab/";
const drugDetoxUrl = "https://thewellbourneclinic.co.uk/drug-detox/";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease },
};

const treatmentSteps = [
  {
    number: "01",
    title: "Assessment",
    text: "A thorough clinical conversation — private, unhurried and without obligation.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Detox",
    text: "Medically managed withdrawal, planned around the specific substances and your health.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Therapy",
    text: "Individual and group work to understand what lies beneath the addiction.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Aftercare",
    text: "A realistic plan for life after residential care — built before you leave.",
    icon: Route,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 inline-flex rounded-full border border-graphite/10 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-ink shadow-sm backdrop-blur">
      {children}
    </p>
  );
}

interface LocationPageProps {
  data: LocationData;
}

export function LocationPage({ data }: LocationPageProps) {
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
            <Link href="/#treatment" className="transition hover:text-graphite">About treatment</Link>
            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-graphite">
                Locations
                <ChevronDown size={13} className="transition duration-200 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-52 overflow-hidden rounded-2xl border border-graphite/8 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                  {navLocations.map((loc) => (
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
            <Link href="#faqs" className="transition hover:text-graphite">FAQs</Link>
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
              <Link href="/#treatment" onClick={() => setMenuOpen(false)}>About treatment</Link>
              <div>
                <span className="text-graphite">Locations</span>
                <ul className="mt-2 flex flex-col gap-0.5 border-l-2 border-brand/40 pl-4">
                  {navLocations.map((loc) => (
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
              <Link href="#faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
              <a href={phoneHref}>Call {phoneNumber}</a>
            </div>
          </nav>
        )}
      </header>

      {/* ── Breadcrumb ── */}
      <div className="border-b border-graphite/8 bg-porcelain px-5 py-3 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-graphite">
            <ArrowLeft size={14} />
            Drug Rehab — West Midlands
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="soft-grid absolute inset-0 opacity-35" />
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/8 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease }}
          >
            <SectionLabel>Drug Rehab — {data.region}</SectionLabel>
            <h1 className="text-balance font-heading text-[2.6rem] font-semibold leading-[1] tracking-[-0.05em] text-graphite sm:text-[3.4rem] md:text-[5rem] md:tracking-[-0.055em]">
              {data.heroHeadline}
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-xl leading-9 text-muted">
              {data.heroSubline}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openChat}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-bold text-white shadow-card transition duration-300 hover:-translate-y-0.5 hover:bg-[#e88975] hover:shadow-soft"
              >
                Talk confidentially <MessageCircle size={18} />
              </button>
              <a
                href={phoneHref}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-graphite/10 bg-white/80 px-7 py-4 text-base font-bold text-graphite backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-white"
              >
                <Phone size={18} /> Call {phoneNumber}
              </a>
            </div>
            <dl className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                { icon: LockKeyhole, title: "Confidential", text: "Private from your first call" },
                { icon: BadgeCheck, title: "CQC registered", text: "Standards you can verify" },
                { icon: Clock3, title: "Here every day", text: "Talk when you're ready" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/80 bg-white/60 p-5 shadow-sm backdrop-blur">
                  <item.icon className="mb-3 h-5 w-5 text-brand" />
                  <dt className="text-sm font-semibold">{item.title}</dt>
                  <dd className="mt-1 text-xs leading-5 text-muted">{item.text}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft"
          >
            <Image
              src={data.heroImage}
              alt={`${data.heroHeadline} — The Wellbourne Clinic`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0)_40%,rgba(17,24,39,0.7)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={14} /> 43 Waverley Rd, Kenilworth CV8 1JL
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Local context — entirely location-specific ── */}
      <section className="bg-porcelain px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <motion.div {...reveal}>
              <SectionLabel>{data.city} — local context</SectionLabel>
              <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.6rem]">
                {data.contextTitle}
              </h2>
              <p className="mt-6 text-xl font-medium leading-8 text-graphite/80">
                {data.contextLead}
              </p>
              <p className="mt-5 text-lg leading-8 text-muted">
                {data.contextBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openChat}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#e88975]"
                >
                  <MessageCircle size={16} /> Ask a question
                </button>
                <a
                  href={contactUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-graphite/10 bg-white px-6 py-3 text-sm font-bold text-graphite transition hover:-translate-y-0.5 hover:border-brand/40"
                >
                  Send a message <ArrowRight size={16} />
                </a>
              </div>
              {data.localStat && (
                <div className="mt-8 rounded-[1.5rem] border border-graphite/10 bg-white p-6 shadow-card">
                  <p className="font-heading text-[2.6rem] font-semibold leading-none tracking-[-0.05em] text-graphite">
                    {data.localStat.figure}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">{data.localStat.label}</p>
                  {data.localStat.subFigure && (
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Of those,{" "}
                      <span className="font-semibold text-graphite">{data.localStat.subFigure}</span>{" "}
                      {data.localStat.subLabel}.
                    </p>
                  )}
                  {data.localStat.cityBreakdown && (
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {data.localStat.cityBreakdown.map((item) => (
                        <Link
                          key={item.city}
                          href={item.href}
                          className="rounded-xl border border-graphite/10 bg-cream p-4 transition hover:-translate-y-0.5 hover:border-brand/40"
                        >
                          <p className="font-heading text-xl font-semibold tracking-[-0.03em] text-graphite">
                            {item.figure}
                          </p>
                          <p className="mt-1 text-xs font-medium text-muted">{item.city}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                  <p className="mt-4 text-xs leading-5 text-muted/60">
                    Source:{" "}
                    <a
                      href={data.localStat.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-muted/40 underline-offset-2 hover:text-graphite"
                    >
                      {data.localStat.sourceText}
                    </a>
                  </p>
                </div>
              )}
            </motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="relative min-h-[400px] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/wellbourne/therapy-chairs.png"
                alt="Therapy chairs at The Wellbourne Clinic — a calm, private space for individual sessions"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(17,24,39,0.65)_100%)]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/20 px-5 py-4 text-white backdrop-blur-md">
                <p className="text-sm font-semibold">The Wellbourne Clinic</p>
                <p className="mt-0.5 text-xs text-white/70">43 Waverley Rd, Kenilworth CV8 1JL</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Treatment overview — shared but brief ── */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal}>
            <SectionLabel>What treatment involves</SectionLabel>
            <h2 className="max-w-2xl text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.6rem]">
              Assessment, detox, therapy, aftercare.
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-lg leading-8 text-muted">
              Drug rehab at The Wellbourne Clinic combines medically managed detox with structured
              therapeutic care — planned around the individual. It is residential, which means staying
              at the clinic for the duration of the programme.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {treatmentSteps.map((step, index) => (
              <motion.article
                key={step.title}
                {...reveal}
                transition={{ duration: 0.6, delay: index * 0.07, ease }}
                className="flex flex-col rounded-[2rem] border border-graphite/10 bg-white p-7 shadow-card"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand bg-brand-soft text-sm font-extrabold tracking-[0.12em] text-brand">
                  {step.number}
                </span>
                <step.icon className="mb-4 h-5 w-5 text-brand" />
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">{step.text}</p>
              </motion.article>
            ))}
          </div>
          <motion.div
            {...reveal}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={drugRehabUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-graphite/10 bg-white px-6 py-3 text-sm font-semibold text-graphite shadow-sm transition hover:-translate-y-0.5 hover:border-brand/40"
            >
              About drug rehab at Wellbourne <ArrowRight size={15} />
            </a>
            <a
              href={drugDetoxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-graphite/10 bg-white px-6 py-3 text-sm font-semibold text-graphite shadow-sm transition hover:-translate-y-0.5 hover:border-brand/40"
            >
              About drug detox at Wellbourne <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Proximity — location-specific ── */}
      <section className="bg-porcelain px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div {...reveal} className="relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/wellbourne/morning-walk.png"
                alt="A quiet morning walk — the peaceful surroundings around The Wellbourne Clinic in Kenilworth"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(17,24,39,0.68)_100%)]" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Location</p>
                <p className="mt-1 text-2xl font-semibold tracking-[-0.03em]">Kenilworth, Warwickshire</p>
              </div>
            </motion.div>
            <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
              <SectionLabel>Getting here</SectionLabel>
              <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.2rem]">
                {data.proximityTitle}
              </h2>
              <p className="mt-6 text-xl font-medium leading-8 text-graphite/80">
                {data.proximityLead}
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                {data.proximityDetail}
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-brand/25 bg-brand-soft/60 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-ink">The Wellbourne Clinic</p>
                <p className="mt-2 font-semibold text-graphite">43 Waverley Road, Kenilworth CV8 1JL</p>
                <a
                  href="https://maps.google.com/?q=43+Waverley+Road+Kenilworth+CV8+1JL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink underline decoration-brand/40 underline-offset-4"
                >
                  <MapPin size={14} /> View on map
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Site 6 cross-link — substance-specific per location ── */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            className="rounded-[2rem] border border-graphite/10 bg-white p-8 shadow-card md:flex md:items-center md:gap-10 md:p-10"
          >
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Substance-specific guide</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] md:text-3xl">
                {data.site6.label}
              </h3>
              <p className="mt-3 leading-7 text-muted">{data.site6.description}</p>
            </div>
            <a
              href={data.site6.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-graphite px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-graphite/90 md:mt-0"
            >
              Read the guide <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs — location-specific ── */}
      <section id="faqs" className="scroll-mt-24 bg-porcelain px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:items-start">
            <motion.div {...reveal}>
              <SectionLabel>Questions about {data.city}</SectionLabel>
              <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.2rem]">
                What people from {data.city} ask.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Honest answers to the questions we hear most often from people in your area.
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
            </motion.div>
            <motion.div {...reveal}>
              <Accordion type="single" collapsible className="divide-y divide-graphite/10">
                {data.faqs.map((faq, index) => (
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

      {/* ── Related locations ── */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal}>
            <SectionLabel>Other areas we serve</SectionLabel>
            <h2 className="text-balance font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] md:text-[3.2rem]">
              Drug rehab across the region.
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {data.relatedLocations.map((loc, index) => (
              <motion.div
                key={loc.city}
                {...reveal}
                transition={{ duration: 0.6, delay: index * 0.07, ease }}
              >
                <Link
                  href={loc.href}
                  className="group relative block overflow-hidden rounded-[2rem] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                  style={{ minHeight: "240px" }}
                >
                  <Image
                    src={loc.image}
                    alt={`Drug rehab in ${loc.city}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.04)_0%,rgba(17,24,39,0.78)_100%)]" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <span className="self-end grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition duration-300 group-hover:bg-brand">
                      <ArrowRight size={14} />
                    </span>
                    <div className="text-white">
                      <h3 className="text-xl font-semibold tracking-[-0.03em]">Drug Rehab in {loc.city}</h3>
                      <p className="mt-1 text-sm text-white/75">{loc.note}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...reveal} className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-graphite">
              <ArrowLeft size={14} /> View all locations
            </Link>
          </motion.div>
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
              <Link href="/" className="hover:text-white/70">All locations</Link>
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

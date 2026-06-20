import type { Metadata } from "next";
import { LocationPage, type LocationData } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Drug Rehab in Solihull",
  description:
    "Private, confidential drug rehab near Solihull — The Wellbourne Clinic is around 30 minutes from Solihull in Kenilworth. Discreet residential care for professionals and families.",
  alternates: { canonical: "/solihull" },
  openGraph: {
    title: "Drug Rehab in Solihull | The Wellbourne Clinic",
    description:
      "Confidential, private drug rehab 30 minutes from Solihull. Discreet residential care at The Wellbourne Clinic, Kenilworth.",
    url: "https://ukdrugrehab.co.uk/solihull",
    images: [{ url: "/images/wellbourne/morning-coffee.png" }],
  },
};

const data: LocationData = {
  city: "Solihull",
  region: "West Midlands",
  heroHeadline: "Drug Rehab in Solihull",
  heroSubline:
    "Confidential, private care — shaped around the realities of professional life.",
  heroImage: "/images/wellbourne/morning-coffee.png",

  contextTitle: "The concern about being found out is real. And it can be addressed.",
  contextLead:
    "Many people in Solihull who are looking for help with drug dependency are not in crisis in any obvious sense. They may be managing demanding careers, maintaining busy family lives and presenting completely normally to the world around them. That is precisely what makes the prospect of seeking treatment so complicated.",
  contextBody:
    "The fear is not just about being judged — it is about practical consequences: employment, professional reputation, relationships. These are legitimate concerns, and they should be addressed directly rather than dismissed. Private residential treatment at The Wellbourne Clinic is structured around confidentiality from the outset: the first conversation is private, admission is discreet, and residential care in Kenilworth means treatment takes place away from Solihull — away from colleagues, neighbours and the daily social environment. The clinic does not share information with employers or GPs without explicit consent.",

  proximityTitle: "From Solihull to The Wellbourne Clinic",
  proximityLead:
    "Around 30 minutes by car via the M42 and A46 — less during off-peak hours. An easy, straightforward drive from Solihull and the surrounding areas.",
  proximityDetail:
    "Many patients from Solihull find the distance — close enough to reach quickly in an emergency, far enough to feel genuinely removed from daily life — is part of why the setting works for them.",

  site6: {
    label: "What is cocaine addiction?",
    href: "https://thewellbourneclinic.co.uk/what-is-cocaine-addiction-understanding-the-risks-and-recovery/",
    description:
      "Cocaine dependency is among the most common concerns for people approaching the clinic from Solihull — often high-functioning, often long-standing before treatment is sought. This guide explains what addiction involves, how it develops and what recovery requires.",
  },

  faqs: [
    {
      q: "Will my employer find out I've sought treatment?",
      a: "No — not unless you choose to tell them. The clinic does not contact employers. If you are absent from work during a residential programme, how you manage that conversation is entirely your choice. Many people use annual leave or arrange a medical leave through their GP — the team can advise on approaches other people have used.",
    },
    {
      q: "Is my first call genuinely confidential?",
      a: "Yes. A first conversation does not create any record shared with anyone else. You can ask questions, understand your options and decide whether to proceed without any obligation — and without anyone else being informed.",
    },
    {
      q: "I function well most of the time. Do I really need residential treatment?",
      a: "High-functioning drug use can be difficult to assess from the inside — the performance of being fine often obscures how much energy it takes to maintain. A clinical assessment helps identify what level of care is genuinely appropriate. For some people, residential treatment is recommended; for others, a different approach may suit. The honest answer comes from proper assessment, not self-assessment alone.",
    },
    {
      q: "How does treatment fit around my life?",
      a: "Residential treatment requires stepping away from daily life for the duration of the programme — typically 28 days. That is the point: it provides protected time, free from work pressure and familiar triggers. Many people in professional or family-facing roles find this the hardest part to arrange and the most important part of what makes treatment work.",
    },
    {
      q: "Can I visit the clinic before deciding?",
      a: "Yes. The team welcomes people who want to see the setting and have a conversation before committing. It often makes the decision clearer — in both directions. This can be arranged quickly and is without obligation.",
    },
  ],

  localStat: {
    figure: "1,177",
    label:
      "people received treatment for drug and alcohol misuse in Solihull, according to figures reported by the West Midlands Police and Crime Commissioner.",
    sourceText:
      "West Midlands Police and Crime Commissioner annual report, via BBC News",
    sourceUrl: "https://feeds.bbci.co.uk/news/articles/czrl2jjkjldo",
  },

  relatedLocations: [
    {
      city: "Birmingham",
      href: "/birmingham",
      image: "/images/wellbourne/friends-laughing.png",
      note: "Around 40 minutes via the M42.",
    },
    {
      city: "Coventry",
      href: "/coventry",
      image: "/images/wellbourne/talking.png",
      note: "The closest major city — around 15 minutes.",
    },
    {
      city: "Warwickshire",
      href: "/warwickshire",
      image: "/images/wellbourne/walking-in-meadow.png",
      note: "The clinic is based within the county.",
    },
  ],
};

export default function SolihullPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LocationPage data={data} />
    </>
  );
}

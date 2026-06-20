import type { Metadata } from "next";
import { LocationPage, type LocationData } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Drug Rehab in Birmingham",
  description:
    "Private residential drug rehab and detox for people in Birmingham — based in Kenilworth, around 40 minutes south of the city. Confidential, CQC-registered care at The Wellbourne Clinic.",
  alternates: { canonical: "/birmingham" },
  openGraph: {
    title: "Drug Rehab in Birmingham | The Wellbourne Clinic",
    description:
      "Private residential drug rehab and detox around 40 minutes from Birmingham. Confidential, CQC-registered care at The Wellbourne Clinic, Kenilworth.",
    url: "https://ukdrugrehab.co.uk/birmingham",
    images: [{ url: "/images/wellbourne/friends-laughing.png" }],
  },
};

const data: LocationData = {
  city: "Birmingham",
  region: "West Midlands",
  heroHeadline: "Drug Rehab in Birmingham",
  heroSubline:
    "Finding private residential care away from the city — without leaving the region.",
  heroImage: "/images/wellbourne/friends-laughing.png",

  contextTitle: "Getting distance from the city can be part of the recovery.",
  contextLead:
    "Birmingham is the UK's second-largest city. For many people seeking drug treatment, that scale creates as many problems as it solves — familiar streets, familiar people and very little room to be honest.",
  contextBody:
    "Private residential drug rehab offers something different: a protected environment that sits outside your daily life. The Wellbourne Clinic is based in Kenilworth, around 40 minutes south of Birmingham by car — close enough for family to stay involved, far enough to create the kind of clean separation that supports early recovery. For Birmingham residents, the journey out of the city is often part of the process.",

  proximityTitle: "From Birmingham to The Wellbourne Clinic",
  proximityLead:
    "Around 40 minutes by car via the M42 and A46. Also reachable by train to Coventry or Leamington Spa, then a short taxi to Kenilworth.",
  proximityDetail:
    "Family visits are practical from Birmingham — typically planned once treatment is under way and an appropriate point has been reached. The clinic team will advise on timing.",

  site6: {
    label: "Understanding cocaine addiction",
    href: "https://thewellbourneclinic.co.uk/what-is-cocaine-addiction-understanding-the-risks-and-recovery/",
    description:
      "Cocaine is among the most commonly treated substances for people approaching the clinic from Birmingham. This guide explains what addiction involves, what recovery requires and what treatment looks like.",
  },

  faqs: [
    {
      q: "Is there a drug rehab centre in Birmingham itself?",
      a: "There are outpatient services and community drug teams operating within Birmingham, but private residential drug rehab — where you stay at the clinic for the duration of treatment — is typically found outside the city. The Wellbourne Clinic in Kenilworth offers residential drug rehab and detox around 40 minutes from Birmingham city centre.",
    },
    {
      q: "I don't want anyone to know I'm seeking help. Is that possible?",
      a: "Yes. Your first call is private and confidential — no record is shared with your GP, employer or family without your explicit consent. Residential treatment in Kenilworth means you are away from Birmingham and the people who might recognise you. That distance is one reason many people choose to travel for treatment rather than seek help locally.",
    },
    {
      q: "How long does residential drug rehab take?",
      a: "Most residential programmes run for 28 days, although shorter or longer stays are sometimes recommended depending on the substances involved, your health history and how much therapeutic work you want to do. A clinical assessment before admission will give a clearer picture of what is right for you.",
    },
    {
      q: "Can family members be involved in my treatment?",
      a: "Yes, and it is often encouraged. Family sessions, planned visits and guidance for those close to you can form part of a treatment programme. The early days are typically kept quiet and structured; the clinic team will explain what involvement is possible and when it tends to be most helpful.",
    },
    {
      q: "What drugs does The Wellbourne Clinic treat?",
      a: "The clinic provides assessment, detox and residential rehab for cocaine, cannabis, heroin and opioids, benzodiazepines, codeine and tramadol, and other substance dependencies. Your specific situation will be discussed fully at assessment.",
    },
  ],

  localStat: {
    figure: "8,490",
    label:
      "people received treatment for drug and alcohol misuse in Birmingham, according to figures reported by the West Midlands Police and Crime Commissioner.",
    subFigure: "3,542",
    subLabel: "were accessing treatment for the first time",
    sourceText:
      "West Midlands Police and Crime Commissioner annual report, via BBC News",
    sourceUrl: "https://feeds.bbci.co.uk/news/articles/czrl2jjkjldo",
  },

  relatedLocations: [
    {
      city: "Coventry",
      href: "/coventry",
      image: "/images/wellbourne/talking.png",
      note: "Around 15 minutes from the clinic.",
    },
    {
      city: "Warwickshire",
      href: "/warwickshire",
      image: "/images/wellbourne/walking-in-meadow.png",
      note: "The clinic is based within the county.",
    },
    {
      city: "Solihull",
      href: "/solihull",
      image: "/images/wellbourne/morning-coffee.png",
      note: "Around 30 minutes via the M42.",
    },
  ],
};

export default function BirminghamPage() {
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

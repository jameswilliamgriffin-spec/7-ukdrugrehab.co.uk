import type { Metadata } from "next";
import { LocationPage, type LocationData } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Drug Rehab in Coventry",
  description:
    "Private residential drug rehab near Coventry — The Wellbourne Clinic is around 15 minutes from Coventry city centre in Kenilworth. Close enough for family visits, far enough to focus.",
  alternates: { canonical: "/coventry" },
  openGraph: {
    title: "Drug Rehab in Coventry | The Wellbourne Clinic",
    description:
      "Private residential drug rehab 15 minutes from Coventry. The Wellbourne Clinic in Kenilworth — the nearest private residential clinic to the city.",
    url: "https://ukdrugrehab.co.uk/coventry",
    images: [{ url: "/images/wellbourne/talking.png" }],
  },
};

const data: LocationData = {
  city: "Coventry",
  region: "West Midlands",
  heroHeadline: "Drug Rehab in Coventry",
  heroSubline:
    "Close enough for family. Far enough to focus. The Wellbourne Clinic is around 15 minutes from Coventry.",
  heroImage: "/images/wellbourne/talking.png",

  contextTitle: "Close enough for family. Far enough to focus.",
  contextLead:
    "Coventry is the closest major city to The Wellbourne Clinic. Kenilworth, where the clinic is based, is about 15 minutes by car — a distance that works in favour of the people who come here for treatment.",
  contextBody:
    "Being nearby means family involvement is practical rather than theoretical. Partners, parents or close friends who want to attend a family session or visit at the right point in treatment can do so without a long journey. The transition home after residential care — which can be a vulnerable time — is a short, manageable distance rather than a lengthy trip back to unfamiliar territory. At the same time, Kenilworth is not Coventry: it is a quieter setting, removed from the routines and pressures that can make change harder in a city.",

  proximityTitle: "Coventry to The Wellbourne Clinic",
  proximityLead:
    "Around 15 minutes by car, south of the city via the A429. Also accessible by taxi from Coventry city centre or Coventry railway station.",
  proximityDetail:
    "Coventry residents sometimes visit the clinic before admission to see the setting, meet the team and feel more settled about their decision. This is something the clinic can arrange.",

  site6: {
    label: "Cannabis, dependency and mental health",
    href: "https://thewellbourneclinic.co.uk/drug-rehab/",
    description:
      "Cannabis is among the most commonly treated substances at the clinic, and its psychological effects — including anxiety, low mood and psychosis risk — are often underestimated. This guide explores what cannabis dependency involves and what treatment requires.",
  },

  faqs: [
    {
      q: "How far is The Wellbourne Clinic from Coventry?",
      a: "About 15 minutes by car, south of the city via the A429. Kenilworth is the town closest to the clinic and is also accessible by taxi from Coventry railway station in around 20 minutes.",
    },
    {
      q: "Can my family visit during treatment?",
      a: "Yes, with planning. The early days of a residential programme are typically kept settled and structured, but family involvement — including visits and family sessions — can form part of the therapeutic process. The team will explain timing and what kind of contact tends to be most supportive.",
    },
    {
      q: "Is residential treatment only for people with severe addiction?",
      a: "No. The right level of care depends on the substances involved, how long they have been used, physical and mental health and what has or hasn't worked before. A clinical assessment helps identify whether residential treatment is appropriate — some people are surprised to find it is recommended sooner than they expected.",
    },
    {
      q: "What happens when I come home after treatment?",
      a: "Aftercare planning begins before you leave the clinic. This might include check-in sessions, local support groups, referrals to community services or continued contact with the clinic team. Coming back to Coventry after residential treatment is something the team prepares with you, not a moment when support simply ends.",
    },
    {
      q: "I'm concerned about confidentiality. Who will know I've sought help?",
      a: "Your first call is private. No information is shared with your GP, employer or family without your explicit consent. Attending a residential clinic in Kenilworth rather than seeking help within Coventry also offers an additional layer of practical privacy.",
    },
  ],

  localStat: {
    figure: "2,025",
    label:
      "people received treatment for drug and alcohol misuse in Coventry, according to figures reported by the West Midlands Police and Crime Commissioner.",
    sourceText:
      "West Midlands Police and Crime Commissioner annual report, via BBC News",
    sourceUrl: "https://feeds.bbci.co.uk/news/articles/czrl2jjkjldo",
  },

  relatedLocations: [
    {
      city: "Warwickshire",
      href: "/warwickshire",
      image: "/images/wellbourne/walking-in-meadow.png",
      note: "The clinic is based within the county.",
    },
    {
      city: "Birmingham",
      href: "/birmingham",
      image: "/images/wellbourne/friends-laughing.png",
      note: "Around 40 minutes from the clinic.",
    },
    {
      city: "Solihull",
      href: "/solihull",
      image: "/images/wellbourne/morning-coffee.png",
      note: "Around 30 minutes via the M42.",
    },
  ],
};

export default function CoventryPage() {
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

import type { Metadata } from "next";
import { LocationPage, type LocationData } from "@/components/location-page";

export const metadata: Metadata = {
  title: "Drug Rehab in the West Midlands",
  description:
    "Private residential drug rehab and detox in the West Midlands — The Wellbourne Clinic is based in Kenilworth, serving Birmingham, Coventry, Solihull, Warwickshire and the surrounding region.",
  alternates: { canonical: "/west-midlands" },
  openGraph: {
    title: "Drug Rehab in the West Midlands | The Wellbourne Clinic",
    description:
      "Private residential drug rehab in the West Midlands. The Wellbourne Clinic is based in Kenilworth, serving the whole region.",
    url: "https://ukdrugrehab.co.uk/west-midlands",
    images: [{ url: "/images/wellbourne/friends-laughing.png" }],
  },
};

const data: LocationData = {
  city: "West Midlands",
  region: "Regional overview",
  heroHeadline: "Drug Rehab in the West Midlands",
  heroSubline:
    "Private residential drug rehab and detox — based in the heart of the West Midlands.",
  heroImage: "/images/wellbourne/coastal-walk.png",

  contextTitle: "The Wellbourne Clinic is in the West Midlands.",
  contextLead:
    "Many people searching for drug rehab in the West Midlands assume they will need to travel to London or Manchester for private residential care. They don't.",
  contextBody:
    "The Wellbourne Clinic is based in Kenilworth, Warwickshire — a short distance from Birmingham, Coventry, Solihull and the wider West Midlands. It offers residential assessment, medically managed drug detox and structured therapeutic rehab for people across the region. If you are looking for private drug treatment in the West Midlands, you are looking in the right place.",

  proximityTitle: "Serving the West Midlands and beyond",
  proximityLead:
    "Within easy reach of Birmingham (around 40 min), Coventry (15 min), Solihull (30 min), Warwick, Leamington Spa, Rugby and the surrounding counties.",
  proximityDetail:
    "Many people also travel to The Wellbourne Clinic from further afield — from London, the East Midlands and the North West — seeking a change of setting alongside specialist care.",

  site6: {
    label: "What makes the West Midlands a trusted choice for drug rehab?",
    href: "https://thewellbourneclinic.co.uk/what-makes-the-west-midlands-a-trusted-choice-for-drug-rehab/",
    description:
      "A guide to the drug and alcohol treatment landscape in the West Midlands — why private residential care in the region has become an established option for people across Birmingham, Coventry, Warwickshire and Solihull.",
  },

  faqs: [
    {
      q: "Where exactly is The Wellbourne Clinic?",
      a: "43 Waverley Road, Kenilworth, Warwickshire, CV8 1JL. Kenilworth sits between Coventry and Warwick, with good road links from across the West Midlands — including the M42, A46 and A452.",
    },
    {
      q: "What areas does The Wellbourne Clinic serve?",
      a: "The clinic treats people from across the West Midlands and beyond — including Birmingham, Coventry, Solihull, Warwickshire, Worcestershire and the surrounding counties. Many people also travel from further afield.",
    },
    {
      q: "How do I start?",
      a: "A confidential first conversation is all that's needed. You can call, use the live chat, or send a private message via the contact form. There is no pressure to commit and no obligation after a first conversation.",
    },
    {
      q: "Is private drug rehab expensive?",
      a: "Costs vary depending on the programme length and individual need. The clinic can explain fees clearly during a first call. Some people fund treatment privately; others check whether their health insurance covers residential addiction treatment.",
    },
    {
      q: "What if I've tried drug rehab before and it didn't work?",
      a: "Previous treatment that didn't hold is not a barrier to trying again — and knowing what didn't work last time is useful information. A clinical assessment helps understand what level of support is needed and how care might be approached differently.",
    },
  ],

  localStat: {
    figure: "Almost 20,000",
    label:
      "people received treatment for drug and alcohol misuse across the West Midlands region, according to figures reported by the West Midlands Police and Crime Commissioner.",
    sourceText:
      "West Midlands Police and Crime Commissioner annual report, via BBC News",
    sourceUrl: "https://feeds.bbci.co.uk/news/articles/czrl2jjkjldo",
    cityBreakdown: [
      { city: "Birmingham", figure: "8,490", href: "/birmingham" },
      { city: "Coventry", figure: "2,025", href: "/coventry" },
      { city: "Solihull", figure: "1,177", href: "/solihull" },
    ],
  },

  relatedLocations: [
    {
      city: "Birmingham",
      href: "/birmingham",
      image: "/images/wellbourne/friends-laughing.png",
      note: "Around 40 minutes from the clinic.",
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

export default function WestMidlandsPage() {
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

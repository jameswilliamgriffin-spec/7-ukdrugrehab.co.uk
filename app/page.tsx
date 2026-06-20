import { WellbourneMicrosite } from "@/components/wellbourne-microsite";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between drug detox and drug rehab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Drug detox addresses the physical process of withdrawing from substances safely, usually with medical supervision and sometimes prescribed medication. Drug rehab goes further — it explores the psychological, behavioural and emotional factors that sustain addiction through therapy, structured support and recovery planning. Most people with significant drug dependency benefit from both.",
      },
    },
    {
      "@type": "Question",
      name: "Where exactly is The Wellbourne Clinic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "43 Waverley Road, Kenilworth, Warwickshire, CV8 1JL. Kenilworth is a market town between Coventry and Warwick, with good road links from across the West Midlands. It is around 15 minutes from Coventry, 30 minutes from Solihull and 40 minutes from Birmingham city centre.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I start treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First conversations can take place the same day. A clinical assessment is usually arranged within a day or two of initial contact, and admission dates depend on the individual's situation and the clinic's availability. If there is medical urgency, the team can often move more quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Is treatment confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your first call is entirely private. The clinic does not contact your GP, employer or family without your explicit consent. You can ask questions and understand your options fully before making any decision.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to live in the West Midlands to receive treatment here?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. People travel to The Wellbourne Clinic from across the UK — from London, the North West, the East Midlands and beyond. Being local makes some things easier, particularly family visits and the transition home after treatment, but proximity is not a requirement.",
      },
    },
    {
      "@type": "Question",
      name: "What if drug rehab hasn't worked for me before?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Previous treatment that didn't hold is not a barrier to trying again — and understanding what didn't work last time is genuinely useful information. A thorough clinical assessment helps identify whether a different approach, environment or programme length might make a more lasting difference.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WellbourneMicrosite />
    </>
  );
}

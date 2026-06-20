import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ukdrugrehab.co.uk"),
  title: {
    default: "Drug Rehab in the West Midlands | The Wellbourne Clinic",
    template: "%s | The Wellbourne Clinic",
  },
  description:
    "Private residential drug rehab and detox for people across Birmingham, Coventry, Warwickshire and the West Midlands. Based in Kenilworth at The Wellbourne Clinic.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "UK Drug Rehab",
    images: [{ url: "/images/home.jpg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}

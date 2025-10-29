import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shakibulhasan.vercel.app"),
  title: "SHAKIB AL HASAN | Data Scientist & AI Engineer",
  description:
    "Portfolio of SHAKIB AL HASAN - Data Scientist, AI Engineer, and ML Expert. Explore my journey, projects, and expertise in machine learning, deep learning, and artificial intelligence.",
  keywords: [
    "SHAKIB AL HASAN",
    "Data Scientist",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Portfolio",
    "BDMA",
    "Erasmus Mundus",
    "Big Data Analytics",
    "NLP",
    "LLMs",
    "Knowledge Graphs",
    "PyTorch",
    "Python",
    "Research",
  ],
  authors: [{ name: "SHAKIB AL HASAN" }],
  creator: "SHAKIB AL HASAN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdkamrulislam.vercel.app",
    siteName: "SHAKIB AL HASAN Portfolio",
    title: "SHAKIB AL HASAN | Data Scientist & AI Engineer",
    description:
      "Explore the portfolio of SHAKIB AL HASAN, featuring cutting-edge projects in AI, ML, and data science. Specializing in Big Data Analytics, NLP, LLMs, and Knowledge Graphs.",
    images: [
      {
        url: "/images/profile_picture.png",
        width: 1200,
        height: 630,
        alt: "SHAKIB AL HASAN - Data Scientist & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHAKIB AL HASAN | Data Scientist & AI Engineer",
    description:
      "Explore the portfolio of SHAKIB AL HASAN, featuring cutting-edge projects in AI, ML, and data science. Specializing in Big Data Analytics, NLP, LLMs, and Knowledge Graphs.",
    images: ["/images/profile_picture.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

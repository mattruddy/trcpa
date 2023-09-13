import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";
import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

const inter = Inter({ subsets: ["latin"] });
const analytics = Analytics({
  app: "TRCPA",
  plugins: [
    googleAnalytics({
      measurementIds: [process.env.NEXT_PUBLIC_ANALYTICS_ID],
    }),
  ],
});

analytics.page({ title: "home" });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
    </>
  );
}

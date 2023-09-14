"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { pageview } from "@/utils/ga";
import { Inter } from "@next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    pageview(new URL("home"));
  }, []);

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

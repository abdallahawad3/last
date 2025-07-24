"use client";
import HotContact from "@/components/HotContact";
import Loader from "@/components/Loading/Loader";
import LoaderWrapper from "@/components/Loading/LoaderWrapper";
import AboutUs from "@/sections/About";
import ContactUs from "@/sections/Contact";
import Hero from "@/sections/Hero";
import OurServices from "@/sections/OurServices";
import Portfolio from "@/sections/Portifoio";
import { useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading && <Loader onFinish={() => setLoading(false)} />} */}
      {/* {!loading && ( */}
      <>
        <Hero />
        <main className=" ">
          <OurServices />
          <AboutUs />
          <Portfolio />
          <ContactUs />
          <HotContact />
        </main>
      </>
      {/* )} */}
    </>
  );
}

"use client";
import { useState } from "react";
import Loader from "./Loader";
export const metadata = {
  title: "My Website",
  description: "With GSAP Loader",
};

export default function LoaderWrapper() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && <div>Your page content appears here...</div>}
    </>
  );
}

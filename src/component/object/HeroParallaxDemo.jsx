"use client";
import React from "react";
import { HeroParallax } from "../ui/HeroParallax";
import {
  nvidia,
  intel,
  google,
  microsoft,
  apple,
  ibm,
  tesla,
  meta,
  qualcom,
  bostondynamics,
  spectrum,
  garena,
} from "../../assets/asset.js";
export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Nvidia",
    link: "https://www.nvidia.com",
    thumbnail: nvidia,
  },
  {
    title: "Intel",
    link: "https://www.intel.com",
    thumbnail: intel,
  },
  {
    title: "Google",
    link: "https://www.google.com",
    thumbnail: google,
  },
  {
    title: "Microsoft",
    link: "https://www.microsoft.com",
    thumbnail: microsoft,
  },
  {
    title: "Apple",
    link: "https://www.apple.com",
    thumbnail: apple,
  },
  {
    title: "IBM",
    link: "https://www.ibm.com",
    thumbnail: ibm,
  },
  {
    title: "Tesla",
    link: "https://www.tesla.com",
    thumbnail: tesla,
  },
  {
    title: "Meta",
    link: "https://about.meta.com",
    thumbnail: meta,
  },
  {
    title: "Qualcomm",
    link: "https://www.qualcomm.com",
    thumbnail: qualcom,
  },
  {
    title: "Garena",
    link: "https://www.garena.sg",
    thumbnail: garena,
  },
  {
    title: "Spectrum",
    link: "https://www.spectrum.com",
    thumbnail: spectrum,
  },
  {
    title: "Boston Dynamics",
    link: "https://www.bostondynamics.com",
    thumbnail: bostondynamics,
  },
];

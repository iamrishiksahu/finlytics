"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function WavyBackgroundDemo({children} : any) {
  return (
    <WavyBackground className="mx-auto">
      {children}
    </WavyBackground>
  );
}

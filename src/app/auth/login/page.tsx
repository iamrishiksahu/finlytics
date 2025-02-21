"use client";
import { LoginForm } from "@/components/login-form";
import { SingupForm } from "@/components/signup-form";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";
import { useState } from "react";

export default function LoginPage({ isSignupDef }: any) {
  const [isSignup, setIsSingup] = useState(isSignupDef);
  return (

        <LoginForm />
   
  );
}

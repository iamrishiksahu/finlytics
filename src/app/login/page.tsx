"use client";
import { LoginForm } from "@/components/login-form";
import { SingupForm } from "@/components/signup-form";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";
import { useState } from "react";

export default function LoginPage({ isSignupDef }: any) {
  const [isSignup, setIsSingup] = useState(isSignupDef);
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <WavyBackgroundDemo>
          {isSignup ? <SingupForm setIsSignup={setIsSingup}/> : <LoginForm setIsSignup={setIsSingup}/>}
        </WavyBackgroundDemo>
      </div>
    </div>
  );
}

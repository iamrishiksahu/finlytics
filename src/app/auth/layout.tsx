import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <WavyBackgroundDemo>{children}</WavyBackgroundDemo>
      </div>
    </div>
  );
}

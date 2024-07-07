import HomePage from "@/components/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen antialiased text-white bg-black/[0.96] bg-grid-white/[0.02]">
        <div className="text-[1rem] text-center">&nbsp;</div>
        <HomePage />
      </main>
    </>
  );
}

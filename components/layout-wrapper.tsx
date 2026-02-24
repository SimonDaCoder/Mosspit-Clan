"use client";

import { useState, ReactNode } from "react";
import Header from "@/components/Header/Header";
import { ImpressumModal } from "@/components/impressum-modal";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const [impressumOpen, setImpressumOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="bg-[radial-gradient(circle_at_left_center,rgba(16,185,129,0.1),rgba(16,185,129,0.02)_70%,transparent_100%)]">
        <section className="sticky top-0 z-50 w-full flex flex-col items-center">
          <Header onImpressumClick={() => setImpressumOpen(true)} />
        </section>
        {children}
        <ImpressumModal isOpen={impressumOpen} onClose={() => setImpressumOpen(false)} />
      </div>
    </div>
  );
}

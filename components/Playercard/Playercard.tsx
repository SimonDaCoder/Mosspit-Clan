import React, { useEffect, useState } from "react";

interface Player {
  name: string;
  role: string;
  skin: string;
}

export const PlayerCard = ({ player }: { player: Player }) => {

  return (
    <div className="relative mx-auto max-w-5xl rounded-2xl p-[1px]">
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-emerald-400/60 via-emerald-300/10 to-transparent" />

      {/* Card Content */}
      <div className="relative rounded-2xl bg-white/90 p-4 shadow-md backdrop-blur-sm
                dark:bg-zinc-900/90
                transition-shadow duration-300 ease-out
                hover:shadow-[0_0_12px_0_rgba(16,185,129,0.4)]">
      </div>
    </div>
  );
};
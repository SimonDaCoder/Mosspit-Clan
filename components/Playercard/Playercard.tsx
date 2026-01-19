import React from "react";

interface Player {
  name: string;
  igname: string;
  role: string;
}


export const PlayerCard = ({ player }: { player: Player }) => {

  const skin = `https://mc-heads.net/avatar/${player.igname}/100`;

  return (
    <div className="relative w-[8vw] rounded-2xl p-[1px]">
      {/* Subtle Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-emerald-300/40 via-emerald-200/20 to-transparent" />

      {/* Card Content with Hover Shake */}
      <div className="relative rounded-2xl bg-white/90 p-3 shadow-sm backdrop-blur-sm
                      w-full h-full
                      dark:bg-zinc-900/90
                      transition-transform duration-200 ease-out
                      hover:rotate-[1deg] hover:-translate-x-0.5 hover:-translate-y-0.5
                      flex flex-col items-center overflow-hidden">

        {/* Player Skin (square + shadow) */}
        <div className="w-full aspect-square mb-3 relative shadow-md">
          <img
            src={skin}
            alt={`${player.name}'s Skin`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Player Info */}
        <div className="text-center">
          <p className="text-emerald-400 font-semibold text-base">{player.name}</p>
          <p className="text-zinc-400 text-sm mt-1">{player.role}</p>
        </div>
      </div>
    </div>
  );
};

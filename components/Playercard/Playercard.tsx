import React from "react";

interface Player {
  name: string;
  igname: string;
  role: string;
}

export const PlayerCard = ({ player }: { player: Player }) => {
  const skin = `https://mc-heads.net/avatar/${player.igname}/100`;

  return (
    <div className="relative w-full md:w-[8vw] rounded-2xl p-px">
      {/* Subtle Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-bl from-emerald-300/40 via-emerald-200/20 to-transparent" />

      {/* Card Content with Hover Shake */}
      <div
        className="
          relative rounded-2xl bg-white/90 p-3 shadow-sm backdrop-blur-sm
          w-full h-full
          dark:bg-zinc-900/90
          transition-transform duration-200 ease-out
          hover:rotate-1 hover:-translate-x-0.5 hover:-translate-y-0.5
          flex flex-row items-center            /* row on phones, centre info */
          md:flex-col md:items-center           /* column on desktop/large */
          overflow-hidden
        "
      >
        {/* Player Skin – small on phones, full‑width square on md+ */}
        <div className="w-16 md:w-32 h-16 md:h-32 md:aspect-square relative shadow-md shrink-0">
          <img
            src={skin}
            alt={`${player.name}'s Skin`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Player Info – margin only on phone, text alignment switches */}
        <div className="ml-3 md:mt-4 md:ml-0 text-left md:text-center flex flex-col justify-center">
          <p className="text-emerald-400 font-semibold text-base">
            {player.name}
          </p>
          <p className="text-zinc-400 text-sm mt-1">{player.role}</p>
        </div>
      </div>
    </div>
  );
};

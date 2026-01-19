import React from "react";


interface Player {
  name: string;
  role: string;
  skin: string;
}

export const PlayerCard = ({ player }: { player: Player }) => {

  return (
    <div className="relative w-[12vw] aspect-[20/22] rounded-2xl p-[2px]">
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-emerald-400 via-emerald-300 to-emerald-100/20" />

      {/* Card Content */}
      <div className="relative rounded-2xl bg-white/95 p-4 shadow-[0_0_25px_5px_rgba(16,185,129,0.3)] backdrop-blur-md
                  w-full h-full
                  dark:bg-zinc-900/95
                  transition-shadow duration-300 ease-out
                  hover:shadow-[0_0_30px_10px_rgba(16,185,129,0.5)]
                  flex flex-col items-center overflow-hidden">

        {/* Player Skin */}
        <img
          src={player.skin}
          alt={`${player.name}'s Skin`}
          className="w-full h-[70%] object-cover rounded-2xl mb-3"
        />

        {/* Player Info */}
        <div className="text-center">
          <p className="text-emerald-400 font-semibold text-lg drop-shadow-md">{player.name}</p>
          <p className="text-zinc-400 text-sm mt-1">{player.role}</p>
        </div>
      </div>
    </div>

  );
};
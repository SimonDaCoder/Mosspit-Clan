import React from "react";

export const DiscordServerCard = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-zinc-900 text-white">

      {/* Header */}
      <div className="h-24 bg-gradient-to-r from-cyan-500 to-sky-400" />

      {/* Content */}
      <div className="p-4 -mt-10">

        <div className="flex gap-4">

          {/* Größeres, skalierendes Icon */}
          <div className="w-20 sm:w-24 aspect-square shrink-0 rounded-2xl overflow-hidden border-4 border-zinc-900 bg-zinc-800">
            <img
              src="/server-icon.png"
              alt="Server Icon"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Textblock */}
          <div className="flex flex-col justify-center">

            <h2 className="font-semibold text-lg leading-tight">
              Mosspit Discord Server
            </h2>

            {/* Attribute direkt darunter */}
            <div className="flex gap-2 text-sm text-zinc-400 mt-2">
              <span>Attribute 1</span>
              <span>•</span>
              <span>Attribute 2</span>
            </div>

          </div>
        </div>

        {/* Button */}
        <button
          className="
            w-full mt-4 py-2.5
            bg-emerald-600 hover:bg-emerald-500
            rounded-lg font-semibold
            transition-colors
          "
        >
          Join
        </button>
      </div>
    </div>
  );
};

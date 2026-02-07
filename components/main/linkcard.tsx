"use client";

import React from "react";

type ServerCardProps = {
  name: string;
  icon: string;
  banner: string;
  attributes?: string[];
  type: "join" | "copy";
  link: string;
};

export const LinkCard = ({
  name,
  icon,
  banner,
  attributes = [],
  type,
  link,
}: ServerCardProps) => {
  const handleAction = async () => {
    if (type === "join") {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }

    // copy
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      console.warn("Clipboard blocked");
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto rounded-2xl p-[1px]">

      {/* subtle gradient border (gleich wie EventCard, nur schwächer) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-emerald-400/40 via-emerald-300/5 to-transparent" />

      {/* card */}
      <div
        className="
        relative overflow-hidden rounded-2xl
        bg-zinc-900/90 backdrop-blur-sm
        text-white shadow-md
        transition-shadow duration-300
        hover:shadow-[0_0_8px_0_rgba(16,185,129,0.25)]
      "
      >
        {/* Banner */}
        <div
          className="h-20 bg-cover bg-center"
          style={{ background: banner}}
        />

        <div className="p-4 -mt-10 space-y-4">
          <div className="flex gap-4">
            {/* Icon */}
            <div className="w-20 sm:w-24 aspect-square shrink-0 rounded-2xl overflow-hidden border-4 border-zinc-900 bg-zinc-800">
              <img src={icon} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center pt-2">
              <h2 className="font-semibold text-lg leading-tight overflow-hidden text-ellipsis whitespace-nowrap">{name}</h2>

              <div className="flex flex-wrap gap-2 text-sm text-zinc-400 mt-2">
                {attributes.map((a, i) => (
                  <span key={i}>{a}</span>
                ))}
              </div>
            </div>
          </div>

          {/* unified action */}
          <button
            onClick={handleAction}
            className={`
              w-full py-2.5 px-3 rounded-lg font-semibold
              transition-colors text-sm truncate
              ${
                type === "join"
                  ? "bg-emerald-600 hover:bg-emerald-500"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }
            `}
          >
            {type === "join" ? "Join" : <a>{link}</a> }
          </button>
        </div>
      </div>
    </div>
  );
};

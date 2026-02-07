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

    try {
      await navigator.clipboard.writeText(link);
    } catch {
      console.warn("Clipboard blocked");
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto rounded-2xl p-[1px]">
      {/* gradient border bleibt */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-emerald-400/40 via-emerald-300/5 to-transparent" />

      {/* card */}
      <div
        className="
        relative overflow-hidden rounded-2xl
        bg-white/90 text-zinc-900
        dark:bg-zinc-900/90 dark:text-white
        backdrop-blur-sm shadow-md
        transition-shadow duration-300
        hover:shadow-[0_0_12px_0_rgba(16,185,129,0.4)]
      "
      >
        {/* Banner */}
        <div
          className="h-20 bg-cover bg-center"
          style={{ background: banner }}
        />

        <div className="p-4 -mt-10 space-y-4">
          <div className="flex gap-4">
            {/* Icon (nur Light ergänzt, Dark bleibt) */}
            <div className="w-20 sm:w-24 aspect-square shrink-0 rounded-2xl overflow-hidden border-4 border-white bg-white dark:border-zinc-900 dark:bg-zinc-800">
              <img src={icon} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center pt-3">
              <h2 className="font-semibold text-lg leading-tight whitespace-nowrap">
                {name}
              </h2>

              <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                {attributes.map((a, i) => (
                  <span key={i}>{a}</span>
                ))}
              </div>
            </div>
          </div>

          {/* action */}
          <button
            onClick={handleAction}
            className={`
              w-full py-2.5 px-3 rounded-lg font-semibold
              transition-colors text-sm truncate
              ${
                type === "join"
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                  : "bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              }
            `}
          >
            {type === "join"
              ? "Join"
              : <><img src="/images/copy-light.png" alt="copy" className="w-4 h-4 inline mr-2" />{link}</>}
          </button>
        </div>
      </div>
    </div>
  );
};

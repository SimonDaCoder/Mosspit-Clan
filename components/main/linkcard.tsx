import React from "react";

type ServerCardProps = {
  name: string;
  icon: string;
  banner: string;
  attributes?: string[];
  type: "join" | "copy";
  link: string;
};

export const DiscordServerCard = ({
  name,
  icon,
  banner,
  attributes = [],
  type,
  link,
}: ServerCardProps) => {
  const copy = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-zinc-900 text-white">

      {/* Banner */}
      <div
        className="h-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      />

      <div className="p-4 -mt-10">
        <div className="flex gap-4">

          {/* Icon */}
          <div className="w-20 sm:w-24 aspect-square shrink-0 rounded-2xl overflow-hidden border-4 border-zinc-900 bg-zinc-800">
            <img src={icon} alt={name} className="w-full h-full object-cover" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="font-semibold text-lg leading-tight">{name}</h2>

            <div className="flex flex-wrap gap-2 text-sm text-zinc-400 mt-2">
              {attributes.map((a, i) => (
                <span key={i}>{a}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Action */}
        {type === "join" ? (
          <a
            href={link}
            target="_blank"
            className="block text-center w-full mt-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition-colors"
          >
            Join
          </a>
        ) : (
          <input
            readOnly
            value={link}
            onClick={copy}
            className="w-full mt-4 py-2.5 px-3 bg-zinc-800 rounded-lg text-sm cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
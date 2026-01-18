import React from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode; // optionales Icon
};

export const GradientButton = ({
  children,
  onClick,
  icon,
}: GradientButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative rounded-2xl p-[1px] transition-transform active:scale-95"
    >
      {/* Gradient Border */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-emerald-400/40 via-emerald-300/10 to-transparent transition-all duration-300 group-hover:from-emerald-500/50 group-hover:via-emerald-400/30" />

      {/* Button Body */}
      <span className="relative z-10 flex items-center gap-3 rounded-2xl bg-white/90 px-6 py-3 text-lg font-semibold text-zinc-900 backdrop-blur-sm transition-all duration-300 hover:bg-emerald-50 dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:bg-emerald-900/10 group">
        {icon && <span className="text-2xl">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

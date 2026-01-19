import data from "@/data/players.json";
import { PlayerCard } from "./Playercard";

export const PlayerSection = () => {
  const { players, groups } = data;

  const sortedGroups = [...groups].sort(
    (a, b) => a.order - b.order
  );

  return (
    <section className="flex flex-col gap-10">
      {sortedGroups.map((group) => {
        const groupPlayers = players.filter(
          (p) => p.group === group.id
        );

        if (groupPlayers.length === 0) return null;

        return (
          <div key={group.id} className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-emerald-400">
              {group.label}
            </h2>

            <div className="flex flex-wrap gap-4">
              {groupPlayers.map((player) => (
                <PlayerCard
                  key={player.igname}
                  player={player}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

import data from "@/data/links.json";
import { LinkCard } from "./linkcard";
import React from "react";

export default function List() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {data.map((item, i) => (
        <LinkCard key={i} {...item} />
      ))}
    </div>
  );
}

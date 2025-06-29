import type { MemeType } from "@/types/types";
import React from "react";

interface MemeCardProps {
  meme: MemeType;
}

const MemeCard: React.FC<MemeCardProps> = ({ meme }) => {
  const { title, author, preview } = meme;
  return (
    <div className="w-64 h-72 border-solid border-gray-400 gap-1 border-2 my-1 flex flex-col justify-between">
      <img alt={title} src={preview[0]} className="aspect-square" />

      <h1>{author}</h1>
    </div>
  );
};

export default MemeCard;

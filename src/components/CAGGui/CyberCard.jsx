import React from "react";
import CyberTag from "./CyberTag";

const CyberCard = ({
  imageSrc,
  alt,
  name,
  match,
  pcCount,
  spec,
  badges = [],
  onClick,
}) => {
  return (
    <div
      onClick={onClick} 
      className="relative flex-none w-[140px] md:w-[200px] aspect-[2/3] rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105 hover:z-20 hover:shadow-[0_0_20px_rgba(0,0,0,0.8)]"
    >
        <div className="relative overflow-hidden">
          <img
            alt={alt}
            loading="lazy"
            decoding="async"
            className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
            src={imageSrc}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
          {badges.map((badge, idx) => (
            <CyberTag key={idx} badge={badge} />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full p-3">
          <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 mb-1 group-hover:text-red-500 transition-colors drop-shadow-md">
            {name}
          </h3>
          <div className="flex items-center gap-2 text-[9px] text-slate-300 font-medium">
            <span className="text-green-400 font-black">{match} Match</span>
            <span>•</span>
            <span className="border border-slate-500 px-1 rounded text-[8px]">
              {pcCount} PC
            </span>
            <span>•</span>
            <span className="truncate max-w-[50px]">{spec}</span>
          </div>
        </div>
      </div>
  );
};

export default CyberCard;

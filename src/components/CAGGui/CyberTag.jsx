import React from "react";

const CyberTag = ({ badge }) => {
  if (badge.isRibbon) {
    return (
      <div className="flex items-center gap-1">
        <span
          className={`w-4 h-6 bg-red-600 flex items-center justify-center text-[10px] font-black text-white shadow-lg clip-path-ribbon`}
        >
          {badge.text || "N"}
        </span>
      </div>
    );
  }

  return (
    <span
      className={`${badge.textColor || "text-black"} ${badge.textSize || "text-[8px]"} ${badge.fontWeight || "font-black"} ${badge.padding || "px-1.5 py-0.5"} rounded ${badge.shadow !== undefined ? badge.shadow : "shadow-lg"} uppercase ${badge.tracking || "tracking-widest"} ${badge.color || "bg-[#00F260]"} ${badge.animate ? "animate-pulse" : ""} ${badge.extraClass || ""}`}
    >
      {badge.text}
    </span>
  );
};

export default CyberTag;

import CyberCard from "./CyberCard";

const GalleryRow = ({ title, description, data, onCardClick }) => {
  return (
    <div className="mb-8 pl-4 md:pl-12 group/row animate-fade-in w-full">
      <h3 className="text-white font-bold text-lg md:text-xl mb-1 flex items-center gap-2 group-hover/row:text-cyan-400 transition-colors cursor-pointer pr-4">
        {title}
        <span className="text-xs text-cyan-500 opacity-0 group-hover/row:opacity-100 transition-opacity flex items-center font-bold">
          Xem tất cả
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </h3>
      {description && (
        <p className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wide pr-4">
          {description}
        </p>
      )}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x pr-4">
        {data.map((item, index) => (
          <CyberCard
            key={index}
            {...item}
            onClick={() => onCardClick({ name: item.name })}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryRow;

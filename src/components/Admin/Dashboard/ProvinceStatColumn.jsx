// ProvinceStatColumn.jsx
const ProvinceStatColumn = ({ title, type, data }) => {
  const config = {
    HIGH: {
      borderClass: 'border-[#00F2EA]/30',
      bgClass: 'bg-[#00F2EA]/20',
      textClass: 'text-[#00F2EA]',
      statusLabel: 'Nhiều khách'
    },
    MEDIUM: {
      borderClass: 'border-[#FFD700]/30',
      bgClass: 'bg-[#FFD700]/20',
      textClass: 'text-[#FFD700]',
      statusLabel: 'Ít khách'
    },
    NONE: {
      borderClass: 'border-[#ec4899]/30',
      bgClass: 'bg-[#ec4899]/20',
      textClass: 'text-[#ec4899]',
      statusLabel: 'Chưa có CAG'
    }
  };

  const style = config[type];

  return (
    <div className={`bg-white/5 rounded-lg p-4 border ${style.borderClass} flex flex-col h-[250px] md:h-full min-h-0`}>
      <h4 className={`${style.textClass} font-bold text-sm mb-3 flex items-center justify-between`}>
        <span>{title}</span>
        <span className={`text-xs ${style.bgClass} px-2 py-1 rounded ${style.textClass}`}>
          {style.statusLabel}
        </span>
      </h4>
      <div className="overflow-y-auto custom-scrollbar flex-1 pr-2 space-y-2 min-h-0">
        {data.map((p) => (
          <div key={p.id} className="flex justify-between items-center text-xs">
            <span className="text-slate-300">
              <span className="text-slate-500 w-6 inline-block">{p.id}.</span> {p.name}
            </span>
            <span className={`${style.textClass} font-bold`}>{p.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProvinceStatColumn;
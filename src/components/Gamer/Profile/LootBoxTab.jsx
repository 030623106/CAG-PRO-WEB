
const LootBoxTab = () => {
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        
        {/* Item 1: Thẻ 1 Giờ Chơi (Standard) */}
        <div className="bg-[#0f172a] border border-slate-800 p-3 rounded-xl hover:border-yellow-500/50 transition-all group flex flex-col justify-between aspect-[3/4]">
          <div className="relative flex-1 mb-2 overflow-hidden rounded-lg bg-black/50">
            <div className="relative overflow-hidden w-full h-full">
              <img 
                alt="Thẻ 1 Giờ Chơi (Standard)" 
                loading="lazy" 
                decoding="async" 
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover opacity-70 group-hover:opacity-100" 
                src="https://picsum.photos/100/100?random=301" 
              />
            </div>
            <div className="absolute top-1 left-1 bg-black/80 text-[8px] text-white px-1.5 py-0.5 font-bold uppercase rounded-sm">
              HOURS
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs line-clamp-1 mb-1">Thẻ 1 Giờ Chơi (Standard)</h4>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-mono text-xs font-black">500 P</span>
              <button className="bg-slate-800 hover:bg-yellow-500 hover:text-black text-[9px] font-bold px-2 py-1 uppercase transition-colors rounded">
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Item 2: Thẻ 1 Giờ Chơi (VIP) */}
        <div className="bg-[#0f172a] border border-slate-800 p-3 rounded-xl hover:border-yellow-500/50 transition-all group flex flex-col justify-between aspect-[3/4]">
          <div className="relative flex-1 mb-2 overflow-hidden rounded-lg bg-black/50">
            <div className="relative overflow-hidden w-full h-full">
              <img 
                alt="Thẻ 1 Giờ Chơi (VIP)" 
                loading="lazy" 
                decoding="async" 
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover opacity-70 group-hover:opacity-100" 
                src="https://picsum.photos/100/100?random=302" 
              />
            </div>
            <div className="absolute top-1 left-1 bg-black/80 text-[8px] text-white px-1.5 py-0.5 font-bold uppercase rounded-sm">
              HOURS
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs line-clamp-1 mb-1">Thẻ 1 Giờ Chơi (VIP)</h4>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-mono text-xs font-black">800 P</span>
              <button className="bg-slate-800 hover:bg-yellow-500 hover:text-black text-[9px] font-bold px-2 py-1 uppercase transition-colors rounded">
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Item 3: Sting Dâu */}
        <div className="bg-[#0f172a] border border-slate-800 p-3 rounded-xl hover:border-yellow-500/50 transition-all group flex flex-col justify-between aspect-[3/4]">
          <div className="relative flex-1 mb-2 overflow-hidden rounded-lg bg-black/50">
            <div className="relative overflow-hidden w-full h-full">
              <img 
                alt="Sting Dâu" 
                loading="lazy" 
                decoding="async" 
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover opacity-70 group-hover:opacity-100" 
                src="https://picsum.photos/100/100?random=303" 
              />
            </div>
            <div className="absolute top-1 left-1 bg-black/80 text-[8px] text-white px-1.5 py-0.5 font-bold uppercase rounded-sm">
              FOOD
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs line-clamp-1 mb-1">Sting Dâu</h4>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-mono text-xs font-black">150 P</span>
              <button className="bg-slate-800 hover:bg-yellow-500 hover:text-black text-[9px] font-bold px-2 py-1 uppercase transition-colors rounded">
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Item 4: Mì Trứng Xúc Xích */}
        <div className="bg-[#0f172a] border border-slate-800 p-3 rounded-xl hover:border-yellow-500/50 transition-all group flex flex-col justify-between aspect-[3/4]">
          <div className="relative flex-1 mb-2 overflow-hidden rounded-lg bg-black/50">
            <div className="relative overflow-hidden w-full h-full">
              <img 
                alt="Mì Trứng Xúc Xích" 
                loading="lazy" 
                decoding="async" 
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover opacity-70 group-hover:opacity-100" 
                src="https://picsum.photos/100/100?random=304" 
              />
            </div>
            <div className="absolute top-1 left-1 bg-black/80 text-[8px] text-white px-1.5 py-0.5 font-bold uppercase rounded-sm">
              FOOD
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs line-clamp-1 mb-1">Mì Trứng Xúc Xích</h4>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-mono text-xs font-black">300 P</span>
              <button className="bg-slate-800 hover:bg-yellow-500 hover:text-black text-[9px] font-bold px-2 py-1 uppercase transition-colors rounded">
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Item 5: Thẻ Garena 20K */}
        <div className="bg-[#0f172a] border border-slate-800 p-3 rounded-xl hover:border-yellow-500/50 transition-all group flex flex-col justify-between aspect-[3/4]">
          <div className="relative flex-1 mb-2 overflow-hidden rounded-lg bg-black/50">
            <div className="relative overflow-hidden w-full h-full">
              <img 
                alt="Thẻ Garena 20K" 
                loading="lazy" 
                decoding="async" 
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover opacity-70 group-hover:opacity-100" 
                src="https://picsum.photos/100/100?random=305" 
              />
            </div>
            <div className="absolute top-1 left-1 bg-black/80 text-[8px] text-white px-1.5 py-0.5 font-bold uppercase rounded-sm">
              CARD
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs line-clamp-1 mb-1">Thẻ Garena 20K</h4>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-mono text-xs font-black">2000 P</span>
              <button className="bg-slate-800 hover:bg-yellow-500 hover:text-black text-[9px] font-bold px-2 py-1 uppercase transition-colors rounded">
                Claim
              </button>
            </div>
          </div>
        </div>

      </div>
  );
};

export default LootBoxTab;





// src/pages/Gamer/CAG espost hub/CAG espost hub.jsx

export default function CAGEspostHub() {
  return (
    <div className="w-full h-full bg-black overflow-hidden relative">
      {/* Loading overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 z-0">
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin-slow"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
          </svg>
          <span className="text-xs font-mono uppercase tracking-widest">
            Đang tải dữ liệu giải đấu...
          </span>
        </div>
      </div>

      {/* Iframe */}
      <iframe
        src="https://thethaodientuvietnam.com"
        className="w-full h-full border-none relative z-10 bg-white"
        title="CAG eSports Hub"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      ></iframe>

      {/* Floating button */}
      <button className="fixed bottom-24 md:bottom-6 right-4 md:right-6 w-14 h-14 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all z-50 group hover:scale-110 bg-gradient-to-r from-[#00F2EA] to-blue-600">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
            <path d="m4.93 10.93 1.41 1.41"></path>
            <path d="M12 18v4"></path>
            <path d="m17.66 12.34 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        </div>
      </button>
    </div>
  );
}

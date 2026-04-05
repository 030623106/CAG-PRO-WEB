// src/components/SystemView/SystemView.jsx
import { useAuth } from '../../contexts/Authen';

const SystemView = () => {
  const { user } = useAuth();

  let currentRole = 'guest';
  if (user) {
    const roleValue = user.userType || user.role;
    const roleNum = Number(roleValue);

    if (roleNum === 1) currentRole = 'admin';
    else if (roleNum === 2) currentRole = 'owner';
    else if (roleNum === 4) currentRole = 'gamer';
  }

  const roles = [
    { id: 'guest', name: 'GUEST' },
    { id: 'gamer', name: 'GAMER' },
    { id: 'owner', name: 'OWNER' },
    { id: 'admin', name: 'ADMIN' }
  ];

  return (
    <div className="group relative z-[9999]">
        {/* Nút chính - hover vào để mở dropdown */}
        <button className="bg-slate-900/90 text-slate-300 text-[10px] font-bold px-4 py-2.5 rounded-xl border border-slate-700/50 shadow-lg backdrop-blur flex items-center gap-3 hover:bg-slate-800 transition-all cursor-default">
          <span className="w-2 h-2 rounded-full bg-[#00F2EA] animate-pulse"></span>
          <span>SYSTEM VIEW: <span className="text-white uppercase">{currentRole}</span></span>
          <svg
            className="w-3 h-3 transition-transform group-hover:rotate-180 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown menu - hiện khi hover vào group */}
        <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#0B0E14] border border-slate-700 rounded-xl p-2 shadow-2xl flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-bottom-left scale-95 group-hover:scale-100">
          <p className="text-[8px] text-slate-500 uppercase font-bold px-2 py-1 mb-1 border-b border-slate-800">
            System Role Status
          </p>
          {roles.map((role) => (
            <div
              key={role.id}
              className={`text-[9px] font-bold px-3 py-2 rounded-lg text-left uppercase transition-all flex justify-between items-center cursor-default
                ${currentRole === role.id 
                  ? 'bg-[#00F2EA] text-black' 
                  : 'text-slate-400 opacity-50' 
                }`}
            >
              {role.name}
              {currentRole === role.id && <span className="text-[8px]">●</span>}
            </div>
          ))}
        </div>
      </div>
  );
};

export default SystemView;
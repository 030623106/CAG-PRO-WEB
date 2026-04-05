import React, { useState, useMemo } from "react";
import CyberTag from "./CyberTag";

const ZONES = [
    { id: "PUB", name: "PUBLIC ZONE", color: "rgb(59, 130, 246)", count: 40, left: 10, top: 10, cols: 10, rowGap: 8, colGap: 3.5 },
    { id: "VIP", name: "VIP ZONE", color: "rgb(234, 179, 8)", count: 24, left: 60, top: 10, cols: 8, rowGap: 10, colGap: 4 },
    { id: "FPS", name: "FPS / COMPETITIVE", color: "rgb(6, 182, 212)", count: 24, left: 10, top: 50, cols: 8, rowGap: 10, colGap: 4 },
    { id: "CPL", name: "COUPLE ZONE", color: "rgb(236, 72, 153)", count: 10, left: 65, top: 45, cols: 5, rowGap: 12, colGap: 6 },
    { id: "STR", name: "STREAM ROOM", color: "rgb(168, 85, 247)", count: 4, left: 70, top: 75, cols: 2, rowGap: 12, colGap: 10 },
];

const PRICE_MAP = { PUB: 8000, VIP: 12000, FPS: 15000, CPL: 20000, STR: 50000 };

const generateSeats = () => {
    const seats = [];
    ZONES.forEach((zone) => {
        for (let i = 1; i <= zone.count; i++) {
            const row = Math.floor((i - 1) / zone.cols);
            const col = (i - 1) % zone.cols;
            seats.push({
                id: `${zone.id}-${i}`,
                zone: zone.id,
                number: i,
                occupied: Math.random() > 0.5,
                left: `${zone.left + col * zone.colGap}%`,
                top: `${zone.top + row * zone.rowGap}%`,
                color: zone.color,
            });
        }
    });
    return seats;
};

const VisualBookingModal = ({
    onClose,
    shopName = "Cyber All Game Q.7 VIP",
}) => {
    const [seats] = useState(() => generateSeats());
    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeat = (seatId) => {
        setSelectedSeats((prev) =>
            prev.includes(seatId)
                ? prev.filter((s) => s !== seatId)
                : [...prev, seatId],
        );
    };

    const pricePerHour = useMemo(() => {
        return selectedSeats.reduce((total, id) => {
            const seat = seats.find((s) => s.id === id);
            return total + (PRICE_MAP[seat?.zone] || 0);
        }, 0);
    }, [selectedSeats, seats]);

    return (
        <div className="fixed inset-0 z-[70] bg-[#020617] animate-fade-in flex flex-col h-full">
            {/* ===== HEADER ===== */}
            <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
                <div>
                    <h3 className="text-white font-black uppercase text-lg flex items-center gap-2">
                        <span className="text-cyan-400">VISUAL</span> BOOKING
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        {shopName}
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            {/* ===== SEAT MAP ===== */}
            <div className="flex-1 overflow-auto relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-950 to-black p-8 flex items-center justify-center cursor-grab active:cursor-grabbing">
                <div className="relative w-[800px] h-[600px] border-2 border-slate-800 rounded-xl bg-[#0f172a] shadow-2xl p-4 transform scale-50 md:scale-100 origin-center transition-transform">
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#334155_1px,transparent_1px),linear-gradient(90deg,#334155_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                        <CyberTag 
                            badge={{ 
                                text: "Cửa Vào", 
                                color: "bg-slate-800", 
                                textColor: "text-white", 
                                textSize: "text-[10px]", 
                                padding: "px-4 py-1", 
                                fontWeight: "font-bold",
                                shadow: "",
                                extraClass: "border border-slate-600" 
                            }} 
                        />
                    </div>

                    {seats.map((seat) => {
                        const isSelected = selectedSeats.includes(seat.id);

                        return (
                            <div
                                key={seat.id}
                                className={`absolute w-8 h-8 rounded-md flex items-center justify-center text-[8px] font-bold cursor-pointer transition-all duration-300 shadow-lg
                  ${seat.occupied ? "opacity-30 grayscale cursor-not-allowed scale-90" : "hover:scale-125 hover:z-20"}
                  ${isSelected ? "ring-2 ring-white scale-110 z-10" : ""}
                `}
                                title={`${seat.id} - ${seat.occupied ? "OCCUPIED" : isSelected ? "SELECTED" : "AVAILABLE"}`}
                                style={{
                                    left: seat.left,
                                    top: seat.top,
                                    backgroundColor: isSelected ? "#ffffff" : seat.color,
                                    color: isSelected ? "#000" : "#fff",
                                    boxShadow: isSelected
                                        ? `0 0 15px #fff, 0 0 5px ${seat.color}`
                                        : `${seat.color} 0px 0px 5px`,
                                }}
                                onClick={() => !seat.occupied && toggleSeat(seat.id)}
                            >
                                {seat.occupied ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        stroke="none"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                ) : (
                                    seat.number
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ===== ZONE LEGEND ===== */}
            <div className="bg-slate-900 border-t border-slate-800 p-4 flex justify-center gap-4 overflow-x-auto">
                {ZONES.map((zone) => (
                    <div key={zone.id} className="flex items-center gap-2">
                        <div
                            className="w-3 h-3 rounded shadow-lg"
                            style={{
                                backgroundColor: zone.color,
                                boxShadow: `${zone.color} 0px 0px 8px`,
                            }}
                        />
                        <span className="text-[10px] text-slate-400 font-bold uppercase">
                            {zone.name}
                        </span>
                    </div>
                ))}
                <div className="flex items-center gap-2 border-l border-slate-700 pl-4">
                    <div className="w-3 h-3 rounded bg-white" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase">
                        Đang Chọn
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-slate-700 opacity-50" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase">
                        Có Khách
                    </span>
                </div>
            </div>

            {/* ===== FOOTER ===== */}
            <div className="p-4 bg-slate-950 pb-safe border-t border-slate-800 flex justify-between items-center">
                <div>
                    <p className="text-slate-400 text-xs font-bold uppercase">
                        Đã chọn:{" "}
                        <span className="text-white">{selectedSeats.length} máy</span>
                    </p>
                    <p className="text-white font-mono font-black text-xl">
                        {pricePerHour.toLocaleString("vi-VN")}đ
                        <span className="text-sm font-normal text-slate-500">/giờ</span>
                    </p>
                </div>
                <button
                    disabled={selectedSeats.length === 0}
                    className={`px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${selectedSeats.length > 0
                        ? "bg-[#00F260] text-black hover:scale-105 shadow-[0_0_20px_rgba(0,242,96,0.4)]"
                        : "bg-slate-800 text-slate-600 cursor-not-allowed"
                        }`}
                >
                    Giữ vị trí
                </button>
            </div>
        </div>
    );
};

export default VisualBookingModal;

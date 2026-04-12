
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend, AreaChart, Area } from 'recharts';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import ProvinceStatColumn from '../../components/Admin/Dashboard/ProvinceStatColumn';
import FeedbackCard from '../../components/Admin/Dashboard/FeedbackCard';
import StatCard from '../../components/Admin/Dashboard/StatCard';
const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';

const OFFICE_GROWTH_DATA = [
  { month: 'T10/25', chain: 120, guide: 450, partner: 100 },
  { month: 'T11/25', chain: 150, guide: 520, partner: 180 },
  { month: 'T12/25', chain: 180, guide: 610, partner: 250 },
  { month: 'T1/26', chain: 220, guide: 750, partner: 350 },
  { month: 'T2/26', chain: 350, guide: 950, partner: 500 },
  { month: 'T3/26', chain: 500, guide: 1200, partner: 800 },
];

const PROVINCE_COVERAGE_DATA = [
  { id: 1, name: 'TP.HCM', count: 850, status: 'HIGH', lat: 10.8231, lng: 106.6297 },
  { id: 2, name: 'Hà Nội', count: 600, status: 'HIGH', lat: 21.0285, lng: 105.8542 },
  { id: 3, name: 'Đà Nẵng', count: 225, status: 'HIGH', lat: 16.0471, lng: 108.2068 },
  { id: 4, name: 'Đồng Nai', count: 120, status: 'HIGH', lat: 10.9465, lng: 107.0266 },
  { id: 5, name: 'Bình Dương', count: 100, status: 'HIGH', lat: 11.1667, lng: 106.6667 },
  { id: 6, name: 'Hải Phòng', count: 80, status: 'HIGH', lat: 20.8449, lng: 106.6881 },
  { id: 7, name: 'Cần Thơ', count: 70, status: 'HIGH', lat: 10.0452, lng: 105.7469 },
  { id: 8, name: 'Bà Rịa - Vũng Tàu', count: 60, status: 'HIGH', lat: 10.4973, lng: 107.1683 },
  { id: 9, name: 'Khánh Hòa', count: 50, status: 'HIGH', lat: 12.2388, lng: 109.1967 },
  { id: 10, name: 'Thanh Hóa', count: 45, status: 'MEDIUM', lat: 19.8075, lng: 105.7764 },
  { id: 11, name: 'Nghệ An', count: 40, status: 'MEDIUM', lat: 19.2333, lng: 104.9833 },
  { id: 12, name: 'Thừa Thiên Huế', count: 35, status: 'MEDIUM', lat: 16.4637, lng: 107.5905 },
  { id: 13, name: 'Quảng Ninh', count: 35, status: 'MEDIUM', lat: 21.0065, lng: 107.2925 },
  { id: 14, name: 'Bắc Ninh', count: 30, status: 'MEDIUM', lat: 21.1861, lng: 106.0763 },
  { id: 15, name: 'Lâm Đồng', count: 25, status: 'LOW', lat: 11.9404, lng: 108.4583 },
  { id: 16, name: 'Bình Định', count: 20, status: 'LOW', lat: 13.7829, lng: 109.2197 },
  { id: 17, name: 'Kiên Giang', count: 15, status: 'LOW', lat: 10.0125, lng: 105.0809 },
  { id: 18, name: 'Bình Thuận', count: 15, status: 'LOW', lat: 10.9333, lng: 108.1000 },
  { id: 19, name: 'Gia Lai', count: 10, status: 'LOW', lat: 13.9833, lng: 108.0000 },
  { id: 20, name: 'Đắk Lắk', count: 10, status: 'LOW', lat: 12.6667, lng: 108.0500 },
  { id: 21, name: 'Tây Ninh', count: 10, status: 'LOW', lat: 11.3000, lng: 106.1000 },
  { id: 22, name: 'Long An', count: 10, status: 'LOW', lat: 10.5333, lng: 106.1667 },
  { id: 23, name: 'Tiền Giang', count: 8, status: 'LOW', lat: 10.4167, lng: 106.2500 },
  { id: 24, name: 'Bến Tre', count: 8, status: 'LOW', lat: 10.2333, lng: 106.3833 },
  { id: 25, name: 'Trà Vinh', count: 5, status: 'LOW', lat: 9.9167, lng: 106.3333 },
  { id: 26, name: 'Vĩnh Long', count: 5, status: 'LOW', lat: 10.2500, lng: 105.9667 },
  { id: 27, name: 'Đồng Tháp', count: 5, status: 'LOW', lat: 10.4667, lng: 105.6333 },
  { id: 28, name: 'An Giang', count: 5, status: 'LOW', lat: 10.5000, lng: 105.1667 },
  { id: 29, name: 'Sóc Trăng', count: 4, status: 'LOW', lat: 9.6000, lng: 105.9833 },
  { id: 30, name: 'Bạc Liêu', count: 3, status: 'LOW', lat: 9.2833, lng: 105.7167 },
  { id: 31, name: 'Cà Mau', count: 2, status: 'LOW', lat: 9.1833, lng: 105.1500 },
  { id: 32, name: 'Lai Châu', count: 0, status: 'NONE', lat: 22.3969, lng: 103.4617 },
  { id: 33, name: 'Điện Biên', count: 0, status: 'NONE', lat: 21.3864, lng: 103.0163 },
  { id: 34, name: 'Hà Giang', count: 0, status: 'NONE', lat: 22.8233, lng: 104.9836 },
];

const MOCK_OFFICES = [
  { id: 1, name: 'SkyNet Cyber', address: '15 Nguyễn Văn Lượng, Gò Vấp', isCagProInstalled: false, lat: 10.8231, lng: 106.6297, activeUsers: 45, totalSeats: 80, status: 'ONLINE' },
  { id: 2, name: 'CyberCore Premium', address: '123 Lê Lợi, Quận 1', isCagProInstalled: true, lat: 10.7769, lng: 106.7009, activeUsers: 120, totalSeats: 150, status: 'ONLINE' },
];

const PLAY_RATE_DATA = [
  { name: 'T2', hours: 1200 },
  { name: 'T3', hours: 1100 },
  { name: 'T4', hours: 1300 },
  { name: 'T5', hours: 1250 },
  { name: 'T6', hours: 1800 },
  { name: 'T7', hours: 2500 },
  { name: 'CN', hours: 2400 },
];

const RETENTION_DATA = [
  { name: 'Tuần 1', retention: 85, churn: 15 },
  { name: 'Tuần 2', retention: 82, churn: 18 },
  { name: 'Tuần 3', retention: 88, churn: 12 },
  { name: 'Tuần 4', retention: 90, churn: 10 },
];

const CHART_DATA = [
  { name: 'CAG Chuỗi', value: 500 },
  { name: 'CAG Guide', value: 1200 },
  { name: 'Phòng máy đối tác', value: 800 },
];

const RANKING_DATA = [
  { name: 'CyberCore Premium', value: 1500 },
  { name: 'Spartacus Gaming', value: 1200 },
  { name: 'Vikings Esports', value: 950 },
  { name: 'X-Stadium', value: 800 },
  { name: 'QTV Center', value: 750 },
];

const APP_FEEDBACK_DATA = {
  owner: {
    rating: 4.8,
    totalReviews: 1850,
    highlights: [
      "Quản lý tập trung tiện lợi, tiết kiệm 30% thời gian.",
      "Lượng khách mới từ CAG Guide tăng rõ rệt.",
      "Hệ thống Flash Sale giúp lấp đầy máy trống giờ thấp điểm."
    ]
  },
  gamer: {
    rating: 4.7,
    totalReviews: 14200,
    highlights: [
      "Tìm phòng máy có máy lạnh, ghế sofa cực nhanh.",
      "Nhiều khuyến mãi độc quyền từ CAG.",
      "Giao diện đẹp, dễ sử dụng, xem được cấu hình máy trước khi đến."
    ]
  }
};

const AdminDashboard = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAiAnalysis('• Tỷ lệ giữ chân khách hàng đạt 90%, tăng 2% so với tuần trước.\n• Vùng TP.HCM và Hà Nội đang hoạt động rất tốt, cần duy trì.\n• Đề xuất: Đẩy mạnh chương trình khuyến mãi tại các tỉnh vùng trung bình như Cần Thơ, Hải Phòng.');
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <>
      {/* Style thanh kéo y chang mẫu */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          ::-webkit-scrollbar-thumb {
            background: #1e293b;
            border-radius: 2px;
          }
          ::-webkit-scrollbar-track {
            background: #0B0E14;
          }
            ::-webkit-scrollbar-thumb:hover {
            background: #33FFFF;
          }
            .glass-panel {
              background: rgba(11, 14, 20, 0.7);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.04);
            }
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: #0B0E14; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 2px; }
          .card-blue {
            border-left: 4px solid rgb(59, 130, 246) !important;
            border-top: 0.8px solid rgb(59, 130, 246) !important;
            border-right: 0.8px solid rgb(59, 130, 246) !important;
            border-bottom: 0.8px solid rgb(59, 130, 246) !important;
          }
          .card-green {
            border-left: 4px solid rgb(34, 197, 94) !important;
            border-top: 0.8px solid rgb(34, 197, 94) !important;
            border-right: 0.8px solid rgb(34, 197, 94) !important;
            border-bottom: 0.8px solid rgb(34, 197, 94) !important;
          }
          .card-red {
            border-left: 4px solid rgb(239, 68, 68) !important;
            border-top: 0.8px solid rgb(239, 68, 68) !important;
            border-right: 0.8px solid rgb(239, 68, 68) !important;
            border-bottom: 0.8px solid rgb(239, 68, 68) !important;
          }
          .card-purple {
            border-left: 4px solid rgb(168, 85, 247) !important;
            border-top: 0.8px solid rgb(168, 85, 247) !important;
            border-right: 0.8px solid rgb(168, 85, 247) !important;
            border-bottom: 0.8px solid rgb(168, 85, 247) !important;
          }
        `}
      </style>

      

      <div className="space-y-6 animate-fade-in font-montserrat">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-white flex items-center gap-2 font-rajdhani uppercase">
            <span className="w-2 h-8 bg-[#00F2EA] rounded-full shadow-[0_0_10px_#00F2EA]"></span>
            TỔNG QUAN HỆ THỐNG CAG
          </h2>
          <div className="flex gap-2">
            <span className="flex items-center gap-2 px-3 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/30">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              HỆ THỐNG ONLINE
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Row 1: Growth Chart & Priority Leads */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-panel rounded-xl p-6 shadow-lg flex flex-col ">
              <h3 className="text-lg font-bold text-[#00F2EA] mb-6 flex items-center gap-2 font-rajdhani uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Biểu đồ tăng trưởng phòng máy
              </h3>
              <div style={{ width: '100%', height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={OFFICE_GROWTH_DATA}>
                    <defs>
                      <linearGradient id="colorChain" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00F2EA" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#00F2EA" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorGuide" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPartner" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="#94a3b8" tick={{fontSize: 12}} />
                    <YAxis stroke="#94a3b8" tick={{fontSize: 12}} />
                    <Tooltip contentStyle={{ backgroundColor: '#131720', borderColor: '#1e293b' }} />
                    <Legend />
                    <Area type="monotone" dataKey="chain" name="CAG Chuỗi" stroke="#00F2EA" fillOpacity={1} fill="url(#colorChain)" />
                    <Area type="monotone" dataKey="guide" name="CAG Guide" stroke="#FFD700" fillOpacity={1} fill="url(#colorGuide)" />
                    <Area type="monotone" dataKey="partner" name="Đối tác" stroke="#ec4899" fillOpacity={1} fill="url(#colorPartner)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-6 shadow-lg flex flex-col border border-[#ec4899]/30">
              <h3 className="text-lg font-bold text-[#ec4899] mb-4 flex items-center gap-2 font-rajdhani uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Cần tư vấn cài CAG Pro
              </h3>
              <div className="space-y-3 overflow-y-auto flex-1 pr-2 custom-scrollbar" style={{ maxHeight: '320px' }}>
                {MOCK_OFFICES.filter(o => !o.isCagProInstalled).map((office) => (
                  <div key={office.id} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#ec4899]/50 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-white text-sm">{office.name}</span>
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">Ưu tiên</span>
                    </div>
                    <div className="text-xs text-slate-400 mb-2">{office.address}</div>
                    <button className="w-full py-1.5 bg-[#ec4899]/20 hover:bg-[#ec4899]/40 text-[#ec4899] text-xs font-bold rounded transition-colors">
                      Liên hệ tư vấn ngay
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Province Coverage & AI Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-panel rounded-xl p-6 shadow-lg flex flex-col border border-[#FFD700]/30">
              <h3 className="text-lg font-bold text-[#FFD700] mb-6 flex items-center gap-2 font-rajdhani uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Độ phủ CAG GUIDE trên 34 Tỉnh Thành
              </h3>

              <div className="w-full h-[400px] mb-6 rounded-xl overflow-hidden border border-white/10 relative">
                {!hasValidKey ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10 p-6 text-center">
                    <div>
                      <h4 className="text-[#FFD700] font-bold text-lg mb-2">Google Maps API Key Required</h4>
                      <p className="text-sm text-slate-300 mb-4">Please add your GOOGLE_MAPS_PLATFORM_KEY to the AI Studio Secrets to view the interactive map.</p>
                      <ul className="text-xs text-slate-400 text-left list-disc pl-5 space-y-1">
                        <li>Open Settings (⚙️ gear icon, top-right)</li>
                        <li>Select Secrets</li>
                        <li>Add GOOGLE_MAPS_PLATFORM_KEY</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <APIProvider apiKey={API_KEY} version="weekly">
                    <Map
                      defaultCenter={{ lat: 16.0471, lng: 108.2068 }}
                      defaultZoom={5}
                      mapId="CAG_COVERAGE_MAP"
                      style={{ width: '100%', height: '100%' }}
                      disableDefaultUI={true}
                      zoomControl={true}
                    >
                      {PROVINCE_COVERAGE_DATA.map((province) => {
                        let pinColor = '#ec4899';
                        if (province.status === 'HIGH') pinColor = '#00F2EA';
                        else if (province.status === 'MEDIUM') pinColor = '#FFD700';
                        else if (province.status === 'LOW') pinColor = '#f97316';
                        return (
                          <AdvancedMarker
                            key={province.id}
                            position={{ lat: province.lat, lng: province.lng }}
                            onClick={() => setSelectedProvince(province)}
                          >
                            <Pin background={pinColor} glyphColor="#fff" borderColor={pinColor} scale={province.status === 'HIGH' ? 1.2 : 1} />
                          </AdvancedMarker>
                        );
                      })}
                      {selectedProvince && (
                        <InfoWindow position={{ lat: selectedProvince.lat, lng: selectedProvince.lng }} onCloseClick={() => setSelectedProvince(null)}>
                          <div className="p-2 min-w-[150px] text-slate-900">
                            <h4 className="font-bold text-sm mb-1">{selectedProvince.name}</h4>
                            <p className="text-xs mb-1">Số lượng phòng máy: <strong>{selectedProvince.count}</strong></p>
                            <div className="text-[10px] uppercase font-bold px-2 py-1 rounded inline-block" style={{
                              backgroundColor: selectedProvince.status === 'HIGH' ? '#00F2EA20' : selectedProvince.status === 'MEDIUM' ? '#FFD70020' : selectedProvince.status === 'LOW' ? '#f9731620' : '#ec489920',
                              color: selectedProvince.status === 'HIGH' ? '#008b86' : selectedProvince.status === 'MEDIUM' ? '#b39700' : selectedProvince.status === 'LOW' ? '#c2410c' : '#be185d'
                            }}>
                              {selectedProvince.status === 'HIGH' ? 'Nhiều khách' : selectedProvince.status === 'MEDIUM' ? 'Trung bình' : selectedProvince.status === 'LOW' ? 'Ít khách' : 'Chưa có CAG'}
                            </div>
                          </div>
                        </InfoWindow>
                      )}
                    </Map>
                  </APIProvider>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[320px]">
                <ProvinceStatColumn 
                  title="TOP PHỦ SÓNG"
                  type="HIGH"
                  data={PROVINCE_COVERAGE_DATA.filter(p => p.status === 'HIGH')}
                />
                <ProvinceStatColumn 
                  title="ĐANG PHÁT TRIỂN"
                  type="MEDIUM"
                  data={PROVINCE_COVERAGE_DATA.filter(p => p.status === 'MEDIUM' || p.status === 'LOW')}
                />
                <ProvinceStatColumn 
                  title="VÙNG TRẮNG"
                  type="NONE"
                  data={PROVINCE_COVERAGE_DATA.filter(p => p.status === 'NONE')}
                />
              </div>
            </div>

            <div className="rounded-xl p-6 shadow-lg flex flex-col border border-[#00F2EA]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#00F2EA" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 7.1"/><path d="M12 12l9.9 4.9"/></svg>
              </div>
              <h3 className="text-lg font-bold text-[#00F2EA] mb-4 flex items-center gap-2 font-rajdhani uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                AI Phân Tích Độ Phủ
              </h3>
              <div className="space-y-4 text-sm text-slate-300 relative z-10 overflow-y-auto pr-2 custom-scrollbar flex-1 min-h-0">
                <div>
                  <h4 className="font-bold text-[#00F2EA] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#00F2EA]"></span> Vùng mạnh (TP.HCM, Hà Nội)</h4>
                  <p className="mt-1 text-xs leading-relaxed">Tập trung đông sinh viên, nhu cầu eSports cao. <br/><span className="text-green-400">→ Hướng xử lý:</span> Tiếp tục duy trì và upsell các dịch vụ cao cấp (Flash Sale, Giải đấu).</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#FFD700] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFD700]"></span> Vùng tiềm năng (Cần Thơ, Hải Phòng)</h4>
                  <p className="mt-1 text-xs leading-relaxed">Đang phát triển nhưng thiếu sự kiện kích cầu. <br/><span className="text-green-400">→ Hướng xử lý:</span> Cần tổ chức các giải đấu phong trào liên phòng máy để thu hút thêm Gamer.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#ec4899] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#ec4899]"></span> Vùng trắng (Lai Châu, Điện Biên)</h4>
                  <p className="mt-1 text-xs leading-relaxed">Hạ tầng mạng/thu nhập chưa phù hợp cho mô hình Cyber lớn. <br/><span className="text-green-400">→ Hướng xử lý:</span> Đẩy mạnh mô hình CAG Guide quy mô nhỏ (10-20 máy) với chi phí đầu tư thấp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: App Feedback */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FeedbackCard 
              title="Đánh giá từ Chủ Nét"
              rating={APP_FEEDBACK_DATA.owner.rating}
              totalReviews={APP_FEEDBACK_DATA.owner.totalReviews}
              highlights={APP_FEEDBACK_DATA.owner.highlights}
              color="#00F2EA"
              iconType="owner"
            />
            <FeedbackCard 
              title="Đánh giá từ Gamer"
              rating={APP_FEEDBACK_DATA.gamer.rating}
              totalReviews={APP_FEEDBACK_DATA.gamer.totalReviews}
              highlights={APP_FEEDBACK_DATA.gamer.highlights}
              color="#FFD700"
              iconType="gamer"
            />
          </div>
        </div>

        {/* AI Analysis Section */}
        <div className="glass-panel rounded-xl p-6 shadow-lg relative overflow-hidden" style={{border: '0.8px solid rgba(0, 242, 234, 0.3)'}}>
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#00F2EA" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 7.1"/><path d="M12 12l9.9 4.9"/></svg>
          </div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <h3 className="text-lg font-bold text-[#00F2EA] flex items-center gap-2 font-rajdhani uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              AI PHÂN TÍCH &amp; CẢNH BÁO TỰ ĐỘNG
            </h3>
            <button onClick={handleAnalyze} disabled={isAnalyzing} className="px-4 py-2 bg-[#00F2EA] text-black font-bold rounded hover:bg-[#00F2EA]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm">
              {isAnalyzing ? (
                <><div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div> Đang phân tích...</>
              ) : (
                <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg> Phân Tích Ngay</>
              )}
            </button>
          </div>
          {isAnalyzing ? (
            <div className="flex items-center gap-3 text-slate-400"><div className="w-5 h-5 border-2 border-[#00F2EA] border-t-transparent rounded-full animate-spin"></div> Đang phân tích dữ liệu hệ thống...</div>
          ) : aiAnalysis ? (
            <div className="prose prose-invert max-w-none text-sm text-slate-300 relative z-10 whitespace-pre-line">{aiAnalysis}</div>
          ) : (
            <div className="text-slate-400 text-sm italic relative z-10">Nhấn "Phân Tích Ngay" để AI tổng hợp dữ liệu và đưa ra cảnh báo/gợi ý.</div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Tổng Phòng Máy (Hệ thống)"
            value="2.500"
            change=" 15% so với tháng trước"
            changeType="up"
            cardClass="card-blue"
          />
          <StatCard 
            title="Tổng Gamer (Hệ thống)"
            value="20.000"
            change={<><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block mr-1"></span>4.000 Đang Online</>}
            changeType={null}
            cardClass="card-green"
          />
          <StatCard 
            title="Tỷ lệ khách quay lại"
            value="90%"
            change=" 2% so với tháng trước"
            changeType="up"
            cardClass="card-red"
          />
          <StatCard 
            title="Giờ chơi trung bình/tuần"
            value="115,500H"
            change=" 5% so với tuần trước"
            changeType="up"
            cardClass="card-purple"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-panel rounded-xl p-6 shadow-lg flex flex-col border border-white/20">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-rajdhani uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
              Tần suất chơi game (Tuần)
            </h3>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={PLAY_RATE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} />
                  <YAxis stroke="#94a3b8" tick={{fontSize: 12}} />
                  <Tooltip contentStyle={{ backgroundColor: '#131720', borderColor: '#1e293b' }} />
                  <Line type="monotone" dataKey="hours" stroke="#00F2EA" strokeWidth={3} dot={{ r: 4, fill: '#00F2EA' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 shadow-lg flex flex-col border border-white/20">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-rajdhani uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
              Tỷ lệ Khách quay lại / Rời bỏ
            </h3>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RETENTION_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} />
                  <YAxis stroke="#94a3b8" tick={{fontSize: 12}} />
                  <Tooltip contentStyle={{ backgroundColor: '#131720', borderColor: '#1e293b' }} />
                  <Legend />
                  <Bar dataKey="retention" name="Quay lại (%)" fill="#22c55e" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="churn" name="Rời bỏ (%)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Partner Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-panel rounded-xl p-6 shadow-lg flex flex-col border border-[#00F2EA]/30">
            <h3 className="text-lg font-bold text-[#00F2EA] mb-6 flex items-center gap-2 font-rajdhani uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
              PHÂN BỐ PHÒNG MÁY THEO NHÓM ĐỐI TÁC
            </h3>
            <div style={{ width: '100%', height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHART_DATA}>
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#131720', borderColor: '#1e293b', color: '#f8fafc' }}
                    itemStyle={{ color: '#00F2EA' }}
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  />
                  <Bar dataKey="value" name="Số lượng Phòng máy" radius={[4, 4, 0, 0]} fill="#FFD700" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 shadow-lg border border-[#FFD700]/30">
            <h3 className="text-lg font-bold text-[#FFD700] mb-4 flex items-center gap-2 font-rajdhani uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              TOP PHÒNG MÁY HỆ THỐNG
            </h3>
            <div className="space-y-3">
              {RANKING_DATA.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold ${
                      index === 0 ? 'bg-[#FFD700] text-black shadow-[0_0_10px_#FFD700]' : 
                      index === 1 ? 'bg-slate-400 text-black' : 
                      index === 2 ? 'bg-amber-700 text-white' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="text-slate-200 text-sm font-medium group-hover:text-white">{item.name}</span>
                  </div>
                  <span className="text-[#00F2EA] font-bold text-sm font-rajdhani">{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
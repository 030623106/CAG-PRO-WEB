import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ============================================================
// DỮ LIỆU GIẢ — Thay bằng dữ liệu thật khi deploy
// ============================================================
const LOCATIONS = [
  {
    id: 1,
    lat: 10.7380,
    lng: 106.7006,
    title: "Cyber All Game Q.7 VIP",
    address: "123 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP.HCM",
    rating: 5.0,
    reviews: 320,
    pcCount: 120,
    thumb: "https://picsum.photos/100/100?random=101",
  },
  {
    id: 2,
    lat: 10.7761,
    lng: 106.6958,
    title: "Doragon Cyber Q.10",
    address: "241 Đ. Nguyễn Thượng Hiền, Phường 6, Bình Thạnh, TP.HCM",
    rating: 4.8,
    reviews: 180,
    pcCount: 150,
    thumb: "https://picsum.photos/100/100?random=105",
  },
  {
    id: 3,
    lat: 10.7795,
    lng: 106.6983,
    title: "SkyNet Cyber",
    address: "Tầng 5, 201 Nguyễn Trãi, Quận 1, TP.HCM",
    rating: 3.5,
    reviews: 95,
    pcCount: 40,
    thumb: "https://picsum.photos/100/100?random=104",
  },
];

// Custom icon cho quán gaming (có hình ảnh tiệm)
const createShopIcon = (thumbUrl) =>
  L.divIcon({
    className: "custom-map-marker",
    html: `
      <div style="
        width: 44px; height: 44px; border-radius: 50%;
        border: 3px solid #dc2626; overflow: hidden;
        background: #000; box-shadow: 0 4px 15px rgba(220,38,38,0.5);
        cursor: pointer;
      ">
        <img src="${thumbUrl}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
      <div style="
        width: 0; height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 9px solid #dc2626;
        margin: -1px auto 0;
      "></div>
    `,
    iconSize: [44, 56],
    iconAnchor: [22, 56],
    popupAnchor: [0, -56],
  });

// Icon cho vị trí người dùng (chấm xanh)
const userIcon = L.divIcon({
  className: "user-location-marker",
  html: `
    <div style="
      width: 20px; height: 20px; border-radius: 50%;
      background: #00F2EA;
      border: 3px solid #fff;
      box-shadow: 0 0 15px rgba(0,242,234,0.8), 0 0 30px rgba(0,242,234,0.4);
      animation: pulse-user 2s infinite;
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Component để fly đến vị trí
const FlyToLocation = ({ position, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom || 15, { duration: 1.5 });
    }
  }, [position, zoom, map]);
  return null;
};

// Tính khoảng cách (km) giữa 2 tọa độ lúc chờ lấy real routing
const getDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const MapModal = ({ onClose }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [flyTarget, setFlyTarget] = useState(null);
  
  const [selectedRoute, setSelectedRoute] = useState(null); // Đường đi từ user -> quán
  const [selectedShop, setSelectedShop] = useState(null);
  
  const mapRef = useRef(null);

  // Lấy vị trí người dùng
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Trình duyệt không hỗ trợ định vị");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(loc);
      },
      (err) => {
        console.warn("Geolocation error:", err.message);
        setLocationError("Không thể lấy vị trí. Hãy bật GPS.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  // Mở Google Maps chỉ đường (tab mới nếu user muốn)
  const openGoogleDirections = (dest) => {
    const origin = userLocation ? `${userLocation.lat},${userLocation.lng}` : "";
    const destination = `${dest.lat},${dest.lng}`;
    const url = userLocation
      ? `https://www.google.com/maps/dir/${origin}/${destination}`
      : `https://www.google.com/maps/search/?api=1&query=${destination}`;
    window.open(url, "_blank");
  };

  // Vẽ đường đi thực tế trên map bằng dữ liệu OSRM
  const showRoute = async (shop) => {
    if (!userLocation) {
      alert("Chưa có vị trí của bạn. Hãy cho phép truy cập GPS!");
      return;
    }
    
    // Đóng popup marker shop khi bấm "Lộ trình" bằng cách chèn fake click (nếu cần thiết)
    // MapContainer tự handle khi render Polyline
    
    // Hiển thị đường chim bay tạm thời trong lúc tải
    setSelectedRoute({
      from: [userLocation.lat, userLocation.lng],
      to: [shop.lat, shop.lng],
      shop,
      distance: getDistance(userLocation.lat, userLocation.lng, shop.lat, shop.lng),
      coords: [[userLocation.lat, userLocation.lng], [shop.lat, shop.lng]],
      isLoading: true
    });
    setSelectedShop(shop);

    // Fetch dữ liệu lộ trình thực tế từ OSRM (Miễn phí 100%)
    try {
      const resp = await fetch(`https://router.project-osrm.org/route/v1/driving/${userLocation.lng},${userLocation.lat};${shop.lng},${shop.lat}?overview=full&geometries=geojson`);
      const data = await resp.json();
      if (data.routes && data.routes.length > 0) {
        const r = data.routes[0];
        const routeCoords = r.geometry.coordinates.map(c => [c[1], c[0]]);
        setSelectedRoute({
          from: [userLocation.lat, userLocation.lng],
          to: [shop.lat, shop.lng],
          shop,
          distance: r.distance / 1000,
          duration: Math.ceil(r.duration / 60),
          coords: routeCoords,
          isLoading: false
        });
      } else {
        setSelectedRoute(prev => ({...prev, isLoading: false}));
      }
    } catch (e) {
      console.error(e);
      setSelectedRoute(prev => ({...prev, isLoading: false}));
    }
  };

  const clearRoute = () => {
    setSelectedRoute(null);
    setSelectedShop(null);
  };

  const goToMyLocation = () => {
    if (userLocation) {
      setFlyTarget({ lat: userLocation.lat, lng: userLocation.lng, _ts: Date.now() });
    } else {
      alert("Đang tìm vị trí của bạn...");
    }
  };

  const defaultCenter = [10.7626, 106.6602];

  return (
    <div className="fixed inset-0 z-[100] bg-[#141414] animate-fade-in flex flex-col">
      {/* Header Buttons */}
      <div className="absolute top-4 right-4 z-[1000] flex gap-2">
        {selectedRoute && (
          <button
            onClick={clearRoute}
            className="bg-red-600 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-black uppercase tracking-widest shadow-2xl hover:bg-red-500 transition-all flex items-center gap-2 text-[10px] md:text-xs"
          >
            ✕ Xóa đường đi
          </button>
        )}
        <button
          onClick={onClose}
          className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-black uppercase tracking-widest shadow-2xl hover:bg-slate-200 hover:text-black transition-all flex items-center gap-2 text-[10px] md:text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Đóng Map
        </button>
      </div>

      {/* Button Vị trí của tôi */}
      <div className="absolute bottom-24 right-4 z-[1000] flex flex-col gap-2 items-end">
        <button
          onClick={goToMyLocation}
          className="bg-white text-black px-4 py-3 rounded-full font-black uppercase tracking-widest shadow-2xl hover:bg-slate-200 transition-all flex items-center gap-2 text-[10px] md:text-xs"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          </svg>
          Vị trí của tôi
        </button>
        {locationError && (
          <div className="bg-red-900/80 text-red-300 text-[10px] px-3 py-1.5 rounded-lg backdrop-blur font-bold shadow-2xl">
            ⚠️ {locationError}
          </div>
        )}
      </div>

      {/* Bảng báo Chỉ đường ở góc dưới trái (Không che map) */}
      {selectedRoute && (
        <div className="absolute bottom-6 left-4 z-[1000] bg-white/95 backdrop-blur-md text-black p-4 rounded-2xl border border-black/10 shadow-2xl max-w-[300px]">
          <p className="text-[10px] text-red-600 font-bold uppercase tracking-widest mb-1">
            {selectedRoute.isLoading ? "Đang dò đường đi..." : "Lộ trình thực tế"}
          </p>
          <div className="flex items-baseline gap-2 mb-1">
            <p className="text-xl font-black text-black">{selectedRoute.distance.toFixed(1)} km</p>
            {!selectedRoute.isLoading && selectedRoute.duration && (
              <p className="text-sm text-green-700 font-bold">~ {selectedRoute.duration} phút</p>
            )}
          </div>
          <p className="text-xs text-slate-500 mb-0 font-medium">đến {selectedRoute.shop.title}</p>
        </div>
      )}

      {/* Leaflet Map -> Google Maps Tiles Miễn phí */}
      <MapContainer
        center={userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter}
        zoom={13}
        style={{ width: "100%", height: "100%", zIndex: 10 }}
        zoomControl={false}
        attributionControl={false}
        ref={mapRef}
      >
        {/* Lấy Tile chuẩn của Google Maps (Giao diện sáng sủa mặc định, Miễn phí) */}
        <TileLayer 
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" 
          maxZoom={20}
        />

        {/* Căn Focus Map (Fly To) */}
        {flyTarget && <FlyToLocation position={[flyTarget.lat, flyTarget.lng]} zoom={15} key={flyTarget._ts} />}

        {/* Marker các Quán Net (Có hình Thumbnail + Popup chi tiết) */}
        {LOCATIONS.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createShopIcon(loc.thumb)}
          >
            <Popup>
              {/* Đây là Popup thông tin chi tiết hiện ra khi click vào Marker */}
              <div style={{
                background: "#fff",
                padding: "16px",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "stretch",
                minWidth: "260px",
                fontFamily: "'Montserrat', sans-serif",
                color: "#111"
              }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "10px",
                    border: "2px solid #dc2626", overflow: "hidden", flexShrink: 0,
                  }}>
                    <img src={loc.thumb} alt={loc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontWeight: 900, fontSize: "14px", color: "#111",
                      textTransform: "uppercase", margin: 0, letterSpacing: "0.5px",
                    }}>
                      {loc.title}
                    </h4>
                    <p style={{ color: "#555", fontSize: "10px", margin: "4px 0 0" }}>
                      📍 {loc.address}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
                      <span style={{ color: "#d97706", fontSize: "12px", fontWeight: 900 }}>
                        ⭐ {loc.rating.toFixed(1)}
                      </span>
                      <span style={{ color: "#777", fontSize: "10px", fontWeight: 600 }}>
                        ({loc.reviews} đánh giá)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Nút Phụ Mở Tab Mới (Tùy chọn) */}
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    onClick={() => showRoute(loc)}
                    style={{
                      flex: 1, background: "#00F260", color: "#000", border: "none",
                      padding: "10px 10px", borderRadius: "10px", fontWeight: 900,
                      fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px",
                      cursor: "pointer", display: "flex", alignItems: "center",
                      justifyContent: "center", gap: "6px"
                    }}
                  >
                    🧭 Chỉ đường tới đây
                  </button>
                  <button
                    onClick={() => openGoogleDirections(loc)}
                    style={{
                      background: "#fff", color: "#000", border: "1px solid #ccc",
                      padding: "10px", borderRadius: "10px", fontWeight: 900,
                      fontSize: "12px", cursor: "pointer", display: "flex", alignItems: "center",
                      justifyContent: "center", gap: "4px",
                    }}
                    title="Mở tab Google Maps gốc"
                  >
                    🗺️
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Chấm tròn báo cáo Vị trí người dùng */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon} zIndexOffset={999}>
            <Popup>
              <div style={{
                background: "#000", padding: "10px 14px", borderRadius: "10px",
                border: "1px solid rgba(0,242,234,0.3)", fontFamily: "'Montserrat', sans-serif",
                color: "#00F2EA"
              }}>
                <p style={{ fontWeight: 900, fontSize: "12px", margin: 0, textTransform: "uppercase" }}>
                  📍 Vị trí hiện tại của bạn
                </p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Vẽ Polyline đường đi dọc Lộ Trình User -> Shop */}
        {selectedRoute && (
          <Polyline
            positions={selectedRoute.coords || [selectedRoute.from, selectedRoute.to]}
            pathOptions={{
              color: "#3b82f6", // Màu xanh dương giống Google Maps directions
              weight: selectedRoute.isLoading ? 4 : 7,
              dashArray: selectedRoute.isLoading ? "10, 8" : undefined,
              opacity: 0.9,
            }}
          />
        )}
      </MapContainer>

      {/* CSS style đè cho Leaflet để Popup và Marker đẹp hơn, không bị lỗi viền */}
      <style>{`
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
          padding: 0 !important;
          border-radius: 16px !important;
        }
        .leaflet-popup-content { margin: 0 !important; }
        .leaflet-popup-tip-container { display: none !important; }
        .custom-map-marker, .user-location-marker {
          background: transparent !important;
          border: none !important;
        }
        @keyframes pulse-user {
          0%, 100% { box-shadow: 0 0 15px rgba(0,242,234,0.8), 0 0 30px rgba(0,242,234,0.4); }
          50% { box-shadow: 0 0 25px rgba(0,242,234,1), 0 0 50px rgba(0,242,234,0.6); }
        }
      `}</style>
    </div>
  );
};

export default MapModal;

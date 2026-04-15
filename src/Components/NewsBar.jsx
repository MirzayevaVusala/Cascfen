import { useState, useRef, useEffect } from "react";
import "./NewsbarStyle.css";

const newsItems = [
  { id: 1,  title: '"Ortaq miras: Dünən, bu gün və sabah" – VİDEO',                            date: "25 Avq 2025", badge: "VİDEO" },
  { id: 2,  title: "CASCFEN-nin layihə çərçivəsində ikinci verilişi – VİDEO",                  date: "30 İyul 2025", badge: "VİDEO" },
  { id: 3,  title: "Biz dəyərlərimizlə bir-birimizə bağlıyıq",                                 date: "16 İyul 2025", badge: null },
  { id: 4,  title: '"Resurs" Analitik İnformasiya Mərkəzi İB Salyan rayonunda tədbir keçirib', date: "24 İyun 2025", badge: null },
  { id: 5,  title: 'Şirvanda "Qloballaşma dövründə milli dəyərlər" mövzusunda dəyirmi masa',   date: "18 İyun 2025", badge: null },
  { id: 6,  title: "CASCFEN-nin layihə çərçivəsində ilk verilişi hazırlanıb -VİDEO",           date: "21 İyun 2025", badge: "VİDEO" },
  { id: 7,  title: "Türk dünyası tələbələri üçün müsabiqə",                                     date: "7 May 2025",  badge: "YENİ" },
  { id: 8,  title: "Türk dünyası ilə bağlı daha bir layihə",                                    date: "2 May 2025",  badge: null },
  { id: 9,  title: "Ədəbiyyat Türk dünyasının ortaq nəfəsidir",                                 date: "28 Apr 2025", badge: null },
  { id: 10, title: "COP29 QHT Koalisiyası fəaliyyətini yeni formada davam etdirəcək",           date: "15 Apr 2025", badge: null },
  { id: 11, title: "İzmirdə azərbaycanlılara qarşı törədilmiş soydurımlardan bəhs edilib",      date: "10 Apr 2025", badge: null },
  { id: 12, title: "Mədəni irsimizin qorunması üzrə beynəlxalq konfrans keçirildi",             date: "5 Apr 2025",  badge: null },
  { id: 13, title: "Regional gənclər forumu 2025 proqramı açıqlandı",                           date: "28 Mar 2025", badge: "YENİ" },
  { id: 14, title: "Azərbaycan QHT-ləri beynəlxalq platformada təmsil olunub",                  date: "20 Mar 2025", badge: null },
];

export default function NewsBar() {
  const [scrollPct, setScrollPct] = useState(0);
  const listRef = useRef(null);

  const onScroll = () => {
    const el = listRef.current;
    if (!el) return;
    const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
    setScrollPct(Math.min(1, Math.max(0, pct)));
  };

  // Auto-scroll
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    let raf;
    let paused = false;

    const step = () => {
      if (!paused && el.scrollTop < el.scrollHeight - el.clientHeight) {
        el.scrollTop += 0.4;
      } else if (!paused) {
        el.scrollTop = 0;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    const pause  = () => { paused = true; };
    const resume = () => { paused = false; };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <aside className="xeber-widget">
      {/* Header */}
      <div className="xeber-header">
        <div className="xeber-header-glow" />
        <span className="xeber-live-dot" />
        <span className="xeber-header-title">XƏBƏR LENTİ</span>
        <div className="xeber-header-shine" />
      </div>

      {/* Custom scrollbar */}
      <div className="xeber-scrollbar-track">
        <div
          className="xeber-scrollbar-thumb"
          style={{ top: `${scrollPct * 80}%` }}
        />
      </div>

      {/* List */}
      <div className="xeber-list" ref={listRef} onScroll={onScroll}>
        {newsItems.map((item) => (
          <a key={item.id} href="#" className="xeber-item">
            <div className="xeber-item-accent" />
            <div className="xeber-item-content">
              <div className="xeber-item-top">
                {item.badge && (
                  <span className="xeber-badge">{item.badge}</span>
                )}
                <p className="xeber-item-title">{item.title}</p>
              </div>
              <div className="xeber-item-meta">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4, flexShrink: 0, color: "rgba(255,255,255,0.3)" }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span className="xeber-item-date">{item.date}</span>
              </div>
            </div>
            <svg
              className="xeber-arrow"
              width="12" height="12"
              viewBox="0 0 24 24" fill="none"
              stroke="#FF6B35" strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="xeber-item-divider" />
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="xeber-footer">
        <a href="#" className="xeber-footer-link">
          Bütün xəbərlər
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 6 }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
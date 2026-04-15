import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { qhtNews } from "../Data/News"; 
import "./MustReadStyle.css";

const tagColorMap = {
  AZƏRBAYCAN: "#1565C0",
  "QHT SEKTORU": "#FF6B35",
  "TÜRK DÜNYASI": "#0D4F7C",
  XƏBƏRLƏR: "#FF6B35",
  BEYNƏLXALQ: "#1A6B9A",
  MƏQALƏLƏR: "#6B4C9A",
  LAYİHƏLƏR: "#FF6B35",
  TƏHSİL: "#2E7D32",
};

// YENİ: Şəkil yollarını GitHub Pages üçün təhlükəsiz edən funksiya
const getSafeImagePath = (path) => {
  if (!path) return "https://via.placeholder.com/600";
  // Başdakı "/" işarəsini silib nöqtə əlavə edirik
  return `./${path.replace(/^\//, '')}`;
};

export default function MustRead() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const latestQHT = qhtNews.slice(0, 4);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  return (
    <section className="mustread-section">
      <div className="mustread-noise" />
      <div className="mustread-glow-left" />
      <div className="mustread-glow-right" />

      <div className="mustread-container">
        <div className="mustread-header">
          <div className="mustread-title-wrap">
            <div className="mustread-fire-icon">🔥</div>
            <div>
              <h2 className="mustread-title">QAÇIRMAMALI</h2>
              <p className="mustread-subtitle">QHT Sektoru - Ən Son</p>
            </div>
          </div>
          <div className="mustread-scroll-btns">
            <button className="mustread-scroll-btn" onClick={() => scroll(-1)}>‹</button>
            <button className="mustread-scroll-btn" onClick={() => scroll(1)}>›</button>
          </div>
        </div>

        <div className="mustread-accent-line">
          <div className="mustread-accent-line-fill" />
        </div>

        <div className="mustread-track" ref={scrollRef}>
          {latestQHT.map((a, i) => (
            <article
              key={a.id}
              className="mustread-card"
              onClick={() => {
                navigate(`/qht-sektoru`);
                window.scrollTo(0, 0);
              }}
            >
              <div className="mustread-img-wrap">
                {/* YENİLİK: getSafeImagePath tətbiq edildi */}
                <img 
                  src={getSafeImagePath(a.image)} 
                  alt={a.title} 
                  className="mustread-img" 
                />
                <div className="mustread-img-overlay" />
                {(a.badge || a.title.includes("VİDEO")) && (
                  <span className="mustread-badge">VİDEO</span>
                )}
                <span className="mustread-num">0{i + 1}</span>
                <div className="mustread-tags-overlay">
                  {(a.tags || ["QHT SEKTORU"]).slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="mustread-tag"
                      style={{ background: tagColorMap[tag.toUpperCase()] || "#FF6B35" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mustread-card-body">
                <h3 className="mustread-card-title">{a.title}</h3>
                <div className="mustread-card-meta">
                  <span className="mustread-date">📅 {a.date}</span>
                  <span className="mustread-source">{a.author || "CASCFEN"}</span>
                </div>
                <div className="mustread-read-link">
                  Ətraflı oxu →
                </div>
              </div>
              <div className="mustread-bottom-line" />
            </article>
          ))}
        </div>

        <div className="mustread-fade-left" />
        <div className="mustread-fade-right" />
      </div>
    </section>
  );
}
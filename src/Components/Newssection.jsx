import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { azerbaycanNews } from "../Data/News";
import { azerbaycanLocalNews } from "../Data/Azarbaijan";
import "./NewssectionStyle.css";

const getSafeImagePath = (path) => {
  if (!path) return "https://via.placeholder.com/800";
  return `./${path.replace(/^\//, "")}`;
};

const latestArticles = azerbaycanNews.slice(0, 4);

const tagColors = {
  "QHT SEKTORU": "#FF6B35",
  "XƏBƏRLƏR":    "#FF6B35",
  "AZƏRBAYCAN":  "#1A6B9A",
  "CƏMİYYƏT":   "#0D4F7C",
  "TƏHSİL":     "#FF6B35",
};

// azerbaycanLocalNews-dan ilk 15 xəbərin title və date-i götürülür
const newsItems = azerbaycanLocalNews.slice(0, 15).map((item) => ({
  id:    item.id,
  title: item.title,
  date:  item.date,
  badge: item.tags?.includes("VİDEO") ? "VİDEO"
       : item.tags?.includes("YENİ")  ? "YENİ"
       : null,
}));

/* ── Newest (sol panel) ── */
function Newest() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  if (!latestArticles || latestArticles.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + latestArticles.length) % latestArticles.length);
  const next = () => setCurrent((c) => (c + 1) % latestArticles.length);
  const featured = latestArticles[current];

  return (
    <div className="ns-newest">
      {/* Header */}
      <div className="ns-newest-header">
        <div className="ns-newest-title-group">
          <span className="ns-accent-bar" />
          <h2 className="ns-newest-title">ƏN YENİLƏR</h2>
        </div>
        <div className="ns-nav-group">
          <button className="ns-nav-btn" onClick={prev}>‹</button>
          <button className="ns-nav-btn" onClick={next}>›</button>
        </div>
      </div>

      {/* Featured card */}
      <div
        className="ns-featured-card"
        onClick={() => navigate("/guney-qafqaz/azerbaycan")}
        title="Xəbəri oxumaq üçün klikləyin"
      >
        <div className="ns-img-wrap">
          <img
            key={featured.id}
            src={getSafeImagePath(featured.image)}
            alt={featured.title}
            className="ns-featured-img"
          />
          <div className="ns-img-overlay" />
          <div className="ns-img-content">
            <div className="ns-tag-row">
              {featured.tags &&
                featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="ns-tag"
                    style={{ background: tagColors[tag.toUpperCase()] || "#FF6B35" }}
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <h3 className="ns-featured-title">{featured.title}</h3>
            <div className="ns-meta-row">
              <span className="ns-date">📅 {featured.date}</span>
              <span className="ns-source">{featured.author || featured.source || "CASCFEN"}</span>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="ns-dots">
          {latestArticles.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`ns-dot${i === current ? " active" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Thumb strip */}
      <div className="ns-thumb-strip">
        {latestArticles.map((a, i) => (
          <div
            key={a.id}
            onClick={() => setCurrent(i)}
            className={`ns-thumb${i === current ? " active" : ""}`}
          >
            <img src={getSafeImagePath(a.image)} alt={a.title} className="ns-thumb-img" />
            <div className="ns-thumb-info">
              <p className="ns-thumb-title">{a.title}</p>
              <span className="ns-thumb-date">{a.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── NewsBar (sağ panel) ── */
function NewsBar() {
  const [scrollPct, setScrollPct] = useState(0);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const onScroll = () => {
    const el = listRef.current;
    if (!el) return;
    const pct = el.scrollTop / (el.scrollHeight - el.clientHeight);
    setScrollPct(Math.min(1, Math.max(0, pct)));
  };

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    let raf;
    let paused = false;
    const step = () => {
      if (!paused) {
        if (el.scrollTop < el.scrollHeight - el.clientHeight) {
          el.scrollTop += 0.4;
        } else {
          el.scrollTop = 0;
        }
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
    <div className="ns-newsbar">
      <div className="ns-bar-header">
        <span className="ns-live-dot" />
        <span className="ns-bar-title">XƏBƏR LENTİ</span>
      </div>

      <div className="ns-scrollbar-track">
        <div className="ns-scrollbar-thumb" style={{ top: `${scrollPct * 80}%` }} />
      </div>

      <div className="ns-bar-list" ref={listRef} onScroll={onScroll}>
        {newsItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className="ns-bar-item"
            onClick={(e) => { e.preventDefault(); navigate("/guney-qafqaz/azerbaycan"); }}
          >
            <div className="ns-bar-item-accent" />
            <div className="ns-bar-item-body">
              <div className="ns-bar-item-top">
                {item.badge && <span className="ns-bar-badge">{item.badge}</span>}
                <p className="ns-bar-item-title">{item.title}</p>
              </div>
              <div className="ns-bar-item-meta">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4, color: "rgba(255,255,255,0.3)" }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span className="ns-bar-date">{item.date}</span>
              </div>
            </div>
            <svg className="ns-bar-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="ns-bar-divider" />
          </a>
        ))}
      </div>

      <div className="ns-bar-footer">
        <a
          href="#"
          className="ns-bar-footer-link"
          onClick={(e) => { e.preventDefault(); navigate("/guney-qafqaz/azerbaycan"); }}
        >
          Bütün xəbərlər
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 6 }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ── Ana wrapper: ikisi yan-yana ── */
export default function NewsSection() {
  return (
    <div className="ns-wrapper">
      <div className="ns-left">
        <Newest />
      </div>
      <div className="ns-right">
        <NewsBar />
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { azerbaycanNews } from "../Data/News"; 
import "./NewestStyles.css";

// Şəkil yollarını GitHub Pages üçün təhlükəsiz edən funksiya
const getSafeImagePath = (path) => {
  if (!path) return "https://via.placeholder.com/800";
  return `./${path.replace(/^\//, '')}`;
};

const latestArticles = azerbaycanNews.slice(0, 4);

const tagColors = {
  "QHT SEKTORU": "#FF6B35",
  "XƏBƏRLƏR": "#FF6B35",
  "AZƏRBAYCAN": "#1A6B9A",
  "CƏMİYYƏT": "#0D4F7C",
  "TƏHSİL": "#FF6B35",
};

export default function NewestSection() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  if (!latestArticles || latestArticles.length === 0) {
    return null; 
  }

  const prev = () => setCurrent((c) => (c - 1 + latestArticles.length) % latestArticles.length);
  const next = () => setCurrent((c) => (c + 1) % latestArticles.length);

  const featured = latestArticles[current];

  const handleArticleClick = (id) => {
    navigate(`/guney-qafqaz/azerbaycan`);
  };

  return (
    <section className="newest-section">
      <div className="newest-bg-orb1" />
      <div className="newest-bg-orb2" />

      <div className="newest-container">
        <div className="newest-header">
          <div className="newest-title-group">
            <span className="newest-accent-bar" />
            <h2 className="newest-section-title">ƏN YENİLƏR</h2>
          </div>
          <div className="newest-nav-group">
            <button className="newest-nav-btn" onClick={prev}>‹</button>
            <button className="newest-nav-btn" onClick={next}>›</button>
          </div>
        </div>

        <div 
          className="newest-featured-card" 
          onClick={() => handleArticleClick(featured.id)}
          style={{ cursor: "pointer" }}
          title="Xəbəri oxumaq üçün klikləyin"
        >
          <div className="newest-image-wrapper">
            <img
              /* YENİLİK: getSafeImagePath tətbiq edildi */
              src={getSafeImagePath(featured.image)} 
              alt={featured.title}
              className="newest-featured-image"
              key={featured.id}
            />
            <div className="newest-image-overlay" />
            <div className="newest-image-content">
              <div className="newest-tag-row">
                {featured.tags && featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="newest-tag"
                    style={{ background: tagColors[tag.toUpperCase()] || "#FF6B35" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="newest-featured-title">{featured.title}</h3>
              <div className="newest-meta-row">
                <span className="newest-date-text">📅 {featured.date}</span>
                <span className="newest-source-tag">{featured.author || featured.source || "CASCFEN"}</span>
              </div>
            </div>
          </div>

          <div className="newest-indicators">
            {latestArticles.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`newest-dot${i === current ? " active" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="newest-thumb-strip">
          {latestArticles.map((a, i) => (
            <div
              key={a.id}
              onClick={() => setCurrent(i)}
              className={`newest-thumb-card${i === current ? " active" : ""}`}
            >
              {/* YENİLİK: getSafeImagePath tətbiq edildi */}
              <img src={getSafeImagePath(a.image)} alt={a.title} className="newest-thumb-image" />
              <div className="newest-thumb-info">
                <p className="newest-thumb-title">{a.title}</p>
                <span className="newest-thumb-date">{a.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
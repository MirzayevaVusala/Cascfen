import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Səhifəyə keçid üçün
import { azerbaycanNews } from "../Data/News"; // Data faylınızın yolunu öz proyektinizə uyğun yoxlayın
import "./NewestStyles.css";

// Azərbaycan xəbərlərindən ilk 4-nü alırıq
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

  // Əgər ümumiyyətlə xəbər yoxdursa, bölməni boş qaytarırıq (və ya placeholder göstərə bilərsiniz)
  if (!latestArticles || latestArticles.length === 0) {
    return null; 
  }

  const prev = () => setCurrent((c) => (c - 1 + latestArticles.length) % latestArticles.length);
  const next = () => setCurrent((c) => (c + 1) % latestArticles.length);

  const featured = latestArticles[current];

  // Böyük xəbərə kliklədikdə işləyəcək funksiya
  const handleArticleClick = (id) => {
    // Proyektinizin URL strukturuna uyğunlaşdırın. 
    // Məsələn, xəbər səhifələriniz "/xeber/123" şəklindədirsə:
    navigate(`/guney-qafqaz/azerbaycan`);
  };

  return (
    <section className="newest-section">
      <div className="newest-bg-orb1" />
      <div className="newest-bg-orb2" />

      <div className="newest-container">
        {/* Header */}
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

        {/* Featured card (Əsas Kart) - Kliklədikdə səhifəyə yönləndirir */}
        <div 
          className="newest-featured-card" 
          onClick={() => handleArticleClick(featured.id)}
          style={{ cursor: "pointer" }} // İstifadəçiyə kliklənə bilən olduğunu göstərir
          title="Xəbəri oxumaq üçün klikləyin"
        >
          <div className="newest-image-wrapper">
            <img
              src={featured.image || "https://via.placeholder.com/800"} // Şəkil yoxdursa placeholder
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
                    // Tag rəngləri üçün böyük/kiçik hərf fərqini aradan qaldırırıq
                    style={{ background: tagColors[tag.toUpperCase()] || "#FF6B35" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="newest-featured-title">{featured.title}</h3>
              <div className="newest-meta-row">
                <span className="newest-date-text">📅 {featured.date}</span>
                {/* Datada "source" əvəzinə "author" varsa, onu göstəririk */}
                <span className="newest-source-tag">{featured.author || featured.source || "CASCFEN"}</span>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="newest-indicators">
            {latestArticles.map((_, i) => (
              <button
                key={i}
                // Stop propagation: Nöqtəyə basanda xəbərə girməsin, sadəcə slaydı dəyişsin
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`newest-dot${i === current ? " active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip (Kiçik şəkillər) - Kliklədikdə slaydı dəyişir */}
        <div className="newest-thumb-strip">
          {latestArticles.map((a, i) => (
            <div
              key={a.id}
              onClick={() => setCurrent(i)}
              className={`newest-thumb-card${i === current ? " active" : ""}`}
            >
              <img src={a.image || "https://via.placeholder.com/150"} alt={a.title} className="newest-thumb-image" />
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
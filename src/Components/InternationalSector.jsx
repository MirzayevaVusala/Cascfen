import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Real beynəlxalq xəbər datasını import edirik
import { beynelxalqNews } from "../Data/News"; 
import "./InternationalSectorStyles.css";

const ITEMS_PER_PAGE = 6;

// YENİ: Şəkil yollarını GitHub Pages üçün təhlükəsiz edən funksiya
const getSafeImagePath = (path) => {
  if (!path) return "https://via.placeholder.com/600";
  // Başdakı "/" işarəsini silib nöqtə əlavə edirik (./Photos/...)
  return `./${path.replace(/^\//, '')}`;
};

function getPaginationRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const left = Math.max(current - 1, 1);
  const right = Math.min(current + 1, total);
  const showLeft = left > 2;
  const showRight = right < total - 1;
  if (!showLeft && showRight) return [...Array.from({ length: 4 }, (_, i) => i + 1), "...", total];
  if (showLeft && !showRight) return [1, "...", ...Array.from({ length: 4 }, (_, i) => total - 3 + i)];
  return [1, "...", left, current, right, "...", total].filter((v, i, a) => a.indexOf(v) === i);
}

export default function InternationalSector() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Datadakı beynəlxalq xəbərləri götürürük
  const totalArticles = beynelxalqNews;
  const totalPages = Math.ceil(totalArticles.length / ITEMS_PER_PAGE);
  
  const paginated = totalArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  const paginationRange = getPaginationRange(currentPage, totalPages);

  const handlePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Səhifə dəyişəndə bölmənin başına sürüşdürürük
    const section = document.querySelector('.qht-section');
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleCardClick = (id) => {
    navigate(`/beynelxalq`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="qht-section">
      <div className="qht-container">

        {/* ── Header ── */}
        <div className="qht-header">
          <h2 className="qht-title">
            BEYNƏLXALQ
            <span className="qht-title-dot">•</span>
          </h2>
          <div className="qht-title-line" />
        </div>

        {/* ── Grid ── */}
        <div className="qht-grid">
          {paginated.map((article, i) => (
            <article
              key={article.id}
              className="qht-card"
              style={{ 
                animationDelay: `${i * 60}ms`,
                cursor: 'pointer' 
              }}
              onClick={() => handleCardClick(article.id)}
            >
              <div className="qht-card-img-wrap">
                {/* YENİLİK: getSafeImagePath tətbiq edildi */}
                <img 
                  src={getSafeImagePath(article.image)} 
                  alt={article.title} 
                  className="qht-card-img" 
                />
                <div className="qht-card-img-overlay" />
                
                {/* Datada "VİDEO" teqi varsa və ya başlıqda "VİDEO" sözü keçirsə badge göstər */}
                {(article.badge || (article.title && article.title.includes("VİDEO"))) && (
                  <span className="qht-card-badge">VİDEO</span>
                )}
              </div>
              <div className="qht-card-body">
                <h3 className="qht-card-title">{article.title}</h3>
                <p className="qht-card-excerpt">
                  {article.description 
                    ? article.description.substring(0, 110) + "..." 
                    : article.excerpt}
                </p>
                <div className="qht-card-meta">
                  <span className="qht-card-date">📅 {article.date}</span>
                  <span className="qht-card-source">{article.author || "CASCFEN"}</span>
                </div>
              </div>
              <div className="qht-card-hover-bar" />
            </article>
          ))}
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="qht-pagination">
            <button
              className={`qht-pg-btn qht-pg-arrow${currentPage === 1 ? " disabled" : ""}`}
              onClick={() => handlePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Əvvəlki
            </button>

            {paginationRange.map((page, i) =>
              page === "..." ? (
                <span key={`dots-${i}`} className="qht-pg-dots">...</span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePage(page)}
                  className={`qht-pg-btn${currentPage === page ? " active" : ""}`}
                >
                  {page}
                </button>
              )
            )}

            <button
              className={`qht-pg-btn qht-pg-arrow${currentPage === totalPages ? " disabled" : ""}`}
              onClick={() => handlePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Növbəti →
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
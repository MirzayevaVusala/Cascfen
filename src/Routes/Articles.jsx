import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Real məqalə datasını import edirik
import { meqalelerNews } from "../Data/News"; 
import "../Components/ArticlesStyles.css";

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

export default function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Datadakı bütün məqalələri götürürük
  const totalArticles = meqalelerNews;
  const totalPages = Math.ceil(totalArticles.length / ITEMS_PER_PAGE);
  
  // Səhifələmə (Pagination) üçün datanı parçalayırıq
  const paginated = totalArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  const paginationRange = getPaginationRange(currentPage, totalPages);

  const handlePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Səhifə dəyişəndə bölmənin başına sürüşdürürük
    const section = document.querySelector('.mq-section');
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleCardClick = (id) => {
    navigate(`/meqaleler`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="mq-section">
      <div className="mq-container">

        {/* ── Header ── */}
        <div className="mq-header">
          <h2 className="mq-title">
            MƏQALƏLƏR
            <span className="mq-title-dot">•</span>
          </h2>
          <div className="mq-title-line" />
        </div>

        {/* ── Grid ── */}
        <div className="mq-grid">
          {paginated.map((article) => (
            <article 
              key={article.id} 
              className="mq-card" 
              onClick={() => handleCardClick(article.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="mq-card-img-wrap">
                {/* YENİLİK: getSafeImagePath tətbiq edildi */}
                <img 
                  src={getSafeImagePath(article.image)} 
                  alt={article.title} 
                  className="mq-card-img" 
                />
                <div className="mq-card-img-overlay" />
              </div>
              <div className="mq-card-body">
                <h3 className="mq-card-title">{article.title}</h3>
                <p className="mq-card-excerpt">
                  {article.description ? article.description.substring(0, 120) + "..." : article.excerpt}
                </p>
                <div className="mq-card-meta">
                  <span className="mq-card-date">📅 {article.date}</span>
                  <span className="mq-card-source">{article.author || article.source || "CASCFEN"}</span>
                </div>
              </div>
              <div className="mq-card-hover-bar" />
            </article>
          ))}
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="mq-pagination">
            <button
              className={`mq-pg-btn mq-pg-arrow${currentPage === 1 ? " disabled" : ""}`}
              onClick={() => handlePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Əvvəlki
            </button>

            {paginationRange.map((page, i) =>
              page === "..." ? (
                <span key={`dots-${i}`} className="mq-pg-dots">...</span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePage(page)}
                  className={`mq-pg-btn${currentPage === page ? " active" : ""}`}
                >
                  {page}
                </button>
              )
            )}

            <button
              className={`mq-pg-btn mq-pg-arrow${currentPage === totalPages ? " disabled" : ""}`}
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
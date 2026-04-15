import { useState } from "react";
import "./QhtsectorsStyles.css";

const articles = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  image: [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  ][i % 6],
  title: [
    '"Ortaq miras: Dünən, bu gün və sabah" – VİDEO',
    "CASCFEN-nin layihə çərçivəsində ikinci verilişi – VİDEO",
    "Biz dəyərlərimizlə bir-birimizə bağlıyıq",
    '"Resurs" Analitik İnformasiya Mərkəzi İB Salyan rayonunda tədbir keçirib',
    'Şirvanda "Qloballaşma dövründə milli dəyərlər" mövzusunda dəyirmi masa',
    "CASCFEN-nin layihə çərçivəsində ilk verilişi hazırlanıb -VİDEO",
  ][i % 6],
  excerpt: [
    "CASCFEN-nin layihə çərçivəsində üçüncü-sonucu olaraq hazırlanan...",
    'Budəfəki verilişin mövzusu "Ortaq mirasımızın...',
    'Şimali Kiprdə keçirilən "Bizim ailəmiz Türk...',
    "Salyan rayonunda keçirilən tədbirdə QHT nümayəndələri...",
    "Dəyirmi masada milli dəyərlərin qorunması məsələləri...",
    'İlk verilişin mövzusu "Türk dünyasının ortaq...',
  ][i % 6],
  date: `${(i % 28) + 1} İyun 2025`,
  source: "CASCFEN",
  badge: i % 3 === 0 ? "VİDEO" : null,
}));

const ITEMS_PER_PAGE = 6;

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

export default function QhtSectors() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const paginated = articles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const paginationRange = getPaginationRange(currentPage, totalPages);

  const handlePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="qht-section">
      <div className="qht-container">

        {/* ── Header ── */}
        <div className="qht-header">
          <h2 className="qht-title">
            QHT SEKTORU
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
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="qht-card-img-wrap">
                <img src={article.image} alt={article.title} className="qht-card-img" />
                <div className="qht-card-img-overlay" />
                {article.badge && (
                  <span className="qht-card-badge">{article.badge}</span>
                )}
              </div>
              <div className="qht-card-body">
                <h3 className="qht-card-title">{article.title}</h3>
                <p className="qht-card-excerpt">{article.excerpt}</p>
                <div className="qht-card-meta">
                  <span className="qht-card-date">{article.date}</span>
                  <span className="qht-card-source">{article.source}</span>
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
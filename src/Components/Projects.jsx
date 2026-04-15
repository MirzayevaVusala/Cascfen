import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// Real datanı News faylından import edirik
import { layihelerNews } from "../Data/News"; 
import "./ProjectStyles.css";

const allTags = ["Hamısı", "LAYİHƏLƏR", "XƏBƏRLƏR", "TÜRK DÜNYASI", "QHT SEKTORU", "TƏHSİL"];

const tagColorMap = {
  LAYİHƏLƏR: "#FF6B35",
  "QHT SEKTORU": "#1A6B9A",
  "TÜRK DÜNYASI": "#0D4F7C",
  XƏBƏRLƏR: "#FF6B35",
  AZƏRBAYCAN: "#1A6B9A",
  TÜRKİYƏ: "#C0392B",
  TƏHSİL: "#6B4C9A",
};

const ITEMS_PER_PAGE = 6;
const SIBLING_COUNT = 1;

// Pagination məntiqi (dəyişməz qalır)
function getPaginationRange(currentPage, totalPages) {
  const totalButtons = SIBLING_COUNT * 2 + 5;
  if (totalPages <= totalButtons) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const leftSibling = Math.max(currentPage - SIBLING_COUNT, 1);
  const rightSibling = Math.min(currentPage + SIBLING_COUNT, totalPages);
  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPages - 1;

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from({ length: 3 + 2 * SIBLING_COUNT }, (_, i) => i + 1);
    return [...leftRange, "...", totalPages];
  }
  if (showLeftDots && !showRightDots) {
    const rightRange = Array.from({ length: 3 + 2 * SIBLING_COUNT }, (_, i) => totalPages - (3 + 2 * SIBLING_COUNT) + 1 + i);
    return [1, "...", ...rightRange];
  }
  const middleRange = Array.from({ length: rightSibling - leftSibling + 1 }, (_, i) => leftSibling + i);
  return [1, "...", ...middleRange, "...", totalPages];
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Hamısı");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Filterləmə məntiqi
  const filtered = useMemo(() => {
    if (activeFilter === "Hamısı") return layihelerNews;
    return layihelerNews.filter((p) => 
      p.tags && p.tags.some(tag => tag.toUpperCase() === activeFilter.toUpperCase())
    );
  }, [activeFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilter = (tag) => {
    setActiveFilter(tag);
    setCurrentPage(1);
  };

  const handlePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Səhifə dəyişəndə yuxarı sürüşdür
    const section = document.querySelector('.projects-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const paginationRange = getPaginationRange(currentPage, totalPages);

  return (
    <section className="projects-section">
      <div className="projects-bg-grid" />
      <div className="projects-bg-glow" />

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <div className="projects-title-group">
            <div className="projects-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <div>
              <p className="projects-year-label">2026</p>
              <h2 className="projects-section-title">LAYİHƏLƏR</h2>
            </div>
          </div>
          <div className="projects-count-badge">
            <span className="projects-count-num">{filtered.length}</span>
            <span className="projects-count-label">material</span>
          </div>
        </div>

        {/* Filter bar */}
        <div className="projects-filter-bar">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilter(tag)}
              className={`projects-filter-btn${activeFilter === tag ? " active" : ""}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-divider" />

        {/* Grid */}
        <div className="projects-grid">
          {paginated.map((project) => (
            <div 
              key={project.id} 
              className="projects-card"
              onClick={() => navigate(`/meqaleler/layiheler`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="projects-card-image-wrapper">
                <img src={project.image || "https://via.placeholder.com/600"} alt={project.title} className="projects-card-image" />
                <div className="projects-card-overlay" />
                
                {/* Əgər datada badge yoxdursa, 'YENİ' və ya boş göstər */}
                {project.date.includes("2026") && (
                  <span className="projects-badge-chip">YENİ</span>
                )}

                <div className="projects-card-tags-overlay">
                  {project.tags && project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="projects-card-tag"
                      style={{ background: tagColorMap[tag.toUpperCase()] || "#FF6B35" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="projects-card-body">
                <h3 className="projects-card-title">{project.title}</h3>
                <div className="projects-card-meta">
                  <span className="projects-card-date">{project.date}</span>
                  <span className="projects-card-source">{project.author || "CASCFEN"}</span>
                </div>
                <div className="projects-read-more">Ətraflı oxu →</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="projects-pagination">
            <button
              className={`pg-btn pg-arrow${currentPage === 1 ? " disabled" : ""}`}
              onClick={() => handlePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ‹
            </button>

            {paginationRange.map((page, i) =>
              page === "..." ? (
                <span key={`dots-${i}`} className="pg-dots">...</span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePage(page)}
                  className={`pg-btn${currentPage === page ? " active" : ""}`}
                >
                  {page}
                </button>
              )
            )}

            <button
              className={`pg-btn pg-arrow${currentPage === totalPages ? " disabled" : ""}`}
              onClick={() => handlePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
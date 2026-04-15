import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './RibbonStyles.css';

const menuData = [
  { title: "Ana Səhifə", url: "/" },
  {
    title: "Orta Asiya", url: "/orta-asiya",
    dropdown: [
      { title: "Qazaxıstan", url: "/orta-asiya/qazaxistan" },
      { title: "Türkmənistan", url: "/orta-asiya/turkmenistan" },
      { title: "Qırğızıstan", url: "/orta-asiya/qirgisistan" },
      { title: "Özbəkistan", url: "/orta-asiya/ozbakistan" },
      { title: "Tacikistan", url: "/orta-asiya/tacikistan" },
    ]
  },
  {
    title: "Güney Qafqaz", url: "/guney-qafqaz",
    dropdown: [
      { title: "Azərbaycan", url: "/guney-qafqaz/azerbaycan" },
      { title: "Gürcüstan", url: "/guney-qafqaz/gurcustan" },
      { title: "Ermənistan", url: "/guney-qafqaz/ermenistan" },
    ]
  },
  { title: "Xəbərlər", url: "/xeberler" },
  {
    title: "Qonşular", url: "/qonsular",
    dropdown: [
      { title: "Türkiyə", url: "/qonsular/turkiye" },
      { title: "İran", url: "/qonsular/iran" },
      { title: "Kuzey Qafqaz", url: "/qonsular/kuzeyqafqaz" },
    ]
  },
  {
    title: "Məqalələr", url: "/meqaleler",
    dropdown: [
      { title: "Layihələr", url: "/meqaleler/layiheler" },
      { title: "Bizim Köşə", url: "/meqaleler/bizimkose" },
    ]
  },
  {
    title: "Beynəlxalq", url: "/beynelxalq",
    dropdown: [
      { title: "Türk Dünyası", url: "/beynelxalq/turkdunyasi" },
    ]
  },
  { title: "QHT Sektoru", url: "/qht-sektoru" },
];

const Ribbon = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  
  const navigate = useNavigate();

  const performSearch = () => {
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchOpen(false);
      setSearchValue("");
      setMobileOpen(false);
    }
  };

  return (
    <div className="ribbon">
      {/* ── Desktop Menu ── */}
      <ul className="ribbon-menu">
        {menuData.map((item, index) => (
          <li
            key={index}
            className="ribbon-item"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <NavLink 
              to={item.url} 
              className={({ isActive }) => isActive ? "ribbon-link active" : "ribbon-link"}
            >
              {item.title}
              {item.dropdown && <span className="arrow">▾</span>}
            </NavLink>

            {item.dropdown && openIndex === index && (
              <ul className="dropdown">
                {item.dropdown.map((sub, si) => (
                  <li key={si}>
                    <NavLink to={sub.url} className="dropdown-link">{sub.title}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* ── Search (Desktop) ── */}
      <div className={`ribbon-search ${searchOpen ? 'open' : ''}`}>
        {searchOpen && (
          <input
            type="text"
            placeholder="Axtar..."
            autoFocus
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && performSearch()}
          />
        )}
        <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Axtar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
      </div>

      {/* ── Mobile Hamburger ── */}
      <button 
        className={`ribbon-hamburger ${mobileOpen ? 'open' : ''}`} 
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span /><span /><span />
      </button>

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && (
        <div className="ribbon-mobile">
          <div className="mobile-search-box">
             <input 
               type="text" 
               placeholder="Axtar..." 
               value={searchValue} 
               onChange={(e) => setSearchValue(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && performSearch()}
             />
             <button onClick={performSearch}>Axtar</button>
          </div>

          {menuData.map((item, index) => (
            <div key={index} className="mobile-item">
              <div className="mobile-link-container">
                <NavLink 
                  to={item.url} 
                  className={({ isActive }) => isActive ? "mobile-main-link active" : "mobile-main-link"}
                  onClick={() => !item.dropdown && setMobileOpen(false)}
                >
                  {item.title}
                </NavLink>
                {item.dropdown && (
                  <span 
                    className={`mobile-arrow-btn ${mobileDropdown === index ? 'rotated' : ''}`}
                    onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                  >
                    ▾
                  </span>
                )}
              </div>

              {item.dropdown && mobileDropdown === index && (
                <div className="mobile-dropdown-content">
                  {item.dropdown.map((sub, si) => (
                    <NavLink
                      key={si}
                      to={sub.url}
                      className={({ isActive }) => isActive ? "mobile-sub-link active-sub" : "mobile-sub-link"}
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ribbon;
import React from 'react';
import './Logo.css';
// Şəkilləri import etmək ən təhlükəsiz yoldur (Webpack/Vite bunu idarə edir)
import logo1 from '../../assets/Photos/logo.png'; 
import logo2 from '../../assets/Photos/logo2.png';

const Logo = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        
        <div className="logo-frame">
          {/* Əgər public qovluğundadırsa, başdakı '/' silib yoxlayın */}
          <img 
            src="Photos/logo.png" 
            alt="Partner Agency" 
            className="img-logo" 
          />
        </div>

        <div className="logo-frame">
          <img 
            src="Photos/logo2.png" 
            alt="CASCFEN Logo" 
            className="img-logo" 
          />
        </div>

      </div>
    </header>
  );
};

export default Logo;
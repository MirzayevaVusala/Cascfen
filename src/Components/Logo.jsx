import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* Sol tərəf: Dəstəkçi Loqosu */}
        <div className="logo-frame">
          <img 
            src="/Photos/logo.png" 
            alt="Partner Agency" 
            className="img-logo" 
          />
        </div>

        {/* Sağ tərəf: Əsas CASCFEN Loqosu */}
        <div className="logo-frame">
          <img 
            src="/Photos/logo2.png" 
            alt="CASCFEN Logo" 
            className="img-logo" 
          />
        </div>

      </div>
    </header>
  );
};

export default Logo;
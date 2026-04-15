import "./FooterStyles.css"

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top accent line */}
      <div className="footer__accent-line" />

      <div className="footer__main">

        {/* Brand */}
        <div className="footer__brand">
          <h2 className="footer__logo">
            <span className="footer__logo-cas">CAS</span>
            <span className="footer__logo-cfen">CFEN</span>
          </h2>
          <p className="footer__tagline">
            Working for freedom of expression culture
          </p>
          <p className="footer__desc">
            Orta Asiya və Güney Qafqaz Söz Azadlığı Şəbəkəsi
          </p>
        </div>

        {/* Nav links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Səhifələr</h4>
          <ul className="footer__links">
            <li><a href="/">Ana Səhifə</a></li>
            <li><a href="/beyenname">Bakı Bəyannaməsi</a></li>
            <li><a href="/haqqinda">Haqqında</a></li>
            <li><a href="/kecidler">Keçidlər</a></li>
            <li><a href="/media">Media Öncülü</a></li>
            <li><a href="/nizamname">Nizamnamə</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Əlaqə</h4>
          <ul className="footer__links footer__links--contact">
            <li>
              <span className="footer__contact-label">Ünvan</span>
              AZ1129, 19/154 Şixlinski küç., Bakı
            </li>
            <li>
              <span className="footer__contact-label">Telefon</span>
              +994 (55) 263 99 44
            </li>
            <li>
              <span className="footer__contact-label">E-mail</span>
              <a href="mailto:info@cascfen.net">info@cascfen.net</a>
            </li>
            <li>
              <span className="footer__contact-label">Web</span>
              <a href="https://www.cascfen.net" target="_blank" rel="noreferrer">
                www.cascfen.net
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer__col">
          <h4 className="footer__col-title">Sosial Şəbəkələr</h4>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/people/Cascfen-%C4%B0ctimai-Birliyi/100090867137691/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" />
              <span>Instagram</span>
            </a>
            <a
              href="https://x.com/cascfen2000"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter" />
              <span>Twitter</span>
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLBGrgOIslKYG5TCBlaDrDqAq2Sd0rNDkj"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube" />
              <span>YouTube</span>
            </a>
            <a
              href="https://t.me/cascfen"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="Telegram"
            >
              <i className="fa-brands fa-telegram" />
              <span>Telegram</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} CASCFEN. Bütün hüquqlar qorunur.
        </p>
        <p className="footer__credit">
          Sayt Azərbaycan Respublikasının Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi
          Agentliyinin maliyyə yardımı ilə hazırlanmışdır.
        </p>
      </div>

    </footer>
  )
}

export default Footer
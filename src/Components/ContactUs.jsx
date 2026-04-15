import React from 'react'

import './PageStyles.css'

const Elaqe = () => (
  <>
  

    <main className="page">
      <div className="page__inner">
        <article className="page__block">
          <span className="page__lang" style={{ color: '#e87722', borderColor: '#e87722' }}>CASCFEN</span>
          <h2 className="page__heading">Nadir Ismayilov, Chairman</h2>
          <p className="page__lead">
            Central Asian and Southern Caucasian Freedom of Expression Network (CASCFEN)
          </p>

          <div className="contact__grid">
            <div className="contact__item">
              <span className="contact__label" style={{ color: '#e87722' }}>Address for Correspondence</span>
              <p className="contact__value">AZ1129, 19/154 Shikhlinski St., Baku, Azerbaijan</p>
            </div>

            <div className="contact__item">
              <span className="contact__label" style={{ color: '#e87722' }}>Phone</span>
              <p className="contact__value">+994 (55) 263 99 44</p>
              <p className="contact__value">+994 (50) 324 73 29</p>
            </div>

            <div className="contact__item">
              <span className="contact__label" style={{ color: '#e87722' }}>E-mail</span>
              <p className="contact__value">
                <a href="mailto:cascfen22@gmail.com" className="contact__link" style={{ color: '#e87722' }}>
                  cascfen22@gmail.com
                </a>
              </p>
              <p className="contact__value">
                <a href="mailto:info@cascfen.net" className="contact__link" style={{ color: '#e87722' }}>
                  info@cascfen.net
                </a>
              </p>
            </div>

            <div className="contact__item">
              <span className="contact__label" style={{ color: '#e87722' }}>Internet</span>
              <p className="contact__value">
                <a href="https://www.cascfen.net" target="_blank" rel="noreferrer" className="contact__link" style={{ color: '#e87722' }}>
                  www.cascfen.net
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  </>
)

export default Elaqe
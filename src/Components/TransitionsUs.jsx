import React from 'react'
// import Hero from '../components/Hero'
import './PageStyles.css'

const links = {
  Azerbaijan: [
    { name: 'International Eurasia Press Fund', url: '#' },
    { name: "Journalists' Trade Union", url: '#' },
    { name: 'Azeri Press Agency', url: '#' },
  ],
  Georgia: [
    { name: 'Independent Association of Georgian Journalists', url: '#' },
    { name: 'Georgia Today', url: '#' },
    { name: 'The Georgian Times', url: '#' },
    { name: 'Georgia Online', url: '#' },
  ],
  Kazakhstan: [
    { name: 'Eurasian Media Forum', url: '#' },
  ],
  Kyrgyzstan: [
    { name: 'Public Association "Journalists"', url: '#' },
    { name: 'The Media Commissioner Institute', url: '#' },
  ],
  Tajikistan: [
    { name: 'NANSMIT', url: '#' },
  ],
  Turkey: [
    { name: 'Turkish Journalists Union', url: '#' },
  ],
}

const TransitionsUs = () => (
  <>
    {/* <Hero
      tag="Keçidlər · Region"
      title={"Media\nQurumları"}
      subtitle="Azərbaycan, Gürcüstan, Qazaxıstan, Qırğızıstan, Tacikistan və Türkiyədən media təşkilatları"
      accent="#22c55e"
      bg="linear-gradient(135deg, #080f0a 0%, #0d200f 60%, #0a1510 100%)"
    /> */}

    <main className="page">
      <div className="page__inner">
        <article className="page__block">
          <span className="page__lang" style={{ color: '#22c55e', borderColor: '#22c55e' }}>KÇİDLƏR</span>
          <p className="page__lead">
            Dear visitor! If you have any web site to add to this page just send an e-mail to{' '}
            <a href="mailto:info@cascfen.net" style={{ color: '#22c55e' }}>info@cascfen.net</a>.
          </p>

          <div className="links__grid">
            {Object.entries(links).map(([country, items]) => (
              <div key={country} className="links__country">
                <h3 className="links__country-name" style={{ color: '#22c55e' }}>{country}</h3>
                <ul className="links__list">
                  {items.map((item, i) => (
                    <li key={i}>
                      <a href={item.url} className="links__link" style={{ color: '#22c55e' }}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  </>
)

export default TransitionsUs
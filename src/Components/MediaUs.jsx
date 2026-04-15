import React from 'react'
import Hero from '../Components/Hero'
import './PageStyles.css'

const previousWinners = [
  'Media Council of Tanzania (2003)',
  'Independent daily newspaper Danas, Serbia (2002)',
  'Independent online newspaper Malaysiakini.com (2001)',
  'IPYS – Press and Society Institute, Peru (2000)',
  'EFJA – Ethiopian Free Press Journalists\' Association, Ethiopia (1999)',
  'Radio B-92, Yugoslavia (1998)',
  'AJI – Alliance of Independent Journalists, Indonesia (1997)',
  'NTV, Russia (1996)',
]

const MediaUs = () => (
  <>
    {/* <Hero
      tag="Media Öncülü · 2004"
      title={"Media\nÖncülü"}
      subtitle="IPI Free Media Pioneer Award — CASCFEN, Baku"
      accent="#f59e0b"
      bg="linear-gradient(135deg, #1a1000 0%, #2a1f00 60%, #1a0f00 100%)"
    /> */}

    <main className="page">
      <div className="page__inner">
        <article className="page__block">
          <span className="page__lang" style={{ color: '#f59e0b', borderColor: '#f59e0b' }}>MEDİA ÖNCÜLÜ</span>
          <h2 className="page__heading">
            Central Asian and Southern Caucasian Freedom of Expression Network (CASCFEN), Baku
          </h2>

          <p className="page__para">
            Launched in August 2001, the Baku-based network was created by media organisations
            from Azerbaijan, Georgia, Kyrgyzstan, Tajikistan and Uzbekistan in order to share
            information and better coordinate their press freedom activities. Its declared aim is
            to "protect freedom of expression and of the press in the region" as outlined by
            Article 19 of the United Nations Universal Declaration of Human Rights.
          </p>

          <p className="page__para">
            CASCFEN operates in a region that is known for harsh government restrictions on
            independent and pro-opposition media. The closure of independent media outlets and
            the criminal prosecution of independent journalists, as well as more subtle tactics
            used to control the media, are common throughout the region and have led to a climate
            of intimidation in which self-censorship is on the rise. Violent attacks against
            journalists have also increased, making the profession more dangerous than ever.
            Against this backdrop, CASCFEN strives to improve the dissemination of news and
            information across national borders and actively participates in efforts to further
            and safeguard press freedom in the region.
          </p>

          <p className="page__para">
            The annual Free Media Pioneer Award was established by IPI, the global network of
            editors, media executives and leading journalists, in 1996 to honour individuals or
            organisations that have fought against great odds to ensure freer and more independent
            media in their country or region. The Award is co-sponsored by the US-based Freedom
            Forum, a non-partisan, international foundation dedicated to free press and free speech.
          </p>

          <div className="award__highlight" style={{ borderColor: '#f59e0b' }}>
            <p className="award__text">
              The annual Free Media Pioneer Award was presented to{' '}
              <strong>Azer Hasret, CASCFEN Chairman</strong> during IPI General Assembly and
              World Congress held in Warsaw, May, 2004.
            </p>
          </div>

          <div className="page__divider" style={{ background: '#f59e0b' }} />

          <h3 className="page__subheading">Previous Winners</h3>
          <ul className="page__list">
            {previousWinners.map((w, i) => (
              <li key={i} style={{ borderLeftColor: '#f59e0b' }}>{w}</li>
            ))}
          </ul>
        </article>
      </div>
    </main>
  </>
)

export default MediaUs
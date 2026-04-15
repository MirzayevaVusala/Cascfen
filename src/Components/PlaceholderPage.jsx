import React from 'react'

const PlaceholderPage = ({ title }) => {
  return (
    <main style={{ background: '#0d1b2e', minHeight: '60vh', padding: '72px 40px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{
          color: '#fff',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontFamily: 'Oswald, sans-serif',
          textTransform: 'uppercase',
          borderLeft: '4px solid #f97316',
          paddingLeft: 16,
          margin: 0
        }}>
          {title}
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.6)',
          marginTop: 24,
          fontSize: '0.95rem',
          lineHeight: 1.8
        }}>
          Bu bölmə hazırlanır.
        </p>
      </div>
    </main>
  )
}

export default PlaceholderPage
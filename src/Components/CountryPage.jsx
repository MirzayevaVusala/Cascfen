import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import Ribbon from './Ribbon';
import Footer from './Footer';

import { qazaxistanNews } from '../Data/Qazaxistan';
import { turkmenistanNews } from '../Data/Turkmenistan';
import { tacikistanNews } from '../Data/Tacikistan';
import { qirgizistanNews } from '../Data/Qirgizistan';
import { ozbekistanNews } from '../Data/Ozbekistan';

import {
  parseDate,
  xeberlerNews,
  azerbaycanNews,
  gurcustanNews,
  ermenistanNews,
  turkiyeNews,
  iranNews,
  beynelxalqNews,
  layihelerNews,
  meqalelerNews,
  qhtNews,
} from '../Data/News'; 

import './CountryPageStyles.css';

const dataMap = {
  'Qazaxıstan': qazaxistanNews,
  'Türkmənistan': turkmenistanNews,
  'Tacikistan': tacikistanNews,
  'Qırğızıstan': qirgizistanNews,
  'Özbəkistan': ozbekistanNews,
  'Azərbaycan': azerbaycanNews,
  'Gürcüstan': gurcustanNews,
  'Ermənistan': ermenistanNews,
  'Türkiyə': turkiyeNews,
  'İran': iranNews,
  'Xəbərlər': xeberlerNews,
  'Beynəlxalq': beynelxalqNews,
  'Layihələr': layihelerNews,
  'Məqalələr': meqalelerNews,
  'QHT Sektoru': qhtNews,
};

const getEmbedUrl = (url) => {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (trimmed.includes('/embed/')) return trimmed;
  try {
    const urlObj = new URL(trimmed);
    if (urlObj.hostname === 'youtu.be') {
      const id = urlObj.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (urlObj.hostname.includes('youtube.com')) {
      const id = urlObj.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
};

// Logolarda işləyən məntiq: Şəklin əvvəlinə mütləq ./ əlavə edirik
const getSafeImagePath = (path) => {
  if (!path) return '';
  // Əgər yol /Photos... ilə başlayırsa, / işarəsini silib ./Photos... edirik
  const cleanPath = path.replace(/^\//, '');
  return `./${cleanPath}`;
};

const CountryPage = ({ country, region, isRegion = false }) => {
  const [selected, setSelected] = useState(null);

  let rawNews = [];

  if (isRegion) {
    switch (region) {
      case "Orta Asiya":
        rawNews = [...qazaxistanNews, ...turkmenistanNews, ...tacikistanNews, ...qirgizistanNews, ...ozbekistanNews];
        break;
      case "Güney Qafqaz":
        rawNews = [...azerbaycanNews, ...gurcustanNews, ...ermenistanNews];
        break;
      case "Qonşular":
        rawNews = [...turkiyeNews, ...iranNews];
        break;
      case "Məqalələr":
        rawNews = [...layihelerNews, ...meqalelerNews];
        break;
      case "Beynəlxalq":
        rawNews = [...beynelxalqNews];
        break;
      default:
        rawNews = dataMap[country] || [];
    }
  } else {
    rawNews = dataMap[country] || [];
  }

  const processedNews = [];
  const seenTitles = new Set();

  const sortedRaw = [...rawNews].sort((a, b) => {
    return parseDate(b.date) - parseDate(a.date);
  });

  sortedRaw.forEach(item => {
    const cleanTitle = item.title.trim().toLowerCase();
    if (!seenTitles.has(cleanTitle)) {
      seenTitles.add(cleanTitle);
      processedNews.push(item);
    }
  });

  useEffect(() => {
    setSelected(null);
    window.scrollTo(0, 0);
  }, [country, region]);

  const renderLayout = (content) => (
    <div>
      <Navbar />
      <Logo />
      <Ribbon />
      {content}
      <Footer />
    </div>
  );

  if (selected) {
    const article = processedNews.find(n => n.id === selected);
    if (!article) return renderLayout(null);

    const hasFloat = article.sections.some(s => s.type === 'image-float');
    const hasVideoInSections = article.sections.some(s => s.type === 'video');
    const embedUrl = getEmbedUrl(article.videoUrl);

    return renderLayout(
      <main className="cp-detail">
        <div className="cp-detail__inner">
          <button className="cp-back" onClick={() => setSelected(null)}>← Geri qayıt</button>

          {article.tags && article.tags.length > 0 && (
            <div className="cp-detail__tags">
              {article.tags.map((tag, i) => <span key={i} className="cp-tag">{tag}</span>)}
            </div>
          )}

          <h1 className="cp-detail__title">{article.title}</h1>
          <p className="cp-detail__meta">{article.date} / {article.author}</p>

          {!hasFloat && article.image && (
            <>
              <img src={getSafeImagePath(article.image)} alt={article.title} className="cp-detail__img" />
              <h2 className="cp-detail__subtitle">{article.excerpt}</h2>
            </>
          )}

          {embedUrl && !hasVideoInSections && (
            <div className="cp-detail__video">
              <iframe
                src={embedUrl}
                title={article.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <div className="cp-detail__body">
            {article.sections.map((section, i) => {
              if (section.type === 'image') return (
                <img key={i} src={getSafeImagePath(section.src)} alt="" className="cp-detail__img cp-detail__img--inline" />
              );
              if (section.type === 'image-float') return (
                <figure key={i} className="cp-detail__float">
                  <img src={getSafeImagePath(section.src)} alt={section.caption || ''} className="cp-detail__float-img" />
                  {section.caption && <figcaption className="cp-detail__float-cap">{section.caption}</figcaption>}
                </figure>
              );
              if (section.type === 'subtitle') return (
                <h2 key={i} className="cp-detail__section-heading">{section.content}</h2>
              );
              if (section.type === 'video') {
                const sectionEmbedUrl = getEmbedUrl(section.src);
                return sectionEmbedUrl ? (
                  <div key={i} className="cp-detail__video">
                    <iframe
                      src={sectionEmbedUrl}
                      title={article.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null;
              }
              return (
                <p key={i} className="cp-detail__para" style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  return renderLayout(
    <main className="cp">
      <div className="cp__inner">
        <div className="cp__header">
          <span className="cp__region">{region}</span>
          <h2 className="cp__title">{isRegion ? region : country}</h2>
        </div>

        {processedNews.length === 0 ? (
          <p className="cp__empty">Bu bölmə üzrə xəbər yoxdur.</p>
        ) : (
          <div className="cp__grid">
            {processedNews.map(item => (
              <div key={`${item.id}-${item.title}`} className="cp-card" onClick={() => setSelected(item.id)}>
                {item.image ? (
                  <div className="cp-card__img-wrap">
                    <img src={getSafeImagePath(item.image)} alt={item.title} className="cp-card__img" />
                    {item.tags && item.tags.length > 0 && (
                      <div className="cp-card__tags">
                        {item.tags.map((tag, i) => <span key={i} className="cp-tag">{tag}</span>)}
                      </div>
                    )}
                  </div>
                ) : (
                  item.tags && item.tags.length > 0 && (
                    <div className="cp-card__tags cp-card__tags--no-img">
                      {item.tags.map((tag, i) => <span key={i} className="cp-tag">{tag}</span>)}
                    </div>
                  )
                )}

                <div className="cp-card__body">
                  <h3 className="cp-card__title">{item.title}</h3>
                  <p className="cp-card__meta">{item.date} / {item.author}</p>
                  <p className="cp-card__excerpt">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default CountryPage;
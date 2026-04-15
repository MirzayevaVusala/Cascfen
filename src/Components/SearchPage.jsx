import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from './Logo';
import Ribbon from './Ribbon';
import Footer from './Footer';

// Bütün dataları import edirik
import { qazaxistanNews } from '../Data/Qazaxistan';
import { turkmenistanNews } from '../Data/Turkmenistan';
import { tacikistanNews } from '../Data/Tacikistan';
import { qirgizistanNews } from '../Data/Qirgizistan';
import { ozbekistanNews } from '../Data/Ozbekistan';
import {
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

import './CountryPageStyles.css'; // Mövcud dizaynı istifadə edirik

const SearchPage = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);

  // URL-dən axtarış sözünü götürürük
  const query = new URLSearchParams(location.search).get('q') || "";

  useEffect(() => {
    // 1. Bütün dataları bir massivdə birləşdiririk
    const allData = [
      ...qazaxistanNews, ...turkmenistanNews, ...tacikistanNews, 
      ...qirgizistanNews, ...ozbekistanNews, ...xeberlerNews, 
      ...azerbaycanNews, ...gurcustanNews, ...ermenistanNews, 
      ...turkiyeNews, ...iranNews, ...beynelxalqNews, 
      ...layihelerNews, ...meqalelerNews, ...qhtNews
    ];

    // 2. Təkrarlanan başlıqları təmizləyirik
    const uniqueNews = [];
    const seenTitles = new Set();

    allData.forEach(item => {
      const cleanTitle = item.title.trim().toLowerCase();
      if (!seenTitles.has(cleanTitle)) {
        seenTitles.add(cleanTitle);
        uniqueNews.push(item);
      }
    });

    // 3. Axtarış sözünə görə filtr edirik
    if (query.trim()) {
      const filtered = uniqueNews.filter(item => {
        const searchInTitle = item.title.toLowerCase().includes(query.toLowerCase());
        const searchInExcerpt = item.excerpt?.toLowerCase().includes(query.toLowerCase());
        const searchInContent = item.sections.some(sec => 
          sec.content?.toLowerCase().includes(query.toLowerCase())
        );
        return searchInTitle || searchInExcerpt || searchInContent;
      }).sort((a, b) => {
        // Tarixə görə sıralama (Yeni xəbər yuxarıda)
        return new Date(b.date.split(' ').reverse().join('-')) - new Date(a.date.split(' ').reverse().join('-'));
      });

      setResults(filtered);
    } else {
      setResults([]);
    }
    
    setSelected(null);
    window.scrollTo(0, 0);
  }, [query]);

  const renderLayout = (content) => (
    <div>
      <Navbar />
      <Logo />
      <Ribbon />
      {content}
      <Footer />
    </div>
  );

  // Detal görünüşü (CountryPage ilə eyni məntiq)
  if (selected) {
    const article = results.find(n => n.id === selected);
    if (!article) return renderLayout(null);

    return renderLayout(
      <main className="cp-detail">
        <div className="cp-detail__inner">
          <button className="cp-back" onClick={() => setSelected(null)}>← Nəticələrə qayıt</button>
          <div className="cp-detail__tags">
            {article.tags?.map((tag, i) => <span key={i} className="cp-tag">{tag}</span>)}
          </div>
          <h1 className="cp-detail__title">{article.title}</h1>
          <p className="cp-detail__meta">{article.date} / {article.author}</p>
          {article.image && <img src={article.image} alt={article.title} className="cp-detail__img" />}
          <div className="cp-detail__body">
            {article.sections.map((section, i) => (
              <p key={i} className="cp-detail__para">{section.content}</p>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return renderLayout(
    <main className="cp">
      <div className="cp__inner">
        <div className="cp__header">
          <span className="cp__region">Axtarış Nəticələri</span>
          <h2 className="cp__title">"{query}" üçün nəticələr: {results.length}</h2>
        </div>

        {results.length === 0 ? (
          <p className="cp__empty">Heç bir nəticə tapılmadı.</p>
        ) : (
          <div className="cp__grid">
            {results.map(item => (
              <div key={`${item.id}-${item.title}`} className="cp-card" onClick={() => setSelected(item.id)}>
                {item.image && (
                  <div className="cp-card__img-wrap">
                    <img src={item.image} alt={item.title} className="cp-card__img" />
                  </div>
                )}
                <div className="cp-card__body">
                  <h3 className="cp-card__title">{item.title}</h3>
                  <p className="cp-card__meta">{item.date}</p>
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

export default SearchPage;
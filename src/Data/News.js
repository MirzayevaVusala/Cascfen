import { qazaxistanNews } from './Qazaxistan'
import { turkmenistanNews } from './Turkmenistan'
import { tacikistanNews } from './Tacikistan'
import { qirgizistanNews } from './Qirgizistan'
import { ozbekistanNews } from './Ozbekistan'
import { azerbaycanLocalNews } from './Azarbaijan'

// ── Ay adları → rəqəm ──
const months = {
  'Yanvar': 0, 'Fevral': 1, 'Mart': 2, 'Aprel': 3,
  'May': 4, 'İyun': 5, 'İyul': 6, 'Avqust': 7,
  'Sentyabr': 8, 'Oktyabr': 9, 'Noyabr': 10, 'Dekabr': 11
}

export const parseDate = (dateStr) => {
  const parts = (dateStr || '').trim().split(' ')
  const day   = parseInt(parts[0]) || 1
  const month = months[parts[1]] ?? 0
  const year  = parseInt(parts[2]) || 2000
  return new Date(year, month, day)
}

// ── Hər xəbərə aid olduğu ölkənin tag-ini avtomatik əlavə edirik ──
// Bu o deməkdir ki, Azərbaycan xəbərlərinin hamısında 'Azərbaycan' tag-i olacaq
const prepareNews = (newsArray, defaultTag) => {
  return newsArray.map(n => {
    const currentTags = n.tags || [];
    // Əgər tag onsuz da varsa, əlavə etmir, yoxdursa əlavə edir (böyük/kiçik hərf fərqini silərək yoxlayır)
    const hasTag = currentTags.some(t => t.toLowerCase() === defaultTag.toLowerCase());
    return {
      ...n,
      tags: hasTag ? currentTags : [...currentTags, defaultTag]
    };
  });
}

// ── Bütün xəbərləri bir yerə toplayırıq ──
const allNews = [
  ...prepareNews(qazaxistanNews, 'Qazaxıstan'),
  ...prepareNews(turkmenistanNews, 'Türkmənistan'),
  ...prepareNews(tacikistanNews, 'Tacikistan'),
  ...prepareNews(qirgizistanNews, 'Qırğızıstan'),
  ...prepareNews(ozbekistanNews, 'Özbəkistan'),
  ...prepareNews(azerbaycanLocalNews, 'Azərbaycan'),
]

// ── Deduplikasiya: Eyni TITLE-a (başlığa) sahib xəbərləri süzürük ──
const dedupeByTitle = (arr) => {
  const seenTitles = new Set();
  return arr.filter(item => {
    const cleanTitle = item.title.trim().toLowerCase();
    if (seenTitles.has(cleanTitle)) {
      return false; // Eyni başlıqlı xəbər artıq varsa, bunu ötür
    }
    seenTitles.add(cleanTitle);
    return true;
  });
}

// ── Tag-a görə filtr + sıralama ──
const byTag = (tag) => {
  // 1. Tag-ə görə axtarış (böyük-kiçik hərfə həssaslığı aradan qaldıraraq)
  const filteredData = allNews.filter(n => 
    n.tags && n.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
  
  // 2. Təkrarları title-a görə sil
  const uniqueData = dedupeByTitle(filteredData);

  // 3. Tarixə görə yenidən köhnəyə doğru sırala
  return uniqueData.sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

// ── Export-lar ──
export const xeberlerNews   = byTag('Xəbərlər')
export const azerbaycanNews = byTag('Azərbaycan')
export const gurcustanNews  = byTag('Gürcüstan')
export const ermenistanNews = byTag('Ermənistan')
export const turkiyeNews    = byTag('Türkiyə')
export const iranNews       = byTag('İran')
export const beynelxalqNews = byTag('Beynəlxalq')
export const layihelerNews  = byTag('Layihələr')
export const meqalelerNews  = byTag('Məqalələr')
export const qhtNews        = byTag('QHT Sektoru')

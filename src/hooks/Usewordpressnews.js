// import { useState, useEffect } from 'react';

// const PROXY = 'http://localhost:3001';

// // Kateqoriya ID xəritəsi
// export const CATEGORY_IDS = {
//   'Azərbaycan':   5,
//   'Ermənistan':   4,
//   'Gürcüstan':    8,
//   'Özbəkistan':   16,
//   'Qazaxıstan':   10,
//   'Türkmənistan': 15,
//   'Qırğızıstan':  11,
//   'Tacikistan':   13,
//   'Türkiyə':      14,
//   'İran':         1,
//   'Xəbərlər':     12,
//   'Beynəlxalq':   7,
//   'QHT Sektoru':  9,
//   'Məqalələr':    3,
//   'Layihələr':    109,
// };

// export const REGION_CATEGORY_IDS = {
//   'Orta Asiya':   [10, 15, 11, 16, 13],
//   'Güney Qafqaz': [5, 8, 4],
//   'Qonşular':     [14, 1],
//   'Məqalələr':    [109, 3],
//   'Beynəlxalq':   [7],
// };

// // ─── Tək kateqoriya üçün hook ────────────────
// export const useWordPressNews = (categoryName, options = {}) => {
//   const { enabled = true } = options;

//   const [news,    setNews]    = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error,   setError]   = useState(null);
//   const [hasMore, setHasMore] = useState(false);
//   const [page,    setPage]    = useState(1);

//   const categoryId = CATEGORY_IDS[categoryName];

//   useEffect(() => {
//     if (!enabled || !categoryId) return;

//     const controller = new AbortController();
//     setLoading(true);
//     setError(null);

//     fetch(`${PROXY}/news?cat=${categoryId}&page=${page}`, {
//       signal: controller.signal,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (!data.articles) throw new Error('Məlumat gəlmədi');
//         setNews((prev) => page === 1 ? data.articles : [...prev, ...data.articles]);
//         setHasMore(page < data.totalPages);
//       })
//       .catch((err) => {
//         if (err.name !== 'AbortError') setError(err.message);
//       })
//       .finally(() => setLoading(false));

//     return () => controller.abort();
//   }, [categoryId, page, enabled]);

//   // Xəbər detalını çək
//   const fetchDetail = async (link) => {
//     const res  = await fetch(`${PROXY}/post?url=${encodeURIComponent(link)}`);
//     const data = await res.json();
//     return data;
//   };

//   const loadMore = () => setPage((p) => p + 1);
//   const reset    = () => { setPage(1); setNews([]); };

//   return { news, loading, error, hasMore, loadMore, reset, fetchDetail };
// };

// // ─── Region üçün hook ────────────────────────
// export const useWordPressRegionNews = (regionName, options = {}) => {
//   const { enabled = true } = options;

//   const [news,    setNews]    = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error,   setError]   = useState(null);

//   const categoryIds = REGION_CATEGORY_IDS[regionName];

//   useEffect(() => {
//     if (!enabled || !categoryIds?.length) return;

//     setLoading(true);
//     setError(null);

//     Promise.all(
//       categoryIds.map((id) =>
//         fetch(`${PROXY}/news?cat=${id}&page=1`)
//           .then((r) => r.json())
//           .then((d) => d.articles || [])
//           .catch(() => [])
//       )
//     )
//       .then((results) => {
//         const all  = results.flat();
//         const seen = new Set();
//         const dedup = all.filter((item) => {
//           const key = item.title.toLowerCase().trim();
//           if (seen.has(key)) return false;
//           seen.add(key);
//           return true;
//         });
//         setNews(dedup);
//       })
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));

//   }, [regionName, enabled]);

//   return { news, loading, error };
// };
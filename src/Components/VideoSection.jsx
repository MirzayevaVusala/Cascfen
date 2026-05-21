import React, { useState } from "react";
import { azerbaycanLocalNews } from "../Data/Azarbaijan";
import "./VideoSectionStyles.css";

// sections içində type:"video" olan HƏR xəbəri götür
const videoNews = azerbaycanLocalNews.filter((item) =>
  item.sections?.some((s) => s.type === "video")
);

// Hər xəbərin sections-dan type:"video" olan url-i tap
const getVideoUrl = (item) => {
  const videoSection = item.sections?.find((s) => s.type === "video");
  return videoSection?.src || null;
};

// YouTube URL-dən embed URL düzəlt
const toEmbedUrl = (url) => {
  if (!url) return null;
  const short = url.match(/youtu\.be\/([^?&]+)/);
  if (short) return `https://www.youtube.com/embed/${short[1]}`;
  const long = url.match(/[?&]v=([^?&]+)/);
  if (long) return `https://www.youtube.com/embed/${long[1]}`;
  if (url.includes("/embed/")) return url;
  return null;
};

// YouTube thumbnail götür
const getThumbnail = (url) => {
  if (!url) return null;
  const short = url.match(/youtu\.be\/([^?&]+)/);
  if (short) return `https://img.youtube.com/vi/${short[1]}/hqdefault.jpg`;
  const long = url.match(/[?&]v=([^?&]+)/);
  if (long) return `https://img.youtube.com/vi/${long[1]}/hqdefault.jpg`;
  return null;
};

// Hazır video siyahısı — sections-dan videoUrl götürülür, title xəbərin özündən
const videos = videoNews
  .map((item) => {
    const videoUrl = getVideoUrl(item);
    return {
      id: item.id,
      title: item.title,
      date: item.date,
      author: item.author || "CASCFEN",
      videoUrl,
      thumbnail: getThumbnail(videoUrl),
      image: item.image,
    };
  })
  .filter((v) => v.videoUrl);

export default function VideoSection() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  if (!videos || videos.length === 0) return null;

  const featured = videos[current];
  const embedUrl = toEmbedUrl(featured.videoUrl);
  const thumb =
    featured.thumbnail ||
    (featured.image ? `./${featured.image.replace(/^\//, "")}` : null);

  const prev = () => {
    setCurrent((c) => (c - 1 + videos.length) % videos.length);
    setPlaying(false);
  };
  const next = () => {
    setCurrent((c) => (c + 1) % videos.length);
    setPlaying(false);
  };
  const select = (i) => {
    setCurrent(i);
    setPlaying(false);
  };

  return (
    <div className="vs-wrapper">
      {/* Header */}
      <div className="vs-header">
        <div className="vs-title-group">
          <span className="vs-accent-bar" />
          <h2 className="vs-title">VİDEOLAR</h2>
        </div>
        <div className="vs-nav-group">
          <button className="vs-nav-btn" onClick={prev}>‹</button>
          <button className="vs-nav-btn" onClick={next}>›</button>
        </div>
      </div>

      <div className="vs-body">
        {/* Sol: Featured video player */}
        <div className="vs-featured">
          <div className="vs-player-wrap">
            {playing && embedUrl ? (
              <iframe
                className="vs-iframe"
                src={`${embedUrl}?autoplay=1`}
                title={featured.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="vs-thumbnail-wrap" onClick={() => setPlaying(true)}>
                {thumb ? (
                  <img src={thumb} alt={featured.title} className="vs-thumbnail" />
                ) : (
                  <div className="vs-thumb-placeholder" />
                )}
                <div className="vs-thumb-overlay" />
                <div className="vs-play-btn">
                  <svg viewBox="0 0 24 24" fill="white" width="38" height="38">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="vs-thumb-badge">YouTube</div>
              </div>
            )}
          </div>

          {/* Featured title və meta — playerin altında */}
          <div className="vs-featured-info">
            <h3 className="vs-featured-title">{featured.title}</h3>
            <div className="vs-featured-meta">
              <span className="vs-date">📅 {featured.date}</span>
              <span className="vs-source">{featured.author}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="vs-dots">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => select(i)}
                className={`vs-dot${i === current ? " active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Sağ: Video siyahısı */}
        <div className="vs-list">
          {videos.map((v, i) => {
            const t =
              v.thumbnail ||
              (v.image ? `./${v.image.replace(/^\//, "")}` : null);
            return (
              <div
                key={v.id}
                className={`vs-list-item${i === current ? " active" : ""}`}
                onClick={() => select(i)}
              >
                <div className="vs-list-thumb-wrap">
                  {t ? (
                    <img src={t} alt={v.title} className="vs-list-thumb" />
                  ) : (
                    <div className="vs-list-thumb-placeholder" />
                  )}
                  <div className="vs-list-play">
                    <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="vs-list-info">
                  {/* Hər videonun altında həmin xəbərin title-ı */}
                  <p className="vs-list-title">{v.title}</p>
                  <span className="vs-list-date">{v.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
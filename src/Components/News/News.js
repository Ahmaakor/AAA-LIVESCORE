import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./News.module.css";
import { getNewsList } from '../../Data/NewsList';
import { getTimeAgo } from "../../Utils/getTimeAgo";
import Loading from "../Loading/Loading";

function News() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      const data = await getNewsList();
      if (data) {
        setNews(data);
        console.log(data)
      } else {
        setError('Failed to fetch news');
      }
      setLoading(false);
    }
    fetchNews();
  }, []);

  return (
    <main className={`container ${styles.newsPage}`}>
      <section className={styles.newsHeader}>
        <h1>Football News</h1>
        <p>
          Latest updates from global football leagues, transfers, fixtures, and
          highlights.
        </p>
      </section>

      {loading && <Loading />}
      {error && <div>{error}</div>}
      {!loading && !error && (!news || !news.homepageArticles) && (
        <div>No news available.</div>
      )}

      {!loading && !error && news && news.homepageArticles && (
        <section className={styles.newsList}>
          {news.homepageArticles[0].articles.map((article, i) => (
            <Link to={`/news/${article.slug}`} className={styles.newsCard} key={i}>
              {article.mainMedia && article.mainMedia.length > 0 && (
                <img
                  src={article.mainMedia[0].gallery.url}
                  alt={article.title}
                  className={styles.newsImage}
                />
              )}
              <div className={styles.newsContent}>
                <h2 className={styles.newsTitle}>{article.title}</h2>
                <p className={styles.newsMeta}>
                  {getTimeAgo(article.updatedAt)}
                </p>
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}

export default News;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./News.module.css";
import { getNewsList } from '../../Data/NewsList';
import { getTimeAgo } from "../../Utils/getTimeAgo";

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


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!news || !news.homepageArticles) return <div>No news available.</div>;

  return (
    <main className={`container ${styles.newsPage}`}>
      <section className={styles.newsHeader}>
        <h1>Football News</h1>
        <p>
          Latest updates from global football leagues, transfers, fixtures, and
          highlights.
        </p>
      </section>

      {news.homepageArticles.map((items, idx) => (

        <section className={styles.newsList} key={idx}>
          { items.articles.map((article, i) => (

            <article className={styles.newsCard} key={i}>
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
                <Link to={`/news/${article.slug}`} className={styles.readMore}>
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </section>
        
      ))}
      
    </main>
  );
};

export default News;

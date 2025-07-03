import React from "react";
import styles from "./News.module.css";
import image1 from "../../Assets/Images/ronaldo.jpg";
import image2 from "../../Assets/Images/transfer.jpg";
import image3 from "../../Assets/Images/ucl.jpg";

const newsItems = [
  {
    id: 1,
    title: "Cristiano Ronaldo Scores Hat-Trick in Al Nassr Victory",
    date: "July 2, 2025",
    summary:
      "Ronaldo delivered a stunning performance with three goals in a crucial league match, solidifying his top-scorer status this season.",
    image: image1,
  },
  {
    id: 2,
    title: "Premier League Transfer Window Heats Up",
    date: "July 1, 2025",
    summary:
      "Big clubs like Manchester City and Arsenal are making moves early in the window. Here’s a roundup of the top rumors and signings.",
    image: image2,
  },
  {
    id: 3,
    title: "UEFA Champions League: Group Stage Draw Announced",
    date: "June 30, 2025",
    summary:
      "The UCL group draw is out, and some exciting clashes await. Barcelona vs Bayern and City vs PSG headline this season’s opener.",
    image: image3,
  },
];

const News = () => {
  return (
    <main className={`container ${styles.newsPage}`}>
      <section className={styles.newsHeader}>
        <h1>Football News</h1>
        <p>
          Latest updates from global football leagues, transfers, fixtures, and
          highlights.
        </p>
      </section>

      <section className={styles.newsList}>
        {newsItems.map(({ id, title, date, summary, image }) => (
          <article className={styles.newsCard} key={id}>
            <img src={image} alt={title} className={styles.newsImage} />
            <div className={styles.newsContent}>
              <h2 className={styles.newsTitle}>{title}</h2>
              <p className={styles.newsMeta}>Published on {date}</p>
              <p className={styles.newsSummary}>{summary}</p>
              <a href="#" className={styles.readMore}>
                Read More →
              </a>
            </div>
          </article>
        ))}
        {newsItems.map(({ id, title, date, summary, image }) => (
          <article className={styles.newsCard} key={id}>
            <img src={image} alt={title} className={styles.newsImage} />
            <div className={styles.newsContent}>
              <h2 className={styles.newsTitle}>{title}</h2>
              <p className={styles.newsMeta}>Published on {date}</p>
              <p className={styles.newsSummary}>{summary}</p>
              <a href="#" className={styles.readMore}>
                Read More →
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default News;

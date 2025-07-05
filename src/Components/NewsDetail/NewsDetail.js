import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './NewsDetail.module.css'
import { getNewsDetail } from '../../Data/NewsDetail'
import { getTimeAgo } from "../../Utils/getTimeAgo";

function NewsDetail() {
  const { slug } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const data = await getNewsDetail(slug);
        if (data && data.article) {
          setNewsDetail(data);
        } else {
          setError('News not found');
        }
      } catch (e) {
        setError('Error fetching news');
      }
      setLoading(false);
    }
    fetchDetail();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!newsDetail) return <div>No news detail available.</div>;

  // Helper to render the article body (array of editor_blocks)
  function renderBody(body) {
    if (!Array.isArray(body)) return null;
    return body.map((block, idx) => {
      if (block.type === 'editor_block' && block.data && block.data.content) {
        // Render HTML content safely
        return (
          <div
            key={block.id || idx}
            dangerouslySetInnerHTML={{ __html: block.data.content }}
            className={styles.articleBlock}
          />
        );
      }
      if (block.type === 'image' && block.image && block.image.gallery && block.image.gallery.url) {
        return (
          <div key={block.id || idx} className={styles.articleImageBlock}>
            <img
              src={block.image.gallery.url}
              alt={block.image.gallery.alt || ''}
              className={styles.articleImage}
            />
            {block.image.gallery.alt && (
              <div className={styles.imageCaption}>{block.image.gallery.alt}</div>
            )}
          </div>
        );
      }
      if (block.type === 'link' && block.data && block.data.content) {
        return (
          <div
            key={block.id || idx}
            dangerouslySetInnerHTML={{ __html: block.data.content }}
            className={styles.articleLinkBlock}
          />
        );
      }
      return null;
    });
  }

  return (

    <div className={`container ${styles.newsDetail}`}>
      <div className={styles.newsDetailContainer}>
        <h1>{newsDetail.article.title}</h1>
        {/* <h2 className={styles.subTitle}>{newsDetail.article.subTitle}</h2> */}
        <div className={styles.meta}>
          < div className={styles.publishedDetails} >
            <img src={`https://www.livescore.com${newsDetail.article.publishedBy.logo}`} alt={newsDetail.article.publishedBy.name} />
            <div className={styles.articleAP} >
              {newsDetail.article.authors && newsDetail.article.authors.length > 0 && (
                <div className={styles.authName} >{newsDetail.article.authors[0].name}</div>
              )}
              {newsDetail.article.publishedBy && (
                <div className={styles.pubName} >{newsDetail.article.publishedBy.name}</div>
              )}
            </div>
          </div>
          <span className={styles.publishedDT}>
            <div className={styles.publishedDate}>
              {newsDetail.article.publishedDate}
            </div>
            <div className={styles.publishedTime}>
              {newsDetail.article.publishedTime}
            </div>
          </span>

        </div>
        {newsDetail.article.mainMedia && newsDetail.article.mainMedia.length > 0 && (
          <>
            <img
              src={newsDetail.article.mainMedia[0].gallery.url}
              alt={newsDetail.article.mainMedia[0].gallery.alt || newsDetail.article.title}
              className={styles.mainImage}
            />
            <div className={styles.mainImageCaption}>{newsDetail.article.mainMedia[0].gallery.alt || newsDetail.article.title}</div>
          </>
        )}

        <div className={styles.articleBody}>
          {renderBody(newsDetail.article.body)}
        </div>

        {newsDetail.article.related.tags.length > 0 && (
          <>
            <h3>Tags</h3>

            <div className={styles.tags} >
              {newsDetail.article.related.tags.map((tag, idx) => (
                <div key={idx} className={styles.tag} >{tag.title}</div>
              ))}
            </div>
          </>
        )}
      </div>


      <div className={styles.relatedNews}>
        <h3>Related News</h3>
        <section className={styles.newsList}>
        {newsDetail.article.related.relatedArticles.map((rel, idx) => (
            <article className={styles.newsCard}  key={idx}>
              {rel.mainMedia && rel.mainMedia.length > 0 && (
                <img
                  src={rel.mainMedia[0].gallery.url}
                  alt={rel.title}
                  className={styles.newsImage}
                />
              )}
              <div className={styles.newsContent}>
                <h2 className={styles.newsTitle}>{rel.title}</h2>
                <p className={styles.newsMeta}>
                  {getTimeAgo(rel.updatedAt)}
                </p>
                <Link to={`/news/${rel.slug}`} className={styles.readMore}>
                  Read More →
                </Link>
              </div>
            </article>
        ))}
        </section>
      </div>
    </div>
  )
}

export default NewsDetail
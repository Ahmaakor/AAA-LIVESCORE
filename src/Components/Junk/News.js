import React, { useEffect, useState } from 'react';
import { getNewsData } from '../../Data/NewsData';
import { getTeamDetail } from '../../Data/TeamDetail';

function News() {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Add state for team detail
    const [teamDetail, setTeamDetail] = useState(null);

    useEffect(() => {
        async function fetchNews() {
            const data = await getNewsData();
            if (data) {
                setNews(data);
            } else {
                setError('Failed to fetch news');
            }
            setLoading(false);
        }
        fetchNews();
    }, []);

    // Fetch team detail
    useEffect(() => {
        async function fetchTeamDetail() {
            const data = await getTeamDetail();
            setTeamDetail(data);
        }
        fetchTeamDetail();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!news || !news.homepageArticles) return <div>No news available.</div>;

    return (
        <div>
            <h2>Latest News</h2>
            {news.homepageArticles.map((item, idx) => (
                <div key={idx}>
                    {item.articles && item.articles.map((article) => {
                        const fullUrl = `https://www.fotmob.com/${article.url}`;
                        return (
                            <div key={article.id}>
                                <h3>{article.title}</h3>
                                {article.mainMedia.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img.gallery.url}
                                        alt={img.gallery.alt || article.title}
                                        height={img.gallery.height}
                                        width={img.gallery.width}
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                ))}
                                <a href={fullUrl} target="_blank" rel="noopener noreferrer">Read More</a>
                            </div>
                        );
                    })}
                </div>
            ))}
            {/* Render team detail if available */}
            {teamDetail && (
                <div>
                    <h2>Team Detail</h2>
                    <pre>{JSON.stringify(teamDetail, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default News;
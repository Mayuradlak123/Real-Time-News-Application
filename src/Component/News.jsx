import React, { useEffect, useState } from 'react';
import NewsItem from './Newsitem';

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=eda196e3c0c54659ac84bb709da3d3db&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, [category, page]);

  const handlePrevClick = async () => {
    setPage(page - 1);
  };

  const handleNextClick = async () => {
    setPage(page + 1);
  };

  return (
    <div className="w-full px-3 mt-6 mt-16">
      {/* <h3 className="text-center mt-70">Today's Top Headlines</h3> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((element) => (
          <div key={element.title}>
            <NewsItem
              title={element.title}
              description={element.description}
              imageurl={element.urlToImage}
              newsUrl={element.url}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between my-3">
        <button
          disabled={page <= 1}
          onClick={handlePrevClick}
          className="bg-cyan-500 p-2 rounded"
        >
          &larr; Previous
        </button>
        <button onClick={handleNextClick} className=" bg-green-600 rounded p-2">
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  category: 'general',
};

export default News;

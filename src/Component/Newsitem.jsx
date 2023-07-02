import NewsImage from "../NewsImage.jpg";

const NewsItem = ({ title, description, imageurl, newsUrl, date }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-48 object-cover"
          src={imageurl ? imageurl : NewsImage}
          alt="News Image"
        />

        <div className="px-6 py-4 flex flex-col items-center">
          <p className="text-xs mb-2">Date: {date.slice(0, 10)}</p>
          <p className="text-base font-bold mb-2">{title.slice(30)}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block no-underline  text-center bg-gray-800 text-white py-1 px-2 rounded text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.defaultProps = {
  title: "Newspaper",
  description: "Daily news",
  imageurl:
    "https://media.gettyimages.com/vectors/live-breaking-news-headline-with-blue-and-red-color-background-vector-id1221950506?s=2048x2048",
  newsUrl: "shorturl.at/jmpIZ",
};

export default NewsItem;

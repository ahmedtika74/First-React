import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ArticleContext } from '../context/ArticleContext';

export default function Articles() {
  const articlesData = useContext(ArticleContext);
  const articles = articlesData.map((article) => {
    return (
      <div
        className="m-2 overflow-hidden rounded-2xl shadow-md duration-300 hover:-translate-y-3"
        key={article.id}
      >
        <img src={article.image} alt={article.title} />
        <div className="p-2.5">
          <h2 className="border-b border-gray-300 p-2.5 text-xl font-bold">
            {article.title}
          </h2>
          <p className="mt-2.5 line-clamp-2 leading-relaxed text-gray-400">
            {article.body}
          </p>
          <Link
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }}
            to={`/articles/${article.id}`}
            className="m-auto mt-2.5 block w-fit rounded-full bg-mist-500 px-5 py-2 text-white duration-300 hover:bg-mist-900"
          >
            Read More
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="my-10 grid grid-cols-1 gap-2 px-[5%] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {articles}
    </div>
  );
}

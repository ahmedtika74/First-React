import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ArticleContext } from '../context/ArticleContext';

export default function ArticleDetails() {
  const articleId = useParams();
  const articlesData = useContext(ArticleContext);
  const myArticle = articlesData.find((article) => article.id == articleId.Id);
  return (
    <div className="mx-auto max-w-4xl px-5 py-10">
      <Link
        to="/articles"
        className="mb-6 block items-center text-sm font-medium hover:underline"
      >
        ← Back to Articles
      </Link>
      <header className="mb-8 border-b border-gray-100 pb-8 text-center">
        <span className="rounded-full bg-mist-100 px-4 py-1 text-xs font-bold text-mist-600 uppercase">
          {myArticle.category}
        </span>
        <h1 className="my-4 text-3xl font-extrabold text-gray-900 md:text-5xl">
          {myArticle.title}
        </h1>
        <span className="mt-6 text-sm font-medium text-gray-700 underline">
          By {myArticle.author}
        </span>
      </header>
      <div className="relative mb-10 overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={myArticle.image}
          alt={myArticle.title}
          className="w-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <article className="mx-auto">
        <p className="text-justify text-lg leading-loose text-gray-700">
          {myArticle.body}
        </p>
      </article>
      <footer className="mt-16 border-t border-gray-100 pt-10 text-center">
        <p className="text-sm text-gray-400 italic">
          Thanks for reading! Share your thoughts on this {myArticle.category}
          piece.
        </p>
      </footer>
    </div>
  );
}

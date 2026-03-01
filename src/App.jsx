import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Articles from './components/Articles';
import ArticleDetails from './components/ArticleDetails';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:Id" element={<ArticleDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

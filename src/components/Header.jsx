import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex h-fit flex-col items-center justify-center bg-mist-500 px-[5%] py-2 text-white md:flex md:h-[8vh] md:flex-row md:justify-between md:gap-10 md:py-0">
      <div className="logo mb-2 text-center text-2xl font-black">
        React.<span className="text-yellow-500">js</span>
      </div>
      <div className="links flex items-center justify-center gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </header>
  );
}

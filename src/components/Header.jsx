import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="uppercase text-sm flex text-md justify-between items-center font-regular tracking-wider">
      <Link to="/" className="block w-7 h-7">
        <img src="/favicon.png" alt="Home" className="w-full h-full object-contain" />
      </Link>
      <nav className="space-x-6">
        <Link className="text-blue-600 transition-colors duration-200" to="/favorites">Favorites</Link>
        <Link className="text-blue-600 transition-colors duration-200" to="/writing">Writing</Link>
        <a className="text-blue-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://youtube.com/@ahunbaev">Videos</a>
        <a className="text-blue-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="mailto:alizahunbaev@gmail.com">Contact</a>
      </nav>
    </header>
  );
}

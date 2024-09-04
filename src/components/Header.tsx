import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="logotype" className="w-32" />
            {/* <img src="./bg.jpg" alt="Background Wallpaper" className="w-32" /> */}
          </div>
          <nav className=" text-white font-bold uppercase flex gap-4 text-xl">
            <Link to="/">Index</Link>
            <Link to="/favorites">Favorites</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

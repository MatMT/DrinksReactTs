import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <header className={ isHome ? `bg-header bg-center bg-cover` : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="logotype" className="w-32" />
            {/* <img src="./bg.jpg" alt="Background Wallpaper" className="w-32" /> */}
          </div>
          <nav className="font-bold uppercase flex gap-8 text-xl bg-white py-4 px-8 rounded-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-slate-800"
              }
            >
              Index
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-slate-800"
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form 
          className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Name or Ingredients
              </label>

              <input
                type="text"
                id="ingredient"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Name or Ingredient. Ex: Vodka, Tequila, Coffe."
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Category
              </label>

              <select
                id="ingredient"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                defaultValue={""}
              >
                <option value="" disabled>-- Select --</option>
              </select>
            </div>

            <input type="submit" value="Search Recipies" className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full rounded-lg uppercase p-2" /> 
          </form>
        )}
      </div>
    </header>
  );
}

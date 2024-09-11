import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";

export default function Header() {
  const [searchFilter, setSearchFilter] = useState({
    ingredient: "",
    category: "",
  });
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = ( e: ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    setSearchFilter({
      ...searchFilter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Validar
    if(Object.values(searchFilter).includes('')){
      showNotification({text: 'All fields are Required', error: true});
      return;
    }

    searchRecipes(searchFilter);
  };

  return (
    <header
      className={isHome ? `bg-header bg-center bg-cover` : "bg-slate-800"}
    >
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
            onSubmit={handleSubmit}
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
                onChange={handleChange}
                value={searchFilter.ingredient}
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
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChange}
                value={searchFilter.category}
              >
                <option value="" disabled>
                  -- Select --
                </option>

                {categories.drinks.map((category) => (
                  <option
                    value={category.strCategory}
                    key={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="submit"
              value="Search Recipes"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full rounded-lg uppercase p-2"
            />
          </form>
        )}
      </div>
    </header>
  );
}

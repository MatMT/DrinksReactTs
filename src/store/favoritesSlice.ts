import { StateCreator } from 'zustand'
import { RecipeDetails } from '../types'

export type FavoritesSliceType = {
    favorites: RecipeDetails[];
    handleClickFavorite: (recipe: RecipeDetails) => void;
    favoriteExists: (id: RecipeDetails['idDrink']) => boolean;
    loadFromStorage: () => void;
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites));
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites)
            set({ favorites: JSON.parse(storedFavorites) })
    }
})
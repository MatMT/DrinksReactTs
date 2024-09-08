import { StateCreator } from "zustand"
import { getCategories, getRecipeDetailsById, getRecipesByFilters } from "../services/RecipiesService"
import type { Categories, Drink, Drinks, SearchFilter, RecipeDetails } from "../types"

export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    modal: boolean
    selectedRecipe: RecipeDetails
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipiesSlice: StateCreator<RecipiesSliceType> = (set) => ({
    categories: { drinks: [] },
    drinks: { drinks: [] },
    modal: false,
    selectedRecipe: {} as RecipeDetails,
    fetchCategories: async () => {
        const categories = await getCategories();
        set({ categories })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipesByFilters(filters);
        set({ drinks });
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeDetailsById(id);
        set({ selectedRecipe, modal: true })
    },
    closeModal: () => {
        set({ modal: false, selectedRecipe: {} as RecipeDetails })
    }
})
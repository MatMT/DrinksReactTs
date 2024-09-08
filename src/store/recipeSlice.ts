import { StateCreator } from "zustand"
import { getCategories, getRecipesByFilters } from "../services/RecipiesService"
import type { Categories, Drinks, SearchFilter } from "../types"

export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilter: SearchFilter) => Promise<void>
}

export const createRecipiesSlice: StateCreator<RecipiesSliceType> = (set) => ({
    categories: { drinks: [] },
    drinks: { drinks: [] },
    fetchCategories: async () => {
        const categories = await getCategories();
        set({ categories })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipesByFilters(filters);
        set({ drinks });
    }
})
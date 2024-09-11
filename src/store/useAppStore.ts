import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipiesSlice, RecipiesSliceType } from './recipeSlice';
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType>()(devtools(
    (...a) => ({
        ...createRecipiesSlice(...a),
        ...createFavoritesSlice(...a)
    })
))
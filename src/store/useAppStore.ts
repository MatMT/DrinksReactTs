import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipiesSlice, RecipiesSliceType } from './recipeSlice';
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'
import { createNotificationsSlice, NotificationSliceType } from './notificationSlice';

export const useAppStore =
    create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()
        (devtools(
            (...a) => ({
                ...createRecipiesSlice(...a),
                ...createFavoritesSlice(...a),
                ...createNotificationsSlice(...a)
            })
        ))
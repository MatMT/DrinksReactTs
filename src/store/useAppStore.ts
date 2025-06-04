import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipiesSlice, RecipiesSliceType } from './recipeSlice';
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'
import { createNotificationsSlice, NotificationSliceType } from './notificationSlice';
import { AISlice, createAISlice } from './aiSlice';

export const useAppStore =
    create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()
        (devtools(
            (...a) => ({
                ...createRecipiesSlice(...a),
                ...createFavoritesSlice(...a),
                ...createNotificationsSlice(...a),
                ...createAISlice(...a)
            })
        ))
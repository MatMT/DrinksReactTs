import {z} from 'zod';
import { CategoriesAPIResponseSchema, DrinksAPIResponse, SearchFilterSchema } from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>; 
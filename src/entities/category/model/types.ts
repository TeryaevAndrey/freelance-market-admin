import type { PaginationParams, PaginationResponse, WithNull } from "@/shared/types/main-types";

export interface Category {
    id: number;
    name: string;
    image?: WithNull<string>
}

export interface GetCategoriesParams extends PaginationParams {}

export interface GetCategoriesResponse extends PaginationResponse {
    results: Category[];
}
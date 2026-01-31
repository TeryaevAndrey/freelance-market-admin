import type { City } from "@/shared/types/regions.types";

export const getCityById = (id: number, cities?: City[]) => {
    const foundCity = cities?.find((city) => city.id === id);

    return foundCity;
}
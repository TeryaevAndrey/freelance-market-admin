"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Region } from "../types/regions.types";
import { regionsQueries } from "../queries/regions.queries";
import { useQuery } from "@tanstack/react-query";

export const RegionsContext = createContext<Region[]>([]);

export const useRegions = () => {
  const regions = useContext(RegionsContext);

  const cities = regions
    .map((region) => {
      return region.cities;
    })
    .flat();

  return { regions, cities };
};

interface Props {
  children: ReactNode;
}

export const RegionsProvider = ({ children }: Props) => {
  const { data: regions } = useQuery(regionsQueries.list());

  return (
    <RegionsContext.Provider value={regions?.results || []}>
      {children}
    </RegionsContext.Provider>
  );
};

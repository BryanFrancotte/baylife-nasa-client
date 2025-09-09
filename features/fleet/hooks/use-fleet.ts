"use client";

import { useQuery } from "@tanstack/react-query";
import httpService from "@/app/modules/shared/services/http.service";

export function useFleet() {
  return useQuery({
    queryKey: ["fleet", "vehicles"],
    queryFn: () => httpService.get<any>("/fleet/vehicles"),
    staleTime: 60_000,
  });
}



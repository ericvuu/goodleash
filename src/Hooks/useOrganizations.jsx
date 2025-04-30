import { useQuery } from "@tanstack/react-query";
import { searchOrganizations } from "../Api/petfinder";

export default function useOrganizations({
  name,
  query,
  location,
  distance,
  state,
  country,
  sort,
  page = 1,
  limit = 20,
}) {
  return useQuery({
    queryKey: [
      "organizations",
      { name, query, location, distance, state, country, sort, page, limit },
    ],
    queryFn: () =>
      searchOrganizations({
        name,
        query,
        location,
        distance,
        state,
        country,
        sort,
        page,
        limit,
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });
}

import { useQuery } from "@tanstack/react-query";
import { searchDogs } from "../Api/petfinder";

export default function useDogs({
  type = "dog",
  breed = "",
  location = "",
  page = 1,
  limit = 20,
}) {
  return useQuery({
    queryKey: ["dogs", type, breed, location, page],
    queryFn: () => searchDogs({ type, breed, location, page, limit }),
    staleTime: 24 * 60 * 60 * 1000,
    onError: (error) => {
      console.error("Error fetching dogs:", error);
      console.error("Request parameters:", { type, breed, location, page });
    },
  });
}

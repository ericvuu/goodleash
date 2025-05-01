import { useQuery } from "@tanstack/react-query";
import { searchDogs } from "../Api/petfinder";

export default function useDogs({
  type = "dog",
  breed = "",
  gender = "",
  color = "",
  location = "",
  page = 1,
  limit = 20,
}) {
  return useQuery({
    queryKey: ["dogs", type, breed, gender, color,location, page],
    queryFn: () => searchDogs({ type, breed, gender, color, location, page, limit }),
    staleTime: 24 * 60 * 60 * 1000,
    onError: (error) => {
      console.error("Error fetching dogs:", error);
      console.error("Request parameters:", { type, breed, gender, color, location, page });
    },
  });
}

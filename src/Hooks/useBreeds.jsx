import { useQuery } from "@tanstack/react-query";
import { getBreeds } from "../Api/petfinder";

export default function useBreeds(type = "dog") {
  return useQuery({
    queryKey: ["breeds", type],
    queryFn: () => getBreeds(type),
    staleTime: 24 * 60 * 60 * 1000,
  });
}

import { useQuery } from "@tanstack/react-query";
import { getAnimal } from "../Api/petfinder";

export default function useDog(id) {
  return useQuery({
    queryKey: ["dog", id],
    queryFn: () => getAnimal(id),
    enabled: !!id,
    staleTime: 24 * 60 * 60 * 1000,
  });
}

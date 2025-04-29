import { useQuery } from "@tanstack/react-query";
import { searchPets } from "../Api/petfinder";

export default function usePets({ type = "dog", breed = "", location = "" }) {
  return useQuery({
    queryKey: ["pets", type, breed, location],
    queryFn: () => searchPets({ type, breed, location }),
    enabled: !!breed,
  });
}

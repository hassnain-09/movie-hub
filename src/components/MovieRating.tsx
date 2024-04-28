import { Badge } from "@chakra-ui/react";

interface props {
  ratings: number;
}
function MovieRating({ ratings }: props) {
  const color = ratings > 7 ? "green" : ratings > 6 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" padding={1}>
      {ratings.toFixed(1)}
    </Badge>
  );
}

export default MovieRating;

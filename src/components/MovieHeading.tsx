import { Heading } from "@chakra-ui/react";
import { MovieQuery } from "../App";

interface props {
  movieQuery: MovieQuery;
}
function MovieHeading({ movieQuery }: props) {
  return (
    <Heading as="h1" marginBottom={3} padding={3}>
      {(movieQuery.genre?.name || "") +
        " Movies" +
        (movieQuery.country ? " in " + movieQuery.country.english_name : "")}
    </Heading>
  );
}

export default MovieHeading;

import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Genre, Movie } from "../hooks/useMovies";
import GenreIconList from "./GenreIconList";
import MovieRating from "./MovieRating";

interface props {
  movie: Movie;
  genres: Genre[];
}
function MovieCard({ movie, genres }: props) {
  const imageURL = "https://image.tmdb.org/t/p/w400/";

  return (
    <Card borderRadius={10} overflow={"hidden"} width="300px">
      <Image src={imageURL + movie.poster_path} objectFit={"cover"} />
      <CardBody>
        <Heading fontSize="2xl">{movie.original_title}</Heading>
        <HStack justifyContent="space-between">
          <GenreIconList movie={movie} genres={genres} />
          <MovieRating ratings={movie.vote_average} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default MovieCard;

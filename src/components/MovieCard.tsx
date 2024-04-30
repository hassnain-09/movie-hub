import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Genre, Movie } from "../hooks/useMovies";
import GenreIconList from "./GenreIconList";
import MovieRating from "./MovieRating";
import noImage from "../assets/no-image-placeholder.webp";

interface props {
  movie: Movie;
  genres: Genre[];
}
function MovieCard({ movie, genres }: props) {
  const imageURL = "https://image.tmdb.org/t/p/w400/";

  return (
    <Card>
      <Image
        src={(movie.poster_path && imageURL + movie.poster_path) || noImage}
        objectFit="cover"
        height="550px"
      />
      <CardBody>
        <Heading fontSize="2xl" marginBottom={3}>
          {movie.title}
        </Heading>
        <HStack justifyContent="space-between">
          <GenreIconList movie={movie} genres={genres} />
          <MovieRating ratings={movie.vote_average} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default MovieCard;

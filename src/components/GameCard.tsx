import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Genre, Movie } from "../hooks/useMovies";
import GenreIconList from "./GenreIconList";

interface props {
  movie: Movie;
  genres: Genre[];
}
function GameCard({ movie, genres }: props) {
  const baseURL = "https://image.tmdb.org/t/p/w400/";

  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={baseURL + movie.poster_path} objectFit={"cover"} />
      <CardBody>
        <Heading fontSize="2xl">{movie.original_title}</Heading>
        <GenreIconList movie={movie} genres={genres} />
      </CardBody>
    </Card>
  );
}

export default GameCard;

import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useGames";
interface props {
  movie: Movie;
}
function GameCard({ movie }: props) {
  const baseURL = "https://image.tmdb.org/t/p/w400/";
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={baseURL + movie.poster_path} objectFit={"cover"} />
      <CardBody>
        <Heading fontSize="2xl">{movie.original_title}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;

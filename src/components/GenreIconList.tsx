import {
  GiHighPunch,
  GiCircleForest,
  GiBullyMinion,
  GiDeathJuice,
  GiSuspicious,
  GiDaemonSkull,
  GiLovers,
  GiSpaceship,
  GiBattleGear,
  GiWesternHat,
} from "react-icons/gi";
import { FaRegLaughSquint, FaFantasyFlightGames } from "react-icons/fa";
import { PiFilmSlate, PiTelevisionFill } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { RiChatHistoryFill } from "react-icons/ri";
import { SiApplemusic } from "react-icons/si";
import { FaBookTanakh } from "react-icons/fa6";
import { ImConfused2 } from "react-icons/im";
import { Genre, Movie } from "../hooks/useMovies";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
interface props {
  movie: Movie;
  genres: Genre[];
}
export const iconMap: { [key: string]: IconType } = {
  Action: GiHighPunch,
  Adventure: GiCircleForest,
  Animation: GiBullyMinion,
  Comedy: FaRegLaughSquint,
  Crime: GiDeathJuice,
  Documentary: PiFilmSlate,
  Drama: GiSuspicious,
  Family: MdFamilyRestroom,
  Fantasy: FaFantasyFlightGames,
  History: RiChatHistoryFill,
  Horror: GiDaemonSkull,
  Music: SiApplemusic,
  Mystery: FaBookTanakh,
  Romance: GiLovers,
  "Science Fiction": GiSpaceship,
  "TV Movie": PiTelevisionFill,
  Thriller: ImConfused2,
  War: GiBattleGear,
  Western: GiWesternHat,
};
function GenreIconList({ movie, genres }: props) {
  const filteredList = genres.filter((item) =>
    movie.genre_ids.find((obj) => obj === item.id)
  );
  return (
    <HStack marginY={2}>
      {filteredList.map((item) => (
        <Icon
          as={iconMap[item.name]}
          color="gray.500"
          boxSize={5}
          key={item.id}
        />
      ))}
    </HStack>
  );
}

export default GenreIconList;

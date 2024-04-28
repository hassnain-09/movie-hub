import { Button, HStack, Icon, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { iconMap } from "./GenreIconList";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../hooks/useMovies";

interface props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: props) {
  const { data, isLoading } = useGenres();

  return (
    <>
      {isLoading && <GenreListSkeleton></GenreListSkeleton>}
      <List>
        {data.map((item) => (
          <ListItem paddingY={1} key={item.id}>
            <HStack>
              <Icon as={iconMap[item.name]} color="gray.500" boxSize={5} />
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(item)}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;

import { HStack, Icon, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { iconMap } from "./GenreIconList";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList() {
  const { data, isLoading } = useGenres();

  return (
    <>
      {isLoading && <GenreListSkeleton></GenreListSkeleton>}
      <List>
        {data.map((item) => (
          <ListItem paddingY={1} key={item.id}>
            <HStack>
              <Icon as={iconMap[item.name]} color="gray.500" boxSize={5} />
              <Text fontSize="lg">{item.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;

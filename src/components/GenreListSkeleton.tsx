import { HStack, List, ListItem, Skeleton } from "@chakra-ui/react";

function GenreListSkeleton() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 81, 63, 52, 42, 43];
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item} marginBottom={2}>
          <HStack>
            <Skeleton width="32px" height="32px" />
            <Skeleton height="20px" width="170px" variant="text"></Skeleton>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreListSkeleton;

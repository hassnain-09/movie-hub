import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function MovieCardSkeleton() {
  return (
    <Card>
      <Skeleton height="400px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default MovieCardSkeleton;

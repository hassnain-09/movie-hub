import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function MovieCardSkeleton() {
  return (
    <Card>
      <Skeleton width="300px" height="300px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default MovieCardSkeleton;

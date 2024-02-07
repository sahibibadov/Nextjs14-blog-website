import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const AllPostSekelton = () => {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
};

export default AllPostSekelton;

export function CardSkeleton() {
  return (
    <Card className=" space-y-5 p-4 h-[280px]" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-[200px] rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
    </Card>
  );
}

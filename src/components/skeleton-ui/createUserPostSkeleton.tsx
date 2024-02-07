import { Skeleton } from "@nextui-org/react";

export const CreateUserPostSkeletons = () => {
  return (
    <>
      <CreateUserPostSkeleton />
      <CreateUserPostSkeleton />
      <CreateUserPostSkeleton />
      <CreateUserPostSkeleton />
      <CreateUserPostSkeleton />
    </>
  );
};

export const CreateUserPostSkeleton = () => {
  return (
    <div className="w-full flex items-center gap-3">
      <div className="flex-1 flex gap-4 items-center ">
        <Skeleton className=" rounded-full w-12 h-12" />
        <Skeleton className="h-3 flex-1 w-[50%] rounded-lg" />
      </div>
      <div className=" ">
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </div>
  );
};

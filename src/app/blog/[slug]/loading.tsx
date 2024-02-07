import React from "react";

import { Skeleton } from "@nextui-org/react";
import { SkeletonUser } from "@/components/skeleton-ui/skeletonUser";

const LoadingSlug = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
      {/* img */}
      <div className=" md:col-span-2  border border-default-400 dark:border-default-200 shadow-md dark:shadow-default-100 overflow-hidden rounded-3xl h-[350px] md:h-[500px]">
        <Skeleton className="rounded-lg">
          <div className="h-[500px] rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>

      {/* title desc */}
      <div className=" md:col-span-3  flex flex-col gap-7">
        {/* title */}
        <Skeleton className="w-3/5 rounded-lg my-6">
          <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        {/* admin */}
        <SkeletonUser />
        {/* desc */}
        <div className="flex flex-col gap-3">
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
      </div>
    </div>
  );
};

export default LoadingSlug;

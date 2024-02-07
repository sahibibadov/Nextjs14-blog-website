import React, { Suspense } from "react";
import PostUser from "@/components/blog/postUser";
import { getPost } from "@/lib/data";
import { PostProps } from "@/types/types";
import Image from "next/image";
import { SkeletonUser } from "@/components/skeleton-ui/skeletonUser";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const post: PostProps = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post: PostProps = await getPost(slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
      {/* img */}
      <div className=" md:col-span-2     overflow-hidden rounded-3xl h-[350px] md:h-[500px]">
        <Image
          src={post.img || "/noavatar.png"}
          alt={post.title}
          width={500}
          height={500}
          className="object-cover w-full h-[350px] md:w-[500px] md:h-[500px] overflow-hidden"
        />
      </div>

      {/* title desc */}
      <div className=" md:col-span-3  flex flex-col gap-7">
        {/* title */}
        <h2 className="text-3xl text-primary font-extrabold">{post.title}</h2>
        {/* admin */}
        <div className="flex items-start gap-4">
          <Suspense fallback={<SkeletonUser />}>
            <PostUser userId={String(post?.userId)} />
          </Suspense>
          <span className="text-primary text-sm font-light">
            {post.createdAt?.toString()?.slice(4, 16)}
          </span>
        </div>
        {/* desc */}
        <div
          className="text-default-500 html-content"
          dangerouslySetInnerHTML={{ __html: post.desc }}
        />
      </div>
    </div>
  );
};

export default SinglePostPage;

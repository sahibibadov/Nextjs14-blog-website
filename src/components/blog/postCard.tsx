import { Card, CardBody, Image, Link as NextLink } from "@nextui-org/react";
import Link from "next/link";
import { PostProps } from "@/types/types";

const PostCard = ({ post }: { post: PostProps }) => {
  return (
    <Card
      shadow="sm"
      isPressable
      className="border border-default-200 dark:border-default-200 hover:border-primary-200 hover:dark:border-primary-200 bg-white/10 dark:bg-white/5 backdrop-blur-md  transition-all shadow-md dark:shadow-default-100  rounded-2xl"
    >
      <CardBody className="overflow-visible  p-2">
        {/* image */}
        <Image
          shadow="sm"
          radius="md"
          width="100%"
          alt={post.title}
          className="w-full object-cover h-[200px] "
          src={post.img}
        />
        {/* title */}
        <div className="flex justify-between items-center mt-3 gap-1">
          <p className="text-font-bold text-default-500 truncate text-xl flex-1">
            {post.title}
          </p>
          <p className="text-default-500 text-sm text-nowrap">
            {post.createdAt?.toString()?.slice(4, 16)}
          </p>
        </div>
      </CardBody>

      <NextLink
        underline="always"
        showAnchorIcon
        as={Link}
        href={`/blog/${post.slug}`}
        className="text-sm font-semibold text-primary-500 px-2 pb-3"
      >
        Details
      </NextLink>
    </Card>
  );
};
export default PostCard;

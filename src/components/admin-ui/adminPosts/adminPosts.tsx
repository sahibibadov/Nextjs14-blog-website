import { deletePost } from "@/lib/actions";
import { getPosts } from "@/lib/data";
import { PostProps } from "@/types/types";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { RxTrash } from "react-icons/rx";

const AdminPosts = async () => {
  const posts = await getPosts();
  // console.log("posts", posts);

  return (
    <>
      {posts?.map((post: PostProps) => (
        <div key={post?._id} className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src={post?.img || "/noavatar.png"}
              alt={post?.title}
              width={50}
              height={50}
              className="object-cover w-12 h-12 rounded-full"
            />
            <span className="font-bold text-default-700  text-sm md:text-base">
              {post?.title}
            </span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={String(post?._id)} />
            <Button isIconOnly type="submit" variant="light" radius="full">
              <RxTrash size={22} color="red" />
            </Button>
          </form>
        </div>
      ))}
    </>
  );
};

export default AdminPosts;

import { getPosts } from "@/lib/data";
import PostCard from "./postCard";

const AllPosts = async () => {
  const posts = await getPosts();

  return (
    <>
      {posts.reverse().map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
};

export default AllPosts;

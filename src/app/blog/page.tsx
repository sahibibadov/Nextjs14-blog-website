import AllPosts from "@/components/blog/allPosts";
import AllPostSekelton from "@/components/skeleton-ui/allPostSekelton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Blog description",
};

const Blog = () => {
  return (
    <section className="w-full my-5 md:my-10">
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between ">
        <Suspense fallback={<AllPostSekelton />}>
          <AllPosts />
        </Suspense>
      </div>
    </section>
  );
};

export default Blog;

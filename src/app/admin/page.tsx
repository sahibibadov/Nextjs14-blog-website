import AdminPostForm from "@/components/admin-ui/adminPostForm/adminPostForm";
import AdminPosts from "@/components/admin-ui/adminPosts/adminPosts";
import AdminUserForm from "@/components/admin-ui/adminUserForm/adminUserForm";
import AdminUsers from "@/components/admin-ui/adminUsers/adminUsers";
import { CreateUserPostSkeletons } from "@/components/skeleton-ui/createUserPostSkeleton";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Admin Page",
  description: "Admin description",
};
const Admin = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* admin posts */}
      <div className="flex gap-10 flex-col md:flex-row border border-default-100 rounded-2xl shadow-md p-3  bg-white/5 backdrop-blur-md">
        <div className=" flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-primary">Posts</h3>
          <Suspense fallback={<CreateUserPostSkeletons />}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminPostForm userId={String(session?.user?.id)} />
        </div>
      </div>

      {/* admin users */}
      <div className="flex gap-3 md:gap-10 flex-col md:flex-row border border-default-100 rounded-2xl shadow-md p-3  bg-white/5 backdrop-blur-md">
        <div className=" flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-primary">Users</h3>
          <Suspense fallback={<CreateUserPostSkeletons />}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default Admin;

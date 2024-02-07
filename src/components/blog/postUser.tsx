import { getUser } from "@/lib/data";
import { UserProps } from "@/types/types";
import { Skeleton, User } from "@nextui-org/react";

const PostUser = async ({ userId }: { userId: string }) => {
  const user: UserProps = await getUser(userId);

  return (
    <User
      name={user?.username}
      description={user?.isAdmin ? "Admin" : "User"}
      avatarProps={{
        src: user?.img ? user?.img : "/noavatar.jpg",
      }}
    />
  );
};

export default PostUser;

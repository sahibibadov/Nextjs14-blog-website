import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import { UserProps } from "@/types/types";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { RxTrash } from "react-icons/rx";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <>
      {users?.map((user: UserProps) => (
        <div key={user._id} className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src={user?.img || "/noavatar.png"}
              alt={user?.username}
              width={50}
              height={50}
              className="object-cover w-12 h-12 rounded-full"
            />
            <span className="font-bold text-default-700">{user?.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={String(user._id)} />
            <Button isIconOnly type="submit" variant="light" radius="full">
              <RxTrash size={22} color="red" />
            </Button>
          </form>
        </div>
      ))}
    </>
  );
};

export default AdminUsers;

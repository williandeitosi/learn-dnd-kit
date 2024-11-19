import { useState } from "react";
import UserItem from "./UserItem";
import type { User } from "../types";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

const mokyData: User[] = [
  {
    id: 1,
    name: "willian",
    email: "willian@email.com",
  },
  {
    id: 2,
    name: "rafaela",
    email: "rafaela@email.com",
  },
  {
    id: 3,
    name: "doe",
    email: "doe@email.com",
  },
];

const UserList = () => {
  const [userData, setUserData] = useState<User[]>(mokyData);
  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over && active.id !== over.id) {
      setUserData((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  console.log(userData);

  return (
    <div className="max-w-2xl mx-auto grid gap-2 my-10">
      <h2 className="text-2xl font-bold-mb-4">User List</h2>
      <DndContext
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={userData}>
          {userData.map((user) => (
            <UserItem
              email={user.email}
              name={user.name}
              key={`user-item-${user.id}`}
              id={user.id}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default UserList;

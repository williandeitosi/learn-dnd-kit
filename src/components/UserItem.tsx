import { useSortable } from "@dnd-kit/sortable";
import type { User } from "../types";
import { CSS } from "@dnd-kit/utilities";

const UserItem = (props: User) => {
  const { email, id, name } = props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      key={id}
      className="bg-blue-200 p-4 rounded shadow-md flex justify-between"
    >
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <h1>Right</h1>
    </div>
  );
};

export default UserItem;

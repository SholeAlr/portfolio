import { useEffect, useState } from "react";
import Image from "next/image";
import EditTodo from "./EditTodo";

function Done({ todos, deleteTodo, toggleStatus, togglePriority }) {
  const [dones, setDones] = useState([]);

  useEffect(() => {
    const doneTodos = todos.filter((todo) => todo.status === "done");
    setDones(doneTodos);
  }, [todos]);

  return (
    <div>
      {dones.map((eachDone) => {
        const bgColor =
          eachDone.pr === "high"
            ? "text-violet-600"
            : eachDone.pr === "medium"
            ? "text-violet-400"
            : "text-violet-200";
        return (
          <div
            key={eachDone.id}
            className={`flex flex-col mb-2 p-1 rounded-sm ${bgColor} shadow-sm`}
          >
            <p className={"line-through"}>{eachDone.todo}</p>
            <div className='flex flex-row items-center justify-end'>
              <Image
                src={"/images/trash.png"}
                alt='delete'
                height={15}
                width={15}
                onClick={() => deleteTodo(eachDone.id)}
                className=' h-[15px] md:h-[30px] md:w-[30px] aspect-square'
              />
              <EditTodo eachTodo={eachDone} togglePriority={togglePriority} />

              <Image
                src={"/images/done.png"}
                alt='done'
                height={15}
                width={15}
                onClick={() => toggleStatus(eachTodo.id)}
                className='aspect-square h-[15px] md:w-[30px] md:h-[30px]'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Done;

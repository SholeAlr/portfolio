import { useState, useEffect } from "react";
import Image from "next/image";
import EditTodo from "./EditTodo";

function Pendings({ todos, deleteTodo, toggleStatus, togglePriority }) {
  const [pendings, setPendings] = useState([]);

  useEffect(() => {
    const pendingTodos = todos.filter((todo) => todo.status === "pending");
    setPendings(pendingTodos);
  }, [todos]);

  return (
    <div>
      {pendings.map((eachPending) => {
        const bgColor =
          eachPending.pr === "high"
            ? "text-violet-600"
            : eachPending.pr === "medium"
            ? "text-violet-400"
            : "text-violet-200";
        return (
          <div
            key={eachPending.id}
            className={`flex flex-col mb-2 p-1 rounded-sm ${bgColor} shadow-sm`}
          >
            <p>{eachPending.todo}</p>
            <div className='flex flex-row items-center justify-end'>
              <Image
                src={"/images/trash.png"}
                alt='delete'
                height={15}
                width={15}
                onClick={() => deleteTodo(eachTodo.id)}
                className=' h-[15px] md:h-[30px] md:w-[30px] aspect-square'
              />
              <EditTodo
                eachTodo={eachPending}
                togglePriority={togglePriority}
              />
              {eachPending.status === "done" ? (
                <Image
                  src={"/images/done.png"}
                  alt='done'
                  height={15}
                  width={15}
                  onClick={() => toggleStatus(eachPending.id)}
                  className='aspect-square h-[15px] md:w-[30px] md:h-[30px]'
                />
              ) : (
                <Image
                  src={"/images/undone.png"}
                  alt='undone'
                  height={15}
                  width={15}
                  onClick={() => toggleStatus(eachPending.id)}
                  className='aspect-square h-[15px] md:h-[30px] md:w-[30px]'
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pendings;

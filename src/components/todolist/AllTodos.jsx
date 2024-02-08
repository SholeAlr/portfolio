import Image from "next/image";
import EditTodo from "./EditTodo";

function AllTodos({ todos, deleteTodo, toggleStatus, togglePriority }) {
  return (
    <div>
      {todos.map((eachTodo) => {
        const bgColor =
          eachTodo.pr === "high"
            ? "text-violet-600"
            : eachTodo.pr === "medium"
            ? "text-violet-400"
            : "text-violet-200";
        return (
          <div
            key={eachTodo.id}
            className={`flex flex-col mb-2 p-1 rounded-sm ${bgColor} shadow-sm`}
          >
            <p className={eachTodo.status === "done" ? "line-through" : ""}>
              {eachTodo.todo}
            </p>

            <div className='flex flex-row items-center justify-end'>
              <Image
                src={"/images/trash.png"}
                alt='delete'
                height={15}
                width={15}
                onClick={() => deleteTodo(eachTodo.id)}
                className=' h-[15px] md:h-[30px] md:w-[30px] aspect-square'
              />
              <EditTodo eachTodo={eachTodo} togglePriority={togglePriority} />

              {eachTodo.status === "done" ? (
                <Image
                  src={"/images/done.png"}
                  alt='done'
                  height={15}
                  width={15}
                  onClick={() => toggleStatus(eachTodo.id)}
                  className='aspect-square h-[15px] md:w-[30px] md:h-[30px]'
                />
              ) : (
                <Image
                  src={"/images/undone.png"}
                  alt='undone'
                  height={15}
                  width={15}
                  onClick={() => toggleStatus(eachTodo.id)}
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

export default AllTodos;

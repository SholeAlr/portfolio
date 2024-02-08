"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import AllTodos from "@/components/todolist/AllTodos";
import Pendings from "@/components/todolist/Pendings";
import Done from "@/components/todolist/Done";
import JustDoIt from "@/components/todolist/JustDoIt";

function Page() {
  const [insertedTodo, setInsertedTodo] = useState("");
  const [priority, setPriority] = useState("medium");
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const storeTodos = () => {
    setTodos([
      ...todos,
      { todo: insertedTodo, status: "pending", pr: priority, id: uuidv4() },
    ]);
    setInsertedTodo("");
  };

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    toast.success("Saved Successfully on Your Device", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id && todo.status === "pending") {
        return { ...todo, status: "done" };
      } else if (todo.id === id && todo.status === "done") {
        return { ...todo, status: "pending" };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const togglePriority = (id, title, pr) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, id: id, todo: title, pr: pr };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className='flex flex-col p-2 justify-center w-[100%] sm:w-[75%] md:w-[55%] md:text-lg items-center mx-auto'>
      <div className='flex flex-col items-center justify-between w-full'>
        <div className='flex flex-row w-full items-center justify-between mt-2 md:mt-4'>
          <input
            type='text'
            placeholder='type here'
            onChange={(e) => setInsertedTodo(e.target.value)}
            className='border-2 border-purplish w-[90%] rounded-md px-1'
          />
          <Image
            src={"/images/add.png"}
            width={20}
            height={20}
            alt={"add"}
            onClick={storeTodos}
            className='border-2 border-purplish w-[30px] rounded-full p-1'
          />
        </div>
        <div className='flex flex-row w-full items-center justify-between mb-5 mt-2'>
          <select onChange={(e) => setPriority(e.target.value)}>
            <option value={"high"}>High</option>
            <option value={"medium"} selected>
              Medium
            </option>
            <option value={"low"}>Low</option>
          </select>
          <button
            onClick={saveTodos}
            className='bg-purplish text-white w-[90px] h-[35px] rounded-md'
          >
            save
          </button>
        </div>
      </div>
      <div className='w-full'>
        <div className='flex flex-row w-full'>
          <button
            onClick={() => setActiveTab("all")}
            className={
              activeTab === "all"
                ? "w-[100%] h-[45px] border border-purplish md:border-2 bg-purplish text-white rounded-tl-md"
                : "w-[130px] h-[45px] border border-purplish md:border-2 p-1 rounded-tl-md text-purplish"
            }
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={
              activeTab === "pending"
                ? "w-[100%] h-[45px] border border-purplish md:border-2 bg-purplish text-white"
                : "w-[130px] h-[45px] border border-purplish md:border-2 p-1 text-purplish"
            }
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab("done")}
            className={
              activeTab === "done"
                ? "w-[100%] h-[45px] border border-purplish md:border-2 bg-purplish text-white rounded-tr-md"
                : "w-[130px] h-[45px] border border-purplish md:border-2 p-1 rounded-tr-md text-purplish"
            }
          >
            Done
          </button>
        </div>
        <div className='flex flex-col  border border-purplish md:border-2 h-[65vh] overflow-y-scroll py-2 rounded-b-md'>
          {todos.length === 0 ? (
            <JustDoIt />
          ) : activeTab == "all" ? (
            <AllTodos
              todos={todos}
              deleteTodo={deleteTodo}
              toggleStatus={toggleStatus}
              togglePriority={togglePriority}
            />
          ) : activeTab == "pending" ? (
            <Pendings
              todos={todos}
              deleteTodo={deleteTodo}
              toggleStatus={toggleStatus}
              togglePriority={togglePriority}
            />
          ) : (
            <Done
              todos={todos}
              deleteTodo={deleteTodo}
              toggleStatus={toggleStatus}
              togglePriority={togglePriority}
            />
          )}
        </div>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default Page;

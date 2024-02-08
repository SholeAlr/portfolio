import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "200px",
    transform: "translate(-50%, -50%)",
  },
};

function EditTodo({ eachTodo, togglePriority }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [todoTitle, setTodoTitle] = useState(eachTodo.todo);
  const [todoPr, setTodoPr] = useState(eachTodo.pr);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Image
        src={"/images/edit.png"}
        alt='edit'
        height={15}
        width={15}
        onClick={openModal}
        className='aspect-square h-[15px] md:w-[25px] md:h-[25px]'
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2 className='w-full bg-purplish text-white h-[45px] text-center p-3'>
          Edit Todo{" "}
        </h2>
        <form className='mt-2 flex flex-col'>
          <input
            type={"text"}
            placeholder={eachTodo.todo}
            onChange={(e) => {
              setTodoTitle(e.target.value);
            }}
            className='border border-purplish sm:w-[400px] md:w-[600px] rounded-md px-2'
          />
          <select
            defaultValue={eachTodo.pr}
            onChange={(e) => {
              setTodoPr(e.target.value);
            }}
            className='mt-2 w-[100px]'
          >
            <option value={"high"}>High</option>
            <option value={"medium"}>Medium</option>
            <option value={"low"}>Low</option>
          </select>
          <button
            onClick={() => {
              closeModal();
              togglePriority(eachTodo.id, todoTitle, todoPr);
            }}
            className='bg-yellowish mt-2 p-2 w-[150px] mx-auto border rounded-md shadow-md'
          >
            Save
          </button>
        </form>
      </Modal>
    </>
  );
}

export default EditTodo;

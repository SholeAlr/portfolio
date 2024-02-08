import React, { useRef, useState } from "react";
import Image from "next/image";

function ContactModal() {
  const [copySuccess, setCopySuccess] = useState("");

  return (
    <>
      <button
        className='btn btn-sm sm:btn bg-yellowish border border-black '
        onClick={() => {
          window.my_modal_1.showModal();
        }}
      >
        Contact Me!
      </button>
      <dialog id='my_modal_1' className='modal'>
        <form method='dialog' className='modal-box'>
          <div className='flex flex-col justify-around sm:flex-row sm:items-center'>
            <h3 className='font-bold text-lg text-left'>Email:</h3>
            <div className='flex flex-row justify-between sm:w-[80%]'>
              <p className='py-4 text-left '>sholeh.alirezaei@protonmail.com</p>

              <Image
                src={"/images/copy.svg"}
                width={20}
                height={20}
                alt={"copy"}
                onClick={() => {
                  navigator.clipboard.writeText("alirezaei.shole@gmail.com");
                  setCopySuccess("Copied!");
                }}
              />
            </div>
          </div>
          <div className='text-green-600 text-right'>{copySuccess}</div>

          <div className='modal-action'>
            <button className='btn' onClick={() => setCopySuccess("")}>
              Thank you
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default ContactModal;

import React from "react";
import Image from "next/image";

function JustDoIt() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Image
        className='mt-[10vh] md:w-[200px] md:h-[200px]'
        src={"/images/nike.png"}
        height={20}
        width={60}
        alt='nike'
      />
      <div className='md:text-2xl'>just do it!</div>
    </div>
  );
}

export default JustDoIt;

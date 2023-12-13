"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function Introduction() {
  return (
    <div className='w-full h-full flex flex-col items-center bg-white'>
      <div className='flex flex-col bg-base-100 my-auto md:mt-[150px] lg:w-[85%] text-center'>
        <h1 className='flex p-4 m-4 text-4xl sm:text-8xl mx-auto text-purplish'>
          Hey! Welcome!
        </h1>
        <div className='flex flex-col justify-between items-center text-center text-sm p-4 w-full h-[50%] text-slate-500 '>
          <TypeAnimation
            sequence={[
              "I'm Shole Alirezaei. I'm a front-end developer with more than 4 years of experience in leadership.\nI'm passionate about learning new technologies and developing responsive, user friendly web applications :)",
              2000,
            ]}
            wrapper='span'
            speed={50}
            style={{
              fontSize: "1em",
              display: "inline-block",
              whiteSpace: "pre-line",
            }}
          />
          <div className=' m-5 border border-y-neutral-800 border-x-white w-full h-[40px] flex text-center justify-center items-center text-black'>
            <h3>Get to know me</h3>
          </div>

          <div className='flex flex-row justify-between w-full'>
            <a href='./Shole_Alirezaei.pdf' download='Shole_Alirezaei_CV.pdf'>
              <button className='btn btn-outline btn-primary'>Resume</button>
            </a>
            <Link href='/my-journey'>
              <button className='btn btn-outline btn-primary'>
                My Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;

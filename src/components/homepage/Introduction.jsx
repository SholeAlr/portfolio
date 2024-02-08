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
              "I'm Shole Alirezaei, a Front-End Developer with a knack for crafting user-friendly, responsive web apps.\n As a leader with over 4 years in the field, I thrive on learning and applying new technologies to create seamless digital experiences.",
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
            {/* <a href='./Shole_Alirezaei.pdf' download='Shole_Alirezaei_CV.pdf'>
              <button className='btn btn-outline btn-primary'>Resume</button>
            </a> */}

            <Link href='/projects'>
              <button className='btn btn-outline btn-primary'>Projects</button>
            </Link>

            <Link href='/three-dimentional'>
              <button className='btn btn-outline btn-primary'>3D Models</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;

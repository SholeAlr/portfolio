import Image from "next/image";
import { AboutMe } from "./components";

export default function Home() {
  return (
    <div className='flex flex-col gap-y-8'>
      <section>
        <div className='flex flex-col items-center space-y-4 pt-8 text-center'>
          <Image
            src='/images/avatar.png'
            alt='avatar'
            width='260'
            height='260'
            className='rounded-full overflow-hidden'
          />
          <h1 className='text-4xl font-bold'>Sholeh Alirezaei</h1>
          <p className='text-xl text-base-content/80'>
            Senior Full Stack Developer
          </p>
          <AboutMe />
        </div>
      </section>
    </div>
  );
}

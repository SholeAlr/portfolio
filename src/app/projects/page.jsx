import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function page() {
  <Head>
    <link rel='icon' href='/favicon.ico' />
    <title>Projects</title>
  </Head>;
  return (
    <div className='w-full h-[91vh] grid md:grid-cols-5 p-2 justify-center bg-purplish'>
      <Link href='/projects/weather-forecast'>
        <div className='bg-white aspect-square h-[220px] rounded-md flex justify-center items-center flex-col'>
          <div className=' p-2'>
            <Image
              src={"/images/cloud.png"}
              width={100}
              height={100}
              className='w-full h-full'
              alt='weather app'
            />
          </div>
          <p className=''>Weather Forecast</p>
        </div>
      </Link>
      <Link href='/projects/todolist'>
        <div className='bg-white aspect-square h-[220px] rounded-md flex justify-center items-center flex-col'>
          <div className=' p-2'>
            <Image
              src={"/images/checklist.webp"}
              width={100}
              height={100}
              className='w-full h-full'
              alt='todo list'
            />
          </div>
          <p className=''>Todo List</p>
        </div>
      </Link>
    </div>
  );
}

export default page;

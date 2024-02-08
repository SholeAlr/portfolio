"use client";

import Image from "next/image";
import ContactModal from "./ContactModal";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow z-30 sticky flex flex-row justify-between'>
      <div className=' flex justify-around w-[150px]'>
        <Link href='/'>
          <Image src={"/images/home.svg"} width={30} height={30} alt={"home"} />
        </Link>

        <Image
          width={50}
          height={50}
          src={"/images/AvatarMaker.svg"}
          className='border border-black rounded-full mx-2'
          alt='me'
        />
        <p className='text-sm font-bubble'>Sholeh Alirezaei</p>
      </div>
      <div className='navbar-end'>
        <ContactModal />
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import { FaEnvelope, FaHamburger } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { useToggleMenu } from "./hooks/useToggleMenu";
import { MENU_LINKS } from "./constant";
import Link from "next/link";

export const Header = () => {
  const { isMenuOpen, handleToggleMenu } = useToggleMenu();
  return (
    <div className='relative z-50'>
      <div className='sticky bg-mist-800 h-14 p-2 flex flex-row justify-between items-center border-b border-b-mist-500'>
        <FaHamburger
          className='size-6  text-pink-600 cursor-pointer'
          onClick={handleToggleMenu}
        />
        <div className='flex flex-row gap-2'>
          <Link
            href='https://drive.google.com/file/d/1aGW2zeePHnz2fsBRzSQzX2sNk84cmncG/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IoIosCloudDownload className='size-6 text-mist-200' />
          </Link>

          <Link href='/contact'>
            <FaEnvelope className='size-6 text-mist-200' />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className='absolute w-full flex flex-col bg-pink-600 text-mist-800 font-bold sm:w-64 sm:h-screen'>
          {MENU_LINKS.map((link) => (
            <Link
              key={link.id}
              className='hover:bg-mist-800 hover:text-mist-200 p-2 sm:p-4'
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

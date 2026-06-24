import { FaEnvelope, FaHamburger } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";

export const Header = () => {
  return (
    <div className='bg-mist-800 h-14 p-2 flex flex-row justify-between items-center border-b border-b-mist-500'>
      <FaHamburger className='size-6 text-mist-200' />
      <div className='flex flex-row gap-2'>
        <IoIosCloudDownload className='size-6 text-rose-500' />
        <FaEnvelope className='size-6 text-mist-200' />
      </div>
    </div>
  );
};

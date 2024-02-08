import Image from "next/image";

function Design() {
  return (
    <div className='w-[30%] relative bg-purplish h-full'>
      <Image
        width={90}
        height={90}
        src={"/images/AvatarMaker.svg"}
        className='border border-black rounded-full absolute 
        left-[-35px] top-[2%] sm:left-[-45px] md:left-[-85px] 
        lg:left-[-115px] md:w-[170px] md:h-[170px] 
        lg:w-[230px] lg:h-[230px]'
        alt='me'
      />
    </div>
  );
}

export default Design;

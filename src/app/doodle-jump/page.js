import Score from "@/components/doodleJump/Score";
import Body from "@/components/doodleJump/Body";

function page() {
  return (
    <div className='flex flex-col h-[91vh] w-full doodle-bg items-center'>
      <Score />
      <Body />
    </div>
  );
}

export default page;

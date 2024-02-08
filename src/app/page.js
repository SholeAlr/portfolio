import Introduction from "@/components/homepage/Introduction";
import Design from "@/components/homepage/Design";

export default function Home() {
  return (
    <div className='flex flex-row items-center justify-between h-[90vh]'>
      <Introduction />
      <Design />
    </div>
  );
}

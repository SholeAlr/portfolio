import Image from "next/image";
import { AboutMe, Button, IconButton } from "../components";
import { socials } from "@/constants/socials";
import { MyDesk } from "@/components/Home/MyDesk";

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
          <p className='pt-4 w-full md:max-w-lg text-base-content/80 border-t border-mist-400'>
            Currently open to remote opportunities.
          </p>

          <div className='flex gap-4'>
            <Button href='contact'>Contact Me</Button>
            <Button
              variant='secondary'
              href='https://drive.google.com/file/d/1aGW2zeePHnz2fsBRzSQzX2sNk84cmncG/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download Resume
            </Button>
          </div>

          <div className='mt-2 flex items-center justify-center gap-4'>
            {socials.map((social) => (
              <IconButton
                key={social.name}
                icon={social.icon}
                href={social.href}
                ariaLabel={social.name}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='flex flex-col gap-y-4'>
          <MyDesk />
        </div>
      </section>
    </div>
  );
}

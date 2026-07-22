"use client";

import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <p className='max-w-3xl text leading-8 text-gray-300'>
      I&apos;m a Full-Stack Developer with{" "}
      <span className='font-bold text-white'>7+ years</span> of turning{" "}
      <span className='text-amber-400 font-semibold inline-block'>
        coffee ☕
      </span>{" "}
      into scalable web applications. My{" "}
      <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold inline-block cursor-default'>
        happy place
      </span>{" "}
      is somewhere between <span className='text-cyan-400'>React</span>,{" "}
      <span className='text-blue-400'>TypeScript</span>,{" "}
      <span className='text-green-400'>Node.js</span>, and the occasional{" "}
      <span className='text-yellow-400'>Python </span> adventure. I love
      building products from pixel-perfect interfaces all the way down to robust
      backend systems, making sure everything talks nicely through APIs and
      performs like it&apos;s had a{" "}
      <motion.span
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className='text-emerald-400 font-bold inline-block'
      >
        good
      </motion.span>{" "}
      night&apos;s sleep.
      <br />
      <br />
      I&apos;m obsessed with clean{" "}
      <span className='text-orange-400 font-bold inline-block cursor-default'>
        architecture
      </span>
      <motion.span
        whileHover={{ x: [0, 6, -6, 0] }}
        transition={{ duration: 0.4 }}
        className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold inline-block cursor-default'
      >
        , fast experiences
      </motion.span>
      <motion.span
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 400 }}
        className='bg-gradient-to-t from-pink-500 to-cyan-600 bg-clip-text text-transparent font-bold inline-block cursor-default'
      >
        , maintainable code
      </motion.span>
      , and creating products that people actually {/* Enjoy */}
      <motion.span
        whileHover={{
          color: "#facc15",
          textShadow: "0 0 12px rgba(250,204,21,.8)",
        }}
        transition={{ duration: 0.25 }}
        className='text-red-400 font-bold inline-block cursor-default'
      >
        enjoy
      </motion.span>{" "}
      using. If there&apos;s a smarter, cleaner, or more elegant solution,
      I&apos;ll probably spend my{" "}
      <motion.span
        animate={{
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className='bg-gradient-to-r from-indigo-400 via-green-500 to-pink-500 bg-clip-text text-transparent font-black inline-block'
      >
        Friday night
      </motion.span>{" "}
      finding it (voluntarily).
    </p>
  );
};

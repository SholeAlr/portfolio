import { Challenge } from "@/types/challenge";

const challenge: Challenge = {
  type: "output",
  title: "Interview Challenge — Closures",

  description:
    "Without running the code, what will be printed? Write each output on a new line.",

  language: "javascript",

  code: `function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterB());
console.log(counterA());`,

  answer: `1
2
1
3`,

  explanation: `Each call to createCounter() creates a brand new closure.

counterA and counterB do NOT share the same 'count' variable.

counterA remembers its own count.
counterB remembers a completely different count.`,
};

export default challenge;

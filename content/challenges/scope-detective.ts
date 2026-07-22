import type { Challenge } from "@/types/challenge";

const challenge: Challenge = {
  type: "output",

  title: "Interview Challenge — Scope",

  description:
    "Without running the code, what will be printed? Write each output on a new line.",

  language: "javascript",

  code: `let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    console.log(name);

    let name = "Inner";
  }

  inner();
}

outer();`,

  answer: "ReferenceError",

  explanation: `Many developers answer "Outer".

However, because 'let name' exists inside inner(), it shadows the outer variable.

The variable is in the Temporal Dead Zone until it is initialized.

Accessing it before the declaration throws a ReferenceError.`,
};

export default challenge;

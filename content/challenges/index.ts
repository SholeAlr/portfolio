import { Challenge } from "@/types/challenge";

import greeting from "./closures-greeting";
import scopeDetective from "./scope-detective";

export const challenges: Record<string, Challenge> = {
  "closures-greeting": greeting,
  "scope-detective": scopeDetective,
};

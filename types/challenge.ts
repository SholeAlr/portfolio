export interface Challenge {
  type: "fill" | "output";
  title: string;
  description: string;
  code: string;
  answer: string;
  explanation: string;
  language?: string;
}

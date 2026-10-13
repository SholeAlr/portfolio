import { COLUMN_ORDER } from "@/lib/board-status";

export type IconName = "lightbulb" | "search" | "settings" | "check";

export type BoardItem = {
  id: number;
  title: string;
  description: string;
  status: (typeof COLUMN_ORDER)[number];
  createdByType: "owner" | "visitor";
  creatorName: string | null;
  demoUrl: string | null;
  githubUrl: string | null;
  blogUrl: string | null;
  createdAt: string;
  voteCount: number;
};

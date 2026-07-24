import { statusEnum } from "@/db/schema";

export type BoardStatus = (typeof statusEnum.enumValues)[number];

export const COLUMN_ORDER = [
  "suggested",
  "exploring",
  "building",
  "shipped",
] as const;

export const COLUMN_LABELS: Record<(typeof COLUMN_ORDER)[number], string> = {
  suggested: "Suggestions",
  exploring: "Exploring",
  building: "Building",
  shipped: "Shipped",
};

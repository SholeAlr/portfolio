import { COLUMN_ORDER } from "@/lib/board-status";
import { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface BoardColumnProps {
  status: (typeof COLUMN_ORDER)[number];
  meta: {
    icon: IconType;
    description: string;
    buttonLabel: string;
    current?: boolean;
  };
  count: number;
  children: ReactNode;
}

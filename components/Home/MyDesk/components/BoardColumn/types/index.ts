import { COLUMN_ORDER } from "@/lib/board-status";
import { ComponentType, ReactNode } from "react";

export interface BoardColumnProps {
  status: (typeof COLUMN_ORDER)[number];
  meta: {
    icon: ComponentType;
    description: string;
    buttonLabel: string;
    current?: boolean;
  };
  count: number;
  children: ReactNode;
}

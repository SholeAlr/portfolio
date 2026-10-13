import { FaCode, FaDocker, FaFire, FaLightbulb } from "react-icons/fa";

export const STAGE_META = [
  {
    icon: FaLightbulb,
    description:
      "Ideas from the community. Share your thoughts, feature requests, or anything you'd like to see here.",
    countLabel: "ideas",
    buttonLabel: "View all suggestions",
  },
  {
    icon: FaFire,
    description:
      "Evaluating ideas, researching feasibility, and considering how they can add the most value.",
    countLabel: "idea",
    buttonLabel: "View details",
    current: true,
  },
  {
    icon: FaCode,
    description:
      "Ideas that are in active development or being worked on behind the scenes.",
    countLabel: "ideas",
    buttonLabel: "View all in progress",
  },
  {
    icon: FaDocker,
    description:
      "Fully released! These ideas are live and available for everyone to use and enjoy.",
    countLabel: "shipped",
    buttonLabel: "View all shipped",
  },
];

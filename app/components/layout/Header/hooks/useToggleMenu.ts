import { useState } from "react";

export const useToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return { isMenuOpen, handleToggleMenu };
};

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AccessibilityToggle() {
  const [isGlass, setIsGlass] = useState(true);

  const toggleGlass = () => {
    setIsGlass(!isGlass);
    document.documentElement.setAttribute("data-glass", isGlass ? "off" : "on");
  };

  return (
    <Button
      variant="ghost"
      className="glass backdrop-blur rounded-full fixed bottom-4 right-4"
      onClick={toggleGlass}
      aria-label={isGlass ? "Disable glass effect" : "Enable glass effect"}
    >
      {isGlass ? "Disable Glass" : "Enable Glass"}
    </Button>
  );
}
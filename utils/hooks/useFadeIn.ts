import { useEffect, useState } from "react";

export function useFadeIn(isVisible: boolean | undefined) {
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    if (isVisible && opacity === "opacity-0") {
      setOpacity("opacity-100");
    }
  }, [isVisible]);
  return { opacity };
}

import { useState, useEffect } from "react";
import { screenS, screenM, screenB} from "./Constans";

export function durationToHours(duration = 100) {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  return `${hours} ч ${minutes} мин`
}

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = (event) => {
          setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return {
      width,
      isScreenSm: width >= screenS,
      isScreenLg: width >= screenM,
      isScreenXl: width >= screenB,

  };
};
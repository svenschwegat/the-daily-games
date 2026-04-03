import { useEffect } from "react";

export default function useIsMobile(setIsMobile: (isMobile: boolean) => void) {
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
}
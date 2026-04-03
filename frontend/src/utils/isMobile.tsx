export default function isMobileAfterSsr(setIsMobile: (isMobile: boolean) => void) {
  const handleResize = () => setIsMobile(window.innerWidth < 640);
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}
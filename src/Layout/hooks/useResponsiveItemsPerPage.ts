import { useEffect, useState } from "react";

export const useResponsiveItemsPerPage = (mobileCount: number, desktopCount: number): number => {
  const [itemsPerPage, setItemsPerPage] = useState(() => (window.innerWidth < 768 ? mobileCount : desktopCount));

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? mobileCount : desktopCount);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileCount, desktopCount]);

  return itemsPerPage;
};

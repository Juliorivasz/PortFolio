import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "../../../helpers/timeLineData";
import TimelineNavigationButton from "./TimeLine/TimeLineNavigationButton";
import TimelineCard from "./TimeLine/TimeLineCard";
import TimelineDots from "./TimeLine/TimeLineDots";

const variants = {
  enter: (direction: number) => ({ y: direction > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
  center: { y: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ y: direction > 0 ? -100 : 100, opacity: 0, scale: 0.95 }),
};

export default function TimelineRuleta() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showInitialHelp, setShowInitialHelp] = useState(true);

  const paginate = useCallback(
    (dir: number) => {
      if (isScrolling) return;
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 500);
      setDirection(dir);
      setIndex((prev) => {
        const nextIndex = dir === 1 ? Math.min(prev + 1, timelineData.length - 1) : Math.max(prev - 1, 0);
        if (nextIndex !== 0) setShowInitialHelp(false);
        return nextIndex;
      });
    },
    [isScrolling],
  );

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY > 0 && index < timelineData.length - 1) paginate(1);
    else if (e.deltaY < 0 && index > 0) paginate(-1);
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const isDesktop = window.innerWidth >= 1470;

    if (isDesktop && index !== timelineData.length - 1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [index]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section>
      <div className="text-center md:text-left pb-8">
        <div
          onWheel={handleWheel}
          className="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-8 min-h-[420px] overflow-hidden relative sm:px-6 md:px-10 lg:px-16">
          <TimelineNavigationButton
            direction="left"
            onClick={() => paginate(-1)}
            disabled={index === 0}
          />

          <AnimatePresence
            custom={direction}
            mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}>
              <TimelineCard
                date={timelineData[index].date}
                title={timelineData[index].title}
                description={timelineData[index].description}
                showInitialHelp={showInitialHelp}
              />
            </motion.div>
          </AnimatePresence>

          <TimelineNavigationButton
            direction="right"
            onClick={() => paginate(1)}
            disabled={index === timelineData.length - 1}
          />
        </div>

        <TimelineDots
          currentIndex={index}
          total={timelineData.length}
        />
      </div>
    </section>
  );
}

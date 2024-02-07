"use client";
import CountUp from "react-countup";
type CountProp = {
  start: number;
  end: number;
  duration: number;
};
const Countup = ({ start, end, duration }: CountProp) => {
  return (
    <CountUp start={start} end={end} duration={duration} delay={0.3}>
      {({ countUpRef, start }) => <span ref={countUpRef} />}
    </CountUp>
  );
};

export default Countup;

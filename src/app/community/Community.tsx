'use client';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CommPage = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });

  const [start1, setStart1] = useState(false);
  const [start2, setStart2] = useState(false);

  useEffect(() => {
    if (inView1) {
      setStart1(false); // reset
      setTimeout(() => setStart1(true), 50); // retrigger
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setStart2(false);
      setTimeout(() => setStart2(true), 50);
    }
  }, [inView2]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-16 py-10 bg-black min-h-screen space-y-8 md:space-y-0">
      
      {/* Left Section */}
      <div className="w-full md:w-2/3 space-y-5">
        <p className="text-sm font-thin tracking-wider text-white/40">
          COMMUNITY-OWNED AND OPERATED
        </p>

        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Enter a new Universe of connected services
        </p>

        <p className="text-sm font-thin tracking-wider text-white/40 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eveniet, nesciunt suscipit, totam temporibus corrupti deserunt dolorum excepturi nobis commodi aperiam culpa tempore. Enim vitae aliquam omnis voluptatibus exercitationem atque.
        </p>

        <p className="text-sm font-thin tracking-wider text-white/40 leading-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea tempore quae eaque animi numquam, accusamus ad placeat reiciendis recusandae cum corporis ullam aliquam dolore rerum voluptate debitis aspernatur est.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button className="border border-white font-semibold py-2 px-4 hover:bg-white hover:text-black transition">
            Learn more
          </button>
          <button className="border border-white font-semibold py-2 px-4 hover:bg-white hover:text-black transition">
            Explore tokens
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 text-white text-center space-y-10">
        <div ref={ref1}>
          <p className="text-5xl md:text-6xl font-bold">
            {start1 ? <CountUp end={249} duration={1} /> : 0}
            <span className="text-base">+</span>
          </p>
          <p className="text-xs font-thin tracking-wider text-white/40">
            App and services growing
          </p>
        </div>

        <div ref={ref2}>
          <p className="text-4xl md:text-5xl font-bold">
            <span>$</span>
            {start2 ? <CountUp end={116} duration={1} /> : 0}B
            <span className="text-base">+</span>
          </p>
          <p className="text-xs font-thin tracking-wider text-white/40">
            Digital assets under management
          </p>
        </div>
      </div>

      {/* hub */}
      
    </div>
  );
};

export default CommPage;

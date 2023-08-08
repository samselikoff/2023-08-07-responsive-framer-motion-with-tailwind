"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, useState } from "react";

export default function Home() {
  let [open, setOpen] = useState(false);
  return (
    <div className="mt-48">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 bg-blue-500 text-white rounded"
      >
        Click
      </button>

      {/* <div className="mt-8 [--opacity-start:0%] [--opacity-end:100%] [--scale-start:0.8] [--scale-end:1]" style={{ */}
      <div
        className="mt-8
          [--opacity-start:0%] [--opacity-end:100%]
          md:[--opacity-start:100%] md:[--opacity-end:100%]
          [--x-start:0px] [--x-end:0px]
          md:[--x-start:100px] md:[--x-end:0px]
        "
        style={
          {
            "--scale-start": 1,
            "--scale-start-string": "'1'",
            "--scale-end": 0,
            // "--x-start": "100px",
            // "--x-end": "0px",
          } as CSSProperties
        }
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                // opacity: "var(--opacity-start)",
                // scale: "var(--scale-start)",
                scale: "0%",
                // x: "var(--x-start)",
                // scale: 0,
              }}
              animate={{
                // opacity: "var(--opacity-end)",
                // scale: "var(--scale-end)",
                scale: "100%",
                // x: "var(--x-end)",
                // scale: 1,
              }}
              exit={{
                // opacity: "var(--opacity-start)",
                // scale: "var(--scale-start)",
                scale: "0%",
                // x: "var(--x-start)",
                // scale: 0,
              }}
              className="w-10 h-10 bg-green-500"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

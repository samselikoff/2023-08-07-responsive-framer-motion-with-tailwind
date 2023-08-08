"use client";

import { Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle</button>

      <MotionConfig
        transition={{ type: "spring", bounce: 0.2, duration: open ? 0.6 : 0.3 }}
      >
        <AnimatePresence initial={false}>
          {open && (
            <Dialog
              as={motion.div}
              initial="closed"
              animate="open"
              exit="closed"
              static
              className="relative z-10"
              open={open}
              onClose={setOpen}
            >
              <motion.div
                variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
                className="fixed inset-0 bg-gray-500 bg-opacity-75"
              />
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Dialog.Panel
                    as={motion.div}
                    variants={{
                      closed: {
                        y: "var(--y-closed, 0)",
                        opacity: "var(--opacity-closed)",
                        scale: "var(--scale-closed, 1)",
                      },
                      open: {
                        y: "var(--y-open, 0)",
                        opacity: "var(--opacity-open)",
                        scale: "var(--scale-open, 1)",
                      },
                    }}
                    className="
                      relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6
                      max-sm:[--y-closed:16px] [--opacity-closed:0%] sm:[--scale-closed:80%]
                      max-sm:[--y-open:0px] [--opacity-open:100%] sm:[--scale-open:100%]
                    "
                  >
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Payment successful
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur amet labore.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => setOpen(false)}
                      >
                        Go back to dashboard
                      </button>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}

"use client";

import { Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { CSSProperties, useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="mt-8">
        <button
          className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto"
          onClick={() => setOpen(!open)}
        >
          Toggle
        </button>
      </div>

      <MotionConfig
        transition={{ type: "spring", bounce: 0.3, duration: open ? 0.7 : 0.4 }}
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
                        opacity: "var(--opacity-from)",
                        scale: "var(--scale-from, 1)",
                        y: "var(--y-from, 0px)",
                      },
                      open: {
                        opacity: "var(--opacity-to)",
                        scale: "var(--scale-to, 1)",
                        y: "var(--y-to, 0px)",
                      },
                    }}
                    className="relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6
                      max-sm:[--y-from:16px] sm:[--scale-from:80%] [--opacity-from:0%]
                      max-sm:[--y-to:0px] sm:[--scale-to:100%] [--opacity-to:100%]
                    "
                  >
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Subscription confirmed
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat deserunt ea voluptate vel aliquam!
                            Quas, eum magnam nobis, necessitatibus quos natus
                            labore quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Dismiss
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

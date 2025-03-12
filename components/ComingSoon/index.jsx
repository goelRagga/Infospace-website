"use client";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export const metadata = {
  title: "Infospace Business - Coming Soon",
};

export default function ComingSoon() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  function handleWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    handleWindowSize();
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  useEffect(() => {
    if (windowSize.width) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [windowSize]);

  const handleSubscribe = () => {
    if (email.trim()) {
      toast.success(`Thank you for subscribing!`);
      setEmail("");
      setShowConfetti(true);
      setShowInput(false);
      const timer = setTimeout(() => setShowConfetti(false), 8000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        src="/images/videos/landingVideo.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex h-full w-full items-center justify-center">
        <div className="w-full text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 text-[68px] font-bold tracking-widest md:mb-20 md:text-[95px]"
            style={{ letterSpacing: "0.2em" }}
          >
            COMING
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-16  text-[68px]  font-bold tracking-widest md:text-[95px]"
            style={{ letterSpacing: "0.2em" }}
          >
            SOON
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-6 text-xl"
          >
            We will be celebrating the launch of our new site very soon!
          </motion.p>

          {showInput ? (
            <div className="flex items-center justify-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="rounded-md px-4 py-2 text-black focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="rounded-md bg-blue-600 px-6 py-2 font-bold text-white hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              onClick={() => setShowInput(true)}
              className="mt-4 rounded-md bg-blue-600 px-6 py-2 font-bold text-white hover:bg-blue-700"
            >
              Notify Me
            </motion.button>
          )}
        </div>
      </div>
    </main>
  );
}

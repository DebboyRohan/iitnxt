"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconLock,
  IconKey,
  IconFingerprint,
  IconShieldLock,
} from "@tabler/icons-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden p-5">
      {/* Floating Security Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              opacity: 0,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.3, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              },
            }}
          />
        ))}
      </div>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-700/50 overflow-hidden"
      >
        {/* Security Shield Background */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.1 }}
          animate={{ scale: 1.2, opacity: 0.05 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <IconShieldLock className="w-64 h-64 text-blue-400" />
        </motion.div>

        {/* Header with Animated Lock */}
        <div className="flex flex-col items-center mb-8 relative z-10">
          <motion.div
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <IconLock className="w-12 h-12 text-blue-400 mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-1">Secure Access</h2>
          <p className="text-gray-400">Authenticate to continue</p>
        </div>

        {/* Email Input with Key Animation */}
        <div className="mb-6 relative">
          <motion.div
            className="absolute left-3 top-1/2 -translate-y-1/2"
            animate={{
              x: isFocused.email ? [-5, 5, -5] : [0],
              transition: isFocused.email
                ? { duration: 2, repeat: Infinity }
                : { duration: 0.3 },
            }}
          >
            <IconKey className="w-5 h-5 text-blue-400" />
          </motion.div>
          <input
            type="email"
            placeholder="Access ID"
            className="w-full pl-10 pr-4 py-3 text-white bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused({ ...isFocused, email: true })}
            onBlur={() => setIsFocused({ ...isFocused, email: false })}
          />
        </div>

        {/* Password Input with Fingerprint Animation */}
        <div className="mb-8 relative">
          <motion.div
            className="absolute left-3 top-1/2 -translate-y-1/2"
            animate={{
              scale: isFocused.password ? [1, 1.1, 1] : [1],
              transition: isFocused.password
                ? { duration: 1.5, repeat: Infinity }
                : { duration: 0.3 },
            }}
          >
            <IconFingerprint className="w-5 h-5 text-blue-400" />
          </motion.div>
          <input
            type="password"
            placeholder="Encryption Key"
            className="w-full pl-10 pr-4 py-3 text-white bg-gray-700/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsFocused({ ...isFocused, password: true })}
            onBlur={() => setIsFocused({ ...isFocused, password: false })}
          />
        </div>

        {/* Login Button with Hover Effect */}
        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)",
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-xl shadow-lg relative overflow-hidden"
        >
          {/* Button Shine Effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white/10"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
            <IconLock className="w-5 h-5" />
            Decrypt & Access
          </span>
        </motion.button>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center mt-6 text-xs text-gray-400"
        >
          <IconShieldLock className="w-4 h-4 mr-2 text-green-400" />
          <span>256-bit End-to-End Encryption</span>
        </motion.div>

        {/* Animated Connection Lines */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-t border-l border-blue-400/20 rounded-full"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: Math.random() * 100 - 50 + "%",
                top: Math.random() * 100 - 50 + "%",
                rotate: Math.random() * 360,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                },
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

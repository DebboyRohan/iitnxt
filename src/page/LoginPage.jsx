import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent mx-5">
      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-xl p-8 w-96 border border-white/40"
      >
        {/* Floating AI Glow */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-50"></div>

        {/* Login Header */}
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-6">Log in to your account</p>

        {/* Email Input */}
        <motion.div
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="relative mb-4"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>

        {/* Password Input */}
        <motion.div
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="relative mb-4"
        >
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>

        {/* Login Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 4px 20px rgba(0, 0, 255, 0.4)",
          }}
          transition={{ duration: 0.2 }}
          className="w-full py-3 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-md transition-all hover:shadow-lg"
        >
          Log In
        </motion.button>

        {/* AI-Themed Animation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-70"></div>
      </motion.div>
    </div>
  );
}

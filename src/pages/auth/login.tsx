"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex min-h-screen">
      {/* Section gauche - Sign in */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-sky-500">
            Sign in to F-Capital
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Sign in to manage your account!
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md bg-pink-50 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md bg-pink-50 focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Button */}
            <Link to="/dashboard">
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition"
              >
                SIGN IN
              </button>
            </Link>
          </form>
        </div>
      </div>

      {/* Section droite - Sign up */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-b from-sky-400 to-sky-500 items-center justify-center text-white p-10 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Hello, Friend!</h2>
          <p className="mt-3 mb-6 text-white/90">
            Enter your personal details and start journey with us
          </p>
          <Link to="/dashboard">
            <button className="px-8 py-2 border border-white rounded-full hover:bg-white hover:text-sky-500 transition">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

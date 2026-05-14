"use client";

import React, { useState } from "react";
import { Button, Input, Link } from "@heroui/react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: user.name, // required
      email: user.email, // required
      password: user.password, // required
    });

    if(data?.user){
        toast.success("Account created successfully!");
        redirect('/')
    } else {
        toast.error("Failed to create account.");
    }
    // console.log(data);
    console.log("Sign Up Data:", data, error);
  };

   // social Login 
    const handleSocialLogin = async () => {
       const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-4xl bg-gray-50 py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-serif text-gray-800 mb-3">
          Create Account
        </h1>
        <p className="text-gray-500 text-lg">
          Start your adventure with Wanderlust
        </p>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-[500px] bg-white p-10 rounded-4xl shadow-2xl border border-gray-100">
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-6  rounded-[2.5rem]"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">Full Name</label>
            <Input
              name="name"
              placeholder="Enter your name"
              variant="bordered"
              radius="none"
              className="bg-gray-50/50"
              //   startContent={<User className="text-gray-400" size={18} />}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">
              Email Address
            </label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              variant="bordered"
              radius="none"
              className="bg-gray-50/50"
              //   startContent={<Mail className="text-gray-400" size={18} />}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">Password</label>
            <Input
              name="password"
              placeholder="Create a password"
              variant="bordered"
              radius="none"
              className="bg-gray-50/50"
             type="password"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">
              Confirm Password
            </label>
            <Input
              name="confirmPassword"
              placeholder="Confirm your password"
              variant="bordered"
              radius="none"
              className="bg-gray-50/50"
              type="password"
              //   startContent={<Lock className="text-gray-400" size={18} />}
            />
          </div>

          {/* Sign Up Button */}
          <Button
            type="submit"
            className="w-full bg-[#17a2b8] hover:bg-[#138496] text-white font-bold py-7 text-lg rounded-4xl transition-all"
          >
            Create Account
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-gray-400 text-sm font-medium">
              Or sign up with
            </span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
            <Button
            onClick={handleSocialLogin}
              className="w-full border-gray-200 font-bold"
              variant="bordered"
              radius="xl"
            >
              {/* Google Icon SVG সরাসরি ব্যবহার করা হয়েছে এরর এড়াতে */}
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-500 font-medium">
            Already have an account?{" "}
            <Link href="/login" className="text-[#17a2b8] font-bold">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

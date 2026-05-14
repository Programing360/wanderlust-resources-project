"use client";

import React, { useState } from "react";
// Hero UI থেকে প্রয়োজনীয় কম্পোনেন্ট ইমপোর্ট
import {
  Button,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Link,
  TextField,
} from "@heroui/react";
// Lucide icons
import { Check, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Login Data:", data);
    const { data: user, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (user) {
      toast.success("User Login Successful");
      redirect("/");
    } else {
      toast.error("Login Failed. Please try again.");
    }
  };

  // social Login
  const handleSocialLogin = async () => {
    const { data } = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
    if (data) {
      toast.success('Login Successful')
      redirect('/')
    } else {
      toast.error('Login Failed. Please try again.')
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="flex flex-col w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Please enter your details to sign in
          </p>
        </div>

        {/* Form */}
        {/* <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            labelPlacement="outside" // লেবেল বাইরে রাখার জন্য এটি জরুরি
            variant="bordered"
            radius="lg"
            startContent={<Mail className="text-gray-400 shrink-0" size={18} />}
            required
          />

          <Input
            name="password"
            label="Password"
            placeholder="Enter your password"
            labelPlacement="outside"
            variant="bordered"
            radius="lg"
            type={isVisible ? "text" : "password"}
            startContent={<Lock className="text-gray-400 shrink-0" size={18} />}
            endContent={
              <button
                className="focus:outline-none flex items-center justify-center"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeOff className="text-gray-400 pointer-events-none" size={20} />
                ) : (
                  <Eye className="text-gray-400 pointer-events-none" size={20} />
                )}
              </button>
            }
            required
          />

          <div className="flex justify-between items-center px-1">
            <Checkbox name="remember" size="sm" color="secondary">
              Remember me
            </Checkbox>
            <Link color="primary" href="#" size="sm" className="font-bold">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            color="secondary"
            className="w-full font-black py-6 text-lg shadow-lg shadow-purple-200 mt-2"
            radius="xl"
          >
            Sign In
          </Button>
        </form> */}
        <Form
          className="flex flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={handleSubmit}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <Button
            type="submit"
            className="w-full bg-[#17a2b8] hover:bg-[#138496] text-white font-bold py-7 text-lg rounded-4xl transition-all"
          >
            Sign In
          </Button>
        </Form>

        {/* Social Login Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
            OR
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

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account?
          <Link href="/signUp" size="sm" className="font-black text-purple-600">
            Sign Up for free
          </Link>
        </p>
      </div>
    </div>
  );
}

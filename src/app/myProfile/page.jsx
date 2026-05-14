"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Avatar } from "@heroui/react";
import {
  MapPin,
  Edit3,
  Camera,
  Plane,
  Globe,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const [location, setLocation] = useState("Loading...");
  // ডেট ফরম্যাট করার ফাংশন (যেমন: May 2026)
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetch("https://ipapi.co/json/") // এটি একটি ফ্রি API যা ইউজারের দেশ বলে দেয়
      .then((res) => res.json())
      .then((data) => setLocation(`${data.city}, ${data.country_name}`))
      .catch(() => setLocation("Bangladesh"));
  }, []);

  console.log(session);
  const userInitial = session?.user?.name
    ? session.user.name.charAt(0).toUpperCase()
    : "U";
  const stats = [
    {
      title: "Total Bookings",
      value: "12",
      icon: <Plane className="text-cyan-500" size={20} />,
      bgColor: "bg-cyan-50",
    },
    {
      title: "Countries Visited",
      value: "18",
      icon: <Globe className="text-green-500" size={20} />,
      bgColor: "bg-green-50",
    },
    {
      title: "Upcoming Trips",
      value: "2",
      icon: <TrendingUp className="text-orange-500" size={20} />,
      bgColor: "bg-orange-50",
    },
    {
      title: "Total Spent",
      value: "$15,750",
      icon: <DollarSign className="text-purple-500" size={20} />,
      bgColor: "bg-purple-50",
    },
  ];

  if (isPending)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-12 bg-white min-h-screen">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-5xl font-serif text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-500 text-lg">
          Manage your account settings and travel preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Profile Card */}
        <div className="lg:col-span-4">
          <Card className="border border-gray-100 shadow-sm rounded-none p-6">
            <div className="flex flex-col items-center py-8">
              {/* Profile Image with Camera Icon */}
              <div className="relative mb-6">
                {session?.user?.image ? (
                  <Avatar
                    src={
                      session?.user?.image ||
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
                    }
                    className="w-40 h-40 text-large border-4 border-white shadow-sm"
                    showfallback="true"
                    name={session?.user?.name?.charAt(0)}
                  />
                ) : (
                  <Avatar className="size-36">
                    <Avatar.Fallback className="bg-cyan-400  w-400 h-40 text-5xl  border-white shadow-sm">
                      {userInitial}
                    </Avatar.Fallback>
                  </Avatar>
                )}

                <div className="absolute bottom-1 right-1 bg-cyan-500 p-2 rounded-full border-4 border-white text-white cursor-pointer hover:bg-cyan-600 transition-colors">
                  <Camera size={18} />
                </div>
              </div>

              {/* Dynamic User Name */}
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {session?.user?.name || "Guest User"}
              </h2>
              <div className="flex items-center gap-1 text-gray-400 mb-8">
                <MapPin size={16} />
                <span className="text-sm">
                  {location || "Unknown Location"}
                </span>
              </div>

              {/* Membership Info with Dynamic Data */}
              <div className="w-full space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Member since</span>
                  <span className="font-bold text-gray-900">
                    {formatDate(session?.user?.createdAt)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Email Status</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-bold ${session?.user?.emailVerified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {session?.user?.emailVerified ? "Verified" : "Unverified"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Email</span>
                  <span className="font-bold text-gray-900 truncate ml-4 text-xs">
                    {session?.user?.email}
                  </span>
                </div>
              </div>

              {/* Edit Button */}
              <Button
                className="w-full bg-[#17a2b8] hover:bg-[#138496] text-white font-bold py-6 rounded-none text-md"
                startContent={<Edit3 size={18} />}
              >
                Edit Profile
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Side: Travel Statistics */}
        <div className="lg:col-span-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Travel Statistics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border border-gray-100 shadow-none rounded-none hover:shadow-md transition-shadow"
              >
                <div className="flex flex-row justify-between items-center p-8">
                  <div className="space-y-1">
                    <p className="text-gray-400 text-sm font-medium">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.bgColor} p-4 rounded-full`}>
                    {stat.icon}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  LogOut,
  User,
  Settings,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button,
} from "@heroui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(!true);
  const router = useRouter();
  const pathname = usePathname(); // অ্যাক্টিভ রুট ট্র্যাক করার জন্য

  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  const userInitial = session?.user?.name
    ? session.user.name.charAt(0).toUpperCase()
    : "U";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destination", href: "/destination" },
    { name: "My Booking", href: "/myBooking" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* --- Left: Logo --- */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <h1 className="text-2xl md:text-3xl font-black text-purple-900 tracking-tight group-hover:text-purple-600 transition-colors">
                Wanderlust<span className="text-purple-500">.</span>
              </h1>
            </Link>
          </div>

          {/* --- Center: Desktop Nav (Active Indicators) --- */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-bold tracking-wide py-2 transition-all duration-300 ${
                    isActive
                      ? "text-purple-600 font-extrabold"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                  {/* Active Underline Bubble Effect */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-purple-600 rounded-full shadow-[0_2px_10px_rgba(147,51,234,0.4)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* --- Right: Auth & Profile --- */}

          <div className="hidden md:flex items-center shadow-2xl rounded-full">
            {!isPending && session ? (
              <Dropdown placement="bottom-end" backdrop="blur">
                <DropdownTrigger onClick={() => setIsOpen(!isOpen)}>
                  <div className="flex items-center gap-2 cursor-pointer group p-1 pr-3 rounded-full hover:bg-gray-50 transition-all">
                    <Avatar>
                      <Avatar.Fallback className="bg-purple-400">
                        {userInitial}
                      </Avatar.Fallback>
                    </Avatar>

                    <ChevronDown
                      size={14}
                      className="text-gray-400 group-hover:text-purple-600 transition-colors"
                    />
                  </div>
                </DropdownTrigger>

                {isOpen && (
                  <DropdownMenu
                    aria-label="User menu"
                    variant="flat"
                    className={`${
                      isOpen ? "block" : "hidden"
                    }' w-64 border top-20 absolute -right-0 md:right-90 bg-white rounded-lg shadow-lg p-2'`}
                    itemClasses={{
                      base: "py-3",
                    }}
                  >
                    <DropdownItem
                      key="profile_header"
                      className="h-14 gap-2 opacity-100 cursor-default border"
                    >
                      <p className="text-xs text-gray-500">Signed in as</p>

                      <p className="font-bold text-purple-600">
                        {session?.user?.email}
                      </p>
                    </DropdownItem>

                    <DropdownItem
                      key="my_profile"
                      startContent={
                        <User size={18} className="text-gray-400" />
                      }
                    >
                      <Link href="/myProfile">My Profile</Link>
                    </DropdownItem>

                    <DropdownItem
                      key="settings"
                      startContent={
                        <Settings size={18} className="text-gray-400" />
                      }
                    >
                      Settings
                    </DropdownItem>

                    {session?.user?.role === "admin" && (
                      <DropdownItem
                        key="admin"
                        className="text-purple-600"
                        startContent={<ShieldCheck size={18} />}
                        href="/admin"
                      >
                        Admin Dashboard
                      </DropdownItem>
                    )}

                    <DropdownItem
                      key="logout"
                      color="danger"
                      className="text-danger"
                      startContent={<LogOut size={18} />}
                      onPress={handleLogout}
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </Dropdown>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-sm font-bold text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Login
                </Link>

                <Link href={"/signUp"}>
                  <Button
                    as={Link}
                    href="/signUp"
                    color="secondary"
                    radius="full"
                    className="font-bold px-6 shadow-lg shadow-purple-200"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-3 shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-bold rounded-xl transition-all ${
                  isActive
                    ? "bg-purple-50 text-purple-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-5 mt-2 border-t border-gray-100 px-4">
            {session ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <Avatar
                    isbordered="true"
                    color="secondary"
                    src={session?.user?.image}
                    name={userInitial}
                  />
                  <div>
                    <p className="font-bold text-gray-900 leading-tight">
                      {session?.user?.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {session?.user?.email}
                    </p>
                  </div>
                </div>
                <Button
                  onPress={handleLogout}
                  color="danger"
                  variant="flat"
                  className="w-full font-bold h-11 rounded-xl"
                  startContent={<LogOut size={16} />}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href={"/login"}>
                  <Button
                    as={Link}
                    href="/login"
                    variant="bordered"
                    fullWidth
                    className="font-bold h-11 rounded-xl border-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
                <Link href={"/signUp"}>
                  <Button
                    as={Link}
                    href="/signUp"
                    color="secondary"
                    fullWidth
                    className="font-bold h-11 rounded-xl bg-purple-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

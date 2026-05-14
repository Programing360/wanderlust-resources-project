"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  LogOut,
  User,
  Settings,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import logoImage from "../../public/assets/Wanderlast.png";
import { authClient } from "@/lib/auth-client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button,
  Navbar as HeroNavbar,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(!true);
  const router = useRouter();

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
  console.log(session);
  // ইউজারের নামের প্রথম অক্ষর বের করার লজিক
  const userInitial = session?.user?.name
    ? session.user.name.charAt(0).toUpperCase()
    : "U";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destination", href: "/destination" },
    { name: "My Booking", href: "/bookings" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* --- Left: Logo --- */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logoImage}
                alt="Wanderlast logo"
                width={130}
                height={30}
                className="object-contain"
              />
            </Link>
          </div>

          {/* --- Center: Desktop Nav --- */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- Right: Auth & Profile --- */}
          <div className="hidden md:flex items-center">
            {!isPending && session ? (
              <Dropdown placement="bottom-end" backdrop="blur">
                <DropdownTrigger onClick={() => setIsOpen(!isOpen)}>
                  <div className="flex items-center gap-2 cursor-pointer group p-1 pr-3 rounded-full hover:bg-gray-50 transition-all">
                    <Avatar>
                      <Avatar.Fallback className="bg-cyan-400">
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
                <Button
                  as={Link}
                  href="/signUp"
                  color="secondary"
                  radius="full"
                  className="font-bold px-6 shadow-lg shadow-purple-200"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen border-t" : "max-h-0"}`}
      >
        <div className="px-4 py-6 space-y-4 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-semibold text-gray-700 hover:text-purple-600"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            {session ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  {session?.user?.image ? <Avatar
                    size="md"
                    src={session?.user?.image}
                    name={userInitial}
                    showfallback="true"
                  /> : <Avatar>
                      <Avatar.Fallback className="bg-cyan-400">
                        {userInitial}
                      </Avatar.Fallback>
                    </Avatar>}
                  

                  <div>
                    <p className="font-bold text-gray-800">
                      {session?.user?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {session?.user?.email}
                    </p>
                  </div>
                </div>
                <Button
                  onPress={handleLogout}
                  color="danger"
                  variant="flat"
                  className="w-full font-bold"
                  startContent={<LogOut size={18} />}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Button
                  as={Link}
                  href="/login"
                  variant="bordered"
                  fullWidth
                  className="font-bold"
                >
                  Login
                </Button>
                <Button
                  as={Link}
                  href="/signUp"
                  color="secondary"
                  fullWidth
                  className="font-bold"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

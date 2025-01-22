"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    {
        title: "About",
        path: "/",
    },
    {
        title: "Skills",
        path: "/skills",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={"/"}
                    className="text-2xl pt-4 font-cursiveLogo md:text-5xl text-white font-semibold"
                >
                    {"< Faraz Khan />"}
                </Link>
                <div className="mobile-menu block md:hidden">
                    {/* {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              // onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )} */}

                    <Sheet className="border-non" open={navbarOpen} onOpenChange={setNavbarOpen}>
                        <SheetTrigger>
                            <div
                                onClick={() => setNavbarOpen(() => true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white animate-blink shadow-lg hover:shadow-2xl transition-all"
                            >
                                <Bars3Icon className="h-5 w-5" />
                            </div>
                        </SheetTrigger>
                        <SheetContent className="border-[#33353F]">
                            <SheetHeader>
                                <SheetTitle>Navigation</SheetTitle>
                                <MenuOverlay
                                    links={navLinks}
                                    setNavbarOpen={setNavbarOpen}
                                />
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

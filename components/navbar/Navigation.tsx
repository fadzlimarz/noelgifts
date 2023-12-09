"use client";

import Navbar from "@/components/navbar/Navbar";
import { Card, CardFooter } from "@/components/ui/card";
import { ThemeToggle } from "../theme/theme-toggle";

export default function Navigation() {
  return (
    <div className="group aspect-h-6 aspect-w-5 z-10">
      <Navbar />
      <CardFooter className="absolute bottom-0 items-end px-0">
        <div className="flex flex-col text-sm">
          <div className="flex justify-start z-20 py-2">
            <ThemeToggle />
          </div>
          <div className="dark:text-neutral-200">
            <p className="italic">&apos;Tis the season</p>
          </div>
          <p className="mt-4 w-full text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} NoelGifts.list → Beta 0.0.3
          </p>
        </div>
      </CardFooter>
    </div>
  );
}

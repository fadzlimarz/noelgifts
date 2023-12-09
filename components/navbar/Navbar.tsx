"use client";

import Link from "next/link";
import Twemoji from "../twemoji";

export default function Navbar() {
  const categories = [
    {
      title: "Lizhan",
      href: "lizhan",
    },
    {
      title: "Fadzli",
      href: "fadzli",
    },
  ];

  const brands = [
    {
      title: "Lizhan",
      href: "lizhan",
    },
    {
      title: "Fadzli",
      href: "fadzli",
    },
  ];

  return (
    <>
      <header className="flex justify-between">
        <div>
          <div className="flex justify-between">
            <div className="mr-1 text-xl">
              <Twemoji emoji="christmas-tree" />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-row gap-4 justify-between z-20 py-16">
        <div className="flex w-full flex-col">
          <div className="mb-3 text-xs font-light text-neutral-500 dark:text-neutral-400">
            Gifts Lists
          </div>
          {categories.map((category, i) => (
            <Link
              key={i}
              href={`/lists/${category.href}`}
              className="mb-2 hover:cursor-pointer text-sm text-black hover:underline dark:text-neutral-100"
            >
              {category.title}
            </Link>
          ))}
        </div>
        {/* <div className="flex w-full flex-col">
          <div className="mb-3 text-xs font-light text-neutral-500 dark:text-neutral-400">
            Gift Lists
          </div>
          {brands.map((brand, i) => (
            <Link
              key={i}
              href={`/brands/${brand.href}`}
              className="mb-2 hover:cursor-pointer text-sm text-black hover:underline dark:text-neutral-100"
            >
              {brand.title}
            </Link>
          ))}
        </div> */}
      </div>
    </>
  );
}

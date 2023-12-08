"use client";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Twemoji from "../twemoji";

export default function GoBack() {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        type="button"
        aria-label="Go Back"
        onClick={() => router.back()}
        className="flex flex-row items-center text-xs text-blue-500 dark:text-blue-500 w-ful mb-4 p-1"
      >
        <ChevronLeftIcon className="w-5 h-5" />
        <div>Back</div>
      </button>
      <div>
        <Link href="/">
          <div className="flex justify-between">
            <div className="mr-1 text-xl">
              <Twemoji emoji="christmas-tree" />
            </div>
          </div>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

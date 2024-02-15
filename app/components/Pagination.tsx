"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pages = Array.from(Array(totalPages).keys());

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const createPageURL = (pageNumber: number | string) => {
    console.log(pageNumber);
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <li className="flex">
      {pages.map((page) => (
        <div
          onClick={() => createPageURL(page + 1)}
          key={page}
          className={
            page === currentPage
              ? "border-2 border-black px-3 ml-1 bg-blue-400"
              : "border-2 border-black px-3 ml-1"
          }
        >
          {page + 1}
        </div>
      ))}
    </li>
  );
}

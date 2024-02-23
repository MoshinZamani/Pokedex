"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function Pagination({
  totalPages,
  currentPage,
  setSortState,
}: {
  totalPages: number;
  currentPage: number;
  setSortState: Dispatch<
    SetStateAction<{ column: string | null; direction: "asc" | "desc" | null }>
  >;
}) {
  const pages = Array.from(Array(totalPages).keys());

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
    setSortState({ column: null, direction: null });
  };

  return (
    <li className="flex">
      {pages.map((page) => (
        <div
          onClick={() => createPageURL(page + 1)}
          key={page}
          className={
            page === currentPage
              ? "border-2 border-gray-300 px-3 ml-1 bg-sky-200 cursor-pointer rounded font-bold mb-4"
              : "border-2 border-gray-300 px-3 ml-1 cursor-pointer rounded font-bold mb-4"
          }
        >
          {page + 1}
        </div>
      ))}
    </li>
  );
}

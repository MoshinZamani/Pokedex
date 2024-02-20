"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function Pagination({
  totalPages,
  currentPage,
  setIdSort,
  setNameSort,
  setHpSort,
  setAttackSort,
  setDefenseSort,
  setSpAttackSort,
  setSpDefenseSort,
  setSpeedSort,
}: {
  totalPages: number;
  currentPage: number;
  setIdSort: Dispatch<SetStateAction<null | boolean>>;
  setNameSort: Dispatch<SetStateAction<null | boolean>>;
  setHpSort: Dispatch<SetStateAction<null | boolean>>;
  setAttackSort: Dispatch<SetStateAction<null | boolean>>;
  setDefenseSort: Dispatch<SetStateAction<null | boolean>>;
  setSpAttackSort: Dispatch<SetStateAction<null | boolean>>;
  setSpDefenseSort: Dispatch<SetStateAction<null | boolean>>;
  setSpeedSort: Dispatch<SetStateAction<null | boolean>>;
}) {
  const pages = Array.from(Array(totalPages).keys());

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
    setIdSort(null);
    setNameSort(null);
    setHpSort(null);
    setAttackSort(null);
    setDefenseSort(null);
    setSpAttackSort(null);
    setSpDefenseSort(null);
    setSpeedSort(null);
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

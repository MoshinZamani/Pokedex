import React from "react";
import { FaSort } from "react-icons/fa";
import Search from "../components/Search";

const SkeletonRow = () => (
  <tr className="animate-pulse">
    <td className="py-4">
      <div className="h-4 bg-gray-300 rounded w-12"></div>
    </td>
    <td className="py-4">
      <div className="h-10 bg-gray-300 rounded"></div>
    </td>
    <td className="py-4">
      <div className="h-4 bg-gray-300 rounded w-24"></div>
    </td>
    <td className="py-4">
      <div className="h-4 bg-gray-300 rounded w-16"></div>
    </td>
    <td className="py-4">
      <div className="h-4 bg-gray-300 rounded w-12"></div>
    </td>
    {Array(6)
      .fill(null)
      .map((_, index) => (
        <td key={index} className="py-4">
          <div className="h-4 bg-gray-300 rounded w-8"></div>
        </td>
      ))}
  </tr>
);

const Loading = ({ rows = 10 }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <Search />
      <main className="relative overflow-x-auto shadow-md sm:rounded-lg w-9/12 my-8">
        <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
          <thead>
            <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <th>
                <div className="flex w-full pl-4 items-center">
                  Id &nbsp;
                  <FaSort />
                </div>
              </th>
              <th></th>
              <th>
                <div className="flex w-full items-center">
                  NAME&nbsp; <FaSort />
                </div>
              </th>
              <th>
                <div className="flex w-full items-center">
                  TYPE&nbsp; <FaSort />
                </div>
              </th>
              <th>
                <div className="flex w-full items-center">
                  TOTAL&nbsp; <FaSort />
                </div>
              </th>
              <th>
                <div className="flex w-full items-center">
                  HP&nbsp; <FaSort />
                </div>
              </th>
              <th>
                <div className="flex w-full items-center">
                  ATTACK &nbsp;
                  <FaSort />
                </div>
              </th>
              <th>
                <div className="flex w-full items-center">
                  DEFENSE &nbsp;
                  <FaSort />
                </div>
              </th>
              <th>
                <div className="flex w-full mr-1 items-center">
                  SP.ATTACK &nbsp;
                  <FaSort />
                </div>
              </th>
              <th>
                <div className="flex w-full mr-1 items-center">
                  SP.DEFENSE &nbsp;
                  <FaSort />
                </div>
              </th>
              <th>
                <div className="flex w-full items-center">
                  SPEED &nbsp;
                  <FaSort />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(rows)
              .fill(null)
              .map((_, index) => (
                <SkeletonRow key={index} />
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Loading;

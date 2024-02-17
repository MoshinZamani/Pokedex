"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import totalStat from "@/lib/totalStat";

const statsName: string[] = [
  "Total",
  "HP",
  "Attack",
  "Defense",
  "Sp. Attack",
  "Sp. Defense",
  "Speed",
];

export default function BarChart({ pokemon }) {
  let stats: number[] = pokemon.stats.map((stat) => Number(stat.base_stat));
  stats = [Number(totalStat(pokemon.stats)), ...stats];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: false,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };
  const test: string = "test";
  const data = {
    test,
    datasets: [
      {
        label: "",
        data: [12],
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

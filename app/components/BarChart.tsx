"use client";

type Props = {
  stats: Stat[];
};

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions<"bar"> = {
  indexAxis: "y" as const,
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
      position: "right" as const,
    },
    title: {
      display: false,
      text: "",
    },
  },
  scales: {
    y: {
      ticks: {
        crossAlign: "far",
      },
    },
  },
};

const labels = [
  "HP",
  "Attack",
  "Defense",
  "SP. Attack",
  "SP. Defense",
  "Speed",
];

export default function BarChart({ stats }: Props) {
  const baseStats = stats.map((stat) => Number(stat.base_stat));

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: baseStats,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

"use client";

type Props = {
  stats: Stat[];
};

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    y: {
      ticks: {
        crossAlign: "far",
      },
    },
  },
  indexAxis: "y" as const,
  maintainAspectRatio: true,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  barPercentage: 0.3,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Stats Horizontal Bar Chart",
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

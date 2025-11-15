"use client"; // penting di Next.js App Router

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TrainChart() {
  const data = {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    datasets: [
      {
        label: "Jumlah Kereta Beroperasi",
        data: [40, 42, 38, 45, 43, 39, 41],
        borderColor: "rgb(34,197,94)", // hijau
        backgroundColor: "rgba(34,197,94,0.3)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Perjalanan Harian Kereta",
      },
    },
  };

  return <Line data={data} options={options} />;
}

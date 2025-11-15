import StatsCard from "@/components/StatsCard";
import TrainChart from "@/components/TrainChart";
import TrainTable from "@/components/TrainTable";

export default function DashboardPage() {
  const trainData = [
    {
      name: "Argo Parahyangan",
      departure: "08:00",
      destination: "Bandung",
      status: "On Time",
    },
    {
      name: "Gajayana",
      departure: "09:30",
      destination: "Malang",
      status: "Delay",
    },
    {
      name: "Taksaka",
      departure: "10:00",
      destination: "Yogyakarta",
      status: "On Time",
    },
    {
      name: "Turangga",
      departure: "11:00",
      destination: "Surabaya",
      status: "On Time",
    },
    {
      name: "Mutiara Selatan",
      departure: "12:30",
      destination: "Surabaya",
      status: "Delay",
    },
    {
      name: "Serayu",
      departure: "13:00",
      destination: "Purwokerto",
      status: "On Time",
    },
    {
      name: "Bima",
      departure: "14:00",
      destination: "Surabaya",
      status: "On Time",
    },
    {
      name: "Ranggajati",
      departure: "15:00",
      destination: "Cirebon",
      status: "On Time",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold">Dashboard Monitoring Kereta</h1>
      <p className="text-gray-600 mt-2">
        Overview sistem operasional kereta hari ini.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <StatsCard title="Kereta Beroperasi" value="42" />
        <StatsCard title="Lokasi Terpantau" value="128" />
        <StatsCard title="On Time" value="39" />
        <StatsCard title="Delay" value="3" />
      </div>
      <div className="mt-10 bg-white p-6 rounded-xl shadow-sm">
        <TrainChart />
      </div>
      <TrainTable data={trainData} />
    </div>
  );
}

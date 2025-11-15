import StatsCard from "@/components/StatsCard";

export default function DashboardPage() {
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
    </div>
  );
}

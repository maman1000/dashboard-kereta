export default function StatsCard({ title, value }) {
  return (
    <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow transition">
      <p className="text-gray-600 text-sm">{title}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
    </div>
  );
}

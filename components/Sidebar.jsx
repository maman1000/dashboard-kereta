export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">Rail Dashboard</h2>

      <nav className="space-y-3">
        <a className="block text-gray-700 hover:text-black">Dashboard</a>
        <a className="block text-gray-700 hover:text-black">Reports</a>
        <a className="block text-gray-700 hover:text-black">Settings</a>
      </nav>
    </aside>
  );
}

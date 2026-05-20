export default function Navbar() {
  return (
    <header className="h-20 border-b border-white/10 bg-black flex items-center justify-between px-8">

      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-gray-500 text-sm">
          Welcome back to HireMind AI
        </p>
      </div>

      <div className="w-10 h-10 rounded-full bg-cyan-500" />
    </header>
  );
}
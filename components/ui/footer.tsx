export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-center">
        <img
          src="/images/logo-01.jpg"
          alt="Syve Software Logo"
          className="mx-auto mb-3 h-16 w-auto"
        />
        <p className="text-sm">
          © 2025 <span className="font-semibold text-white">Durian Invoice System</span> · Powered by{" "}
          <span className="text-blue-500 font-medium">Syve Software™</span>
        </p>
      </div>
    </footer>

  );
}

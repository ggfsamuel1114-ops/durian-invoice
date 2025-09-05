import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Left: Branding */}
          <div className="flex-shrink-0 mr-4">
            <Link
              href="/"
              className="text-sm md:text-base font-semibold text-blue-600 hover:text-blue-700"
            >
              Powered by Syve Software Development
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

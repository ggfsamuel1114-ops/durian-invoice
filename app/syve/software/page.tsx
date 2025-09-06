import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/syvesoftwarelogo.jpeg";

export const metadata = {
  title: "Syve Software",
  description: "Discover Syve Software solutions",
};

export default function SyveSoftwarePage() {
  return (
    <main className="bg-white">
      {/* Hero Section - Black Background */}
      <section className="text-center py-30 bg-black text-white">
        {/* 🔹 Home Button in Top-Left */}
        <div className="absolute top-6 left-6">
          <Link
            href="/"
            className="inline-block px-4 py-2 rounded-lg bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Home
          </Link>
        </div>
        <Image
          src={Logo}
          alt="Syve Software Logo"
          width={250}
          height={250}
          className="mx-auto mb-5"
        />
        <p className="text-lg text-gray-300 max-w-5xl mx-auto">
          At Syve Software Development, we help businesses of all sizes from
          small startups to large enterprises. To build innovative software
          solutions that empower growth and efficiency.
        </p>
      </section>

      {/* Available Software */}
      <section className="max-w-6xl mx-auto py-40 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Available Software
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Durian Invoice System */}
          <div className="p-8 bg-white border rounded-xl shadow-md hover:shadow-lg transition text-left">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">
              Durian Invoice System
            </h3>
            <p className="text-gray-600 mb-6">
              A specialized invoicing system designed for durian businesses,
              from farmers to wholesalers, ensuring smooth transactions and
              inventory tracking.
            </p>
            <Link
              href="/syve/software/durian-invoice"
              className="text-purple-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Future software */}
          <div className="p-8 bg-white border rounded-xl shadow-md hover:shadow-lg transition text-left">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Future Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              We are continuously expanding our software offerings to cover
              different industries and empower more businesses under the Syve
              ecosystem. DM for more products
            </p>
            <span className="text-gray-400 italic">Coming soon...</span>
          </div>
        </div>
      </section>
    </main>
  );
}

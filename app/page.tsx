import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/syve-logo.png";
import FooterMain from "@/components/ui/footer-main";

export default function SyveMainPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-30">
        <Image
          src={Logo}
          alt="Syve Logo"
          width={250}
          height={250}
          className="mx-auto mb-5"
        />
        {/* <h1 className="text-6xl font-extrabold mb-4 text-gray-900">Syve</h1> */}
        {/* <p className="text-xl text-gray-600 mb-6">Embrace Diverse</p> */}
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          Syve is a global innovation hub, uniting creativity, technology, and
          culture.
        </p>
        <div className="flex justify-center gap-4">
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="max-w-6xl mx-auto text-center py-2 px-10">
        <h2 className="text-4xl font-bold mb-20 text-gray-900">
          Our Vision & Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Innovation
            </h3>
            <p className="text-gray-600">
              We build groundbreaking solutions across industries.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">
              Diversity
            </h3>
            <p className="text-gray-600">
              We believe diverse perspectives lead to stronger outcomes.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Growth</h3>
            <p className="text-gray-600">
              We empower businesses and individuals to grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Our Divisions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-xl transition text-left">
              <h3 className="text-2xl font-semibold mb-4">Syve Software</h3>
              <p className="text-gray-600 mb-6">
                Developing software solutions to empower businesses and
                communities.
              </p>
              <Link
                href="/syve/software"
                className="text-blue-600 font-medium hover:underline"
              >
                Explore →
              </Link>
            </div>
            <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-xl transition text-left border-dashed border-2 border-gray-300">
              <h3 className="text-2xl font-semibold mb-4">Future Division</h3>
              <p className="text-gray-600 mb-6">
                More exciting initiatives are coming soon under Syve.
              </p>
              <span className="text-gray-400 italic">Coming soon...</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

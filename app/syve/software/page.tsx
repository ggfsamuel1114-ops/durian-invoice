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
      <section className="relative text-center py-30 bg-black text-white">
        {/* 🔹 Home Button in Top-Left */}
        <div className="absolute top-6 left-6">
          <Link
            href="/"
            className="inline-block px-4 py-2 rounded-lg bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Home · 首页
          </Link>
        </div>

        <Image
          src={Logo}
          alt="Syve Software Logo"
          width={250}
          height={250}
          className="mx-auto mb-5"
        />
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          At Syve Software Development, we help businesses of all sizes from
          small startups to large enterprises build innovative software
          solutions that empower growth and efficiency.
          <br />
          <span className="text-gray-400">
            在 Syve 软件开发中心，我们帮助各种规模的企业，从初创公司到大型企业
            构建创新的软件解决方案，以促进增长与效率。
          </span>
        </p>
      </section>

      {/* Available Software */}
      <section className="max-w-6xl mx-auto py-40 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Available Software <br />
          <span className="text-xl font-normal text-gray-600">可用的软件</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Durian Invoice System */}
          <div className="p-10 bg-white border rounded-xl shadow-md hover:shadow-lg transition text-left">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">
              Durian Invoice System · 榴莲收据系统
            </h3>
            <p className="text-gray-600 mb-6">
              A specialized invoicing system designed for durian businesses,
              from farmers to wholesalers, ensuring smooth transactions and
              inventory tracking.
              <br />
              <span className="text-gray-500">
                专为榴莲行业设计的收据系统，从果农到批发商，确保交易顺畅与库存管理。
              </span>
            </p>
            <Link
              href="/syve/software/durian-invoice"
              className="text-purple-600 font-medium hover:underline"
            >
              Learn More · 了解更多 →
            </Link>
          </div>

          {/* Future software */}
          <div className="p-10 bg-white border rounded-xl shadow-md hover:shadow-lg transition text-left">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Future Solutions · 未来方案
            </h3>
            <p className="text-gray-600 mb-6">
              We are continuously expanding our software offerings to cover
              different industries and empower more businesses under the Syve
              ecosystem. DM for more products.
              <br />
              <span className="text-gray-500">
                我们将不断扩展软件产品，覆盖更多行业，在 Syve 生态系统下赋能更多企业。
                需要更多产品请联系。
              </span>
            </p>
            <span className="text-gray-400 italic">Coming soon · 敬请期待...</span>
          </div>
        </div>
      </section>
    </main>
  );
}

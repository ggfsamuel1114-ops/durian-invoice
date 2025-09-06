import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50">
      {/* 🔹 左上角返回按钮 + Powered by */}
      <div className="absolute top-6 left-6 flex items-center gap-4">
        <Link
          href="/syve/software"
          className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
        >
          Back
        </Link>

        <p className="text-sm text-gray-600">
          Powered by{" "}
          <Link
            href="/syve/software"
            className="font-semibold text-blue-600 hover:underline"
          >
            Syve Software
          </Link>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-40 pb-12 md:pt-40 md:pb-20 text-center">
          {/* 产品名 / Product Name */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Durian Invoice System <br />
            <span className="text-3xl md:text-4xl font-normal text-gray-600">
              榴莲收据系统
            </span>
          </h1>

          {/* tagline */}
          <p className="text-2xl text-blue-600 font-semibold mt-35 mb-40">
            高效 · 专业 · 可定制 <br />
            <span className="text-lg text-gray-700">
              Efficient · Professional · Customizable
            </span>
          </p>

          {/* 简短描述 / Description */}
          <p className="text-xl text-gray-600 mb-8">
            查询收据 · 打印发票 · 数据统计 · 高效定制 <br />
            一站式榴莲收据与发票管理解决方案 <br />
            <span className="text-base text-gray-500">
              Receipt query · Invoice printing · Data reports · Custom efficiency <br />
              One-stop durian receipt & invoice management solution
            </span>
          </p>

          {/* 按钮 / Button */}
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mb-12">
            <a
              href="https://wa.me/601135789122?text=你好，我想了解Durian Invoice System"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mr-4"
            >
              联系我们 · Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

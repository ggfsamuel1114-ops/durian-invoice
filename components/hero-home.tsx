import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 text-center">

          {/* 产品名 */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Durian Invoice System
          </h1>

          {/* tagline */}
          <p className="text-2xl text-blue-600 font-semibold mb-6">
            高效 · 专业 · 可定制的榴莲收据系统
          </p>

          {/* 简短描述 */}
          <p className="text-xl text-gray-600 mb-8">
            查询收据 · 打印发票 · 数据统计 · 高效定制
            <br />
            一站式榴莲收据与发票管理解决方案
          </p>

          {/* 按钮 */}
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mb-12">
            <a
              href="https://wa.me/601135789122?text=你好，我想了解Durian Invoice System"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mr-4"
            >
              联系我们
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}

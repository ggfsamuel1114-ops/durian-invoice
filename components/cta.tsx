import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section className="relative bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* CTA content */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              准备好升级你的榴莲生意了吗？
            </h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              使用 <span className="font-semibold">Durian Invoice System</span>  
              轻松管理收据与发票，提升品牌专业度，赢得顾客信任。
            </p>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/601135789122?text=你好，我想了解Durian Invoice System"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-blue-600 bg-white hover:bg-gray-100"
              >
                联系我们
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import ShowcaseImg01 from "@/public/images/receipt.png";
import ShowcaseImg02 from "@/public/images/analysis.png";
import ShowcaseImg03 from "@/public/images/fruit.png";

export default function Showcase() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12 md:pt-16 md:pb-16 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              系统功能展示
            </h2>
            <p className="text-lg text-gray-600">
              Durian Invoice System 提供完整的榴莲收据与发票管理体验
            </p>
          </div>

          {/* Showcase grid */}
          <div className="grid gap-8 md:grid-cols-3">

            {/* 功能 1 */}
            <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <Image
                className="rounded-lg mb-4"
                src={ShowcaseImg01}
                width={400}
                height={250}
                alt="收据管理"
              />
              <h3 className="text-lg font-semibold mb-2">查询收据</h3>
              <p className="text-sm text-gray-600">
                编辑与打印收据，避免手写混乱，避免人工错误。
              </p>
            </div>

            {/* 功能 2 */}
            <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <Image
                className="rounded-lg mb-4"
                src={ShowcaseImg02}
                width={400}
                height={250}
                alt="发票打印"
              />
              <h3 className="text-lg font-semibold mb-2">买卖统计</h3>
              <p className="text-sm text-gray-600">
                查询交易果类和重量有多少，历史统计
              </p>
            </div>

            {/* 功能 3 */}
            <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <Image
                className="rounded-lg mb-4"
                src={ShowcaseImg03}
                width={400}
                height={250}
                alt="数据统计"
              />
              <h3 className="text-lg font-semibold mb-2">简单收购/销售页面</h3>
              <p className="text-sm text-gray-600">
                支持多种果类，可根据需求定制化
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <section className="relative bg-gray-50" id="why-us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-8 pb-8 md:pt-12 md:pb-10">

          {/* Part 1: 我们的优势 */}
          <div className="grid gap-6 md:grid-cols-3 mb-6">
            {[
              {
                text: "专业性",
                desc: "针对榴莲收购与零售场景设计，解决传统收据混乱、难以追踪的问题。",
                color: "blue",
              },
              {
                text: "易用性",
                desc: "简单直观的操作界面，快速上手。",
                color: "green",
              },
              {
                text: "可扩展性",
                desc: "根据您的业务需求定制功能模块，保持系统灵活升级。",
                color: "purple",
              },
            ].map((item, i) => (
              <div className="text-center" key={i}>
                <div
                  className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center text-lg font-bold ${colorMap[item.color]}`}
                >
                  ✓
                </div>
                <h3 className="text-base font-semibold mb-1">{item.text}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Part 2: 核心功能 */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: 1,
                color: "blue",
                title: "Check Status",
                desc: "实时查询历史收据与订单状态，减少人工记录，提高透明度。",
              },
              {
                num: 2,
                color: "green",
                title: "Print Invoice",
                desc: "一键打印专业发票",
              },
              {
                num: 3,
                color: "yellow",
                title: "Data Analytics",
                desc: "自动化收据与销售数据统计，轻松生成经营报表。",
              },
              {
                num: 4,
                color: "purple",
                title: "Customization",
                desc: "高效定制功能，支持发票样式调整与品牌 Logo 集成。",
              },
            ].map((item) => (
              <div className="text-center" key={item.num}>
                <div
                  className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center text-lg font-bold ${colorMap[item.color]}`}
                >
                  {item.num}
                </div>
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

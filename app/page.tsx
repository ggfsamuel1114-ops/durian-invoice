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
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          Syve is a global innovation hub, uniting creativity, technology, and culture.
          <br />
          <span className="text-gray-600">
            Syve 是一个全球创新中心，融合创意、科技与文化。
          </span>
        </p>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="max-w-6xl mx-auto text-center py-2 px-10">
        <h2 className="text-4xl font-bold mb-20 text-gray-900">
          Our Vision & Mission <br />
          <span className="text-2xl font-normal text-gray-600">我们的愿景与使命</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Innovation 创新
            </h3>
            <p className="text-gray-600">
              We build groundbreaking solutions across industries.
              <br />我们为各行业构建突破性的解决方案。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">
              Diversity 多元
            </h3>
            <p className="text-gray-600">
              We believe diverse perspectives lead to stronger outcomes.
              <br />我们相信多元视角会带来更强大的成果。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">
              Growth 成长
            </h3>
            <p className="text-gray-600">
              We empower businesses and individuals to grow together.
              <br />我们帮助企业与个人共同成长。
            </p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Our Divisions <br />
            <span className="text-2xl font-normal text-gray-600">我们的部门</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-xl transition text-left">
              <h3 className="text-2xl font-semibold mb-4">Syve Software · 软件开发</h3>
              <p className="text-gray-600 mb-6">
                Developing software solutions to empower businesses and communities.
                <br />开发软件解决方案，赋能企业与社区。
              </p>
              <Link
                href="/syve/software"
                className="text-blue-600 font-medium hover:underline"
              >
                Explore 探索 →
              </Link>
            </div>
            <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-xl transition text-left border-dashed border-2 border-gray-300">
              <h3 className="text-2xl font-semibold mb-4">Future Division · 未来部门</h3>
              <p className="text-gray-600 mb-6">
                More exciting initiatives are coming soon under Syve.
                <br />更多激动人心的计划即将在 Syve 推出。
              </p>
              <span className="text-gray-400 italic">Coming soon · 敬请期待...</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToStory = () => {
    const element = document.getElementById("story");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-[#FF0000]/10 text-[#FF0000] text-sm font-semibold border border-[#FF0000]/30">
              Tech Reviews & Comparisons
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Money, Your Choice,{" "}
            <span className="text-gray-500">Our Honest Opinion</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We test technology the way real people use it — in real life, not in labs.
            No paid bias. No fluff. Just deep comparisons, real insights, and honest
            recommendations that help you decide what's truly worth your investment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* YouTube Button */}
            <a
              href="https://www.youtube.com/@BrajBuzzTech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white font-semibold rounded-lg hover:bg-[#CC0000] transition-colors shadow-lg shadow-[#FF0000]/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
              Watch Our Reviews
            </a>

            {/* Secondary Button */}
            <a
              href="#story"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
            >
              Learn Our Story
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-10 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "100+", label: "Product Reviews" },
                { value: "50K+", label: "Happy Viewers" },
                { value: "4.9", label: "Average Rating" },
                { value: "0", label: "Paid Reviews" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

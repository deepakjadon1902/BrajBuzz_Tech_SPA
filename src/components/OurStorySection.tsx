import { Target, Users, Zap, Shield, CheckCircle, TrendingUp, Award, Heart } from "lucide-react";

const problemsSolved = [
  {
    icon: Target,
    title: "Cutting Through the Noise",
    description:
      "Tired of sponsored reviews and hidden agendas? We deliver unfiltered, honest tech opinions so you can shop with confidence.",
  },
  {
    icon: Users,
    title: "Built for Real People",
    description:
      "Whether you're a student on a budget, a professional seeking productivity tools, or a family choosing smart home devices — we speak your language.",
  },
  {
    icon: Zap,
    title: "Time-Saving Decisions",
    description:
      "No more hours of research. Our in-depth comparisons and clear verdicts help you decide in minutes, not days.",
  },
  {
    icon: Shield,
    title: "Your Money Protected",
    description:
      "Every rupee matters. We test durability, value-for-money, and long-term performance so you invest wisely.",
  },
];

const whyDifferent = [
  {
    stat: "0%",
    label: "Paid Reviews",
    description: "We never accept money for favorable coverage",
  },
  {
    stat: "100+",
    label: "Hours Testing",
    description: "Each major review involves weeks of real-world usage",
  },
  {
    stat: "50K+",
    label: "Community Members",
    description: "Trusted by tech enthusiasts across India",
  },
  {
    stat: "3+",
    label: "Years Experience",
    description: "Consistent, reliable tech journalism since 2021",
  },
];

const whoWeServe = [
  {
    persona: "Budget-Conscious Buyers",
    description: "Students, young professionals, and families looking for the best value without compromising quality.",
    icon: Heart,
  },
  {
    persona: "Tech Enthusiasts",
    description: "Gadget lovers who want deep dives, specifications analysis, and honest performance benchmarks.",
    icon: TrendingUp,
  },
  {
    persona: "First-Time Buyers",
    description: "People new to tech who need simple, jargon-free guidance to make confident purchase decisions.",
    icon: Award,
  },
];

export const OurStorySection = () => {
  return (
    <section id="story" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Why BrajBuzz Tech Exists
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
            Honest Reviews for{" "}
            <span className="text-primary">Smart Decisions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            In a world flooded with paid promotions and biased opinions, finding trustworthy tech advice is harder than ever. 
            We started BrajBuzz Tech because <strong className="text-foreground">you deserve better</strong> — real insights from real testing, 
            helping everyday people make purchases they won't regret.
          </p>
        </div>

        {/* The Problem We Solve */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              The Problems We Solve
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the frustrations of modern tech shopping — and we're here to fix them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemsSolved.map((item, index) => (
              <div
                key={item.title}
                className="group bg-background rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why We're Different - Stats */}
        <div className="mb-24">
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
                What Makes Us Different
              </h3>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                While others chase sponsorships, we chase the truth. Our commitment to integrity is what sets us apart.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyDifferent.map((item, index) => (
                <div
                  key={item.label}
                  className="text-center p-4 md:p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
                    {item.stat}
                  </div>
                  <div className="text-lg font-semibold text-primary-foreground mb-2">
                    {item.label}
                  </div>
                  <p className="text-sm text-primary-foreground/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Who We Create Content For
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our reviews are crafted for real people with real needs — not tech jargon experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoWeServe.map((persona, index) => (
              <div
                key={persona.persona}
                className="relative bg-background rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <persona.icon size={28} className="text-primary-foreground" />
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h4 className="font-display text-xl font-semibold mb-3">
                    {persona.persona}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Our Mission
            </h3>
          </div>
          <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-3xl p-8 md:p-12 text-center border border-border/50">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 text-foreground">
              "To empower every Indian consumer with honest, accessible tech knowledge — 
              so your hard-earned money goes toward products that truly serve you."
            </blockquote>
            <div className="flex flex-wrap justify-center gap-4">
              {["Transparency", "Integrity", "Accessibility", "Community"].map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm font-medium border border-border/50"
                >
                  <CheckCircle size={16} className="text-primary" />
                  {value}
                </span>
              ))}
            </div>
          </div>
          
          {/* Trust Statement */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic">
              "Your money, your choice, our honest opinion. We test technology the way real people use it — 
              in real life, not in labs."
            </p>
            <p className="mt-4 font-semibold text-foreground">
              — The BrajBuzz Tech Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

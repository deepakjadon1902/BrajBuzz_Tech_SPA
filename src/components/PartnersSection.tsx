const partners = [
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" },
  { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container-custom mb-10">
        <div className="text-center">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-headline mb-4">
            Our <span className="text-muted-foreground">Partners</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We proudly collaborate with trusted global brands, innovators, and
            industry leaders who inspire and support our mission.
          </p>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll pause-on-hover">
          {/* First set of logos */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-40 h-20 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Grid Fallback */}
      <div className="container-custom mt-10 md:hidden">
        <div className="grid grid-cols-2 gap-6">
          {partners.slice(0, 6).map((partner) => (
            <div
              key={partner.name}
              className="h-16 flex items-center justify-center grayscale opacity-60"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

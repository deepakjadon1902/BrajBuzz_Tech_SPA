import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder unboxing images - these can be replaced with real images
const unboxingImages = [
  {
    id: 1,
    title: "iPhone 15 Pro Max Unboxing",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
  },
  {
    id: 2,
    title: "MacBook Pro M3 First Look",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 Unboxing",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
  },
  {
    id: 4,
    title: "Samsung Galaxy S24 Ultra",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80",
  },
  {
    id: 5,
    title: "Apple Watch Ultra 2",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80",
  },
];

export const UnboxingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % unboxingImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + unboxingImages.length) % unboxingImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            Latest Unboxings
          </span>
          <h2 className="text-headline mb-4">
            Unboxing <span className="text-muted-foreground">Highlights</span>
          </h2>
          <p className="text-body">
            We explore the latest gadget packaging, first impressions, and premium
            unboxing experiences.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary">
            {unboxingImages.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {unboxingImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-foreground"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

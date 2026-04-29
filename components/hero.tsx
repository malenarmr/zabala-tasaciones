"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  images?: string[];
}

const DEFAULT_IMAGES = ["/hero-1.png", "/hero-2.png"];

export function Hero({ images = DEFAULT_IMAGES }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || images.length <= 1) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((index + images.length) % images.length);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning, images.length]
  );

  const prev = () => goTo(currentIndex - 1);
  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  // Auto-advance
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next, images.length]);

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-gradient-to-b from-secondary to-background overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Corredores Matriculados</span>
            </div>

            <h1
              id="hero-heading"
              className={`font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6 transition-all duration-700 delay-100 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Conocé el <span className="text-primary">valor real</span> de tu
              propiedad
            </h1>

            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-pretty transition-all duration-700 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Tasaciones profesionales con respaldo legal para propietarios que
              buscan vender. Sin compromiso, con total transparencia.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Calcula el valor de tu propiedad
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  document
                    .getElementById("proceso")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-border text-primary hover:bg-primary font-medium text-base px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                Cómo Funciona
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground transition-all duration-700 delay-[400ms] ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" aria-hidden="true" />
                <span>+100 tasaciones realizadas</span>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            aria-label="Galería de propiedades"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-[645/756] bg-muted">
              {/* Images */}
              {images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Propiedad ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover duration-500 ${
                    i === currentIndex
                      ? isTransitioning
                        ? "opacity-0"
                        : "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}

              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Navigation arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 z-10"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 z-10"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Dot indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Ir a imagen ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? "bg-white w-6 h-2"
                          : "bg-white/50 w-2 h-2 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

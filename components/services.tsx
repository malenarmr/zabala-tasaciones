"use client";

import { Building, Home, Store, Scale } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInView } from "@/hooks/use-animations";

const services = [
  {
    icon: Building,
    title: "Alquiler",
    description:
      "Tasación de departamentos para venta o alquiler. Análisis de ubicación, amenities y estado general.",
  },
  {
    icon: Home,
    title: "Tasaciones",
    description:
      "Evaluación completa de casas, chalets y PHs. Consideramos lote, construcción y valor de mercado.",
  },
  {
    icon: Store,
    title: "Otro servicio",
    description:
      "Valuación de locales, oficinas y espacios comerciales con análisis de rentabilidad.",
  },
  {
    icon: Scale,
    title: "Tasaciones Judiciales",
    description:
      "Informes con validez legal para sucesiones, divorcios y procesos judiciales.",
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="servicios"
      className="py-16 md:py-24 bg-background"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            id="services-heading"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance"
          >
            <a href="https://zabalabienesraices.com.ar/" className="underline">
              Servicios de Zabala Inmobiliaria
            </a>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conocé todos nuestros servicios{" "}
            <a href="https://zabalabienesraices.com.ar/" className="underline">
              acá
            </a>{" "}
            RELLENAR TEXTO
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-card border-border cursor-pointer group transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
              onClick={scrollToContact}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  scrollToContact();
                }
              }}
              aria-label={`${service.title} - Click para solicitar tasación`}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <service.icon
                    className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

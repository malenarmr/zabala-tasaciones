"use client";

import { FileText, UserCheck, ClipboardCheck } from "lucide-react";
import { useInView } from "@/hooks/use-animations";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Completá el formulario",
    description:
      "Ingresá los datos básicos de tu propiedad. Solo te tomará 2 minutos.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Contacto",
    description:
      "Nos ponemos en contacto contigo para coordinar una visita o solicitar más información si es necesario.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Recibí tu informe",
    description:
      "Obtené un informe profesional con el valor de mercado real de tu propiedad.",
  },
];

export function Process() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="proceso"
      className="py-16 md:py-24 bg-secondary"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            id="process-heading"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance"
          >
            Proceso Simple y Transparente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tasamos tu propiedad en 3 simples pasos, sin complicaciones ni
            costos ocultos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative text-center transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isInView ? `${index * 150}ms` : "0ms" }}
            >
              {/* Connector Line - animated */}
              {index < steps.length - 1 && (
                <div
                  className={`hidden md:block absolute top-12 left-1/2 h-0.5 bg-border transition-all duration-1000 ${
                    isInView ? "w-full" : "w-0"
                  }`}
                  style={{
                    transitionDelay: isInView
                      ? `${index * 150 + 300}ms`
                      : "0ms",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Step Content */}
              <div className="relative group">
                <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border border-border transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <div className="text-center">
                    <span className="block text-xs font-medium text-muted-foreground">
                      Paso
                    </span>
                    <span className="block text-2xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20">
                  <step.icon
                    className="w-6 h-6 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

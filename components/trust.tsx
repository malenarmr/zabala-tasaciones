"use client";

import { CheckCircle2, ShieldCheck, Clock, FileCheck } from "lucide-react";
import { useCountUp, useInView } from "@/hooks/use-animations";

const features = [
  {
    icon: ShieldCheck,
    title: "Corredores Matriculados",
  },
  {
    icon: FileCheck,
    title: "Informes con Validez Legal",
    description:
      "Aptas para su presentación ante juzgados y otras instituciones.",
  },
  {
    icon: Clock,
    title: "Entrega 24hs",
  },
  {
    icon: CheckCircle2,
    title: "Conoce el valor de tu propiedad",
    description:
      "Tu primera consulta es sin costo y tiene un único fin: asesorarte. Queremos que te sientas libre de decidir, sin ninguna obligación de venta.",
  },
];

// Componente para cada stat con contador
function StatCounter({
  end,
  suffix = "",
  prefix = "",
  label,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const { count, ref } = useCountUp(end, 2000);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold mb-2">
        {prefix}
        {count.toLocaleString("es-AR")}
        {suffix}
      </p>
      <p className="text-sm opacity-80">{label}</p>
    </div>
  );
}

export function Trust() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section
      id="nosotros"
      className="py-16 md:py-24 bg-primary text-primary-foreground"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            ref={sectionRef}
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              id="trust-heading"
              className="font-sans text-3xl md:text-4xl font-bold mb-6 text-balance"
            >
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg opacity-90 leading-relaxed mb-8 text-pretty">
              Desde que iniciamos nuestra inmobiliaria hace apenas DOS años, nos
              ha motivado la firme creencia de que, con pasión y dedicación,
              podemos marcar la diferencia. Lo que nos distingue es nuestra
              capacidad para escuchar y entender las necesidades de nuestros
              clientes, junto con un profundo conocimiento del sector
              inmobiliario. Hemos identificado que, en este ámbito, hay una gran
              oportunidad para ofrecer un servicio más empático y honesto. Por
              eso, nos comprometemos a brindar una experiencia transparente y
              cercana. En nuestra inmobiliaria, lideramos con entusiasmo y
              compromiso, abordando cada operación con el mismo cuidado y
              atención como si fuera para nosotros mismos.
            </p>
          </div>

          {/* Stats */}
          <div className="bg-primary-foreground/10 rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-500 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center transition-colors hover:bg-primary-foreground/20">
                      <feature.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm opacity-80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

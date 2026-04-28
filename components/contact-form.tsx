"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Mail, MapPin } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="contacto"
        className="py-16 md:py-24 bg-background"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2
                className="w-8 h-8 text-green-600"
                aria-hidden="true"
              />
            </div>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¡Solicitud Enviada!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Gracias por contactarnos. Un asesor se comunicará con vos en las
              próximas 24 horas hábiles.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-border"
            >
              Enviar otra solicitud
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contacto"
      className="py-16 md:py-20 bg-secondary"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-3">
            Contactanos
          </span>
          <h2
            id="contact-heading"
            className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Solicitá tu tasación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Completá el formulario y un asesor se pondrá en contacto para
            coordinar la visita a tu propiedad..
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-card rounded-2xl p-6 border border-border mb-6">
              <h3 className="font-sans text-xl font-semibold text-foreground mb-4">
                ¿Por qué tasamos sin compromiso?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Creemos que conocer el valor de tu propiedad es el primer paso
                para tomar decisiones informadas. Nuestra tasación sin costo te
                permite evaluar opciones sin presión ni compromiso.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:zabala@zabalabienesraices.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    zabala@zabalabienesraices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Oficina
                  </h3>
                  <address className="text-muted-foreground not-italic text-sm">
                    Av Cabildo 2040. Boulevard "Los Andes"
                    <br />
                    Local 88 - Belgrano (CABA)
                  </address>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Matrículas:</strong>{" "}
                  CUCICBA Nº9053 - CPMCAL Nº618
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="nombre"
                    className="text-foreground font-medium"
                  >
                    Nombre completo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Juan Pérez"
                    className="bg-background border-input"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="telefono"
                    className="text-foreground font-medium"
                  >
                    Teléfono <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="11 1234-5678"
                    className="bg-background border-input"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juan@email.com"
                  className="bg-background border-input"
                  autoComplete="email"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="tipo-propiedad"
                    className="text-foreground font-medium"
                  >
                    Tipo de propiedad{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select name="tipo-propiedad" required>
                    <SelectTrigger
                      id="tipo-propiedad"
                      className="bg-background border-input"
                    >
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="departamento">Departamento</SelectItem>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="ph">PH</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                      <SelectItem value="local">Local Comercial</SelectItem>
                      <SelectItem value="oficina">Oficina</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="barrio"
                    className="text-foreground font-medium"
                  >
                    Barrio / Zona
                  </Label>
                  <Input
                    id="barrio"
                    name="barrio"
                    type="text"
                    placeholder="Ej: Palermo, Belgrano..."
                    className="bg-background border-input"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="mensaje"
                  className="text-foreground font-medium"
                >
                  Comentarios adicionales
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Contanos más sobre tu propiedad (superficie, antigüedad, estado, etc.)"
                  className="bg-background border-input min-h-[100px] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Solicitar Tasación Gratuita"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptás que nos comuniquemos con vos
                para coordinar la tasación. Tus datos están protegidos y no
                serán compartidos con terceros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

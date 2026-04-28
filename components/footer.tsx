import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 mb-4"
              aria-label="Valor Real Tasaciones - Inicio"
            >
              <Image
                src="/images/zabala-logo.webp"
                alt="Zabala Bienes Raíces"
                width={100}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
              <div
                className="h-6 w-px bg-background/30"
                aria-hidden="true"
              ></div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-sm leading-tight tracking-wide">
                  VALOR REAL
                </span>
                <span className="text-[9px] opacity-70 uppercase tracking-widest">
                  Tasaciones
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-70 max-w-xs mt-4">
              Tasaciones profesionales con respaldo legal. Parte de Zabala
              Bienes Raíces.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <address className="not-italic space-y-2 text-sm opacity-70">
              <p>
                <a
                  href="mailto:zabala@zabalabienesraices.com"
                  className="hover:opacity-100 transition-opacity"
                >
                  zabala@zabalabienesraices.com
                </a>
              </p>
              <p>Av Cabildo 2040. Boulevard "Los Andes"</p>
              <p>Local 88 - Belgrano (CABA)</p>
            </address>
            <p className="text-xs opacity-50 mt-3">
              Matrículas: CUCICBA Nº9053 - CPMCAL Nº618
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Horario de Atención</h3>
            <div className="text-sm opacity-70 space-y-1">
              <p>Con cita previa</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {currentYear} Zabala Bienes Raíces. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const whatsappUrl =
    "https://wa.me/5491151275118?text=Hola%20quiero%20una%20tasación";

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/zabala-logo.webp"
              alt="Zabala Bienes Raíces"
              width={140}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Nosotros
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Contactar por WhatsApp"
            >
              <Phone className="w-4 h-4" />
              <span>(011) 5127-5118</span>
            </a>

            <Button onClick={scrollToContact}>Solicitar Tasación</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("servicios")}>
                Servicios
              </button>
              <button onClick={() => scrollToSection("proceso")}>
                Proceso
              </button>
              <button onClick={() => scrollToSection("nosotros")}>
                Nosotros
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (011) 5127-5118
              </a>

              <Button onClick={scrollToContact}>Solicitar Tasación</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

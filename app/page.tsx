import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Trust } from "@/components/trust"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <a 
        href="#contacto" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Saltar al formulario de contacto
      </a>
      
      <Header />
      
      <main id="main-content">
        <Hero />
        <ContactForm />
        <Services />
        <Process />
        <Trust />
      </main>
      
      <Footer />
    </>
  )
}

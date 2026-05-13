"use client"

import { useEffect, useRef } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "TUNUMERO"

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <footer id="contacto" ref={sectionRef} className="bg-foreground text-background">
      {/* Contact CTA Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="animate-on-scroll opacity-0 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Listo para digitalizar tu negocio?
            </h2>
            <p className="text-background/70 mb-8 text-lg">
              Contáctanos hoy y da el primer paso hacia el éxito digital de tu
              negocio en Cali.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Zada,%20quiero%20digitalizar%20mi%20negocio`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar con un asesor
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-on-scroll opacity-0 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Zada</h3>
            <p className="text-background/70 mb-4">
              Tu agencia de confianza para la digitalización de negocios locales
              en Cali, Valle del Cauca.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#planes"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Planes
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70">
                  Cali, Valle del Cauca, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:zadaautomatizacion@gmail.com"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  zadaautomatizacion@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="animate-on-scroll opacity-0 border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Zada. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

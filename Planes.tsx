"use client"

import { useEffect, useRef } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const WHATSAPP_NUMBER = "TUNUMERO"

const planes = [
  {
    nombre: "Plan Básico",
    descripcion: "Ideal para negocios que inician su digitalización",
    destacado: false,
    caracteristicas: [
      "Página web (botón de WhatsApp, menú, horarios)",
      "Google Maps integrado",
      "WhatsApp Business configurado",
      "Dominio personalizado",
      "Redes Sociales básicas",
      "Soporte por WhatsApp",
    ],
  },
  {
    nombre: "Plan Intermedio",
    descripcion: "Para negocios que buscan crecer más rápido",
    destacado: true,
    caracteristicas: [
      "Todo del Plan Básico",
      "CRM simple para gestión de clientes",
      "Panel de control personalizado",
      "QR dinámicos para tu negocio",
      "Gestión de redes sociales",
      "Encuestas por WhatsApp",
      "Soporte prioritario",
    ],
  },
]

export function Planes() {
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
    <section id="planes" ref={sectionRef} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Planes
          </span>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Elige el plan perfecto para tu negocio
          </h2>
          <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Planes diseñados para negocios locales en Cali. Sin letras pequeñas,
            sin sorpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {planes.map((plan, index) => (
            <Card
              key={plan.nombre}
              className={`animate-on-scroll opacity-0 animation-delay-${
                (index + 1) * 100
              } relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.destacado
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-border"
              }`}
            >
              {plan.destacado && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-tl-none rounded-br-none rounded-tr-lg rounded-bl-lg bg-primary text-primary-foreground">
                    Más popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {plan.nombre}
                </h3>
                <p className="text-muted-foreground">{plan.descripcion}</p>
              </CardHeader>

              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {plan.caracteristicas.map((caracteristica) => (
                    <li
                      key={caracteristica}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/90">
                        {caracteristica}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.destacado ? "default" : "outline"}
                  size="lg"
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Zada,%20estoy%20interesado%20en%20el%20${encodeURIComponent(
                      plan.nombre
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Elegir {plan.nombre}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="animate-on-scroll opacity-0 text-center mt-8 text-muted-foreground">
          ¿Tienes preguntas?{" "}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Zada,%20tengo%20preguntas%20sobre%20los%20planes`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Escríbenos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}

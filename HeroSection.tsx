"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const WHATSAPP_NUMBER = "TUNUMERO"

export function HeroSection() {
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
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Agencia de Digitalización en Cali
            </span>
          </div>
        </div>

        <h1 className="animate-on-scroll opacity-0 animation-delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance mb-6">
          Lleva tu negocio al{" "}
          <span className="text-primary">mundo digital</span>
        </h1>

        <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          En Zada creamos páginas web profesionales y digitalizamos tu negocio
          local en Cali. Aumenta tus ventas y llega a más clientes hoy mismo.
        </p>

        <div className="animate-on-scroll opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Zada,%20quiero%20digitalizar%20mi%20negocio`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Empezar ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
            <a href="#planes">Ver planes</a>
          </Button>
        </div>

        <div className="animate-on-scroll opacity-0 animation-delay-400 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "50+", label: "Clientes felices" },
            { number: "100+", label: "Proyectos" },
            { number: "5★", label: "Calificación" },
            { number: "24/7", label: "Soporte" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

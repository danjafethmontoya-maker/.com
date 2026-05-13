"use client"

import { useEffect, useRef } from "react"
import { Globe, Smartphone, TrendingUp, Users } from "lucide-react"

export function SobreNosotros() {
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

  const features = [
    {
      icon: Globe,
      title: "Presencia Web",
      description:
        "Creamos páginas web modernas y optimizadas para que tu negocio destaque en internet.",
    },
    {
      icon: Smartphone,
      title: "100% Responsivo",
      description:
        "Todos nuestros diseños se adaptan perfectamente a cualquier dispositivo móvil o escritorio.",
    },
    {
      icon: TrendingUp,
      title: "Más Ventas",
      description:
        "Digitalizamos tu negocio para que puedas llegar a más clientes y aumentar tus ingresos.",
    },
    {
      icon: Users,
      title: "Soporte Local",
      description:
        "Somos de Cali y entendemos las necesidades de los negocios locales del Valle del Cauca.",
    },
  ]

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre Nosotros
          </span>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Tu aliado digital en Cali
          </h2>
          <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            En <strong className="text-primary">Zada</strong>, nos especializamos en transformar
            negocios locales del Valle del Cauca. Ayudamos a emprendedores y
            empresas a dar el salto al mundo digital con soluciones
            profesionales y accesibles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`animate-on-scroll opacity-0 animation-delay-${
                (index + 1) * 100
              } bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

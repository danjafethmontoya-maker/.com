"use client"

import { useEffect, useRef, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonios = [
  {
    nombre: "María Fernanda López",
    negocio: "Café La Tertulia",
    ubicacion: "Cali, Valle del Cauca",
    texto:
      "Gracias a Zada mi cafetería ahora tiene presencia en internet. Mis clientes pueden ver el menú y horarios desde su celular. ¡Las ventas aumentaron un 30%!",
    calificacion: 5,
  },
  {
    nombre: "Carlos Andrés Mejía",
    negocio: "Taller Mecánico El Paisa",
    ubicacion: "Cali, Valle del Cauca",
    texto:
      "Nunca pensé que necesitaba una página web hasta que Zada me mostró los resultados. Ahora mis clientes me encuentran en Google Maps y me contactan por WhatsApp directamente.",
    calificacion: 5,
  },
  {
    nombre: "Laura Patricia Gómez",
    negocio: "Boutique Elegancia",
    ubicacion: "Cali, Valle del Cauca",
    texto:
      "El equipo de Zada es increíble. Me ayudaron con todo: la página web, las redes sociales y hasta los QR para mi tienda. Super recomendados.",
    calificacion: 5,
  },
]

export function Testimonios() {
  const sectionRef = useRef<HTMLElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

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
      id="testimonios"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="animate-on-scroll opacity-0 inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonios
          </span>
          <h2 className="animate-on-scroll opacity-0 animation-delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Negocios reales en Cali que confiaron en Zada para su
            transformación digital.
          </p>
        </div>

        <div className="animate-on-scroll opacity-0 animation-delay-300 relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonios.map((testimonio, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <Card className="border-border bg-card shadow-sm">
                    <CardContent className="p-8 lg:p-10">
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />

                      <p className="text-lg lg:text-xl text-foreground/90 mb-6 leading-relaxed">
                        {`"${testimonio.texto}"`}
                      </p>

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonio.calificacion)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonio.nombre}
                        </p>
                        <p className="text-primary font-medium">
                          {testimonio.negocio}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonio.ubicacion}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

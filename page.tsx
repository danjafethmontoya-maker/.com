import { Navegacion } from "@/components/Navegacion"
import { HeroSection } from "@/components/HeroSection"
import { SobreNosotros } from "@/components/SobreNosotros"
import { Planes } from "@/components/Planes"
import { Testimonios } from "@/components/Testimonios"
import { Footer } from "@/components/Footer"
import { BotonWhatsApp } from "@/components/BotonWhatsApp"

export default function Home() {
  return (
    <main>
      <Navegacion />
      <HeroSection />
      <SobreNosotros />
      <Planes />
      <Testimonios />
      <Footer />
      <BotonWhatsApp />
    </main>
  )
}

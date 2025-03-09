'use client';
import Contacts from "@/components/contacts";
import Content from "@/components/content";
import Hero from "@/components/hero";
import JuryComposition from "@/components/jury-composition";
import Program from "@/components/program";
import Register from "@/components/register";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    const parallaxItems = document.querySelectorAll('[data-selector="parallax.item"]');
    const movieListen = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
    
      parallaxItems.forEach((item) => {
        const speed = item.classList.contains('layer1') ? 0.01 : 
          item.classList.contains('layer2') ? 0.03 : 
          item.classList.contains('layer3') ? 0.07 :
          0.1; // Разная скорость для разных слоев
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
    
        gsap.to(item, {
          x: x,
          y: y,
          duration: 0.1, // Плавность анимации
          ease: 'power1.out',
          yoyo: true,
        });
      });
    }

    window.addEventListener('mousemove', movieListen);
    return () => {
      window.removeEventListener('mousemove', movieListen);
    }
  });
  return (
    <>
      <Hero />
      <Content />
      <Program />
      <Contacts />
      <Register />
      <JuryComposition />
    </>
  );
}

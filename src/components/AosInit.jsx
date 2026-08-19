import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const AosInit = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    AOS.init({
      once: true,
      duration: 800,
      disable: prefersReducedMotion,
    })
  }, [])

  return null
}

export default AosInit

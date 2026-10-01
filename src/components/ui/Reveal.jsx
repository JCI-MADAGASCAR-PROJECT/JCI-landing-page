import { useEffect, useRef, useState } from "react"

/**
 * Reveal : anime son contenu quand il entre dans l'écran (une seule fois).
 *
 * Props :
 *  - from   : "up" | "left" | "right" | "zoom" | "fade"   (défaut "up")
 *  - delay  : délai en ms (ex: 150)
 *  - duration : durée en ms (défaut 700)
 *  - as     : balise HTML ("div" par défaut, "li", "section"...)
 *  - className : classes Tailwind du conteneur (layout/grid inclus)
 *
 * Fonctionne sur desktop et mobile. Respecte "prefers-reduced-motion".
 */

// Les classes doivent être écrites en entier pour que Tailwind les détecte
const HIDDEN = {
  up: "opacity-0 translate-y-10",
  left: "opacity-0 -translate-x-12",
  right: "opacity-0 translate-x-12",
  zoom: "opacity-0 scale-90",
  fade: "opacity-0",
}

const VISIBLE = "opacity-100 translate-x-0 translate-y-0 scale-100"

const Reveal = ({
  children,
  from = "up",
  delay = 0,
  duration = 700,
  as: Tag = "div",
  className = "",
  threshold = 0.15,
  ...rest
}) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Anciens navigateurs : on affiche directement
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // animation jouée une seule fois
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <Tag
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`${className} transition-all ease-out  will-change-transform motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        visible ? VISIBLE : HIDDEN[from] ?? HIDDEN.up
      }`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
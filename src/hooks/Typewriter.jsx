import { useEffect, useState, useRef } from "react"

const Typewriter = ({ text, speed = 50 }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    setDisplayedText("")

    let index = 0

    const interval = setInterval(() => {
      index++
      setDisplayedText(text.slice(0, index))

      if (index >= text.length) {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [isVisible, text, speed])

  return (
    <span ref={ref}>
      {displayedText}
    </span>
  )
}
export default Typewriter
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      {/* Декоративные лепестки */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute top-40 right-16 w-48 h-48 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-primary/8 blur-2xl" />
      </div>

      {/* Фото пары */}
      <motion.div
        className="relative w-full max-w-sm mx-auto mb-10"
        style={{ y }}
        initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
        animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://cdn.poehali.dev/projects/03270784-03ee-44e5-a324-16581e5bae48/bucket/f2037c18-998b-4136-bb03-b77286fb2096.jpg"
            alt="Константин и Ангелина"
            className="w-full h-full object-cover"
          />
          {/* Оверлей с именами */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <motion.div
            className="absolute bottom-8 left-0 right-0 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="font-serif text-3xl md:text-4xl italic tracking-wide">
              Константин и Ангелина
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Дата и подпись */}
      <motion.div
        className="text-center z-10"
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-3">17 · 07 · 2026</p>
        <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight">
          Свадебное<br /><em className="italic text-primary">приглашение</em>
        </h1>
        <p className="mt-4 text-muted-foreground text-sm">г. Сургут · Ресторан Plum</p>
      </motion.div>

      {/* Прокрутить вниз */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
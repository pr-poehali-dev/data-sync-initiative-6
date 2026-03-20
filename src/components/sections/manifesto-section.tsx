import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center bg-background px-6 py-24"
    >
      {/* Декоративный цветочный элемент */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-bl from-accent/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Дорогие гости
        </motion.p>

        <h2 className="text-xl md:text-2xl font-serif italic leading-relaxed text-center text-foreground/10">
          Этим летом состоится очень важное для нас событие — наша свадьба. И этот день мы не можем представить без вас!
        </h2>

        <motion.h2
          className="absolute inset-0 text-xl md:text-2xl font-serif italic leading-relaxed text-center bg-gradient-to-r from-primary via-rose-400 to-primary bg-clip-text text-transparent"
          style={{ clipPath }}
        >
          Этим летом состоится очень важное для нас событие — наша свадьба. И этот день мы не можем представить без вас!
        </motion.h2>

        <motion.p
          className="mt-16 text-xl md:text-2xl font-serif italic text-primary text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Поэтому мы приглашаем вас разделить с нами этот долгожданный праздник
        </motion.p>
        <motion.p
          className="mt-4 text-4xl md:text-6xl font-serif text-foreground"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          17 · 07 · 2026
        </motion.p>
      </div>
    </section>
  )
}
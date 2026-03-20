import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={containerRef} className="bg-secondary px-6 py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ scale, opacity }}
        >
          <img
            src="https://cdn.poehali.dev/projects/03270784-03ee-44e5-a324-16581e5bae48/bucket/6b5c9a16-bd51-4517-aaac-e1babfb7ef71.jpg"
            alt="Константин и Ангелина"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <motion.div
            className="absolute bottom-8 left-0 right-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-serif text-white text-2xl md:text-4xl italic">
              Константин и Ангелина
            </p>
            <p className="text-white/70 text-sm mt-2 tracking-widest uppercase">17 · 07 · 2026</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
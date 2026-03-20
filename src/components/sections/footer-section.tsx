import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-20 overflow-hidden text-center">
      {/* Градиентный фон */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-rose-100 to-blue-100 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        <motion.div
          className="text-6xl mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          🌸
        </motion.div>

        <motion.h2
          className="font-serif text-4xl md:text-6xl text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          До встречи<br /><em className="italic text-primary">17 июля!</em>
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          г. Сургут · Ресторан Plum · Набережный просп., 13/1
        </motion.p>

        <motion.div
          className="pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm">
            С любовью, Константин и Ангелина · 2026
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

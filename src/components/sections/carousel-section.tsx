import { motion } from "framer-motion"

const colors = [
  { name: "Голубой", hex: "#BFDBFE", bg: "bg-blue-200" },
  { name: "Жёлтый", hex: "#FEF08A", bg: "bg-yellow-200" },
  { name: "Розовый", hex: "#FBCFE8", bg: "bg-pink-200" },
  { name: "Серебристый", hex: "#E2E8F0", bg: "bg-slate-200" },
  { name: "Бежевый", hex: "#E5D5B0", bg: "bg-amber-100" },
  { name: "Зелёный", hex: "#BBF7D0", bg: "bg-green-200" },
]

export function CarouselSection() {
  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-serif text-primary-foreground text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Дресс-код
        </motion.h2>
        <motion.p
          className="text-primary-foreground/80 text-center mb-16 font-light max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Нам будет приятно, если вы поддержите стилистику нашей свадьбы и используете в ваших нарядах предложенные цвета
        </motion.p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          {colors.map((color, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${color.bg} shadow-md border-2 border-white/50`}
                style={{ backgroundColor: color.hex }}
              />
            </motion.div>
          ))}
        </div>

        {/* Пожелания */}
        <motion.div
          className="mt-20 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-foreground text-2xl md:text-3xl font-serif mb-6">Пожелания</p>
          <p className="text-primary-foreground/90 font-serif text-xl md:text-2xl leading-relaxed mb-8">
            Чтобы наши руки были свободны для объятий, будем рады подаркам в конвертах.
          </p>
          <p className="text-primary-foreground/80 font-light">
            Будем благодарны вам за сохранение уютного семейного вечера и отсутствия криков «Горько!»
          </p>
        </motion.div>
      </div>
    </section>
  )
}
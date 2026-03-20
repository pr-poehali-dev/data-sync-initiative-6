import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const schedule = [
  { time: "12:35", title: "Сбор гостей возле ЗАГСа", icon: "Users" },
  { time: "13:05", title: "Регистрация в ЗАГС", icon: "Heart" },
  { time: "14:00", title: 'Фотосессия в парке "Кедровый лог"', icon: "Camera" },
  { time: "16:00", title: "Фуршет", icon: "Wine" },
  { time: "16:30", title: "Банкет", icon: "UtensilsCrossed" },
  { time: "22:00", title: "Завершение", icon: "Star" },
]

export function ShowcaseSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          17 июля 2026
        </motion.p>
        <motion.h2
          className="font-serif text-3xl md:text-5xl text-foreground text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Программа торжества
        </motion.h2>

        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Карточка */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <div className={`bg-secondary rounded-2xl p-5 inline-block w-full md:w-auto`}>
                    <p className="font-serif text-2xl text-primary">{item.time}</p>
                    <p className="text-foreground mt-1 font-light">{item.title}</p>
                  </div>
                </div>

                {/* Иконка по центру */}
                <div className="hidden md:flex relative z-10 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/30 items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} fallback="Star" size={16} className="text-primary" />
                </div>

                {/* Пустая сторона */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
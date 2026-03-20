import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1)
const firstDayOffset = 2 // July 2026 starts on Wednesday (offset 2 for Mon-based grid)

export function FeaturesSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Дата торжества
        </motion.p>

        {/* Мини-календарь июль */}
        <motion.div
          className="bg-background rounded-3xl p-8 max-w-sm mx-auto shadow-sm mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <p className="font-serif text-2xl text-foreground">Июль 2026</p>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(d => (
              <div key={d} className="text-xs text-muted-foreground py-1">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: firstDayOffset }).map((_, i) => (
              <div key={`e-${i}`} />
            ))}
            {calendarDays.map((day) => (
              <div
                key={day}
                className={`relative w-8 h-8 mx-auto flex items-center justify-center text-sm rounded-full
                  ${day === 17
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-foreground hover:bg-accent/30"
                  }`}
              >
                {day}
                {day === 17 && (
                  <span className="absolute -top-2 -right-2 text-base">🤍</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Место */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Место</p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="MapPin" size={18} className="text-primary" />
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">г. Сургут, ресторан Plum</h3>
          </div>
          <p className="text-muted-foreground">Набережный просп., 13/1</p>
        </motion.div>

        {/* Фотографии ресторана */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            "https://cdn.poehali.dev/projects/03270784-03ee-44e5-a324-16581e5bae48/bucket/1cdda1d8-843b-430e-9131-d4cb17fb9a9d.jpg",
            "https://cdn.poehali.dev/files/75a5b92b-77de-4da6-9b6e-b19bfb2f1670.jpg",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <img src={src} alt={`Ресторан Plum ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Карта */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=73.461540,61.257400&z=16&pt=73.461540,61.257400,pm2rdm&text=%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD+Plum%2C+%D0%A1%D1%83%D1%80%D0%B3%D1%83%D1%82"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            title="Ресторан Plum на карте"
          />
        </motion.div>
      </div>
    </section>
  )
}
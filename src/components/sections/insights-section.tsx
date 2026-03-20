import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function InsightsSection() {
  const [surveyLink, setSurveyLink] = useState("")

  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="font-serif text-3xl md:text-5xl text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Анкета гостя
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Ваши ответы на вопросы помогут нам при организации торжества. Будем ждать ответ до 01.06.2026.
        </motion.p>

        <motion.div
          className="bg-secondary rounded-3xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Icon name="ClipboardList" size={20} className="text-primary" />
            <p className="font-serif text-xl text-foreground">Заполнить анкету</p>
          </div>

          {surveyLink ? (
            <a
              href={surveyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary/90 transition-colors font-medium text-lg"
            >
              <Icon name="ExternalLink" size={18} />
              Открыть анкету
            </a>
          ) : (
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">Ссылка на анкету ещё не добавлена</p>
              <div className="bg-background rounded-xl p-4 border border-dashed border-border">
                <p className="text-xs text-muted-foreground mb-3">Вставьте ссылку на Google Forms или другой опрос:</p>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={surveyLink}
                    onChange={(e) => setSurveyLink(e.target.value)}
                    placeholder="https://forms.google.com/..."
                    className="flex-1 bg-secondary border-0 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    className="bg-primary text-primary-foreground px-4 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm"
                    onClick={() => {}}
                  >
                    Сохранить
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.p
          className="mt-16 font-serif text-2xl md:text-3xl text-primary italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Будем ждать вас!
        </motion.p>
        <motion.p
          className="mt-3 text-muted-foreground font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          С любовью, Константин и Ангелина
        </motion.p>
      </div>
    </section>
  )
}
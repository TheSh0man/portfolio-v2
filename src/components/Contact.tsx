"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";

const TELEGRAM_BOT_TOKEN = "8988570600:AAEh39CCJJ7ACgsnrt5XyMITobTjqZGdR9A";
const TELEGRAM_CHAT_ID = "1299061746";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");

    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const text = `📩 New Portfolio Message!\n\n👤 Name: ${name}\n📧 Email: ${email}\n\n💬 Message:\n${message}\n\n🕐 ${new Date().toLocaleString()}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: "HTML",
          }),
        }
      );
      if (res.ok) {
        setFormState("sent");
        formRef.current?.reset();
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="py-40 bg-black relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left: Heading + socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
              Let&apos;s Connect.
            </h2>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12 max-w-lg">
              Have a project in mind or want to discuss a new opportunity? Drop a message.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: "a.shoman.643@gmail.com",
                  href: "mailto:a.shoman.643@gmail.com",
                },
                {
                  label: "linkedin.com/in/abdalrahmanshoman",
                  href: "https://www.linkedin.com/in/abdalrahmanshoman",
                },
                {
                  label: "github.com/TheSh0man",
                  href: "https://github.com/TheSh0man",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group text-lg font-medium"
                >
                  <span className="w-8 h-[1px] bg-white/20 group-hover:bg-white/60 transition-colors" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form in Apple Glass */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {formState === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-8 md:p-12 apple-glass rounded-[32px] text-center min-h-[400px]"
              >
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-zinc-400 text-lg">
                  Thank you for reaching out.<br />I'll get back to you very soon.
                </p>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 p-8 md:p-12 apple-glass rounded-[32px]"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    rows={4}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-colors disabled:opacity-60 text-lg"
                >
                  {formState === "idle" && "Send Message"}
                  {formState === "sending" && "Sending..."}
                  {formState === "error" && "Failed. Try Again"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

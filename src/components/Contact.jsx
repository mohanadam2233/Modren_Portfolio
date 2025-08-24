import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

const glass = "backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10";

export function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const result = await emailjs.sendForm(
        "SERVICE_ID", // <-- replace with your EmailJS service ID
        "TEMPLATE_ID", // <-- replace with your EmailJS template ID
        formRef.current,
        {
          publicKey: "PUBLIC_KEY", // <-- replace with your EmailJS public key
        }
      );
      if (result?.status === 200) setStatus("Message sent! ✅");
      else setStatus("Sent (check EmailJS). ✅");
      formRef.current?.reset();
    } catch (err) {
      setStatus("Failed to send. Check keys & template. ❌");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${glass} rounded-3xl p-6 shadow-xl`}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input name="user_name" required className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" name="user_email" required className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="text-sm text-white/70">Subject</label>
              <input name="subject" className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Let's work together" />
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell me about your project..." />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 font-medium shadow-lg hover:opacity-90">
                Send Message
              </button>
              <span className="text-sm text-white/70">{status}</span>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${glass} rounded-3xl p-6 shadow-xl`}
        >
          <h3 className="font-semibold mb-2">Let's build something great</h3>
          <p className="text-white/70 mb-4 text-sm">
            I'm open to freelance work, collaborations, and full-time opportunities. Reach out and let's chat!
          </p>
          <ul className="space-y-2 text-white/80 text-sm">
            <li className="flex items-center gap-2"><Mail size={16}/> me@example.com</li>
            <li className="flex items-center gap-2"><Github size={16}/> github.com/yourhandle</li>
            <li className="flex items-center gap-2"><Linkedin size={16}/> linkedin.com/in/yourhandle</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
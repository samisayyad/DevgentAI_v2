"use client";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";
import { db } from "@/utils/db";
import { Newsletter } from "@/utils/schema";
import { fadeInUp, staggerContainer } from "@/utils/motion";

const Contect = () => {
  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(name, email, message);

    if (name && email && message) {
      setLoading(true);
      try {
        const resp = await db.insert(Newsletter).values({
          newName: name,
          newEmail: email,
          newMessage: message,
          createdAt: moment().format("YYYY-MM-DD"),
        });

        if (resp) {
          toast("User Response recorded successfully");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          toast("Error recording response");
        }
      } catch (error) {
        console.error(error);
        toast("Error recording response");
      } finally {
        setLoading(false);
      }
    } else {
      toast("No data entered");
    }
  };
  return (
    <motion.div
      variants={staggerContainer(0.14)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="relative mx-auto max-w-4xl"
    >
      <motion.div
        variants={fadeInUp(0)}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
      >
        <div className="pointer-events-none absolute -top-24 right-12 h-48 w-48 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-8 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
        <motion.form
          variants={staggerContainer(0.1)}
          onSubmit={onSubmit}
          className="relative z-10 grid gap-6 rounded-[30px] bg-black/70 p-10 shadow-[0_40px_90px_rgba(59,130,246,0.25)]"
        >
          <motion.div variants={fadeInUp(0.05)} className="text-center">
            <h3 className="text-3xl font-semibold text-white">Get in touch</h3>
            <p className="mt-3 text-base text-white/60">
              Share a glimpse of your upcoming launch and we’ll craft the perfect studio.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp(0.12)} className="grid gap-5 md:grid-cols-2">
            <div className="group relative">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={handleInputChange(setName)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder-white/30 transition-all duration-300 focus:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black group-hover:border-white/20"
              />
              <div className="pointer-events-none absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
            </div>
            <div className="group relative">
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={handleInputChange(setEmail)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder-white/30 transition-all duration-300 focus:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black group-hover:border-white/20"
              />
              <div className="pointer-events-none absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp(0.2)} className="group relative">
            <textarea
              placeholder="Tell us about your project"
              value={message}
              onChange={handleInputChange(setMessage)}
              rows="5"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder-white/30 transition-all duration-300 focus:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black group-hover:border-white/20"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
          </motion.div>

          <motion.button
            variants={fadeInUp(0.28)}
            type="submit"
            disabled={loading}
            className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-10 text-base font-semibold text-white shadow-[0_30px_70px_rgba(67,56,202,0.35)] transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-70"
          >
            {loading ? (
              <LoaderCircle className="h-5 w-5 animate-spin" />
            ) : (
              "Send message"
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contect;

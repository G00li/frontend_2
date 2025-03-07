"use client"

import { motion } from "framer-motion"

export default function AnimacaoScroll() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-purple-500 p-4 rounded-lg"
    >
      Animação no Scroll
    </motion.div>
  )
} 
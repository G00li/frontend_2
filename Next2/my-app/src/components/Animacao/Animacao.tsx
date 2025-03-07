"use client"
import { motion } from 'framer-motion';

export default function AnimacaoBasica() {
  return(
    <motion.div 
      initial={{ x: 0, rotate: 0, borderRadius: "0%"}}
      animate = {{ x: [0, 250, 0], type: "spring", borderRadius:["0%","100%","0%"], rotate:[0, 360, 0] }}
      transition = {{ duration: 2, repeat: Infinity, ease:"easeInOut"  }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  )
}
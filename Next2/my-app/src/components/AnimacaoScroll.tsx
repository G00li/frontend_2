import {motion, useInView } from "framer-motion"
import {useRef} from "react"

export default function AnimacaoScroll(){
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  return(
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="h-96"></div>
      <motion.div 
        ref ={ref}
        initial={{opacity: 0, y: 50}}
        animate= {isInView ? {opacity: 1, y: 0 }: {}}
        transition = {{duration: 4}}
        className="w-64 h-64 bg-purple-500 text-white flex items-center justify-center rounded-lg"
      >
        Animacao Scroll
      </motion.div>
      <div className="h-96"></div>
    </div>
  )

}
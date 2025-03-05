import {motion} from "framer-motion"

export default function AnimacaoButton(){
  return(
    <motion.button
      whileHover={{scale: 1.5}}
      whileTap={{scale: 0.5}}

      className="bg-green-500 text-white px-6 py-2 rounded-lg"
    >
      Click me!
      </motion.button>

  )
}
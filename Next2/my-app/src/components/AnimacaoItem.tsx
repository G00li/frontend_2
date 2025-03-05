import {motion} from "framer-motion"


const itemVariant = {
  hidden: {opacity: 0, x: -50},
  visible: {opacity: 1, x: 0}
}

export default function AnimacaoItem(){
  return( 
    <motion.ul initial= "hidden" animate= "visible">
      {[1,2,3].map((item) => (
        <motion.li 
          key={item}
          variants={itemVariant}
          transition= {{duration: 2, delay: item * 0.3}}
          className="p-2 bg-blue-500 my-2 text-white rounded-lg"
        >
          Item {item}
        </motion.li>
      ))}
    <div className="h-96"></div>
    </motion.ul>

  )
}
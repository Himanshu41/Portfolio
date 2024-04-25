import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const NotAvailable = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("right","tween",0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
          <DragonCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(NotAvailable, "notAvailable")
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Myphoto from './canvas/Myphoto';
import MyPhotoCanvas from './canvas/Myphoto';
const Hero = () => {
  return (
    <section className="relative w-full h-screen my-auto mx-auto">
      <motion.div
        initial={{ x: 1000 }} // Initial position to the left of the screen
        animate={{ x: 0 }}      // Target position (center of the screen)
        transition={{ duration: 1 }} // Animation duration
      >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl ml-[40%] mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
        <motion.div
        initial={{ y: -1000 }} // Initial position to the left of the screen
        animate={{ y: 0 }}      // Target position (center of the screen)
        transition={{ duration: 1 }} // Animation duration
      >
            <div className='w-5 h-5 rounded-full bg-[#fbfb35]'/>          </motion.div>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Himanshu <span className='text-[#fbfb35]'>Mehta</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full stack web application using MERN stack
          </p>
        </div>
      </div>
      </motion.div>
      <motion.div
        initial={{ x: -1000 }} // Initial position to the left of the screen
        animate={{ x: 0 }}      // Target position (center of the screen)
        transition={{ duration: 1 }} // Animation duration
      >
        <MyPhotoCanvas />
      </motion.div>
      {/* <ComputersCanvas/> */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'> 
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0,24,0]
              }}  
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
import './App.css'
import { motion } from "motion/react"
function App() {


  return (
    <>
      <div> 
          <motion.div 
            id='box' 
            initial={{ scale: 0 }}
            animate={{
              x: 1500,
              scale:1,
              rotate: 360, // Add this line for rotation
              transition: {
                duration: 2,
                delay: 1,
                ease: 'anticipate',
                
              }
            }}
            whileTap={{ 
              scale: 0.95
            }}
            drag   // now its dragable
            dragConstraints={{  // kitana drag hoga
              right:1500,
              left:0,
              top:0,
              bottom:500
            }}
          >    
          </motion.div>
      </div>
    </>
  )
}

export default App

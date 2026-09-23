import { motion } from 'framer-motion'
import Home from './pages/Home'

function App() {
  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Home />
    </motion.div>
  )
}

export default App

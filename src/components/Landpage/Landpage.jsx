import './landpage.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import TypoAnime from '../typo/TypoAnime'
import Tickertape from '../Tickertape'
const Landpage = () => {
  const navigate = useNavigate()
  return (
    <main className='landpage' >
      <Header />
      <div className='landpage-content-wrapper'>

        <motion.div className="landpage-text-container"
        >
          <motion.h1
            initial={{ y: 45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >

            Advanced Copy Trading Platform for <TypoAnime />
          </motion.h1>
          <motion.p
            initial={{ y: 45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            Copy proven traders and let smart strategies work for you. Stay confident as your portfolio grows. Seize chance to achieve your financial goals and follow winning path by mirroring expert traders.
          </motion.p>
          <motion.button className="launch-btn cssbuttons-io" initial={{ y: 45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.4 }} onClick={() => {
              navigate('/signup')
            }} >
            <span>get started</span>
          </motion.button>
        </motion.div>
        <div className="landpage-img-container">
          <motion.img src="/degiromockup (6).png" alt="" className='phone'
            initial={{ y: 45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.6 }} />
        </div>
      </div>
      <Tickertape />
    </main>
  )
}

export default Landpage

import Landpage from '../components/Landpage/Landpage'
import Why from '../components/why/Why'
import Plan from '../components/plans/Plan'
import About from '../components/about/About'
import Faq from '../components/Faq/Faq'
import Review from '../components/review/Review'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Faqcard from './Faqcard'
import Videoframe from '../components/videoframe/Videoframe'
import TradersList from '../components/tradersList/TradersList'
import CardContainer from '../components/cardcontainer/CardContainer'
import TeslaWidgetContainer from '../components/Teslawidget/TeslaWidgetContainer'
import CryptoNewsContainer from '../components/CryptoNewsSection/CryptoNewsContainer'
import ForexAnalysisSection from '../components/ForexAnalysisSection/ForexAnalysisSection'
import Mt5Section from '../components/mt5/Mt5Section'
import Roadmap from '../components/roadmap/Roadmap'
const Home = () => {
  return (
    <main className='home-img'>
      <Landpage />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px', position: 'relative', zIndex: 10 }}>
        <a href="https://t.me/+5ypE0rXU3rEzNWFk" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0088cc', color: 'white', padding: '12px 24px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 15px rgba(0, 136, 204, 0.4)', transition: 'transform 0.2s ease', cursor: 'pointer' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" style={{ width: '24px', height: '24px' }} />
          Join our Telegram
        </a>
      </div>
      <CardContainer />
      <Mt5Section />
      <TradersList />
      <TeslaWidgetContainer />
      <Why />
      <Plan />
      <Roadmap />
      <Review />
      <CryptoNewsContainer />
      <ForexAnalysisSection />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
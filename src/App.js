import { useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Signup = lazy(() => import('./pages/Signup'));
const Userdashboard = lazy(() => import('./pages/Userdashboard'));
const Userdashboardfundaccount = lazy(() => import('./components/userdashboardfundaccount/Userdashboardfundaccount'));
const Userdashboardwithdraw = lazy(() => import('./components/userdashboardwithdraw/Userdashboardwithdraw'));
const Userdashboardreferrals = lazy(() => import('./components/userdashboardreferrals/Userdashboardreferrals'));
const Userdashboardplans = lazy(() => import('./components/userdashboardplans/Userdashboardplans'));
const Userdashboardtransactions = lazy(() => import('./components/userdashboardtransactions/Userdashboardtransactions'));
const Investments = lazy(() => import('./components/invesments/Investments'));
const Profile = lazy(() => import('./components/profile/Profile'));
const UserdashboardSettings = lazy(() => import('./components/userdasboardSettings/UserdashboardSettings'));
const VerifyEmail = lazy(() => import('./pages/VerifyEmail'));
const WithdrawalLogs = lazy(() => import('./components/WithdrawalLogs'));
const Checkout = lazy(() => import('./components/Checkout'));
const Admindashboard = lazy(() => import('./components/admindashboard/Admindashboard'));
const Deposit = lazy(() => import('./components/deposit/Deposit'));
const Aboutpage = lazy(() => import('./pages/Aboutpage'));
const Faq = lazy(() => import('./pages/Faq'));
const Buybitcoin = lazy(() => import('./pages/Buybitcoin'));
const Policy = lazy(() => import('./pages/Policy'));
const CopytradePage = lazy(() => import('./pages/copytrade/CopytradePage'));
const Forex = lazy(() => import('./pages/forex/Forex'));
const Indices = lazy(() => import('./pages/indices/Indices'));
const Futures = lazy(() => import('./pages/futures/Futures'));
const Stocks = lazy(() => import('./pages/stocks/Stocks'));
const News = lazy(() => import('./pages/news/News'));
const TechnicalAnalysisPage = lazy(() => import('./pages/technicalAnalysis/TechnicalAnalysisPage'));
const Heatmaps = lazy(() => import('./pages/heatmaps/Heatmaps'));
const Watchlist = lazy(() => import('./pages/watchlist/Watchlist'));
const Team = lazy(() => import('./pages/team/Team'));
const UserdashboardCopytrade = lazy(() => import('./components/userdashboardCopytrade/UserdashboardCopytrade'));
const UserdashboardKyc = lazy(() => import('./components/userdashboardKyc/UserdashboardKyc'));
const UserdashboardLiveTrading = lazy(() => import('./components/userdashboardLiveTrading/UserdashboardLiveTrading'));
const UserdashboardRanking = lazy(() => import('./components/userdashboardRanking/UserdashboardRanking'));
const UserdashboardTraders = lazy(() => import('./components/userdashboardTraders/UserdashboardTraders'));
const Verify = lazy(() => import('./pages/verifyPage/Verify'));
const PasswordReset = lazy(() => import('./components/passwordreset/PasswordReset'));
const ForgotPassword = lazy(() => import('./components/forgotpassword/ForgotPassword'));
const Commodities = lazy(() => import('./pages/commodities/Commodities'));
const Bonds = lazy(() => import('./pages/bonds/Bonds'));
const Options = lazy(() => import('./pages/options/Options'));

function App() {
  useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
    // duration=1200;
  }, [])


  const route = 'https://degiro-backend.vercel.app'
  // const route = 'http://localhost:5000'

  return (
    <>
      <AnimatePresence >
        <Router>
          <motion.div className="App"
            key={Routes.Route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.2 }}
            variants={{
              initialState: {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              animateState: {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }
            }}
          >
            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}><div style={{ color: '#0052FF', fontSize: '1.2rem', fontWeight: 'bold' }}>Loading...</div></div>}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login route={route} />} />
                <Route path='/signup' element={<Signup route={route} />} />
                <Route path='/dashboard' element={<Userdashboard route={route} />} />
                <Route path='/fundwallet' element={<Userdashboardfundaccount route={route} />} />
                <Route path='/referrals' element={<Userdashboardreferrals route={route} />} />
                <Route path='/withdraw' element={<Userdashboardwithdraw route={route} />} />
                <Route path='/plans' element={<Userdashboardplans route={route} />} />
                <Route path='/transactions' element={<Userdashboardtransactions route={route} />} />
                <Route path='/investments' element={<Investments route={route} />} />
                <Route path='/settings' element={<UserdashboardSettings route={route} />} />
                <Route path='/user/:id' element={<VerifyEmail route={route} />} />
                <Route path='/withdrawlogs' element={<WithdrawalLogs route={route} />} />
                <Route path='/checkout' element={<Checkout route={route} />} />
                <Route path='/admin' element={<Admindashboard route={route} />} />
                <Route path='/deposit' element={<Deposit route={route} />} />
                <Route path='/about' element={<Aboutpage />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/privacy-policy' element={<Policy />} />
                <Route path='/buy-crypto' element={<Buybitcoin />} />
                <Route path='/forex' element={<Forex />} />
                <Route path='/futures' element={<Futures />} />
                <Route path='/indices' element={<Indices />} />
                <Route path='/stocks' element={<Stocks />} />
                <Route path='/news' element={<News />} />
                <Route path='/technical-analysis' element={<TechnicalAnalysisPage />} />
                <Route path='/heatmaps' element={<Heatmaps />} />
                <Route path='/watchlists' element={<Watchlist />} />
                <Route path='/copytrade' element={<CopytradePage />} />
                <Route path='/team' element={<Team />} />
                <Route path='/usercopytrade' element={<UserdashboardCopytrade route={route} />} />
                <Route path='/traders' element={<UserdashboardTraders route={route} />} />
                <Route path='/live-trading' element={<UserdashboardLiveTrading route={route} />} />
                <Route path='/ranking' element={<UserdashboardRanking route={route} />} />
                <Route path='/kyc' element={<UserdashboardKyc route={route} />} />
                <Route path='/verify' element={<Verify />} />
                <Route path=':id/verify/:token' element={<VerifyEmail route={route} />} />
                <Route path='/passwordreset' element={<ForgotPassword route={route} />} />
                <Route path='/resetpassword/:email' element={<PasswordReset route={route} />} />
                <Route path='/bonds' element={<Bonds />} />
                <Route path='/options' element={<Options />} />
                <Route path='/commodities' element={<Commodities />} />
              </Routes>
            </Suspense>
          </motion.div>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App

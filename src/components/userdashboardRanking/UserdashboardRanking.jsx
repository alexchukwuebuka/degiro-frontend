import React from 'react'
import Userdashboardheader from '../userdashboardheader/Userdashboardheader'
import Loader from '../Loader'
import { useState, useEffect, useRef } from 'react'
import { FaUserAlt, FaAngleDown } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './userdashboardranking.css'
import MobileDropdown from '../MobileDropdown'

const UserdashboardRanking = ({ route }) => {
  const [userData, setUserData] = useState()
  const [loader, setLoader] = useState(false)
  const [showMobileDropdown, setShowMobileDropdown] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);

        // Check if a token exists
        const token = localStorage.getItem('token');
        console.log(token)
        if (!token) {
          navigate('/login');
          return;
        }

        // Fetch user data from the API
        const response = await fetch(`${route}/api/getData`, {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json',
          },
        });

        // Parse the response
        const data = await response.json();

        // Handle errors from the API
        if (data.status === 'error') {
          localStorage.removeItem('token'); // Clear invalid token
          navigate('/login');
        } else {
          setUserData(data); // Set user data
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login'); // Navigate to login on failure
      } finally {
        setLoader(false); // Stop loader
      }
    };

    getData();
  }, [navigate, route]);

  const closeMobileMenu = () => {
    setShowMobileDropdown(false)
  }
  return (
    <main className='homewrapper'>
      {
        loader &&
        <Loader />
      }
      <Userdashboardheader />
      <section className='dashboardhomepage'>
        <div className="dashboardheaderwrapper">
          <div className="header-notification-icon-container">
            <IoMdNotifications />
          </div>
          <div className="header-username-container">
            <h3>Hi, {userData ? userData.firstname : ''}</h3>
          </div>
          <div className="header-userprofile-container">
            <div className="user-p-icon-container">
              <FaUserAlt />
            </div>
            <div className="user-p-drop-icon" onClick={() => { setShowMobileDropdown(!showMobileDropdown); }
            }>
              <FaAngleDown />
            </div>
            <MobileDropdown showStatus={showMobileDropdown} route={route} closeMenu={closeMobileMenu} />
          </div>
        </div>
        <div className="current-rank-section">
          {userData && userData.totaldeposit >= 3000 && (
            <div className="active-trader-container">
              <div className="videoframe-text-container treader-header">
                <h1>Your current <span className="highlight">Plan</span></h1>
              </div>
              <div className="traders-card active-trader-card">
                <div className="trader-card-header">
                  <div className="trader-card-image-container">
                    <img
                      src={`${userData
                          ? userData.totaldeposit >= 21000
                            ? '/diamond.png'
                            : userData.totaldeposit >= 11000
                              ? '/download-removebg-preview (2).png'
                              : '/images-removebg-preview.png'
                          : ''
                        }`}
                      alt=""
                      className='trader-card-image'
                    />
  
                    <div className="trader-card-text-container">
                      <h3 className="trader-name">
                        {userData
                          ? userData.totaldeposit >= 21000
                            ? "Diamond Plan"
                            : userData.totaldeposit >= 11000
                              ? "Medium Plan"
                              : "Starter Plan"
                          : ""}
                      </h3>
                    </div>
  
                  </div>
                </div>
                <div className="trader-perfomance-container">
                  <div className="trader-performance">
                    <div className="trader-performance-item">
                      <p className="performance-label">capital Range</p>
                      <p className="performance-value my-value">{`${userData
                          ? userData.totaldeposit >= 21000
                            ? '$21,000 - $100,000'
                            : userData.totaldeposit >= 11000
                              ? '$11,000 - $20,999'
                              : '$3,000 - $10,999'
                          : ''
                        }`}</p>
                    </div>
                    <div className="trader-performance-item">
                      <p className="performance-label">leverage</p>
                      <p className="performance-value my-value"> {`${userData
                          ? userData.totaldeposit >= 21000
                            ? 'up to 1:100'
                            : userData.totaldeposit >= 11000
                              ? 'up to 1:50'
                              : 'up to 1:20'
                          : ''
                        }`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="videoframe-text-container treader-header">
          <h1>other <span className="highlight">Plans</span></h1>
        </div>
        <div className="traders-card-container rank-plan-container">
          <div className="traders-card">
            <div className="trader-card-header">
              <div className="trader-card-image-container">
                <img src={`/images-removebg-preview.png`} alt="" className='trader-card-image' />
              </div>
              <div className="trader-card-text-container">
                <h3 className="trader-name">Starter Plan</h3>
                <p className="trader-description">Plan</p>
              </div>
            </div>
            <div className="trader-perfomance-container">
              <div className="trader-performance">
                <div className="trader-performance-item">
                  <p className="performance-label">capital Range</p>
                  <p className="performance-value my-value"> $3,000 - $10,999</p>
                </div>
                <div className="trader-performance-item">
                  <p className="performance-label">leverage</p>
                  <p className="performance-value my-value"> up to 1:20</p>
                </div>
              </div>
              <div className="trader-performance-btn-container">
                <button className='trader-card-btn' onClick={() => { navigate('/withdraw') }}>downgrade</button>
              </div>
            </div>
          </div>
          <div className="traders-card">
            <div className="trader-card-header">
              <div className="trader-card-image-container">
                <img src={`/download-removebg-preview (2).png`} alt="" className='trader-card-image' />
              </div>
              <div className="trader-card-text-container">
                <h3 className="trader-name">Medium Plan</h3>
                <p className="trader-description">Plan</p>
              </div>
            </div>
            <div className="trader-perfomance-container">
              <div className="trader-performance">
                <div className="trader-performance-item">
                  <p className="performance-label">capital Range</p>
                  <p className="performance-value my-value"> $11,000 - $20,999</p>
                </div>
                <div className="trader-performance-item">
                  <p className="performance-label">leverage</p>
                  <p className="performance-value my-value"> up to 1:50</p>
                </div>
              </div>
              <div className="trader-performance-btn-container">
                <button className='trader-card-btn' onClick={() => { navigate('/fundwallet') }}>upgrade</button>
              </div>
            </div>
          </div>
          <div className="traders-card">
            <div className="trader-card-header">
              <div className="trader-card-image-container">
                <img src={`/diamond.png`} alt="" className='trader-card-image' />
              </div>
              <div className="trader-card-text-container">
                <h3 className="trader-name">Diamond Plan</h3>
                <p className="trader-description">Plan</p>
              </div>
            </div>
            <div className="trader-perfomance-container">
              <div className="trader-performance">
                <div className="trader-performance-item">
                  <p className="performance-label">capital Range</p>
                  <p className="performance-value my-value"> $21,000 - $100,000</p>
                </div>
                <div className="trader-performance-item">
                  <p className="performance-label">leverage</p>
                  <p className="performance-value my-value" > up to 1:100</p>
                </div>
              </div>
              <div className="trader-performance-btn-container">
                <button className='trader-card-btn' onClick={() => { navigate('/fundwallet') }}>upgrade</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UserdashboardRanking
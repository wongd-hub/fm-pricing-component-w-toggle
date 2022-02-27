import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion' // Use AnimatePresence to animate the changing of price
import Switch from '../components/Switch'
import Notification from '../components/Notification'
var _ = require('lodash')

const variants = {
  monthly: { x: 35 }, // Should match '$switch-height' in globals.scss
  annually: { x: 0  }
}

function checkScreen(width, setter) {
  if ((width >= 320 && width <= 375) || width >= 1030) {
    setter(false);
  } else {
    setter(true);
  }
}

export default function Home() {
  const [freq, setFreq] = useState('annually')
  const [unsupported, setUnsupp] = useState(undefined)

  // Listen for window resize
  useEffect(() => {
    checkScreen(window.innerWidth, setUnsupp);
    window.addEventListener(
      "resize",
      _.throttle(() => {
        checkScreen(window.innerWidth, setUnsupp);
      }, 500)
    );
  }, []);

  return (
    <div className='site-container'>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
        <title>Frontend Mentor | Pricing component with toggle</title>
      </Head>
      <Notification isDisplayed={unsupported} />
      <main className='main'>
        <div className="background-bottom"></div>
        <div className="background-top"></div>

        <div className="top-parts">
          <h1 className="site-title">Our Pricing</h1>
          <div className="frequency-switch">
            <p>Annually</p>
              <Switch freq={freq} onClick={() => {
                  if (freq === 'monthly') {
                    setFreq('annually')
                  } else {
                    setFreq('monthly')
                  }
                }} 
                variants={variants}
              />
            <p>Monthly</p></div>
        </div>

        <div className="cards">
          <div className="cards-left">
            <div className="cards-unfocused">
              <h2 className="cards-title">Basic</h2>
              <AnimatePresence>
                <motion.p 
                  className="cards-price"
                  key={freq}
                  initial={{ opacity: 0, y: -20, position: 'absolute' }}
                  animate={{ opacity: 1, y: 0, position: 'relative' }}
                  exit={{ opacity: 0, y: 20, position: 'absolute' }}
                  transition={{ duration: 0.5 }}
                >
                  {freq === 'monthly' ? '$19.99' : '$199.99'}
                </motion.p>
              </AnimatePresence>
             
              <ul>
                <li>500 GB Storage</li>
                <li>2 Users Allowed</li>
                <li>Send up to 3 GB</li>
              </ul>
              <button className="button-secondary">Learn More</button>
            </div>
          </div>

          <div className="cards-mid">
            <div className="cards-focused">
              <h2 className="cards-title">Professional</h2>
              <AnimatePresence>
                <motion.p 
                  className="cards-price"
                  key={freq}
                  initial={{ opacity: 0, y: -20, position: 'absolute' }}
                  animate={{ opacity: 1, y: 0, position: 'relative' }}
                  exit={{ opacity: 0, y: 20, position: 'absolute' }}
                  transition={{ duration: 0.5 }}
                >
                  {freq === 'monthly' ? '$24.99' : '$249.99'}
                </motion.p>
              </AnimatePresence>
              <ul>
                <li>1 TB Storage</li>
                <li>5 Users Allowed</li>
                <li>Send up to 10 GB</li>
              </ul>
              <button className="button-primary">Learn More</button>
            </div>
          </div>

          <div className="cards-right">
            <div className="cards-unfocused">
              <h2 className="cards-title">Master</h2>
              <AnimatePresence>
                <motion.p 
                  className="cards-price"
                  key={freq}
                  initial={{ opacity: 0, y: -20, position: 'absolute' }}
                  animate={{ opacity: 1, y: 0, position: 'relative' }}
                  exit={{ opacity: 0, y: 20, position: 'absolute' }}
                  transition={{ duration: 0.5 }}
                >
                  {freq === 'monthly' ? '$39.99' : '$399.99'}
                </motion.p>
              </AnimatePresence>
              <ul>
                <li>2 TB Storage</li>
                <li>10 Users Allowed</li>
                <li>Send up to 20 GB</li>
              </ul>
              <button className="button-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </main>

      <footer className='footer'>
      </footer>
    </div>
  )
}

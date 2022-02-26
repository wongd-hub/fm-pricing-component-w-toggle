import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion} from 'framer-motion'

const variants = {
  monthly: { x: 50 }, // Should match '$switch-height' in globals.scss
  annually: { x: 0  }
}

function Switch({ freq, ...props }) {

  return (
    <motion.div animate className='switch' {...props}>
      <motion.div animate={freq === 'monthly' ? 'monthly' : 'annually'} variants={variants} />
    </motion.div>
  );
}

export default function Home() {
  const [freq, setFreq] = useState('annually')

  return (
    <div className='site-container'>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
        <title>Frontend Mentor | Pricing component with toggle</title>
      </Head>

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
              }} />
            <p>Monthly</p></div>
        </div>

        <div className="cards">
          <div className="cards-left">
            <div className="cards-unfocused">
              <h2 className="cards-title">Basic</h2>
              <p className="cards-price">{freq === 'monthly' ? '$19.99' : '$199.99'}</p>
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
              <p className="cards-price">{freq === 'monthly' ? '$24.99' : '$249.99'}</p>
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
              <p className="cards-price">{freq === 'monthly' ? '$39.99' : '$399.99'}</p>
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

import React from 'react'
import reactLogo from '../../../assets/React-icon.png'
import './HomePage.scss'

const HomePage = () => (
  <div className='homePage'>
    <h1 className='bp3-heading'>Home</h1>
    <div className='content'>
      <img alt='react log' src={reactLogo} />
      <p className='bp3-text-large'>If you see this everything is working!</p>
    </div>
  </div>
)

export default HomePage

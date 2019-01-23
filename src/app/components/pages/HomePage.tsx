import React from 'react';
import './HomePage.scss';
const reactLogo = require('../../../assets/React-icon.png')

const HomePage = () => (
  <div className="homePage">
    <h1 className="bp3-heading">Home</h1>
    <div className="content">
      <img alt='react logo' src={reactLogo} />
      <p className="bp3-text-large">If you see this everything is working!</p>
    </div>
  </div>
)

export default HomePage
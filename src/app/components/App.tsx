import React from 'react';
import NavBar from './NavBar';
import Routes from './Routes';

// tslint:disable-next-line:no-var-requires
const reactLogo = require('../../assets/React-icon.png')

const App = () => {
  return (
    <main className='container'>
      <img className='container__image' alt='react logo' src={reactLogo} />
      <p>If you see this everything is working!</p>
      <NavBar />
      {Routes}
    </main>
  )
}

export default App
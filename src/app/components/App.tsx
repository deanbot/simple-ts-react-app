import React from 'react';
import './App.scss';
import Header from './Header';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='container'>
          sdf
          {Routes}
        </div>
      </main>
    </div>
  )
}

export default App
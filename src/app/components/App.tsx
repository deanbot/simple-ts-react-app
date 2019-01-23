import React from 'react';
import './App.scss';
import Header from './Header';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Header />
      <main className='container'>
        {Routes}
      </main>
    </div>
  )
}

export default App
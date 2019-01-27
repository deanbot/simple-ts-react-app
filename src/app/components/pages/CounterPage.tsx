import React from 'react'
import Counter from '../../../counter/components/Counter'
import CounterStateful from '../../../counter/components/CounterStateful'
import './CounterPage.scss'

const CounterPage = () => (
  <div className='counterPage'>
    <h1 className='bp3-heading'>Counter</h1>
    <div className='content'>
      <Counter />
      <CounterStateful />
    </div>
  </div>
)

export default CounterPage

import { Button, ButtonGroup } from '@blueprintjs/core'
import React from 'react'
import './Counter.scss'

interface State {
  readonly count: number
}

class CounterStateful extends React.Component<{}, State> {
  readonly state: State = {
    count: 0,
  }

  render() {
    const {
      count,
    } = this.state
    return (
      <div className='counter'>
        <p className='bp3-ui-text'>Counter provided via component state.</p>
        <div className='bp3-card bp3-interactive' onClick={this.handleReset}>
          Count: {count}
        </div>
        <ButtonGroup className='buttonGroup'>
          <Button icon='plus' onClick={this.handleIncrement} />
          <Button icon='minus' onClick={this.handleDecrement} />
        </ButtonGroup>
      </div>
    )
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  handleReset = () => {
    this.setState({ count: 0 })
  }
}

export default CounterStateful

import { Button, ButtonGroup } from '@blueprintjs/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrement, increment, reset } from '../';
import { IState } from '../../app';
import './Counter.scss';

const Counter = (props: Props) => (
  <div className="counter">
    <p className="bp3-ui-text">Counter provided via redux state</p>
    <div className="bp3-card bp3-interactive" onClick={props.reset}>
      Count: {props.count}
    </div>
    <ButtonGroup className="buttonGroup">
      <Button icon="plus" onClick={props.increment} />
      <Button icon="minus" onClick={props.decrement} />
    </ButtonGroup>
  </div>
)

interface Props {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

const mapStateToProps = (state: IState) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
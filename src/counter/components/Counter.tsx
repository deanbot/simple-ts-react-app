import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrement, increment } from '../';
import { IState } from '../../app';

const Counter = (props: Props) => (
  <div>
    Counter: {props.count}
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
)

interface Props {
  count: number
  increment: () => void
  decrement: () => void
}

const mapStateToProps = (state: IState) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
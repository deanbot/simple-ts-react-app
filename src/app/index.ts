import { RouterState } from 'connected-react-router';
import { NAME_COUNT } from "src/counter";

export interface IState {
  [NAME_COUNT]: number
  router: RouterState
}
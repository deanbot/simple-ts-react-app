import { RouterState } from 'connected-react-router';
import { NAME_COUNT } from '../counter';

export interface IState {
  [NAME_COUNT]: number
  router: RouterState
}
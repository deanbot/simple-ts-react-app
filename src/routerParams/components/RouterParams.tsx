import { Button, Callout } from '@blueprintjs/core'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { StoreState } from '../../app'
import './RouterParams.scss'

interface RouterParamsProps {
  pathname: string
  search: string
  hash: string
}

const RouterParams = ({ pathname, search, hash }: RouterParamsProps) => (
  <div className='routerParams'>
    <div className='content'>
      <p className='bp3-ui-text'>Click example links to see router params mapped to the component's props.</p>
      <div className='contentMain'>
        <Link to='/routerParams?color=Blue&size=40'>
          <Button>with query string</Button>
        </Link>
        <Link to='/routerParams#lovelove'>
          <Button>with hash</Button>
        </Link>
      </div>
      <Callout className='contentSub'>
        <h4 className='bp3-heading'>Params</h4>
        <div>
          <div>pathname:</div>
          <div>{pathname}</div>
        </div>
        <div>
          <div>search:</div>
          <div>{search}</div>
        </div>
        <div>
          <div>hash:</div>
          <div>{hash}</div>
        </div>
      </Callout>
    </div>
  </div>
)

const mapStateToProps = (state: StoreState) => ({
  hash: state.router.location.hash,
  pathname: state.router.location.pathname,
  search: state.router.location.search,
})

export default connect(mapStateToProps)(RouterParams)

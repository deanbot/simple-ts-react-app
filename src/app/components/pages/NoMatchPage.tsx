import { NonIdealState } from '@blueprintjs/core'
import React from 'react'

const NoMatchPage = () => (
  <div>
    <NonIdealState
      icon='error'
      title='No route match found'
    />
  </div>
)

export default NoMatchPage

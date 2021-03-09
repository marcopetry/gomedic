import React from 'react-dom'

import { Route, BrowserRouter } from 'react-router-dom'
import Home from './Home/Home'

const Pages = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  )
}

export default Pages

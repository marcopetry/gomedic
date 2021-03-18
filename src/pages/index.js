import React from 'react-dom'

import { Route, BrowserRouter } from 'react-router-dom'
import { Banner } from './Banner/Banner'
import Home from './Home/Home'

const Pages = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/sintomas-covid" exact component={Banner} />
    </BrowserRouter>
  )
}

export default Pages

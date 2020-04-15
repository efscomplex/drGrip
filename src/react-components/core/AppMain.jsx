import React from 'react'
import {
      Route, 
      Switch, 
      useLocation } from 'react-router-dom'
import {
      Home,
      Contact,
      About,
      Services, } from './../../views/'

function AppMain(){
      let location = useLocation()
      return (
            <main className="app-main">
                  <h1>{location.pathname.replace('/','').toUpperCase()}</h1>
                  <Switch>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/" component={Home}/>
                  </Switch>
      </main>
      )
}

export default AppMain
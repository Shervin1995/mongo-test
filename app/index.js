import React,{Component} from 'react'
import {render} from 'react-dom'
import {Link,Switch,BrowserRouter,Route} from 'react-router-dom'
import {App1} from './app1.js'
import {About} from './about.js'

window.React = React

const Menu = () =>
<div>
<h1>Menu</h1>
<Link to='/about'>about</Link><br/>
<Link to='/table'>table</Link><br/>
</div>


render(
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={Menu}/>
  <Route exact path="/table" component={App1} />
  <Route exact path="/about" component={About} />
  </Switch>
  </BrowserRouter>
,document.querySelector("#root") )

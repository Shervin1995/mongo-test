import React,{Component} from 'react'
import {render} from 'react-dom'
import {Link,Switch,BrowserRouter,Route} from 'react-router-dom'
import {App} from './component/app.jsx'
import {About} from './component/about.jsx'
import {Err} from './component/err404.jsx'

window.React = React

const Menu = () =>
<div>
<h1 style={{color: 'green'}}>Menu</h1>
<h3><a href='http://localhost:8080/table'>table</a></h3>
<h3><Link to='/about'>about</Link></h3>
</div>


render(
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={Menu}/>
  <Route exact path="/table" component={App} />
  <Route exact path="/about" component={About} />
  <Route component={Err} />
  </Switch>
  </BrowserRouter>
,document.querySelector("#root") )

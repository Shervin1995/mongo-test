import React,{Component} from 'react'
import {render} from 'react-dom'
import {Link,Switch,BrowserRouter,Route} from 'react-router-dom'
import {App1} from './app1.jsx'
import {About} from './about.jsx'

window.React = React

const Menu = () =>
<div>
<h1 style={{color: 'green'}}>Menu</h1>
<Link to='/about'>about</Link><br/>
{/* i use <a/> instead <Link/> because it contains dynamic content
i used express route instead react-router to load data
at 1st time window opened! */}
<a href='http://localhost:8080/table'>table</a><br/>
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

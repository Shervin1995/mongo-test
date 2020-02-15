import React,{Component} from 'react'
import {Form} from './form.jsx'

// App1
export class App extends Component{

  render(){
      return(
    	  <div>
          <h1 >Insert!</h1>
          <Form />
          <hr/>
          <h1>Show!</h1>
          <div class='showlist'>

          </div>
        </div>
  )}
}

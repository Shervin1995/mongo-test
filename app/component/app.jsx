import React,{Component} from 'react'
import {Form} from './form.jsx'
import {Table} from './table.jsx'

// App1
export class App extends Component{

  render(){
      return(
    	  <div>
          <h1 >Insert!</h1>
          <Form />
          <hr/>
          <h1>Show!</h1>
          <Table />
          <div class='showlist'>

          </div>
        </div>
  )}
}

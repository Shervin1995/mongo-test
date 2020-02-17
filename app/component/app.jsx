import React,{Component} from 'react'
import {Table} from './table.jsx'

// App1
export class App extends Component{

  render(){
      return(

    	  <div style={{height: '700px',display:'flex',
        justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width:'500px'}}>
          <Table />
        </div>
        </div>
  )}
}

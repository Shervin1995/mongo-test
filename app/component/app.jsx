import React,{Component} from 'react'
import {Form} from './form.jsx'
import {Table} from './table.jsx'

// App1
export class App extends Component{
  constructor(props){super(props)
    this.state = {
      list: [
        {price:'3000',description:'description1'},
        {price:'4000',description:'description2'}
      ]}
  }

  render(){
    const {list} = this.state
      return(
    	  <div>
          <h1 >Insert!</h1>
          <Form />
          <hr/>
          <h1>Show!</h1>
          <Table list2={list} />
          {/*
           <div class='showlist'>

          </div> */}
        </div>
  )}
}

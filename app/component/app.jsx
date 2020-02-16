import React,{Component} from 'react'
import {Form} from './form.jsx'
import {Table} from './table.jsx'

// App1
export class App extends Component{
  constructor(props){super(props)
    this.state = { list1:[] }
  }

  componentDidMount(){ this.getList() }

  getList = ()=>{
    fetch('/api/getList').then(res => res.json() ).then(list => this.setState({ list }))
  }

  render(){
    const {list1} = this.state
      return(
    	  <div>
          <h1 >Insert!</h1>
          <Form />
          <hr/>
          <h1>Show!</h1>
          <Table list={list1} />
          <div class='showlist'>

          </div>
        </div>
  )}
}

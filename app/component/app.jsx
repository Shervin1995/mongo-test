import React,{Component} from 'react'
import {Form} from './form.jsx'
import {Table} from './table.jsx'

// App1
export class App extends Component{
  constructor(props){super(props)
    this.state = { list: [{go:'ahead'}] }
  }

  componentDidMount(){ this.getList() }

  getList() {
    fetch('/api').then(x => x.json()).then(list1 => console.log(list1))
  }

  render(){
    const {list} = this.state
      return(
    	  <div>
          <h1 >Insert!</h1>
          <Form />
          <hr/>
          <h1>Show!</h1>

          {/*<Table list2={list} />
           <div class='showlist'>

          </div> */}
        </div>
  )}
}

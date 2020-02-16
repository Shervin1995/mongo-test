import React,{Component} from 'react'
import {Form} from './form.jsx'
import {Table} from './table.jsx'

// App1
export class App extends Component{
  constructor(props){super(props);
    this.state = {
      list: [
        {tourPrice:'3000',tourDescription:'description1'},
        {tourPrice:'4000',tourDescription:'description2'}
      ]}
  }

  componentDidMount(){ this.getList() }

  getList(){
    fetch('/api').then(x => x.json()).then(list => this.setState({list}))
  }

  render(){
    const {list} = this.state
      return(
    	  <div>
          <h1 >Insert!</h1>
          <Form />
          <hr/>
          <h1>Show!</h1>
          {list.map(x => <div> {x.tourPrice}<br/>{x.tourDescription} </div>)}

          {/*<Table list2={list} />

           <div class='showlist'>

          </div> */}
        </div>
  )}
}

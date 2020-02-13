import React,{Component} from 'react'
import {Link} from 'react-router-dom'


// form
const Add = ({key1,key2,submit1}) => {
  const submit = (e) => { 
  e.preventDefault();
      submit1({ 
		key1:ref1.value, 
		key2:ref2.value, 
	  })
      ref1.value=''
	  ref2.value=''
	  }
	  
  let ref1,ref2
  return <form onSubmit={submit}>
  <label htmlFor="place">key1</label>
  <input id="place" type="text"  defaultValue={key1} required ref={x => ref1 = x}/>
  <br/>
  <label htmlFor="date">key2</label>
  <input id="date" type="text"  defaultValue={key2} required ref={x => ref2 = x}/>
  <br/>
  <button>Add Form</button> 
  </form>
  }
  
Add.defaultProps={ 
key1: "Letmalcan",
key2: "98.11.25"
}
	
// table
const Fn1 = ({key01}) =>{
  
  return <table>
  <thead>
  <tr>
  <th>key2</th>
  <th>key1</th>
  </tr>
	  </thead>
	  <tbody>{key01.map(Fn2)}</tbody>
	  </table>
	  }
	  
const Fn2 = ({key1,key2}) =>
  <tr>
  <td>{key2}</td>
  <td>{key1}</td>
  </tr>
  
// App1
export class App1 extends Component{
	constructor(props){super(props)
    this.state = { value001: [ ...value01 ] }
    this.add = this.add.bind(this)
	}
	
  add(x1){
	  this.setState(
	  { value001:[ ...this.state.value001, x1 ] }
	  )}
	  
  render(){
	  const {match} = this.props
      return(
	  <div>
	  <Fn1 key01={this.state.value001} filter1={match.params.x} />
      <br/>
	  <hr/>
	  <br/>
	  <Add submit1={this.add} />
	  </div> )}}

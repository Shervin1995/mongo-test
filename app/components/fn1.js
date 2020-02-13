import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {value01} from './value.js'

// 001 form
const Add = ({key1,key2,key3,key4,submit1}) => {
  const submit = (e) => { 
  e.preventDefault();
      submit1({ 
	  key1:ref1.value, key2:ref2.value, 
	  key3:ref3.checked, key4:ref4.checked 
	  })
      ref1.value=''
	  ref2.value=''
	  ref3.checked=false
	  ref4.checked=false 
	  }
	  
  let ref1,ref2,ref3,ref4
  return <form onSubmit={submit}>
  <Auto options={myoptions} ref={x => ref1 = x} />
  <br/>
  <label htmlFor="date">key2</label>
  <input id="date" type="text"  defaultValue={key2} required ref={x => ref2 = x}/>
  <br/>
  <input id="powder" type="checkbox" defaultChecked={key3} ref={x => ref3 = x}/>
  <label htmlFor="powder">key3</label>
  <br/>
  <input  id="backcountry" type="checkbox" defaultChecked={key4} ref={x => ref4 = x}/>
  <label htmlFor="backcountry">key4</label>
  <br/>
  <button>Add Form</button> 
  </form>
  }
  
Add.defaultProps={ 
key1: "Letmalcan",
key2: "98.07.10",
key3: false,
key4: true
}

const myoptions = ['Javanmardan Park','Chitgar Lake']

class Auto extends Component{
  get value(){ 
  return this.refs.x11.value
      }
  set value(x){
	  this.refs.x11.value = x
	  }
	  
  render(){
	  return <div> 
	  <label htmlFor="id12"> key1 </label>
      <input id="id12" type='text' list='x-x' ref ='x11'/> 
	  <datalist id='x-x'>
       {this.props.options.map( 
	     (opt,i) => <option key={i}> {opt} </option> 
	    )} 
	  </datalist> 
	</div> 
	}}
	
// 002 table
const Fn1 = ({key01,filter1}) =>{
  const X1 = (!filter1 || !filter1.match(/key3|key4/)) ? 
  key01 : key01.filter(x => x[filter1])
  
  return <table>
  <thead>
  <tr>
  <th>key2</th>
  <th>key1</th>
  <th>key3</th>
  <th>key4</th>
  </tr>
      <tr>
	  <td colSpan={4}> 
	  <Link to="/table/all">all</Link>...
	  <Link to="/table/key3">key3</Link>...
	  <Link to="/table/key4">key4</Link>
      </td>
	  </tr>
	  </thead>
	  <tbody>{X1.map(Fn2)}</tbody>
	  </table>
	  }
	  
const Fn2 = ({key1,key2,key3,key4}) =>
  <tr>
  <td>{key2}</td>
  <td>{key1}</td>
  <td>{key3 ? "Yesss" : null }</td>
  <td>{key4 ? "Yes" : null }</td>
  </tr>
  
// 003 export
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

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

  render(){
      return(
	  <div>
    <h1 style='color:purple'>Insert!</h1>
      <form id='insertform' method="post">
      tourPrice:<br/>
     <input id='tourPrice' type="text" name="tourPrice"><br>
      tourDescription:<br/>
      <input id='tourDescription' type="text" name="tourDescription"/>
      <br/><br/>
        <input type="submit" value="insert"/>
      </form>
      <hr/>
      <h1 style='color:purple'>Show!</h1>

      <div class='showlist'>

      </div>
      </div>

  )}}

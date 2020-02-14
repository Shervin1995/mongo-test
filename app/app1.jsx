import React,{Component} from 'react'
// App1
export class App1 extends Component{

  render(){
      return(
	  <div>
    <h1 >Insert!</h1>
      <form id='insertform' >
      tourPrice:<br/>
     <input id='tourPrice' type="text" name="tourPrice"/><br/>
      tourDescription:<br/>
      <input id='tourDescription' type="text" name="tourDescription"/>
      <br/> <br/>
        <input type="submit" value="insert"/>
      </form>
      <hr/>
      <h1>Show!</h1>
    <div class='showlist'>

    </div>

      </div>

  )}}

import React,{Component} from 'react'

// App1
export class App extends Component{
fn23(){
  location.reload()
}
  render(){
      return(
	  <div>
    <h1 >Insert!</h1>
      <form onSubmit={this.fn23} id='insertform' >
      tourPrice:<br/>
     <input id='tourPrice' type="text" name="tourPrice" /><br/>
      tourDescription:<br/>
      <input id='tourDescription' type="text" name="tourDescription"/>
      <br/> <br/>
        <input type="submit" value="insert"/>
      </form>
      {/* part 2 table*/}
      <hr/>
      <h1>Show!</h1>
    <div class='showlist'>

    </div>

      </div>

  )}}

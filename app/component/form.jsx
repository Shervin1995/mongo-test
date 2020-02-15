import React,{Component} from 'react'


export class Form extends Component{

  fn23(){
  location.reload()
  }

  render(){
    return(
      <form onSubmit={this.fn23} id='insertform' >
      tourPrice:<br/>
      <input id='tourPrice' type="text" name="tourPrice" /><br/>
      tourDescription:<br/>
      <input id='tourDescription' type="text" name="tourDescription"/>
      <br/> <br/>
        <input type="submit" value="insert"/>
      </form>
    )}
}

import "./App.css";
import data from "./member.json";
import Member from './component/member';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data
    }
  }

handleDel = () => {
    this.setState({
      list: [],
    });
}

  render() {
    return (
      <div>
      <div className="container">
        {this.state.list.length >0 ?
        (this.state.list.map(item => {
          return <Member
            name={item.name}
            age={item.age}
            bday={item.bday}
            address={item.address}
            avatar={item.avatar}
          /> 
        })) : (<h5>List empty</h5>)}
</div>
        <button onClick={this.handleDel}> Delete all member</button>
      </div>
)
      }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import AddTask from "./components/addTask";
import ListTask from "./components/listTask";

class App extends Component {
  constructor(){
    super()
    this.state = {
      input:'',
      list: []
    }
    this.handleState=this.handleState.bind(this)
    this.onRemove=this.onRemove.bind(this)
  }

  handleState(task){
    this.setState({
      input:'',
      list: [...this.state.list, task]
    })
  }

  handleInput = (task)=>{
    this.setState({
      input: task
    })
  }

  onRemove(index){
    let newList = [...this.state.list]
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTask list={this.state.list} input={this.state.input} handleState={this.handleState} handleInput={this.handleInput}/>
        <ListTask list={this.state.list} onRemove={this.onRemove}/>
      </div>
    );
  }
}

export default App;

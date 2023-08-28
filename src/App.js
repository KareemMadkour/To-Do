import React, { Component } from 'react';
import AddItem from './Component/AddItem/AddItem';
import ToDoItem from './Component/ToDoItem/ToDoItem';
class App extends Component {
  state = {
    items : [
      {id:1, name:'Research about ...'},
      {id:2, name:'Shopping at ...'},
      {id:3, name:'Complete a ...'},
    ]
  }

  deleteItem = (id) => {
    /*let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i, 1)*/
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  addItem = (item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item)
    this.setState({items})
  }

  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>To-Do App</h1>
        <ToDoItem items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem = {this.addItem} />
      </div>
    );
  }
}
export default App;
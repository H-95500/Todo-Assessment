  
import React from 'react';
import styles from '../root/styles/App.css'
import AddTodo from './Addtodo'
import TodoList from './List'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

   
    // this.addItem = this.addItem.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    // this.saveItem = this.saveItem.bind(this);

  }
  addItem(item) {
    this.state.data.unshift({
      task: item
    });
    this.setState({
      data: this.state.data
    });
  }
  
  findItem(item) {
     
    return this.state.data.find((element) => element.task === item) 
  }
  
  saveItem(oldItem, newItem) {
    let selectedItem = this.findItem(oldItem);
    selectedItem.task = newItem;
    this.setState({ data: this.state.data });
  }
  deleteItem(item) {
    let index = this.state.data.map(element => element.task).indexOf(item);
    this.state.data.splice(index, 1);
    this.setState({ data: this.state.data });
  }
  render() {
    return (
      <div className= {styles.widget}>
        <div className="header">
          <h1> My Todo List</h1>
          <br />
          <h4> Please Enter Items</h4>
        </div>
        <AddTodo data={this.state.data} addItem={this.addItem.bind(this)} />
        <br />
        <br />
        
        <h5> Displaying Item List</h5>

        <TodoList data={this.state.data} deleteItem={this.deleteItem.bind(this)} saveItem={this.saveItem.bind(this)}
        />
      </div>
    );
  }
}

export default App;

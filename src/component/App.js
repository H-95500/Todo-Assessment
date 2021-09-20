  
import React from 'react';
import styles from '../root/styles/App.css'
import AddTodo from './Addtodo'
import TodoList from './List'
import data from '../mock/MockData'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
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
          <h4>{this.props.Content.text}</h4>
        </div>
        <AddTodo data={this.state.data} addItem={this.addItem} />
        <br />
        <br />
        <h5> {this.props.Content.sub}</h5>
        <TodoList data={this.state.data} deleteItem={this.deleteItem} saveItem={this.saveItem}/>
      </div>
    );
  }
}
 
App.defaultProps = {
  Content: data
};
export default App;


import React from 'react';
import data from '../mock/MockData'
import Submit from './common/Button'
import TodoInput from './common/InputField'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInputItem: ''
    }
    this.handleOnCreate = this.handleOnCreate.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

  }

  handleOnCreate(e) {
    e.preventDefault();
    const newItem = this.state.newInputItem;
    if (newItem !== '') {
      console.log(this.state.newInputItem)
      this.props.addItem(this.state.newInputItem)
      this.setState({
        newInputItem: ''
      });
    }
  }

  handleOnChange(e) {
    this.setState({
      newInputItem: e.target.value
    })
  }

  render() {
    return (
      <div className="textField">
       <TodoInput 
          type="text"
          placeholder={this.props.Content.placeholder}
          value= {this.state.newInputItem}
          handleOnChange={(e) => { this.handleOnChange(e) }} />
        <Submit value={this.props.Content.addButton}
          onClick={(e) => { this.handleOnCreate(e) }} />
      </div>

    );
  }
}

AddTodo.defaultProps = {
  Content: data
};

export default AddTodo;

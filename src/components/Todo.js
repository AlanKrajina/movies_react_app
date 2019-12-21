import React, { Component } from "react";
import TodoComp from "./TodoComp";

class Todo extends Component {
   
      state = {
        items: [],
      }

// add
    addItem = e => {
        e.preventDefault()

        let newItem = {
            text: this.state.text,
          };

          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });     
          this.setState({text:''})
        }
        
        

// delete 
/*     deleteItem = (index) => {
      return this.setState({items: [...this.state.items].splice(index, 1)})
    } */

    deleteItem = (index) => {
      this.setState(prevState => ({
        items: prevState.items.filter((_, i) => i !== index) //Filter the items and sets new items without the one selected to delete === index
      }));
    };



    render() {
        return (
          <div>
            <div>

              <form onSubmit={this.addItem}>
                <input 
                    type="text"
                    value={this.state.text}
                    onChange={event => this.setState({text: event.target.value})}              
                />
                <button type="submit">add</button>
              </form>

            </div>
              <TodoComp entries={this.state.items} deleteItem={this.deleteItem}/>
          </div>
        );
      }
}

export default Todo;  


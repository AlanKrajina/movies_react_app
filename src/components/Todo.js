import React, { Component } from "react";
import TodoComp from "./TodoComp";

class Todo extends Component {
   
      state = {
        items: [],
      }

    
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
        }
         


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
              <TodoComp entries={this.state.items}/>
          </div>
        );
      }
}

export default Todo;  


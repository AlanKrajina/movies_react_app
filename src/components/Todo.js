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

    deleteItem = (index) => {
      this.setState(prevState => ({
        items: prevState.items.filter((_, i) => i !== index) 
      }));
    };


// move up-down <li>

    moveUp = (index) => {
      let duplicateState = {...this.state.items}
      let previousItem = duplicateState[index -1]
      let itemToBeMoved = duplicateState[index]
      duplicateState[index -1] = itemToBeMoved
      duplicateState[index] = previousItem
      this.setState({
        items: duplicateState
      });
    }

    moveDown = (index) => {
      let newduplicateState = this.state.items.slice() // created new array

                                                       // finding items:
      let goesUpItem = newduplicateState[index]        // created first item we clicked and found with index -> on newduplicateState array

      let goesDownItem = newduplicateState[index +1]   // created ABOVE second item we found using one index level up -> on newduplicateState array

                                                       // position switch:
      newduplicateState[index +1] = goesUpItem         // clicked itemToBeMoved moved UP to new position on array 
      newduplicateState[index] = goesDownItem          // previous item that was UP now moved DOWN to new position on array (where itemToBeMoved was)

      this.setState({
        items: newduplicateState
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
              <TodoComp entries={this.state.items} deleteItem={this.deleteItem} moveUp={this.moveUp} moveDown={this.moveDown}/>
          </div>
        );
      }
}

export default Todo;  


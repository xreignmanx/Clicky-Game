import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Counter from "./components/Counter";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };
// Use a for loop and bubble sort method to create shuffleCard() to execute when 
// Card is clicked.


const newArray = [];

// Construct method to generate the card object into the new Array
// to be able to manipulate the card "clicked" state to true and holds the value
//  until the game resets.
  
// Create a function to increment counter when an previously unselected card is 
// selected

// Create a function that resets the game when a previously selected Card is 
// selected again.

  render() {
    return (
      <Wrapper>
        <Header>FIFE LIFE
          {/* <Counter /> */}
        </Header>

    {/* Create a way to bring the entire Card in instead of the individaul
    properties */}
        {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}

          />
        ))} 
      </Wrapper>
    );
  }
}

export default App;

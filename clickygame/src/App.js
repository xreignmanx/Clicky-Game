import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };

  removeCard = id => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
  };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Score>Cards List</Score>
        {this.state.cards.map(card => (
          <Card
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

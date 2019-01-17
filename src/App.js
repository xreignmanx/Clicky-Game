import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import List from "./components/List";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };


// shuffleCard = array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
//   = id => {
//     // Filter this.state.cards for cards with an id not equal to the id being removed
//     const cards = this.state.cards.filter(card => card.id !== id);
//     // Set this.state.cards equal to the new cards array
//     this.setState({ cards });
//   };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <List>FIFE LIFE</List>
        {this.state.cards.map(card => (
          <Card
            // removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            // occupation={card.occupation}
            // location={card.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

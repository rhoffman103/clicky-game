import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
// import Container from "./components/Container";
// import Card from "./components/Card";
import CardList from "./components/CardList";

class App extends React.Component {

  state = {
    cards: [],
  }

  componentDidMount() {
    this.generateCards();
  }

  generateCards = () => {
    const cardArray = [];

    [1,2,3,4,5,6,7,8,9,10,11,12].forEach(number => {
      const card = {};
      card["id"] = number;
      cardArray.push(card);
    });

    this.setState({
      cards: cardArray
    });
  };

  handleCardClick = (id) => {
    console.log(id);
  }

  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <CardList
          cards = {this.state.cards}
          processFunction = {this.handleCardClick}
        />
      </div>
    </Router>
    );
  }

}

export default App;

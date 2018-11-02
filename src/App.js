import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CardList from "./components/CardList";
import playingCards from "./playingCards.json";

class App extends React.Component {

  state = {
    playingCards
  }

  componentDidMount() {
  }

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
          cards = {this.state.playingCards}
          processFunction = {this.handleCardClick}
        />
      </div>
    </Router>
    );
  }

}

export default App;

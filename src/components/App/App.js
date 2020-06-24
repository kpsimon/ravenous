import React from "react";
// import logo from './logo.svg';
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

//function App() same as component declaration
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, and ${sortBy}.`);
  }
  //return is the inside of render()
  render() {
      return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={businesses} />
        </div>
      );
  }
}
import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp.js";

//function App() same as component declaration
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [], searched: false };
    this.searchYelp = this.searchYelp.bind(this);
    this.validateFields = this.validateFields.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  validateFields(term, location) {
    if (term || location) {
      this.setState({ searched: true });
    } else {
      this.setState({ searched: false });
    }
  }

  //return is the inside of render()
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar
          searchYelp={this.searchYelp}
          validateFields={this.validateFields}
        />
        <BusinessList
          businesses={this.state.businesses}
          searched={this.state.searched}
        />
      </div>
    );
  }
}


import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
      valid_term: false,
      valid_location: false,
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? "active" : "";
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
    if (event.target.value) {
      this.setState({ valid_term: true });
    } else {
      this.setState({ valid_term: false });
    }
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
    if (event.target.value) {
      this.setState({ valid_location: true });
    } else {
      this.setState({ valid_location: false });
    }
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    event.preventDefault();
  }

  validateInput(event) {
    this.props.validateFields(this.state.valid_term, this.state.valid_location);
    event.preventDefault();
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.handleSearch(event);
      this.validateInput(event);
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={(event) => {
            this.handleSortByChange.bind(this, sortByOptionValue)();
            this.handleSearch(event);
            this.validateInput(event);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
            onKeyPress={this.handleKeyPress}
          />
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div
          className="SearchBar-submit"
          onClick={(event) => {
            this.handleSearch(event);
            this.validateInput(event);
          }}
        >
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;



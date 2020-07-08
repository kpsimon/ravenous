import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends Business {
  render() {
    if (this.props.searched) {
      return this.props.businesses ? (
        <div className="BusinessList">
          {this.props.businesses.map((business) => {
            return <Business business={business} key={business.id} />;
          })}
        </div>
      ) : (
        <div className="noResults">
          <p>No results found.</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default BusinessList;

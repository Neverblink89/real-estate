import React, { Component } from 'react';
import SingleListing from './SingleListing'

class Listings extends Component {
  state={

  }

  SingleListing = this.props.allListings.map((item, idx) => {
    console.log(item)
    return <SingleListing key={idx} singleItemInfo={item}/>
  })

  render () {
    console.log('LISTINGS PROPS', this.props.allListings)

    return (
      <section className="listings">
        <section className="search-area">
          <input type='text' name='search'/>
        </section>

        <section className="sort">
            <div>390 results found</div>
            <div className="sort-options">
              <select name="sortby" className="sortby">
                <option value='price-asc'>Highest Price</option>
                <option value='price-asc'>Lowest Price</option>
              </select>
              <div className="view">
                <i className="fa fa-th-list" aria-hidden="true"></i>
                <i className="fa fa-th" aria-hidden="true"></i>
              </div>
            </div>
        </section>
        <section className="listing-results">
          {this.SingleListing}
          {}
        </section>

        <section className="pagination">

        </section>

      </section>

    )
  }
}
export default Listings

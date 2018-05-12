import React, {Component} from 'react';

class Filter extends Component {
  state = {}

  render() {

    return (<section id="filter">
    <div className="inside">
      <h4>Filter</h4>
      <select name="neighborhood">
        <option>Ridgewood</option>
      </select>
      <select name="housetype" className="housetype">
        <option>Ranch</option>
      </select>
      <select name="bedrooms" className="bedrooms">
        <option>3 BR</option>
      </select>
      <div className="filters-price">
        <span className="title">Price</span>
        <input type="text" name="min-price" className="min-price"/>
        <input type="text" name="max-price" className="max-price"/>
      </div>
      <div className="floor-space">
        <span className="title">Floor Space</span>
        <input type="text" name="min-ft" className="min-ft"/>
        <input type="text" name="max-ft" className="max-ft"/>
      </div>
      <div className="fitler-extras">
        <label for="extras">
          <span>Elevators</span>
          <input type="checkbox" value="elevator" name="extras"/>
        </label>
        <label for="extras">
          <span>Swimming Pool</span>
          <input type="checkbox" value="swimming-pool" name="extras"/>
        </label>
        <label for="extras">
          <span>Finished Basement</span>
          <input type="checkbox" value="finished-basement" name="extras"/>
        </label>
        <label for="extras">
          <span>Gym</span>
          <input type="checkbox" value="gym" name="extras"/>
        </label>
        </div>
      </div>
    </section>)
  }
}
export default Filter

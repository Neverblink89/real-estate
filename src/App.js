import React, { Component } from 'react';
import Header from './components/Header';
import Filter from "./components/Filter";
import Listings from "./components/Listings";
import './App.css';
import './content.css';

class App extends Component {

  state={
    fullListings: [
    {
      location:'Miami',
      image_url:'https://static.mansionglobal.com/production/media/article-images/89546d75dcffd4e1e19e9975ab317c6a/large_miamimansion6.jpg',
    },
    {
      location:'Los Angeles',
      image_url:'http://cdn.luxuryrentalsmiamibeach.com/GetImageFromDB.aspx?ID=c478242e-1c9f-48ac-b255-03a9c4844fd2&Part=1',
    },
  ]
  }

  filterFunction = (searchName) => {
    console.log('USER INPUT', searchName)
    let stateCopy = [...this.state.fullListings]
    let filteredStateCopy = stateCopy.filter((item) => {
      return item.location === searchName
    })
      console.log('FILTERED STATE COPY', filteredStateCopy)

    this.setState({fullListings:filteredStateCopy})
  }

  render() {
    console.log('NEW FILTEREED STATE', this.state)
    return (
      <div className="App">
        <Header filterFunc={this.filterFunction}/>
        <section>
          <Filter />
          <Listings allListings={this.state.fullListings} />
        </section>
      </div>
    );
  }
}

export default App;

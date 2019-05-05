import React, { Component } from 'react';
import FilterableList from './FilterableList/FilterableList';
import SearchBar from './SearchBar/SearchBar';
import FilterOptions from './FilterOptions/FilterOptions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All',
      items: [],
    };
  }

  handleSearch(searchTerm) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDV0cJsbE4lqwa-nyAn5qDs095DDTHoIj4`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }
  
  render () {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <SearchBar 
          searchTerm={this.state.searchTerm}
          handleSearch={term=>this.handleSearch(term)}/>
        <FilterOptions
          filterOption={option => this.updateFilterOption(option)}/>
        <FilterableList 
          items={this.state.items}/>
      </main>
    );
  }
}

export default App;

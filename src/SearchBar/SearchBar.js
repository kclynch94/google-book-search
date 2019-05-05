import React, { Component } from 'react'

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        this.setState({searchTerm: event.target.value});
    }
    render () {
        return (
            <div>
                <h1>Search: </h1>
                <input
                    placeholder="Search Term"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    />
                <button
                    onClick={e => this.props.handleSearch(this.state.searchTerm)}>
                    Search
                </button>

            </div>
        )
    }
}

export default SearchBar;
import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {
    render() {
      const list = this.props.items.map((item, index) => (
        <ListItem key={index} item={item}/>
       ))
          
      return (
        <div className="FilterableList">
          {list}
        </div>
      );
    }
  }
  
  FilterableList.defaultProps = {
    items: []
  };
  
  
  export default FilterableList;
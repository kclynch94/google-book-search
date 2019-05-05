import React, { Component } from 'react';

class ListItem extends Component {
    render () {
        return(
            <div className="ListItem">
                <div className="Thumbnail">
                    <img src={this.props.item.volumeInfo.imageLinks.thumbnail} alt="book cover"></img>
                </div>
                <div className="bookInfo">
                    <h1 className="bookTitle">{this.props.item.volumeInfo.title}</h1>
                    <p>{this.props.item.volumeInfo.author}</p>
                    <p>{this.props.item.volumeInfo.description}</p>
                </div>

            </div>
        )
    }
}


export default ListItem;
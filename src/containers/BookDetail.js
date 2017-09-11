import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
import {ListGroup, ListGroupItem} from 'react-bootstrap'
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return (
        <div className ="App">Select a book to get started!</div>
      )
    }
    return (
      <div className="container">
      <ListGroup fill>
        <h3> Details for: </h3>
        <h4 className="title">{this.props.book.title}</h4>
        <ListGroupItem><div>{this.props.book.pages} pages</div></ListGroupItem>
        <ListGroupItem><div>Author: {this.props.book.author}</div></ListGroupItem>
        <ListGroupItem><div>Price: ${this.props.book.price} USD</div></ListGroupItem>
        <ListGroupItem><div>Published: {this.props.book.published_date} by {this.props.book.publisher}</div></ListGroupItem>
        <ListGroupItem><div>Genre: {this.props.book.category.join(", ")} </div></ListGroupItem>
      </ListGroup>
      </div>
    );
  }
}

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);

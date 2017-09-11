import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap'
import logo from '../logo.svg';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  render() {
    return (
      <div className="row">
        <PageHeader className ="App">Books N' Roses: Appetite for Instruction<img src={logo} className="App-logo" alt="logo" />
      </PageHeader>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}

export default App;

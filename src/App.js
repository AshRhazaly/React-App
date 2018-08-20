import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logo from "./logo.svg";
import "./App.scss";

const store = createStore(() => [], {}, applyMiddleware());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            hello
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;

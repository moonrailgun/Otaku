import React, { Component } from 'react';

class HotApp extends Component {
  _onClick(index) {
    console.log(index);
    console.log(this);
  }

  render() {
    var appItems = this.props.list.map((item, index) => {
      return (
        <li key={index} onClick={this._onClick.bind(this, index)}>
          <img src={item.image}/>
          <span>{item.name}</span>
        </li>
      )
    });
    return (
      <ul className="hot-app">
        {appItems}
      </ul>
    )
  }
}

export default HotApp;

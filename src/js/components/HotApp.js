import React, { Component } from 'react';

class HotApp extends Component {
  _onClick(index, callback) {
    console.log(index);
    callback();
  }

  render() {
    var appItems = this.props.list.map((item, index) => {
      return (
        <li
          key={index}
          onClick={this._onClick.bind(this, index, item.callback)}>
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

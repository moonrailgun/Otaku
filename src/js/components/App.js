import React, { Component, PropTypes } from 'react';
import Banner from './Banner';

class App extends Component {
  render() {
    return (
      <div className="full-size flex-container">
        <div className="side">
          <div className="item">
            首页
          </div>
          <div className="item">
            本地
          </div>
          <div className="item">
            商城
          </div>
          <div className="item">
            设置
          </div>
        </div>
        <div className="content">
          <Banner></Banner>
        </div>
      </div>
    );
  }
};

export default App;

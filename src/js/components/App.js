import React, { Component, PropTypes } from 'react';
import Home from '../page/Home';
import Local from '../page/Local';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentPageIndex: 0
      };
  }

  _switchContentPage(index) {
    console.log("switch to page: " + index);
    this.setState({
      currentPageIndex:index
    });
  }

  render() {
    const itemListName = ["首页","本地","商城","设置"];
    const itemList = itemListName.map((name, index)=>{
      return (
        <div key={index} className="item" onClick={this._switchContentPage.bind(this, index)}>
          {name}
        </div>
      )
    })

    const contentPage = (()=>{
      const index = this.state.currentPageIndex;
      if(index === 0) {
        return (
          <Home></Home>
        )
      }else if(index === 1){
        return (
          <Local></Local>
        )
      }else{
        return (
          <div>暂无内容</div>
        )
      }
    })()
    return (
      <div className="full-size flex-container">
        <div className="side">
          {itemList}
        </div>
        <div className="content">
          {contentPage}
        </div>
      </div>
    );
  }
};

export default App;

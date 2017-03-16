import React, { Component, PropTypes } from 'react';

class ReaderHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reader-header">
        {this.props.title}
      </div>
    )
  }
}

class ReaderContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reader-content" dangerouslySetInnerHTML={{__html: this.props.content}}>
      </div>
    )
  }
}
ReaderContent.PropTypes = {
  content: PropTypes.string,
}

class ReaderFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reader-pagination">
        <div className="reader-btn reader-prev" onClick={this.props.onPrevPage}>
          上一页
        </div>
        <div className="reader-btn reader-next" onClick={this.props.onNextPage}>
          下一页
        </div>
      </div>
    )
  }
}
ReaderFooter.PropTypes = {
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
}

export default class Reader extends Component {
  constructor(props) {
    super(props);
  }
  _onPrevPage() {
    console.log("prev page");
  }
  _onNextPage() {
    console.log("next page");
  }
  _getReaderContent() {
    let text = '';
    for (var i = 0; i < 30; i++) {
      text += "测试文本<br/>";
    }
    return text
  }
  render() {
    return (
      <div className="full-size flex-container">
        <ReaderHeader title="测试标题" />
        <ReaderContent
          content={this._getReaderContent()}/>
        <ReaderFooter
          onPrevPage={this._onPrevPage.bind(this)}
          onNextPage={this._onNextPage.bind(this)}/>
      </div>
    )
  }
}

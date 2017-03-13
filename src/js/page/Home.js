import React, { Component } from 'react';
import Banner from '../components/Banner';
import HotApp from '../components/HotApp';

class Home extends Component {
  render() {
    const applist = [
      {
        "name":"testtesttesttest", "image":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=833154782,4269906888&fm=23&gp=0.jpg"
      },
      {
        "name":"testtesttesttest", "image":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=833154782,4269906888&fm=23&gp=0.jpg"
      }
    ]
    return (
      <div id="home" className="content-page">
        <Banner></Banner>
        <HotApp list={applist}></HotApp>
      </div>
    )
  }
}

export default Home;

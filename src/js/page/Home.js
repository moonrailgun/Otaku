import React, { Component } from 'react';
import Banner from '../components/Banner';
import HotApp from '../components/HotApp';

import Spider from '../spider/spider';

class Home extends Component {
  render() {
    const applist = [
      {
        "name":"网络爬虫", "image":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=833154782,4269906888&fm=23&gp=0.jpg",
        callback: ()=>{
          const spider = new Spider;
          const url = "http://www.ss.pku.edu.cn/index.php/newscenter/news/2391";
          spider.fetchPage(url);
        }
      },
      {
        "name":"测试入口", "image":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=833154782,4269906888&fm=23&gp=0.jpg"
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

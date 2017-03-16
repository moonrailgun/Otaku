import http from 'http';
import fs from 'fs';
import cheerio from 'cheerio';
import request from 'request';

import Qidian from './novel/qidian';

class Spider {
  constructor() {
    this.i = 0;
  }

  fetchPage(url) {
    // this.startRequest(url);
    const qidian = new Qidian;
    qidian.fetchPage();
  }

  startRequest(url) {
    console.time("网络请求耗时");
    request(url, (err, res)=> {
      console.timeEnd("网络请求耗时");
      if(err) {
        throw err;
      }
      let html = res.body;
      const title = [];

      var $ = cheerio.load(html); //采用cheerio模块解析html
      var time = $('.article-info a:first-child').next().text().trim();
      var news_item = {
        title: $('div.article-title a').text().trim(),
        Time: time,
        link: "http://www.ss.pku.edu.cn" + $("div.article-title a").attr('href'),
        author: $('[title=供稿]').text().trim(),
        i: this.i = this.i + 1,
      };
      console.log(news_item);
      var news_title = $('div.article-title a').text().trim();
      this._savedContent($, news_title);  //存储每篇文章的内容及文章标题
      this._savedImg($, news_title);    //存储每篇文章的图片及图片标题

      var nextLink="http://www.ss.pku.edu.cn" + $("li.next a").attr('href');
      var str1 = nextLink.split('-');  //去除掉url后面的中文
      var str = encodeURI(str1[0]);
      //这是亮点之一，通过控制I,可以控制爬取多少篇文章.
      if (this.i <= 500) {
        this.fetchPage(str);
      }
    });
  }

  _savedContent($, news_title) {
    $('.article-content p').each(function (index, item) {
      var x = $(this).text();

      var y = x.substring(0, 2).trim();

      if (y == '') {
        x = x + '\n';
        //将新闻文本内容一段一段添加到/data文件夹下，并用新闻的标题来命名文件
        fs.appendFile('./data/' + news_title + '.txt', x, 'utf-8', function (err) {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }

  _savedImg($,news_title) {
    $('.article-content img').each(function (index, item) {
      var img_title = $(this).parent().next().text().trim();  //获取图片的标题
      if(img_title.length>35||img_title==""){
        img_title="Null";
      }
      var img_filename = img_title + '.jpg';

      var img_src = 'http://www.ss.pku.edu.cn' + $(this).attr('src'); //获取图片的url

      //采用request模块，向服务器发起一次请求，获取图片资源
      request.head(img_src,function(err, res, body){
        if(err){
          console.log(err);
        }
      });
      request(img_src).pipe(fs.createWriteStream('./image/'+news_title + '---' + img_filename));     //通过流的方式，把图片写到本地/image目录下，并用新闻的标题和图片的标题作为图片的名称。
    })
  }
}

export default Spider;

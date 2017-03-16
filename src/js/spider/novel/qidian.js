import fs from 'fs';
import cheerio from 'cheerio';
import request from 'request';

class Qidian {
  constructor() {
    this.checkDir();
  }

  checkDir() {
    // 检测目录结构
    fs.stat("data/qidian", function(err, stats) {
      if(err){
        fs.mkdir("data/qidian", (err)=>{
          if(err){
            console.warn(err);
          }
        })
      }
    });
  }

  fetchPage() {
    this.getRankList();
  }

  getRankList() {
    const url = "http://r.qidian.com/";
    request(url, (err, res) => {
      if(err) {
        throw err;
      }
      let html = res.body;
      let $ = cheerio.load(html);
      let rank = $('.main-content-wrap .rank-body .rank-list');
      for(let i = 0;i<rank.length;i++){
        let item = rank[i];
        let rankTitle = $(item).find('.wrap-title').text().trim();
        let bookName = $(item).find('.book-wrap .book-info h4').text().trim();
        let bookDigital = $(item).find('.book-wrap .book-info p.digital').text().trim();
        console.log({
          rankTitle:rankTitle,
          bookName:bookName,
          bookDigital:bookDigital
        });
      }
    })
  }
}

export default Qidian;

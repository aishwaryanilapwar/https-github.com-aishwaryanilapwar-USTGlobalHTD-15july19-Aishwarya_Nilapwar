import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsData:any='';
  news=[
    {
      name:'Swaraj told PM ',
      img:'https://spiderimg.amarujala.com/assets/images/2018/10/13/750x506/sushma-swaraj_1539391744.jpeg',
      description:'Swaraj told PM Isme aapki nahi chalegi before his first UN speech During an interview with Akshay Kumar PM Narendra Modi had revealed he wanted his first UN speech in  to be an extempore but Sushma Swaraj asked him to have a written speech She said Isme aapki nahi chalegi aapko maanna hi padega PM Modi recalled Swaraj had shared the interview and expressed gratitude to PM Modi for remembering the incident'
    },
    {
      name:'NSA Doval interacts with Kashmiris over lunch, takes stock',
      img:'https://static.toiimg.com/photo/imgsize-69623,msid-70572783/70572783.jpg',
      description:'Wednesday visited Shopian and met with some local people'
    },
    {
      name:'Amit Shah to Yediyurappa: Focus on flood relief, take up cab',
      img:'https://c.ndtvimg.com/2019-07/snjl0638_yeddyurappa-afp-650_625x300_26_July_19.jpg',
      description:'Amit Shah, BJP president, would have preferred to tread cautiously on Karnataka but gave in after an emotional Yediyurappa called him at midnight and said it was his "last chance to be Karnataka CM'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  sendNews(ne)
  {
    this.newsData=ne;
    console.log(ne);
  }

}

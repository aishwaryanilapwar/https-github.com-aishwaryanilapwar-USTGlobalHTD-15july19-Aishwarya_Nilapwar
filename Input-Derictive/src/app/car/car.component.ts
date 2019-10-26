import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carData:any='';
  cars=[
    { 
      name:'Kia Seltos',
      img:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Kia-Seltos/6232/1562746799300/front-left-side-47.jpg?tr=w-456,e-sharpen',
      description:'Kia will also offer a 1.4-litre turbocharged BS6-compliant petrol engine with the Seltos. It makes 140PS of power and 242Nm of torque. This engine can be had with either a 6-speed manual gearbox or a 7-speed DCT as well. The DCT has a claimed efficiency of 16.5kmpl while the manual is less efficient as it claims to deliver 16.1kmpl'
    },
    { 
      name:'Maruti XL6',
      img:'https://stimg.cardekho.com/images/car-images/630x420/Maruti/Maruti-XL6/7026/1564750519146/front-left-side-47.jpg',
      description:'Under the hood, the XL6 is expected to get a BS6 version of the K15B petrol engine that also powers the standard Ertiga. In the Ertiga, it makes 95PS of power and 138Nm of peak torque. It is available with either a 6-speed manual gearbox or a 4-speed torque converter automatic unit.'
    },
    { 
      name:'Renault Triber',
      img:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Renault-Triber/6213/1563960084369/front-left-side-47.jpg?tr=w-456,e-sharpen',
      description:'It will feature a 1.0-litre, 3-cylinder petrol engine which will churn out 72PS of power and 96Nm of torque. Transmission options include a 5-speed manual as well as a 5-speed AMT. The ARAI fuel efficiency figure for the manual variant is 20kmpl while the AMT is more efficient with a 20.5kmpl figure. '
    },
    { 
      name:'Toyota Rush',
      img:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Toyota-Rush/2016/1551159096469/front-left-side-47.jpg?tr=w-456,e-sharpen',
      description:' A herd of Toyota Rush was spotted on a trailer in West Bengal recently. Apart from launch, we suspect it could be here to serve as a test bed for a C-segment MPV that Maruti and Toyota plan to launch in the near future under its partnership.'
    },
    { 
      name:'Tata Altroz',
      img:'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tata-Altroz/6835/1551947126539/front-left-side-47.jpg?tr=w-456,e-sharpen',
      description:' The Geneva model had the Nexon’s 1.2-litre turbo-petrol engine with a power rating of 102PS and 140Nm while mated to a 5-speed manual. Tata is also expected to offer the Altroz with a 1.2-litre naturally-aspirated engine and a 1.5-litre diesel engine'
    }



  ]
  constructor() { }
sendCars(car)
{
  this.carData=car;
  console.log(car);
}
  ngOnInit() {
             }

}

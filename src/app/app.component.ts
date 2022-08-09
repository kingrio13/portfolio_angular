import { Component } from '@angular/core';


interface Item {
  imageSrc: string;
  imageAlt: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  

  data: Item[] = [
    {
      imageSrc: 'assets/img/works/sample1.png',
      imageAlt: '1'
    },
  
    {
      imageSrc: 'assets/img/works/sample3.png',
      imageAlt: '3'
    },
    {
      imageSrc: 'assets/img/works/sample4.png',
      imageAlt: '4'
    },
    {
      imageSrc: 'assets/img/works/sample6.png',
      imageAlt: '8'
    },
  
    {
      imageSrc: 'assets/img/works/sample7.png',
      imageAlt: '7'
    },


    {
      imageSrc: 'assets/img/works/sample2.png',
      imageAlt: '2'
    },
    
    {
      imageSrc: 'assets/img/works/sample8.jpg',
      imageAlt: '6'
    },
 
  ]
  
}

import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) 
                    || document.body.scrollTop;

    var element = document.getElementById("navbar");
    if (scrollTop >= 1) {
      element.classList.add('bg-white');
    } else {
      element.classList.remove('bg-white');
    }

    var toTopScroll = document.getElementById("topScroll");
    if (scrollTop >= 100) {
      toTopScroll.classList.remove('d-none');
    } 
    else if (scrollTop <= 100){
      toTopScroll.classList.add('d-none');
    }
  }

  scrollToTop(){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 6);
  }
  

  
  

}

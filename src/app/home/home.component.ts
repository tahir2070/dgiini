import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('tasker', {static: true}) tasker: ElementRef;
  @ViewChild('clientSteps', { static: true }) clientSteps: ElementRef;
  @ViewChild('taskerSteps', { static: true }) taskerSteps: ElementRef;
  @ViewChild('howItWorks', { static: true }) howItWorks: ElementRef;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.tasker.nativeElement.addEventListener('mouseover', function(){
      let box = document.getElementById('clientTaskerBox');
      box.classList.add('tasker-active');
      box.classList.add('client-fade');
    })
    this.tasker.nativeElement.addEventListener('mouseleave', function () {
      let box = document.getElementById('clientTaskerBox');
      box.classList.remove('tasker-active');
      box.classList.remove('client-fade');
    })
  }

  showTaskerSteps(){
    this.clientSteps.nativeElement.classList.remove('d-block');
    this.clientSteps.nativeElement.classList.add('d-none');

    this.taskerSteps.nativeElement.classList.remove('d-none');
    this.taskerSteps.nativeElement.classList.add('d-block');

    document.querySelector('#howItWorks').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  showClientSteps(){
    this.clientSteps.nativeElement.classList.remove('d-none');
    this.clientSteps.nativeElement.classList.add('d-block');

    this.taskerSteps.nativeElement.classList.remove('d-block');
    this.taskerSteps.nativeElement.classList.add('d-none');

    document.querySelector('#howItWorks').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}

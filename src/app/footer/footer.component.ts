import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public currentTabOpen = 1;
  @ViewChild('postTaskBackBtn', { static: false }) postTaskBackBtn: ElementRef;
  @ViewChild('postTaskNextBtn', { static: false }) postTaskNextBtn: ElementRef;
  @ViewChild('postTaskPostBtn', { static: false }) postTaskPostBtn: ElementRef;
  @ViewChild('postTaskProgressBar', { static: false }) postTaskProgressBar: ElementRef;
  @ViewChild('postTaskProgressText', { static: false }) postTaskProgressText: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  NextTab() {
    if (this.currentTabOpen > 5) return false;
    // Close Old Tab
    let oldTab = document.getElementById('post-task-step-'+this.currentTabOpen);
    oldTab.classList.remove('active');
    oldTab.classList.add('fade');
    // Increment To Next Tab
    this.currentTabOpen++;
    // Open Next Tab
    let newTab = document.getElementById('post-task-step-' + this.currentTabOpen);
    newTab.classList.add('active');
    newTab.classList.remove('fade');

    if (this.currentTabOpen == 2) {
      this.postTaskProgressBar.nativeElement.style.width = '33%'
      this.postTaskProgressText.nativeElement.innerHTML = '33%';
      this.postTaskBackBtn.nativeElement.classList.remove('d-none');
    }

    if (this.currentTabOpen == 3) {
      this.postTaskProgressBar.nativeElement.style.width = '50%'
      this.postTaskProgressText.nativeElement.innerHTML = '50%';
    }

    if (this.currentTabOpen == 4) {
      this.postTaskProgressBar.nativeElement.style.width = '66%'
      this.postTaskProgressText.nativeElement.innerHTML = '66%';
    }

    if (this.currentTabOpen == 5) {
      this.postTaskProgressBar.nativeElement.style.width = '83%'
      this.postTaskProgressText.nativeElement.innerHTML = '83%';
    }

    if (this.currentTabOpen == 6) {
      this.postTaskProgressBar.nativeElement.style.width = '100%'
      this.postTaskProgressText.nativeElement.innerHTML = '100%';
      this.postTaskNextBtn.nativeElement.classList.add('d-none');
      this.postTaskPostBtn.nativeElement.classList.remove('d-none');
    }
  }

  PreviousTab() {
    // Close Old Tab
    let oldTab = document.getElementById('post-task-step-' + this.currentTabOpen);
    oldTab.classList.remove('active');
    oldTab.classList.add('fade');
    // Increment To Next Tab
    this.currentTabOpen--;
    // Open Next Tab
    let newTab = document.getElementById('post-task-step-' + this.currentTabOpen);
    newTab.classList.add('active');
    newTab.classList.remove('fade');

    if (this.currentTabOpen == 1) {
      this.postTaskProgressBar.nativeElement.style.width = '16%'
      this.postTaskProgressText.nativeElement.innerHTML = '16%';
      this.postTaskBackBtn.nativeElement.classList.add('d-none');
    }

    if (this.currentTabOpen == 2) {
      this.postTaskProgressBar.nativeElement.style.width = '33%'
      this.postTaskProgressText.nativeElement.innerHTML = '33%';
    }

    if (this.currentTabOpen == 3) {
      this.postTaskProgressBar.nativeElement.style.width = '50%'
      this.postTaskProgressText.nativeElement.innerHTML = '50%';
    }

    if (this.currentTabOpen == 4) {
      this.postTaskProgressBar.nativeElement.style.width = '66%'
      this.postTaskProgressText.nativeElement.innerHTML = '66%';
    }

    if (this.currentTabOpen == 5) {
      this.postTaskProgressBar.nativeElement.style.width = '83%'
      this.postTaskProgressText.nativeElement.innerHTML = '83%';
      this.postTaskNextBtn.nativeElement.classList.remove('d-none');
      this.postTaskPostBtn.nativeElement.classList.add('d-none');
    }
  }

}

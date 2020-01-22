import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  public currentContactTabOpen = 1;

  constructor() { }

  ngOnInit() {
  }

  NextContactTab() {
    if (this.currentContactTabOpen > 4) return false;

    let oldTab = document.getElementById('step-' + this.currentContactTabOpen);
    oldTab.classList.remove('active');
    oldTab.classList.add('fade');
    // Increment To Next Tab
    this.currentContactTabOpen++;
    // Open Next Tab
    let newTab = document.getElementById('step-' + this.currentContactTabOpen);
    newTab.classList.add('active');
    newTab.classList.remove('fade');
    // Update the Progress-Bar & Buttons
    let progressBar = document.getElementById('contactProgressBar');
    let progressText = document.getElementById('contactProgressText');
    let backButton = document.getElementById('contactBackBtn');
    let nextButton = document.getElementById('contactNextBtn');
    let sendButton = document.getElementById('contactSendMsg');

    if (this.currentContactTabOpen == 2) {
      progressBar.style.width = '67%'
      progressText.innerHTML = '67%';
      backButton.classList.remove('d-none');
    }
    if (this.currentContactTabOpen == 3) {
      progressBar.style.width = '100%'
      progressText.innerHTML = '100%';
      nextButton.classList.add('d-none');
      sendButton.classList.remove('d-none');
    }
    if (this.currentContactTabOpen == 4) {
      backButton.classList.add('d-none');
      sendButton.classList.add('d-none');
    }
  } // End Next Contact Tab

  PreviousContactTab() {
    let oldTab = document.getElementById('step-' + this.currentContactTabOpen);
    oldTab.classList.remove('active');
    oldTab.classList.add('fade');
    // Decrement To Previoud Tab
    this.currentContactTabOpen--;
    // Open Previous Tab
    let newTab = document.getElementById('step-' + this.currentContactTabOpen);
    newTab.classList.add('active');
    newTab.classList.remove('fade');
    // Update the Progress-Bar & Buttons
    let progressBar = document.getElementById('contactProgressBar');
    let progressText = document.getElementById('contactProgressText');
    let backButton = document.getElementById('contactBackBtn');
    let nextButton = document.getElementById('contactNextBtn');
    let sendButton = document.getElementById('contactSendMsg');

    if (this.currentContactTabOpen == 1) {
      progressBar.style.width = '33%'
      progressText.innerHTML = '33%';
      backButton.classList.add('d-none');
    }

    if (this.currentContactTabOpen == 2) {
      progressBar.style.width = '67%'
      progressText.innerHTML = '67%';
      nextButton.classList.remove('d-none');
      sendButton.classList.add('d-none');
    }
  }

}

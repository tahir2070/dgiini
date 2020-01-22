import { Component, OnInit, ElementRef, ViewChildren, QueryList  } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  @ViewChildren('task') tasks: QueryList<any>;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    //this.task.nativeElement.addEventListener('mouseenter', this.onMouseEnter);
  }


  ngAfterViewInit(){
    this.tasks.forEach(
      task => task.nativeElement.addEventListener('click', function(){ 
        let item: any;
        let element: any = document.getElementsByClassName('task');
        for (item of element) {
          item.classList.remove('active');
        }
        task.nativeElement.classList.add('active');
      })
    );
  }

  

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() Navigate = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(element: string) {
    this.Navigate.emit(element)
  }
}

import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() Navigate = new EventEmitter();
  @Input() isMobile: boolean;
  viewDropdown = false;

  constructor(
  ) { }

  ngOnInit(): void {
    console.log(this.isMobile);
  }

  navigateTo(element: string) {
    this.Navigate.emit(element)
  }

  showMenu() {
    document.getElementById("dropdown").style.display = "block";
  }

  hideMenu() {
    document.getElementById("dropdown").style.setProperty("display", "none");
  }
}

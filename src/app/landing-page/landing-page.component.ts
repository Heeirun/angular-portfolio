import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild("aboutMe", { static: false }) aboutMe;
  @ViewChild("work", { static: false }) work;
  @ViewChild("portfolio", { static: false }) portfolio;
  @ViewChild("hobbies", { static: false }) hobbies;
  
  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(element: string) {
    console.log(element);
    this[element].nativeElement.scrollIntoView({ behavior: "smooth" });
  }

}

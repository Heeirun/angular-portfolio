import { Component, OnInit, ViewChild } from '@angular/core';
import { SizeCheckerService } from '../services/size-checker.service';

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

  public isMobileResolution: boolean;
   
  constructor(
    public sizeChecker: SizeCheckerService,
  ) { 
    // this.isMobileResolution = this.sizeChecker.getIsMobileResolution();
  }

  ngOnInit(): void {
  }

  navigateTo(element: string) {
    console.log(element);
    this[element].nativeElement.scrollIntoView({ behavior: "smooth" });
  }

}

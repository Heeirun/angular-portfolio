import { Component, OnInit, ViewChild } from '@angular/core';
import { SizeCheckerService } from '../services/size-checker.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild("aboutMe", { static: false }) aboutMe;
  @ViewChild("work", { static: false }) work;
  @ViewChild("portfolio", { static: false }) portfolio;
  @ViewChild("interests", { static: false }) interests;

  public resumeUrl: string;
   
  constructor(
    public sizeChecker: SizeCheckerService,
  ) { 
    this.resumeUrl = environment.resumeUrl;
  }

  ngOnInit(): void {
  }

  navigateTo(element: string) {
    this[element].nativeElement.scrollIntoView({ behavior: "smooth" });
  }

}

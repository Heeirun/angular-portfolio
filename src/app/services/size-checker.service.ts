import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class SizeCheckerService {

  public isMobileResolution: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe([
      // '(max-width: 1120px)'
      '(max-width: 800px)'
        ]).subscribe(result => {
          if (result.matches) {
            this.isMobileResolution = true
          } else {
            this.isMobileResolution = false;
          }
        });
  }
  
  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}

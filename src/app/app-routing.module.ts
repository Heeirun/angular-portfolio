import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
      })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
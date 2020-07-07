import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Heeirun Jayakumar';

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Heeirun Jayakumar'},
      {name: 'description', content: 'Heeirun Jayakumar\'s personal website'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

  constructor(private titleService: Title, private metaService: Meta) {

  }
}

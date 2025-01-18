import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<router-outlet class='max'></router-outlet>`
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
  }
}

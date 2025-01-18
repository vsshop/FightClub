import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet class='max'></router-outlet>`
})
export class AppComponent implements OnInit {
  @HostListener("document:mousedown", ["$event"])
  onClick(e: MouseEvent) {
    this.root(e.clientX, e.clientY);
  }

  constructor(private theme: ThemeService) { }

  ngOnInit(): void {
    this.theme.theme$.subscribe(t => document.body.className = t);
    document.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
  }

  root(x: number, y: number) {
    const root = document.documentElement;
    root.style.setProperty('--x', `${x}px`);
    root.style.setProperty('--y', `${y}px`);
  }
}

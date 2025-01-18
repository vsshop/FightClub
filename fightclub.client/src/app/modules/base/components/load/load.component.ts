import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/program/data.service';

@Component({
  selector: 'r-load',
  templateUrl: './load.component.html',
  styleUrl: './load.component.scss'
})
export class LoadComponent implements OnInit {
  constructor(private router: Router, private data: DataService) { }

  static state: boolean = false;

  async ngOnInit() {
    await this.data.loadAppData();
    this.router.navigate(["main"]);
  }
}

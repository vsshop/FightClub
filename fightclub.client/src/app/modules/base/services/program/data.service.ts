import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private initialize: boolean = false;

  private updateSubject = new BehaviorSubject<boolean>(this.initialize);
  update$: Observable<boolean> = this.updateSubject.asObservable();

  constructor() { }
  
  async loadAppData() {

    this.init = true;
    console.log("load data");
  }
  

  set init(state: boolean) {
    this.initialize = state;
    this.updateSubject.next(state);
  }

  get init(): boolean {
    return this.initialize
  }
}

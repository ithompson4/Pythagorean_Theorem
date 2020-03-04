import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  side1: number;
  side2: number;
  result: number;
  showResult: boolean = false;

  handleCalculate() {
    const data = {
      side1: this.side1,
      side2: this.side2,
      result: this.result,
    } 
    if(this.side1 == null || this.side2 == null) {
      this.showResult = false;   
    } 
    else {
      this.showResult = true;   
      this.result = Math.hypot(this.side1, this.side2);
    }
  }

  handleReset() {
      this.side1 = null;
      this.side2 = null;
      this.showResult = false;
  }

  ngOnInit() {
  }

}

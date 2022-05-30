import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  odd = this.numbers.filter(number => number %2 !== 0)
  even = this.numbers.filter(number => number %2 === 0)
  onlyOdd = false;
  value = 10
}

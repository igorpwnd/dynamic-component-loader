import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['./cellphone.component.scss']
})
export class CellphoneComponent {

  screenNumber = '';
  buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];


  addNumber(value: string | number) {
    this.screenNumber += value;
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  public nowTime = new Date();
  private interval;

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.nowTime = new Date();
    }, 1000);
  }

}

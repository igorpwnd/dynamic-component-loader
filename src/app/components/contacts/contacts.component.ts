import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input() data;
  @Output() calling = new EventEmitter();

  public contacts = [
    { name: 'Carl Johnson', phone: '(603)779-8480' },
    { name: 'Lamar Davis', phone: '(423)581-3451' },
    { name: 'Michael De Santa', phone: '(212)239-1822' },
    { name: 'Trevor Philips', phone: '(620)246-1196' },
    { name: 'Tommy Vercetti', phone: '(219)712-4418' },
    { name: 'Tony Montana', phone: 'Unknown' },
  ];

  ngOnInit(): void {
    console.log(this.data);
  }

  fireCallingEvent(person) {
    this.calling.emit('fired', person);
  }

}

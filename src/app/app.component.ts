import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CellphoneComponent } from './components/cellphone/cellphone.component';
import { CameraComponent } from './components/camera/camera.component';
import { ClockComponent } from './components/clock/clock.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('dynamic', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;

  public apps = [
    { name: 'Calculator', img: '/assets/cellphone.png', component: CellphoneComponent },
    { name: 'Camera', img: '/assets/camera.png', component: CameraComponent },
    { name: 'Clock', img: '/assets/clock.png', component: ClockComponent },
    { name: 'Contacts', img: '/assets/contacts.png', component: ContactsComponent },
  ];

  public callingNowObject;

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.injectComponent(ContactsComponent);
  }

  injectComponent(component: any): void {
    const myOwnNumber = '(703)521-7859';
    const factory = this.factoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    const componente = this.viewContainerRef.createComponent<any>(factory);
    componente.instance.data = myOwnNumber;

    if (componente.instance.calling) {
      componente.instance.calling.on('fired', (evt) => {
        this.callingNowObject = evt;
      });
    }

  }

}

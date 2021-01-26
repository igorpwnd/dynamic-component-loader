import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera/camera.component';
import { ClockComponent } from './components/clock/clock.component';
import { CellphoneComponent } from './components/cellphone/cellphone.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    AppComponent,
    CameraComponent,
    ClockComponent,
    ContactsComponent,
    CellphoneComponent
  ],
  entryComponents: [
    CameraComponent,
    ClockComponent,
    ContactsComponent,
    CellphoneComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ObjectPipe } from './object.pipe';
import { HelloPipe } from './hello.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ObjectPipe,
    HelloPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

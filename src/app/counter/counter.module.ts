import { CounterComponent } from './components/counter.component';
import { NgModule } from '@angular/core';




@NgModule({
declarations:
[
  CounterComponent
],
exports: [ CounterComponent ]
})
export class CounterModule
{}

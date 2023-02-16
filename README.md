import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { MyComponent } from './my-component';

@NgModule({
  imports: [BrowserModule],
  declarations: [MyComponent],
  entryComponents: [MyComponent]
})
export class MyModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MyComponent, { injector });
    customElements.define('my-element', customElement);
  }

  ngDoBootstrap() {}
}

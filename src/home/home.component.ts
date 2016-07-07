import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: 
    `
    <h2>Welcome home</h2>
    `
})

export class HomeComponent {

    ngOnInit(): void {
      console.log('ngOnInit() called for home');
    }
}
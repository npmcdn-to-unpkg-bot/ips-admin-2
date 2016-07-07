import { Component } from '@angular/core';

@Component({
    selector: 'app-authRedirect',
    templateUrl: '../src/authRedirect/authRedirect.html'
})

export class AuthRedirectComponent {

    ngOnInit(): void {
      console.log('ngOnInit() called for authRedirect');
    }
}
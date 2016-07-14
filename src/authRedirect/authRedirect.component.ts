//nothing happens here yet.


import { Component } from '@angular/core';

@Component({
    selector: 'app-authRedirect',
    templateUrl: '../src/authRedirect/authRedirect.html'
})

export class AuthRedirectComponent {

    ngOnInit(): void {
      console.log('ngOnInit() called for authRedirect. Nothing happens in this component yet.');
    }
}
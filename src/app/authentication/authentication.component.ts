import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    template:
    `
    <button (click)='login()'>Attempt to log in. I make no promises (use incognito mode). You'll be redirected to www.google.com if successful.</button>
    `
})

export class AuthenticationComponent {
    
    //local variables
    buttonTitle: string = "";

    //constants
    CLIENT_ID:string = "6e742bcc-ed24-4a2d-b989-f9f833f57fa4";
	TENTANT_ID:string = "abltestad.onmicrosoft.com";
	GRAPH_RESOURCE:string = "https://graph.microsoft.com";

    //function to parse the url query string
	private parseQueryString = function(url) {

        console.log("Parsing the query string!");

		var params = {}, queryString = url.substring(1),
		regex = /([^&=]+)=([^&]*)/g, m;
		while (m = regex.exec(queryString)) {
			params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
		}
		return params;
	}
	private params = this.parseQueryString(location.hash);
	public access_token:string = null;
	
	constructor() {
		//check for id_token or access_token in url
		if (this.params["id_token"] != null)
			this.getAccessToken();
		else if (this.params["access_token"] != null)
			this.access_token = this.params["access_token"];
	}
	
	login() {
        console.log("Logging in!");

		//redirect to get id_token
		window.location.href = "https://login.microsoftonline.com/" + this.TENTANT_ID + 
			"/oauth2/authorize?response_type=id_token&client_id=" + this.CLIENT_ID + 
			"&redirect_uri=" + encodeURIComponent('https://www.google.com') + 
			"&state=SomeState&nonce=SomeNonce";
	}
	
	private getAccessToken() {
        console.log("Getting the access token!");

		//redirect to get access_token
		window.location.href = "https://login.microsoftonline.com/" + this.TENTANT_ID + 
			"/oauth2/authorize?response_type=token&client_id=" + this.CLIENT_ID + 
			"&resource=" + this.GRAPH_RESOURCE + 
			"&redirect_uri=" + encodeURIComponent(window.location.href) + 
			"&prompt=none&state=SomeState&nonce=SomeNonce";
	}
    
}
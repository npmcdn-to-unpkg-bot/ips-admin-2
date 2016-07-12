import { bootstrap }    	from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } 	from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideStore }	 	from '@ngrx/store';
import { AppComponent } 	from './app/app.component';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';

export function main(): Promise<any> {

	return bootstrap(AppComponent, [
		APP_ROUTER_PROVIDERS,
		provide(LocationStrategy, {useClass: HashLocationStrategy}),
		provideStore({  }), //add a store
		HTTP_PROVIDERS,
		MdIconRegistry
	])
	.catch(err => console.error(err));

}

if (process.env.ENV === 'production') {
	document.addEventListener('DOMContentLoaded', () => main());
} else {
	let ngHmr = require('angular2-hmr');
	ngHmr.hotModuleReplacement(main, module);
}


import { bootstrap }    	from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } 	from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { provideForms, disableDeprecatedForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { provideStore }	 	from '@ngrx/store';
import { AppComponent } 	from './app/app.component';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';

//import global less file
import './css/styles.less';

export function main(): Promise<any> {

	return bootstrap(AppComponent, [
		APP_ROUTER_PROVIDERS,
		provide(LocationStrategy, {useClass: HashLocationStrategy}),//provide(LocationStrategy, {useClass: PathLocationStrategy}), //changed from HashLocationStrategy
		provideStore({  }), //add a store
		disableDeprecatedForms(),
		provideForms(),
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


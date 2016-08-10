// Imports for loading & configuring the in-memory web api for mock http server and mock data
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA }  from 'angular2-in-memory-web-api';
import { MockData }   from './app/api/mock-data';

//usual imports
import { bootstrap }    	from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } 	from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideStore }	 	from '@ngrx/store';
import { AppComponent } 	from './app/app.component';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';

import { LightsService, MyLightsStore} from './app/lights/lights.service';

//import global less file
import './css/styles.less';

export function main(): Promise<any> {

	return bootstrap(AppComponent, [
		LightsService,
		APP_ROUTER_PROVIDERS,
		provide(LocationStrategy, {useClass: HashLocationStrategy}),
		provideStore({ MyLightsStore }), //add a store
		HTTP_PROVIDERS,
		MdIconRegistry,
		{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem mock http server
		{ provide: SEED_DATA,  useClass: MockData }                // in-mem mock server data
	])
	.catch(err => console.error(err));

}

if (process.env.ENV === 'production') {
	document.addEventListener('DOMContentLoaded', () => main());
} else {
	let ngHmr = require('angular2-hmr');
	ngHmr.hotModuleReplacement(main, module);
}


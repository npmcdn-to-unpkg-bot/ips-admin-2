// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';

// RxJS
import 'rxjs';

// NGRX
import '@ngrx/store';

// Leaflet
import 'leaflet';

if ('production' === ENV) {
  // Production
} else {
  // Development
  require('angular2-hmr');
}
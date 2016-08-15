import { Component, Input, ViewChild } from '@angular/core'
import 'leaflet';

@Component({
    selector: 'ui-map',
    template: `<div [id]="mapId" style="height:100%"></div>`
})
export class MapComponent {
    @Input('map-id') mapId: string;
    map: any;
    mapOptions: L.Map.MapOptions = {};

    ngAfterViewInit () {
        this.mapOptions.center = L.latLng(39, -98);
        this.mapOptions.zoom = 4;
        this.map = L.map(this.mapId, this.mapOptions);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(this.map);
    }
}
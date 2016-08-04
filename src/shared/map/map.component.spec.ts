import {
    addProviders,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { MapComponent } from './map.component';
import 'leaflet'

describe('MapComponent::', () => {

    beforeEach(() => {
        addProviders([
            MapComponent
        ]);
    });

    it('should instantiate by injection', inject([MapComponent], (component: MapComponent) => {
        expect(component).toEqual(jasmine.any(MapComponent));
    }));

});
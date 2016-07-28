import {
    addProviders,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core'
import { ILights } from './lights.interface';
import { LightsService } from './lights.service';
import { LightsComponent } from './lights.component';

class MockLightService {
    public getAllFixtureTypes(): ILights[] {
        return [
            {
                "luminaireTypeId": 1,
                "organization_ID": 1,
                "displayName": "Light 1",
                "exteriorWidth": 2,
                "exteriorLength": 2,
                "interiorWidth": 2,
                "interiorLength": 1
            },
            {
                "luminaireTypeId": 2,
                "organization_ID": 1,
                "displayName": "Light 2",
                "exteriorWidth": 4,
                "exteriorLength": 4,
                "interiorWidth": 4,
                "interiorLength": 1
            }];
    }
}

describe('LightsComponent::', () => {

    beforeEach(() => {
        addProviders([
            LightsComponent,
            provide(LightsService, {useClass: MockLightService})
        ]);
    });

    it('should instantiate by injection', inject([LightsComponent], (component: LightsComponent) => {
        expect(component).toEqual(jasmine.any(LightsComponent));
    }));

    it('should have lights', inject([LightsComponent], (component: LightsComponent) => {
        expect(component.lights.length).toBeGreaterThan(0);
    }));

    it('should have a navHeader', inject([LightsComponent], (component: LightsComponent) => {
        expect(component.navHeader).toEqual('Lights');
    }));

    it('should have columns', inject([LightsComponent], (component: LightsComponent) => {
        expect(component.columns.length).toBeGreaterThan(0);
        expect(component.columns[0]).toEqual('Name')
    }));

    it('should have filters values', inject([LightsComponent], (component: LightsComponent) => {
        expect(component.filterValues.length).toBeGreaterThan(0);
        expect(component.filterValues[0]).toEqual('Filter');
    }));

});
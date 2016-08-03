import {
    addProviders,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { CodebooksComponent } from './codebooks.component';
import { CodebooksService} from './codebooks.service';
import { ICodebooks } from './codebooks.interface';

class MockCodebooksService {

    getAllFixtureTypes(): ICodebooks[] {
        return [
            {
                'codeBookId': 1,
                'codeBookName': 'Codebook 1',
                'codeWords': 'codez, codez, codez',
                'codeWordCount': 2,
                'symbolPattern': 'symbol patern',
                'lastUpdateBy': 'Adam'
            },
            {
                'codeBookId': 2,
                'codeBookName': 'Codebook 2',
                'codeWords': 'codez, codez, codez',
                'codeWordCount': 5,
                'symbolPattern': 'symbol patern',
                'lastUpdateBy': 'Danny'
            }];
    }
}
describe('CodebooksComponent::', () => {

    beforeEach(() => {
        addProviders([
            CodebooksComponent,
            provide(CodebooksService,  {useClass: MockCodebooksService})
        ]);
    });

    it('should instantiate by injection', inject([CodebooksComponent], (component: CodebooksComponent) => {
        expect(component).toEqual(jasmine.any(CodebooksComponent));
    }));

    it('should have a navHeader', inject([CodebooksComponent], (component: CodebooksComponent) => {
        expect(component.navHeader).toEqual('Settings > Codebooks');
    }));

    it('should have codebooks', inject([CodebooksComponent], (component: CodebooksComponent) => {
        expect(component.codebooks.length).toBeGreaterThan(0);
    }));

    it('should do something when clicked', inject([CodebooksComponent], (component: CodebooksComponent) => {
        spyOn(window, 'alert');
        component.codebookClick(1);
        expect(alert).toHaveBeenCalled();
    }));

    it('should have filters values', inject([CodebooksComponent], (component: CodebooksComponent) => {
        expect(component.filterValues.length).toBeGreaterThan(0);
        expect(component.filterValues[0]).toEqual('Filter');
    }));
});
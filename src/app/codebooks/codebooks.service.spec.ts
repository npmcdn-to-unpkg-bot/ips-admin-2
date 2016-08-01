import {
    addProviders,
    inject
} from '@angular/core/testing';

import { ICodebooks } from './codebooks.interface';
import { CodebooksService } from './codebooks.service';

describe('CodebooksService::', () => {

    beforeEach(() => {
        addProviders([CodebooksService]);
    });

    it('should instantiate by injection', inject([CodebooksService], (service: CodebooksService) => {
        expect(service).toEqual(jasmine.any(CodebooksService));
    }));

    it('should return codebooks', inject([CodebooksService], (service: CodebooksService) => {
        let codebooks = service.getAllFixtureTypes();
        expect(codebooks.length).toBeGreaterThan(0);
        let codebookType: ICodebooks = {
            'codeBookId': 1,
            'codeBookName': 'Codebook 1',
            'codeWords': 'codez, codez, codez',
            'codeWordCount': 2,
            'symbolPattern': 'symbol patern',
            'lastUpdateBy': 'Adam'
        };
        expect(typeof codebooks).toBe(typeof codebookType);
    }));
});
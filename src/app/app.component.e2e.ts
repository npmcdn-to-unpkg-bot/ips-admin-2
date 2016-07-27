"use strict"
describe('AppComponent::', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        let subject = browser.getTitle();
        let result = 'IPS Admin Tool 2.0';
        expect(subject).toEqual(result);
    });

});
import { Injectable } from '@angular/core';
import { ICodebooks } from './codebooks.interface';

@Injectable()

export class CodebooksService {
    
    getAllFixtureTypes(): ICodebooks[] {
        return [
        {
            "codeBookId": 1,
            "codeBookName": "Codebook 1",
            "codeWords": "codez, codez, codez",
            "codeWordCount": 2,
            "symbolPattern": "symbol patern",
            "lastUpdateBy": "Adam"
        },
        {
            "codeBookId": 2,
            "codeBookName": "Codebook 2",
            "codeWords": "codez, codez, codez",
            "codeWordCount": 5,
            "symbolPattern": "symbol patern",
            "lastUpdateBy": "Danny"
        }];
    }
}
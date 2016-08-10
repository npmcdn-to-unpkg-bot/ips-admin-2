/**
 * Created by sxd15 on 8/10/2016.
 */
import { ILights } from './lights/lights.interface';
import { ISite } from './sites-all/sites-all.interface';

export interface AppStore {
    myLights: ILights[];
    mySites : ISite[]
}
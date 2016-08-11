/**
 * Created by sxd15 on 8/10/2016.
 */
import { ILight } from './lights/lights';
import { ISite } from './sites-all/sites-all';

export interface AppStore {
    lights: ILight[];
    sites : ISite[]
}
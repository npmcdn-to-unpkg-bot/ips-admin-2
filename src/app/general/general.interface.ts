export interface IBusinessAddress {
    
    businessAddressId: number;
    line1: string;
    line2?: string; //optional
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export class BusinessAddress {

    constructor(
        public businessAddressId: number,
        public line1: string,
        public line2: string, //optional
        public city: string,
        public state: string,
        public postalCode: string,
        public country: string
    ){}
}

export interface IPointOfContact {

    contactId: number;
    firstName: string;
    lastName: string;
    title: string;
    phone: string;
}
"use strict";
class Address {
    constructor(_zip) {
        this._zip = _zip;
        this.addresses = {
            '532-0002': {
                prefecture: '大阪府',
                city: '大阪市',
            },
            '923-0301': {
                prefecture: '石川',
                city: '小松市',
            },
        };
    }
    get zip() {
        return this._zip;
    }
    set zip(value) {
        this._zip = value;
    }
    getAddress() {
        const here = this.addresses[this.zip];
        return `${here.prefecture} ${here.city}`;
    }
}
const myAddress = new Address('532-0002');
myAddress.zip = '923-0301';
console.log(myAddress.zip);
console.log(myAddress.getAddress());
console.log(myAddress.addresses);

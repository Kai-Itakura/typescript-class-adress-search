type AddressesType = {
  [key: string]: {
    prefecture: string
    city: string
  }
}

class Address {
  readonly addresses: AddressesType

  public constructor(private _zip: string) {
    this.addresses = {
      '532-0002': {
        prefecture: '大阪府',
        city: '大阪市',
      },
      '923-0301': {
        prefecture: '石川',
        city: '小松市',
      },
    }
  }

  get zip(): string {
    return this._zip
  }

  set zip(value: string) {
    this._zip = value
  }

  public getAddress(): string {
    const here = this.addresses[this.zip]
    return `${here.prefecture} ${here.city}`
  }
}

const myAddress = new Address('532-0002')
myAddress.zip = '923-0301'
console.log(myAddress.zip)
console.log(myAddress.getAddress())
console.log(myAddress.addresses)

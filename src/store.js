import { observable } from 'mobx'

class Store {
  @observable city

  constructor (city = 'Phnom Penh') {
    this.city = city
    console.log(this.city)
  }
}

export default Store

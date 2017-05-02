import { observable, computed, action } from 'mobx'
import Faker from 'faker'
import _ from 'lodash'

const randomPerson = () => {
  return {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    photo: Faker.image.avatar(),
  }
}

class AppStore {

  @observable _profile = randomPerson()

  @observable _friends = _.times(24, String).map(index => randomPerson())

  @computed get profile() {
    return this._profile
  }

  @computed get friends() {
    return this._friends.slice()
  }

}

export default new AppStore()
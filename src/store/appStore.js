import { observable } from 'mobx';

class AppStore {
  @observable theme = 'light'
}

const store = new AppStore()

export default store
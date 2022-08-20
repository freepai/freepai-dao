import { observable, computed, action, makeAutoObservable } from 'mobx';
class Store {
  @observable price = 2;
  @observable counter = 1;
  @observable activeApp = '';
  @observable apps = [];
  @observable isMounted = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  @computed get total() {
    return this.price * this.counter;
  }

  @action.bound
  increment() {
    this.counter++;
  }

  @action.bound
  decrement() {
    this.counter--;
  }

  @action
  setActiveApp(name) {
    this.activeApp = name;
  }
  @action
  setApps(apps) {
    this.apps = apps;
  }
  @action
  setIsMounted(isMounted) {
    this.isMounted = isMounted;
  }
}

export default Store;
export const store = new Store();

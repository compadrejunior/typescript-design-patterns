import Prototype from './Prototype';

export default class ConcretePrototype implements Prototype {
  private _id: string;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._id = crypto.randomUUID().toString();
  }

  clone(): ConcretePrototype {
    const clone = Object.create(ConcretePrototype.prototype || null);
    clone._id = this._id;
    clone._name = this._name;
    return clone;
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }
}

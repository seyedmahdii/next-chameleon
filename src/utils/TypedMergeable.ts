export default class TypedMergeable<T> {
  private readonly _obj
  constructor(obj: T) {
    this._obj = obj
  }

  get value() {
    return this._obj
  }

  merge<N>(newObj: ((oldObj: T) => N) | N): TypedMergeable<T & N> {
    if (newObj instanceof Function || typeof newObj === "function")
      return new TypedMergeable({
        ...this._obj,
        ...(newObj as Function)(this._obj),
      })
    return new TypedMergeable({ ...this._obj, ...(newObj as N) })
  }
}

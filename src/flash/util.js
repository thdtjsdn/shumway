function descAccessor(get, set) {
  return {
    get: get,
    set: set,
    configurable: true,
    enumerable: true
  };
}
function descConst(val) {
  return {
    value: val,
    configurable: true,
    enumerable: true
  };
}
function descMethod(func) {
  return descProp(func);
}
function descProp(val) {
  return {
    value: val,
    writable: true,
    enumerable: true
  };
}

function illegalOperation() {
  throw Error('Illegal Operation');
}

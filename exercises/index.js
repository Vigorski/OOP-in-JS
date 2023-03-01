const _stackMap = new WeakMap();

class Stack {
  constructor() {
    _stackMap.set(this, []);
  }

  push(val) {
    _stackMap.get(this).push(val);
  }

  pop() {
    const items = _stackMap.get(this);
    if (items.length === 0) throw new Error('stack is empty!');
    return items.pop();
  }

  peek() {
    const items = _stackMap.get(this);
    if (items.length === 0) throw new Error('stack is empty!');
    return items[items.length - 1];
  }

  get count () {
    return _stackMap.get(this).length;
  }
}

const stack = new Stack();
function HtmlElement() {
    this.click = function() {console.log('clicking')}
  }
  
  HtmlElement.prototype.focus = function() {console.log('focusing')}
  
  function HtmlSelectElement(arr = []) {
    this.items = arr;
    this.addItem = function(item) {
      this.items.push(item);
    }
    this.removeItem = function(item) {
      const indexOfItem = this.items.indexOf(item);
      if(indexOfItem !== -1) {
        this.items.splice(indexOfItem, 1)
      }
    }
    this.render = function() {
      return `
        <select>${this.items.map(item => `
          <option>${item}</option>`).join()}
        </select>`;
    }
  }
  
  HtmlSelectElement.prototype = new HtmlElement();
  HtmlSelectElement.prototype.constructor = HtmlSelectElement;
  
  function HtmlImageElement(src) {
    this.src = src;
  
    this.render = function() {
      return `<img src="${this.src}" />`;
    }
  }
  
  HtmlImageElement.prototype = new HtmlElement();
  HtmlImageElement.prototype.constructor = HtmlImageElement;
  
  const objects = [
    new HtmlSelectElement(['igor', 'fe dev', 10]),
    new HtmlImageElement('https://www.google.com/image.png'),
  ];
  console.log(objects)
  
  for (const obj of objects) {
    console.log(obj.render());
  }
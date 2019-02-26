const document = window.document;
const parser = new DOMParser();

export default class DOM {
  static create(html) {
    return this.parser.parseFromString(html, 'text/html');
  }

  static query(parent, selector) {
    if (!selector) {
      selector = parent;
      parent = document;
    }

    return parent.querySelectorAll(selector)[0];
  }

  static append(parent, node) {
    if (!node) {
      node = parent;
      parent = document;
    }

    parent.insertAdjacentHTML('afterBegin', node);
  }

  static addClass(node, className) {
    let classes = className.split(','),
        len = classes.length;

    for (let i = 0; i < len; i ++) {
      node.classList.add(classes[i]);
    }
  }

  static empty(parent) {
    parent.innerHTML = '';
  }
}
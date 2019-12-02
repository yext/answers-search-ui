import { EnzymeAdapter } from 'enzyme';

/* global Event, Text */

export default class AnswersAdapter extends EnzymeAdapter {
  isValidElement (el) {
    if (el === null) {
      return false;
    }
    return true;
  }

  nodeToHostNode (node) {
    if (!node) {
      return;
    }

    return node.instance;
  }

  nodeToElement (node) {
    if (!node || typeof node !== 'object') {
      return null;
    }
    return node.instance;
  }

  elementToNode (el) {
    return toComponentRstNode(el);
  }

  createMountRenderer (options) {
    const domNode = options.attachTo || global.document.createElement('span');
    let instance = null;
    return {
      render (el, context, callback) {
        el.mount(domNode);
        instance = el;
        if (typeof callback === 'function') {
          callback();
        }
      },

      unmount () {
        instance.remove();
        instance = null;
        domNode.innerHTML = '';
      },

      getNode () {
        const node = toComponentRstNode(instance);
        return node;
      },

      batchedUpdates (fn) {
        return fn;
      },

      simulateEvent (node, eventName, ...args) {
        if (node.nodeType !== 'host') {
          throw new Error(
            `cannot simulate event on "${node.type}" which is not a DOM element.\
            Find a DOM elment in the output and simulate an event on that.`
          );
        }

        // To be more faithful to a real browser, this should use the appropriate
        // constructor for the event type. This implementation is good enough for
        // many components though.
        const event = new Event(eventName, {
          bubbles: args.bubbles,
          composed: args.composed,
          cancelable: args.cancelable
        });
        Object.assign(event, args);

        node.instance.dispatchEvent(event);
      }
    };
  }

  createStringRenderer () {
    return {
      render (el) {
        return el.render();
      }
    };
  }

  createRenderer (options) {
    switch (options.mode) {
      case EnzymeAdapter.MODES.MOUNT: return this.createMountRenderer(options);
      case EnzymeAdapter.MODES.STRING: return this.createStringRenderer(options);
      default: throw new Error(`${options.mode} not yet implemented`);
    }
  }
}

function toComponentRstNode (answersComponent) {
  const container = answersComponent._container;
  const children = container.hasChildNodes() ? container.childNodes : [];
  const childRstNodes = [];
  for (let child of children) {
    childRstNodes.push(toDomRstNode(child));
  }

  // note(jdelerme): child components do not create component RST nodes, only the
  // child component's DOM nodes are added. This means we cannot assert on child component
  // props or state, but this seems desirable. If component RST nodes are desired for child
  // components, this is the place to add them

  return {
    nodeType: 'class',
    type: answersComponent._type,
    props: answersComponent._config,
    key: null,
    ref: null,
    instance: answersComponent._container,
    rendered: childRstNodes.length ? childRstNodes : undefined
  };
}

function toDomRstNode (domElement) {
  const children = domElement.hasChildNodes() ? domElement.childNodes : [];
  const childRstNodes = [];
  for (let child of children) {
    childRstNodes.push(toDomRstNode(child));
  }

  if (domElement instanceof Text) {
    const text = Text.wholeText;
    if (text) {
      return domElement.textContent;
    }
    return null;
  }

  const props = {};
  const attr = domElement.attributes;
  for (let i = 0; i < attr.length; i++) {
    if (attr[i].name === 'class') {
      props['className'] = attr[i].value;
      continue;
    }
    props[attr[i].name] = attr[i].value;
  }

  return {
    nodeType: 'host',
    type: domElement.tagName.toLowerCase(),
    props: props,
    key: null,
    ref: null,
    instance: domElement,
    rendered: childRstNodes
  };
}

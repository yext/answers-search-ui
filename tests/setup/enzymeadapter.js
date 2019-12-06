import { EnzymeAdapter } from 'enzyme';

/* global Event, Text */

/**
 * The adapter class to bind the ezyme api to the Answers component framework.
 * All enzyme functionality is powered by this adapter, so some functions may not work
 * entirely or might function slightly differently than enzyme docs state
 */
export default class AnswersAdapter extends EnzymeAdapter {
  isValidElement (el) {
    if (el === null) {
      return false;
    }
    return true;
  }

  /**
   * Convert the RST node to a real node (Answers Component or DOM Element)
   * @param {Object} node - The RST node
   */
  nodeToHostNode (node) {
    if (!node) {
      return;
    }
    return node.instance;
  }

  /**
   * Convert the RST node to a DOM element if possible
   * @param {Object} node - The RST node
   */
  nodeToElement (node) {
    if (!node || typeof node !== 'object') {
      return null;
    }
    return node.instance;
  }

  /**
   * Convert the given Answers component to an RST node
   * @param {Component} el - The Answers component to convert
   */
  elementToNode (el) {
    return toComponentRstNode(el);
  }

  /**
   * Create an enzyme renderer used to mount Answers components
   * @param {Object} options - Renderer options
   */
  createMountRenderer (options) {
    const domNode = options.attachTo || global.document.createElement('span');
    let instance = null;
    return {
      /**
       * Render and mount the component to the DOM
       * @param {Component} el - The Answers component to mount
       * @param {Object} context - Additional context for the mount
       * @param {Function} callback - Callback to call after mounting
       */
      render (el, context, callback) {
        el.mount(domNode);
        instance = el;
        if (typeof callback === 'function') {
          callback();
        }
      },

      /**
       * Remove the current instance from the DOM
       */
      unmount () {
        instance.remove();
        instance = null;
        domNode.innerHTML = '';
      },

      /**
       * Get the current instance as an RST node
       */
      getNode () {
        const node = toComponentRstNode(instance);
        return node;
      },

      batchedUpdates (fn) {
        return fn;
      },

      /**
       * Simulate a browser event on the given node
       * @param {Object} node - The RST node to simulate on
       * @param {string} eventName - The name of the event to simulate
       * @param  {...any} args - Additional args for the event
       */
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

  /**
   * Create an enzyme renderer for rendering Answers components to strings
   */
  createStringRenderer () {
    return {
      render (el) {
        return el.render();
      }
    };
  }

  /**
   * Create an appropriate renderer based on the provided options
   * @param {Object} options - Renderer options
   */
  createRenderer (options) {
    switch (options.mode) {
      case EnzymeAdapter.MODES.MOUNT: return this.createMountRenderer(options);
      case EnzymeAdapter.MODES.STRING: return this.createStringRenderer(options);
      default: throw new Error(`${options.mode} not yet implemented`);
    }
  }
}

/**
 * Convert the given Answers component to an enzyme RST node
 * @param {Component} answersComponent - The Answers component to convert
 */
function toComponentRstNode (answersComponent) {
  const container = answersComponent._container;
  const children = container.hasChildNodes() ? Array.from(container.childNodes) : [];
  const childRstNodes = children.map(toDomRstNode);

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

/**
 * Convert the given DOM element to an enzyme RST node
 * @param {Element} domElement - The DOM element to convert
 */
function toDomRstNode (domElement) {
  const children = domElement.hasChildNodes() ? Array.from(domElement.childNodes) : [];
  const childRstNodes = children.map(toDomRstNode);

  if (domElement instanceof Text) {
    const text = domElement.wholeText;
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
    rendered: childRstNodes.length ? childRstNodes : undefined
  };
}

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/individualogist-whats-your-archetype/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function() {
    'use strict';
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
            if (child === !0 || child === !1) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        if (node.parentNode) node.parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ; else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode) vnode = '';
        if ('string' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;
        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {
            out = createNode(String(vnode.nodeName), isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                flushMounts();
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function() {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if (true) module.exports = preact; else self.preact = preact;
}();
//# sourceMappingURL=preact.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(73)

module.exports = preactHyperscriptStyler

function preactHyperscriptStyler(styles, opts) {
  opts = opts || {}

  var h = opts.h || H

  var hs = createHs(h, styles, opts)

  if (!opts.h) {
    Object.keys(h).forEach(function(k) {
      if (typeof h[k] === 'function') {
        hs[k] = createHs(h[k], styles, opts)
      } else {
        hs[k] = h[k]
      }
    })
  }

  return hs

}

function createHs(h, styles, opts) {
  return function hs() {
    var node = h.apply(null, arguments)

    processNode(node, styles, opts)

    if (opts.recursive && node.children instanceof Array) {
      node.children.forEach(function(node) {
        processNode(node, styles, opts)
      })
    }

    return node
  }
}

function processNode(node, styles, opts) {

  styles = styles || {}
  opts = opts || {}

  if (!(styles instanceof Array)) {
    styles = [styles]
  }

  var classKey = opts.classKey || 'class'

  if (!node) {
    return
  }

  if (!node.attributes) {
    node.attributes = {};
  }
  if (!node.attributes[classKey]) {
    node.attributes[classKey] = {};
  }

  var classProperty = node.attributes[classKey]
  if (!classProperty) {
    return node
  }

  var classes
  if (classProperty instanceof Array) {
    classes = classProperty
  } else if (typeof classProperty === 'string') {
    classes = classProperty.split(/ /g)
  } else {
    classes = Object.keys(classProperty).reduce(function(classes, className) {
      if (classProperty[className]) {
        classes.push(className)
      }
      return classes
    }, [])
  }

  classes.push(node.nodeName)

  var add = []
  classes.forEach(function(className) {
    styles.forEach(function(style) {
      if (className in style) {
        if (classes.indexOf(style[className]) < 0) {
          add.push(style[className])
        }
      } else if (classKey !== 'class' || opts.strict) {
        throw new Error("'" + className + "' doesn't exist");
      }
    })
  })

  node.attributes.class = classes.concat(add).join(' ')

  return node

}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function dlv(obj, key, def, p) {
	p = 0;
	key = key.split ? key.split('.') : key;
	while (obj && p<key.length) { obj = obj[key[p++]]; }
	return obj===undefined ? def : obj;
}

/** Create an Event handler function that sets a given state property.
 *	@param {Component} component	The component whose state should be updated
 *	@param {string} key				A dot-notated key path to update in the component's state
 *	@param {string} eventPath		A dot-notated key path to the value that should be retrieved from the Event or component
 *	@returns {function} linkedStateHandler
 */
function linkState(component, key, eventPath) {
	var path = key.split('.');
	return function(e) {
		var t = e && e.target || this,
			state = {},
			obj = state,
			v = typeof eventPath==='string' ? dlv(e, eventPath) : t.nodeName ? (t.type.match(/^che|rad/) ? t.checked : t.value) : e,
			i = 0;
		for ( ; i<path.length-1; i++) {
			obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
		}
		obj[path[i]] = v;
		component.setState(state);
	};
}

/* harmony default export */ __webpack_exports__["a"] = (linkState);
//# sourceMappingURL=linkstate.es.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(0)) :
  typeof define === 'function' && define.amd ? define(['preact'], factory) :
  (global.preactMarkup = factory(global.preact));
}(this, function (preact) { 'use strict';

  var parserDoc = void 0;

  function parseMarkup(markup, type) {
  	var doc = void 0,
  	    mime = type === 'html' ? 'text/html' : 'application/xml',
  	    parserError = void 0,
  	    wrappedMarkup = void 0,
  	    tag = void 0;

  	if (type === 'html') {
  		tag = 'body';
  		wrappedMarkup = '<!DOCTYPE html>\n<html><body>' + markup + '</body></html>';
  	} else {
  		tag = 'xml';
  		wrappedMarkup = '<?xml version="1.0" encoding="UTF-8"?>\n<xml>' + markup + '</xml>';
  	}

  	try {
  		doc = new DOMParser().parseFromString(wrappedMarkup, mime);
  	} catch (err) {
  		parserError = err;
  	}

  	if (!doc && type === 'html') {
  		doc = parserDoc || (parserDoc = buildParserFrame());
  		doc.open();
  		doc.write(wrappedMarkup);
  		doc.close();
  	}

  	if (!doc) return;

  	var out = doc.getElementsByTagName(tag)[0],
  	    fc = out.firstChild;

  	if (markup && !fc) {
  		out.error = 'Document parse failed.';
  	}

  	if (fc && String(fc.nodeName).toLowerCase() === 'parsererror') {
  		fc.removeChild(fc.firstChild);
  		fc.removeChild(fc.lastChild);
  		out.error = fc.textContent || fc.nodeValue || parserError || 'Unknown error';

  		out.removeChild(fc);
  	}

  	return out;
  }

  function buildParserFrame() {
  	if (document.implementation && document.implementation.createHTMLDocument) {
  		return document.implementation.createHTMLDocument('');
  	}
  	var frame = document.createElement('iframe');
  	frame.style.cssText = 'position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;';
  	frame.setAttribute('sandbox', 'allow-forms');
  	document.body.appendChild(frame);
  	return frame.contentWindow.document;
  }

  var EMPTY_OBJ$1 = {};

  function toVdom(node, visitor, h, options) {
  	walk.visitor = visitor;
  	walk.h = h;
  	walk.options = options || EMPTY_OBJ$1;
  	return walk(node);
  }

  function walk(n, index, arr) {
  	if (n.nodeType === 3) {
  		var text = 'textContent' in n ? n.textContent : n.nodeValue || '';

  		if (walk.options.trim !== false) {
  			var isFirstOrLast = index === 0 || index === arr.length - 1;

  			if (text.match(/^[\s\n]+$/g) && walk.options.trim !== 'all') {
  				text = ' ';
  			} else {
  				text = text.replace(/(^[\s\n]+|[\s\n]+$)/g, walk.options.trim === 'all' || isFirstOrLast ? '' : ' ');
  			}

  			if ((!text || text === ' ') && arr.length > 1 && isFirstOrLast) return null;
  		}
  		return text;
  	}
  	if (n.nodeType !== 1) return null;
  	var nodeName = String(n.nodeName).toLowerCase();

  	if (nodeName === 'script' && !walk.options.allowScripts) return null;

  	var out = walk.h(nodeName, getProps(n.attributes), walkChildren(n.childNodes));
  	if (walk.visitor) walk.visitor(out);
  	return out;
  }

  function getProps(attrs) {
  	var len = attrs && attrs.length;
  	if (!len) return null;
  	var props = {};
  	for (var i = 0; i < len; i++) {
  		var _attrs$i = attrs[i];
  		var name = _attrs$i.name;
  		var value = _attrs$i.value;

  		if (value === '') value = true;
  		if (name.substring(0, 2) === 'on' && walk.options.allowEvents) {
  			value = new Function(value);
  		}
  		props[name] = value;
  	}
  	return props;
  }

  function walkChildren(children) {
  	var c = children && Array.prototype.map.call(children, walk).filter(exists);
  	return c && c.length ? c : null;
  }

  var exists = function (x) {
  	return x;
  };

  var EMPTY_OBJ = {};

  function markupToVdom(markup, type, reviver, map, options) {
  	var dom = parseMarkup(markup, type);

  	if (dom && dom.error) {
  		throw new Error(dom.error);
  	}

  	var body = dom && dom.body || dom;
  	visitor.map = map || EMPTY_OBJ;
  	var vdom = body && toVdom(body, visitor, reviver, options);
  	visitor.map = null;

  	return vdom && vdom.children || null;
  }

  function toCamelCase(name) {
  	return name.replace(/-(.)/g, function (match, letter) {
  		return letter.toUpperCase();
  	});
  }

  function visitor(node) {
  	var name = node.nodeName.toLowerCase(),
  	    map = visitor.map;
  	if (map && map.hasOwnProperty(name)) {
  		node.nodeName = map[name];
  		node.attributes = Object.keys(node.attributes || {}).reduce(function (attrs, attrName) {
  			attrs[toCamelCase(attrName)] = node.attributes[attrName];
  			return attrs;
  		}, {});
  	} else {
  		node.nodeName = name.replace(/[^a-z0-9-]/i, '');
  	}
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var customReviver = void 0;

  var Markup = function (_Component) {
  	inherits(Markup, _Component);

  	function Markup() {
  		classCallCheck(this, Markup);
  		return possibleConstructorReturn(this, _Component.apply(this, arguments));
  	}

  	Markup.setReviver = function setReviver(h) {
  		customReviver = h;
  	};

  	Markup.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref) {
  		var wrap = _ref.wrap;
  		var type = _ref.type;
  		var markup = _ref.markup;

  		var p = this.props;
  		return wrap !== p.wrap || type !== p.type || markup !== p.markup;
  	};

  	Markup.prototype.setComponents = function setComponents(components) {
  		this.map = {};
  		if (components) {
  			for (var i in components) {
  				if (components.hasOwnProperty(i)) {
  					var name = i.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g, '$1$3-$2$4').toLowerCase();
  					this.map[name] = components[i];
  				}
  			}
  		}
  	};

  	Markup.prototype.render = function render(_ref2) {
  		var _ref2$wrap = _ref2.wrap;
  		var wrap = _ref2$wrap === undefined ? true : _ref2$wrap;
  		var type = _ref2.type;
  		var markup = _ref2.markup;
  		var components = _ref2.components;
  		var reviver = _ref2.reviver;
  		var onError = _ref2.onError;
  		var allowScripts = _ref2['allow-scripts'];
  		var allowEvents = _ref2['allow-events'];
  		var trim = _ref2.trim;
  		var props = objectWithoutProperties(_ref2, ['wrap', 'type', 'markup', 'components', 'reviver', 'onError', 'allow-scripts', 'allow-events', 'trim']);

  		var h = reviver || this.reviver || this.constructor.prototype.reviver || customReviver || preact.h,
  		    vdom = void 0;

  		this.setComponents(components);

  		var options = {
  			allowScripts: allowScripts,
  			allowEvents: allowEvents,
  			trim: trim
  		};

  		try {
  			vdom = markupToVdom(markup, type, h, this.map, options);
  		} catch (error) {
  			if (onError) {
  				onError({ error: error });
  			} else if (typeof console !== 'undefined' && console.error) {
  				console.error('preact-markup: ' + error);
  			}
  		}

  		if (wrap === false) return vdom && vdom[0] || null;

  		var c = props.hasOwnProperty('className') ? 'className' : 'class',
  		    cl = props[c];
  		if (!cl) props[c] = 'markup';else if (cl.splice) cl.splice(0, 0, 'markup');else if (typeof cl === 'string') props[c] += ' markup';else if (typeof cl === 'object') cl.markup = true;

  		return h('div', props, vdom || null);
  	};

  	return Markup;
  }(preact.Component);

  return Markup;

}));
//# sourceMappingURL=preact-markup.js.map


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 6,
		"end": 12,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 12,
		"end": 25,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Caregiver!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/caregiver.png",
					"fadeIn": true
				},
				"index": 103
			}
		]
	},
	{
		"start": 25,
		"end": 40,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/caregiver.png",
					"fadeIn": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 40,
		"end": 48,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 48,
		"end": 62,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 62,
		"end": 70,
		"text": "That’s right. You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": []
	},
	{
		"start": 70,
		"end": 78,
		"text": "But before we get into that, I want to share with you about your archetype, The Caregiver, and what it means.",
		"keys": []
	},
	{
		"start": 78,
		"end": 87,
		"text": ", you truly are a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 87,
		"end": 95,
		"text": "You are a mature and deeply intelligent being – not necessarily in the sense of academics, but in terms of thinking differently.",
		"keys": []
	},
	{
		"start": 95,
		"end": 105,
		"text": "While the world walks in one direction, you have no qualms with going against it. That’s what makes you so special .",
		"keys": [
			{
				"key": "name",
				"index": 115
			}
		]
	},
	{
		"start": 105,
		"end": 115,
		"text": "You’re also deeply sensitive. You’re able to see and feel all the pains of the world. That’s because as a Caregiver, you are highly compassionate.",
		"keys": []
	},
	{
		"start": 115,
		"end": 125,
		"text": "Your selflessness comes unparalleled. You’re always willing to extend a helping hand to your friends, strangers, and sometimes, even to your enemies.",
		"keys": []
	},
	{
		"start": 125,
		"end": 128,
		"text": ", you might not know it yet, but your generosity inspires everyone around you – the people that you help, and the people who witness you helping others.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 128,
		"end": 132,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 132,
		"end": 144,
		"text": "You are the one who holds the world together.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 46
			}
		]
	},
	{
		"start": 144,
		"end": 151,
		"text": "I’m getting the sense that you’re going to live a long, healthy, and fulfilled life. And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": []
	},
	{
		"start": 151,
		"end": 161,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 161,
		"end": 172,
		"text": "Your sympathetic and giving nature makes you vulnerable to persecutions. In fact, you might have already experienced such instances already.",
		"keys": []
	},
	{
		"start": 172,
		"end": 181,
		"text": "But , don’t let that discourage you. The world needs your altruistic and giving nature. The world needs people like you to be in positions of power.",
		"keys": [
			{
				"key": "name",
				"index": 4
			}
		]
	},
	{
		"start": 181,
		"end": 186,
		"text": "You are the one who keeps the world grounded. You are the one who keeps the hungry fed. You are the one who keeps the children safe.",
		"keys": []
	},
	{
		"start": 186,
		"end": 193,
		"text": "And you will find yourself in that position of power soon… very soon.",
		"keys": []
	},
	{
		"start": 193,
		"end": 205,
		"text": "You will encounter wicked hearts and selfish people, but don’t let that lose sight of who you truly are, .",
		"keys": [
			{
				"key": "name",
				"index": 105
			}
		]
	},
	{
		"start": 205,
		"end": 211,
		"text": ", I can already tell that your friends and family really look up to you. You’re the one who they come to for detailed advice, a listening ear, or just for a quick chat.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 211,
		"end": 218,
		"text": "You’re not the type of person to have huge circles of friends. But you’re not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 218,
		"end": 227,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your intelligence and sweet nature.",
		"keys": []
	},
	{
		"start": 227,
		"end": 238,
		"text": "But you’re extremely selective with who you choose to let into your life. You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 238,
		"end": 250,
		"text": ", you are incredibly nurturing. People see you as a mother-like figure. This makes you a natural-born teacher, but not really in the sense of education.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 250,
		"end": 265,
		"text": "I sense that you will find success and fulfilment as a counsellor, a nurse, a trainer, or a guide of some sort. You will also excel in non-profit organizations and charities.",
		"keys": []
	},
	{
		"start": 265,
		"end": 280,
		"text": "You can be very protective, . Especially as a parent. You love your children, friends, and family fiercely, and you are willing to give and sacrifice everything that you have for them.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 280,
		"end": 291,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from a broad and altruistic perspective. You see the big picture, and you will do everything that you can to make it a better place.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 291,
		"end": 301,
		"text": "Each archetype has a calling in life. A calling that will lead you to joy and fulfilment.  I’d like to share with you what I’ve discovered about your calling.",
		"keys": [
			{
				"key": "name",
				"index": 90
			}
		]
	},
	{
		"start": 301,
		"end": 309,
		"text": ", you tend to concern yourself with acts of sharing. You’re always happy to share your knowledge, wisdom and experiences with those around you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 309,
		"end": 317,
		"text": "That is where you derive fulfilment from. The more you share, the more you express care for others, the happier you seem to be.",
		"keys": []
	},
	{
		"start": 317,
		"end": 328,
		"text": "However, , that can make you dependent on others for your own happiness. And that is something that you need to be careful of.",
		"keys": [
			{
				"key": "name",
				"index": 9
			}
		]
	},
	{
		"start": 328,
		"end": 336,
		"text": "At times, it might feel as if you’re living your life for others. That’s not what you want, . You want to live life for yourself. You want to love yourself.",
		"keys": [
			{
				"key": "name",
				"index": 92
			}
		]
	},
	{
		"start": 336,
		"end": 339,
		"text": "When you’re able to do that, success and the life of your dreams will follow. And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 339,
		"end": 344,
		"text": "But there’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 49
			}
		]
	},
	{
		"start": 344,
		"end": 354,
		"text": "It feels to me that you’re a deeply emotional and spiritual person.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 68
			}
		]
	},
	{
		"start": 354,
		"end": 365,
		"text": "You’re connected to your soul in a way that’s far more profound than others. Your thought process does not follow the rules and logic of the world.",
		"keys": []
	},
	{
		"start": 365,
		"end": 374,
		"text": "In fact, I get the sense that you have quite the imagination. Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 155
			}
		]
	},
	{
		"start": 374,
		"end": 383,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 383,
		"end": 400,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 400,
		"end": 403,
		"text": "You’re the first person to step in when you see a fight breaking out. You’re the first person to reach for your pockets in the sight of a struggling busker. You’re the first person your friends call when they’ve had a horrible day. You’re the one who people rely on and look up to.",
		"keys": []
	},
	{
		"start": 403,
		"end": 410,
		"text": ", you are the role model of the world.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 410,
		"end": 423,
		"text": "But every superhero needs a side-kick; a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/caregiver-love-compatibility.png",
					"fadeIn": true
				},
				"index": 108
			}
		]
	},
	{
		"start": 423,
		"end": 433,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with. Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of these archetypes.",
		"keys": []
	},
	{
		"start": 433,
		"end": 447,
		"text": ", you’re not the kind of person that has trouble when it comes to love. Love interests find themselves drawn to your nurturing and giving nature.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 447,
		"end": 460,
		"text": "You’re sort of a rare breed when it comes to love. You’re fiercely loyal, patient, giving, and emotionally connected. The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 460,
		"end": 472,
		"text": "You become very selectively with who you choose to date and who you choose to end up with – for good reason, of course. I sense that in the coming years, you will be the happiest you’ve ever been in that regard.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/caregiver-love-compatibility.png",
					"fadeOut": true
				},
				"index": 212
			}
		]
	},
	{
		"start": 472,
		"end": null,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": null,
		"end": null,
		"text": "",
		"keys": []
	}
];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 3,
		"end": 5,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 5,
		"end": 12,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Creator!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/creator.png",
					"fadeIn": true
				},
				"index": 101
			}
		]
	},
	{
		"start": 12,
		"end": 24,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/creator.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 24,
		"end": 39,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 39,
		"end": 49,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 49,
		"end": 65,
		"text": "That’s right, . You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 65,
		"end": 73,
		"text": "But before we get into that, I want to share with you about your archetype, The Creator, and what it means.",
		"keys": []
	},
	{
		"start": 73,
		"end": 86,
		"text": ", you are truly a unique individual. And I genuinely believe that this world needs more people like you. You are highly intelligent, resourceful, and immensely creative.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 86,
		"end": 97,
		"text": "You exercise your creativity in all sorts of ways – finding different ways to turn the ordinary into the extraordinary.  You’re different that way, .",
		"keys": [
			{
				"key": "name",
				"index": 148
			}
		]
	},
	{
		"start": 97,
		"end": 103,
		"text": "While the world walks in one direction, you have no qualms with going against it.",
		"keys": []
	},
	{
		"start": 103,
		"end": 105,
		"text": "That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 34
			}
		]
	},
	{
		"start": 105,
		"end": 119,
		"text": "You’re highly opinionated. You take great pride in your work and you hold high regards for your thoughts and ideas. That’s because as a Creator, you value originality.",
		"keys": []
	},
	{
		"start": 119,
		"end": 126,
		"text": "You refuse to be part of the norm, and you’re always on the lookout for opportunities to showcase your talents.",
		"keys": []
	},
	{
		"start": 126,
		"end": 143,
		"text": ", you might not like to admit it, but you're gifted. More so than ordinary folk. You put your heart and soul into anything that you create, ensuring that the outcome resembles the closest thing to perfection.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 143,
		"end": 145,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 145,
		"end": 151,
		"text": "You are the one who will one day solve some of the world’s biggest problems.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 77
			}
		]
	},
	{
		"start": 151,
		"end": 156,
		"text": ", I’m getting the sense that you’re going to live a long, and abundant life.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 156,
		"end": 163,
		"text": "And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": []
	},
	{
		"start": 163,
		"end": 171,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 171,
		"end": 181,
		"text": "You see, , when it comes to creating things and seeing ideas to fruition, you’re afraid of appearing unoriginal or mediocre.",
		"keys": [
			{
				"key": "name",
				"index": 9
			}
		]
	},
	{
		"start": 181,
		"end": 193,
		"text": ", don’t let that discourage you. The world needs your talents and creativity. The world needs people like you to be in positions of power.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 193,
		"end": 203,
		"text": "You are the one who moves society forward. The solutions and ideas that you come up with truly have the capacity to change humanity.",
		"keys": []
	},
	{
		"start": 203,
		"end": 210,
		"text": "You do, however, need to understand that it’s important for you to be careful of your own perfectionism.",
		"keys": []
	},
	{
		"start": 210,
		"end": 224,
		"text": "At times, it can turn into an unhealthy obsession. You must also not be afraid to fail, . Your greatest obstacle will not be failure itself.",
		"keys": [
			{
				"key": "name",
				"index": 88
			}
		]
	},
	{
		"start": 224,
		"end": 234,
		"text": "Your greatest obstacle will be your fear of failure, because it will at times prevent you from even trying in the first place.",
		"keys": []
	},
	{
		"start": 234,
		"end": 240,
		"text": ", the path to success is littered with failure, and that’s something you will have to overcome.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 240,
		"end": 252,
		"text": "After all, , creativity is your greatest strength, and nothing great will come easy. But I promise you, it will be worth it.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 252,
		"end": 260,
		"text": ", I can already tell that your friends and family hold a great amount of respect for you and your talents.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 260,
		"end": 271,
		"text": "You’re the one they come to for detailed advice, a listening ear, or a second opinion. That’s because your perceptions offer valuable insights.",
		"keys": []
	},
	{
		"start": 271,
		"end": 279,
		"text": "You’re not the type of person to have huge circles of friends, but you’re also not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 279,
		"end": 292,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your intelligence and out-of-the-box thinking. You’re extremely selective with who you choose to let into your life.",
		"keys": []
	},
	{
		"start": 292,
		"end": 297,
		"text": "You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 297,
		"end": 304,
		"text": ", I’m sensing that you’re a little more reserved than the others.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 304,
		"end": 315,
		"text": "Although you possess the unique ability to connect with others, you prefer to spend your time improving your craft and being the best at it. You have a great deal to offer this world.",
		"keys": []
	},
	{
		"start": 315,
		"end": 321,
		"text": ", you are a natural-born problem-solver.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 321,
		"end": 331,
		"text": "I sense that you will find success and fulfilment as an artist, a writer, a creative director, or a designer.",
		"keys": []
	},
	{
		"start": 331,
		"end": 344,
		"text": "You can be very introspective, . Especially when you’re by yourself. You love having your alone time and you have the confidence to pull it off.",
		"keys": [
			{
				"key": "name",
				"index": 31
			}
		]
	},
	{
		"start": 344,
		"end": 351,
		"text": "You feel perfectly comfortable roaming the streets or eating out at a restaurant by yourself.",
		"keys": []
	},
	{
		"start": 351,
		"end": 360,
		"text": "While some might perceive you as the loner-sort, everyone else around you admires your composed and confident nature.",
		"keys": []
	},
	{
		"start": 360,
		"end": 371,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from almost all perspectives – both broad and detailed.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 371,
		"end": 382,
		"text": "You are part of the minority that sees both the big picture, and the small. And you have what it takes to one day make an astronomical change in the world.",
		"keys": []
	},
	{
		"start": 382,
		"end": 394,
		"text": ", you are the epitome of expression – possessing the uncanny ability to communicate your emotions in the most creative, yet accurate ways.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 394,
		"end": 405,
		"text": "You excel at one-on-one interactions, and never fail to make an excellent impression on others. Your unique thinking and intelligence intrigues people.",
		"keys": []
	},
	{
		"start": 405,
		"end": 423,
		"text": "Ultimately, , you are a dreamer. You have a clear vision that you want to achieve. Your mind crafts and generates ideas at the speed of light, with each idea having more clarity and purpose than the last.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 423,
		"end": 437,
		"text": "That’s where your fulfilment lies – in seeing your ideas to fruition. I’m getting the sense that you’re not too concerned about monetary riches, although you do wish you had more wealth.",
		"keys": []
	},
	{
		"start": 437,
		"end": 442,
		"text": "There is, however, a greater purpose for you in this lifetime, .",
		"keys": [
			{
				"key": "name",
				"index": 63
			}
		]
	},
	{
		"start": 442,
		"end": 454,
		"text": "However, , I’m sensing that you tend to associate achievement with fulfilment. And that is something that you need to be careful of.",
		"keys": [
			{
				"key": "name",
				"index": 9
			}
		]
	},
	{
		"start": 454,
		"end": 465,
		"text": "At times, it might feel as if you’ve hit a dead-end or a blockage of sorts. And it can be extremely frustrating. That’s not what you want, .",
		"keys": [
			{
				"key": "name",
				"index": 139
			}
		]
	},
	{
		"start": 465,
		"end": 476,
		"text": "You want to live life for yourself. You want to love yourself. When you’re able to do that, success and the life of your dreams will follow.",
		"keys": []
	},
	{
		"start": 476,
		"end": 480,
		"text": "And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 480,
		"end": 485,
		"text": "But there’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 49
			}
		]
	},
	{
		"start": 485,
		"end": 490,
		"text": "It feels to me that you’re a deeply emotional and spiritual person.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 68
			}
		]
	},
	{
		"start": 490,
		"end": 495,
		"text": "You’re connected to your soul in a way that’s far more profound than others.",
		"keys": []
	},
	{
		"start": 495,
		"end": 505,
		"text": "Your thought process does not follow the rules and logic of the world. In fact, I get the sense that you have quite the imagination.",
		"keys": []
	},
	{
		"start": 505,
		"end": 513,
		"text": "Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 93
			}
		]
	},
	{
		"start": 513,
		"end": 525,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict, but you’ll never be afraid to express your own opinions, even if the world doesn’t agree with it.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 525,
		"end": 536,
		"text": "When backed into a corner, you’re not one to back down. You fight fiercely for your loved ones, for your pride, and for righteousness.",
		"keys": []
	},
	{
		"start": 536,
		"end": 548,
		"text": "You’re the first person to step in when you see a fight breaking out. You’re the first person to come up with solutions to difficult problems. You’re the first person to stand up for what’s right.",
		"keys": []
	},
	{
		"start": 548,
		"end": 552,
		"text": "You’re the one who people rely on and look up to.",
		"keys": []
	},
	{
		"start": 552,
		"end": 556,
		"text": ", you are the role model of the world.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 556,
		"end": 561,
		"text": "And I have complete confidence that you will one day change it for the better.",
		"keys": []
	},
	{
		"start": 561,
		"end": 568,
		"text": "But every Creator needs a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/creator-love-compatibility.png",
					"fadeIn": true
				},
				"index": 93
			}
		]
	},
	{
		"start": 568,
		"end": 581,
		"text": "This little chart represents the archetypes that you’re most likely to end up with. Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 581,
		"end": 594,
		"text": ", you’re not the kind of person that has trouble when it comes to love. Love interests find themselves drawn to your playful and kind nature.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 594,
		"end": 597,
		"text": "You’re sort of a rare breed when it comes to love.",
		"keys": []
	},
	{
		"start": 597,
		"end": 612,
		"text": "You communicate better than everyone else, and you’re a thoughtful individual. While others struggle to get what they want, you’re never afraid to ask. And that’s a valuable trait to have in any relationship.",
		"keys": []
	},
	{
		"start": 612,
		"end": 619,
		"text": "The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 619,
		"end": 629,
		"text": "You become very selective when it comes to who you choose to date and who you choose to end up with – for a good reason, of course.",
		"keys": []
	},
	{
		"start": 629,
		"end": 635,
		"text": "I sense that in the coming years, you will be the happiest you’ve ever been in that regard.",
		"keys": []
	},
	{
		"start": 635,
		"end": 645,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find that happiness you’re looking for soon enough.\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/creator-love-compatibility.png",
					"fadeOut": true
				},
				"index": 133
			}
		]
	},
	{
		"start": 645,
		"end": 658,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 658,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover heavenly rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 5,
		"end": 15,
		"text": "Okay, … That’s all I can share with you for now…",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 15,
		"end": 25,
		"text": "But , if you’ve gained something valuable from this free archetype reading, I want you to know that there is so much more that I can tell you about your archetype.",
		"keys": [
			{
				"key": "name",
				"index": 4
			}
		]
	},
	{
		"start": 25,
		"end": 31,
		"text": "This free reading is merely scraping the surface. I haven’t told you about your Shadow, your Anima or Animus, your Ego, and your life path.",
		"keys": []
	},
	{
		"start": 31,
		"end": 39,
		"text": "Your Shadow is the dark side of your personality where all of your suppressed thoughts and desires are stored.",
		"keys": []
	},
	{
		"start": 39,
		"end": 45,
		"text": "Your Anima and Animus represents the imbalance between masculinity and femininity in your character.",
		"keys": []
	},
	{
		"start": 45,
		"end": 54,
		"text": "Your Ego is the centre of your consciousness that needs to be controlled in order to find true joy.",
		"keys": []
	},
	{
		"start": 54,
		"end": 71,
		"text": "The Deluxe Archetype Report tells you everything that you need to know about all of that, and more. It tells you about…",
		"keys": []
	},
	{
		"start": 71,
		"end": 83,
		"text": "The choices that you’ve made and why you made them\nYour ideal life partner or companion\nYour path towards unlocking enormous amounts of success\nThe challenges that lie ahead of you\nYour path towards finding fulfilment in this lifetime",
		"keys": []
	},
	{
		"start": 83,
		"end": 89,
		"text": "The Deluxe Archetype Report is a reading that’s far more detailed, and far more intimate. If you thought that this free archetype report was accurate, you’re about to have your mind blown.",
		"keys": []
	},
	{
		"start": 89,
		"end": 99,
		"text": "In this reading, you will discover who you are. Yes, who you REALLY are.",
		"keys": []
	},
	{
		"start": 99,
		"end": 104,
		"text": "It’s going to be a completely raw and uncensored look into your personality. All of this information will be presented to you in excruciating detail.",
		"keys": []
	},
	{
		"start": 104,
		"end": 111,
		"text": "If you’re like most people, you’ll find that it’s an extremely emotional read.",
		"keys": []
	},
	{
		"start": 111,
		"end": 121,
		"text": "Imagine the most emotional film you’ve ever seen, and multiply that emotion by ten times.",
		"keys": []
	},
	{
		"start": 121,
		"end": 125,
		"text": "You’ll find yourself identifying with every single characteristic of your personality. These are things that not even your closest friends or family know about you.",
		"keys": []
	},
	{
		"start": 125,
		"end": 131,
		"text": "You might not even have realized some of these things yourself.",
		"keys": []
	},
	{
		"start": 131,
		"end": 136,
		"text": "You will get emotional when you discover the reason for the trials and misfortunes that you’ve been through.",
		"keys": []
	},
	{
		"start": 136,
		"end": 142,
		"text": "You will confront the struggles that you’ve been in constant battle with.",
		"keys": []
	},
	{
		"start": 142,
		"end": 150,
		"text": "You will get emotional when you learn about the amazing, wonderful gifts that life has in store for you.",
		"keys": []
	},
	{
		"start": 150,
		"end": 160,
		"text": "You will pick up, examine, and embrace every single piece of your character, personality, and entire being.",
		"keys": []
	},
	{
		"start": 160,
		"end": 165,
		"text": "You will place everything back together and witness the beauty that it all forms.\nYou will master your weaknesses and learn how to improve them.",
		"keys": []
	},
	{
		"start": 165,
		"end": 171,
		"text": "You will learn about your strengths and discover how to leverage on them.",
		"keys": []
	},
	{
		"start": 171,
		"end": 184,
		"text": "At the end of this detailed report, you’ll take everything that you’ve experienced\nand take advantage of them.",
		"keys": []
	},
	{
		"start": 184,
		"end": 192,
		"text": "The answers to all of your life’s questions, to all of your life’s complications, to all of your life’s encounters, failures, and successes, are waiting for you in your Deluxe Archetype Report.",
		"keys": []
	},
	{
		"start": 192,
		"end": 199,
		"text": "If you’re unsure of the path that you’re currently on, this report will tell you everything you need to know about where to go NEXT.",
		"keys": []
	},
	{
		"start": 199,
		"end": 205,
		"text": "If you’re wondering whether your actions are right or wrong, this report will grant you unquestionable direction.",
		"keys": []
	},
	{
		"start": 205,
		"end": 214,
		"text": "If the people around you are holding you back, this report will give you all the clarity you need.",
		"keys": []
	},
	{
		"start": 214,
		"end": 220,
		"text": "Everything I’ve just talked about is just waiting for you. And the only thing standing between you and the life you’ve always dreamed of is YOURSELF.",
		"keys": []
	},
	{
		"start": 220,
		"end": 223,
		"text": "Tell me, do you want to be so successful that you won’t have to worry about money any more?",
		"keys": []
	},
	{
		"start": 223,
		"end": 227,
		"text": "Do you want to make the most meaningful relationships?",
		"keys": []
	},
	{
		"start": 227,
		"end": 232,
		"text": "Do you want to have good fortune in everything that you do?",
		"keys": []
	},
	{
		"start": 232,
		"end": 237,
		"text": "Most importantly, do you want to live the life that you’ve always dreamed of?",
		"keys": []
	},
	{
		"start": 237,
		"end": 243,
		"text": "The Deluxe Archetype Report WILL give you all of that on a silver platter.",
		"keys": []
	},
	{
		"start": 243,
		"end": 247,
		"text": "Unfortunately, I can’t lead you through this journey if you don’t let me. You need to take that first step.",
		"keys": []
	},
	{
		"start": 247,
		"end": 253,
		"text": "You need to trust your instincts and take that leap of faith…",
		"keys": []
	},
	{
		"start": 253,
		"end": 260,
		"text": "If you’re worrying about your career, your relationships, your health, your finances…",
		"keys": []
	},
	{
		"start": 260,
		"end": 263,
		"text": "If you haven’t the slightest clue of where you’re going to be 10, 5, 3 or even 1 year from now…",
		"keys": []
	},
	{
		"start": 263,
		"end": 272,
		"text": "If you want to become a better version of yourself…",
		"keys": []
	},
	{
		"start": 272,
		"end": 283,
		"text": "If you want to take back the reigns and choose the direction of your life…\n…All of the answers are waiting for you in your Deluxe Archetype Report.",
		"keys": []
	},
	{
		"start": 283,
		"end": 293,
		"text": "To make things a little easier for you, I’ve simplified everything for you to make the right choice. Here’s what the Deluxe Archetype Report will almost instantly accomplish for you:",
		"keys": []
	},
	{
		"start": 293,
		"end": 297,
		"text": "You’ll unlock the deepest desires of your heart and soul; desires that you would never expect, and exactly how you can go about achieving them.",
		"keys": []
	},
	{
		"start": 297,
		"end": 305,
		"text": "You’ll realize opportunities before they’ve even presented themselves.",
		"keys": []
	},
	{
		"start": 305,
		"end": 311,
		"text": "You’ll recognize potential pitfalls from miles away and learn how you can protect yourself or even avoid them completely.",
		"keys": []
	},
	{
		"start": 311,
		"end": 321,
		"text": "You’ll be spoon-fed the necessary knowledge and tools to achieve what you truly want.",
		"keys": []
	},
	{
		"start": 321,
		"end": 324,
		"text": "You’ll achieve the life that you’ve always wanted; the life that you’ve wanted for the longest time. And finally, you’ll learn how you can make the absolute best of it!",
		"keys": []
	},
	{
		"start": 324,
		"end": 332,
		"text": "But that’s not even the half of it.",
		"keys": []
	},
	{
		"start": 332,
		"end": 339,
		"text": "In just a minute, I’m going to share with you even more amazing ways that will help you achieve the life that you truly want.",
		"keys": []
	},
	{
		"start": 339,
		"end": 345,
		"text": "Before we get into that, allow me to share this important secret with you. Now, pay close attention.",
		"keys": []
	},
	{
		"start": 345,
		"end": 352,
		"text": "Individuation is based on thousands of years of in-depth analysis and research.",
		"keys": []
	},
	{
		"start": 352,
		"end": 362,
		"text": "Famous philosophers and psychologists have improved and enhanced the principles of individuation for that long.",
		"keys": []
	},
	{
		"start": 362,
		"end": 373,
		"text": "You need specifics? Individuation has been present during the Renaissance, during the Medieval era, and dates all the way back to 350BC (Aristotle).",
		"keys": []
	},
	{
		"start": 373,
		"end": 379,
		"text": "And because of the technology that we have access to today, we can achieve the same success that TENS OF THOUSANDS of ordinary people have experienced with individuation.",
		"keys": []
	},
	{
		"start": 379,
		"end": 385,
		"text": "The best part? You can uncover these hidden secrets with a simple click of a button.",
		"keys": []
	},
	{
		"start": 385,
		"end": 396,
		"text": "I’ve dedicated more than 10 years of my life towards researching and studying individuation.",
		"keys": []
	},
	{
		"start": 396,
		"end": 406,
		"text": "And I can guarantee that’s what I’ll be doing for the rest of my life. That’s a fact. And here’s something else that’s going to blow your mind… Are you ready for this?",
		"keys": []
	},
	{
		"start": 406,
		"end": 416,
		"text": "The Deluxe Archetype Report is EASILY the most DETAILED, ACCURATE, and REVEALING individuation report in the ENTIRE WORLD.",
		"keys": []
	},
	{
		"start": 416,
		"end": 428,
		"text": "We have dedicated decades, including 10 years from myself, to creating a report that’s as detailed and accurate as the Deluxe Archetype Report.",
		"keys": []
	},
	{
		"start": 428,
		"end": 443,
		"text": "Every single word has been handwritten, edited, and re-edited, to ensure that this report contains ZERO FLUFF and only the MOST BENEFICIAL information about you.",
		"keys": []
	},
	{
		"start": 443,
		"end": 448,
		"text": "Years of thought have gone into every single sentence. Years of constant editing and corrections have gone into perfecting each paragraph. Years of research have gone into the contents of this report.",
		"keys": []
	},
	{
		"start": 448,
		"end": 453,
		"text": "It’s been completely personalized for you, and only you, .",
		"keys": [
			{
				"key": "name",
				"index": 57
			}
		]
	},
	{
		"start": 453,
		"end": 461,
		"text": "No one else in the world can pick it up and benefit from it in the same way that you will.",
		"keys": []
	},
	{
		"start": 461,
		"end": 473,
		"text": "Embarking on this journey WILL open doors for you that you would have never discovered without taking this first step.",
		"keys": []
	},
	{
		"start": 473,
		"end": 478,
		"text": "It’s an eye-opening experience like no other. The contents of this report can never be found anywhere else. It hasn’t been published or even copied. NOT ONCE.",
		"keys": []
	},
	{
		"start": 478,
		"end": 483,
		"text": ", this is the one and only place you’ll be able to get your hands on it.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 483,
		"end": 493,
		"text": "Everything that you read from this report is completely tailored to your main archetype.",
		"keys": []
	},
	{
		"start": 493,
		"end": 501,
		"text": "It will give you the EXACT system that over 70,000 ordinary people, including myself, have used to completely CHANGE OUR LIVES.",
		"keys": []
	},
	{
		"start": 501,
		"end": 509,
		"text": "It’s entirely unique to you. And that’s what individuation is all about – discovering your true self.",
		"keys": []
	},
	{
		"start": 509,
		"end": 514,
		"text": "I have no doubt in my mind that you will be absolutely stunned as you read about your past, your present, and your future.",
		"keys": []
	},
	{
		"start": 514,
		"end": 524,
		"text": "And at the end of it all, you will be RAVING about its degree of ACCURACY.",
		"keys": []
	},
	{
		"start": 524,
		"end": 532,
		"text": "But more importantly, you will experience significant improvements in your daily life after you apply the techniques and the knowledge that you learn from this report.",
		"keys": []
	},
	{
		"start": 532,
		"end": 544,
		"text": "Personally, I get emails every single day from people sharing their successes after receiving their Deluxe Archetype Report from me.",
		"keys": []
	},
	{
		"start": 544,
		"end": 553,
		"text": "But I’m not done just yet. I’m extremely passionate about individuation. And that’s precisely why I want you to experience the real value of individuation.",
		"keys": []
	},
	{
		"start": 553,
		"end": 557,
		"text": "To ensure that you gain the maximum value from this report, I’ll be sending you\nTHREE additional FREE reports along with it…",
		"keys": []
	},
	{
		"start": 557,
		"end": 560,
		"text": "…All of this on top of your Deluxe Archetype Report.",
		"keys": []
	},
	{
		"start": 560,
		"end": 567,
		"text": "That’s how much I believe in this product.",
		"keys": []
	},
	{
		"start": 567,
		"end": 569,
		"text": "Like your Deluxe Archetype Report, these additional reports are easy to understand and extremely valuable.",
		"keys": []
	},
	{
		"start": 569,
		"end": 579,
		"text": ", You will receive:\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/pop-up/dar-priceless.png",
					"fadeIn": true
				},
				"index": 20
			}
		]
	},
	{
		"start": 579,
		"end": 592,
		"text": "The Exploring Your Birthdate with The Chinese Zodiac eBook, The Discovering Your Aura eBook, and The Beginners Guide to the Fengshui Paradigm eBook",
		"keys": []
	},
	{
		"start": 592,
		"end": 599,
		"text": "I’ll be completely honest with you. The total value of all of these products is at least $244.00, and that’s practically pennies compared to how much value you’ll receive from them!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/pop-up/dar-priceless.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 599,
		"end": 609,
		"text": "After all, you can’t put a dollar figure on improving your life – because such a gift would be practically priceless.",
		"keys": []
	},
	{
		"start": 609,
		"end": 612,
		"text": "Money can always be earned, but there’s only so much time we have left to live. But no , I’m NOT going to ask you for that amount of money.",
		"keys": [
			{
				"key": "name",
				"index": 87
			}
		]
	},
	{
		"start": 612,
		"end": 616,
		"text": "I’m not even going to ask you for $200\\.",
		"keys": []
	},
	{
		"start": 616,
		"end": 620,
		"text": "Well, what about $100? Nope…",
		"keys": []
	},
	{
		"start": 620,
		"end": 623,
		"text": "Well, but what about $50? That seems like a pretty fair price.",
		"keys": []
	},
	{
		"start": 623,
		"end": 629,
		"text": "But no, I’m not even going to ask you for that much.",
		"keys": []
	},
	{
		"start": 629,
		"end": 635,
		"text": "So, here’s what we’re going to do. I’m going to cut you an exclusive, one-time deal.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/pop-up/new-deluxe-archetype-report-with-bonuses.png",
					"fadeIn": true
				},
				"index": 85
			}
		]
	},
	{
		"start": 635,
		"end": 637,
		"text": "You’ll get the full package, including the Deluxe Archetype Report, for only $37.\n// (POP UP HERE)",
		"keys": []
	},
	{
		"start": 637,
		"end": 648,
		"text": "That’s it.",
		"keys": []
	},
	{
		"start": 648,
		"end": 655,
		"text": "But I want you to share with me your success story. I read every single one of my emails and respond to them personally, and I want to read about your experiences too.",
		"keys": []
	},
	{
		"start": 655,
		"end": 660,
		"text": "We need the feedback to keep on improving our products, and it definitely encourages us to keep doing what we do.",
		"keys": []
	},
	{
		"start": 660,
		"end": 673,
		"text": "The Deluxe Archetype Report is all yours for just $37.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/pop-up/new-deluxe-archetype-report-with-bonuses.png",
					"fadeOut": true
				},
				"index": 55
			}
		]
	},
	{
		"start": 673,
		"end": 687,
		"text": "Now, you have two options. You can continue on the life path that you’re on right now and stay exactly the way that you are, unaware of your life’s purpose, your calling, and your true personality.",
		"keys": []
	},
	{
		"start": 687,
		"end": 696,
		"text": "Or, you can have your life’s purpose, your calling, your true personality, and your life’s direction revealed to you AND experience an abundance of love, health, and wealth in your life.",
		"keys": []
	},
	{
		"start": 696,
		"end": 701,
		"text": "All you have to do is click the button below and your Deluxe Archetype Report, and all 3 FREE bonus reports, will be sent to you INSTANTLY.",
		"keys": []
	},
	{
		"start": 701,
		"end": 710,
		"text": "But that’s not the best that I can do. I know I can do better than that.",
		"keys": []
	},
	{
		"start": 710,
		"end": 715,
		"text": "On top of giving away the whole package for just $37, I’m also going to make the following guarantee for your own personal protection:\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/pop-up/60-day-money-back-guarantee.png",
					"fadeIn": true
				},
				"index": 135
			}
		]
	},
	{
		"start": 715,
		"end": 733,
		"text": ",take your time to look through your Deluxe Archetype Report and everything else that comes with it.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 733,
		"end": 742,
		"text": "If you decide within the next 60 days that you’re not completely satisfied with your Deluxe Archetype Report, just drop us an e-mail at individualogist.com and we’ll issue you a full refund. No questions and no explanations will be necessary.",
		"keys": []
	},
	{
		"start": 742,
		"end": 749,
		"text": "I’m making this guarantee because I’m 100% certain that this report has the capacity to truly turn your life around.",
		"keys": []
	},
	{
		"start": 749,
		"end": 760,
		"text": "That’s how much I believe in the process of individuation, and that’s how much I believe you will benefit from it.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/pop-up/60-day-money-back-guarantee.png",
					"fadeOut": true
				},
				"index": 115
			}
		]
	},
	{
		"start": 760,
		"end": 774,
		"text": ", so, no matter what, you’ve got the longer end of the stick. There is absolutely no risk involved, and that’s all up to you and whether you decide to take this life-changing path.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 774,
		"end": 779,
		"text": "When you click on the button shortly, you’ll be taken to a 100% secure order page. After filling out a few questions, you’ll have the Deluxe Archetype Report and the rest of the reports sent directly to you instantly.",
		"keys": []
	},
	{
		"start": 779,
		"end": 787,
		"text": "You won’t have to wait a second longer to begin your individuation journey.",
		"keys": []
	},
	{
		"start": 787,
		"end": 798,
		"text": "There’s not much time left, because this unique offer is only going to be extended to you just once and, only once.",
		"keys": []
	},
	{
		"start": 798,
		"end": 803,
		"text": "To receive your Deluxe Archetype Report, and the 3 additional bonuses, at the once in a life time price of only $37, you need to act right now.",
		"keys": []
	},
	{
		"start": 803,
		"end": 809,
		"text": "Just click the button below to experience a real change in your life.",
		"keys": []
	},
	{
		"start": 809,
		"end": 821,
		"text": "I’m offering it to you right now for just $37, but , you need to make the decision NOW.",
		"keys": [
			{
				"key": "name",
				"index": 51
			}
		]
	},
	{
		"start": 821,
		"end": 832,
		"text": "People approach me constantly with concerns about their careers, and I’ve used the same information and techniques in this package to help them SKYROCKET their SUCCESS by TEN FOLDS.",
		"keys": []
	},
	{
		"start": 832,
		"end": 846,
		"text": "Married couples on the verge of separation have approached me for the secrets of individuation as well, and guess what? They’re now enjoying the most rewarding relationships.",
		"keys": []
	},
	{
		"start": 846,
		"end": 853,
		"text": "All of this is made possible because of this EXCLUSIVE Deluxe Archetype Report Package.\nI can go on for days about all of the success stories that others have experienced after receiving the Deluxe Archetype Report.",
		"keys": []
	},
	{
		"start": 853,
		"end": 860,
		"text": "But the truth is, I honestly want you, , to be one of the success stories that I share with people.",
		"keys": [
			{
				"key": "name",
				"index": 39
			}
		]
	},
	{
		"start": 860,
		"end": 870,
		"text": "When I embarked on this journey, there was no one around to help me. In fact, we didn’t even have the Internet back then.",
		"keys": []
	},
	{
		"start": 870,
		"end": 882,
		"text": "The only thing I could do was sit in that library for hours and hours every single day, finding every book that I could about individuation.",
		"keys": []
	},
	{
		"start": 882,
		"end": 891,
		"text": "I read every page and every word. To date, I’ve probably gone through over hundreds of thousands of pages and thousands of books and materials on individuation.",
		"keys": []
	},
	{
		"start": 891,
		"end": 896,
		"text": "I’m that passionate about it, and that’s why I want to share this gift with you now. Applying individuation is what truly saved me.",
		"keys": []
	},
	{
		"start": 896,
		"end": 903,
		"text": "It’s what turned my life around, and it’s what helped me to find joy.",
		"keys": []
	},
	{
		"start": 903,
		"end": 910,
		"text": "Not many of us are lucky enough to have experienced true joy, but that’s what I’m going to help you find.",
		"keys": []
	},
	{
		"start": 910,
		"end": 915,
		"text": "Today, you’ve stumbled upon the rare opportunity. The opportunity for you to completely change your life.",
		"keys": []
	},
	{
		"start": 915,
		"end": 923,
		"text": "This might be the one and only time that life hands you a reset button.",
		"keys": []
	},
	{
		"start": 923,
		"end": 931,
		"text": "This is your chance to discover your true self and unlock a massive amount of benefits that will change your life for the better.",
		"keys": []
	},
	{
		"start": 931,
		"end": 940,
		"text": "I’m more than happy to make this one-time offer to you, but just like you, I only have 24 hours in a day.",
		"keys": []
	},
	{
		"start": 940,
		"end": 950,
		"text": "If you don’t respond now, I’ll have no choice but to invest my time in people who have already taken advantage of this once in a lifetime opportunity.",
		"keys": []
	},
	{
		"start": 950,
		"end": 954,
		"text": "And sadly enough, your opportunity would have been lost. Not many people in the world will have the opportunity that you have right now,.",
		"keys": [
			{
				"key": "name",
				"index": 136
			}
		]
	},
	{
		"start": 954,
		"end": 960,
		"text": "This is the opportunity where your life can REALLY turn around.",
		"keys": []
	},
	{
		"start": 960,
		"end": 970,
		"text": ", this is your time to shine and make the decision that will align your direction with your destiny.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 970,
		"end": 977,
		"text": "The thing is, you could probably find a book about Individuation from a local book store, which will contain a chapter or a couple of pages about your archetype.",
		"keys": []
	},
	{
		"start": 977,
		"end": 991,
		"text": "But that single chapter or couple of pages isn’t going to be very helpful. So, here’s the truth.",
		"keys": []
	},
	{
		"start": 991,
		"end": 1003,
		"text": ", The Deluxe Archetype Report is an excruciatingly detailed report about your archetype, containing 200 highly informative pages of actionable and thought-provoking strategies and methodologies.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 1003,
		"end": 1009,
		"text": "Once again, all of the information is customized to your specific archetype. It breaks down an in-depth outlook of your life journey and all of its obstacles.",
		"keys": []
	},
	{
		"start": 1009,
		"end": 1019,
		"text": "There is no other product that comes as close in terms of detail and information.",
		"keys": []
	},
	{
		"start": 1019,
		"end": 1024,
		"text": "The Deluxe Archetype Report is 100% owned and authored by us. , this is the only place where you’re able to get it, or anything like it.",
		"keys": [
			{
				"key": "name",
				"index": 62
			}
		]
	},
	{
		"start": 1024,
		"end": 1030,
		"text": "And if you’ve tried similar products that didn’t help before, here’s the difference.",
		"keys": []
	},
	{
		"start": 1030,
		"end": 1034,
		"text": ", other products assume that everyone functions and processes information in the same way.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 1034,
		"end": 1039,
		"text": "The law of attraction assumes that everyone is built with the same framework.",
		"keys": []
	},
	{
		"start": 1039,
		"end": 1045,
		"text": "Manifestation programs assume that everyone will respond the same way.",
		"keys": []
	},
	{
		"start": 1045,
		"end": 1056,
		"text": "Meditation methods assume that everyone experiences calmness similarly.",
		"keys": []
	},
	{
		"start": 1056,
		"end": 1069,
		"text": "None of that can be true, because, we are all different individuals. We have different fears, different circumstances, and different life experiences.",
		"keys": []
	},
	{
		"start": 1069,
		"end": 1073,
		"text": "Individuation and archetypes take that into account. Our readings are specifically catered to your archetype to provide you with actionable steps that you can take towards making a true change in your life.",
		"keys": []
	},
	{
		"start": 1073,
		"end": 1088,
		"text": "It reveals callings and directions that are specific to you.",
		"keys": []
	},
	{
		"start": 1088,
		"end": 1094,
		"text": "That’s why it’s going to work. This product seeks to bring the term “personal” back into personal development; an industry littered with impersonal products that have strayed away from what personal development is meant to be.",
		"keys": []
	},
	{
		"start": 1094,
		"end": 1102,
		"text": "But beyond that, the Deluxe Archetype Report is proven and supported by science.",
		"keys": []
	},
	{
		"start": 1102,
		"end": 1109,
		"text": "Individuation is a psychological process that was created by thought leaders in the psychological world decades ago.",
		"keys": []
	},
	{
		"start": 1109,
		"end": 1116,
		"text": "In fact, principles of Individuation can be traced all the way back to the days of Aristotle.",
		"keys": []
	},
	{
		"start": 1116,
		"end": 1124,
		"text": "This means that Individuation has stood the test of time to be a proven personal development process.",
		"keys": []
	},
	{
		"start": 1124,
		"end": 1133,
		"text": "There have also been numerous conclusive scientific studies about analytical psychology and individuation across the globe.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/pop-up/new-deluxe-archetype-report-with-bonuses.png",
					"fadeIn": true
				},
				"index": 124
			}
		]
	},
	{
		"start": 1133,
		"end": 1140,
		"text": "Unlock your Deluxe Archetype Report and the full package of 3 FREE reports now, before they’re no longer available to you!",
		"keys": []
	},
	{
		"start": 1140,
		"end": 1146,
		"text": "All you have to do is click the button below , and you’ll receive the entire Deluxe Archetype Report package immediately.",
		"keys": [
			{
				"key": "name",
				"index": 45
			}
		]
	},
	{
		"start": 1146,
		"end": null,
		"text": "The time has come for you to take action. Now, let’s get this show on the road.",
		"keys": []
	},
	{
		"start": null,
		"end": null,
		"text": "",
		"keys": []
	}
];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 6,
		"end": 11,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 11,
		"end": 17,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Explorer!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/explorer.png",
					"fadeIn": true
				},
				"index": 102
			}
		]
	},
	{
		"start": 17,
		"end": 31,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/explorer.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 31,
		"end": 44,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 44,
		"end": 54,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 54,
		"end": 69,
		"text": "That’s right, . You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 69,
		"end": 77,
		"text": "But before we get into that, I want to share with you about your archetype, The Explorer, and what it means.",
		"keys": []
	},
	{
		"start": 77,
		"end": 88,
		"text": ", you truly are a unique individual. And I genuinely believe that this world needs more people like you. You are a mature and a truly unconventional being.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 88,
		"end": 97,
		"text": "I think the best way to describe you is “an adventurer”. Yes, you are an adventurer looking to make your mark on the world.",
		"keys": []
	},
	{
		"start": 97,
		"end": 112,
		"text": "To discover new lands, new opportunities, and new experiences. You’re different that way, . While the world walks in one direction, you have no qualms with going against it. That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 90
			},
			{
				"key": "name",
				"index": 208
			}
		]
	},
	{
		"start": 112,
		"end": 130,
		"text": "Your biggest value is freedom. Sitting still for even just a second can make you feel jittery, uneasy, restless, and just completely uncomfortable. That’s because as an Explorer, you are highly energetic.",
		"keys": []
	},
	{
		"start": 130,
		"end": 139,
		"text": "While others struggle to feel comfortable in unfamiliar places, you just seem to feel at home in the most distant of lands.",
		"keys": []
	},
	{
		"start": 139,
		"end": 148,
		"text": "That’s because you envision the world as a singular place – and you understand that each and everyone of us belong to the same home.",
		"keys": []
	},
	{
		"start": 148,
		"end": 161,
		"text": ", you might not know it yet, but you are more morally and ethically upright than others. You hold your values and principles close to your heart, and you’re always ready to stick to your guns.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 161,
		"end": 163,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 163,
		"end": 170,
		"text": "You form the foundation of the world. You play the leading role in uncovering new discoveries.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 95
			}
		]
	},
	{
		"start": 170,
		"end": 183,
		"text": ", I’m getting the sense that you’re going to live a long, and fruitful life. And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 183,
		"end": 199,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy. Talking to people is never a problem for you, but I’m getting the sense that you tend to struggle when it comes to maintaining healthy relationships.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 199,
		"end": 208,
		"text": "Your nature revolves so much around meeting new people and learning about new cultures that you tend to forget about the people closest to you.",
		"keys": []
	},
	{
		"start": 208,
		"end": 215,
		"text": ", don’t let that discourage you. The world needs your ambition and unquenchable curiosity.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 215,
		"end": 224,
		"text": "The world needs people like you to be in positions of power. You are the one who keeps the world moving forward and making progress.",
		"keys": []
	},
	{
		"start": 224,
		"end": 237,
		"text": "You do, however, need to be less critical about yourself. You’re constantly pushing yourself to climb new heights and explore the world, but you must understand that growth takes time.",
		"keys": []
	},
	{
		"start": 237,
		"end": 243,
		"text": "That way, you’ll be able to be more patient with both yourself, and others.",
		"keys": []
	},
	{
		"start": 243,
		"end": 254,
		"text": "After all, , growth is a product of both effort and time, and exercising patience will lead you towards the fulfilment that you seek.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 254,
		"end": 266,
		"text": ", I can already tell that your friends and family really look up to you. You’re the one who they come to when they’re in need, when they need someone to talk to, or even just for a quick chat.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 266,
		"end": 274,
		"text": "You’re not the type of person to have huge circles of friends, although you’re not someone who has trouble with making friends either.",
		"keys": []
	},
	{
		"start": 274,
		"end": 281,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your worldly knowledge and accepting heart.",
		"keys": []
	},
	{
		"start": 281,
		"end": 290,
		"text": "But you’re extremely selective with who you choose to let into your life. You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 290,
		"end": 303,
		"text": ", you are incredibly curious, which keeps conversations centered around others rather than yourself. You possess the unique ability to connect with others and blend into any social group.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 303,
		"end": 312,
		"text": "You have a great deal to offer to this world. , you are a natural-born learner, which makes you an excellent teacher.",
		"keys": [
			{
				"key": "name",
				"index": 46
			}
		]
	},
	{
		"start": 312,
		"end": 321,
		"text": "I sense that you will find success and fulfilment as an instructor, a philanthropist, a CEO, or a public relations manager.",
		"keys": []
	},
	{
		"start": 321,
		"end": 330,
		"text": "Even though you appear to be laid back and easy-going, you can also be very protective, . Especially as a parent.",
		"keys": [
			{
				"key": "name",
				"index": 88
			}
		]
	},
	{
		"start": 330,
		"end": 339,
		"text": "You love your children, friends, and family fiercely. You are willing to give and sacrifice everything that you have for them.",
		"keys": []
	},
	{
		"start": 339,
		"end": 348,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from a broad and altruistic perspective.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 348,
		"end": 354,
		"text": "You see the big picture, and you have what it takes to make this world more connected.",
		"keys": []
	},
	{
		"start": 354,
		"end": 364,
		"text": "Your deep understanding of human nature and culture as a whole gives you extraordinary insight into how you can bring the world closer together.",
		"keys": []
	},
	{
		"start": 364,
		"end": 374,
		"text": ", you are practically a chameleon – possessing the uncanny ability to make yourself at home within any social group or social setting.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 374,
		"end": 389,
		"text": "You excel at one-on-one interactions, and never fail to make an excellent impression on larger groups of people. Your charisma and eloquence intrigues those who are fortunate enough to have crossed paths with you.",
		"keys": []
	},
	{
		"start": 389,
		"end": 398,
		"text": "Ultimately, , you are a dreamer. You have a strong sense of ambition, and you’re willing to do whatever it takes to achieve your dreams.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 398,
		"end": 410,
		"text": "I’m getting the sense that you’re not too concerned about monetary riches, although you do wish you had more wealth. There is, however, a greater purpose for you in this lifetime, .",
		"keys": [
			{
				"key": "name",
				"index": 180
			}
		]
	},
	{
		"start": 410,
		"end": 419,
		"text": ", I understand that you tend to struggle with commitments. And that is something that you need to be careful of.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 419,
		"end": 427,
		"text": "At times, it might feel as if you’re being trapped and having your freedom taken away. But that’s quite the contrary.",
		"keys": []
	},
	{
		"start": 427,
		"end": 436,
		"text": "Fulfilment ultimately comes from forging valuable relationships – with others, and yourself. And that requires commitment.",
		"keys": []
	},
	{
		"start": 436,
		"end": 449,
		"text": "That’s what you seek, . You want to live life for yourself, without appearing selfish. You want to love yourself, while keeping the relationships you’ve forged close to your heart.",
		"keys": [
			{
				"key": "name",
				"index": 22
			}
		]
	},
	{
		"start": 449,
		"end": 458,
		"text": "When you’re able to do that, success and the life of your dreams will follow. And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 458,
		"end": 461,
		"text": "But there’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 49
			}
		]
	},
	{
		"start": 461,
		"end": 466,
		"text": "It feels to me that you’re a deeply emotional and spiritual person.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 68
			}
		]
	},
	{
		"start": 466,
		"end": 475,
		"text": "You’re connected to your soul in a way that’s far more profound than others. Your thought process does not follow the rules and logic of the world.",
		"keys": []
	},
	{
		"start": 475,
		"end": 485,
		"text": "In fact, I get the sense that you have quite the imagination. Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 155
			}
		]
	},
	{
		"start": 485,
		"end": 495,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 495,
		"end": 503,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 503,
		"end": 518,
		"text": "You’re the first person to volunteer in the sight of disaster. You’re the first person to donate your last dime to someone who needs it more. You’re the first person to impact and change the lives of those who are less fortunate.",
		"keys": []
	},
	{
		"start": 518,
		"end": 526,
		"text": "You’re the one who people rely on and look up to. , you are the catalyst of change in humanity.",
		"keys": [
			{
				"key": "name",
				"index": 50
			}
		]
	},
	{
		"start": 526,
		"end": 535,
		"text": "But every explorer needs someone to accompany them on their adventures; a partner-in-crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/explorer-love-compatibility.png",
					"fadeIn": true
				},
				"index": 141
			}
		]
	},
	{
		"start": 535,
		"end": 542,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with.",
		"keys": []
	},
	{
		"start": 542,
		"end": 549,
		"text": "Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 549,
		"end": 563,
		"text": ", you’re not the kind of person that has trouble when it comes to love. Love interests find themselves drawn to your charisma and kind nature. You’re sort of a rare breed when it comes to love.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 563,
		"end": 573,
		"text": "You communicate better than everyone else, and you’re a thoughtful individual. The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 573,
		"end": 587,
		"text": "You become very selective with who you choose to date and who you choose to end up with – for good reason, of course. I sense that in the coming years, you will be the happiest you’ve ever been in that regard.",
		"keys": []
	},
	{
		"start": 587,
		"end": 596,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find that happiness that you’re looking for soon enough.\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/explorer-love-compatibility.png",
					"fadeOut": true
				},
				"index": 138
			}
		]
	},
	{
		"start": 596,
		"end": 608,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 608,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover heavenly rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 5,
		"end": 11,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 11,
		"end": 19,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Hero!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/hero.png",
					"fadeIn": true
				},
				"index": 98
			}
		]
	},
	{
		"start": 19,
		"end": 32,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/hero.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 32,
		"end": 47,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 47,
		"end": 57,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 57,
		"end": 73,
		"text": "That’s right, . You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 73,
		"end": 82,
		"text": "But before we get into that, I want to share with you about your archetype, The Hero, and what it means.",
		"keys": []
	},
	{
		"start": 82,
		"end": 90,
		"text": ", you truly are a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 90,
		"end": 103,
		"text": "You are a brave and deeply intelligent being – not necessarily in the sense of academics, but in terms of connecting with people and building rapport with people from all sorts of backgrounds.",
		"keys": []
	},
	{
		"start": 103,
		"end": 112,
		"text": "You’re different that way, . While the world walks in one direction, you have no qualms with going against it.",
		"keys": [
			{
				"key": "name",
				"index": 27
			}
		]
	},
	{
		"start": 112,
		"end": 115,
		"text": "That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 34
			}
		]
	},
	{
		"start": 115,
		"end": 122,
		"text": "You are the epitome of selflessness. You’re able to empathize with anyone and everyone.",
		"keys": []
	},
	{
		"start": 122,
		"end": 131,
		"text": "And if given the opportunity to lay down yourself for the sake of someone else, you have the courage to do so without hesitation.",
		"keys": []
	},
	{
		"start": 131,
		"end": 136,
		"text": "That’s because as a Hero, you are highly compassionate.",
		"keys": []
	},
	{
		"start": 136,
		"end": 146,
		"text": "You put the needs of others before your own, and you’re able to connect with strangers just as well as you’re able to connect with your closest loved ones.",
		"keys": []
	},
	{
		"start": 146,
		"end": 160,
		"text": ", you might not know it yet, but you are more morally and ethically upright than others. You hold your values and principles close to your heart, and you’re always ready to stick to your guns.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 160,
		"end": 162,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 162,
		"end": 175,
		"text": "You are not just an everyday “Hero”. You are the Hero who will one day save the world. Not like a superhero, but you will create solutions to the world’s biggest problems.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 172
			}
		]
	},
	{
		"start": 175,
		"end": 188,
		"text": ", I’m getting the sense that you’re going to live a long, and happy life. And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 188,
		"end": 197,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 197,
		"end": 205,
		"text": "Talking to people is never a problem for you, but I’m getting the sense that you tend to struggle when it comes to being yourself.",
		"keys": []
	},
	{
		"start": 205,
		"end": 212,
		"text": "Your nature revolves so much around how people perceive you that you can become too cautious of how you act.",
		"keys": []
	},
	{
		"start": 212,
		"end": 223,
		"text": ", don’t let that discourage you. The world needs your selfless and kind nature. The world needs people like you to be in positions of power.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 223,
		"end": 236,
		"text": "You are what keeps the world grounded. You do, however, need to understand that it’s important for you to be who you are without worrying about the perceptions of others.",
		"keys": []
	},
	{
		"start": 236,
		"end": 241,
		"text": "That way, you’ll be able to build trust and create even more fruitful interactions.",
		"keys": []
	},
	{
		"start": 241,
		"end": 252,
		"text": "After all, , your confidence is unparalleled. And there is no better way to exercise confidence than just simply being you.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 252,
		"end": 258,
		"text": ", I can already tell that your friends and family hold high regards for you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 258,
		"end": 272,
		"text": "You’re the one who they come to for detailed advice, a listening ear, or just for a quick chat. , you might not know it, but you truly are a hero to more people than you think.",
		"keys": [
			{
				"key": "name",
				"index": 96
			}
		]
	},
	{
		"start": 272,
		"end": 284,
		"text": ", I’m sensing that you’re the type of person who has many friends. You’re well-liked by most people, and you’re not someone who has trouble with making a good impression.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 284,
		"end": 290,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your intelligence and courageous nature.",
		"keys": []
	},
	{
		"start": 290,
		"end": 301,
		"text": "But you’re extremely selective with who you choose to let into your life. You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 301,
		"end": 311,
		"text": ", you are incredibly grounded. You possess the unique ability to discern right from wrong, and you’re never afraid to put your foot down.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 311,
		"end": 328,
		"text": "You have a great deal to offer to this world. , you are a natural-born leader. I sense that you will find success and fulfilment as an entrepreneur, a politician, a police officer, or a doctor.",
		"keys": [
			{
				"key": "name",
				"index": 46
			}
		]
	},
	{
		"start": 328,
		"end": 337,
		"text": "You can be very protective, . Especially as a parent. You love your children, friends, and family fiercely.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 337,
		"end": 341,
		"text": "You are willing to give and sacrifice everything that you have for them.",
		"keys": []
	},
	{
		"start": 341,
		"end": 351,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from a detailed and compassionate perspective.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 351,
		"end": 360,
		"text": "You recognize the everyday problems of the world, and you have what it takes to make the world a better and safer place for everyone.",
		"keys": []
	},
	{
		"start": 360,
		"end": 376,
		"text": ", you are practically the definition of “bravado”. You’re never afraid to rise to challenges of all sorts. But beyond that, you can be extremely innovative when it comes to solving problems.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 376,
		"end": 387,
		"text": "You excel at one-on-one interactions, and never fail to make an excellent impression on others. Your charisma and eloquence intrigues people.",
		"keys": []
	},
	{
		"start": 387,
		"end": 398,
		"text": "Ultimately, , you are a realist. You have a clear conscience. Discerning right from wrong has never been a difficult task for you.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 398,
		"end": 412,
		"text": "I’m getting the sense that you’re not too concerned about monetary riches, although you do wish you had more wealth. There is, however, a greater purpose for you in this lifetime, .",
		"keys": [
			{
				"key": "name",
				"index": 180
			}
		]
	},
	{
		"start": 412,
		"end": 424,
		"text": "However, , you will have to keep pushing your limits before you eventually discover your life’s purpose and direction. And that is something that you need to work towards.",
		"keys": [
			{
				"key": "name",
				"index": 9
			}
		]
	},
	{
		"start": 424,
		"end": 432,
		"text": "At times, it might feel as if you’re living your life for others. That’s not what you want, .",
		"keys": [
			{
				"key": "name",
				"index": 92
			}
		]
	},
	{
		"start": 432,
		"end": 445,
		"text": "You want to live life for yourself. You want to love yourself. When you’re able to do that, success and the life of your dreams will follow. And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 445,
		"end": 450,
		"text": "But there’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 49
			}
		]
	},
	{
		"start": 450,
		"end": 454,
		"text": "It feels to me that you’re a deeply emotional and spiritual person.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 68
			}
		]
	},
	{
		"start": 454,
		"end": 459,
		"text": "You’re connected to your soul in a way that’s far more profound than others.",
		"keys": []
	},
	{
		"start": 459,
		"end": 469,
		"text": "Your thought process does not follow the rules and logic of the world. In fact, I get the sense that you have quite the imagination.",
		"keys": []
	},
	{
		"start": 469,
		"end": 475,
		"text": "Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 93
			}
		]
	},
	{
		"start": 475,
		"end": 483,
		"text": "And unlike others, you’re never one to shy away from a challenge or a task – no matter how difficult it appears to be.",
		"keys": []
	},
	{
		"start": 483,
		"end": 493,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 493,
		"end": 502,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 502,
		"end": 507,
		"text": "You’re the first person to step in when you see a fight breaking out.",
		"keys": []
	},
	{
		"start": 507,
		"end": 512,
		"text": "You’re the first person to reach for your pockets in the sight of a struggling busker.",
		"keys": []
	},
	{
		"start": 512,
		"end": 520,
		"text": "You’re the first person your friends call when they’ve had a horrible day. You’re the one who people rely on and look up to.",
		"keys": []
	},
	{
		"start": 520,
		"end": 525,
		"text": ", you are the hero who will one day save the world.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 525,
		"end": 533,
		"text": "But every superhero needs a side-kick; a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/hero-love-compatibility.png",
					"fadeIn": true
				},
				"index": 108
			}
		]
	},
	{
		"start": 533,
		"end": 546,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with. Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 546,
		"end": 560,
		"text": ", you’re not the kind of person that has trouble when it comes to love. Love interests find themselves drawn to your strength and decisiveness. You’re sort of a rare breed when it comes to love.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 560,
		"end": 572,
		"text": "You communicate better than everyone else, and you’re a thoughtful individual. The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 572,
		"end": 586,
		"text": "You become very selective with who you choose to date and who you choose to end up with – for good reason, of course. I sense that in the coming years, you will be the happiest you’ve ever been in that regard.",
		"keys": []
	},
	{
		"start": 586,
		"end": 596,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find that happiness that you’re looking for soon enough.\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/hero-love-compatibility.png",
					"fadeOut": true
				},
				"index": 138
			}
		]
	},
	{
		"start": 596,
		"end": 608,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 608,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover heavenly rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 0,
		"end": 3,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 3,
		"end": 10,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Innocent!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/innocent.png",
					"fadeIn": true
				},
				"index": 102
			}
		]
	},
	{
		"start": 10,
		"end": 22,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/innocent.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 22,
		"end": 37,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 37,
		"end": 46,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 46,
		"end": 63,
		"text": "That’s right, . You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life you’ve always dreamed of.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 63,
		"end": 71,
		"text": "But before we get into that, I want to share with you about your archetype, The Innocent, and what it means.",
		"keys": []
	},
	{
		"start": 71,
		"end": 80,
		"text": ", you are truly a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 80,
		"end": 89,
		"text": "You are an extremely positive and optimistic being. You are capable of finding joy in the smallest of things, and you always have the purest of intentions.",
		"keys": []
	},
	{
		"start": 89,
		"end": 100,
		"text": "You’re different that way, . While the world walks in one direction, you have no qualms with going against it. That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 27
			},
			{
				"key": "name",
				"index": 145
			}
		]
	},
	{
		"start": 100,
		"end": 112,
		"text": "You’re deeply sensitive. You’re able to empathize with anyone and everyone. That’s because as an Innocent, you are highly compassionate.",
		"keys": []
	},
	{
		"start": 112,
		"end": 122,
		"text": "You put the needs of others before your own, and you’re able to connect with strangers just as well as you’re able to connect with your closest loved ones.",
		"keys": []
	},
	{
		"start": 122,
		"end": 128,
		"text": "But beyond that, you are also an incredibly strong and dedicated individual.",
		"keys": []
	},
	{
		"start": 128,
		"end": 141,
		"text": ", you might not know it yet, but you are more morally and ethically upright than others. You hold your values and principles close to your heart, and you’re always ready to stick to your guns.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 141,
		"end": 145,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 145,
		"end": 149,
		"text": "You represent what it means to be strong.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 42
			}
		]
	},
	{
		"start": 149,
		"end": 162,
		"text": ", I’m getting the sense that you’re going to live a long, and abundant life. And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 162,
		"end": 169,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 169,
		"end": 180,
		"text": "However, I have no doubt that you will effortlessly power through the darkest of days. There is no one else in the world who’s able to match your spiritual and mental strength.",
		"keys": []
	},
	{
		"start": 180,
		"end": 187,
		"text": "Your faith is truly unbreakable.",
		"keys": []
	},
	{
		"start": 187,
		"end": 195,
		"text": ", don’t let the judgments of the world discourage you. The world needs your selflessness and strong nature.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 195,
		"end": 205,
		"text": "The world needs people like you to be in positions of power. You play a fundamental role in the world, representing the importance of self-belief and perseverance.",
		"keys": []
	},
	{
		"start": 205,
		"end": 219,
		"text": "You do, however, need to understand that it’s easy for you to stay within your comfort zone. Instead, you should be constantly jumping into new opportunities and discovering your path as it unfolds.",
		"keys": []
	},
	{
		"start": 219,
		"end": 226,
		"text": "That way, you’ll be able to continue to grow as a person, as an individual, and as an Innocent.",
		"keys": []
	},
	{
		"start": 226,
		"end": 237,
		"text": "After all, , your personal growth will ultimately determine your path to fulfilment. Of course, I have no doubt that you will make it there.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 237,
		"end": 249,
		"text": ", I can already tell that your friends and family really look up to you. You’re the one who they come to for detailed advice, a listening ear, or just a quick chat.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 249,
		"end": 258,
		"text": "You’re not the type of person to have huge circles of friends. You’re not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 258,
		"end": 272,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your kind and sweet nature. You tend to be more accepting of others, allowing you to forge a great number of friendships.",
		"keys": []
	},
	{
		"start": 272,
		"end": 278,
		"text": "Nevertheless, you prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 278,
		"end": 293,
		"text": ", you are incredibly nurturing. You possess the unique ability to connect with others and blend into any social group. You have a great deal to offer to this world. Friend, you are a natural-born leader.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 293,
		"end": 303,
		"text": "I sense that you will find success and fulfilment as a nurse, a motivational speaker, a therapist, or a businessperson.",
		"keys": []
	},
	{
		"start": 303,
		"end": 317,
		"text": "You can be very protective, . Especially as a parent. You love your children, friends, and family fiercely. You are willing to give and sacrifice everything that you have for them.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 317,
		"end": 326,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from a broad and altruistic perspective.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 326,
		"end": 333,
		"text": "You see the importance of personal growth, and you have what it takes to make a massive amount of impact in the world.",
		"keys": []
	},
	{
		"start": 333,
		"end": 343,
		"text": ", you are on a quest – a quest for happiness. I’m sensing that you’ve been struggling with finding fulfilment.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 343,
		"end": 352,
		"text": "Please allow me to say this – the light at the end of the tunnel is approaching, and you will find your fulfilment a lot sooner than you expected.",
		"keys": []
	},
	{
		"start": 352,
		"end": 362,
		"text": "Ultimately, , you are a realist. You have a clear conscience. Discerning right from wrong has never been a difficult task for you.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 362,
		"end": 373,
		"text": "I’m getting the sense that you’re not too concerned about monetary riches, although you do wish you had more wealth. There is, however, a greater purpose for you in this lifetime, .",
		"keys": [
			{
				"key": "name",
				"index": 180
			}
		]
	},
	{
		"start": 373,
		"end": 387,
		"text": "However, , I’m sensing that you’re afraid of failure. But you should’t be afraid of anything at all. Your positivity and strength form the foundation of success.",
		"keys": [
			{
				"key": "name",
				"index": 9
			}
		]
	},
	{
		"start": 387,
		"end": 395,
		"text": "As long as you continue to act on new opportunities of personal growth, you will find the success that you’re looking for.",
		"keys": []
	},
	{
		"start": 395,
		"end": 408,
		"text": "At times, it might feel as if you’re living your life for others. That’s not what you want, . You want to live life for yourself. You want to love yourself.",
		"keys": [
			{
				"key": "name",
				"index": 92
			}
		]
	},
	{
		"start": 408,
		"end": 418,
		"text": "When you’re able to do that, success and the life of your dreams will follow. And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 418,
		"end": 423,
		"text": "There’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 45
			}
		]
	},
	{
		"start": 423,
		"end": 428,
		"text": "It feels to me that you’re a deeply emotional and spiritual person.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 68
			}
		]
	},
	{
		"start": 428,
		"end": 433,
		"text": "You’re connected to your soul in a way that’s far more profound than others.",
		"keys": []
	},
	{
		"start": 433,
		"end": 437,
		"text": "Your thought process does not follow the rules and logic of the world.",
		"keys": []
	},
	{
		"start": 437,
		"end": 450,
		"text": "In fact, I get the sense that you have quite the imagination. Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 155
			}
		]
	},
	{
		"start": 450,
		"end": 460,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 460,
		"end": 468,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 468,
		"end": 481,
		"text": "You’re the first person to step in when you see a fight breaking out. You’re the first person to reach for your pockets in the sight of a struggling busker. You’re the first person your friends call when they’ve had a horrible day.",
		"keys": []
	},
	{
		"start": 481,
		"end": 485,
		"text": "You’re the one who people rely on and look up to.",
		"keys": []
	},
	{
		"start": 485,
		"end": 499,
		"text": "You might not know this, but the people around you draw inspiration, motivation, and strength from your energy. Your purity is unparalleled.",
		"keys": []
	},
	{
		"start": 499,
		"end": 503,
		"text": ", you are the angel overlooking the goodness of the world.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 503,
		"end": 511,
		"text": "But even angels need someone to rely on; a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/innocent-love-compatibility.png",
					"fadeIn": true
				},
				"index": 110
			}
		]
	},
	{
		"start": 511,
		"end": 523,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with. Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 523,
		"end": 537,
		"text": ", you’re not the kind of person that has trouble when it comes to love. People find themselves drawn to your charisma and kind nature. You’re sort of a rare breed when it comes to love.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 537,
		"end": 548,
		"text": "You communicate better than anyone else, and you’re an incredibly thoughtful individual. The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 548,
		"end": 563,
		"text": "You become very selective when it comes to who you choose to date and who you choose to end up with – for a good reason, of course. I sense that in the coming years, you will be the happiest you’ve ever been in that regard.",
		"keys": []
	},
	{
		"start": 563,
		"end": 572,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find that happiness that you’re looking for soon enough.\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/innocent-love-compatibility.png",
					"fadeOut": true
				},
				"index": 138
			}
		]
	},
	{
		"start": 572,
		"end": 584,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 584,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover heavenly rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 1,
		"end": 3,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 3,
		"end": 10,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Jester!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/jester.png",
					"fadeIn": true
				},
				"index": 100
			}
		]
	},
	{
		"start": 10,
		"end": 22,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/jester.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 22,
		"end": 37,
		"text": "The quiz you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 37,
		"end": 46,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 46,
		"end": 62,
		"text": "That’s right, . You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 62,
		"end": 69,
		"text": "But before we get into that, I want to share with you about your archetype, The Jester, and what it means.",
		"keys": []
	},
	{
		"start": 69,
		"end": 78,
		"text": ", you are truly a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 78,
		"end": 89,
		"text": "You are an incredibly sharp and deeply intelligent being – not necessarily in the sense of academics, but in terms of approaching various topics from a myriad of perspectives.",
		"keys": []
	},
	{
		"start": 89,
		"end": 93,
		"text": "You’re different that way, .",
		"keys": [
			{
				"key": "name",
				"index": 27
			}
		]
	},
	{
		"start": 93,
		"end": 101,
		"text": "While the world walks in one direction, you have no qualms with going against it. That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 116
			}
		]
	},
	{
		"start": 101,
		"end": 114,
		"text": "You seem to be able to breeze your way through life, with your bright thoughts and your hilarious interpretations. That’s because as a Jester, you are highly intuitive.",
		"keys": []
	},
	{
		"start": 114,
		"end": 120,
		"text": "Your sense of humour is constructed with creativity, and seasoned with your charisma.",
		"keys": []
	},
	{
		"start": 120,
		"end": 130,
		"text": ", you might not know it yet, but you can be extremely charismatic, and people fall in love with the conversations that they have with you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 130,
		"end": 137,
		"text": "You appear to be a natural-born performer, and you’re always happy to be in the limelight and the life of the party.",
		"keys": []
	},
	{
		"start": 137,
		"end": 141,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 141,
		"end": 145,
		"text": "You put the smile in happiness.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 32
			}
		]
	},
	{
		"start": 145,
		"end": 159,
		"text": ", I’m getting the sense that you’re going to live a long, and happy life. And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 159,
		"end": 167,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 167,
		"end": 177,
		"text": "Talking to people is never a problem for you, and I’m getting the sense that you tend to struggle when it comes to holding serious conversations.",
		"keys": []
	},
	{
		"start": 177,
		"end": 186,
		"text": "Your nature revolves so much around light-hearted jokes and innocent conversations that touching on serious topics becomes a chore.",
		"keys": []
	},
	{
		"start": 186,
		"end": 198,
		"text": ", don’t let that discourage you. The world needs your light-hearted and comical nature. The world needs people like you to be in positions of power.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 198,
		"end": 205,
		"text": "You are what keeps the world grounded. It has been said, that even kings take the advice of their jesters.",
		"keys": []
	},
	{
		"start": 205,
		"end": 213,
		"text": "You do, however, need to understand that it’s important for you to become more in touch with your inner self and inner emotions.",
		"keys": []
	},
	{
		"start": 213,
		"end": 221,
		"text": "That way, you’ll be able to discover the deeper meanings behind your personality and your purpose in this lifetime.",
		"keys": []
	},
	{
		"start": 221,
		"end": 235,
		"text": "After all, , you have the capacity to bring happiness – not just to those around you, but to the world. And I believe that’s where you will find fulfilment.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 235,
		"end": 251,
		"text": ", I can already tell that your friends and family really adore being around you. You’re the one who they come to for a wonderful time, a light-hearted conversation, or just for a quick chat.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 251,
		"end": 260,
		"text": "You’re not the type of person to have huge circles of friends. You’re not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 260,
		"end": 273,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your charisma and easy-going nature. But you’re extremely selective when it comes to who you choose to let into your life.",
		"keys": []
	},
	{
		"start": 273,
		"end": 278,
		"text": "You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 278,
		"end": 288,
		"text": ", you are incredibly impressionable. You possess the unique ability to impress others and blend into any social group.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 288,
		"end": 298,
		"text": "While others struggle to have their names remembered, you seem to be the type of person who everyone knows. You have a great deal to offer to this world.",
		"keys": []
	},
	{
		"start": 298,
		"end": 304,
		"text": ", you are capable of bringing smiles to the darkest of times.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 304,
		"end": 314,
		"text": "I sense that you will find success and fulfilment as an entertainer, a performer, a salesman, or a writer.",
		"keys": []
	},
	{
		"start": 314,
		"end": 327,
		"text": "I can tell that you’re not the protective type, . Even as a parent. You prefer to give others the freedom and room that they need to grow on their own.",
		"keys": [
			{
				"key": "name",
				"index": 48
			}
		]
	},
	{
		"start": 327,
		"end": 340,
		"text": "However, you must remember to be nurturing and present in the lives of your loved ones. You are willing to give and sacrifice everything that you have for the people closest to you.",
		"keys": []
	},
	{
		"start": 340,
		"end": 354,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to create hope from desolation. Your unique ability to create happiness makes you an excellent catalyst of change.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 354,
		"end": 362,
		"text": "You see the big picture, and you have what it takes to make this world a happier place – one smile at a time.",
		"keys": []
	},
	{
		"start": 362,
		"end": 374,
		"text": ", you are an enthusiastic and humorous being. Like a fairy godmother with the touch of your wand, you’re able to spark laughter and smiles from all sorts of people.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 374,
		"end": 387,
		"text": "You excel at interactions with both individuals and groups, and never fail to make an excellent impression on others. Your charisma and eloquence intrigues people.",
		"keys": []
	},
	{
		"start": 387,
		"end": 396,
		"text": "Ultimately, , you are a realist. You understand the importance of money, but I’m getting the sense that you’re not too concerned about monetary riches.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 396,
		"end": 403,
		"text": "Although you do often wish that you had more wealth. There is, however, a greater purpose for you in this lifetime, .",
		"keys": [
			{
				"key": "name",
				"index": 116
			}
		]
	},
	{
		"start": 403,
		"end": 414,
		"text": "Of course, , you can at times be dependent on your ability to make others laugh for your own happiness. And that is something you need to be careful of.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 414,
		"end": 424,
		"text": "At times, you might feel as if you’re living your life for others. That’s not what you want, . You want to live life for yourself. You want to love yourself.",
		"keys": [
			{
				"key": "name",
				"index": 93
			}
		]
	},
	{
		"start": 424,
		"end": 433,
		"text": "When you’re able to do that, success and the life of your dreams will follow. And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 433,
		"end": 438,
		"text": "But there’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 49
			}
		]
	},
	{
		"start": 438,
		"end": 445,
		"text": "It feels to me that you might not be the most emotional and spiritual person.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 78
			}
		]
	},
	{
		"start": 445,
		"end": 454,
		"text": "But you’re intimately connected to your soul in a way that’s far more profound than others. Your thought process does not follow the rules and logic of the world.",
		"keys": []
	},
	{
		"start": 454,
		"end": 466,
		"text": "In fact, I get the sense that you have quite the imagination. Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 155
			}
		]
	},
	{
		"start": 466,
		"end": 469,
		"text": ", you’re not someone who likes to argue.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 469,
		"end": 476,
		"text": "You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": []
	},
	{
		"start": 476,
		"end": 485,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 485,
		"end": 503,
		"text": "You’re the first person to step in when you see a fight breaking out. You’re the first person to reach for your pockets in the sight of a struggling busker. You’re the first person your friends call when they’ve had a horrible day. You’re the one who people rely on and look up to.",
		"keys": []
	},
	{
		"start": 503,
		"end": 507,
		"text": ", you are the light of hope and happiness of the world.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 507,
		"end": 516,
		"text": "But every superhero needs a side-kick; a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/jester-love-compatibility.png",
					"fadeIn": true
				},
				"index": 108
			}
		]
	},
	{
		"start": 516,
		"end": 528,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with. Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 528,
		"end": 538,
		"text": ", you’re not the kind of person that has trouble when it comes to love. People find themselves drawn to your charisma and kind nature.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 538,
		"end": 547,
		"text": "You’re sort of a rare breed when it comes to love. You communicate better than anyone else, you’re an incredibly thoughtful individual.",
		"keys": []
	},
	{
		"start": 547,
		"end": 554,
		"text": "The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 554,
		"end": 571,
		"text": "You become very selective when it comes to who you choose to date and who you choose to end up with – for a good reason, of course. I sense that in the coming years, you will be the happiest you’ve ever been in that regard.",
		"keys": []
	},
	{
		"start": 571,
		"end": 580,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find happiness that you’re looking for soon enough.\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/jester-love-compatibility.png",
					"fadeIn": true
				},
				"index": 133
			}
		]
	},
	{
		"start": 580,
		"end": 596,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 596,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover heavenly rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 2,
		"end": 4,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 4,
		"end": 11,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Lover!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/lover.png",
					"fadeIn": true
				},
				"index": 99
			}
		]
	},
	{
		"start": 11,
		"end": 22,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/lover.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 22,
		"end": 36,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 36,
		"end": 44,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 44,
		"end": 58,
		"text": "That’s right, . You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 58,
		"end": 65,
		"text": "But before we get into that, I want to share with you about your archetype, The Lover, and what it means.",
		"keys": []
	},
	{
		"start": 65,
		"end": 74,
		"text": ", you  are truly a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 74,
		"end": 83,
		"text": "You are a mature and deeply intelligent being – not necessarily in the sense of academics, but in terms of thinking differently.",
		"keys": []
	},
	{
		"start": 83,
		"end": 91,
		"text": "While the world walks in one direction, you have no qualms with going against it. That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 116
			}
		]
	},
	{
		"start": 91,
		"end": 97,
		"text": "You’re deeply sensitive. You’re able to see and feel all the pains of the world.",
		"keys": []
	},
	{
		"start": 97,
		"end": 110,
		"text": "That’s because as a Lover, the emotions that you feel are extreme. Your happiness is an elation beyond description, while your pain feels like it can be excruciating and crippling..",
		"keys": []
	},
	{
		"start": 110,
		"end": 124,
		"text": ", you might not know it yet, but you are able to understand emotions at a level beyond others. You have an edge over everyone else when it comes to navigating your way through social situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 124,
		"end": 129,
		"text": "It’s no wonder that the people you encounter always feel so drawn to you.",
		"keys": []
	},
	{
		"start": 129,
		"end": 132,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 132,
		"end": 137,
		"text": "You represent the empathy that the world truly needs.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 54
			}
		]
	},
	{
		"start": 137,
		"end": 149,
		"text": ", I’m getting the sense that you’re going to live a long, and happy life. And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 149,
		"end": 157,
		"text": "But there’s something else, . There will be times when you feel as if you’re not enough for people.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 157,
		"end": 170,
		"text": "But that is far from the truth. In fact, you truly are a blessing to everyone who crosses your path. Your fun and jovial nature never fails to attract amazing people to be a part of your life.",
		"keys": []
	},
	{
		"start": 170,
		"end": 176,
		"text": "You do, however, need to pay attention to sifting out the right people from the wrong people.",
		"keys": []
	},
	{
		"start": 176,
		"end": 183,
		"text": "Nevertheless, , the friendships that you forge have the deepest bonds.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 183,
		"end": 192,
		"text": ", your enthusiasm for everything around you might be a little too much for others, but don’t let that discourage you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 192,
		"end": 202,
		"text": "The world needs your energy and excitement. , you possess the uncanny ability to read social cues and see right through people.",
		"keys": [
			{
				"key": "name",
				"index": 44
			}
		]
	},
	{
		"start": 202,
		"end": 210,
		"text": "I’m getting the sense that you can instantly tell when someone’s lying. Yet, nothing pains you more than being lied to.",
		"keys": []
	},
	{
		"start": 210,
		"end": 220,
		"text": "You never hesitate to jump at the opportunity to make someone’s day better. That’s because you thrive on both expressing and receiving love.",
		"keys": []
	},
	{
		"start": 220,
		"end": 229,
		"text": "You will, however, encounter wicked hearts and selfish people, but don’t let that lose sight of who you truly are, .",
		"keys": [
			{
				"key": "name",
				"index": 115
			}
		]
	},
	{
		"start": 229,
		"end": 241,
		"text": ", I can already tell that your friends and family really look up to you. You’re the one who they come to for detailed advice, a listening ear, or just a quick chat.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 241,
		"end": 250,
		"text": "You’re not the type of person to have huge circles of friends. You’re not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 250,
		"end": 261,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your intelligence and sweet nature. But you’re extremely selective with who you choose to let into your life.",
		"keys": []
	},
	{
		"start": 261,
		"end": 266,
		"text": "You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 266,
		"end": 281,
		"text": ", you are incredibly expressive. You’re fully connected to your emotions and you’re highly talented at the arts. You could be a masterful wordsmith or a captivating dancer.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 281,
		"end": 286,
		"text": "This makes you a natural-born artist, but not really in the sense of conventional art.",
		"keys": []
	},
	{
		"start": 286,
		"end": 297,
		"text": "I sense that you will find success and fulfilment as a composer, choreographer, psychologist, or a trainer of any discipline.",
		"keys": []
	},
	{
		"start": 297,
		"end": 315,
		"text": "You can be very protective, . Especially as a spouse. You love your significant other more than anything in the world – whoever you end up with or have ended up with is bound to be the luckiest person in the world.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 315,
		"end": 320,
		"text": "You are willing to give and sacrifice everything that you have for them.",
		"keys": []
	},
	{
		"start": 320,
		"end": 328,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from an extremely detailed perspective.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 328,
		"end": 335,
		"text": "You see all the little imperfections in the world, and you possess the charisma and the knowledge to make it a better place.",
		"keys": []
	},
	{
		"start": 335,
		"end": 350,
		"text": ", you tend to concern yourself with relationships. You’re at your happiest when you’re in a committed relationship; especially with someone who treasures you, nurtures you, and loves you for exactly who you are.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 350,
		"end": 358,
		"text": "Your faithfulness and trust are unquestionable, but if your trust is ever broken, you find it almost impossible to rebuild it.",
		"keys": []
	},
	{
		"start": 358,
		"end": 368,
		"text": "At times, you might even associate the successes and turmoils of your relationships with your self-worth.",
		"keys": []
	},
	{
		"start": 368,
		"end": 379,
		"text": "I urge you, , your relationships do not define you. You create so much value for the people around you, and the world. You have so much to offer.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 379,
		"end": 390,
		"text": "As you can already tell, , your relationships can make you dependent on others for your own happiness. And that is something that you need to be careful of.",
		"keys": [
			{
				"key": "name",
				"index": 25
			}
		]
	},
	{
		"start": 390,
		"end": 401,
		"text": "At times, it might feel as if you’re living your life for others. That’s not what you want, . You want to live life for yourself. You want to love yourself.",
		"keys": [
			{
				"key": "name",
				"index": 92
			}
		]
	},
	{
		"start": 401,
		"end": 411,
		"text": "When you’re able to do that, success and the life of your dreams will follow. And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 411,
		"end": 416,
		"text": "But there’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 49
			}
		]
	},
	{
		"start": 416,
		"end": 423,
		"text": "It feels to me that you’re a deeply emotional and spiritual person.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 68
			}
		]
	},
	{
		"start": 423,
		"end": 427,
		"text": "You’re connected to your soul in a way that’s far more profound than others.",
		"keys": []
	},
	{
		"start": 427,
		"end": 432,
		"text": "Your thought process does not follow the rules and logic of the world.",
		"keys": []
	},
	{
		"start": 432,
		"end": 446,
		"text": "In fact, I get the sense that you have quite the imagination. Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 155
			}
		]
	},
	{
		"start": 446,
		"end": 456,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 456,
		"end": 464,
		"text": "But when you are backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 464,
		"end": 481,
		"text": "You’re the first person to step in when you see a fight breaking out. You’re the first person to reach for your pockets in the sight of a struggling busker. You’re the first person your friends call when they’ve had a horrible day. You’re the one who people rely on and look up to.",
		"keys": []
	},
	{
		"start": 481,
		"end": 486,
		"text": ", you are the role model of the world.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 486,
		"end": 493,
		"text": "But every lover needs a side-kick; a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/lover-love-compatibility.png",
					"fadeIn": true
				},
				"index": 104
			}
		]
	},
	{
		"start": 493,
		"end": 506,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with. Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 506,
		"end": 518,
		"text": ", you’re not the kind of person that has trouble when it comes to love. People find themselves drawn to your fun-loving nature and thoughtful tendencies.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 518,
		"end": 527,
		"text": "You’re sort of a rare breed when it comes to love. You’re fiercely faithful, thoughtful, sweet, and emotionally connected.",
		"keys": []
	},
	{
		"start": 527,
		"end": 541,
		"text": "The relationships that you forge with potential lovers are always profound and deep. You become very selective when it comes to who you choose to date and who you choose to end up with – for a good reason, of course.",
		"keys": []
	},
	{
		"start": 541,
		"end": 547,
		"text": "I sense that in the coming years, you will be the happiest you’ve ever been in that regard.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/lover-love-compatibility.png",
					"fadeOut": true
				},
				"index": 92
			}
		]
	},
	{
		"start": 547,
		"end": 559,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 559,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover immeasurable rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 3,
		"end": 7,
		"text": "Hello ",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 7,
		"end": 14,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Magician!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/magician.png",
					"fadeIn": true
				},
				"index": 102
			}
		]
	},
	{
		"start": 14,
		"end": 27,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/magician.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 27,
		"end": 42,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 42,
		"end": 51,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 51,
		"end": 66,
		"text": "That’s right, . You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 66,
		"end": 73,
		"text": "But before we get into that, I want to share with you about your archetype, The Magician, and what it means.",
		"keys": []
	},
	{
		"start": 73,
		"end": 81,
		"text": ", you truly are a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 81,
		"end": 91,
		"text": "You are an intellectual and deeply spiritual being – not necessarily in the sense of religion, but in terms of your understanding of the universe.",
		"keys": []
	},
	{
		"start": 91,
		"end": 98,
		"text": "You’re different that way, . While the world walks in one direction, you have no qualms with going against it.",
		"keys": [
			{
				"key": "name",
				"index": 27
			}
		]
	},
	{
		"start": 98,
		"end": 101,
		"text": "That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 34
			}
		]
	},
	{
		"start": 101,
		"end": 108,
		"text": "You have a profound understanding when it comes to the inner-workings of human beings.",
		"keys": []
	},
	{
		"start": 108,
		"end": 114,
		"text": "You’re able to empathize with anyone and everyone, and you’re able to discern what people really want.",
		"keys": []
	},
	{
		"start": 114,
		"end": 120,
		"text": "That’s because as a Magician, you are able to recognize the most intricate details about people.",
		"keys": []
	},
	{
		"start": 120,
		"end": 125,
		"text": "You are constantly on the search for knowledge that will help you improve as an individual.",
		"keys": []
	},
	{
		"start": 125,
		"end": 132,
		"text": ", you might not know it yet, but you are an innately talented individual and an excellent all-rounder.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 132,
		"end": 141,
		"text": "You are a capable individual who’s able to wear many different hats – sort of like an actual magician who has many tricks hidden in his sleeves.",
		"keys": []
	},
	{
		"start": 141,
		"end": 144,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 144,
		"end": 149,
		"text": "You are a visionary who has the capacity to bring real change to the world.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 76
			}
		]
	},
	{
		"start": 149,
		"end": 154,
		"text": ", I’m getting the sense that you’re going to live a long, and happy life.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 154,
		"end": 160,
		"text": "And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": []
	},
	{
		"start": 160,
		"end": 168,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 168,
		"end": 173,
		"text": "As a Magician, your biggest challenge lies within how critical you are of people.",
		"keys": []
	},
	{
		"start": 173,
		"end": 181,
		"text": "This applies to your expectations of both others and yourself. I’m sensing that you tend to struggle with disappointment.",
		"keys": []
	},
	{
		"start": 181,
		"end": 190,
		"text": "People seem to constantly let you down, and more often than not, you feel as if you never seem to be able to meet the expectations that you’ve set for yourself.",
		"keys": []
	},
	{
		"start": 190,
		"end": 200,
		"text": ", don’t let that discourage you. The world needs your talents and unique abilities. The world needs people like you to be in positions of power.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 200,
		"end": 203,
		"text": "You are what keeps the world functioning.",
		"keys": []
	},
	{
		"start": 203,
		"end": 212,
		"text": "You bring change and improvement into the world. You do, however, need to understand that it’s important for you to be less closed off and more connected with others.",
		"keys": []
	},
	{
		"start": 212,
		"end": 219,
		"text": "There is no doubt that people have a great amount of respect for you, but at times you can appear aloof and difficult to speak with.",
		"keys": []
	},
	{
		"start": 219,
		"end": 223,
		"text": "That way, you’ll be able to build trust and create even more fruitful interactions.",
		"keys": []
	},
	{
		"start": 223,
		"end": 233,
		"text": "After all, , conversation might not be your forte. But mastering the art of conversation will eventually create opportunities for you.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 233,
		"end": 243,
		"text": ", I can already tell that your friends and family really look up to you. You’re the one who they come to for detailed advice, a listening ear, or just a quick chat.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 243,
		"end": 251,
		"text": "You’re not the type of person to have huge circles of friends. You’re not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 251,
		"end": 261,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your intelligence and sweet nature. But you’re extremely selective with who you choose to let into your life.",
		"keys": []
	},
	{
		"start": 261,
		"end": 265,
		"text": "You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 265,
		"end": 275,
		"text": ", you are incredibly nurturing. You possess the unique ability to connect with others and blend into any social group.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 275,
		"end": 281,
		"text": "You have a great deal to offer to this world. , you are a natural-born problem-solver.",
		"keys": [
			{
				"key": "name",
				"index": 46
			}
		]
	},
	{
		"start": 281,
		"end": 288,
		"text": "I sense that you will find success and fulfilment as an entrepreneur, a manager, a journalist or a professor.",
		"keys": []
	},
	{
		"start": 288,
		"end": 296,
		"text": "You can be very protective, . Especially as a parent. You love your children, friends, and family fiercely.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 296,
		"end": 300,
		"text": "You are willing to give and sacrifice everything that you have for them.",
		"keys": []
	},
	{
		"start": 300,
		"end": 309,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from a broad and altruistic perspective.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 309,
		"end": 313,
		"text": "You see the big picture, and you have what it takes to make this world more connected.",
		"keys": []
	},
	{
		"start": 313,
		"end": 326,
		"text": ", you are a fast learner. While others seem to find it difficult to even understand the fundamentals of a new skill, you’re able to attain mastery over anything you set your mind to.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 326,
		"end": 335,
		"text": "In a way, your greatest strength is your ability to learn. You excel at one-on-one interactions, and never fail to make an excellent impression on others.",
		"keys": []
	},
	{
		"start": 335,
		"end": 339,
		"text": "Your charisma and eloquence intrigues people.",
		"keys": []
	},
	{
		"start": 339,
		"end": 348,
		"text": "Ultimately, , you are a realist. You have a clear conscience. Discerning right from wrong has never been a difficult task for you.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 348,
		"end": 355,
		"text": "I’m getting the sense that you’re not too concerned about monetary riches, although you do wish you had more wealth.",
		"keys": []
	},
	{
		"start": 355,
		"end": 358,
		"text": "There is, however, a greater purpose for you in this lifetime, .",
		"keys": [
			{
				"key": "name",
				"index": 63
			}
		]
	},
	{
		"start": 358,
		"end": 366,
		"text": "You must also be aware of the relationships that you forge and prevent yourself from succumbing to the expectations of others.",
		"keys": []
	},
	{
		"start": 366,
		"end": 374,
		"text": ", you can at times depend on the approval of others for your own happiness. And that is something that you need to be careful of.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 374,
		"end": 391,
		"text": "At times, it might feel as if you’re living your life for others. That’s not what you want, . You want to live life for yourself. You want to love yourself. When you’re able to do that, success and the life of your dreams will follow.",
		"keys": [
			{
				"key": "name",
				"index": 92
			}
		]
	},
	{
		"start": 391,
		"end": 394,
		"text": "And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 394,
		"end": 398,
		"text": "But there’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 49
			}
		]
	},
	{
		"start": 398,
		"end": 402,
		"text": "It feels to me that you’re a deeply emotional and spiritual person.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 68
			}
		]
	},
	{
		"start": 402,
		"end": 411,
		"text": "You’re connected to your soul in a way that’s far more profound than others. Your thought process does not follow the rules and logic of the world.",
		"keys": []
	},
	{
		"start": 411,
		"end": 420,
		"text": "In fact, I get the sense that you have quite the imagination. Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 155
			}
		]
	},
	{
		"start": 420,
		"end": 431,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 431,
		"end": 438,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 438,
		"end": 455,
		"text": "You’re the first person to step in when you see a fight breaking out. You’re the first person to reach for your pockets in the sight of a struggling busker. You’re the first person your friends call when they’ve had a horrible day. You’re the one who people rely on and look up to.",
		"keys": []
	},
	{
		"start": 455,
		"end": 458,
		"text": ", you are the role model of the world.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 458,
		"end": 465,
		"text": "But every magician needs a side-kick; a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/magician-love-compatibility.png",
					"fadeIn": true
				},
				"index": 107
			}
		]
	},
	{
		"start": 465,
		"end": 476,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with. Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 476,
		"end": 485,
		"text": ", you’re not the kind of person that has trouble when it comes to love. People find themselves drawn to your charisma and kind nature.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 485,
		"end": 493,
		"text": "You’re sort of a rare breed when it comes to love. You communicate better than anyone else, and you’re an incredibly thoughtful individual.",
		"keys": []
	},
	{
		"start": 493,
		"end": 498,
		"text": "The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 498,
		"end": 505,
		"text": "You become very selective with who you choose to date and who you choose to end up with – for good reason, of course.",
		"keys": []
	},
	{
		"start": 505,
		"end": 510,
		"text": "I sense that in the coming years, you will be the happiest you’ve ever been in that regard.",
		"keys": []
	},
	{
		"start": 510,
		"end": 518,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find that happiness that you’re looking for soon enough.\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/magician-love-compatibility.png",
					"fadeOut": true
				},
				"index": 138
			}
		]
	},
	{
		"start": 518,
		"end": 530,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 530,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover heavenly rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 3,
		"end": 6,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 6,
		"end": 12,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Member!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/member.png",
					"fadeIn": true
				},
				"index": 100
			}
		]
	},
	{
		"start": 12,
		"end": 24,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/member.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 24,
		"end": 37,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 37,
		"end": 46,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 46,
		"end": 61,
		"text": "That’s right, . You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 61,
		"end": 68,
		"text": "But before we get into that, I want to share with you about your archetype, The Member, and what it means.",
		"keys": []
	},
	{
		"start": 68,
		"end": 76,
		"text": ", you are truly a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 76,
		"end": 88,
		"text": "You are a mature and deeply intellectual being – not necessarily in the sense of academics, but in terms of connecting with people and building rapport with people from all sorts of backgrounds.",
		"keys": []
	},
	{
		"start": 88,
		"end": 90,
		"text": "You’re different that way, ..",
		"keys": [
			{
				"key": "name",
				"index": 27
			}
		]
	},
	{
		"start": 90,
		"end": 98,
		"text": "While the world walks in one direction, you have no qualms with going against it. That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 116
			}
		]
	},
	{
		"start": 98,
		"end": 105,
		"text": "You’re deeply sensitive. You’re able to empathize with anyone and everyone.",
		"keys": []
	},
	{
		"start": 105,
		"end": 117,
		"text": "That’s because as a Member, you are highly compassionate. You put the needs of others before your own, and you’re able to connect with strangers just as well as you’re able to connect with your closest loved ones.",
		"keys": []
	},
	{
		"start": 117,
		"end": 123,
		"text": ", you might not know it yet, but you are more morally and ethically upright than others.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 123,
		"end": 130,
		"text": "You hold your values and principles close to your heart, and you’re always ready to stick to your guns.",
		"keys": []
	},
	{
		"start": 130,
		"end": 133,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 133,
		"end": 136,
		"text": "You form the foundation of the world.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 38
			}
		]
	},
	{
		"start": 136,
		"end": 148,
		"text": ", I’m getting the sense that you’re going to live a long, and happy life. And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 148,
		"end": 155,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 155,
		"end": 162,
		"text": "Talking to people is never a problem for you, but I’m getting the sense that you tend to struggle when it comes to talking about yourself.",
		"keys": []
	},
	{
		"start": 162,
		"end": 170,
		"text": "Your nature revolves so much around listening to people that you find it difficult to talk about yourself and share your own experience.",
		"keys": []
	},
	{
		"start": 170,
		"end": 181,
		"text": ", don’t let that discourage you. The world needs your selflessness and kindness. The world needs people like you to be in positions of power.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 181,
		"end": 191,
		"text": "You are the one who keeps the world grounded. You do, however, need to understand that it’s important for you to openly and willingly share your story with others.",
		"keys": []
	},
	{
		"start": 191,
		"end": 198,
		"text": "That way, you’ll be able to build trust with the people around you and create even more fruitful interactions.",
		"keys": []
	},
	{
		"start": 198,
		"end": 206,
		"text": "After all, , conversation is your forte. And conversation needs more than one person to be involved.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 206,
		"end": 218,
		"text": ", I can already tell that your friends and family really look up to you. You’re the one who they come to for detailed advice, a listening ear, or just for a quick chat.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 218,
		"end": 225,
		"text": "You’re not the type of person to have huge circles of friends. You’re not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 225,
		"end": 235,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your intelligence and sweet nature. But you’re extremely selective with who you choose to let into your life.",
		"keys": []
	},
	{
		"start": 235,
		"end": 239,
		"text": "You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 239,
		"end": 247,
		"text": ", you are incredibly nurturing. You possess the unique ability to connect with others and blend into any social group.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 247,
		"end": 253,
		"text": "You have a great deal to offer to this world. And I’m getting the sense that you are a natural-born leader.",
		"keys": []
	},
	{
		"start": 253,
		"end": 261,
		"text": "You will find success and fulfilment as an entrepreneur, a politician, a public relations manager, or a salesman.",
		"keys": []
	},
	{
		"start": 261,
		"end": 274,
		"text": "You can be very protective, . Especially as a parent. You love your children, friends, and family fiercely. You are willing to give and sacrifice everything that you have for them.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 274,
		"end": 288,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from a broad and profound perspective. You see the big picture, and you have what it takes to make this world more connected.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 288,
		"end": 300,
		"text": "Each archetype has a calling in life. A calling that will lead you to joy and fulfilment.  I’d like to share with you what I’ve discovered about your calling.",
		"keys": [
			{
				"key": "name",
				"index": 90
			}
		]
	},
	{
		"start": 300,
		"end": 309,
		"text": ", you are practically a chameleon – possessing the uncanny ability to make yourself at home within any social group or social setting.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 309,
		"end": 319,
		"text": "You excel at one-on-one interactions, and never fail to make an excellent impression on others. Your charisma and eloquence intrigues people.",
		"keys": []
	},
	{
		"start": 319,
		"end": 329,
		"text": "Ultimately, , you are a realist. You have a clear conscience. Discerning right from wrong has never been a difficult task for you.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 329,
		"end": 336,
		"text": "I’m getting the sense that you’re not too concerned about monetary riches, although you do wish you had more wealth.",
		"keys": []
	},
	{
		"start": 336,
		"end": 344,
		"text": "There is, however, a greater purpose for you in this lifetime, . A purpose that will reveal itself to you very soon.",
		"keys": [
			{
				"key": "name",
				"index": 63
			}
		]
	},
	{
		"start": 344,
		"end": 349,
		"text": "However, , you do tend to do things for the sake of others.",
		"keys": [
			{
				"key": "name",
				"index": 9
			}
		]
	},
	{
		"start": 349,
		"end": 356,
		"text": "Your kind and giving nature can make you dependent on others for your own happiness. And that is something that you need to be careful of.",
		"keys": []
	},
	{
		"start": 356,
		"end": 366,
		"text": "At times, it might feel like you’re living your life for others. That’s not what you want, . You want to live life for yourself. You want to love yourself.",
		"keys": [
			{
				"key": "name",
				"index": 91
			}
		]
	},
	{
		"start": 366,
		"end": 374,
		"text": "When you’re able to do that, success and the life of your dreams will follow. And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 374,
		"end": 377,
		"text": "But there’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 49
			}
		]
	},
	{
		"start": 377,
		"end": 382,
		"text": "It feels to me that you’re a deeply emotional and spiritual person.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 68
			}
		]
	},
	{
		"start": 382,
		"end": 391,
		"text": "You’re connected to your soul in a way that’s far more profound than others. Your thought process does not follow the rules of logic of the world.",
		"keys": []
	},
	{
		"start": 391,
		"end": 402,
		"text": "In fact, I get the sense that you have quite the imagination. Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 155
			}
		]
	},
	{
		"start": 402,
		"end": 410,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 410,
		"end": 418,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 418,
		"end": 434,
		"text": "You’re the first person to step in when you see a fight breaking out. You’re the first person to reach out to the quietest person in the room. You’re the first person to extend help and guidance to the weak and the bullied. People look up to you and rely on you.",
		"keys": []
	},
	{
		"start": 434,
		"end": 438,
		"text": ", you bring understanding to the misunderstood.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 438,
		"end": 445,
		"text": "But every superhero needs a side-kick; a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/member-love-compatibility.png",
					"fadeIn": true
				},
				"index": 108
			}
		]
	},
	{
		"start": 445,
		"end": 458,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with. Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 458,
		"end": 467,
		"text": "., you’re not the kind of person that has trouble when it comes to love. Love interests find themselves drawn to your charisma and kind nature.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 467,
		"end": 476,
		"text": "You’re sort of a rare breed when it comes to love. You communicate better than anyone else, and you’re an incredibly thoughtful individual.",
		"keys": []
	},
	{
		"start": 476,
		"end": 481,
		"text": "The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 481,
		"end": 494,
		"text": "You become very selective with who you choose to date and who you choose to end up with – for good reason, of course. I sense that in the coming years, you will be the happiest you’ve ever been in that regard.",
		"keys": []
	},
	{
		"start": 494,
		"end": 503,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find that happiness that you’re looking for soon enough.\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/member-love-compatibility.png",
					"fadeOut": true
				},
				"index": 138
			}
		]
	},
	{
		"start": 503,
		"end": 514,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not to lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 514,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover heavenly rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 2,
		"end": 4,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 4,
		"end": 14,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Outlaw! But what does this actually mean?\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/outlaw.png",
					"fadeIn": true
				},
				"index": 134
			}
		]
	},
	{
		"start": 14,
		"end": 24,
		"text": "Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.",
		"keys": []
	},
	{
		"start": 24,
		"end": 35,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/outlaw.png",
					"fadeOut": true
				},
				"index": 133
			}
		]
	},
	{
		"start": 35,
		"end": 39,
		"text": "Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 39,
		"end": 48,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 48,
		"end": 57,
		"text": "That’s right, . You can use that information to make astronomical changes in your life.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 57,
		"end": 65,
		"text": "You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": []
	},
	{
		"start": 65,
		"end": 73,
		"text": "But before we get to that, I want to share with you about your archetype, The Outlaw, and what it means.",
		"keys": []
	},
	{
		"start": 73,
		"end": 85,
		"text": ", you truly are a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 85,
		"end": 93,
		"text": "You are a free-minded and free-spirited individual. Nothing stands in your way and nothing controls your desires.",
		"keys": []
	},
	{
		"start": 93,
		"end": 101,
		"text": "You are the true representation of what it really means to be the captain of your own ship. You are different in that way, .",
		"keys": [
			{
				"key": "name",
				"index": 123
			}
		]
	},
	{
		"start": 101,
		"end": 110,
		"text": "While the world walks in one direction, you have no qualms with going against it. That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 116
			}
		]
	},
	{
		"start": 110,
		"end": 121,
		"text": "You’re deeply sensitive when it comes to the social and environmental issues of the world. You’re able to empathize with anyone and everyone.",
		"keys": []
	},
	{
		"start": 121,
		"end": 125,
		"text": "That’s because as an Outlaw, you are highly compassionate.",
		"keys": []
	},
	{
		"start": 125,
		"end": 134,
		"text": "You put the needs of others before your own, and you’re able to connect with strangers just as well as you’re able to connect with your closest loved ones.",
		"keys": []
	},
	{
		"start": 134,
		"end": 143,
		"text": ", you may not know it yet, but you are more morally and ethically upright than others.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 143,
		"end": 150,
		"text": "You hold your values and principles close to your heart, and you’re always ready to stick to your guns.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 104
			}
		]
	},
	{
		"start": 150,
		"end": 160,
		"text": "There is something else about you, … You are the one who will ignite massive change in the world.\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 98
			}
		]
	},
	{
		"start": 160,
		"end": 168,
		"text": ", I’m getting the sense that you’re going to live a long, and happy life.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 168,
		"end": 175,
		"text": "Although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": []
	},
	{
		"start": 175,
		"end": 187,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 187,
		"end": 190,
		"text": "You must challenge yourself with trusting people.",
		"keys": []
	},
	{
		"start": 190,
		"end": 202,
		"text": "Being vulnerable can be an incredibly scary thought for you, but it’s important to take small steps towards the direction, and make a few minor mistakes along the way.",
		"keys": []
	},
	{
		"start": 202,
		"end": 207,
		"text": "This can be applied to both your personal and work relationships.",
		"keys": []
	},
	{
		"start": 207,
		"end": 211,
		"text": ", don’t let that discourage you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 211,
		"end": 218,
		"text": "It never hurts to open up once in a while to a loved one, such as family or close friends.",
		"keys": []
	},
	{
		"start": 218,
		"end": 228,
		"text": "The world can be a vicious place if you’re standing alone; even if that thought doesn’t scare you, it should definitely be something worth pondering about.",
		"keys": []
	},
	{
		"start": 228,
		"end": 233,
		"text": "The world needs people like you to be in positions of power.",
		"keys": []
	},
	{
		"start": 233,
		"end": 236,
		"text": "You are the one who keeps the world grounded.",
		"keys": []
	},
	{
		"start": 236,
		"end": 245,
		"text": "You do, however, need to understand that it’s important for you to combat your cynicism by being more emotionally connected.",
		"keys": []
	},
	{
		"start": 245,
		"end": 251,
		"text": "That way, you’ll be able to build trust and create even more fruitful interactions.",
		"keys": []
	},
	{
		"start": 251,
		"end": 262,
		"text": "After all, , the path to enlightenment and fulfilment lies within your hands.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 262,
		"end": 269,
		"text": ", I can already tell that your friends and family really look up to you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 269,
		"end": 277,
		"text": "You’re always ready to stand up for those in need, even if it means that you will be persecuted for your actions.",
		"keys": []
	},
	{
		"start": 277,
		"end": 287,
		"text": "You’re not the type of person to have huge circles of friends, but you’re not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 287,
		"end": 294,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your intelligence and passionate nature.",
		"keys": []
	},
	{
		"start": 294,
		"end": 304,
		"text": "You are extremely selective with who you choose to let into your life. You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 304,
		"end": 313,
		"text": ", you are incredibly brave and find comfort in chaos.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 313,
		"end": 326,
		"text": "You tend to struggle with being understood, but you know deep down in your heart that your intentions are always centred around the greater good – even if your strategies and mannerisms speak otherwise.",
		"keys": []
	},
	{
		"start": 326,
		"end": 341,
		"text": ", you are a natural-born leader. I sense that you will find success and fulfilment as an entrepreneur, an activist, or a philanthropist.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 341,
		"end": 354,
		"text": "You can be very authoritative, . You tend to want things done your way, on your time, even if your demands are exceedingly difficult to fulfil.",
		"keys": [
			{
				"key": "name",
				"index": 31
			}
		]
	},
	{
		"start": 354,
		"end": 366,
		"text": "Nevertheless, , you are going to make a lasting mark in your lifetime. You’re able to look at the world from a broad and altruistic perspective.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 366,
		"end": 373,
		"text": "You see the big picture, and you have what it takes to make this world a better place.",
		"keys": []
	},
	{
		"start": 373,
		"end": 383,
		"text": ", I sense that you despise systems and everything that comes with it, which is why you’re constantly rebelling against authority.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 383,
		"end": 395,
		"text": "You would do anything and everything you can to promote your own ways and your own beliefs, which becomes clearly evident in your slightly destructive nature.",
		"keys": []
	},
	{
		"start": 395,
		"end": 402,
		"text": "Ultimately, , you are a visionary.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 402,
		"end": 405,
		"text": "You have a clear idea of how you want to be in the world.",
		"keys": []
	},
	{
		"start": 405,
		"end": 410,
		"text": "You do, however, tend to have difficulty discerning right from wrong.",
		"keys": []
	},
	{
		"start": 410,
		"end": 418,
		"text": "I’m getting the sense that you’re not too concerned about monetary riches, although you do wish you had more wealth.",
		"keys": []
	},
	{
		"start": 418,
		"end": 423,
		"text": "There is, however, a greater purpose for you in this lifetime, .",
		"keys": [
			{
				"key": "name",
				"index": 63
			}
		]
	},
	{
		"start": 423,
		"end": 436,
		"text": "However, , that can make you dependent on others for your own happiness. And that is something that you need to be careful of.",
		"keys": [
			{
				"key": "name",
				"index": 9
			}
		]
	},
	{
		"start": 436,
		"end": 445,
		"text": "At times, it might feel as if you’re living your life for others. That’s not what you want, .",
		"keys": [
			{
				"key": "name",
				"index": 92
			}
		]
	},
	{
		"start": 445,
		"end": 450,
		"text": "You want to live life for yourself. You want to love yourself.",
		"keys": []
	},
	{
		"start": 450,
		"end": 455,
		"text": "When you’re able to do that, success and the life of your dreams will follow.",
		"keys": []
	},
	{
		"start": 455,
		"end": 458,
		"text": "And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 458,
		"end": 463,
		"text": "But there’s more to what I’ve learned about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 49
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 51
			}
		]
	},
	{
		"start": 463,
		"end": 469,
		"text": "It feels to me that you’re a deeply emotional and spiritual person.",
		"keys": []
	},
	{
		"start": 469,
		"end": 474,
		"text": "You’re connected to your soul in a way that’s far more profound than others.",
		"keys": []
	},
	{
		"start": 474,
		"end": 478,
		"text": "Your thought process does not follow the rules and logic of the world.",
		"keys": []
	},
	{
		"start": 478,
		"end": 492,
		"text": "In fact, I get the sense that you have quite the imagination. Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 155
			}
		]
	},
	{
		"start": 492,
		"end": 497,
		"text": ", you’re not someone who likes to argue.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 497,
		"end": 504,
		"text": "You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": []
	},
	{
		"start": 504,
		"end": 512,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 512,
		"end": 519,
		"text": "You’re the first person to step in when you see a fight breaking out.",
		"keys": []
	},
	{
		"start": 519,
		"end": 524,
		"text": "You’re the first person to reach for your pockets in the sight of a struggling busker.",
		"keys": []
	},
	{
		"start": 524,
		"end": 529,
		"text": "You’re the first person your friends call when they’ve had a horrible day.",
		"keys": []
	},
	{
		"start": 529,
		"end": 537,
		"text": "You’re the one who people rely on and look up to. , you are the role model for the world.",
		"keys": [
			{
				"key": "name",
				"index": 50
			}
		]
	},
	{
		"start": 537,
		"end": 550,
		"text": "But every superhero needs a side-kick; a partner in crime. One who will stick by them when the going gets tough. And the outlaw is no exception.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/outlaw-love-compatibility.png",
					"fadeIn": true
				},
				"index": 145
			}
		]
	},
	{
		"start": 550,
		"end": 556,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with.",
		"keys": []
	},
	{
		"start": 556,
		"end": 564,
		"text": "Or if you’re already in a committed relationship, there’s a real good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 564,
		"end": 576,
		"text": ", you’re not the kind of person that has trouble when it comes to love. People find themselves drawn to your charisma and kind nature.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 576,
		"end": 585,
		"text": "You’re sort of a rare breed when it comes to love. You communicate better than anyone else, and you’re an incredibly thoughtful individual.",
		"keys": []
	},
	{
		"start": 585,
		"end": 593,
		"text": "The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 593,
		"end": 603,
		"text": "You become very selective with those who you choose to date and who you choose to end up with – for good reason, of course.",
		"keys": []
	},
	{
		"start": 603,
		"end": 611,
		"text": "I sense that in the coming years, you will be the happiest you’ve ever been in that regard.",
		"keys": []
	},
	{
		"start": 611,
		"end": 621,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find that happiness that you’re looking for soon enough.\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/outlaw-love-compatibility.png",
					"fadeOut": true
				},
				"index": 138
			}
		]
	},
	{
		"start": 621,
		"end": 630,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 630,
		"end": 638,
		"text": "Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": []
	},
	{
		"start": 638,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover heavenly rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 1,
		"end": 4,
		"text": "",
		"keys": []
	},
	{
		"start": 4,
		"end": 10,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 10,
		"end": 23,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Ruler!\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/ruler.png",
					"fadeIn": true
				},
				"index": 99
			}
		]
	},
	{
		"start": 23,
		"end": 38,
		"text": "But what does this actually mean? Don’t worry, everything you need to know will be on this page. Stick to the end of it and I promise that you’ll experience something truly magical.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/ruler.png",
					"fadeOut": true
				},
				"index": 182
			}
		]
	},
	{
		"start": 38,
		"end": 48,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being. Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 48,
		"end": 63,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 63,
		"end": 70,
		"text": "That’s right, . You can use that information to make astronomical changes in your life. You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 70,
		"end": 80,
		"text": "But before we get into that, I want to share with you about your archetype, The Ruler, and what it means.",
		"keys": []
	},
	{
		"start": 80,
		"end": 93,
		"text": ", you truly are a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 93,
		"end": 101,
		"text": "You are a natural-born leader, and people constantly look to you for direction and advice. While others tend to avoid playing the role of a leader, you feel absolutely comfortable with volunteering to take charge.",
		"keys": []
	},
	{
		"start": 101,
		"end": 105,
		"text": "You’re different that way, . While the world walks in one direction, you have no qualms with going against it.",
		"keys": [
			{
				"key": "name",
				"index": 27
			}
		]
	},
	{
		"start": 105,
		"end": 118,
		"text": "That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 34
			}
		]
	},
	{
		"start": 118,
		"end": 126,
		"text": "You’re always impartial, fair, and just. You’re able to empathize with anyone and everyone. That’s because as a Ruler, you are highly compassionate, and extremely decisive.",
		"keys": []
	},
	{
		"start": 126,
		"end": 138,
		"text": "However, you are also able to make the most difficult decisions, even at the expense of others for the greater good.",
		"keys": []
	},
	{
		"start": 138,
		"end": 142,
		"text": ", you might not know it yet, but you are more morally and ethically upright than others. You hold your values and principles close to your heart, and you’re always ready to stick to your guns.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 142,
		"end": 145,
		"text": "There is something else about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 37
			}
		]
	},
	{
		"start": 145,
		"end": 151,
		"text": "You will be the one to lead enormous change in the world.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 58
			}
		]
	},
	{
		"start": 151,
		"end": 158,
		"text": ", I’m getting the sense that you’re going to live a long, and happy life.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 158,
		"end": 165,
		"text": "And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": []
	},
	{
		"start": 165,
		"end": 175,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 175,
		"end": 186,
		"text": "You will one day have to face the risk of losing all of your control or power. The sheer thought of becoming a follower rather than a leader scares you to death.",
		"keys": []
	},
	{
		"start": 186,
		"end": 189,
		"text": ", don’t let that discourage you. The world needs your wisdom and guidance. The world needs people like you to be in positions of power.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 189,
		"end": 199,
		"text": "You are what keeps the world grounded.",
		"keys": []
	},
	{
		"start": 199,
		"end": 205,
		"text": "You do, however, need to understand that it’s important for you not to overburden yourself with the issues of others, and always remember not to spread yourself too thinly.",
		"keys": []
	},
	{
		"start": 205,
		"end": 211,
		"text": "After all, , your greatest challenge will be overcoming yourself.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 211,
		"end": 218,
		"text": "But I noticed that you are willing to do everything and anything it takes, and I have complete faith in your abilities.",
		"keys": []
	},
	{
		"start": 218,
		"end": 225,
		"text": ", I can already tell that your friends and family really look up to you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 225,
		"end": 232,
		"text": "You’re the one who they come to for detailed advice, guidance, or solutions to their dilemmas and problems.",
		"keys": []
	},
	{
		"start": 232,
		"end": 242,
		"text": "You’re not the type of person to have huge circles of friends. You’re not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 242,
		"end": 246,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your leadership and knowledge. But you’re extremely selective with who you choose to let into your life.",
		"keys": []
	},
	{
		"start": 246,
		"end": 255,
		"text": "You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 255,
		"end": 264,
		"text": ", you are incredibly nurturing. You possess the unique ability to connect with others and earn their trust.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 264,
		"end": 274,
		"text": "Your thirst for power and control constantly pushes you to new heights, but you must never lose sight of yourself; both as a person, and a leader.",
		"keys": []
	},
	{
		"start": 274,
		"end": 281,
		"text": "You have a great deal to offer to this world. , you are a responsible and reliable individual, and people see those qualities within you.",
		"keys": [
			{
				"key": "name",
				"index": 46
			}
		]
	},
	{
		"start": 281,
		"end": 291,
		"text": "I sense that you will find success and fulfilment as an entrepreneur, a governor, a lawyer, or a manager.",
		"keys": []
	},
	{
		"start": 291,
		"end": 300,
		"text": "You can be very charismatic, . You don’t seem to have any trouble when it comes to establishing the right connections and meeting the right people.",
		"keys": [
			{
				"key": "name",
				"index": 29
			}
		]
	},
	{
		"start": 300,
		"end": 306,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from a broad and altruistic perspective.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 306,
		"end": 314,
		"text": "You see the big picture, and you have what it takes to lead this world to a better future.",
		"keys": []
	},
	{
		"start": 314,
		"end": 321,
		"text": ", you are an excellent mediator when it comes to managing expectations – those from yourself, and from others.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 321,
		"end": 332,
		"text": "You’re always able to maintain order through your unique sense of understanding what people want.",
		"keys": []
	},
	{
		"start": 332,
		"end": 339,
		"text": "Ultimately, , you are a visionary. You dream of an empire that has a throne with your name on it. Discerning right from wrong has never been a difficult task for you.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 339,
		"end": 343,
		"text": "I’m getting the sense that you’re not too concerned about monetary riches, although you do wish you had more wealth.",
		"keys": []
	},
	{
		"start": 343,
		"end": 351,
		"text": "There is, however, a greater purpose for you in this lifetime, .",
		"keys": [
			{
				"key": "name",
				"index": 63
			}
		]
	},
	{
		"start": 351,
		"end": 356,
		"text": "However, , you must remember that your self-worth is not directly related to your ability to rule.",
		"keys": [
			{
				"key": "name",
				"index": 9
			}
		]
	},
	{
		"start": 356,
		"end": 372,
		"text": "It can feel that way at times, and that is something that you need to be careful of.",
		"keys": []
	},
	{
		"start": 372,
		"end": 375,
		"text": "In fact, it might feel as if you’re living your life for others. That’s not what you want, . You want to live life for yourself. You want to love yourself. When you’re able to do that, success and the life of your dreams will follow.",
		"keys": [
			{
				"key": "name",
				"index": 91
			}
		]
	},
	{
		"start": 375,
		"end": 379,
		"text": "And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 379,
		"end": 388,
		"text": "But there’s more to what I’ve learned about you, …\n",
		"keys": [
			{
				"key": "name",
				"index": 49
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 51
			}
		]
	},
	{
		"start": 388,
		"end": 392,
		"text": "It feels to me that you’re a deeply emotional and spiritual person. You’re connected to your soul in a way that’s far more profound than others.",
		"keys": []
	},
	{
		"start": 392,
		"end": 402,
		"text": "Your thought process does not follow the rules and logic of the world.",
		"keys": []
	},
	{
		"start": 402,
		"end": 412,
		"text": "In fact, I get the sense that you have quite the imagination. Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 155
			}
		]
	},
	{
		"start": 412,
		"end": 420,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 420,
		"end": 437,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for righteousness.",
		"keys": []
	},
	{
		"start": 437,
		"end": 441,
		"text": "You’re the first person to step in when you see a fight breaking out. You’re the first person to reach for your pockets in the sight of a struggling busker. You’re the first person your friends call when they’ve had a horrible day. You’re the one who people rely on and look up to.",
		"keys": []
	},
	{
		"start": 441,
		"end": 449,
		"text": ", you are the leader and protector of the world.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 449,
		"end": 454,
		"text": "But every pilot needs a co-pilot; a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/ruler-love-compatibility.png",
					"fadeIn": true
				},
				"index": 103
			}
		]
	},
	{
		"start": 454,
		"end": 460,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to end up with.",
		"keys": []
	},
	{
		"start": 460,
		"end": 469,
		"text": "Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 469,
		"end": 472,
		"text": ", you’re not the kind of person that has trouble when it comes to love. People find themselves drawn to your charisma and kind nature.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 472,
		"end": 482,
		"text": "You’re sort of a rare breed when it comes to love.",
		"keys": []
	},
	{
		"start": 482,
		"end": 495,
		"text": "You communicate better than anyone else, and you’re an incredibly thoughtful individual. The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 495,
		"end": 502,
		"text": "You become very selectively with who you choose to date and who you choose to end up with – for good reason, of course. I sense that in the coming years, you will be the happiest you’ve ever been in that regard.",
		"keys": []
	},
	{
		"start": 502,
		"end": 514,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find that happiness that you’re looking for soon enough.\n",
		"keys": [
			{
				"key": "name",
				"index": 0
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/ruler-love-compatibility.png",
					"fadeOut": true
				},
				"index": 138
			}
		]
	},
	{
		"start": 514,
		"end": null,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life. Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": null,
		"end": null,
		"text": "",
		"keys": []
	}
];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = [
	{
		"start": 4,
		"end": 6,
		"text": "Hello ,",
		"keys": [
			{
				"key": "name",
				"index": 6
			}
		]
	},
	{
		"start": 6,
		"end": 15,
		"text": "If you’ve made it here, then congratulations! Because this means that your archetype is the Sage! But what does this actually mean?\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/sage.png",
					"fadeIn": true
				},
				"index": 132
			}
		]
	},
	{
		"start": 15,
		"end": 20,
		"text": "Don’t worry, everything you need to know will be on this page.",
		"keys": []
	},
	{
		"start": 20,
		"end": 25,
		"text": "Stick to the end of it and I promise that you’ll experience something truly magical.",
		"keys": []
	},
	{
		"start": 25,
		"end": 35,
		"text": "The quiz that you’ve just taken is designed to identify your archetype – a personality profile that’s broken down your entire being.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/archetype-icons/sage.png",
					"fadeOut": true
				},
				"index": 133
			}
		]
	},
	{
		"start": 35,
		"end": 40,
		"text": "Your tendencies, your strengths, your past, and your future.",
		"keys": []
	},
	{
		"start": 40,
		"end": 50,
		"text": "Your archetype takes into account your gender, your marital status, how you answered the quiz, and how long you took to get those answers.",
		"keys": []
	},
	{
		"start": 50,
		"end": 57,
		"text": "That’s right, . You can use that information to make astronomical changes in your life.",
		"keys": [
			{
				"key": "name",
				"index": 14
			}
		]
	},
	{
		"start": 57,
		"end": 64,
		"text": "You’ll be able to leverage on your strengths, improve on your weaknesses, and embark on the life that you’ve always dreamed of.",
		"keys": []
	},
	{
		"start": 64,
		"end": 71,
		"text": "But before we get into that, I want to share with you about your archetype, The Sage, and what it means.",
		"keys": []
	},
	{
		"start": 71,
		"end": 79,
		"text": ", you truly are a unique individual. And I genuinely believe that this world needs more people like you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 79,
		"end": 84,
		"text": "You are a wise soul that’s overflowing with knowledge and wisdom.",
		"keys": []
	},
	{
		"start": 84,
		"end": 91,
		"text": "If you were a vehicle, knowledge and wisdom would be your fuel – it’s what drives you.",
		"keys": []
	},
	{
		"start": 91,
		"end": 93,
		"text": "You’re different that way, .",
		"keys": [
			{
				"key": "name",
				"index": 27
			}
		]
	},
	{
		"start": 93,
		"end": 102,
		"text": "While the world walks in one direction, you have no qualms with going against it. That’s what makes you so special, .",
		"keys": [
			{
				"key": "name",
				"index": 116
			}
		]
	},
	{
		"start": 102,
		"end": 113,
		"text": "You’re deeply intuitive and introspective. Unlike others, your education doesn’t stop after graduating from college or university.",
		"keys": []
	},
	{
		"start": 113,
		"end": 117,
		"text": "You are constantly applying and enriching yourself throughout the course of your life.",
		"keys": []
	},
	{
		"start": 117,
		"end": 123,
		"text": ", you might not know it yet, but you are more morally and ethically upright than others.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 123,
		"end": 129,
		"text": "You hold your values and principles close to your heart, and you’re always ready to stick to your guns.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeIn": true
				},
				"index": 104
			}
		]
	},
	{
		"start": 129,
		"end": 137,
		"text": "There is something else about you, … You form the foundation of the world’s progress and advancement.\n",
		"keys": [
			{
				"key": "name",
				"index": 35
			},
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/globe.png",
					"fadeOut": true
				},
				"index": 102
			}
		]
	},
	{
		"start": 137,
		"end": 141,
		"text": ", I’m getting the sense that you’re going to live a long, and happy life.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 141,
		"end": 147,
		"text": "And although success might not be at your feet right now, your riches and fulfilment are merely waiting for you.",
		"keys": []
	},
	{
		"start": 147,
		"end": 155,
		"text": "But there’s something else, . Even though you will triumph, your path to success will not come easy.",
		"keys": [
			{
				"key": "name",
				"index": 28
			}
		]
	},
	{
		"start": 155,
		"end": 159,
		"text": "You must ultimately defeat and control your hatred for ignorance.",
		"keys": []
	},
	{
		"start": 159,
		"end": 168,
		"text": "It is vital for you to understand that not everyone is capable of learning at your pace, and not everyone shares the same passion as you do for knowledge.",
		"keys": []
	},
	{
		"start": 168,
		"end": 170,
		"text": ", don’t let that discourage you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 170,
		"end": 176,
		"text": "The world needs your wisdom. The world needs people like you to be in positions of power.",
		"keys": []
	},
	{
		"start": 176,
		"end": 179,
		"text": "You keep the world moving forward.",
		"keys": []
	},
	{
		"start": 179,
		"end": 186,
		"text": "You do, however, need to understand that it’s important for you to exercise humility in both your thoughts and actions.",
		"keys": []
	},
	{
		"start": 186,
		"end": 191,
		"text": "That way, you’ll be able to build trust and create even more fruitful interactions.",
		"keys": []
	},
	{
		"start": 191,
		"end": 202,
		"text": "After all, , you tend to struggle when it comes to taking action – and humility will lead you down the road of embracing failure, which will then lead you to the path towards success.",
		"keys": [
			{
				"key": "name",
				"index": 11
			}
		]
	},
	{
		"start": 202,
		"end": 206,
		"text": ", I can already tell that your friends and family really look up to you.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 206,
		"end": 212,
		"text": "You’re the one who they come to for detailed advice, a listening ear, or just for a quick chat.",
		"keys": []
	},
	{
		"start": 212,
		"end": 219,
		"text": "You’re not the type of person to have huge circles of friends. You’re not someone who has trouble with making friends.",
		"keys": []
	},
	{
		"start": 219,
		"end": 225,
		"text": "In fact, you have no trouble at all when it comes to impressing others with your intelligence and wisdom.",
		"keys": []
	},
	{
		"start": 225,
		"end": 229,
		"text": "But you’re extremely selective with who you choose to let into your life.",
		"keys": []
	},
	{
		"start": 229,
		"end": 233,
		"text": "You prefer to keep your loved ones close, and your wolf pack small.",
		"keys": []
	},
	{
		"start": 233,
		"end": 237,
		"text": ", you are incredibly nurturing.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 237,
		"end": 243,
		"text": "You possess the unique ability to connect with others and blend into any social group.",
		"keys": []
	},
	{
		"start": 243,
		"end": 251,
		"text": "You have a great deal to offer to this world. , no one is able to play the role of an advisor and guide as excellently as you.",
		"keys": [
			{
				"key": "name",
				"index": 46
			}
		]
	},
	{
		"start": 251,
		"end": 259,
		"text": "I sense that you will find success and fulfilment as a business advisor, a researcher, a data scientist, or a consultant.",
		"keys": []
	},
	{
		"start": 259,
		"end": 262,
		"text": "You can be very intuitive, .",
		"keys": [
			{
				"key": "name",
				"index": 27
			}
		]
	},
	{
		"start": 262,
		"end": 271,
		"text": "Despite your great capacity for knowledge, you prioritize your intuition over facts, especially when it comes to making important decisions.",
		"keys": []
	},
	{
		"start": 271,
		"end": 273,
		"text": "And that’s what works best for you.",
		"keys": []
	},
	{
		"start": 273,
		"end": 282,
		"text": ", you are going to make a lasting mark in your lifetime. You’re able to look at the world from a broad and altruistic perspective.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 282,
		"end": 289,
		"text": "You see the big picture, and you have what it takes to make this world a richer and more informed place for everyone.",
		"keys": []
	},
	{
		"start": 289,
		"end": 296,
		"text": ", you are practically a bookworm – possessing the uncanny ability to bury yourself with endless readings.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 296,
		"end": 301,
		"text": "You take an interest in a broad number of subjects, and your fulfilment is derived from learning.",
		"keys": []
	},
	{
		"start": 301,
		"end": 309,
		"text": "You excel at one-on-one interactions, and never fail to make an excellent impression on others during such situations.",
		"keys": []
	},
	{
		"start": 309,
		"end": 315,
		"text": "However, it is vital for you to understand that your introverted nature makes you struggle to speak to larger groups of people.",
		"keys": []
	},
	{
		"start": 315,
		"end": 321,
		"text": "Ultimately, , you are a realist. You have a clear conscience.",
		"keys": [
			{
				"key": "name",
				"index": 12
			}
		]
	},
	{
		"start": 321,
		"end": 325,
		"text": "Discerning right from wrong has never been a difficult task for you.",
		"keys": []
	},
	{
		"start": 325,
		"end": 332,
		"text": "I’m getting the sense that you’re not too concerned about monetary riches, although you do wish you had more wealth.",
		"keys": []
	},
	{
		"start": 332,
		"end": 335,
		"text": "There is, however, a greater purpose for you in this lifetime, .",
		"keys": [
			{
				"key": "name",
				"index": 63
			}
		]
	},
	{
		"start": 335,
		"end": 342,
		"text": "However, , your purpose and direction in life might feel empty at times. And that is something that you need to be careful of.",
		"keys": [
			{
				"key": "name",
				"index": 9
			}
		]
	},
	{
		"start": 342,
		"end": 351,
		"text": "You might feel as if you’re living your life for the sake of learning, and you continue doing what you do because it’s the only thing you know how to do.",
		"keys": []
	},
	{
		"start": 351,
		"end": 358,
		"text": "That’s not what you want, . You want to live life for yourself. You want to love yourself.",
		"keys": [
			{
				"key": "name",
				"index": 26
			}
		]
	},
	{
		"start": 358,
		"end": 363,
		"text": "When you’re able to do that, success and the life of your dreams will follow.",
		"keys": []
	},
	{
		"start": 363,
		"end": 366,
		"text": "And that’s what Individuation aims to teach you.",
		"keys": []
	},
	{
		"start": 366,
		"end": 370,
		"text": "But there’s more to what I’ve learned about you, …",
		"keys": [
			{
				"key": "name",
				"index": 49
			}
		]
	},
	{
		"start": 370,
		"end": 379,
		"text": "It feels to me that you’re a deeply emotional and spiritual person. You’re connected to your soul in a way that’s far more profound than others.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeIn": true
				},
				"index": 145
			}
		]
	},
	{
		"start": 379,
		"end": 387,
		"text": "Your thought process does not follow the rules and logic of the world. In fact, I get\nthe sense that you have quite the imagination.",
		"keys": []
	},
	{
		"start": 387,
		"end": 393,
		"text": "Your thoughts and dreams are vivid, colourful, and symbolic of who you are as an individual.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/script-images/spiritual.png",
					"fadeOut": true
				},
				"index": 93
			}
		]
	},
	{
		"start": 393,
		"end": 403,
		"text": ", you’re not someone who likes to argue. You tend to avoid conflict and you’re uncanny when it comes to devising win-win situations.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 403,
		"end": 411,
		"text": "But when backed into a corner, you’re not one to back down. You fight fiercely for your loved ones and for your righteousness.",
		"keys": []
	},
	{
		"start": 411,
		"end": 415,
		"text": "You’re the first person to step in when you see a fight breaking out.",
		"keys": []
	},
	{
		"start": 415,
		"end": 420,
		"text": "You’re the first person to reach for your pockets in the sight of a struggling busker.",
		"keys": []
	},
	{
		"start": 420,
		"end": 424,
		"text": "You’re the first person your friends call when they’ve had a horrible day.",
		"keys": []
	},
	{
		"start": 424,
		"end": 427,
		"text": "You’re the one who people rely on and look up to.",
		"keys": []
	},
	{
		"start": 427,
		"end": 430,
		"text": ", you are the guardian of the world.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 430,
		"end": 437,
		"text": "But every superhero needs a side-kick; a partner in crime who will stick by them when the going gets tough.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/sage-love-compatibility.png",
					"fadeIn": true
				},
				"index": 108
			}
		]
	},
	{
		"start": 437,
		"end": 443,
		"text": "This little chart I’ve prepared represents the archetypes that you’re most likely to\nend up with.",
		"keys": []
	},
	{
		"start": 443,
		"end": 449,
		"text": "Or if you’re already in a committed relationship, there’s a really good chance that your spouse is one of those archetypes.",
		"keys": []
	},
	{
		"start": 449,
		"end": 454,
		"text": ", you’re not the kind of person that has trouble when it comes to love.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 454,
		"end": 458,
		"text": "People find themselves drawn to your charisma and kind nature.",
		"keys": []
	},
	{
		"start": 458,
		"end": 466,
		"text": "You’re sort of a rare breed when it comes to love. You communicate better than anyone else, and you’re an incredibly thoughtful individual.",
		"keys": []
	},
	{
		"start": 466,
		"end": 471,
		"text": "The relationships that you forge with potential lovers are always profound and deep.",
		"keys": []
	},
	{
		"start": 471,
		"end": 478,
		"text": "You become very selective with who you choose to date and who you choose to end up with – for good reason, of course.",
		"keys": []
	},
	{
		"start": 478,
		"end": 483,
		"text": "I sense that in the coming years, you will be the happiest you’ve ever been in that regard.\n",
		"keys": [
			{
				"js": {
					"fn": "displayImage",
					"path": "images/love-compatibility/sage-love-compatibility.png",
					"fadeOut": true
				},
				"index": 92
			}
		]
	},
	{
		"start": 483,
		"end": 491,
		"text": ", I’m sensing that your love life isn’t going to be the smoothest – but you will find that happiness that you’re looking for soon enough.",
		"keys": [
			{
				"key": "name",
				"index": 0
			}
		]
	},
	{
		"start": 491,
		"end": 498,
		"text": "But don’t forget, , how you perceive yourself should not be determined by your love life.",
		"keys": [
			{
				"key": "name",
				"index": 18
			}
		]
	},
	{
		"start": 498,
		"end": 503,
		"text": "Your spouse or partner is meant to play a supporting role in your life; not the lead.",
		"keys": []
	},
	{
		"start": 503,
		"end": null,
		"text": "Focus on your own personal growth, and I promise you, , you will soon discover heavenly rewards.",
		"keys": [
			{
				"key": "name",
				"index": 54
			}
		]
	}
];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/logos/large-text.png";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  advocate: { title: 'The Advocate' },
  caregiver: { title: 'The Caregiver' },
  creator: { title: 'The Creator' },
  explorer: { title: 'The Explorer' },
  hero: { title: 'The Hero' },
  innocent: { title: 'The Innocent' },
  jester: { title: 'The Jester' },
  lover: { title: 'The Lover' },
  magician: { title: 'The Magician' },
  member: { title: 'The Member' },
  outlaw: { title: 'The Outlaw' },
  ruler: { title: 'The Ruler' },
  sage: { title: 'The Sage' },
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/caregiver.mp3";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/creator.mp3";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/deluxe-archetype-sales.mp3";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/explorer.mp3";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/hero.mp3";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/innocent.mp3";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/jester.mp3";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/lover.mp3";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/magician.mp3";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/member.mp3";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/outlaw.mp3";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/ruler.mp3";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/sage.mp3";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/caregiver.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/creator.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/explorer.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/hero.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/innocent.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/jester.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/lover.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/magician.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/member.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/outlaw.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/ruler.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetype-icons/sage.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/caregiver.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/creator.jpg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/explorer.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/hero.jpg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/innocent.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/jester.jpg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/lover.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/magician.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/member.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/outlaw.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/ruler.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/covers/sage.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/backgrounds/quiz-slider-1.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/backgrounds/quiz-slider-2.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/backgrounds/quiz-slider-3.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/backgrounds/quiz-slider-4.jpg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/preview-page-3a.jpg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/preview-page-4a.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/pop-up/new-deluxe-archetype-report-with-bonuses.png";

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__quiz__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_intro__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__report_intro__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__slider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comments__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__comments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__header__["a"]; });









/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperscript_h__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperscript_h___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_hyperscript_h__);



window.addEventListener('error', e => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__WEBPACK_IMPORTED_MODULE_1_preact_hyperscript_h___default.a.pre(e.error.stack), document.body));


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"app":"_3L8enmCb5b03T_KXhYcHJs","header":"KTzQ8AWOFWoWmu_iTi-7N","component":"_1IGvSTONPeSzXlEg1v7gYc","quiz":"_3IR1HGgBeodUcIOeNVadlY"};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/*!
    localForage -- Offline Storage, Improved
    Version 1.5.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.localforage = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && typeof obj === 'object' && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

exports.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

exports.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

exports.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

exports.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {}
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support (#5572)
        // since Safari 10.1 shipped with fetch, we can use that to detect it
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage && localStorage.setItem;
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs;
var dbContexts;
var toString = Object.prototype.toString;

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, 'readwrite');
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve) {
        deferredOperation.resolve = resolve;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + ' can\'t be downgraded from version ' + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Initialize a singleton container for all running localForages.
    if (!dbContexts) {
        dbContexts = {};
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = {
            // Running localForages sharing a database.
            forages: [],
            // Shared database.
            db: null,
            // Database readiness (promise).
            dbReady: null,
            // Deferred operations on the database.
            deferredOperations: []
        };
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);
            var req = store.get(key);

            req.onsuccess = function () {
                var value = req.result;
                if (value === undefined) {
                    value = null;
                }
                if (_isEncodedBlob(value)) {
                    value = _decodeBlob(value);
                }
                resolve(value);
            };

            req.onerror = function () {
                reject(req.error);
            };
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);

            var req = store.openCursor();
            var iterationNumber = 1;

            req.onsuccess = function () {
                var cursor = req.result;

                if (cursor) {
                    var value = cursor.value;
                    if (_isEncodedBlob(value)) {
                        value = _decodeBlob(value);
                    }
                    var result = iterator(value, cursor.key, iterationNumber++);

                    if (result !== void 0) {
                        resolve(result);
                    } else {
                        cursor["continue"]();
                    }
                } else {
                    resolve();
                }
            };

            req.onerror = function () {
                reject(req.error);
            };
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');
            var store = transaction.objectStore(dbInfo.storeName);
            var req = store.put(value, key);

            // The reason we don't _save_ null is because IE 10 does
            // not support saving the `null` type in IndexedDB. How
            // ironic, given the bug below!
            // See: https://github.com/mozilla/localForage/issues/161
            if (value === null) {
                value = undefined;
            }

            transaction.oncomplete = function () {
                // Cast to undefined so the value passed to
                // callback/promise is the same as what one would get out
                // of `getItem()` later. This leads to some weirdness
                // (setItem('foo', undefined) will return `null`), but
                // it's not my fault localStorage is our baseline and that
                // it's weird.
                if (value === undefined) {
                    value = null;
                }

                resolve(value);
            };
            transaction.onabort = transaction.onerror = function () {
                var err = req.error ? req.error : req.transaction.error;
                reject(err);
            };
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');
            var store = transaction.objectStore(dbInfo.storeName);

            // We use a Grunt task to make this safe for IE and some
            // versions of Android (including those used by Cordova).
            // Normally IE won't like `.delete()` and will insist on
            // using `['delete']()`, but we have a build step that
            // fixes this for us now.
            var req = store["delete"](key);
            transaction.oncomplete = function () {
                resolve();
            };

            transaction.onerror = function () {
                reject(req.error);
            };

            // The request will be also be aborted if we've exceeded our storage
            // space.
            transaction.onabort = function () {
                var err = req.error ? req.error : req.transaction.error;
                reject(err);
            };
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');
            var store = transaction.objectStore(dbInfo.storeName);
            var req = store.clear();

            transaction.oncomplete = function () {
                resolve();
            };

            transaction.onabort = transaction.onerror = function () {
                var err = req.error ? req.error : req.transaction.error;
                reject(err);
            };
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);
            var req = store.count();

            req.onsuccess = function () {
                resolve(req.result);
            };

            req.onerror = function () {
                reject(req.error);
            };
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);

            var advanced = false;
            var req = store.openCursor();
            req.onsuccess = function () {
                var cursor = req.result;
                if (!cursor) {
                    // this means there weren't enough keys
                    resolve(null);

                    return;
                }

                if (n === 0) {
                    // We have the first key, return it if that's what they
                    // wanted.
                    resolve(cursor.key);
                } else {
                    if (!advanced) {
                        // Otherwise, ask the cursor to skip ahead n
                        // records.
                        advanced = true;
                        cursor.advance(n);
                    } else {
                        // When we get here, we've got the nth key.
                        resolve(cursor.key);
                    }
                }
            };

            req.onerror = function () {
                reject(req.error);
            };
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);

            var req = store.openCursor();
            var keys = [];

            req.onsuccess = function () {
                var cursor = req.result;

                if (!cursor) {
                    resolve(keys);
                    return;
                }

                keys.push(cursor.key);
                cursor["continue"]();
            };

            req.onerror = function () {
                reject(req.error);
            };
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys
};

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' (id INTEGER PRIMARY KEY, key unique, value)', [], function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        });
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function getItem$1(key, callback) {
    var self = this;

    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {

                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        t.executeSql('INSERT OR REPLACE INTO ' + dbInfo.storeName + ' (key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {

                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                t.executeSql('SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;

                    resolve(result);
                }, function (t, error) {

                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                t.executeSql('SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {

                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1
};

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = dbInfo.name + '/';

    if (dbInfo.storeName !== self._defaultConfig.storeName) {
        dbInfo.keyPrefix += dbInfo.storeName + '/';
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            if (localStorage.key(i).indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(localStorage.key(i).substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    // Default API, from Gaia/localStorage.
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2
};

// Custom drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var CustomDrivers = {};

var DriverType = {
    INDEXEDDB: 'asyncStorage',
    LOCALSTORAGE: 'localStorageWrapper',
    WEBSQL: 'webSQLStorage'
};

var DefaultDriverOrder = [DriverType.INDEXEDDB, DriverType.WEBSQL, DriverType.LOCALSTORAGE];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'];

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

var driverSupport = {};
// Check to see if IndexedDB is available and if it is the latest
// implementation; it's our preferred backend library. We use "_spec_test"
// as the name of the database because it's not the one we'll operate on,
// but it's useful to make sure its using the right spec.
// See: https://github.com/mozilla/localForage/issues/128
driverSupport[DriverType.INDEXEDDB] = isIndexedDBValid();

driverSupport[DriverType.WEBSQL] = isWebSQLValid();

driverSupport[DriverType.LOCALSTORAGE] = isLocalStorageValid();

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var key in arg) {
                if (arg.hasOwnProperty(key)) {
                    if (isArray(arg[key])) {
                        arguments[0][key] = arg[key].slice();
                    } else {
                        arguments[0][key] = arg[key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

function isLibraryDriver(driverName) {
    for (var driver in DriverType) {
        if (DriverType.hasOwnProperty(driver) && DriverType[driver] === driverName) {
            return true;
        }
    }

    return false;
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        this.INDEXEDDB = DriverType.INDEXEDDB;
        this.LOCALSTORAGE = DriverType.LOCALSTORAGE;
        this.WEBSQL = DriverType.WEBSQL;

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');
                var namingError = new Error('Custom driver name already in use: ' + driverObject._driver);

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }
                if (isLibraryDriver(driverObject._driver)) {
                    reject(namingError);
                    return;
                }

                var customDriverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0; i < customDriverMethods.length; i++) {
                    var customDriverMethod = customDriverMethods[i];
                    if (!customDriverMethod || !driverObject[customDriverMethod] || typeof driverObject[customDriverMethod] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var supportPromise = Promise$1.resolve(true);
                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        supportPromise = driverObject._support();
                    } else {
                        supportPromise = Promise$1.resolve(!!driverObject._support);
                    }
                }

                supportPromise.then(function (supportResult) {
                    driverSupport[driverName] = supportResult;
                    CustomDrivers[driverName] = driverObject;
                    resolve();
                }, reject);
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var self = this;
        var getDriverPromise = Promise$1.resolve().then(function () {
            if (isLibraryDriver(driverName)) {
                switch (driverName) {
                    case self.INDEXEDDB:
                        return asyncStorage;
                    case self.LOCALSTORAGE:
                        return localStorageWrapper;
                    case self.WEBSQL:
                        return webSQLStorage;
                }
            } else if (CustomDrivers[driverName]) {
                return CustomDrivers[driverName];
            } else {
                throw new Error('Driver not found.');
            }
        });
        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!driverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0; i < LibraryMethods.length; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.parseSRT = factory());
}(this, (function () { 'use strict';

/**
 * @name parseSRT
 * @desc Parses and converts SRT subtitle data into JSON format. Adapted from the popcorn.js SRT parser plugin.
 * @see http://popcornjs.org/
 * @author Luis Rodrigues (http://www.luisrodriguesweb.com)
 * @version 1.0.0-alpha
 * @license MIT
 */

function toSeconds(time) {
  var t = time.split(':');

  try {
    var s = t[2].split(',');

    if (s.length === 1) {
      s = t[2].split('.');
    }

    return parseFloat(t[0], 10) * 3600 + parseFloat(t[1], 10) * 60 + parseFloat(s[0], 10) + parseFloat(s[1], 10) / 1000;
  } catch (e) {
    return 0;
  }
}

function nextNonEmptyLine(linesArray, position) {
  var idx = position;

  while (!linesArray[idx]) {
    idx++;
  }

  return idx;
}

function lastNonEmptyLine(linesArray) {
  var idx = linesArray.length - 1;

  while (idx >= 0 && !linesArray[idx]) {
    idx--;
  }

  return idx;
}

function parseSRT() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var subs = [];
  var lines = data.split(/(?:\r\n|\r|\n)/gm);
  var endIdx = lastNonEmptyLine(lines) + 1;
  var idx = 0;
  var time = void 0;
  var text = void 0;
  var sub = void 0;

  for (var i = 0; i < endIdx; i++) {
    sub = {};
    text = [];

    i = nextNonEmptyLine(lines, i);
    sub.id = parseInt(lines[i++], 10);

    time = lines[i++].split(/[\t ]*-->[\t ]*/);

    sub.start = toSeconds(time[0]);

    idx = time[1].indexOf(' ');
    if (idx !== -1) {
      time[1] = time[1].substr(0, idx);
    }
    sub.end = toSeconds(time[1]);

    while (i < endIdx && lines[i]) {
      text.push(lines[i++]);
    }

    sub.text = text.join('\\N').replace(/\{(\\[\w]+\(?([\w\d]+,?)+\)?)+\}/gi, '');

    sub.text = sub.text.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    sub.text = sub.text.replace(/&lt;(\/?(font|b|u|i|s))((\s+(\w|\w[\w\-]*\w)(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)(\/?)&gt;/gi, '<$1$3$7>');
    sub.text = sub.text.replace(/\\N/gi, '<br />');

    subs.push(sub);
  }

  return subs;
}

return parseSRT;

})));
//# sourceMappingURL=parse-srt.js.map


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(114);
var util = __webpack_require__(215);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(117);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var ph = __webpack_require__(79)

var h = ph.createElement

Object.assign(h, ph)

module.exports = h


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * Expose hyphenate
 */

module.exports = hyphenate

/**
 * Constants
 */

var upperCasePattern = /([A-Z])/g

/**
 * hyphenate
 */

function hyphenate (str) {
  return str.replace(upperCasePattern, dashLower)
}

function dashLower (c) {
  return '-' + c.toLowerCase()
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var isValidString = function isValidString(param) {
  return typeof param === 'string' && param.length > 0;
};

var startsWith = function startsWith(string, start) {
  return string[0] === start;
};

var isSelector = function isSelector(param) {
  return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'));
};

var node = function node(h) {
  return function (tagName) {
    return function (first) {
      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (isSelector(first)) {
        return h.apply(undefined, [tagName + first].concat(rest));
      } else if (typeof first === 'undefined') {
        return h(tagName);
      } else {
        return h.apply(undefined, [tagName, first].concat(rest));
      }
    };
  };
};

var TAG_NAMES = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'];

exports['default'] = function (h) {
  var createTag = node(h);
  var exported = { TAG_NAMES: TAG_NAMES, isSelector: isSelector, createTag: createTag };
  TAG_NAMES.forEach(function (n) {
    exported[n] = createTag(n);
  });
  return exported;
};

module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


var parseSelector = __webpack_require__(78)

module.exports = parse

function parse (args) {
  var children = []
  var attrs = {}
  var node

  for (var i = args.length - 1; i >= 0; i--) {
    var arg = args[i]

    if (i === 0) {
      node = arg
    } else if (Array.isArray(arg)) {
      children = arg
    } else if (isObj(arg)) {
      attrs = arg
    } else {
      children = [arg]
    }
  }

  // is it a default tag or a custom element like a react class or a
  // functional component?
  if (isString(node)) {
    var selector = parseSelector(node)
    selector.id && (attrs.id = selector.id)

    if (selector.classes !== '') {
      if (attrs.class) {
        attrs.class = (attrs.class) + " " + (selector.classes)
      } else {
        attrs.class = selector.classes
      }
    }

    return { node: selector.tag, attrs: attrs, children: children }
  } else {
    return { node: node, attrs: attrs, children: children }
  }
}

function isString (val) { return typeof val === 'string' }
function isObj (val) { return typeof val === 'object' }


/***/ }),
/* 78 */
/***/ (function(module, exports) {


module.exports = parseSelector

var re = /([\.#]?[^\s#.]+)/

function parseSelector (selector) {
  var matches = selector.split(re)
  var classes = ''
  var id = null
  var tag = null

  // we know it's only a tag -> ['', TAG, ''].length === 3
  if (matches.length === 3) return { tag: selector, classes: classes }

  matches.forEach(function (match, i) {
    var s = match.substring(1, match.length)
    if (!match) return

    if (match[0] === '.') {
      classes += s + ' '
    } else if (match[0] === '#') {
      id = s
    } else {
      tag = match
    }
  })

  return { classes: classes.trim(), id: id, tag: tag }
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


var createHelpers = __webpack_require__(76)
var toInlineStyle = __webpack_require__(80)
var parse = __webpack_require__(77)
var classNames = __webpack_require__(75)
var ref = __webpack_require__(81);
var h = ref.h;

exports.createComponent = createComponent
exports.createElement = createElement

var helpers = createHelpers(createElement)

Object.keys(helpers).forEach(function (name) {
  module.exports[name] = helpers[name]
})

function createElement () {
  var ref = parse(arguments);
  var node = ref.node;
  var attrs = ref.attrs;
  var children = ref.children;

  for (var key in attrs) {
    attrs[key] = decorate(attrs[key], key)
  }

  return h(node, attrs, children)
}

function decorate (val, name) {
  switch (name) {
    case 'class':
      return classNames(val)
    case 'style':
      return typeof val !== 'string'
        ? toInlineStyle(val)
        : val
    default:
      return val
  }
}

function createComponent (Component) {
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return createElement.apply(void 0, [ Component ].concat( args ));
  }
}


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


var hyphenate = __webpack_require__(74)

module.exports = toInlineStyle

function toInlineStyle (styles) {
  var str = ''

  for (var key in styles) {
    var val = styles[key]

    if (val !== null && val !== undefined) {
      str += format(hyphenate(key), val)
    }
  }

  return str
}

function format (key, value) {
  return key + ':' + value + ';'
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

!function() {
    'use strict';
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
            if (child === !0 || child === !1) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        if (node.parentNode) node.parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ; else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode) vnode = '';
        if ('string' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;
        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {
            out = createNode(String(vnode.nodeName), isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                flushMounts();
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function() {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if (true) module.exports = preact; else self.preact = preact;
}();
//# sourceMappingURL=preact.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse_srt__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse_srt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse_srt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_markup__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_markup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_markup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_linkstate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_url__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_localforage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handle_errors__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionicons_dist_css_ionicons_css__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionicons_dist_css_ionicons_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ionicons_dist_css_ionicons_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_animate_css__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_animate_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__font_nunito_light_css__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__font_nunito_light_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__font_nunito_light_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_styl__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__app_styl__);














const h = __WEBPACK_IMPORTED_MODULE_6_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_12__app_styl___default.a);

const url = __WEBPACK_IMPORTED_MODULE_4_url___default.a.parse(location + '', true);

class App extends __WEBPACK_IMPORTED_MODULE_0_preact__["Component"] {
  componentWillMount() {
    if ('new' in url.query) {
      __WEBPACK_IMPORTED_MODULE_5_localforage___default.a.removeItem('state');
    } else {
      this.setState({
        quizData: this.props.quizData,
        formData: this.props.formData,
      });
    }
  }
  render() {

    if ('dev' in url.query) {
      if ('slider' in url.query) {
        return h.div('.slider', [h(__WEBPACK_IMPORTED_MODULE_11__components__["a" /* slider */], {
          formData: { name: url.query.name || 'test name' },
          quizData: { archetype: url.query.archetype || 'magician' },
        })]);
      }
    }

    const header = h.div('.header', [__WEBPACK_IMPORTED_MODULE_11__components__["b" /* header */]]);
    const form = h.div('.form', [h(__WEBPACK_IMPORTED_MODULE_11__components__["c" /* form */], {
      onSubmit: formData => {
        this.setState({ formData });
        __WEBPACK_IMPORTED_MODULE_5_localforage___default.a.setItem('state', this.state);
      }
    })]);
    const quiz = h.div('.quiz', [h(__WEBPACK_IMPORTED_MODULE_11__components__["d" /* quiz */], {
      onFinish: quizData => {
        this.setState({ quizData });
        __WEBPACK_IMPORTED_MODULE_5_localforage___default.a.setItem('state', this.state);
      }
    })]);
    const reportIntro = h.div('.reportIntro', [h(__WEBPACK_IMPORTED_MODULE_11__components__["e" /* reportIntro */], { form, archetype: this.state && this.state.quizData && this.state.quizData.archetype })]);
    const slider = h.div('.slider', [h(__WEBPACK_IMPORTED_MODULE_11__components__["a" /* slider */], this.state)]);

    if (!this.state.quizData) {
      return h.div('.app', [quiz, __WEBPACK_IMPORTED_MODULE_11__components__["f" /* comments */]]);
    } else {
      if (!this.state.formData) {
        return h.div('.app', [reportIntro, __WEBPACK_IMPORTED_MODULE_11__components__["f" /* comments */]]);
      } else {
        return h.div('.app', [slider]);
      }
    }
  }
}

const target = document.getElementById('whats-your-archetype_app') || document.body;
__WEBPACK_IMPORTED_MODULE_5_localforage___default.a.config({ version: 1, });
__WEBPACK_IMPORTED_MODULE_5_localforage___default.a.getItem('state').then(data =>
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(h(App, data), target));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./audios/caregiver": 4,
	"./audios/caregiver.json": 4,
	"./audios/caregiver.mp3": 20,
	"./audios/caregiver.txt": 118,
	"./audios/creator": 5,
	"./audios/creator.json": 5,
	"./audios/creator.mp3": 21,
	"./audios/creator.txt": 119,
	"./audios/deluxe-archetype-sales": 6,
	"./audios/deluxe-archetype-sales.json": 6,
	"./audios/deluxe-archetype-sales.mp3": 22,
	"./audios/deluxe-archetype-sales.txt": 120,
	"./audios/explorer": 7,
	"./audios/explorer.json": 7,
	"./audios/explorer.mp3": 23,
	"./audios/explorer.txt": 121,
	"./audios/hero": 8,
	"./audios/hero.json": 8,
	"./audios/hero.mp3": 24,
	"./audios/hero.txt": 122,
	"./audios/innocent": 9,
	"./audios/innocent.json": 9,
	"./audios/innocent.mp3": 25,
	"./audios/innocent.txt": 123,
	"./audios/jester": 10,
	"./audios/jester.json": 10,
	"./audios/jester.mp3": 26,
	"./audios/jester.txt": 124,
	"./audios/lover": 11,
	"./audios/lover.json": 11,
	"./audios/lover.mp3": 27,
	"./audios/lover.txt": 125,
	"./audios/magician": 12,
	"./audios/magician.json": 12,
	"./audios/magician.mp3": 28,
	"./audios/magician.txt": 126,
	"./audios/member": 13,
	"./audios/member.json": 13,
	"./audios/member.mp3": 29,
	"./audios/member.txt": 127,
	"./audios/outlaw": 14,
	"./audios/outlaw.json": 14,
	"./audios/outlaw.mp3": 30,
	"./audios/outlaw.txt": 128,
	"./audios/ruler": 15,
	"./audios/ruler.json": 15,
	"./audios/ruler.mp3": 31,
	"./audios/ruler.txt": 129,
	"./audios/sage": 16,
	"./audios/sage.json": 16,
	"./audios/sage.mp3": 32,
	"./audios/sage.txt": 130,
	"./images/archetype-icons/caregiver.png": 33,
	"./images/archetype-icons/creator.png": 34,
	"./images/archetype-icons/explorer.png": 35,
	"./images/archetype-icons/hero.png": 36,
	"./images/archetype-icons/innocent.png": 37,
	"./images/archetype-icons/jester.png": 38,
	"./images/archetype-icons/lover.png": 39,
	"./images/archetype-icons/magician.png": 40,
	"./images/archetype-icons/member.png": 41,
	"./images/archetype-icons/outlaw.png": 42,
	"./images/archetype-icons/ruler.png": 43,
	"./images/archetype-icons/sage.png": 44,
	"./images/archetypes/banners/advocate.png": 131,
	"./images/archetypes/banners/caregiver.png": 132,
	"./images/archetypes/banners/creator.png": 133,
	"./images/archetypes/banners/explorer.png": 134,
	"./images/archetypes/banners/hero.png": 135,
	"./images/archetypes/banners/innocent.png": 136,
	"./images/archetypes/banners/jester.png": 137,
	"./images/archetypes/banners/lover.png": 138,
	"./images/archetypes/banners/magician.png": 139,
	"./images/archetypes/banners/member.png": 140,
	"./images/archetypes/banners/outlaw.png": 141,
	"./images/archetypes/banners/ruller.png": 142,
	"./images/archetypes/banners/sage.png": 143,
	"./images/archetypes/covers/caregiver.jpg": 45,
	"./images/archetypes/covers/creator.jpg": 46,
	"./images/archetypes/covers/explorer.jpg": 47,
	"./images/archetypes/covers/hero.jpg": 48,
	"./images/archetypes/covers/innocent.jpg": 49,
	"./images/archetypes/covers/jester.jpg": 50,
	"./images/archetypes/covers/lover.jpg": 51,
	"./images/archetypes/covers/magician.jpg": 52,
	"./images/archetypes/covers/member.jpg": 53,
	"./images/archetypes/covers/outlaw.jpg": 54,
	"./images/archetypes/covers/ruler.jpg": 55,
	"./images/archetypes/covers/sage.jpg": 56,
	"./images/archetypes/icons/advocate.png": 144,
	"./images/archetypes/icons/all.png": 145,
	"./images/archetypes/icons/caregiver.png": 146,
	"./images/archetypes/icons/creator.png": 147,
	"./images/archetypes/icons/explorer.png": 148,
	"./images/archetypes/icons/hero.png": 149,
	"./images/archetypes/icons/innocent.png": 150,
	"./images/archetypes/icons/jester.png": 151,
	"./images/archetypes/icons/lover.png": 152,
	"./images/archetypes/icons/magician.png": 153,
	"./images/archetypes/icons/member.png": 154,
	"./images/archetypes/icons/outlaw.png": 155,
	"./images/archetypes/icons/ruler.png": 156,
	"./images/archetypes/icons/sage.png": 157,
	"./images/archetypes/icons/warrior.png": 158,
	"./images/backgrounds/quiz-slider-1.jpg": 57,
	"./images/backgrounds/quiz-slider-2.jpg": 58,
	"./images/backgrounds/quiz-slider-3.jpg": 59,
	"./images/backgrounds/quiz-slider-4.jpg": 60,
	"./images/backgrounds/space.jpg": 159,
	"./images/individualogist-logo2.png": 160,
	"./images/logos/large-logo.png": 161,
	"./images/logos/large-text.png": 17,
	"./images/logos/magnifier.png": 162,
	"./images/love-compatibility/caregiver-love-compatibility.png": 163,
	"./images/love-compatibility/creator-love-compatibility.png": 164,
	"./images/love-compatibility/explorer-love-compatibility.png": 165,
	"./images/love-compatibility/hero-love-compatibility.png": 166,
	"./images/love-compatibility/innocent-love-compatibility.png": 167,
	"./images/love-compatibility/jester-love-compatibility.png": 168,
	"./images/love-compatibility/lover-love-compatibility.png": 169,
	"./images/love-compatibility/magician-love-compatibility.png": 170,
	"./images/love-compatibility/member-love-compatibility.png": 171,
	"./images/love-compatibility/outlaw-love-compatibility.png": 172,
	"./images/love-compatibility/ruler-love-compatibility.png": 173,
	"./images/love-compatibility/sage-love-compatibility.png": 174,
	"./images/misc/38663-O1PN5F-min.png": 175,
	"./images/misc/aleksandr-kozlovskii-2924-min.jpg": 176,
	"./images/misc/bulb_PNG1251.png": 177,
	"./images/misc/caregiver-love-compatibility-min.png": 178,
	"./images/misc/creator-love-compatibility-min.png": 179,
	"./images/misc/dar-2-min.png": 180,
	"./images/misc/deluxe-archetype-report-with-bonuses-2-exit-min.png": 181,
	"./images/misc/diminishing-shadow-with-bonuses-2-min.png": 182,
	"./images/misc/diminishing-shadow-with-bonuses-exit.png": 183,
	"./images/misc/explorer-love-compatibility-min.png": 184,
	"./images/misc/flow.png": 185,
	"./images/misc/hero-love-compatibility-min.png": 186,
	"./images/misc/innocent-love-compatibility-min.png": 187,
	"./images/misc/jester-love-compatibility-min.png": 188,
	"./images/misc/key-2114459_1920.png": 189,
	"./images/misc/love-compatibility-min.png": 190,
	"./images/misc/lover-love-compatibility-min.png": 191,
	"./images/misc/magician-love-compatibility-min.png": 192,
	"./images/misc/member-love-compatibility-min.png": 193,
	"./images/misc/new-deluxe-archetype-report-with-bonuses.png": 194,
	"./images/misc/outlaw-love-compatibility-min.png": 195,
	"./images/misc/preview-page-3a.jpg": 61,
	"./images/misc/preview-page-4a.jpg": 62,
	"./images/misc/ruler-love-compatibility-min.png": 196,
	"./images/misc/safe-shield-protection.png": 197,
	"./images/misc/sage-love-compatibility-min.png": 198,
	"./images/misc/test-raisonnement.png": 199,
	"./images/misc/tree.png": 200,
	"./images/pop-up/60-day-money-back-guarantee.png": 201,
	"./images/pop-up/Instructions for Popup.docx": 202,
	"./images/pop-up/dar-priceless.png": 203,
	"./images/pop-up/new-deluxe-archetype-report-with-bonuses.png": 63,
	"./images/pop-up/shield-ok-icon-150x150.png": 204,
	"./images/pop-up/template for popup1.pdf": 205,
	"./images/pop-up/~$structions for Popup.docx": 206,
	"./images/script-images/globe.png": 207,
	"./images/script-images/spiritual.png": 208,
	"./images/script-images/tree.png": 209,
	"./images/script/globe.png": 210,
	"./images/script/spiritual.png": 211,
	"./images/script/tree.png": 212,
	"./pdfs/outlaw.pdf": 213
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 83;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./caregiver.json": 4,
	"./creator.json": 5,
	"./deluxe-archetype-sales.json": 6,
	"./explorer.json": 7,
	"./hero.json": 8,
	"./innocent.json": 9,
	"./jester.json": 10,
	"./lover.json": 11,
	"./magician.json": 12,
	"./member.json": 13,
	"./outlaw.json": 14,
	"./ruler.json": 15,
	"./sage.json": 16
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 84;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./caregiver.mp3": 20,
	"./creator.mp3": 21,
	"./deluxe-archetype-sales.mp3": 22,
	"./explorer.mp3": 23,
	"./hero.mp3": 24,
	"./innocent.mp3": 25,
	"./jester.mp3": 26,
	"./lover.mp3": 27,
	"./magician.mp3": 28,
	"./member.mp3": 29,
	"./outlaw.mp3": 30,
	"./ruler.mp3": 31,
	"./sage.mp3": 32
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 85;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./caregiver.png": 33,
	"./creator.png": 34,
	"./explorer.png": 35,
	"./hero.png": 36,
	"./innocent.png": 37,
	"./jester.png": 38,
	"./lover.png": 39,
	"./magician.png": 40,
	"./member.png": 41,
	"./outlaw.png": 42,
	"./ruler.png": 43,
	"./sage.png": 44
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 86;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./caregiver.jpg": 45,
	"./creator.jpg": 46,
	"./explorer.jpg": 47,
	"./hero.jpg": 48,
	"./innocent.jpg": 49,
	"./jester.jpg": 50,
	"./lover.jpg": 51,
	"./magician.jpg": 52,
	"./member.jpg": 53,
	"./outlaw.jpg": 54,
	"./ruler.jpg": 55,
	"./sage.jpg": 56
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 87;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./quiz-slider-1.jpg": 57,
	"./quiz-slider-2.jpg": 58,
	"./quiz-slider-3.jpg": 59,
	"./quiz-slider-4.jpg": 60
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 88;

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_comment_logo_png__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_comment_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_comment_logo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_styl__);




const h = __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_2__style_styl___default.a);

/* harmony default export */ __webpack_exports__["a"] = (h.div('.outer', [h.div('.container', [
  h.img({ src: __WEBPACK_IMPORTED_MODULE_1__assets_comment_logo_png___default.a }),
  h.div('.heading', 'What archetype did you get? Let us know in the comments below!'),
  // // rendered statically outside of ths app, as it doesn't play well with dynamic DOM changes
  // h.div({
  //   ref: ref => this.ref = ref,
  //   'data-href': 'http://individualogist.com/whats-your-archetype/',
  //   'data-width': '100%',
  //   'data-numposts': 5,
  // }),
])]));


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_styl__);




const h = __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_2__style_styl___default.a);

/* harmony default export */ __webpack_exports__["a"] = (class extends __WEBPACK_IMPORTED_MODULE_0_preact__["Component"] {

  componentWillMount() {
    this.setState({
      src1: this.props.src,
      currIndex: 1,
    });
  }

  componentDidMount() {
    this.ref1.onload = () => this.setState({ class1: ['visible'] });
    this.ref2.onload = () => this.setState({ class2: ['visible'] });
  }


  componentWillReceiveProps() {
    const oldSrc = this.state['src' + this.state.currIndex];
    const newSrc = this.props.src;
    const same = newSrc === oldSrc
    console.log(`${newSrc} ${same?'==':'!='} ${oldSrc}`);
    if (!same) {
      const newState = this.state;
      const oldIndex = this.state.currIndex;
      const newIndex = oldIndex === 1 ? 2 : 1;
      newState.currIndex = newIndex;
      newState['src' + newIndex] = newSrc;
      this.setState(newState);
      this.ref1.onload = () => this.setState({ class1: ['visible'], class2: [] });
      this.ref2.onload = () => this.setState({ class2: ['visible'], class1: [] });
    } else {

    }
  }

  // shouldComponentUpdate() {
  //   return !this.state['src' + this.state.currIndex] || (this.props.src !== this.state['src' + this.state.currIndex])
  // }

  render() {
    return h.div('.container', [
      h.img('.img1', { ref: ref => this.ref1 = ref, src: this.state.src1, class: this.state.class1 }),
      h.img('.img2', { ref: ref => this.ref2 = ref, src: this.state.src2, class: this.state.class2 }),
      // h.pre(JSON.stringify(this.state, null, 2)),
    ]);
  }
});


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_linkstate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_styl__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_styl__);





const h = __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_3__style_styl___default.a);

class Form extends __WEBPACK_IMPORTED_MODULE_0_preact__["Component"] {
  render() {
    return h.div('.container', [
      h.form({
        onSubmit: e => {
          e.preventDefault();
          this.props.onSubmit(this.state);
        }
      }, [
        h.input({
          type: 'name',
          placeholder: 'Name',
          onchange: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_linkstate__["a" /* default */])(this, 'name'),
          required: true,
        }),
        h.input({
          type: 'email',
          placeholder: 'Email',
          onchange: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_linkstate__["a" /* default */])(this, 'email'),
          required: true,
        }),
        h.button('Start My Free Reading!'),
      ])
    ]);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_logos_large_text_png__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_logos_large_text_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_images_logos_large_text_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_styl__);




const h = __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_2__style_styl___default.a);

/* harmony default export */ __webpack_exports__["a"] = (h.header([
  h.img({ src: __WEBPACK_IMPORTED_MODULE_1__assets_images_logos_large_text_png___default.a }),
  h.p('.heading', 'FREE PERSONALITY READING'),
  h.p('.subtitle', 'What’s Your Archetype?'),
  h.p('.subtext', 'Individuation Archetype Explorer®'),
]));


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_archetypes__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_questions__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_styl__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_styl__);






const h = __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_4__style_styl___default.a);

class Quiz extends __WEBPACK_IMPORTED_MODULE_0_preact__["Component"] {

  componentWillMount() {
    this.setState({ archetypes: __WEBPACK_IMPORTED_MODULE_2__data_archetypes__["a" /* default */], questions: __WEBPACK_IMPORTED_MODULE_3__data_questions__["a" /* default */] });
    this.refs = { li: [] };
  }

  calcCqi() {
    for (let i = 0; i < this.state.questions.length; i++) {
      if (!this.state.questions[i].answer) {
        return i;
      }
    }
  }

  render() {
    const cqi = 'cqi' in this.state ? this.state.cqi : this.calcCqi();

    return h.div('.wrapper', [h.div('.container', [
      // h.pre('.debug', { style: 'position:fixed!important;bottom:0!important;right:0!important' }, JSON.stringify(this.state.questions.map(q => q.answer), null, 2))

      h.h1([
        h.span('.color', 'Unravel The Mysteries '),
        h.span('of Your '),
        h.span('.color', 'True Self '),
        h.span('By Taking This 60-Second Quiz'),
      ]),

      // h.div('.intro.animated.slideInDown', [
      //   h.p('.ion-ios-timer-outline', 'Takes less than 60 seconds'),
      //   h.p('.ion-ios-color-wand-outline', 'Only 6 questions'),
      //   h.p('.ion-ios-heart-outline', 'Honesty leads to accuracy'),
      // ]),

      h.div('.form', [
        h.input('.progress-bar', {
          type: 'range',
          max: this.state.questions.length - 1,
          step: 1,
          value: cqi,
          onchange: e => {
            const cqi = parseInt(e.target.value);
            for (let i = cqi; i < this.state.questions.length; i++) {
              delete this.state.questions[i].answer;
              delete this.state.questions[i].ai;
            }
            this.setState({ questions: this.state.questions, cqi });
          },
          ref: ref => this.refs.progressBar = ref,
        }),
        h.ol({
          style: {
            height: this.refs.li[cqi] ? this.refs.li[cqi].offsetHeight : '12.5em',
          }
        }, this.state.questions.map((q, qi) =>
          h.li({
            class: { visible: cqi === qi },
            ref: ref => this.refs.li[qi] = ref,
          }, [
            h.label('.question', { for: `q[${qi}]` }, [h.span('.order', [`${qi+1}/${this.state.questions.length}`]), h.span('.question', [q.question])]),
            h.div('.answers', {}, q.answers.map((a, ai) => h.label('.answer', { for: `q[${qi}][${ai}]` }, [h.input({
              // class: { checked: this.state.questions[qi].ai === ai },
              checked: this.state.questions[qi].ai === ai,
              type: 'checkbox',
              id: `q[${qi}][${ai}]`,
              name: `q[${qi}]`,
              // value: Object.keys(a.points).map(t => `${t}=${a.points[t]}`).join(';'),
              onclick: e => {
                if (cqi !== qi) {
                  return;
                }
                if (!this.state.scrolled) {
                  this.refs.progressBar.scrollIntoView({ behavior: 'smooth' });
                  this.setState({ scrolled: true });
                }
                this.state.questions[qi].answer = a;
                this.state.questions[qi].ai = ai;
                this.setState({ qi, ai, questions: this.state.questions });
                this.setState({ cqi: this.calcCqi() });
                if (typeof this.state.cqi === 'undefined') {
                  for (const question of this.state.questions) {
                    for (const archetype in question.answer.points) {
                      const points = question.answer.points[archetype];
                      this.state.archetypes[archetype].points = (this.state.archetypes[archetype].points || 0) + points;
                    }
                  }
                  const sortedArchetypes = Object.keys(this.state.archetypes).sort((a, b) => (this.state.archetypes[b].points || 0) - (this.state.archetypes[a].points || 0));
                  this.setState({
                    sortedArchetypes,
                    archetype: sortedArchetypes[0],
                    archetypes: this.state.archetypes,
                  });
                  setTimeout(() => this.props.onFinish(this.state), 333);
                  console.log(this.state);
                }
              }
            }), a.answer])))
          ])))
      ]),
    ])]);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Quiz;



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_archetypes__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_markdown__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_markdown__);





const h = __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_2__style_styl___default.a);

/* harmony default export */ __webpack_exports__["a"] = (props =>  h.div('.wrapper', [ h.div('.container', [
  h.div('.heading', [
    h.label('Your archetype is: '),
    h.span(__WEBPACK_IMPORTED_MODULE_1__data_archetypes__["a" /* default */][props.archetype].title),
  ]),
  h.img('.archetype', { src: __webpack_require__(86)(`./${props.archetype}.png`) }),
  h.p('.intro', [__WEBPACK_IMPORTED_MODULE_3_preact_markdown___default()(`Dear **${props.archetype}**, we have so much to tell you about who you are, what you're great at, what you're not so great at... But we can't fit everything into a single page. So, we've put everything into a **FREE** archetype reading! We're not expecting anything in return, but it would tickle us pink if you'd be kind enough to share this quiz with your friends and family! If not, just scroll on down to gain instant access to your **FREE** archetype reading!`)]),
  h.div('.box', [
    h.p([__WEBPACK_IMPORTED_MODULE_3_preact_markdown___default()(`Everything You Need To Know About **${__WEBPACK_IMPORTED_MODULE_1__data_archetypes__["a" /* default */][props.archetype].title}**... in One Free Archetype Reading`)]),
    h.p([__WEBPACK_IMPORTED_MODULE_3_preact_markdown___default()(`We've prepared a FREE detailed archetype reading telling you about your love, health, and wealth, just for you!`)]),
    h.ul([
      h.li(`Discover your life journey as a Lover and how you can leverage on your strengths to achieve greatness!`),
      h.li(`Gain valuable insight into your special skills and innate abilities!`),
      h.li(`Find out how you can use the Lover archetype to overcome anything that life throws at you!`),
    ]),
  ]),
  h.div('.preview', [
    h.div([h.img({ src: __webpack_require__(61) })]),
    h.div([h.img({ src: __webpack_require__(87)(`./${props.archetype}.jpg`) })]),
    h.div([h.img({ src: __webpack_require__(62) })]),
  ]),
  h.div('.form-conainer', [
    h.p([__WEBPACK_IMPORTED_MODULE_3_preact_markdown___default()(`Instantly Access Your Free Personalized Archetype Reading On **${__WEBPACK_IMPORTED_MODULE_1__data_archetypes__["a" /* default */][props.archetype].title}** Archetype!`)]),
    h.p([__WEBPACK_IMPORTED_MODULE_3_preact_markdown___default()(`We'll send a downloadable version of your archetype reading straight to your e-mail (FREE)`)]),
    props.form,
  ]),
])]));


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_linkstate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_markup__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_markup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_markup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fade_image__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_styl__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_styl__);







const h = __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_5__style_styl___default.a);

class Slider extends __WEBPACK_IMPORTED_MODULE_0_preact__["Component"] {
  componentWillMount() {
    this.changeBackground();
    document.body.onkeyup = e => e.keyCode === 32 && this.playPause();
  }
  componentWillUnmount() {
    delete document.body.onkeyup;
  }

  componentDidMount() {
    this.audioEl.play()
  }

  cueAction(action, opts, transcriptLine) {
    this[action](opts, transcriptLine);
  }

  displayImage(opts, transcriptLine) {
    try {
      this.setState({ img: __webpack_require__(83)("./" + opts.path) });
    } catch (error) {
      this.setState({ img: '' });
      console.error(error);
    }
  }

  playPause() {
    if (this.audioEl.paused) {
      this.audioEl.play();
      this.setState({
        audioPaused: false,
        lastBackgroundChangeTime: +new Date(),
      });
    } else {
      this.audioEl.pause();
      this.setState({
        audioPaused: true,
        lastBackgroundChangeTime: +new Date(),
      });
    }
  }

  changeBackground() {
    if (!this.state.lastBackgroundChangeTime || (this.state.lastBackgroundChangeTime + 4000 < new Date())) {
      const cbg = this.state.currentBackgroundIndex || 0;
      const nbg = cbg >= 4 ? 1 : cbg + 1;
      this.setState({
        background: __webpack_require__(88)(`./quiz-slider-${nbg}.jpg`),
        currentBackgroundIndex: nbg,
        lastBackgroundChangeTime: +new Date(),
      });
    }
  }

  componentWillUpdate() {
    this.changeBackground();
  }

  render() {
    const archetype = this.props.quizData.archetype;
    if (!archetype) {
      return 'Need to have an archetype before this component could be rendered';
    }

    let audio;
    try {
      audio = __webpack_require__(85)(`./${archetype}.mp3`);
    } catch (error) {
      return `Cannot load the audio file: '${archetype}.mp3'`;
    }

    let transcript;
    try {
      transcript = __webpack_require__(84)(`./${archetype}.json`);
    } catch (error) {
      return `Cannot load the transcript file: '${archetype}.json'`;
    }

    // console.log(this.state.currentLine);

    return h.div('.wrapper', [h.div('.container', [
      h.header([
        h.img({ src: __webpack_require__(17) }),
      ]),
      h.div('.content', { onclick: e => this.playPause() }, [
        h.div('.play-pause', { class: this.state.audioPaused ? 'visible' : '' }),
        h.div('.text', [this.state.currentLine
          ? h(__WEBPACK_IMPORTED_MODULE_3_preact_markup___default.a, { markup: this.state.currentLine })
          // ? h.pre(JSON.stringify(this.state.currentLine, null, 2))
          : h.p('Loading...'),
        ]),
        h.div('.image', [
          h.div('.background', [h(__WEBPACK_IMPORTED_MODULE_4__fade_image__["a" /* default */], { src: this.state.background })]),
          // h.div('.background', [h.img({ src: this.state.background })]),
          h.div('.foreground', [this.state.img && h(__WEBPACK_IMPORTED_MODULE_4__fade_image__["a" /* default */], { src: this.state.img })]),
          // h.div('.foreground', [this.state.img && h.img({ src: this.state.img })]),
        ]),
        h.audio({
          // controls: true,
          src: audio,
          ref: ref => this.audioEl = ref,
          ontimeupdate: e => {
            const currentTime = e.target.currentTime;
            for (const line of transcript) {
              if (currentTime < line.end) {
                let currentLine = line.text;
                if (this.state.currentLine === currentLine) {

                } else {
                  for (const key of line.keys) {
                    if (key.key) {
                      if (this.props.formData[key.key]) {
                        currentLine = currentLine.substring(0, key.index)
                          + this.props.formData[key.key]
                          + currentLine.substring(key.index);
                      }
                    } else if (key.js) {
                      this.cueAction(key.js.fn, key.js, line);
                    }
                  }
                  // this.changeBackground();
                  this.setState({ currentTime, currentLine })
                }
                break;
              }
            }
          },
        }),
      ]),
      h.div('.rest', [
        h.div('.action-1', [
          h.div('.img', [h.img({ src: __webpack_require__(63) }),]),
          h.div([
            h.p(`Get Your Deluxe Archetype Report For Only $37.00 Now!`),
            h.button('Click Here To Order Now'),
          ]),
        ]),
      ]),
      // h.pre([JSON.stringify(this.state, null, 1)]),
    ])]);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  question: `Let's start things off with an easy one. What's your gender?`,
  answers: [
    { answer: `I'm a man` },
    { answer: `I'm a woman` },
  ],
}, {
  question: `Wonderful! I'd like to find out a little bit more about your background. What's your marital status?`,
  answers: [
    { answer: `I'm single` },
    { answer: `I'm married/in a committed relationship` },
    { answer: `I'm divorced/separated` },
    { answer: `I'm widowed` },
  ],
}, {
  question: `1. Let's get cracking! When it comes to teamwork, you are the one who:`,
  answers: [
    { answer: `Leads the team`, points: { ruler: 2, hero: 1 } },
    { answer: `Helps others with their tasks`, points: { caregiver: 2, lover: 1 } },
    { answer: `Comes up with the most innovative ideas`, points: { creator: 2, magician: 1 } },
    { answer: `Helps the team stay united`, points: { member: 2, sage: 1 } },
    { answer: `Does what the team tells you to do`, points: { outlaw: 2, innocent: 1 } },
    { answer: `Jokes around all the time`, points: { jester: 2, explorer: 1 } },
  ],
}, {
  question: `2. What about your ambitions? Which of the following seems like a job you could do?`,
  answers: [
    { answer: `Inventor`, points: { magician: 2, creator: 1 } },
    { answer: `Counsellor`, points: { innocent: 2, caregiver: 1 } },
    { answer: `Police Officer`, points: { hero: 2, ruler: 1 } },
    { answer: `Veterinarian`, points: { outlaw: 2, innocent: 1 } },
    { answer: `Lecturer`, points: { sage: 2, member: 1 } },
    { answer: `Copywriter`, points: { explorer: 2, jester: 1 } },
  ],
}, {
  question: `3. Let's talk about something fun! When you read a book or watch a film, you want it to be:`,
  answers: [
    { answer: `Original and creative`, points: { creator: 2, magician: 1 } },
    { answer: `Funny and lighthearted`, points: { jester: 2, explorer: 1 } },
    { answer: `Action-packed and exciting`, points: { ruler: 2, hero: 1 } },
    { answer: `Romantic and alluring`, points: { caregiver: 2, lover: 1 } },
    { answer: `Inspiring and profound`, points: { member: 2, sage: 1 } },
    { answer: `Free-spirited and simple`, points: { outlaw: 2, innocent: 1 } },
  ],
}, {
  question: `4. How do you think your friends would describe you?`,
  answers: [
    { answer: `Thoughtful and caring`, points: { lover: 2, caregiver: 1 } },
    { answer: `Imaginative and resourceful`, points: { magician: 2, creator: 1 } },
    { answer: `Bold and unpredictable`, points: { hero: 2, ruler: 1 } },
    { answer: `Restless and easily bored`, points: { jester: 2, explorer: 1 } },
    { answer: `Wise and easy to talk to`, points: { sage: 2, member: 1 } },
    { answer: `Stubborn and strong-willed`, points: { outlaw: 2, innocent: 1 } },
    { answer: `Original and creative`, points: { creator: 2, magician: 1 } },
  ],
}, {
  question: `5. We're almost done! If you were on vacation, you would most likely be:`,
  answers: [
    { answer: `Relaxing by the beach and sipping martinis`, points: { jester: 2, innocent: 1 } },
    { answer: `Skydiving for the first time`, points: { explorer: 2, sage: 1 } },
    { answer: `Checking out the city's museums and architecture`, points: { magician: 2, sage: 1 } },
    { answer: `Talking to strangers and experiencing the place's culture firsthand`, points: { member: 2, creator: 1 } },
    { answer: `Making sure your travelling companions are safe and having fun`, points: { caregiver: 2, lover: 1 } },
    { answer: `Wishing that you were back home already`, points: { outlaw: 2, ruler: 1 } },
  ],
}, {
  question: `6. Last one! You prefer to spend time with...`,
  answers: [
    { answer: `Your significant other`, points: { lover: 2, caregiver: 1 } },
    { answer: `New people you've just met`, points: { explorer: 2, member: 1 } },
    { answer: `Your friends`, points: { innocent: 2, creator: 1 } },
    { answer: `Your family`, points: { hero: 2, ruler: 1 } },
    { answer: `Yourself`, points: { hero: 2, ruler: 1 } },
    { answer: `Your colleagues`, points: { jester: 2, sage: 1 } },
  ],
}]);


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Expose hyphenate
 */

module.exports = hyphenate

/**
 * Constants
 */

var upperCasePattern = /([A-Z])/g

/**
 * hyphenate
 */

function hyphenate (str) {
  return str.replace(upperCasePattern, dashLower)
}

function dashLower (c) {
  return '-' + c.toLowerCase()
}


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"outer":"hf_EvfoZ7YYO76WmPM-ua","container":"_2ifGFKluNAPLNHxdZkCQp7","img":"pD7Gm54l_IrLmIO6cMz4s","heading":"_1_7-We5qBmCmykcNvA15Vx"};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_1yRK6-8okbpN8vGUJJ8_9A","img":"_2o9Njiqi9YOYKuV17RlmEr","visible":"_2_iXMIQA2c29ZKuaNTMo5A","pre":"DXa1BqO9mR7Zfa2DyNtW"};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"form":"_2AXxRnWCRtAw632XNufCv","input":"_2JI9BAwTFEDHWcCgGxCYIL","button":"_245m2ScnvKekP_F3m7GgxE"};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"_3jaB-6x0Hu-kos38oQ2Ni0","img":"_2BbGTgWf_o807LCWMNB6Ci","p":"_1SERCw-8ioKR8mRE95aFKH","heading":"_1hulBTA4bbBQCB167jpdru","subtitle":"sp-KGqO8nQFGGBT26ZAGd","subtext":"mkSnVvk-loivkd5im0Ewf"};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"progress-bar":"_25sk9YU801rQi8UCnipsea","wrapper":"h_ZUZeCihL-glnobet7OC","h1":"_2T5WuqK4Z52EYDGBexSuKN","color":"LL4leYSTxNZazoWJ4exZ1","container":"_1Y0eDVcj0rJumpAjyCOX33","intro":"_9y8ZMTMNh9ig4kaWU1uYB","p":"WdsJkOld8n67YlN1YgpNF","form":"fqo_GZ7q1RhBKY0jshNwV","li":"xUQ-qOM75FMq_wanv9Ai_","question":"_2XAmsnBBxWzNHuH4ZTDL_Q","answer":"KuoAIuKjcgyI9S-4wKC-t","input":"_2ufkinwKNCiOFuWMjPaFXs","ol":"_2TBghB61ksBv2ytMP_Bnau","visible":"_20uATEHsx57deYUma7vfi2","ul":"_3EQUx76TIupkNoJZ2W3Qwf","order":"_1mSy2_T6gFVevOeqUjVxv6"};

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"_2jtIufVcwZit4wIOfsZwNF","container":"_2nN2_cOQPBnjvlnslCNaTf","heading":"xkjr17umd4La6q0vErytG","img":"wOaV_sSmMhvx8DRvO1hF1","archetype":"_2X0id_VT--tcnhHMdB2G0T","intro":"_2HcfW050UwR23Z427BnACE","p":"_3Mr92o02YF71So6E7mzgjC","strong":"_2FhkOxbT9rBMC_dQqjK0iR","box":"_2LT6Ys4g9UEUu8NHdWm6qK","ul":"_1HscPKTfnPBJGs-0FVFAjm","preview":"_3EpyE3WCpxgZIl1TbusUva","form-conainer":"_2IeV6yd_K9iRBr6dYl4A3L"};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_3Px6dx9-zPN0mVyAWdfus8","header":"_3AsdjDAzseL8MpNpgqxfJ5","img":"_2WfjZiwX10o_jZIGY66QEB","content":"_2AQ3z-c_7GKyFo91Qu8a68","text":"_3bvpaB6sogxVy9hNl0uuO0","image":"I7v3B96_oRBiowFWZbzLK","background":"_3stlj5C5FZFSUR3C8Ri5Le","foreground":"p7wf8JTHFR0PKnq1U6Nx_","play-pause":"_1xVFq0wTP8wIKKR-dO66ol","visible":"_3C_edxZrhsPRcsMatetTrD","action-1":"_38V6kpLV_A7VPVOETQlLJn","div":"_19_E0eQWN_WDXLCR09lXHq","p":"Ajw5UWhGeMWqEW14Fpioi","button":"_2xiM1gds09Ux4WG-jz9uPr","pre":"PKx6FTUCz1YO_nHnLo-83"};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var isValidString = function isValidString(param) {
  return typeof param === 'string' && param.length > 0;
};

var startsWith = function startsWith(string, start) {
  return string[0] === start;
};

var isSelector = function isSelector(param) {
  return isValidString(param) && (startsWith(param, '.') || startsWith(param, '#'));
};

var node = function node(h) {
  return function (tagName) {
    return function (first) {
      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (isSelector(first)) {
        return h.apply(undefined, [tagName + first].concat(rest));
      } else if (typeof first === 'undefined') {
        return h(tagName);
      } else {
        return h.apply(undefined, [tagName, first].concat(rest));
      }
    };
  };
};

var TAG_NAMES = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'];

exports['default'] = function (h) {
  var createTag = node(h);
  var exported = { TAG_NAMES: TAG_NAMES, isSelector: isSelector, createTag: createTag };
  TAG_NAMES.forEach(function (n) {
    exported[n] = createTag(n);
  });
  return exported;
};

module.exports = exports['default'];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
	// explicitly match decimal, hex, and named HTML entities 
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {


var parseSelector = __webpack_require__(109)

module.exports = parse

function parse (args) {
  var children = []
  var attrs = {}
  var node

  for (var i = args.length - 1; i >= 0; i--) {
    var arg = args[i]

    if (i === 0) {
      node = arg
    } else if (Array.isArray(arg)) {
      children = arg
    } else if (isObj(arg)) {
      attrs = arg
    } else {
      children = [arg]
    }
  }

  // is it a default tag or a custom element like a react class or a
  // functional component?
  if (isString(node)) {
    var selector = parseSelector(node)
    selector.id && (attrs.id = selector.id)

    if (selector.classes !== '') {
      if (attrs.class) {
        attrs.class = (attrs.class) + " " + (selector.classes)
      } else {
        attrs.class = selector.classes
      }
    }

    return { node: selector.tag, attrs: attrs, children: children }
  } else {
    return { node: node, attrs: attrs, children: children }
  }
}

function isString (val) { return typeof val === 'string' }
function isObj (val) { return typeof val === 'object' }


/***/ }),
/* 109 */
/***/ (function(module, exports) {


module.exports = parseSelector

var re = /([\.#]?[^\s#.]+)/

function parseSelector (selector) {
  var matches = selector.split(re)
  var classes = ''
  var id = null
  var tag = null

  // we know it's only a tag -> ['', TAG, ''].length === 3
  if (matches.length === 3) return { tag: selector, classes: classes }

  matches.forEach(function (match, i) {
    var s = match.substring(1, match.length)
    if (!match) return

    if (match[0] === '.') {
      classes += s + ' '
    } else if (match[0] === '#') {
      id = s
    } else {
      tag = match
    }
  })

  return { classes: classes.trim(), id: id, tag: tag }
}


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var ph = __webpack_require__(111)

var h = ph.createElement

Object.assign(h, ph)

module.exports = h


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {


var createHelpers = __webpack_require__(106)
var toInlineStyle = __webpack_require__(112)
var parse = __webpack_require__(108)
var classNames = __webpack_require__(98)
var ref = __webpack_require__(0);
var h = ref.h;

exports.createComponent = createComponent
exports.createElement = createElement

var helpers = createHelpers(createElement)

Object.keys(helpers).forEach(function (name) {
  module.exports[name] = helpers[name]
})

function createElement () {
  var ref = parse(arguments);
  var node = ref.node;
  var attrs = ref.attrs;
  var children = ref.children;

  for (var key in attrs) {
    attrs[key] = decorate(attrs[key], key)
  }

  return h(node, attrs, children)
}

function decorate (val, name) {
  switch (name) {
    case 'class':
      return classNames(val)
    case 'style':
      return typeof val !== 'string'
        ? toInlineStyle(val)
        : val
    default:
      return val
  }
}

function createComponent (Component) {
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return createElement.apply(void 0, [ Component ].concat( args ));
  }
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


var hyphenate = __webpack_require__(97)

module.exports = toInlineStyle

function toInlineStyle (styles) {
  var str = ''

  for (var key in styles) {
    var val = styles[key]

    if (val !== null && val !== undefined) {
      str += format(hyphenate(key), val)
    }
  }

  return str
}

function format (key, value) {
  return key + ':' + value + ';'
}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var h = __webpack_require__(0).h
var Markup = __webpack_require__(3)
var marked = __webpack_require__(107)

module.exports = Markdown

function Markdown(props, opts) {
  opts = opts || {}
  if (typeof props === 'string') {
    var markupOpts = opts.markupOpts || {}
    var markdownOpts = opts.markdownOpts || {}
    return h(Markup, Object.assign({
      markup: marked(props, markdownOpts),
      trim: false,
      type: 'html',
    }, opts.markupOpts))
  } else if (props && props.markdown) {
    var markupOpts = props.markupOpts || opts.markupOpts || {}
    var markdownOpts = props.markdownOpts || opts.markdownOpts || {}
    return h(Markup, Object.assign({
      markup: marked(props.markdown, markdownOpts),
      trim: false,
      type: 'html',
    }, markupOpts))
  } else {
    throw new Error('Invalid arguments. Markdown requires either a `<String>` or object: `{markdown: <String>}`')
  }
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(216)(module), __webpack_require__(18)))

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(115);
exports.encode = exports.stringify = __webpack_require__(116);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/caregiver.txt";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/creator.txt";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/deluxe-archetype-sales.txt";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/explorer.txt";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/hero.txt";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/innocent.txt";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/jester.txt";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/lover.txt";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/magician.txt";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/member.txt";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/outlaw.txt";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/ruler.txt";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/audios/sage.txt";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/advocate.png";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/caregiver.png";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/creator.png";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/explorer.png";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/hero.png";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/innocent.png";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/jester.png";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/lover.png";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/magician.png";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/member.png";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/outlaw.png";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/ruller.png";

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/banners/sage.png";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/advocate.png";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/all.png";

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/caregiver.png";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/creator.png";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/explorer.png";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/hero.png";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/innocent.png";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/jester.png";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/lover.png";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/magician.png";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/member.png";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/outlaw.png";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/ruler.png";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/sage.png";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/archetypes/icons/warrior.png";

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/backgrounds/space.jpg";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/individualogist-logo2.png";

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/logos/large-logo.png";

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/logos/magnifier.png";

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/caregiver-love-compatibility.png";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/creator-love-compatibility.png";

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/explorer-love-compatibility.png";

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/hero-love-compatibility.png";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/innocent-love-compatibility.png";

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/jester-love-compatibility.png";

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/lover-love-compatibility.png";

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/magician-love-compatibility.png";

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/member-love-compatibility.png";

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/outlaw-love-compatibility.png";

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/ruler-love-compatibility.png";

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/love-compatibility/sage-love-compatibility.png";

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/38663-O1PN5F-min.png";

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/aleksandr-kozlovskii-2924-min.jpg";

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/bulb_PNG1251.png";

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/caregiver-love-compatibility-min.png";

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/creator-love-compatibility-min.png";

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/dar-2-min.png";

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/deluxe-archetype-report-with-bonuses-2-exit-min.png";

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/diminishing-shadow-with-bonuses-2-min.png";

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/diminishing-shadow-with-bonuses-exit.png";

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/explorer-love-compatibility-min.png";

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/flow.png";

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/hero-love-compatibility-min.png";

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/innocent-love-compatibility-min.png";

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/jester-love-compatibility-min.png";

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/key-2114459_1920.png";

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/love-compatibility-min.png";

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/lover-love-compatibility-min.png";

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/magician-love-compatibility-min.png";

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/member-love-compatibility-min.png";

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/new-deluxe-archetype-report-with-bonuses.png";

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/outlaw-love-compatibility-min.png";

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/ruler-love-compatibility-min.png";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/safe-shield-protection.png";

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/sage-love-compatibility-min.png";

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/test-raisonnement.png";

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/misc/tree.png";

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/pop-up/60-day-money-back-guarantee.png";

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/pop-up/Instructions for Popup.docx";

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/pop-up/dar-priceless.png";

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/pop-up/shield-ok-icon-150x150.png";

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/pop-up/template for popup1.pdf";

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,DFdpbmRvd3MgVXNlcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADABXAGkAbgBkAG8AdwBzACAAVQBzAGUAcgAAAAAAAAAAAAAAAAAAAL3DSdgAGACQICwLQGwBAACQMQtAbAEAAOJ6AAAAAAAAcOQNQGwBAAAAAAAAAAAAALrDStgAGQCMAAAAAAAAAAAAAAAA"

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/script-images/globe.png";

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/script-images/spiritual.png";

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/script-images/tree.png";

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/script/globe.png";

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/script/spiritual.png";

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/images/script/tree.png";

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/pdfs/outlaw.pdf";

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/components/comments/assets/comment-logo.png";

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
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
/******/ 	__webpack_require__.p = "/wp-content/themes/individualogist/templates/whats-your-archetype/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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

var H = __webpack_require__(11)

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__quiz__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comments__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__comments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__header__["a"]; });






/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperscript_h__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperscript_h___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_hyperscript_h__);



window.addEventListener('error', e => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__WEBPACK_IMPORTED_MODULE_1_preact_hyperscript_h___default.a.pre(e.error.stack), document.body));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"app":"_3L8enmCb5b03T_KXhYcHJs","header":"KTzQ8AWOFWoWmu_iTi-7N","component":"_1IGvSTONPeSzXlEg1v7gYc"};

/***/ }),
/* 8 */
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

/* unused harmony default export */ var _unused_webpack_default_export = (linkState);
//# sourceMappingURL=linkstate.es.js.map


/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var ph = __webpack_require__(17)

var h = ph.createElement

Object.assign(h, ph)

module.exports = h


/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


var parseSelector = __webpack_require__(16)

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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var createHelpers = __webpack_require__(14)
var toInlineStyle = __webpack_require__(18)
var parse = __webpack_require__(15)
var classNames = __webpack_require__(13)
var ref = __webpack_require__(19);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


var hyphenate = __webpack_require__(12)

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
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse_srt__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse_srt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse_srt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_markup__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_markup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_markup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_linkstate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handle_errors__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionicons_dist_css_ionicons_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionicons_dist_css_ionicons_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ionicons_dist_css_ionicons_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_animate_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_animate_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__font_nunito_light_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__font_nunito_light_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__font_nunito_light_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_styl__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__app_styl__);












const h = __WEBPACK_IMPORTED_MODULE_4_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_10__app_styl___default.a);

class App extends __WEBPACK_IMPORTED_MODULE_0_preact__["Component"] {
  render() {
    return h.div('.app', [
      h.div('.header', [__WEBPACK_IMPORTED_MODULE_9__components__["a" /* header */]]),
      h.div('.component', [!this.state.quizData
        ? h(__WEBPACK_IMPORTED_MODULE_9__components__["b" /* Quiz */], { onFinish: quizData => this.setState({ quizData }) })
        : !this.state.formData
        // ? h(cmp.Form, { onSubmit: formData => this.setState({ formData }) })
        ? h.div(['Form'])
        // : h(cmp.Slider, this.state)
        : h.div(['Slider'])
      ]),
      __WEBPACK_IMPORTED_MODULE_9__components__["c" /* comments */],
    ]);
  }
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(h(App), document.getElementById('whats-your-archetype_app') || document.body);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_comment_logo_png__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_comment_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_comment_logo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl__ = __webpack_require__(28);
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_individualogist_logo2_png__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_individualogist_logo2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_individualogist_logo2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_styl__);




const h = __WEBPACK_IMPORTED_MODULE_0_preact_hyperstyler___default()(__WEBPACK_IMPORTED_MODULE_2__style_styl___default.a);

/* harmony default export */ __webpack_exports__["a"] = (h.header([
  h.img({ src: __WEBPACK_IMPORTED_MODULE_1__assets_individualogist_logo2_png__["default"] }),
  h.p('.heading', 'FREE PERSONALITY READING'),
  h.p('.subtitle', 'What’s Your Archetype?'),
  h.p('.subtext', 'Individuation Archetype Explorer®'),
]));


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_hyperstyler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_archetypes__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_questions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_styl__ = __webpack_require__(30);
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

    return h.div('.container', [
      // h.pre('.debug', { style: 'position:fixed!important;bottom:0!important;right:0!important' }, JSON.stringify(this.state.questions.map(q => q.answer), null, 2))

      h.div('.intro.animated.slideInDown', [
        h.p('.ion-ios-timer-outline', 'Takes less than 60 seconds'),
        h.p('.ion-ios-color-wand-outline', 'Only 6 questions'),
        h.p('.ion-ios-heart-outline', 'Honesty leads to accuracy'),
      ]),

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
                      this.state.archetypes.points = (this.state.archetypes.points || 0) + points;
                    }
                  }
                  const sortedArchetypes = Object.keys(this.state.archetypes).sort((a, b) =>
                    this.state.archetypes[a] > this.state.archetypes[b]
                    ? 1
                    : this.state.archetypes[a] < this.state.archetypes[b]
                    ? -1
                    : 0
                  );
                  this.setState({
                    sortedArchetypes,
                    archetype: this.state.archetypes[sortedArchetypes[0]],
                  });
                  setTimeout(() => this.props.onFinish(this.state), 333);
                }
              }
            }), a.answer])))
          ])))
      ]),
    ]);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Quiz;



/***/ }),
/* 24 */
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
/* 25 */
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
    { answer: `Jokes around all the time`, points: { jester: 1, explorer: 1 } },
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
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"outer":"hf_EvfoZ7YYO76WmPM-ua","container":"_2ifGFKluNAPLNHxdZkCQp7","img":"pD7Gm54l_IrLmIO6cMz4s","heading":"_1_7-We5qBmCmykcNvA15Vx"};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"_3jaB-6x0Hu-kos38oQ2Ni0","img":"_2BbGTgWf_o807LCWMNB6Ci","p":"_1SERCw-8ioKR8mRE95aFKH","heading":"_1hulBTA4bbBQCB167jpdru","subtitle":"sp-KGqO8nQFGGBT26ZAGd","subtext":"mkSnVvk-loivkd5im0Ewf"};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"progress-bar":"_25sk9YU801rQi8UCnipsea","container":"_1Y0eDVcj0rJumpAjyCOX33","intro":"_9y8ZMTMNh9ig4kaWU1uYB","p":"WdsJkOld8n67YlN1YgpNF","form":"fqo_GZ7q1RhBKY0jshNwV","li":"xUQ-qOM75FMq_wanv9Ai_","question":"_2XAmsnBBxWzNHuH4ZTDL_Q","answer":"KuoAIuKjcgyI9S-4wKC-t","input":"_2ufkinwKNCiOFuWMjPaFXs","ol":"_2TBghB61ksBv2ytMP_Bnau","visible":"_20uATEHsx57deYUma7vfi2","ul":"_3EQUx76TIupkNoJZ2W3Qwf","order":"_1mSy2_T6gFVevOeqUjVxv6"};

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


var parseSelector = __webpack_require__(33)

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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var ph = __webpack_require__(35)

var h = ph.createElement

Object.assign(h, ph)

module.exports = h


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


var createHelpers = __webpack_require__(31)
var toInlineStyle = __webpack_require__(36)
var parse = __webpack_require__(32)
var classNames = __webpack_require__(27)
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


var hyphenate = __webpack_require__(26)

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
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\x\\Documents\\Work\\AaronL\\projects\\whats-your-archetype\\assets\\individualogist-logo2.png'");

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/assets/comment-logo.png";

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
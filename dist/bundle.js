/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 147);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proptypes__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* unused harmony export version */
/* unused harmony export DOM */
/* unused harmony export Children */
/* unused harmony export render */
/* unused harmony export createClass */
/* unused harmony export createFactory */
/* unused harmony export createElement */
/* unused harmony export cloneElement */
/* unused harmony export isValidElement */
/* unused harmony export findDOMNode */
/* unused harmony export unmountComponentAtNode */
/* unused harmony export Component */
/* unused harmony export unstable_renderSubtreeIntoContainer */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
var EmptyComponent = function EmptyComponent() {
	return null;
};

// make react think we're react.
var VNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('').constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},

	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},

	configurable: true
});

var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode || EmptyComponent;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	var a = vnode.attributes;
	if (!a) a = vnode.attributes = {};
	// clone if needed (fixes #105):
	if (Object.isExtensible && !Object.isExtensible(a)) {
		a = extend({}, a, true);
	}
	a.children = vnode.children;
	oldVnodeHook(vnode);
};

// proxy render() since React returns a Component reference.
function render(vnode, parent, callback) {
	var prev = parent._preactCompatRendered;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) prev = null;

	// default to first Element child
	if (!prev) prev = parent.children[0];

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	parent._preactCompatRendered = out;
	if (typeof callback === 'function') callback();
	return out && out._component || out.base;
}

var ContextProvider = function () {
	function ContextProvider() {
		_classCallCheck(this, ContextProvider);
	}

	_createClass(ContextProvider, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return this.props.context;
		}
	}, {
		key: 'render',
		value: function render(props) {
			return props.children[0];
		}
	}]);

	return ContextProvider;
}();

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var c = render(wrap, container);
	if (callback) callback(c);
	return c;
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered;
	if (existing && existing.parentNode === container) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		children = Children.toArray(children);
		if (ctx && ctx !== children) fn = fn.bind(ctx);
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		children = Children.toArray(children);
		if (ctx && ctx !== children) fn = fn.bind(ctx);
		children.forEach(fn);
	},
	count: function count(children) {
		children = Children.toArray(children);
		return children.length;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) throw new Error('Children.only() expects only one child.');
		return children[0];
	},
	toArray: function toArray(children) {
		return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent = void 0;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var _i = offset || 0; _i < arr.length; _i++) {
		var obj = arr[_i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[_i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return function StatelessComponent(props, context) {
		propsHook.call(WrappedComponent, props, context);
		return WrappedComponent(props, context);
	};
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) return Wrapped === true ? Ctor : Wrapped;

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(undefined, args));
}

function normalizeVNode(vnode) {
	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes && vnode.attributes.ref,
	    type = ref && (typeof ref === 'undefined' ? 'undefined' : _typeof(ref));
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement(element, props) {
	var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(element.nodeName || element.type, element.attributes || element.props, element.children || element.props.children);

	for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
		children[_key2 - 2] = arguments[_key2];
	}

	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(undefined, [node, props].concat(children)));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(_ref) {
	var nodeName = _ref.nodeName;
	var attributes = _ref.attributes;

	if (!attributes || typeof nodeName !== 'string') return;
	var props = {};
	for (var _i2 in attributes) {
		props[_i2.toLowerCase()] = _i2;
	}
	if (props.onchange) {
		var attr = 'oninput';
		nodeName = nodeName.toLowerCase();
		if (nodeName === 'input' && String(attributes.type).toLowerCase() === 'checkbox') attr = 'onclick';
		attributes[props[attr] || attr] = multihook(attributes[props[attr]], attributes[props.onchange]);
	}
}

function applyClassName(_ref2) {
	var attributes = _ref2.attributes;

	if (!attributes) return;
	var cl = attributes.className || attributes.class;
	if (cl) attributes.className = cl;
}

function extend(base, props, all) {
	for (var key in props) {
		if (all === true || props[key] != null) {
			base[key] = props[key];
		}
	}
	return base;
}

var findDOMNode = function findDOMNode(component) {
	return component && component.base || component;
};

function F() {}

function createClass(obj) {
	var mixins = obj.mixins && collateMixins(obj.mixins);

	function cl(props, context) {
		extend(this, obj);
		if (mixins) applyMixins(this, mixins);
		Component.call(this, props, context, BYPASS_HOOK);
		bindAll(this);
		newComponentHook.call(this, props, context);
	}

	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component.prototype;
	cl.prototype = new F();
	cl.prototype.constructor = cl;

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var _i3 = 0; _i3 < mixins.length; _i3++) {
		var mixin = mixins[_i3];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component instance
function applyMixins(inst, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			inst[key] = multihook.apply(undefined, _toConsumableArray(mixins[key].concat(inst[key] || key)));
		}
	}
}

function bindAll(ctx) {
	for (var _i4 in ctx) {
		var v = ctx[_i4];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(_i4)) {
			(ctx[_i4] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook() {
	var hooks = arguments;
	return function () {
		var ret = void 0;
		for (var _i5 = 0; _i5 < hooks.length; _i5++) {
			var r = callMethod(this, hooks[_i5], arguments);
			if (r !== undefined) ret = r;
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook(this.componentWillReceiveProps || 'componentWillReceiveProps', propsHook);
	this.render = multihook(beforeRender, this.render || 'render', afterRender);
}

function propsHook(props, context) {
	if (!props) return;

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && c.length === 1) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && _typeof(props.children) === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		if (propTypes) {
			for (var prop in propTypes) {
				if (propTypes.hasOwnProperty(prop) && typeof propTypes[prop] === 'function') {
					var displayName = this.displayName || ctor.name;
					var err = propTypes[prop](props, prop, displayName, 'prop');
					if (err) console.error(new Error(err.message || err));
				}
			}
		}
	}
}

function beforeRender() {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
Component.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"]();
extend(Component.prototype, {
	constructor: Component,

	isReactComponent: {},

	getDOMNode: function getDOMNode() {
		return this.base;
	},
	isMounted: function isMounted() {
		return !!this.base;
	}
});

/* unused harmony reexport PropTypes */


/* harmony default export */ exports["a"] = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_proptypes___default.a,
	Children: Children,
	render: render,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(133)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(32);

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Baobab Type Checking
 * =====================
 *
 * Helpers functions used throughout the library to perform some type
 * tests at runtime.
 *
 */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _monkey = __webpack_require__(9);

var type = {};

/**
 * Helpers
 * --------
 */

/**
 * Checking whether the given variable is of any of the given types.
 *
 * @todo   Optimize this function by dropping `some`.
 *
 * @param  {mixed} target  - Variable to test.
 * @param  {array} allowed - Array of allowed types.
 * @return {boolean}
 */
function anyOf(target, allowed) {
  return allowed.some(function (t) {
    return type[t](target);
  });
}

/**
 * Simple types
 * -------------
 */

/**
 * Checking whether the given variable is an array.
 *
 * @param  {mixed} target - Variable to test.
 * @return {boolean}
 */
type.array = function (target) {
  return Array.isArray(target);
};

/**
 * Checking whether the given variable is an object.
 *
 * @param  {mixed} target - Variable to test.
 * @return {boolean}
 */
type.object = function (target) {
  return target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && !Array.isArray(target) && !(target instanceof Date) && !(target instanceof RegExp) && !(typeof Map === 'function' && target instanceof Map) && !(typeof Set === 'function' && target instanceof Set);
};

/**
 * Checking whether the given variable is a string.
 *
 * @param  {mixed} target - Variable to test.
 * @return {boolean}
 */
type.string = function (target) {
  return typeof target === 'string';
};

/**
 * Checking whether the given variable is a number.
 *
 * @param  {mixed} target - Variable to test.
 * @return {boolean}
 */
type.number = function (target) {
  return typeof target === 'number';
};

/**
 * Checking whether the given variable is a function.
 *
 * @param  {mixed} target - Variable to test.
 * @return {boolean}
 */
type['function'] = function (target) {
  return typeof target === 'function';
};

/**
 * Checking whether the given variable is a JavaScript primitive.
 *
 * @param  {mixed} target - Variable to test.
 * @return {boolean}
 */
type.primitive = function (target) {
  return target !== Object(target);
};

/**
 * Complex types
 * --------------
 */

/**
 * Checking whether the given variable is a valid splicer.
 *
 * @param  {mixed} target    - Variable to test.
 * @param  {array} [allowed] - Optional valid types in path.
 * @return {boolean}
 */
type.splicer = function (target) {
  if (!type.array(target) || target.length < 2) return false;

  return anyOf(target[0], ['number', 'function', 'object']) && type.number(target[1]);
};

/**
 * Checking whether the given variable is a valid cursor path.
 *
 * @param  {mixed} target    - Variable to test.
 * @param  {array} [allowed] - Optional valid types in path.
 * @return {boolean}
 */

// Order is important for performance reasons
var ALLOWED_FOR_PATH = ['string', 'number', 'function', 'object'];

type.path = function (target) {
  if (!target && target !== 0 && target !== '') return false;

  return [].concat(target).every(function (step) {
    return anyOf(step, ALLOWED_FOR_PATH);
  });
};

/**
 * Checking whether the given path is a dynamic one.
 *
 * @param  {mixed} path - The path to test.
 * @return {boolean}
 */
type.dynamicPath = function (path) {
  return path.some(function (step) {
    return type['function'](step) || type.object(step);
  });
};

/**
 * Retrieve any monkey subpath in the given path or null if the path never comes
 * across computed data.
 *
 * @param  {mixed} data - The data to test.
 * @param  {array} path - The path to test.
 * @return {boolean}
 */
type.monkeyPath = function (data, path) {
  var subpath = [];

  var c = data,
      i = undefined,
      l = undefined;

  for (i = 0, l = path.length; i < l; i++) {
    subpath.push(path[i]);

    if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object') return null;

    c = c[path[i]];

    if (c instanceof _monkey.Monkey) return subpath;
  }

  return null;
};

/**
 * Check if the given object property is a lazy getter used by a monkey.
 *
 * @param  {mixed}   o           - The target object.
 * @param  {string}  propertyKey - The property to test.
 * @return {boolean}
 */
type.lazyGetter = function (o, propertyKey) {
  var descriptor = Object.getOwnPropertyDescriptor(o, propertyKey);

  return descriptor && descriptor.get && descriptor.get.isLazyGetter === true;
};

/**
 * Returns the type of the given monkey definition or `null` if invalid.
 *
 * @param  {mixed} definition - The definition to check.
 * @return {string|null}
 */
type.monkeyDefinition = function (definition) {

  if (type.object(definition)) {
    if (!type['function'](definition.get) || definition.cursors && (!type.object(definition.cursors) || !Object.keys(definition.cursors).every(function (k) {
      return type.path(definition.cursors[k]);
    }))) return null;

    return 'object';
  } else if (type.array(definition)) {
    var offset = 1;

    if (type.object(definition[definition.length - 1])) offset++;

    if (!type['function'](definition[definition.length - offset]) || !definition.slice(0, -offset).every(function (p) {
      return type.path(p);
    })) return null;

    return 'array';
  }

  return null;
};

/**
 * Checking whether the given watcher definition is valid.
 *
 * @param  {mixed}   definition - The definition to check.
 * @return {boolean}
 */
type.watcherMapping = function (definition) {
  return type.object(definition) && Object.keys(definition).every(function (k) {
    return type.path(definition[k]);
  });
};

/**
 * Checking whether the given string is a valid operation type.
 *
 * @param  {mixed} string - The string to test.
 * @return {boolean}
 */

// Ordered by likeliness
var VALID_OPERATIONS = ['set', 'apply', 'push', 'unshift', 'concat', 'pop', 'shift', 'deepMerge', 'merge', 'splice', 'unset'];

type.operationType = function (string) {
  return typeof string === 'string' && !!~VALID_OPERATIONS.indexOf(string);
};

exports['default'] = type;
module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(70),
    getValue = __webpack_require__(86);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ },
/* 4 */
/***/ function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* eslint eqeqeq: 0 */

/**
 * Baobab Helpers
 * ===============
 *
 * Miscellaneous helper functions.
 */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.arrayFrom = arrayFrom;
exports.before = before;
exports.coercePath = coercePath;
exports.getIn = getIn;
exports.makeError = makeError;
exports.solveRelativePath = solveRelativePath;
exports.solveUpdate = solveUpdate;
exports.splice = splice;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _monkey = __webpack_require__(9);

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

/**
 * Noop function
 */
var noop = Function.prototype;

/**
 * Function returning the index of the first element of a list matching the
 * given predicate.
 *
 * @param  {array}     a  - The target array.
 * @param  {function}  fn - The predicate function.
 * @return {mixed}        - The index of the first matching item or -1.
 */
function index(a, fn) {
  var i = undefined,
      l = undefined;
  for (i = 0, l = a.length; i < l; i++) {
    if (fn(a[i])) return i;
  }
  return -1;
}

/**
 * Efficient slice function used to clone arrays or parts of them.
 *
 * @param  {array} array - The array to slice.
 * @return {array}       - The sliced array.
 */
function slice(array) {
  var newArray = new Array(array.length);

  var i = undefined,
      l = undefined;

  for (i = 0, l = array.length; i < l; i++) {
    newArray[i] = array[i];
  }return newArray;
}

/**
 * Archive abstraction
 *
 * @constructor
 * @param {integer} size - Maximum number of records to store.
 */

var Archive = function () {
  function Archive(size) {
    _classCallCheck(this, Archive);

    this.size = size;
    this.records = [];
  }

  /**
   * Function creating a real array from what should be an array but is not.
   * I'm looking at you nasty `arguments`...
   *
   * @param  {mixed} culprit - The culprit to convert.
   * @return {array}         - The real array.
   */

  /**
   * Method retrieving the records.
   *
   * @return {array} - The records.
   */

  _createClass(Archive, [{
    key: 'get',
    value: function get() {
      return this.records;
    }

    /**
     * Method adding a record to the archive
     *
     * @param {object}  record - The record to store.
     * @return {Archive}       - The archive itself for chaining purposes.
     */
  }, {
    key: 'add',
    value: function add(record) {
      this.records.unshift(record);

      // If the number of records is exceeded, we truncate the records
      if (this.records.length > this.size) this.records.length = this.size;

      return this;
    }

    /**
     * Method clearing the records.
     *
     * @return {Archive} - The archive itself for chaining purposes.
     */
  }, {
    key: 'clear',
    value: function clear() {
      this.records = [];
      return this;
    }

    /**
     * Method to go back in time.
     *
     * @param {integer} steps - Number of steps we should go back by.
     * @return {number}       - The last record.
     */
  }, {
    key: 'back',
    value: function back(steps) {
      var record = this.records[steps - 1];

      if (record) this.records = this.records.slice(steps);
      return record;
    }
  }]);

  return Archive;
}();

exports.Archive = Archive;

function arrayFrom(culprit) {
  return slice(culprit);
}

/**
 * Function decorating one function with another that will be called before the
 * decorated one.
 *
 * @param  {function} decorator - The decorating function.
 * @param  {function} fn        - The function to decorate.
 * @return {function}           - The decorated function.
 */

function before(decorator, fn) {
  return function () {
    decorator.apply(null, arguments);
    fn.apply(null, arguments);
  };
}

/**
 * Function cloning the given regular expression. Supports `y` and `u` flags
 * already.
 *
 * @param  {RegExp} re - The target regular expression.
 * @return {RegExp}    - The cloned regular expression.
 */
function cloneRegexp(re) {
  var pattern = re.source;

  var flags = '';

  if (re.global) flags += 'g';
  if (re.multiline) flags += 'm';
  if (re.ignoreCase) flags += 'i';
  if (re.sticky) flags += 'y';
  if (re.unicode) flags += 'u';

  return new RegExp(pattern, flags);
}

/**
 * Function cloning the given variable.
 *
 * @todo: implement a faster way to clone an array.
 *
 * @param  {boolean} deep - Should we deep clone the variable.
 * @param  {mixed}   item - The variable to clone
 * @return {mixed}        - The cloned variable.
 */
function cloner(deep, item) {
  if (!item || (typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object' || item instanceof Error || item instanceof _monkey.MonkeyDefinition || item instanceof _monkey.Monkey || 'ArrayBuffer' in global && item instanceof ArrayBuffer) return item;

  // Array
  if (_type2['default'].array(item)) {
    if (deep) {
      var a = [];

      var i = undefined,
          l = undefined;

      for (i = 0, l = item.length; i < l; i++) {
        a.push(cloner(true, item[i]));
      }return a;
    }

    return slice(item);
  }

  // Date
  if (item instanceof Date) return new Date(item.getTime());

  // RegExp
  if (item instanceof RegExp) return cloneRegexp(item);

  // Object
  if (_type2['default'].object(item)) {
    var o = {};

    var k = undefined;

    // NOTE: could be possible to erase computed properties through `null`.
    for (k in item) {
      if (_type2['default'].lazyGetter(item, k)) {
        Object.defineProperty(o, k, {
          get: Object.getOwnPropertyDescriptor(item, k).get,
          enumerable: true,
          configurable: true
        });
      } else if (item.hasOwnProperty(k)) {
        o[k] = deep ? cloner(true, item[k]) : item[k];
      }
    }
    return o;
  }

  return item;
}

/**
 * Exporting shallow and deep cloning functions.
 */
var shallowClone = cloner.bind(null, false),
    deepClone = cloner.bind(null, true);

exports.shallowClone = shallowClone;
exports.deepClone = deepClone;

/**
 * Coerce the given variable into a full-fledged path.
 *
 * @param  {mixed} target - The variable to coerce.
 * @return {array}        - The array path.
 */

function coercePath(target) {
  if (target || target === 0 || target === '') return target;
  return [];
}

/**
 * Function comparing an object's properties to a given descriptive
 * object.
 *
 * @param  {object} object      - The object to compare.
 * @param  {object} description - The description's mapping.
 * @return {boolean}            - Whether the object matches the description.
 */
function compare(object, description) {
  var ok = true,
      k = undefined;

  // If we reached here via a recursive call, object may be undefined because
  // not all items in a collection will have the same deep nesting structure.
  if (!object) return false;

  for (k in description) {
    if (_type2['default'].object(description[k])) {
      ok = ok && compare(object[k], description[k]);
    } else if (_type2['default'].array(description[k])) {
      ok = ok && !!~description[k].indexOf(object[k]);
    } else {
      if (object[k] !== description[k]) return false;
    }
  }

  return ok;
}

/**
 * Function freezing the given variable if possible.
 *
 * @param  {boolean} deep - Should we recursively freeze the given objects?
 * @param  {object}  o    - The variable to freeze.
 * @return {object}    - The merged object.
 */
function freezer(deep, o) {
  if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object' || o === null || o instanceof _monkey.Monkey) return;

  Object.freeze(o);

  if (!deep) return;

  if (Array.isArray(o)) {

    // Iterating through the elements
    var i = undefined,
        l = undefined;

    for (i = 0, l = o.length; i < l; i++) {
      freezer(true, o[i]);
    }
  } else {
    var p = undefined,
        k = undefined;

    for (k in o) {
      if (_type2['default'].lazyGetter(o, k)) continue;

      p = o[k];

      if (!p || !o.hasOwnProperty(k) || (typeof p === 'undefined' ? 'undefined' : _typeof(p)) !== 'object' || Object.isFrozen(p)) continue;

      freezer(true, p);
    }
  }
}

/**
 * Exporting both `freeze` and `deepFreeze` functions.
 * Note that if the engine does not support `Object.freeze` then this will
 * export noop functions instead.
 */
var isFreezeSupported = typeof Object.freeze === 'function';

var freeze = isFreezeSupported ? freezer.bind(null, false) : noop,
    deepFreeze = isFreezeSupported ? freezer.bind(null, true) : noop;

exports.freeze = freeze;
exports.deepFreeze = deepFreeze;

/**
 * Function retrieving nested data within the given object and according to
 * the given path.
 *
 * @todo: work if dynamic path hit objects also.
 * @todo: memoized perfgetters.
 *
 * @param  {object}  object - The object we need to get data from.
 * @param  {array}   path   - The path to follow.
 * @return {object}  result            - The result.
 * @return {mixed}   result.data       - The data at path, or `undefined`.
 * @return {array}   result.solvedPath - The solved path or `null`.
 * @return {boolean} result.exists     - Does the path exists in the tree?
 */
var NOT_FOUND_OBJECT = { data: undefined, solvedPath: null, exists: false };

function getIn(object, path) {
  if (!path) return NOT_FOUND_OBJECT;

  var solvedPath = [];

  var exists = true,
      c = object,
      idx = undefined,
      i = undefined,
      l = undefined;

  for (i = 0, l = path.length; i < l; i++) {
    if (!c) return {
      data: undefined,
      solvedPath: solvedPath.concat(path.slice(i)),
      exists: false
    };

    if (typeof path[i] === 'function') {
      if (!_type2['default'].array(c)) return NOT_FOUND_OBJECT;

      idx = index(c, path[i]);
      if (!~idx) return NOT_FOUND_OBJECT;

      solvedPath.push(idx);
      c = c[idx];
    } else if (_typeof(path[i]) === 'object') {
      if (!_type2['default'].array(c)) return NOT_FOUND_OBJECT;

      idx = index(c, function (e) {
        return compare(e, path[i]);
      });
      if (!~idx) return NOT_FOUND_OBJECT;

      solvedPath.push(idx);
      c = c[idx];
    } else {
      solvedPath.push(path[i]);
      exists = (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && path[i] in c;
      c = c[path[i]];
    }
  }

  return { data: c, solvedPath: solvedPath, exists: exists };
}

/**
 * Little helper returning a JavaScript error carrying some data with it.
 *
 * @param  {string} message - The error message.
 * @param  {object} [data]  - Optional data to assign to the error.
 * @return {Error}          - The created error.
 */

function makeError(message, data) {
  var err = new Error(message);

  for (var k in data) {
    err[k] = data[k];
  }return err;
}

/**
 * Function taking n objects to merge them together.
 * Note 1): the latter object will take precedence over the first one.
 * Note 2): the first object will be mutated to allow for perf scenarios.
 * Note 3): this function will consider monkeys as leaves.
 *
 * @param  {boolean}   deep    - Whether the merge should be deep or not.
 * @param  {...object} objects - Objects to merge.
 * @return {object}            - The merged object.
 */
function merger(deep) {
  for (var _len = arguments.length, objects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objects[_key - 1] = arguments[_key];
  }

  var o = objects[0];

  var t = undefined,
      i = undefined,
      l = undefined,
      k = undefined;

  for (i = 1, l = objects.length; i < l; i++) {
    t = objects[i];

    for (k in t) {
      if (deep && _type2['default'].object(t[k]) && !(t[k] instanceof _monkey.Monkey)) {
        o[k] = merger(true, o[k] || {}, t[k]);
      } else {
        o[k] = t[k];
      }
    }
  }

  return o;
}

/**
 * Exporting both `shallowMerge` and `deepMerge` functions.
 */
var shallowMerge = merger.bind(null, false),
    deepMerge = merger.bind(null, true);

exports.shallowMerge = shallowMerge;
exports.deepMerge = deepMerge;

/**
 * Solving a potentially relative path.
 *
 * @param  {array} base - The base path from which to solve the path.
 * @param  {array} to   - The subpath to reach.
 * @param  {array}      - The solved absolute path.
 */

function solveRelativePath(base, to) {
  var solvedPath = [];

  // Coercing to array
  to = [].concat(to);

  for (var i = 0, l = to.length; i < l; i++) {
    var step = to[i];

    if (step === '.') {
      if (!i) solvedPath = base.slice(0);
    } else if (step === '..') {
      solvedPath = (!i ? base : solvedPath).slice(0, -1);
    } else {
      solvedPath.push(step);
    }
  }

  return solvedPath;
}

/**
 * Function determining whether some paths in the tree were affected by some
 * updates that occurred at the given paths. This helper is mainly used at
 * cursor level to determine whether the cursor is concerned by the updates
 * fired at tree level.
 *
 * NOTES: 1) If performance become an issue, the following threefold loop
 *           can be simplified to a complex twofold one.
 *        2) A regex version could also work but I am not confident it would
 *           be faster.
 *        3) Another solution would be to keep a register of cursors like with
 *           the monkeys and update along this tree.
 *
 * @param  {array} affectedPaths - The paths that were updated.
 * @param  {array} comparedPaths - The paths that we are actually interested in.
 * @return {boolean}             - Is the update relevant to the compared
 *                                 paths?
 */

function solveUpdate(affectedPaths, comparedPaths) {
  var i = undefined,
      j = undefined,
      k = undefined,
      l = undefined,
      m = undefined,
      n = undefined,
      p = undefined,
      c = undefined,
      s = undefined;

  // Looping through possible paths
  for (i = 0, l = affectedPaths.length; i < l; i++) {
    p = affectedPaths[i];

    if (!p.length) return true;

    // Looping through logged paths
    for (j = 0, m = comparedPaths.length; j < m; j++) {
      c = comparedPaths[j];

      if (!c || !c.length) return true;

      // Looping through steps
      for (k = 0, n = c.length; k < n; k++) {
        s = c[k];

        // If path is not relevant, we break
        // NOTE: the '!=' instead of '!==' is required here!
        if (s != p[k]) break;

        // If we reached last item and we are relevant
        if (k + 1 === n || k + 1 === p.length) return true;
      }
    }
  }

  return false;
}

/**
 * Non-mutative version of the splice array method.
 *
 * @param  {array}    array        - The array to splice.
 * @param  {integer}  startIndex   - The start index.
 * @param  {integer}  nb           - Number of elements to remove.
 * @param  {...mixed} elements     - Elements to append after splicing.
 * @return {array}                 - The spliced array.
 */

function splice(array, startIndex, nb) {
  nb = Math.max(0, nb);

  // Solving startIndex
  if (_type2['default']['function'](startIndex)) startIndex = index(array, startIndex);
  if (_type2['default'].object(startIndex)) startIndex = index(array, function (e) {
    return compare(e, startIndex);
  });

  // Positive index

  for (var _len2 = arguments.length, elements = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    elements[_key2 - 3] = arguments[_key2];
  }

  if (startIndex >= 0) return array.slice(0, startIndex).concat(elements).concat(array.slice(startIndex + nb));

  // Negative index
  return array.slice(0, array.length + startIndex).concat(elements).concat(array.slice(array.length + startIndex + nb));
}

/**
 * Function returning a unique incremental id each time it is called.
 *
 * @return {integer} - The latest unique id.
 */
var uniqid = function () {
  var i = 0;

  return function () {
    return i++;
  };
}();

exports.uniqid = uniqid;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ },
/* 6 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ },
/* 7 */
/***/ function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ },
/* 8 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Baobab Monkeys
 * ===============
 *
 * Exposing both handy monkey definitions and the underlying working class.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

var _update2 = __webpack_require__(24);

var _update3 = _interopRequireDefault(_update2);

var _helpers = __webpack_require__(5);

/**
 * Monkey Definition class
 * Note: The only reason why this is a class is to be able to spot it within
 * otherwise ordinary data.
 *
 * @constructor
 * @param {array|object} definition - The formal definition of the monkey.
 */

var MonkeyDefinition = function MonkeyDefinition(definition) {
  var _this = this;

  _classCallCheck(this, MonkeyDefinition);

  var monkeyType = _type2['default'].monkeyDefinition(definition);

  if (!monkeyType) throw (0, _helpers.makeError)('Baobab.monkey: invalid definition.', { definition: definition });

  this.type = monkeyType;

  if (this.type === 'object') {
    this.getter = definition.get;
    this.projection = definition.cursors || {};
    this.paths = Object.keys(this.projection).map(function (k) {
      return _this.projection[k];
    });
    this.options = definition.options || {};
  } else {
    var offset = 1,
        options = {};

    if (_type2['default'].object(definition[definition.length - 1])) {
      offset++;
      options = definition[definition.length - 1];
    }

    this.getter = definition[definition.length - offset];
    this.projection = definition.slice(0, -offset);
    this.paths = this.projection;
    this.options = options;
  }

  // Coercing paths for convenience
  this.paths = this.paths.map(function (p) {
    return [].concat(p);
  });

  // Does the definition contain dynamic paths
  this.hasDynamicPaths = this.paths.some(_type2['default'].dynamicPath);
}

/**
 * Monkey core class
 *
 * @constructor
 * @param {Baobab}           tree       - The bound tree.
 * @param {MonkeyDefinition} definition - A definition instance.
 */
;

exports.MonkeyDefinition = MonkeyDefinition;

var Monkey = function () {
  function Monkey(tree, pathInTree, definition) {
    var _this2 = this;

    _classCallCheck(this, Monkey);

    // Properties
    this.tree = tree;
    this.path = pathInTree;
    this.definition = definition;

    // Adapting the definition's paths & projection to this monkey's case
    var projection = definition.projection,
        relative = _helpers.solveRelativePath.bind(null, pathInTree.slice(0, -1));

    if (definition.type === 'object') {
      this.projection = Object.keys(projection).reduce(function (acc, k) {
        acc[k] = relative(projection[k]);
        return acc;
      }, {});
      this.depPaths = Object.keys(this.projection).map(function (k) {
        return _this2.projection[k];
      });
    } else {
      this.projection = projection.map(relative);
      this.depPaths = this.projection;
    }

    // Internal state
    this.state = {
      killed: false
    };

    /**
     * Listener on the tree's `write` event.
     *
     * When the tree writes, this listener will check whether the updated paths
     * are of any use to the monkey and, if so, will update the tree's node
     * where the monkey sits.
     */
    this.writeListener = function (_ref) {
      var path = _ref.data.path;

      if (_this2.state.killed) return;

      // Is the monkey affected by the current write event?
      var concerned = (0, _helpers.solveUpdate)([path], _this2.relatedPaths());

      if (concerned) _this2.update();
    };

    /**
     * Listener on the tree's `monkey` event.
     *
     * When another monkey updates, this listener will check whether the
     * updated paths are of any use to the monkey and, if so, will update the
     * tree's node where the monkey sits.
     */
    this.recursiveListener = function (_ref2) {
      var _ref2$data = _ref2.data;
      var monkey = _ref2$data.monkey;
      var path = _ref2$data.path;

      if (_this2.state.killed) return;

      // Breaking if this is the same monkey
      if (_this2 === monkey) return;

      // Is the monkey affected by the current monkey event?
      var concerned = (0, _helpers.solveUpdate)([path], _this2.relatedPaths(false));

      if (concerned) _this2.update();
    };

    // Binding listeners
    this.tree.on('write', this.writeListener);
    this.tree.on('_monkey', this.recursiveListener);

    // Updating relevant node
    this.update();
  }

  /**
   * Method returning solved paths related to the monkey.
   *
   * @param  {boolean} recursive - Should we compute recursive paths?
   * @return {array}             - An array of related paths.
   */

  _createClass(Monkey, [{
    key: 'relatedPaths',
    value: function relatedPaths() {
      var _this3 = this;

      var recursive = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      var paths = undefined;

      if (this.definition.hasDynamicPaths) paths = this.depPaths.map(function (p) {
        return (0, _helpers.getIn)(_this3.tree._data, p).solvedPath;
      });else paths = this.depPaths;

      var isRecursive = recursive && this.depPaths.some(function (p) {
        return !!_type2['default'].monkeyPath(_this3.tree._monkeys, p);
      });

      if (!isRecursive) return paths;

      return paths.reduce(function (accumulatedPaths, path) {
        var monkeyPath = _type2['default'].monkeyPath(_this3.tree._monkeys, path);

        if (!monkeyPath) return accumulatedPaths.concat([path]);

        // Solving recursive path
        var relatedMonkey = (0, _helpers.getIn)(_this3.tree._monkeys, monkeyPath).data;

        return accumulatedPaths.concat(relatedMonkey.relatedPaths());
      }, []);
    }

    /**
     * Method used to update the tree's internal data with a lazy getter holding
     * the computed data.
     *
     * @return {Monkey} - Returns itself for chaining purposes.
     */
  }, {
    key: 'update',
    value: function update() {
      var deps = this.tree.project(this.projection);

      var lazyGetter = function (tree, def, data) {
        var cache = null,
            alreadyComputed = false;

        return function () {

          if (!alreadyComputed) {
            cache = def.getter.apply(tree, def.type === 'object' ? [data] : data);

            if (tree.options.immutable && def.options.immutable !== false) (0, _helpers.deepFreeze)(cache);

            alreadyComputed = true;
          }

          return cache;
        };
      }(this.tree, this.definition, deps);

      lazyGetter.isLazyGetter = true;

      // Should we write the lazy getter in the tree or solve it right now?
      if (this.tree.options.lazyMonkeys) {
        this.tree._data = (0, _update3['default'])(this.tree._data, this.path, {
          type: 'monkey',
          value: lazyGetter
        }, this.tree.options).data;
      } else {
        var result = (0, _update3['default'])(this.tree._data, this.path, {
          type: 'set',
          value: lazyGetter(),
          options: {
            mutableLeaf: !this.definition.options.immutable
          }
        }, this.tree.options);

        if ('data' in result) this.tree._data = result.data;
      }

      // Notifying the monkey's update so we can handle recursivity
      this.tree.emit('_monkey', { monkey: this, path: this.path });

      return this;
    }

    /**
     * Method releasing the monkey from memory.
     */
  }, {
    key: 'release',
    value: function release() {

      // Unbinding events
      this.tree.off('write', this.writeListener);
      this.tree.off('_monkey', this.monkeyListener);
      this.state.killed = true;

      // Deleting properties
      // NOTE: not deleting this.definition because some strange things happen
      // in the _refreshMonkeys method. See #372.
      delete this.projection;
      delete this.depPaths;
      delete this.tree;
    }
  }]);

  return Monkey;
}();

exports.Monkey = Monkey;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(96),
    listCacheDelete = __webpack_require__(97),
    listCacheGet = __webpack_require__(98),
    listCacheHas = __webpack_require__(99),
    listCacheSet = __webpack_require__(100);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(93);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var isArray = __webpack_require__(4),
    isSymbol = __webpack_require__(17);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ },
/* 16 */
/***/ function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var isObjectLike = __webpack_require__(16);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

module.exports = isSymbol;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function () {
  'use strict';

  /**
   * Here is the list of every allowed parameter when using Emitter#on:
   * @type {Object}
   */

  var __allowedOptions = {
    once: 'boolean',
    scope: 'object'
  };

  /**
   * Incremental id used to order event handlers.
   */
  var __order = 0;

  /**
   * A simple helper to shallowly merge two objects. The second one will "win"
   * over the first one.
   *
   * @param  {object}  o1 First target object.
   * @param  {object}  o2 Second target object.
   * @return {object}     Returns the merged object.
   */
  function shallowMerge(o1, o2) {
    var o = {},
        k;

    for (k in o1) {
      o[k] = o1[k];
    }for (k in o2) {
      o[k] = o2[k];
    }return o;
  }

  /**
   * Is the given variable a plain JavaScript object?
   *
   * @param  {mixed}  v   Target.
   * @return {boolean}    The boolean result.
   */
  function isPlainObject(v) {
    return v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && !Array.isArray(v) && !(v instanceof Function) && !(v instanceof RegExp);
  }

  /**
   * Iterate over an object that may have ES6 Symbols.
   *
   * @param  {object}   object  Object on which to iterate.
   * @param  {function} fn      Iterator function.
   * @param  {object}   [scope] Optional scope.
   */
  function forIn(object, fn, scope) {
    var symbols, k, i, l;

    for (k in object) {
      fn.call(scope || null, k, object[k]);
    }if (Object.getOwnPropertySymbols) {
      symbols = Object.getOwnPropertySymbols(object);

      for (i = 0, l = symbols.length; i < l; i++) {
        fn.call(scope || null, symbols[i], object[symbols[i]]);
      }
    }
  }

  /**
   * The emitter's constructor. It initializes the handlers-per-events store and
   * the global handlers store.
   *
   * Emitters are useful for non-DOM events communication. Read its methods
   * documentation for more information about how it works.
   *
   * @return {Emitter}         The fresh new instance.
   */
  var Emitter = function Emitter() {
    this._enabled = true;

    // Dirty trick that will set the necessary properties to the emitter
    this.unbindAll();
  };

  /**
   * This method unbinds every handlers attached to every or any events. So,
   * these functions will no more be executed when the related events are
   * emitted. If the functions were not bound to the events, nothing will
   * happen, and no error will be thrown.
   *
   * Usage:
   * ******
   * > myEmitter.unbindAll();
   *
   * @return {Emitter}      Returns this.
   */
  Emitter.prototype.unbindAll = function () {

    this._handlers = {};
    this._handlersAll = [];
    this._handlersComplex = [];

    return this;
  };

  /**
   * This method binds one or more functions to the emitter, handled to one or a
   * suite of events. So, these functions will be executed anytime one related
   * event is emitted.
   *
   * It is also possible to bind a function to any emitted event by not
   * specifying any event to bind the function to.
   *
   * Recognized options:
   * *******************
   *  - {?boolean} once   If true, the handlers will be unbound after the first
   *                      execution. Default value: false.
   *  - {?object}  scope  If a scope is given, then the listeners will be called
   *                      with this scope as "this".
   *
   * Variant 1:
   * **********
   * > myEmitter.on('myEvent', function(e) { console.log(e); });
   * > // Or:
   * > myEmitter.on('myEvent', function(e) { console.log(e); }, { once: true });
   *
   * @param  {string}   event   The event to listen to.
   * @param  {function} handler The function to bind.
   * @param  {?object}  options Eventually some options.
   * @return {Emitter}          Returns this.
   *
   * Variant 2:
   * **********
   * > myEmitter.on(
   * >   ['myEvent1', 'myEvent2'],
   * >   function(e) { console.log(e); }
   * >);
   * > // Or:
   * > myEmitter.on(
   * >   ['myEvent1', 'myEvent2'],
   * >   function(e) { console.log(e); }
   * >   { once: true }}
   * >);
   *
   * @param  {array}    events  The events to listen to.
   * @param  {function} handler The function to bind.
   * @param  {?object}  options Eventually some options.
   * @return {Emitter}          Returns this.
   *
   * Variant 3:
   * **********
   * > myEmitter.on({
   * >   myEvent1: function(e) { console.log(e); },
   * >   myEvent2: function(e) { console.log(e); }
   * > });
   * > // Or:
   * > myEmitter.on({
   * >   myEvent1: function(e) { console.log(e); },
   * >   myEvent2: function(e) { console.log(e); }
   * > }, { once: true });
   *
   * @param  {object}  bindings An object containing pairs event / function.
   * @param  {?object}  options Eventually some options.
   * @return {Emitter}          Returns this.
   *
   * Variant 4:
   * **********
   * > myEmitter.on(function(e) { console.log(e); });
   * > // Or:
   * > myEmitter.on(function(e) { console.log(e); }, { once: true});
   *
   * @param  {function} handler The function to bind to every events.
   * @param  {?object}  options Eventually some options.
   * @return {Emitter}          Returns this.
   */
  Emitter.prototype.on = function (a, b, c) {
    var i, l, k, event, eArray, handlersList, bindingObject;

    // Variant 3
    if (isPlainObject(a)) {
      forIn(a, function (name, fn) {
        this.on(name, fn, b);
      }, this);

      return this;
    }

    // Variant 1, 2 and 4
    if (typeof a === 'function') {
      c = b;
      b = a;
      a = null;
    }

    eArray = [].concat(a);

    for (i = 0, l = eArray.length; i < l; i++) {
      event = eArray[i];

      bindingObject = {
        order: __order++,
        fn: b
      };

      // Defining the list in which the handler should be inserted
      if (typeof event === 'string' || (typeof event === 'undefined' ? 'undefined' : _typeof(event)) === 'symbol') {
        if (!this._handlers[event]) this._handlers[event] = [];
        handlersList = this._handlers[event];
        bindingObject.type = event;
      } else if (event instanceof RegExp) {
        handlersList = this._handlersComplex;
        bindingObject.pattern = event;
      } else if (event === null) {
        handlersList = this._handlersAll;
      } else {
        throw Error('Emitter.on: invalid event.');
      }

      // Appending needed properties
      for (k in c || {}) {
        if (__allowedOptions[k]) bindingObject[k] = c[k];
      }handlersList.push(bindingObject);
    }

    return this;
  };

  /**
   * This method works exactly as the previous #on, but will add an options
   * object if none is given, and set the option "once" to true.
   *
   * The polymorphism works exactly as with the #on method.
   */
  Emitter.prototype.once = function () {
    var args = Array.prototype.slice.call(arguments),
        li = args.length - 1;

    if (isPlainObject(args[li]) && args.length > 1) args[li] = shallowMerge(args[li], { once: true });else args.push({ once: true });

    return this.on.apply(this, args);
  };

  /**
   * This method unbinds one or more functions from events of the emitter. So,
   * these functions will no more be executed when the related events are
   * emitted. If the functions were not bound to the events, nothing will
   * happen, and no error will be thrown.
   *
   * Variant 1:
   * **********
   * > myEmitter.off('myEvent', myHandler);
   *
   * @param  {string}   event   The event to unbind the handler from.
   * @param  {function} handler The function to unbind.
   * @return {Emitter}          Returns this.
   *
   * Variant 2:
   * **********
   * > myEmitter.off(['myEvent1', 'myEvent2'], myHandler);
   *
   * @param  {array}    events  The events to unbind the handler from.
   * @param  {function} handler The function to unbind.
   * @return {Emitter}          Returns this.
   *
   * Variant 3:
   * **********
   * > myEmitter.off({
   * >   myEvent1: myHandler1,
   * >   myEvent2: myHandler2
   * > });
   *
   * @param  {object} bindings An object containing pairs event / function.
   * @return {Emitter}         Returns this.
   *
   * Variant 4:
   * **********
   * > myEmitter.off(myHandler);
   *
   * @param  {function} handler The function to unbind from every events.
   * @return {Emitter}          Returns this.
   *
   * Variant 5:
   * **********
   * > myEmitter.off(event);
   *
   * @param  {string} event     The event we should unbind.
   * @return {Emitter}          Returns this.
   */
  function filter(target, fn) {
    target = target || [];

    var a = [],
        l,
        i;

    for (i = 0, l = target.length; i < l; i++) {
      if (target[i].fn !== fn) a.push(target[i]);
    }return a;
  }

  Emitter.prototype.off = function (events, fn) {
    var i, n, k, event;

    // Variant 4:
    if (arguments.length === 1 && typeof events === 'function') {
      fn = arguments[0];

      // Handlers bound to events:
      for (k in this._handlers) {
        this._handlers[k] = filter(this._handlers[k], fn);

        if (this._handlers[k].length === 0) delete this._handlers[k];
      }

      // Generic Handlers
      this._handlersAll = filter(this._handlersAll, fn);

      // Complex handlers
      this._handlersComplex = filter(this._handlersComplex, fn);
    }

    // Variant 5
    else if (arguments.length === 1 && (typeof events === 'string' || (typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'symbol')) {
        delete this._handlers[events];
      }

      // Variant 1 and 2:
      else if (arguments.length === 2) {
          var eArray = [].concat(events);

          for (i = 0, n = eArray.length; i < n; i++) {
            event = eArray[i];

            this._handlers[event] = filter(this._handlers[event], fn);

            if ((this._handlers[event] || []).length === 0) delete this._handlers[event];
          }
        }

        // Variant 3
        else if (isPlainObject(events)) {
            forIn(events, this.off, this);
          }

    return this;
  };

  /**
   * This method retrieve the listeners attached to a particular event.
   *
   * @param  {?string}    Name of the event.
   * @return {array}      Array of handler functions.
   */
  Emitter.prototype.listeners = function (event) {
    var handlers = this._handlersAll || [],
        complex = false,
        h,
        i,
        l;

    if (!event) throw Error('Emitter.listeners: no event provided.');

    handlers = handlers.concat(this._handlers[event] || []);

    for (i = 0, l = this._handlersComplex.length; i < l; i++) {
      h = this._handlersComplex[i];

      if (~event.search(h.pattern)) {
        complex = true;
        handlers.push(h);
      }
    }

    // If we have any complex handlers, we need to sort
    if (this._handlersAll.length || complex) return handlers.sort(function (a, b) {
      return a.order - b.order;
    });else return handlers.slice(0);
  };

  /**
   * This method emits the specified event(s), and executes every handlers bound
   * to the event(s).
   *
   * Use cases:
   * **********
   * > myEmitter.emit('myEvent');
   * > myEmitter.emit('myEvent', myData);
   * > myEmitter.emit(['myEvent1', 'myEvent2']);
   * > myEmitter.emit(['myEvent1', 'myEvent2'], myData);
   * > myEmitter.emit({myEvent1: myData1, myEvent2: myData2});
   *
   * @param  {string|array} events The event(s) to emit.
   * @param  {object?}      data   The data.
   * @return {Emitter}             Returns this.
   */
  Emitter.prototype.emit = function (events, data) {

    // Short exit if the emitter is disabled
    if (!this._enabled) return this;

    // Object variant
    if (isPlainObject(events)) {
      forIn(events, this.emit, this);
      return this;
    }

    var eArray = [].concat(events),
        onces = [],
        event,
        parent,
        handlers,
        handler,
        i,
        j,
        l,
        m;

    for (i = 0, l = eArray.length; i < l; i++) {
      handlers = this.listeners(eArray[i]);

      for (j = 0, m = handlers.length; j < m; j++) {
        handler = handlers[j];
        event = {
          type: eArray[i],
          target: this
        };

        if (arguments.length > 1) event.data = data;

        handler.fn.call('scope' in handler ? handler.scope : this, event);

        if (handler.once) onces.push(handler);
      }

      // Cleaning onces
      for (j = onces.length - 1; j >= 0; j--) {
        parent = onces[j].type ? this._handlers[onces[j].type] : onces[j].pattern ? this._handlersComplex : this._handlersAll;

        parent.splice(parent.indexOf(onces[j]), 1);
      }
    }

    return this;
  };

  /**
   * This method will unbind all listeners and make it impossible to ever
   * rebind any listener to any event.
   */
  Emitter.prototype.kill = function () {

    this.unbindAll();
    this._handlers = null;
    this._handlersAll = null;
    this._handlersComplex = null;
    this._enabled = false;

    // Nooping methods
    this.unbindAll = this.on = this.once = this.off = this.emit = this.listeners = Function.prototype;
  };

  /**
   * This method disabled the emitter, which means its emit method will do
   * nothing.
   *
   * @return {Emitter} Returns this.
   */
  Emitter.prototype.disable = function () {
    this._enabled = false;

    return this;
  };

  /**
   * This method enables the emitter.
   *
   * @return {Emitter} Returns this.
   */
  Emitter.prototype.enable = function () {
    this._enabled = true;

    return this;
  };

  /**
   * Version:
   */
  Emitter.version = '3.1.1';

  // Export:
  if (true) {
    if (typeof module !== 'undefined' && module.exports) exports = module.exports = Emitter;
    exports.Emitter = Emitter;
  } else if (typeof define === 'function' && define.amd) define('emmett', [], function () {
    return Emitter;
  });else this.Emitter = Emitter;
}).call(this);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(101),
    mapCacheDelete = __webpack_require__(102),
    mapCacheGet = __webpack_require__(103),
    mapCacheHas = __webpack_require__(104),
    mapCacheSet = __webpack_require__(105);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ },
/* 21 */
/***/ function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(63),
    baseKeys = __webpack_require__(73),
    isArrayLike = __webpack_require__(40);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Baobab Cursors
 * ===============
 *
 * Cursors created by selecting some data within a Baobab tree.
 */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(_x3, _x4, _x5) {
  var _again = true;_function: while (_again) {
    var object = _x3,
        property = _x4,
        receiver = _x5;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x3 = parent;_x4 = property;_x5 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _emmett = __webpack_require__(18);

var _emmett2 = _interopRequireDefault(_emmett);

var _monkey = __webpack_require__(9);

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

var _helpers = __webpack_require__(5);

/**
 * Traversal helper function for dynamic cursors. Will throw a legible error
 * if traversal is not possible.
 *
 * @param {string} method     - The method name, to create a correct error msg.
 * @param {array}  solvedPath - The cursor's solved path.
 */
function checkPossibilityOfDynamicTraversal(method, solvedPath) {
  if (!solvedPath) throw (0, _helpers.makeError)('Baobab.Cursor.' + method + ': ' + ('cannot use ' + method + ' on an unresolved dynamic path.'), { path: solvedPath });
}

/**
 * Cursor class
 *
 * @constructor
 * @param {Baobab} tree   - The cursor's root.
 * @param {array}  path   - The cursor's path in the tree.
 * @param {string} hash   - The path's hash computed ahead by the tree.
 */

var Cursor = function (_Emitter) {
  _inherits(Cursor, _Emitter);

  function Cursor(tree, path, hash) {
    var _this = this;

    _classCallCheck(this, Cursor);

    _get(Object.getPrototypeOf(Cursor.prototype), 'constructor', this).call(this);

    // If no path were to be provided, we fallback to an empty path (root)
    path = path || [];

    // Privates
    this._identity = '[object Cursor]';
    this._archive = null;

    // Properties
    this.tree = tree;
    this.path = path;
    this.hash = hash;

    // State
    this.state = {
      killed: false,
      recording: false,
      undoing: false
    };

    // Checking whether the given path is dynamic or not
    this._dynamicPath = _type2['default'].dynamicPath(this.path);

    // Checking whether the given path will meet a monkey
    this._monkeyPath = _type2['default'].monkeyPath(this.tree._monkeys, this.path);

    if (!this._dynamicPath) this.solvedPath = this.path;else this.solvedPath = (0, _helpers.getIn)(this.tree._data, this.path).solvedPath;

    /**
     * Listener bound to the tree's writes so that cursors with dynamic paths
     * may update their solved path correctly.
     *
     * @param {object} event - The event fired by the tree.
     */
    this._writeHandler = function (_ref) {
      var data = _ref.data;

      if (_this.state.killed || !(0, _helpers.solveUpdate)([data.path], _this._getComparedPaths())) return;

      _this.solvedPath = (0, _helpers.getIn)(_this.tree._data, _this.path).solvedPath;
    };

    /**
     * Function in charge of actually trigger the cursor's updates and
     * deal with the archived records.
     *
     * @note: probably should wrap the current solvedPath in closure to avoid
     * for tricky cases where it would fail.
     *
     * @param {mixed} previousData - the tree's previous data.
     */
    var fireUpdate = function fireUpdate(previousData) {
      var self = _this;

      var eventData = Object.defineProperties({}, {
        previousData: {
          get: function get() {
            return (0, _helpers.getIn)(previousData, self.solvedPath).data;
          },
          configurable: true,
          enumerable: true
        },
        currentData: {
          get: function get() {
            return self.get();
          },
          configurable: true,
          enumerable: true
        }
      });

      if (_this.state.recording && !_this.state.undoing) _this.archive.add(eventData.previousData);

      _this.state.undoing = false;

      return _this.emit('update', eventData);
    };

    /**
     * Listener bound to the tree's updates and determining whether the
     * cursor is affected and should react accordingly.
     *
     * Note that this listener is lazily bound to the tree to be sure
     * one wouldn't leak listeners when only creating cursors for convenience
     * and not to listen to updates specifically.
     *
     * @param {object} event - The event fired by the tree.
     */
    this._updateHandler = function (event) {
      if (_this.state.killed) return;

      var _event$data = event.data;
      var paths = _event$data.paths;
      var previousData = _event$data.previousData;
      var update = fireUpdate.bind(_this, previousData);
      var comparedPaths = _this._getComparedPaths();

      if ((0, _helpers.solveUpdate)(paths, comparedPaths)) return update();
    };

    // Lazy binding
    var bound = false;
    this._lazyBind = function () {
      if (bound) return;

      bound = true;

      if (_this._dynamicPath) _this.tree.on('write', _this._writeHandler);

      return _this.tree.on('update', _this._updateHandler);
    };

    // If the path is dynamic, we actually need to listen to the tree
    if (this._dynamicPath) {
      this._lazyBind();
    } else {

      // Overriding the emitter `on` and `once` methods
      this.on = (0, _helpers.before)(this._lazyBind, this.on.bind(this));
      this.once = (0, _helpers.before)(this._lazyBind, this.once.bind(this));
    }
  }

  /**
   * Method used to allow iterating over cursors containing list-type data.
   *
   * e.g. for(let i of cursor) { ... }
   *
   * @returns {object} -  Each item sequentially.
   */

  /**
   * Internal helpers
   * -----------------
   */

  /**
   * Method returning the paths of the tree watched over by the cursor and that
   * should be taken into account when solving a potential update.
   *
   * @return {array} - Array of paths to compare with a given update.
   */

  _createClass(Cursor, [{
    key: '_getComparedPaths',
    value: function _getComparedPaths() {

      // Checking whether we should keep track of some dependencies
      var additionalPaths = this._monkeyPath ? (0, _helpers.getIn)(this.tree._monkeys, this._monkeyPath).data.relatedPaths() : [];

      return [this.solvedPath].concat(additionalPaths);
    }

    /**
     * Predicates
     * -----------
     */

    /**
     * Method returning whether the cursor is at root level.
     *
     * @return {boolean} - Is the cursor the root?
     */
  }, {
    key: 'isRoot',
    value: function isRoot() {
      return !this.path.length;
    }

    /**
     * Method returning whether the cursor is at leaf level.
     *
     * @return {boolean} - Is the cursor a leaf?
     */
  }, {
    key: 'isLeaf',
    value: function isLeaf() {
      return _type2['default'].primitive(this._get().data);
    }

    /**
     * Method returning whether the cursor is at branch level.
     *
     * @return {boolean} - Is the cursor a branch?
     */
  }, {
    key: 'isBranch',
    value: function isBranch() {
      return !this.isRoot() && !this.isLeaf();
    }

    /**
     * Traversal Methods
     * ------------------
     */

    /**
     * Method returning the root cursor.
     *
     * @return {Baobab} - The root cursor.
     */
  }, {
    key: 'root',
    value: function root() {
      return this.tree.select();
    }

    /**
     * Method selecting a subpath as a new cursor.
     *
     * Arity (1):
     * @param  {path} path    - The path to select.
     *
     * Arity (*):
     * @param  {...step} path - The path to select.
     *
     * @return {Cursor}       - The created cursor.
     */
  }, {
    key: 'select',
    value: function select(path) {
      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);

      return this.tree.select(this.path.concat(path));
    }

    /**
     * Method returning the parent node of the cursor or else `null` if the
     * cursor is already at root level.
     *
     * @return {Baobab} - The parent cursor.
     */
  }, {
    key: 'up',
    value: function up() {
      if (!this.isRoot()) return this.tree.select(this.path.slice(0, -1));

      return null;
    }

    /**
     * Method returning the child node of the cursor.
     *
     * @return {Baobab} - The child cursor.
     */
  }, {
    key: 'down',
    value: function down() {
      checkPossibilityOfDynamicTraversal('down', this.solvedPath);

      if (!(this._get().data instanceof Array)) throw Error('Baobab.Cursor.down: cannot go down on a non-list type.');

      return this.tree.select(this.solvedPath.concat(0));
    }

    /**
     * Method returning the left sibling node of the cursor if this one is
     * pointing at a list. Returns `null` if this cursor is already leftmost.
     *
     * @return {Baobab} - The left sibling cursor.
     */
  }, {
    key: 'left',
    value: function left() {
      checkPossibilityOfDynamicTraversal('left', this.solvedPath);

      var last = +this.solvedPath[this.solvedPath.length - 1];

      if (isNaN(last)) throw Error('Baobab.Cursor.left: cannot go left on a non-list type.');

      return last ? this.tree.select(this.solvedPath.slice(0, -1).concat(last - 1)) : null;
    }

    /**
     * Method returning the right sibling node of the cursor if this one is
     * pointing at a list. Returns `null` if this cursor is already rightmost.
     *
     * @return {Baobab} - The right sibling cursor.
     */
  }, {
    key: 'right',
    value: function right() {
      checkPossibilityOfDynamicTraversal('right', this.solvedPath);

      var last = +this.solvedPath[this.solvedPath.length - 1];

      if (isNaN(last)) throw Error('Baobab.Cursor.right: cannot go right on a non-list type.');

      if (last + 1 === this.up()._get().data.length) return null;

      return this.tree.select(this.solvedPath.slice(0, -1).concat(last + 1));
    }

    /**
     * Method returning the leftmost sibling node of the cursor if this one is
     * pointing at a list.
     *
     * @return {Baobab} - The leftmost sibling cursor.
     */
  }, {
    key: 'leftmost',
    value: function leftmost() {
      checkPossibilityOfDynamicTraversal('leftmost', this.solvedPath);

      var last = +this.solvedPath[this.solvedPath.length - 1];

      if (isNaN(last)) throw Error('Baobab.Cursor.leftmost: cannot go left on a non-list type.');

      return this.tree.select(this.solvedPath.slice(0, -1).concat(0));
    }

    /**
     * Method returning the rightmost sibling node of the cursor if this one is
     * pointing at a list.
     *
     * @return {Baobab} - The rightmost sibling cursor.
     */
  }, {
    key: 'rightmost',
    value: function rightmost() {
      checkPossibilityOfDynamicTraversal('rightmost', this.solvedPath);

      var last = +this.solvedPath[this.solvedPath.length - 1];

      if (isNaN(last)) throw Error('Baobab.Cursor.rightmost: cannot go right on a non-list type.');

      var list = this.up()._get().data;

      return this.tree.select(this.solvedPath.slice(0, -1).concat(list.length - 1));
    }

    /**
     * Method mapping the children nodes of the cursor.
     *
     * @param  {function} fn      - The function to map.
     * @param  {object}   [scope] - An optional scope.
     * @return {array}            - The resultant array.
     */
  }, {
    key: 'map',
    value: function map(fn, scope) {
      checkPossibilityOfDynamicTraversal('map', this.solvedPath);

      var array = this._get().data,
          l = arguments.length;

      if (!_type2['default'].array(array)) throw Error('baobab.Cursor.map: cannot map a non-list type.');

      return array.map(function (item, i) {
        return fn.call(l > 1 ? scope : this, this.select(i), i, array);
      }, this);
    }

    /**
     * Getter Methods
     * ---------------
     */

    /**
     * Internal get method. Basically contains the main body of the `get` method
     * without the event emitting. This is sometimes needed not to fire useless
     * events.
     *
     * @param  {path}   [path=[]]       - Path to get in the tree.
     * @return {object} info            - The resultant information.
     * @return {mixed}  info.data       - Data at path.
     * @return {array}  info.solvedPath - The path solved when getting.
     */
  }, {
    key: '_get',
    value: function _get() {
      var path = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.getters: invalid path.', { path: path });

      if (!this.solvedPath) return { data: undefined, solvedPath: null, exists: false };

      return (0, _helpers.getIn)(this.tree._data, this.solvedPath.concat(path));
    }

    /**
     * Method used to check whether a certain path exists in the tree starting
     * from the current cursor.
     *
     * Arity (1):
     * @param  {path}   path           - Path to check in the tree.
     *
     * Arity (2):
     * @param {..step}  path           - Path to check in the tree.
     *
     * @return {boolean}               - Does the given path exists?
     */
  }, {
    key: 'exists',
    value: function exists(path) {
      path = (0, _helpers.coercePath)(path);

      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);

      return this._get(path).exists;
    }

    /**
     * Method used to get data from the tree. Will fire a `get` event from the
     * tree so that the user may sometimes react upon it to fetch data, for
     * instance.
     *
     * Arity (1):
     * @param  {path}   path           - Path to get in the tree.
     *
     * Arity (2):
     * @param  {..step} path           - Path to get in the tree.
     *
     * @return {mixed}                 - Data at path.
     */
  }, {
    key: 'get',
    value: function get(path) {
      path = (0, _helpers.coercePath)(path);

      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);

      var _get2 = this._get(path);

      var data = _get2.data;
      var solvedPath = _get2.solvedPath;

      // Emitting the event
      this.tree.emit('get', { data: data, solvedPath: solvedPath, path: this.path.concat(path) });

      return data;
    }

    /**
     * Method used to shallow clone data from the tree.
     *
     * Arity (1):
     * @param  {path}   path           - Path to get in the tree.
     *
     * Arity (2):
     * @param  {..step} path           - Path to get in the tree.
     *
     * @return {mixed}                 - Cloned data at path.
     */
  }, {
    key: 'clone',
    value: function clone() {
      var data = this.get.apply(this, arguments);

      return (0, _helpers.shallowClone)(data);
    }

    /**
     * Method used to deep clone data from the tree.
     *
     * Arity (1):
     * @param  {path}   path           - Path to get in the tree.
     *
     * Arity (2):
     * @param  {..step} path           - Path to get in the tree.
     *
     * @return {mixed}                 - Cloned data at path.
     */
  }, {
    key: 'deepClone',
    value: function deepClone() {
      var data = this.get.apply(this, arguments);

      return (0, _helpers.deepClone)(data);
    }

    /**
     * Method used to return raw data from the tree, by carefully avoiding
     * computed one.
     *
     * @todo: should be more performant as the cloning should happen as well as
     * when dropping computed data.
     *
     * Arity (1):
     * @param  {path}   path           - Path to serialize in the tree.
     *
     * Arity (2):
     * @param  {..step} path           - Path to serialize in the tree.
     *
     * @return {mixed}                 - The retrieved raw data.
     */
  }, {
    key: 'serialize',
    value: function serialize(path) {
      path = (0, _helpers.coercePath)(path);

      if (arguments.length > 1) path = (0, _helpers.arrayFrom)(arguments);

      if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.getters: invalid path.', { path: path });

      if (!this.solvedPath) return undefined;

      var fullPath = this.solvedPath.concat(path);

      var data = (0, _helpers.deepClone)((0, _helpers.getIn)(this.tree._data, fullPath).data),
          monkeys = (0, _helpers.getIn)(this.tree._monkeys, fullPath).data;

      var dropComputedData = function dropComputedData(d, m) {
        if (!_type2['default'].object(m) || !_type2['default'].object(d)) return;

        for (var k in m) {
          if (m[k] instanceof _monkey.Monkey) delete d[k];else dropComputedData(d[k], m[k]);
        }
      };

      dropComputedData(data, monkeys);
      return data;
    }

    /**
     * Method used to project some of the data at cursor onto a map or a list.
     *
     * @param  {object|array} projection - The projection's formal definition.
     * @return {object|array}            - The resultant map/list.
     */
  }, {
    key: 'project',
    value: function project(projection) {
      if (_type2['default'].object(projection)) {
        var data = {};

        for (var k in projection) {
          data[k] = this.get(projection[k]);
        }return data;
      } else if (_type2['default'].array(projection)) {
        var data = [];

        for (var i = 0, l = projection.length; i < l; i++) {
          data.push(this.get(projection[i]));
        }return data;
      }

      throw (0, _helpers.makeError)('Baobab.Cursor.project: wrong projection.', { projection: projection });
    }

    /**
     * History Methods
     * ----------------
     */

    /**
     * Methods starting to record the cursor's successive states.
     *
     * @param  {integer} [maxRecords] - Maximum records to keep in memory. Note
     *                                  that if no number is provided, the cursor
     *                                  will keep everything.
     * @return {Cursor}               - The cursor instance for chaining purposes.
     */
  }, {
    key: 'startRecording',
    value: function startRecording(maxRecords) {
      maxRecords = maxRecords || Infinity;

      if (maxRecords < 1) throw (0, _helpers.makeError)('Baobab.Cursor.startRecording: invalid max records.', {
        value: maxRecords
      });

      this.state.recording = true;

      if (this.archive) return this;

      // Lazy binding
      this._lazyBind();

      this.archive = new _helpers.Archive(maxRecords);
      return this;
    }

    /**
     * Methods stopping to record the cursor's successive states.
     *
     * @return {Cursor} - The cursor instance for chaining purposes.
     */
  }, {
    key: 'stopRecording',
    value: function stopRecording() {
      this.state.recording = false;
      return this;
    }

    /**
     * Methods undoing n steps of the cursor's recorded states.
     *
     * @param  {integer} [steps=1] - The number of steps to rollback.
     * @return {Cursor}            - The cursor instance for chaining purposes.
     */
  }, {
    key: 'undo',
    value: function undo() {
      var steps = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

      if (!this.state.recording) throw new Error('Baobab.Cursor.undo: cursor is not recording.');

      var record = this.archive.back(steps);

      if (!record) throw Error('Baobab.Cursor.undo: cannot find a relevant record.');

      this.state.undoing = true;
      this.set(record);

      return this;
    }

    /**
     * Methods returning whether the cursor has a recorded history.
     *
     * @return {boolean} - `true` if the cursor has a recorded history?
     */
  }, {
    key: 'hasHistory',
    value: function hasHistory() {
      return !!(this.archive && this.archive.get().length);
    }

    /**
     * Methods returning the cursor's history.
     *
     * @return {array} - The cursor's history.
     */
  }, {
    key: 'getHistory',
    value: function getHistory() {
      return this.archive ? this.archive.get() : [];
    }

    /**
     * Methods clearing the cursor's history.
     *
     * @return {Cursor} - The cursor instance for chaining purposes.
     */
  }, {
    key: 'clearHistory',
    value: function clearHistory() {
      if (this.archive) this.archive.clear();
      return this;
    }

    /**
     * Releasing
     * ----------
     */

    /**
     * Methods releasing the cursor from memory.
     */
  }, {
    key: 'release',
    value: function release() {

      // Removing listeners on parent
      if (this._dynamicPath) this.tree.off('write', this._writeHandler);

      this.tree.off('update', this._updateHandler);

      // Unsubscribe from the parent
      if (this.hash) delete this.tree._cursors[this.hash];

      // Dereferencing
      delete this.tree;
      delete this.path;
      delete this.solvedPath;
      delete this.archive;

      // Killing emitter
      this.kill();
      this.state.killed = true;
    }

    /**
     * Output
     * -------
     */

    /**
     * Overriding the `toJSON` method for convenient use with JSON.stringify.
     *
     * @return {mixed} - Data at cursor.
     */
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.serialize();
    }

    /**
     * Overriding the `toString` method for debugging purposes.
     *
     * @return {string} - The cursor's identity.
     */
  }, {
    key: 'toString',
    value: function toString() {
      return this._identity;
    }
  }]);

  return Cursor;
}(_emmett2['default']);

exports['default'] = Cursor;
if (typeof Symbol === 'function' && typeof Symbol.iterator !== 'undefined') {
  Cursor.prototype[Symbol.iterator] = function () {
    var array = this._get().data;

    if (!_type2['default'].array(array)) throw Error('baobab.Cursor.@@iterate: cannot iterate a non-list type.');

    var i = 0;

    var cursor = this,
        length = array.length;

    return {
      next: function next() {
        if (i < length) {
          return {
            value: cursor.select(i++)
          };
        }

        return {
          done: true
        };
      }
    };
  };
}

/**
 * Setter Methods
 * ---------------
 *
 * Those methods are dynamically assigned to the class for DRY reasons.
 */

// Not using a Set so that ES5 consumers don't pay a bundle size price
var INTRANSITIVE_SETTERS = {
  unset: true,
  pop: true,
  shift: true
};

/**
 * Function creating a setter method for the Cursor class.
 *
 * @param {string}   name          - the method's name.
 * @param {function} [typeChecker] - a function checking that the given value is
 *                                   valid for the given operation.
 */
function makeSetter(name, typeChecker) {

  /**
   * Binding a setter method to the Cursor class and having the following
   * definition.
   *
   * Note: this is not really possible to make those setters variadic because
   * it would create an impossible polymorphism with path.
   *
   * @todo: perform value validation elsewhere so that tree.update can
   * beneficiate from it.
   *
   * Arity (1):
   * @param  {mixed} value - New value to set at cursor's path.
   *
   * Arity (2):
   * @param  {path}  path  - Subpath to update starting from cursor's.
   * @param  {mixed} value - New value to set.
   *
   * @return {mixed}       - Data at path.
   */
  Cursor.prototype[name] = function (path, value) {

    // We should warn the user if he applies to many arguments to the function
    if (arguments.length > 2) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': too many arguments.');

    // Handling arities
    if (arguments.length === 1 && !INTRANSITIVE_SETTERS[name]) {
      value = path;
      path = [];
    }

    // Coerce path
    path = (0, _helpers.coercePath)(path);

    // Checking the path's validity
    if (!_type2['default'].path(path)) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid path.', { path: path });

    // Checking the value's validity
    if (typeChecker && !typeChecker(value)) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': invalid value.', { path: path, value: value });

    // Checking the solvability of the cursor's dynamic path
    if (!this.solvedPath) throw (0, _helpers.makeError)('Baobab.Cursor.' + name + ': the dynamic path of the cursor cannot be solved.', { path: this.path });

    var fullPath = this.solvedPath.concat(path);

    // Filing the update to the tree
    return this.tree.update(fullPath, {
      type: name,
      value: value
    });
  };
}

/**
 * Making the necessary setters.
 */
makeSetter('set');
makeSetter('unset');
makeSetter('apply', _type2['default']['function']);
makeSetter('push');
makeSetter('concat', _type2['default'].array);
makeSetter('unshift');
makeSetter('pop');
makeSetter('shift');
makeSetter('splice', _type2['default'].splicer);
makeSetter('merge', _type2['default'].object);
makeSetter('deepMerge', _type2['default'].object);
module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Baobab Update
 * ==============
 *
 * The tree's update scheme.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = update;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

var _helpers = __webpack_require__(5);

function err(operation, expectedTarget, path) {
  return (0, _helpers.makeError)('Baobab.update: cannot apply the "' + operation + '" on ' + ('a non ' + expectedTarget + ' (path: /' + path.join('/') + ').'), { path: path });
}

/**
 * Function aiming at applying a single update operation on the given tree's
 * data.
 *
 * @param  {mixed}  data      - The tree's data.
 * @param  {path}   path      - Path of the update.
 * @param  {object} operation - The operation to apply.
 * @param  {object} [opts]    - Optional options.
 * @return {mixed}            - Both the new tree's data and the updated node.
 */

function update(data, path, operation) {
  var opts = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
  var operationType = operation.type;
  var value = operation.value;
  var _operation$options = operation.options;
  var operationOptions = _operation$options === undefined ? {} : _operation$options;

  // Dummy root, so we can shift and alter the root
  var dummy = { root: data },
      dummyPath = ['root'].concat(_toConsumableArray(path)),
      currentPath = [];

  // Walking the path
  var p = dummy,
      i = undefined,
      l = undefined,
      s = undefined;

  for (i = 0, l = dummyPath.length; i < l; i++) {

    // Current item's reference is therefore p[s]
    // The reason why we don't create a variable here for convenience
    // is because we actually need to mutate the reference.
    s = dummyPath[i];

    // Updating the path
    if (i > 0) currentPath.push(s);

    // If we reached the end of the path, we apply the operation
    if (i === l - 1) {

      /**
       * Set
       */
      if (operationType === 'set') {

        // Purity check
        if (opts.pure && p[s] === value) return { node: p[s] };

        if (_type2['default'].lazyGetter(p, s)) {
          Object.defineProperty(p, s, {
            value: value,
            enumerable: true,
            configurable: true
          });
        } else if (opts.persistent && !operationOptions.mutableLeaf) {
          p[s] = (0, _helpers.shallowClone)(value);
        } else {
          p[s] = value;
        }
      }

      /**
       * Monkey
       */
      else if (operationType === 'monkey') {
          Object.defineProperty(p, s, {
            get: value,
            enumerable: true,
            configurable: true
          });
        }

        /**
         * Apply
         */
        else if (operationType === 'apply') {
            var result = value(p[s]);

            // Purity check
            if (opts.pure && p[s] === result) return { node: p[s] };

            if (_type2['default'].lazyGetter(p, s)) {
              Object.defineProperty(p, s, {
                value: result,
                enumerable: true,
                configurable: true
              });
            } else if (opts.persistent) {
              p[s] = (0, _helpers.shallowClone)(result);
            } else {
              p[s] = result;
            }
          }

          /**
           * Push
           */
          else if (operationType === 'push') {
              if (!_type2['default'].array(p[s])) throw err('push', 'array', currentPath);

              if (opts.persistent) p[s] = p[s].concat([value]);else p[s].push(value);
            }

            /**
             * Unshift
             */
            else if (operationType === 'unshift') {
                if (!_type2['default'].array(p[s])) throw err('unshift', 'array', currentPath);

                if (opts.persistent) p[s] = [value].concat(p[s]);else p[s].unshift(value);
              }

              /**
               * Concat
               */
              else if (operationType === 'concat') {
                  if (!_type2['default'].array(p[s])) throw err('concat', 'array', currentPath);

                  if (opts.persistent) p[s] = p[s].concat(value);else p[s].push.apply(p[s], value);
                }

                /**
                 * Splice
                 */
                else if (operationType === 'splice') {
                    if (!_type2['default'].array(p[s])) throw err('splice', 'array', currentPath);

                    if (opts.persistent) p[s] = _helpers.splice.apply(null, [p[s]].concat(value));else p[s].splice.apply(p[s], value);
                  }

                  /**
                   * Pop
                   */
                  else if (operationType === 'pop') {
                      if (!_type2['default'].array(p[s])) throw err('pop', 'array', currentPath);

                      if (opts.persistent) p[s] = (0, _helpers.splice)(p[s], -1, 1);else p[s].pop();
                    }

                    /**
                     * Shift
                     */
                    else if (operationType === 'shift') {
                        if (!_type2['default'].array(p[s])) throw err('shift', 'array', currentPath);

                        if (opts.persistent) p[s] = (0, _helpers.splice)(p[s], 0, 1);else p[s].shift();
                      }

                      /**
                       * Unset
                       */
                      else if (operationType === 'unset') {
                          if (_type2['default'].object(p)) delete p[s];else if (_type2['default'].array(p)) p.splice(s, 1);
                        }

                        /**
                         * Merge
                         */
                        else if (operationType === 'merge') {
                            if (!_type2['default'].object(p[s])) throw err('merge', 'object', currentPath);

                            if (opts.persistent) p[s] = (0, _helpers.shallowMerge)({}, p[s], value);else p[s] = (0, _helpers.shallowMerge)(p[s], value);
                          }

                          /**
                           * Deep merge
                           */
                          else if (operationType === 'deepMerge') {
                              if (!_type2['default'].object(p[s])) throw err('deepMerge', 'object', currentPath);

                              if (opts.persistent) p[s] = (0, _helpers.deepMerge)({}, p[s], value);else p[s] = (0, _helpers.deepMerge)(p[s], value);
                            }

      // Deep freezing the resulting value
      if (opts.immutable && !operationOptions.mutableLeaf) (0, _helpers.deepFreeze)(p);

      break;
    }

    // If we reached a leaf, we override by setting an empty object
    else if (_type2['default'].primitive(p[s])) {
        p[s] = {};
      }

      // Else, we shift the reference and continue the path
      else if (opts.persistent) {
          p[s] = (0, _helpers.shallowClone)(p[s]);
        }

    // Should we freeze the current step before continuing?
    if (opts.immutable && l > 0) (0, _helpers.freeze)(p);

    p = p[s];
  }

  // If we are updating a dynamic node, we need not return the affected node
  if (_type2['default'].lazyGetter(p, s)) return { data: dummy.root };

  // Returning new data object
  return { data: dummy.root, node: p[s] };
}

module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(10),
    stackClear = __webpack_require__(113),
    stackDelete = __webpack_require__(114),
    stackGet = __webpack_require__(115),
    stackHas = __webpack_require__(116),
    stackSet = __webpack_require__(117);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(30),
    isKey = __webpack_require__(13),
    toKey = __webpack_require__(15);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(68),
    isObject = __webpack_require__(7),
    isObjectLike = __webpack_require__(16);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

module.exports = baseIsEqual;

/***/ },
/* 29 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(4),
    stringToPath = __webpack_require__(118);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

module.exports = castPath;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(60),
    arraySome = __webpack_require__(65);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          return seen.add(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ },
/* 33 */
/***/ function(module, exports) {

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

module.exports = isHostObject;

/***/ },
/* 34 */
/***/ function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

/***/ },
/* 36 */
/***/ function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

module.exports = matchesStrictComparable;

/***/ },
/* 37 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ },
/* 38 */
/***/ function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(122);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

module.exports = isArguments;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(41),
    isLength = __webpack_require__(21);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

module.exports = isFunction;

/***/ },
/* 42 */
/***/ function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_baobab__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_baobab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_baobab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_connection__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_ui__ = __webpack_require__(52);





var state = new __WEBPACK_IMPORTED_MODULE_0_baobab___default.a();

var handleMessage = function handleMessage(msg) {
  console.log('handleMessage', msg);
  switch (msg.type) {
    case 'state':
      return state.set(msg.data);
    case 'update':
      return state.select(msg.data.transaction[0].path).set(msg.data.transaction[0].value);
    default:
      return console.warn('No handler for msg type: ', msg.type, msg.data);
  }
};

var connection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_connection__["a" /* connect */])(handleMessage);
window.connection = connection; // Useful for debugging

var handleDispatch = function handleDispatch(type, data) {
  console.log('DISPATCH', type, data);
  connection.send(type, data);
};

state.on('update', function () {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_ui__["a" /* render */])(state.get(), handleDispatch);
});

if (false) {
  module.hot.accept();
}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_values__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ServiceList__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Volume__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Power__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Stack__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_css__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__styles_css__);










/* harmony default export */ exports["a"] = function (_ref) {
  var state = _ref.state;
  var dispatch = _ref.dispatch;

  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
    'div',
    { className: 'app' },
    __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
      __WEBPACK_IMPORTED_MODULE_5__Stack__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_4__Power__["a" /* default */], { onPower: function onPower() {
          return dispatch('power');
        }, isOn: state.power }),
      __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_3__Volume__["a" /* default */], { value: state.volume, onChange: function onChange(vol) {
          return dispatch('volume', vol);
        } })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__ServiceList__["a" /* default */], {
      services: __WEBPACK_IMPORTED_MODULE_1_lodash_values___default()(state.services),
      currentService: state.currentService,
      onServiceSelect: function onServiceSelect(id) {
        return dispatch('serviceSelect', id);
      } })
  );
};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_ic_power_settings_new_black_24px_svg__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_ic_power_settings_new_black_24px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_ic_power_settings_new_black_24px_svg__);




var iconFor = function iconFor(name) {
  return { __html: __WEBPACK_IMPORTED_MODULE_1__assets_ic_power_settings_new_black_24px_svg___default.a };
};

/* harmony default export */ exports["a"] = function (_ref) {
  var name = _ref.name;
  var _ref$className = _ref.className;
  var className = _ref$className === undefined ? '' : _ref$className;

  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement('div', { style: 'line-height: 0', className: 'icon ' + className, dangerouslySetInnerHTML: iconFor(name) });
};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);






/* harmony default export */ exports["a"] = function (_ref) {
  var onPower = _ref.onPower;
  var _ref$isOn = _ref.isOn;
  var isOn = _ref$isOn === undefined ? false : _ref$isOn;

  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
    'button',
    { className: 'power ' + (isOn === true ? 'is-on' : 'is-off'), onClick: onPower },
    __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], { className: 'power-icon' })
  );
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Service = function Service(_ref) {
  var title = _ref.title;
  var logos = _ref.logos;
  var _ref$active = _ref.active;
  var active = _ref$active === undefined ? false : _ref$active;
  var onClick = _ref.onClick;

  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
    'div',
    { className: 'service-list-service ' + (active ? 'is-active' : 'is-inactive'), onClick: onClick },
    __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement('img', { className: 'service-list-image service-list-image-active', src: logos.active, title: title }),
    __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement('img', { className: 'service-list-image service-list-image-inactive', src: logos.inactive, title: title })
  );
};

/* harmony default export */ exports["a"] = function (_ref2) {
  var services = _ref2.services;
  var _ref2$currentService = _ref2.currentService;
  var currentService = _ref2$currentService === undefined ? '' : _ref2$currentService;
  var onServiceSelect = _ref2.onServiceSelect;

  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
    'ul',
    { className: 'service-list' },
    services.map(function (s) {
      return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
        'li',
        { key: s.id },
        __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(Service, _extends({}, s, { active: currentService === s.id, onClick: onServiceSelect.bind(null, s.id) }))
      );
    })
  );
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);




/* harmony default export */ exports["a"] = function (_ref) {
  var children = _ref.children;

  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
    'div',
    { className: 'stack-layout' },
    children
  );
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_times__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_times___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_times__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);





var Step = function Step(_ref) {
  var _ref$active = _ref.active;
  var active = _ref$active === undefined ? false : _ref$active;
  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement('div', { className: 'step ' + (active === true ? 'is-active' : 'is-inactive') });
};

/* harmony default export */ exports["a"] = function (_ref2) {
  var _ref2$min = _ref2.min;
  var min = _ref2$min === undefined ? 0 : _ref2$min;
  var _ref2$max = _ref2.max;
  var max = _ref2$max === undefined ? 100 : _ref2$max;
  var _ref2$step = _ref2.step;
  var step = _ref2$step === undefined ? 5 : _ref2$step;
  var _ref2$value = _ref2.value;
  var value = _ref2$value === undefined ? 0 : _ref2$value;
  var onChange = _ref2.onChange;

  var numItems = (max - min) / step;
  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
    'ul',
    { className: 'stepped-range' },
    __WEBPACK_IMPORTED_MODULE_1_lodash_times___default()(numItems, function (index) {
      var stepValue = index * step;
      var eventObject = { target: { value: stepValue.toString() } };
      return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
        'li',
        {
          key: index,
          onClick: function onClick() {
            return onChange(eventObject);
          },
          className: 'stepped-range--step-wrapper' },
        __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(Step, { active: stepValue <= value })
      );
    })
  );
};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SteppedRange__ = __webpack_require__(49);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var InputRange = function InputRange(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement('input', _extends({ type: 'range' }, props));
};

var Volume = function (_React$Component) {
  _inherits(Volume, _React$Component);

  function Volume(props) {
    _classCallCheck(this, Volume);

    var _this = _possibleConstructorReturn(this, (Volume.__proto__ || Object.getPrototypeOf(Volume)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(Volume, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var _this2 = this;

      var value = _ref.value;
      var onChange = _ref.onChange;

      var handleChange = function handleChange(evt) {
        var value = parseInt(evt.target.value, 10);
        _this2.setState({
          value: value
        });
        onChange(value);
      };
      return __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(
        'div',
        { className: 'volume' },
        __WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_1__SteppedRange__["a" /* default */], { min: '0', max: '100', step: '5', value: this.state.value, onChange: handleChange })
      );
    }
  }]);

  return Volume;
}(__WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].Component);

/* harmony default export */ exports["a"] = Volume;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ReconnectingWebSocket__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ReconnectingWebSocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ReconnectingWebSocket__);
/* harmony export (immutable) */ exports["a"] = connect;


var handleMessage = function handleMessage(callback) {
  return function (evt) {
    var data = evt.data;
    if (!data) {
      return;
    }
    try {
      callback(JSON.parse(data));
    } catch (e) {
      console.error('Parse error', e);
    }
  };
};

function connect(onMessage) {
  var ws = new __WEBPACK_IMPORTED_MODULE_0_ReconnectingWebSocket___default.a(window.location.origin.replace(window.location.protocol, 'ws://'));
  var handler = handleMessage(onMessage);
  ws.addEventListener('message', handler);

  return {
    destroy: function destroy() {
      ws.removeEventListener('message', handler);
      ws.close();
    },
    send: function send(type, data) {
      ws.send(JSON.stringify({
        type: type,
        data: data
      }));
    }
  };
}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__(44);
/* harmony export (immutable) */ exports["a"] = render;





function render(state, dispatch) {
  __WEBPACK_IMPORTED_MODULE_1_react_dom__["a" /* default */].render(__WEBPACK_IMPORTED_MODULE_0_react__["a" /* default */].createElement(__WEBPACK_IMPORTED_MODULE_2__components_App__["a" /* default */], { state: state, dispatch: dispatch }), document.getElementById('container'));
}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// MIT License:
//
// Copyright (c) 2010-2012, Joe Walnes
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * This behaves like a WebSocket in every way, except if it fails to connect,
 * or it gets disconnected, it will repeatedly poll until it successfully connects
 * again.
 *
 * It is API compatible, so when you have:
 *   ws = new WebSocket('ws://....');
 * you can replace with:
 *   ws = new ReconnectingWebSocket('ws://....');
 *
 * The event stream will typically look like:
 *  onconnecting
 *  onopen
 *  onmessage
 *  onmessage
 *  onclose // lost connection
 *  onconnecting
 *  onopen  // sometime later...
 *  onmessage
 *  onmessage
 *  etc...
 *
 * It is API compatible with the standard WebSocket API, apart from the following members:
 *
 * - `bufferedAmount`
 * - `extensions`
 * - `binaryType`
 *
 * Latest version: https://github.com/joewalnes/reconnecting-websocket/
 * - Joe Walnes
 *
 * Syntax
 * ======
 * var socket = new ReconnectingWebSocket(url, protocols, options);
 *
 * Parameters
 * ==========
 * url - The url you are connecting to.
 * protocols - Optional string or array of protocols.
 * options - See below
 *
 * Options
 * =======
 * Options can either be passed upon instantiation or set after instantiation:
 *
 * var socket = new ReconnectingWebSocket(url, null, { debug: true, reconnectInterval: 4000 });
 *
 * or
 *
 * var socket = new ReconnectingWebSocket(url);
 * socket.debug = true;
 * socket.reconnectInterval = 4000;
 *
 * debug
 * - Whether this instance should log debug messages. Accepts true or false. Default: false.
 *
 * automaticOpen
 * - Whether or not the websocket should attempt to connect immediately upon instantiation. The socket can be manually opened or closed at any time using ws.open() and ws.close().
 *
 * reconnectInterval
 * - The number of milliseconds to delay before attempting to reconnect. Accepts integer. Default: 1000.
 *
 * maxReconnectInterval
 * - The maximum number of milliseconds to delay a reconnection attempt. Accepts integer. Default: 30000.
 *
 * reconnectDecay
 * - The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. Accepts integer or float. Default: 1.5.
 *
 * timeoutInterval
 * - The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. Accepts integer. Default: 2000.
 *
 */
(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        global.ReconnectingWebSocket = factory();
    }
})(this, function () {

    if (!('WebSocket' in window)) {
        return;
    }

    function ReconnectingWebSocket(url, protocols, options) {

        // Default settings
        var settings = {

            /** Whether this instance should log debug messages. */
            debug: false,

            /** Whether or not the websocket should attempt to connect immediately upon instantiation. */
            automaticOpen: true,

            /** The number of milliseconds to delay before attempting to reconnect. */
            reconnectInterval: 1000,
            /** The maximum number of milliseconds to delay a reconnection attempt. */
            maxReconnectInterval: 30000,
            /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
            reconnectDecay: 1.5,

            /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
            timeoutInterval: 2000,

            /** The maximum number of reconnection attempts to make. Unlimited if null. */
            maxReconnectAttempts: null,

            /** The binary type, possible values 'blob' or 'arraybuffer', default 'blob'. */
            binaryType: 'blob'
        };
        if (!options) {
            options = {};
        }

        // Overwrite and define settings with options if they exist.
        for (var key in settings) {
            if (typeof options[key] !== 'undefined') {
                this[key] = options[key];
            } else {
                this[key] = settings[key];
            }
        }

        // These should be treated as read-only properties

        /** The URL as resolved by the constructor. This is always an absolute URL. Read only. */
        this.url = url;

        /** The number of attempted reconnects since starting, or the last successful connection. Read only. */
        this.reconnectAttempts = 0;

        /**
         * The current state of the connection.
         * Can be one of: WebSocket.CONNECTING, WebSocket.OPEN, WebSocket.CLOSING, WebSocket.CLOSED
         * Read only.
         */
        this.readyState = WebSocket.CONNECTING;

        /**
         * A string indicating the name of the sub-protocol the server selected; this will be one of
         * the strings specified in the protocols parameter when creating the WebSocket object.
         * Read only.
         */
        this.protocol = null;

        // Private state variables

        var self = this;
        var ws;
        var forcedClose = false;
        var timedOut = false;
        var eventTarget = document.createElement('div');

        // Wire up "on*" properties as event handlers

        eventTarget.addEventListener('open', function (event) {
            self.onopen(event);
        });
        eventTarget.addEventListener('close', function (event) {
            self.onclose(event);
        });
        eventTarget.addEventListener('connecting', function (event) {
            self.onconnecting(event);
        });
        eventTarget.addEventListener('message', function (event) {
            self.onmessage(event);
        });
        eventTarget.addEventListener('error', function (event) {
            self.onerror(event);
        });

        // Expose the API required by EventTarget

        this.addEventListener = eventTarget.addEventListener.bind(eventTarget);
        this.removeEventListener = eventTarget.removeEventListener.bind(eventTarget);
        this.dispatchEvent = eventTarget.dispatchEvent.bind(eventTarget);

        /**
         * This function generates an event that is compatible with standard
         * compliant browsers and IE9 - IE11
         *
         * This will prevent the error:
         * Object doesn't support this action
         *
         * http://stackoverflow.com/questions/19345392/why-arent-my-parameters-getting-passed-through-to-a-dispatched-event/19345563#19345563
         * @param s String The name that the event should use
         * @param args Object an optional object that the event will use
         */
        function generateEvent(s, args) {
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(s, false, false, args);
            return evt;
        };

        this.open = function (reconnectAttempt) {
            ws = new WebSocket(self.url, protocols || []);
            ws.binaryType = this.binaryType;

            if (reconnectAttempt) {
                if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) {
                    return;
                }
            } else {
                eventTarget.dispatchEvent(generateEvent('connecting'));
                this.reconnectAttempts = 0;
            }

            if (self.debug || ReconnectingWebSocket.debugAll) {
                console.debug('ReconnectingWebSocket', 'attempt-connect', self.url);
            }

            var localWs = ws;
            var timeout = setTimeout(function () {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'connection-timeout', self.url);
                }
                timedOut = true;
                localWs.close();
                timedOut = false;
            }, self.timeoutInterval);

            ws.onopen = function (event) {
                clearTimeout(timeout);
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onopen', self.url);
                }
                self.protocol = ws.protocol;
                self.readyState = WebSocket.OPEN;
                self.reconnectAttempts = 0;
                var e = generateEvent('open');
                e.isReconnect = reconnectAttempt;
                reconnectAttempt = false;
                eventTarget.dispatchEvent(e);
            };

            ws.onclose = function (event) {
                clearTimeout(timeout);
                ws = null;
                if (forcedClose) {
                    self.readyState = WebSocket.CLOSED;
                    eventTarget.dispatchEvent(generateEvent('close'));
                } else {
                    self.readyState = WebSocket.CONNECTING;
                    var e = generateEvent('connecting');
                    e.code = event.code;
                    e.reason = event.reason;
                    e.wasClean = event.wasClean;
                    eventTarget.dispatchEvent(e);
                    if (!reconnectAttempt && !timedOut) {
                        if (self.debug || ReconnectingWebSocket.debugAll) {
                            console.debug('ReconnectingWebSocket', 'onclose', self.url);
                        }
                        eventTarget.dispatchEvent(generateEvent('close'));
                    }

                    var timeout = self.reconnectInterval * Math.pow(self.reconnectDecay, self.reconnectAttempts);
                    setTimeout(function () {
                        self.reconnectAttempts++;
                        self.open(true);
                    }, timeout > self.maxReconnectInterval ? self.maxReconnectInterval : timeout);
                }
            };
            ws.onmessage = function (event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onmessage', self.url, event.data);
                }
                var e = generateEvent('message');
                e.data = event.data;
                eventTarget.dispatchEvent(e);
            };
            ws.onerror = function (event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onerror', self.url, event);
                }
                eventTarget.dispatchEvent(generateEvent('error'));
            };
        };

        // Whether or not to create a websocket upon instantiation
        if (this.automaticOpen == true) {
            this.open(false);
        }

        /**
         * Transmits data to the server over the WebSocket connection.
         *
         * @param data a text string, ArrayBuffer or Blob to send to the server.
         */
        this.send = function (data) {
            if (ws) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'send', self.url, data);
                }
                return ws.send(data);
            } else {
                throw 'INVALID_STATE_ERR : Pausing to reconnect websocket';
            }
        };

        /**
         * Closes the WebSocket connection or connection attempt, if any.
         * If the connection is already CLOSED, this method does nothing.
         */
        this.close = function (code, reason) {
            // Default CLOSE_NORMAL code
            if (typeof code == 'undefined') {
                code = 1000;
            }
            forcedClose = true;
            if (ws) {
                ws.close(code, reason);
            }
        };

        /**
         * Additional public API method to refresh the connection if still open (close, re-open).
         * For example, if the app suspects bad data / missed heart beats, it can try to refresh.
         */
        this.refresh = function () {
            if (ws) {
                ws.close();
            }
        };
    }

    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data.
     */
    ReconnectingWebSocket.prototype.onopen = function (event) {};
    /** An event listener to be called when the WebSocket connection's readyState changes to CLOSED. */
    ReconnectingWebSocket.prototype.onclose = function (event) {};
    /** An event listener to be called when a connection begins being attempted. */
    ReconnectingWebSocket.prototype.onconnecting = function (event) {};
    /** An event listener to be called when a message is received from the server. */
    ReconnectingWebSocket.prototype.onmessage = function (event) {};
    /** An event listener to be called when an error occurs. */
    ReconnectingWebSocket.prototype.onerror = function (event) {};

    /**
     * Whether all instances of ReconnectingWebSocket should log debug messages.
     * Setting this to true is the equivalent of setting all instances of ReconnectingWebSocket.debug to true.
     */
    ReconnectingWebSocket.debugAll = false;

    ReconnectingWebSocket.CONNECTING = WebSocket.CONNECTING;
    ReconnectingWebSocket.OPEN = WebSocket.OPEN;
    ReconnectingWebSocket.CLOSING = WebSocket.CLOSING;
    ReconnectingWebSocket.CLOSED = WebSocket.CLOSED;

    return ReconnectingWebSocket;
});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Baobab Data Structure
 * ======================
 *
 * A handy data tree with cursors.
 */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(_x3, _x4, _x5) {
  var _again = true;_function: while (_again) {
    var object = _x3,
        property = _x4,
        receiver = _x5;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x3 = parent;_x4 = property;_x5 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj['default'] = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _emmett = __webpack_require__(18);

var _emmett2 = _interopRequireDefault(_emmett);

var _cursor = __webpack_require__(23);

var _cursor2 = _interopRequireDefault(_cursor);

var _monkey = __webpack_require__(9);

var _watcher = __webpack_require__(55);

var _watcher2 = _interopRequireDefault(_watcher);

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

var _update2 = __webpack_require__(24);

var _update3 = _interopRequireDefault(_update2);

var _helpers = __webpack_require__(5);

var helpers = _interopRequireWildcard(_helpers);

var arrayFrom = helpers.arrayFrom;
var coercePath = helpers.coercePath;
var deepFreeze = helpers.deepFreeze;
var getIn = helpers.getIn;
var makeError = helpers.makeError;
var deepClone = helpers.deepClone;
var deepMerge = helpers.deepMerge;
var shallowClone = helpers.shallowClone;
var shallowMerge = helpers.shallowMerge;
var uniqid = helpers.uniqid;

/**
 * Baobab defaults
 */
var DEFAULTS = {

  // Should the tree handle its transactions on its own?
  autoCommit: true,

  // Should the transactions be handled asynchronously?
  asynchronous: true,

  // Should the tree's data be immutable?
  immutable: true,

  // Should the monkeys be lazy?
  lazyMonkeys: true,

  // Should the tree be persistent?
  persistent: true,

  // Should the tree's update be pure?
  pure: true,

  // Validation specifications
  validate: null,

  // Validation behavior 'rollback' or 'notify'
  validationBehavior: 'rollback'
};

/**
 * Function returning a string hash from a non-dynamic path expressed as an
 * array.
 *
 * @param  {array}  path - The path to hash.
 * @return {string} string - The resultant hash.
 */
function hashPath(path) {
  return 'λ' + path.map(function (step) {
    if (_type2['default']['function'](step) || _type2['default'].object(step)) return '#' + uniqid() + '#';

    return step;
  }).join('λ');
}

/**
 * Baobab class
 *
 * @constructor
 * @param {object|array} [initialData={}]    - Initial data passed to the tree.
 * @param {object}       [opts]              - Optional options.
 * @param {boolean}      [opts.autoCommit]   - Should the tree auto-commit?
 * @param {boolean}      [opts.asynchronous] - Should the tree's transactions
 *                                             handled asynchronously?
 * @param {boolean}      [opts.immutable]    - Should the tree be immutable?
 * @param {boolean}      [opts.persistent]   - Should the tree be persistent?
 * @param {boolean}      [opts.pure]         - Should the tree be pure?
 * @param {function}     [opts.validate]     - Validation function.
 * @param {string}       [opts.validationBehaviour] - "rollback" or "notify".
 */

var Baobab = function (_Emitter) {
  _inherits(Baobab, _Emitter);

  function Baobab(initialData, opts) {
    var _this = this;

    _classCallCheck(this, Baobab);

    _get(Object.getPrototypeOf(Baobab.prototype), 'constructor', this).call(this);

    // Setting initialData to an empty object if no data is provided by use
    if (arguments.length < 1) initialData = {};

    // Checking whether given initial data is valid
    if (!_type2['default'].object(initialData) && !_type2['default'].array(initialData)) throw makeError('Baobab: invalid data.', { data: initialData });

    // Merging given options with defaults
    this.options = shallowMerge({}, DEFAULTS, opts);

    // Disabling immutability & persistence if persistence if disabled
    if (!this.options.persistent) {
      this.options.immutable = false;
      this.options.pure = false;
    }

    // Privates
    this._identity = '[object Baobab]';
    this._cursors = {};
    this._future = null;
    this._transaction = [];
    this._affectedPathsIndex = {};
    this._monkeys = {};
    this._previousData = null;
    this._data = initialData;

    // Properties
    this.root = new _cursor2['default'](this, [], 'λ');
    delete this.root.release;

    // Does the user want an immutable tree?
    if (this.options.immutable) deepFreeze(this._data);

    // Bootstrapping root cursor's getters and setters
    var bootstrap = function bootstrap(name) {
      _this[name] = function () {
        var r = this.root[name].apply(this.root, arguments);
        return r instanceof _cursor2['default'] ? this : r;
      };
    };

    ['apply', 'clone', 'concat', 'deepClone', 'deepMerge', 'exists', 'get', 'push', 'merge', 'pop', 'project', 'serialize', 'set', 'shift', 'splice', 'unset', 'unshift'].forEach(bootstrap);

    // Registering the initial monkeys
    this._refreshMonkeys();

    // Initial validation
    var validationError = this.validate();

    if (validationError) throw Error('Baobab: invalid data.', { error: validationError });
  }

  /**
   * Monkey helper.
   */

  /**
   * Internal method used to refresh the tree's monkey register on every
   * update.
   * Note 1) For the time being, placing monkeys beneath array nodes is not
   * allowed for performance reasons.
   *
   * @param  {mixed}   node      - The starting node.
   * @param  {array}   path      - The starting node's path.
   * @param  {string}  operation - The operation that lead to a refreshment.
   * @return {Baobab}            - The tree instance for chaining purposes.
   */

  _createClass(Baobab, [{
    key: '_refreshMonkeys',
    value: function _refreshMonkeys(node, path, operation) {
      var _this2 = this;

      var clean = function clean(data) {
        var p = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

        if (data instanceof _monkey.Monkey) {
          data.release();
          (0, _update3['default'])(_this2._monkeys, p, { type: 'unset' }, {
            immutable: false,
            persistent: false,
            pure: false
          });

          return;
        }

        if (_type2['default'].object(data)) {
          for (var k in data) {
            clean(data[k], p.concat(k));
          }
        }
      };

      var walk = function walk(data) {
        var p = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

        // Should we sit a monkey in the tree?
        if (data instanceof _monkey.MonkeyDefinition || data instanceof _monkey.Monkey) {
          var monkeyInstance = new _monkey.Monkey(_this2, p, data instanceof _monkey.Monkey ? data.definition : data);

          (0, _update3['default'])(_this2._monkeys, p, { type: 'set', value: monkeyInstance }, {
            immutable: false,
            persistent: false,
            pure: false
          });

          return;
        }

        // Object iteration
        if (_type2['default'].object(data)) {
          for (var k in data) {
            walk(data[k], p.concat(k));
          }
        }
      };

      // Walking the whole tree
      if (!arguments.length) {
        walk(this._data);
      } else {
        var monkeysNode = getIn(this._monkeys, path).data;

        // Is this required that we clean some already existing monkeys?
        if (monkeysNode) clean(monkeysNode, path);

        // Let's walk the tree only from the updated point
        if (operation !== 'unset') {
          walk(node, path);
        }
      }

      return this;
    }

    /**
     * Method used to validate the tree's data.
     *
     * @return {boolean} - Is the tree valid?
     */
  }, {
    key: 'validate',
    value: function validate(affectedPaths) {
      var _options = this.options;
      var validate = _options.validate;
      var behavior = _options.validationBehavior;

      if (typeof validate !== 'function') return null;

      var error = validate.call(this, this._previousData, this._data, affectedPaths || [[]]);

      if (error instanceof Error) {

        if (behavior === 'rollback') {
          this._data = this._previousData;
          this._affectedPathsIndex = {};
          this._transaction = [];
          this._previousData = this._data;
        }

        this.emit('invalid', { error: error });

        return error;
      }

      return null;
    }

    /**
     * Method used to select data within the tree by creating a cursor. Cursors
     * are kept as singletons by the tree for performance and hygiene reasons.
     *
     * Arity (1):
     * @param {path}    path - Path to select in the tree.
     *
     * Arity (*):
     * @param {...step} path - Path to select in the tree.
     *
     * @return {Cursor}      - The resultant cursor.
     */
  }, {
    key: 'select',
    value: function select(path) {

      // If no path is given, we simply return the root
      path = path || [];

      // Variadic
      if (arguments.length > 1) path = arrayFrom(arguments);

      // Checking that given path is valid
      if (!_type2['default'].path(path)) throw makeError('Baobab.select: invalid path.', { path: path });

      // Casting to array
      path = [].concat(path);

      // Computing hash (done here because it would be too late to do it in the
      // cursor's constructor since we need to hit the cursors' index first).
      var hash = hashPath(path);

      // Creating a new cursor or returning the already existing one for the
      // requested path.
      var cursor = this._cursors[hash];

      if (!cursor) {
        cursor = new _cursor2['default'](this, path, hash);
        this._cursors[hash] = cursor;
      }

      // Emitting an event to notify that a part of the tree was selected
      this.emit('select', { path: path, cursor: cursor });
      return cursor;
    }

    /**
     * Method used to update the tree. Updates are simply expressed by a path,
     * dynamic or not, and an operation.
     *
     * This is where path solving should happen and not in the cursor.
     *
     * @param  {path}   path      - The path where we'll apply the operation.
     * @param  {object} operation - The operation to apply.
     * @return {mixed} - Return the result of the update.
     */
  }, {
    key: 'update',
    value: function update(path, operation) {
      var _this3 = this;

      // Coercing path
      path = coercePath(path);

      if (!_type2['default'].operationType(operation.type)) throw makeError('Baobab.update: unknown operation type "' + operation.type + '".', { operation: operation });

      // Solving the given path

      var _getIn = getIn(this._data, path);

      var solvedPath = _getIn.solvedPath;
      var exists = _getIn.exists;

      // If we couldn't solve the path, we throw
      if (!solvedPath) throw makeError('Baobab.update: could not solve the given path.', {
        path: solvedPath
      });

      // Read-only path?
      var monkeyPath = _type2['default'].monkeyPath(this._monkeys, solvedPath);
      if (monkeyPath && solvedPath.length > monkeyPath.length) throw makeError('Baobab.update: attempting to update a read-only path.', {
        path: solvedPath
      });

      // We don't unset irrelevant paths
      if (operation.type === 'unset' && !exists) return;

      // If we merge data, we need to acknowledge monkeys
      var realOperation = operation;
      if (/merge/i.test(operation.type)) {
        var monkeysNode = getIn(this._monkeys, solvedPath).data;

        if (_type2['default'].object(monkeysNode)) {

          // Cloning the operation not to create weird behavior for the user
          realOperation = shallowClone(realOperation);

          // Fetching the existing node in the current data
          var currentNode = getIn(this._data, solvedPath).data;

          if (/deep/i.test(realOperation.type)) realOperation.value = deepMerge({}, deepMerge({}, currentNode, deepClone(monkeysNode)), realOperation.value);else realOperation.value = shallowMerge({}, deepMerge({}, currentNode, deepClone(monkeysNode)), realOperation.value);
        }
      }

      // Stashing previous data if this is the frame's first update
      if (!this._transaction.length) this._previousData = this._data;

      // Applying the operation
      var result = (0, _update3['default'])(this._data, solvedPath, realOperation, this.options);

      var data = result.data;
      var node = result.node;

      // If because of purity, the update was moot, we stop here
      if (!('data' in result)) return node;

      // If the operation is push, the affected path is slightly different
      var affectedPath = solvedPath.concat(operation.type === 'push' ? node.length - 1 : []);

      var hash = hashPath(affectedPath);

      // Updating data and transaction
      this._data = data;
      this._affectedPathsIndex[hash] = true;
      this._transaction.push(shallowMerge({}, operation, { path: affectedPath }));

      // Updating the monkeys
      this._refreshMonkeys(node, solvedPath, operation.type);

      // Emitting a `write` event
      this.emit('write', { path: affectedPath });

      // Should we let the user commit?
      if (!this.options.autoCommit) return node;

      // Should we update asynchronously?
      if (!this.options.asynchronous) {
        this.commit();
        return node;
      }

      // Updating asynchronously
      if (!this._future) this._future = setTimeout(function () {
        return _this3.commit();
      }, 0);

      // Finally returning the affected node
      return node;
    }

    /**
     * Method committing the updates of the tree and firing the tree's events.
     *
     * @return {Baobab} - The tree instance for chaining purposes.
     */
  }, {
    key: 'commit',
    value: function commit() {

      // Do not fire update if the transaction is empty
      if (!this._transaction.length) return this;

      // Clearing timeout if one was defined
      if (this._future) this._future = clearTimeout(this._future);

      var affectedPaths = Object.keys(this._affectedPathsIndex).map(function (h) {
        return h !== 'λ' ? h.split('λ').slice(1) : [];
      });

      // Is the tree still valid?
      var validationError = this.validate(affectedPaths);

      if (validationError) return this;

      // Caching to keep original references before we change them
      var transaction = this._transaction,
          previousData = this._previousData;

      this._affectedPathsIndex = {};
      this._transaction = [];
      this._previousData = this._data;

      // Emitting update event
      this.emit('update', {
        paths: affectedPaths,
        currentData: this._data,
        transaction: transaction,
        previousData: previousData
      });

      return this;
    }

    /**
     * Method returning a monkey at the given path or else `null`.
     *
     * @param  {path}        path - Path of the monkey to retrieve.
     * @return {Monkey|null}      - The Monkey instance of `null`.
     */
  }, {
    key: 'getMonkey',
    value: function getMonkey(path) {
      path = coercePath(path);

      var monkey = getIn(this._monkeys, [].concat(path)).data;

      if (monkey instanceof _monkey.Monkey) return monkey;

      return null;
    }

    /**
     * Method used to watch a collection of paths within the tree. Very useful
     * to bind UI components and such to the tree.
     *
     * @param  {object} mapping - Mapping of paths to listen.
     * @return {Cursor}         - The created watcher.
     */
  }, {
    key: 'watch',
    value: function watch(mapping) {
      return new _watcher2['default'](this, mapping);
    }

    /**
     * Method releasing the tree and its attached data from memory.
     */
  }, {
    key: 'release',
    value: function release() {
      var k = undefined;

      this.emit('release');

      delete this.root;

      delete this._data;
      delete this._previousData;
      delete this._transaction;
      delete this._affectedPathsIndex;
      delete this._monkeys;

      // Releasing cursors
      for (k in this._cursors) {
        this._cursors[k].release();
      }delete this._cursors;

      // Killing event emitter
      this.kill();
    }

    /**
     * Overriding the `toJSON` method for convenient use with JSON.stringify.
     *
     * @return {mixed} - Data at cursor.
     */
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.serialize();
    }

    /**
     * Overriding the `toString` method for debugging purposes.
     *
     * @return {string} - The baobab's identity.
     */
  }, {
    key: 'toString',
    value: function toString() {
      return this._identity;
    }
  }]);

  return Baobab;
}(_emmett2['default']);

exports['default'] = Baobab;
Baobab.monkey = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (!args.length) throw new Error('Baobab.monkey: missing definition.');

  if (args.length === 1 && typeof args[0] !== 'function') return new _monkey.MonkeyDefinition(args[0]);

  return new _monkey.MonkeyDefinition(args);
};
Baobab.dynamicNode = Baobab.monkey;

/**
 * Exposing some internals for convenience
 */
Baobab.Cursor = _cursor2['default'];
Baobab.MonkeyDefinition = _monkey.MonkeyDefinition;
Baobab.Monkey = _monkey.Monkey;
Baobab.type = _type2['default'];
Baobab.helpers = helpers;

/**
 * Version
 */
Baobab.VERSION = '2.3.2';
module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * Baobab Watchers
 * ================
 *
 * Abstraction used to listen and retrieve data from multiple parts of a
 * Baobab tree at once.
 */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(_x, _x2, _x3) {
  var _again = true;_function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _emmett = __webpack_require__(18);

var _emmett2 = _interopRequireDefault(_emmett);

var _cursor = __webpack_require__(23);

var _cursor2 = _interopRequireDefault(_cursor);

var _type = __webpack_require__(2);

var _type2 = _interopRequireDefault(_type);

var _helpers = __webpack_require__(5);

/**
 * Watcher class.
 *
 * @constructor
 * @param {Baobab} tree     - The watched tree.
 * @param {object} mapping  - A mapping of the paths to watch in the tree.
 */

var Watcher = function (_Emitter) {
  _inherits(Watcher, _Emitter);

  function Watcher(tree, mapping) {
    var _this = this;

    _classCallCheck(this, Watcher);

    _get(Object.getPrototypeOf(Watcher.prototype), 'constructor', this).call(this);

    // Properties
    this.tree = tree;
    this.mapping = null;

    this.state = {
      killed: false
    };

    // Initializing
    this.refresh(mapping);

    // Listening
    this.handler = function (e) {
      if (_this.state.killed) return;

      var watchedPaths = _this.getWatchedPaths();

      if ((0, _helpers.solveUpdate)(e.data.paths, watchedPaths)) return _this.emit('update');
    };

    this.tree.on('update', this.handler);
  }

  /**
   * Method used to get the current watched paths.
   *
   * @return {array} - The array of watched paths.
   */

  _createClass(Watcher, [{
    key: 'getWatchedPaths',
    value: function getWatchedPaths() {
      var _this2 = this;

      var rawPaths = Object.keys(this.mapping).map(function (k) {
        var v = _this2.mapping[k];

        // Watcher mappings can accept a cursor
        if (v instanceof _cursor2['default']) return v.solvedPath;

        return _this2.mapping[k];
      });

      return rawPaths.reduce(function (cp, p) {

        // Handling path polymorphisms
        p = [].concat(p);

        // Dynamic path?
        if (_type2['default'].dynamicPath(p)) p = (0, _helpers.getIn)(_this2.tree._data, p).solvedPath;

        if (!p) return cp;

        // Facet path?
        var monkeyPath = _type2['default'].monkeyPath(_this2.tree._monkeys, p);

        if (monkeyPath) return cp.concat((0, _helpers.getIn)(_this2.tree._monkeys, monkeyPath).data.relatedPaths());

        return cp.concat([p]);
      }, []);
    }

    /**
     * Method used to return a map of the watcher's cursors.
     *
     * @return {object} - TMap of relevant cursors.
     */
  }, {
    key: 'getCursors',
    value: function getCursors() {
      var _this3 = this;

      var cursors = {};

      Object.keys(this.mapping).forEach(function (k) {
        var path = _this3.mapping[k];

        if (path instanceof _cursor2['default']) cursors[k] = path;else cursors[k] = _this3.tree.select(path);
      });

      return cursors;
    }

    /**
     * Method used to refresh the watcher's mapping.
     *
     * @param  {object}  mapping  - The new mapping to apply.
     * @return {Watcher}          - Itself for chaining purposes.
     */
  }, {
    key: 'refresh',
    value: function refresh(mapping) {

      if (!_type2['default'].watcherMapping(mapping)) throw (0, _helpers.makeError)('Baobab.watch: invalid mapping.', { mapping: mapping });

      this.mapping = mapping;

      // Creating the get method
      var projection = {};

      for (var k in mapping) {
        projection[k] = mapping[k] instanceof _cursor2['default'] ? mapping[k].path : mapping[k];
      }this.get = this.tree.project.bind(this.tree, projection);
    }

    /**
     * Methods releasing the watcher from memory.
     */
  }, {
    key: 'release',
    value: function release() {

      this.tree.off('update', this.handler);
      this.state.killed = true;
      this.kill();
    }
  }]);

  return Watcher;
}(_emmett2['default']);

exports['default'] = Watcher;
module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(88),
    hashDelete = __webpack_require__(89),
    hashGet = __webpack_require__(90),
    hashHas = __webpack_require__(91),
    hashSet = __webpack_require__(92);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(20),
    setCacheAdd = __webpack_require__(110),
    setCacheHas = __webpack_require__(111);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
    var index = -1,
        length = values ? values.length : 0;

    this.__data__ = new MapCache();
    while (++index < length) {
        this.add(values[index]);
    }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(29),
    isArguments = __webpack_require__(39),
    isArray = __webpack_require__(4),
    isIndex = __webpack_require__(34);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ },
/* 64 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

/***/ },
/* 65 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

/***/ },
/* 66 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

module.exports = baseGetTag;

/***/ },
/* 67 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(25),
    equalArrays = __webpack_require__(31),
    equalByTag = __webpack_require__(82),
    equalObjects = __webpack_require__(83),
    getTag = __webpack_require__(85),
    isArray = __webpack_require__(4),
    isHostObject = __webpack_require__(33),
    isTypedArray = __webpack_require__(123);

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG = 2;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

module.exports = baseIsEqualDeep;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(25),
    baseIsEqual = __webpack_require__(28);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(41),
    isHostObject = __webpack_require__(33),
    isMasked = __webpack_require__(94),
    isObject = __webpack_require__(7),
    toSource = __webpack_require__(37);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

var isLength = __webpack_require__(21),
    isObjectLike = __webpack_require__(16);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

module.exports = baseIsTypedArray;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var baseMatches = __webpack_require__(74),
    baseMatchesProperty = __webpack_require__(75),
    identity = __webpack_require__(121),
    isArray = __webpack_require__(4),
    property = __webpack_require__(125);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(95),
    nativeKeys = __webpack_require__(107);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(69),
    getMatchData = __webpack_require__(84),
    matchesStrictComparable = __webpack_require__(36);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(28),
    get = __webpack_require__(119),
    hasIn = __webpack_require__(120),
    isKey = __webpack_require__(13),
    isStrictComparable = __webpack_require__(35),
    matchesStrictComparable = __webpack_require__(36),
    toKey = __webpack_require__(15);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

module.exports = baseMatchesProperty;

/***/ },
/* 76 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(27);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(26),
    isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ },
/* 79 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(64);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function (key) {
    return object[key];
  });
}

module.exports = baseValues;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(26),
    Uint8Array = __webpack_require__(61),
    eq = __webpack_require__(38),
    equalArrays = __webpack_require__(31),
    mapToArray = __webpack_require__(106),
    setToArray = __webpack_require__(112);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

var keys = __webpack_require__(22);

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG = 2;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(35),
    keys = __webpack_require__(22);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
}

module.exports = getMatchData;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(56),
    Map = __webpack_require__(19),
    Promise = __webpack_require__(58),
    Set = __webpack_require__(59),
    WeakMap = __webpack_require__(62),
    baseGetTag = __webpack_require__(66),
    toSource = __webpack_require__(37);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
        var result = objectToString.call(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : undefined;

        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}

module.exports = getTag;

/***/ },
/* 86 */
/***/ function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(30),
    isArguments = __webpack_require__(39),
    isArray = __webpack_require__(4),
    isIndex = __webpack_require__(34),
    isKey = __webpack_require__(13),
    isLength = __webpack_require__(21),
    toKey = __webpack_require__(15);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

module.exports = hashClear;

/***/ },
/* 89 */
/***/ function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

module.exports = hashDelete;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ },
/* 93 */
/***/ function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(81);

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ },
/* 95 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ },
/* 96 */
/***/ function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

module.exports = listCacheClear;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(11);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

module.exports = listCacheDelete;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(11);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(11);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(11);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(57),
    ListCache = __webpack_require__(10),
    Map = __webpack_require__(19);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(12);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

module.exports = mapCacheDelete;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(12);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(12);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(12);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

module.exports = mapCacheSet;

/***/ },
/* 106 */
/***/ function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(109);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(32);

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(134)(module)))

/***/ },
/* 109 */
/***/ function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ },
/* 110 */
/***/ function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

/***/ },
/* 111 */
/***/ function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ },
/* 112 */
/***/ function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(10);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
}

module.exports = stackClear;

/***/ },
/* 114 */
/***/ function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

module.exports = stackDelete;

/***/ },
/* 115 */
/***/ function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ },
/* 116 */
/***/ function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(10),
    Map = __webpack_require__(19),
    MapCache = __webpack_require__(20);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

module.exports = stackSet;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(124),
    toString = __webpack_require__(130);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function (string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

module.exports = stringToPath;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(27);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(67),
    hasPath = __webpack_require__(87);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

/***/ },
/* 121 */
/***/ function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(40),
    isObjectLike = __webpack_require__(16);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(71),
    baseUnary = __webpack_require__(79),
    nodeUtil = __webpack_require__(108);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(20);

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

module.exports = memoize;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(76),
    basePropertyDeep = __webpack_require__(77),
    isKey = __webpack_require__(13),
    toKey = __webpack_require__(15);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(72),
    baseTimes = __webpack_require__(29),
    toInteger = __webpack_require__(128);

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.times(3, String);
 * // => ['0', '1', '2']
 *
 *  _.times(4, _.constant(0));
 * // => [0, 0, 0, 0]
 */
function times(n, iteratee) {
  n = toInteger(n);
  if (n < 1 || n > MAX_SAFE_INTEGER) {
    return [];
  }
  var index = MAX_ARRAY_LENGTH,
      length = nativeMin(n, MAX_ARRAY_LENGTH);

  iteratee = baseIteratee(iteratee);
  n -= MAX_ARRAY_LENGTH;

  var result = baseTimes(length, iteratee);
  while (++index < n) {
    iteratee(index);
  }
  return result;
}

module.exports = times;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(129);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(127);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

module.exports = toInteger;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(78);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(80),
    keys = __webpack_require__(22);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = values;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

!function (global, factory) {
    'object' == ( false ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.preact = global.preact || {});
}(this, function (exports) {
    function VNode(nodeName, attributes, children) {
        this.nodeName = nodeName;
        this.attributes = attributes;
        this.children = children;
        this.key = attributes && attributes.key;
    }
    function extend(obj, props) {
        if (props) for (var i in props) {
            if (void 0 !== props[i]) obj[i] = props[i];
        }return obj;
    }
    function clone(obj) {
        return extend({}, obj);
    }
    function delve(obj, key) {
        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) {
            obj = obj[p[i]];
        }return obj;
    }
    function toArray(obj, offset) {
        return [].slice.call(obj, offset);
    }
    function isFunction(obj) {
        return 'function' == typeof obj;
    }
    function isString(obj) {
        return 'string' == typeof obj;
    }
    function empty(x) {
        return void 0 === x || null === x;
    }
    function falsey(value) {
        return value === !1 || empty(value);
    }
    function hashToClassName(c) {
        var str = '';
        for (var prop in c) {
            if (c[prop]) {
                if (str) str += ' ';
                str += prop;
            }
        }return str;
    }
    function h(nodeName, attributes, firstChild) {
        var children,
            arr,
            lastSimple,
            len = arguments.length;
        if (len > 2) {
            var type = typeof firstChild === 'undefined' ? 'undefined' : _typeof(firstChild);
            if (3 === len && 'object' !== type && 'function' !== type) {
                if (!falsey(firstChild)) children = [String(firstChild)];
            } else {
                children = [];
                for (var i = 2; i < len; i++) {
                    var _p = arguments[i];
                    if (!falsey(_p)) {
                        if (_p.join) arr = _p;else (arr = SHARED_TEMP_ARRAY)[0] = _p;
                        for (var j = 0; j < arr.length; j++) {
                            var child = arr[j],
                                simple = !(falsey(child) || isFunction(child) || child instanceof VNode);
                            if (simple && !isString(child)) child = String(child);
                            if (simple && lastSimple) children[children.length - 1] += child;else if (!falsey(child)) {
                                children.push(child);
                                lastSimple = simple;
                            }
                        }
                    } else ;
                }
            }
        } else if (attributes && attributes.children) return h(nodeName, attributes, attributes.children);
        if (attributes) {
            if (attributes.children) delete attributes.children;
            if (!isFunction(nodeName)) {
                if ('className' in attributes) {
                    attributes.class = attributes.className;
                    delete attributes.className;
                }
                lastSimple = attributes.class;
                if (lastSimple && !isString(lastSimple)) attributes.class = hashToClassName(lastSimple);
            }
        }
        var p = new VNode(nodeName, attributes || void 0, children);
        if (options.vnode) options.vnode(p);
        return p;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? toArray(arguments, 2) : vnode.children);
    }
    function createLinkedState(component, key, eventPath) {
        var path = key.split('.'),
            p0 = path[0];
        return function (e) {
            var _component$setState;
            var v,
                i,
                t = e && e.currentTarget || this,
                s = component.state,
                obj = s;
            if (isString(eventPath)) v = delve(e, eventPath);else v = t.nodeName ? (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value : e;
            if (path.length > 1) {
                for (i = 0; i < path.length - 1; i++) {
                    obj = obj[path[i]] || (obj[path[i]] = {});
                }obj[path[i]] = v;
                v = s[p0];
            }
            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
        };
    }
    function enqueueRender(component) {
        if (1 === items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        if (items.length) {
            var p,
                currentItems = items;
            items = itemsOffline;
            itemsOffline = currentItems;
            while (p = currentItems.pop()) {
                if (p._dirty) renderComponent(p);
            }
        }
    }
    function isFunctionalComponent(vnode) {
        var nodeName = vnode && vnode.nodeName;
        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
    }
    function buildFunctionalComponent(vnode, context) {
        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
    }
    function ensureNodeData(node, data) {
        return node[ATTR_KEY] || (node[ATTR_KEY] = data || {});
    }
    function getNodeType(node) {
        if (node instanceof Text) return 3;
        if (node instanceof Element) return 1;else return 0;
    }
    function removeNode(node) {
        var p = node.parentNode;
        if (p) p.removeChild(node);
    }
    function setAccessor(node, name, value, old, isSvg) {
        ensureNodeData(node)[name] = value;
        if ('key' !== name && 'children' !== name && 'innerHTML' !== name) if ('class' === name && !isSvg) node.className = value || '';else if ('style' === name) {
            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
            if (value && 'object' == (typeof value === 'undefined' ? 'undefined' : _typeof(value))) {
                if (!isString(old)) for (var i in old) {
                    if (!(i in value)) node.style[i] = '';
                }for (var i in value) {
                    node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
                }
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html;
        } else if ('o' == name[0] && 'n' == name[1]) {
            var l = node._listeners || (node._listeners = {});
            name = toLowerCase(name.substring(2));
            if (value) {
                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            l[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, empty(value) ? '' : value);
            if (falsey(value)) node.removeAttribute(name);
        } else {
            var ns = isSvg && name.match(/^xlink\:?(.+)/);
            if (falsey(value)) {
                if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]));else node.removeAttribute(name);
            } else if ('object' != (typeof value === 'undefined' ? 'undefined' : _typeof(value)) && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value);else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this._listeners[e.type](options.event && options.event(e) || e);
    }
    function getRawNodeAttributes(node) {
        var attrs = {};
        for (var i = node.attributes.length; i--;) {
            attrs[node.attributes[i].name] = node.attributes[i].value;
        }return attrs;
    }
    function isSameNodeType(node, vnode) {
        if (isString(vnode)) return 3 === getNodeType(node);
        if (isString(vnode.nodeName)) return isNamedNode(node, vnode.nodeName);
        if (isFunction(vnode.nodeName)) return node._componentConstructor === vnode.nodeName || isFunctionalComponent(vnode);else ;
    }
    function isNamedNode(node, nodeName) {
        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
    }
    function getNodeProps(vnode) {
        var defaultProps = vnode.nodeName.defaultProps,
            props = clone(defaultProps || vnode.attributes);
        if (defaultProps) extend(props, vnode.attributes);
        if (vnode.children) props.children = vnode.children;
        return props;
    }
    function collectNode(node) {
        removeNode(node);
        if (1 === getNodeType(node)) {
            cleanNode(node);
            var name = toLowerCase(node.nodeName),
                list = nodes[name];
            if (list) list.push(node);else nodes[name] = [node];
        }
    }
    function createNode(nodeName, isSvg) {
        var name = toLowerCase(nodeName),
            node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
        ensureNodeData(node);
        node.normalizedNodeName = name;
        return node;
    }
    function cleanNode(node) {
        ensureNodeData(node, getRawNodeAttributes(node));
        node._component = node._componentConstructor = null;
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, rootComponent) {
        diffLevel++;
        var ret = idiff(dom, vnode, context, mountAll, rootComponent);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (! --diffLevel) flushMounts();
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, rootComponent) {
        var originalAttributes = vnode && vnode.attributes;
        while (isFunctionalComponent(vnode)) {
            vnode = buildFunctionalComponent(vnode, context);
        }if (empty(vnode)) {
            vnode = '';
            if (rootComponent) {
                if (dom) {
                    if (8 === dom.nodeType) return dom;
                    recollectNodeTree(dom);
                }
                return document.createComment(vnode);
            }
        }
        if (isString(vnode)) {
            if (dom) {
                if (3 === getNodeType(dom) && dom.parentNode) {
                    dom.nodeValue = vnode;
                    return dom;
                }
                recollectNodeTree(dom);
            }
            return document.createTextNode(vnode);
        }
        var out = dom,
            nodeName = vnode.nodeName,
            prevSvgMode = isSvgMode;
        if (isFunction(nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
        if (!isString(nodeName)) nodeName = String(nodeName);
        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
        if (!dom) out = createNode(nodeName, isSvgMode);else if (!isNamedNode(dom, nodeName)) {
            out = createNode(nodeName, isSvgMode);
            while (dom.firstChild) {
                out.appendChild(dom.firstChild);
            }recollectNodeTree(dom);
        }
        if (vnode.children && 1 === vnode.children.length && 'string' == typeof vnode.children[0] && 1 === out.childNodes.length && out.firstChild instanceof Text) out.firstChild.nodeValue = vnode.children[0];else if (vnode.children || out.firstChild) innerDiffNode(out, vnode.children, context, mountAll);
        diffAttributes(out, vnode.attributes);
        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll) {
        var j,
            c,
            vchild,
            child,
            originalChildren = dom.childNodes,
            children = [],
            keyed = {},
            keyedLen = 0,
            min = 0,
            len = originalChildren.length,
            childrenLen = 0,
            vlen = vchildren && vchildren.length;
        if (len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i],
                key = vlen ? (c = _child._component) ? c.__key : (c = _child[ATTR_KEY]) ? c.key : null : null;
            if (key || 0 === key) {
                keyedLen++;
                keyed[key] = _child;
            } else children[childrenLen++] = _child;
        }
        if (vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (!empty(key)) {
                if (keyedLen && key in keyed) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) {
                for (j = min; j < childrenLen; j++) {
                    c = children[j];
                    if (c && isSameNodeType(c, vchild)) {
                        child = c;
                        children[j] = void 0;
                        if (j === childrenLen - 1) childrenLen--;
                        if (j === min) min++;
                        break;
                    }
                }
                if (!child && min < childrenLen && isFunction(vchild.nodeName) && mountAll) {
                    child = children[min];
                    children[min++] = void 0;
                }
            }
            child = idiff(child, vchild, context, mountAll);
            if (child !== originalChildren[i]) dom.insertBefore(child, originalChildren[i] || null);
        }
        if (keyedLen) for (var i in keyed) {
            if (keyed[i]) children[min = childrenLen++] = keyed[i];
        }if (min < childrenLen) removeOrphanedChildren(children);
    }
    function removeOrphanedChildren(children, unmountOnly) {
        for (var i = children.length; i--;) {
            var child = children[i];
            if (child) recollectNodeTree(child, unmountOnly);
        }
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component, !unmountOnly);else {
            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
            if (!unmountOnly) collectNode(node);
            if (node.childNodes && node.childNodes.length) removeOrphanedChildren(node.childNodes, unmountOnly);
        }
    }
    function diffAttributes(dom, attrs) {
        var old = dom[ATTR_KEY] || getRawNodeAttributes(dom);
        for (var _name in old) {
            if (!(attrs && _name in attrs)) setAccessor(dom, _name, null, old[_name], isSvgMode);
        }if (attrs) for (var _name2 in attrs) {
            if (!(_name2 in old) || attrs[_name2] != old[_name2] || ('value' === _name2 || 'checked' === _name2) && attrs[_name2] != dom[_name2]) setAccessor(dom, _name2, attrs[_name2], old[_name2], isSvgMode);
        }
    }
    function collectComponent(component) {
        var name = component.constructor.name,
            list = components[name];
        if (list) list.push(component);else components[name] = [component];
    }
    function createComponent(Ctor, props, context) {
        var inst = new Ctor(props, context),
            list = components[Ctor.name];
        inst.props = props;
        inst.context = context;
        if (list) for (var i = list.length; i--;) {
            if (list[i].constructor === Ctor) {
                inst.nextBase = list[i].nextBase;
                list.splice(i, 1);
                break;
            }
        }return inst;
    }
    function triggerComponentRender(component) {
        if (!component._dirty) {
            component._dirty = !0;
            enqueueRender(component);
        }
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        var b = component.base;
        if (!component._disableRendering) {
            component._disableRendering = !0;
            if (component.__ref = props.ref) delete props.ref;
            if (component.__key = props.key) delete props.key;
            if (empty(b) || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.prevContext) component.prevContext = component.context;
                component.context = context;
            }
            if (!component.prevProps) component.prevProps = component.props;
            component.props = props;
            component._disableRendering = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !b) renderComponent(component, 1, mountAll);else triggerComponentRender(component);
            if (component.__ref) component.__ref(component);
        }
    }
    function renderComponent(component, opts, mountAll) {
        if (!component._disableRendering) {
            var skip,
                rendered,
                props = component.props,
                state = component.state,
                context = component.context,
                previousProps = component.prevProps || props,
                previousState = component.prevState || state,
                previousContext = component.prevContext || context,
                isUpdate = component.base,
                initialBase = isUpdate || component.nextBase,
                initialChildComponent = component._component;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0;else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
            component._dirty = !1;
            if (!skip) {
                if (component.render) rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
                while (isFunctionalComponent(rendered)) {
                    rendered = buildFunctionalComponent(rendered, context);
                }var toUnmount,
                    base,
                    childComponent = rendered && rendered.nodeName;
                if (isFunction(childComponent) && childComponent.prototype.render) {
                    var inst = initialChildComponent,
                        childProps = getNodeProps(rendered);
                    if (inst && inst.constructor === childComponent) setComponentProps(inst, childProps, 1, context);else {
                        toUnmount = inst;
                        inst = createComponent(childComponent, childProps, context);
                        inst.nextBase = inst.nextBase || mountAll && initialBase;
                        inst._parentComponent = component;
                        component._component = inst;
                        setComponentProps(inst, childProps, 0, context);
                        renderComponent(inst, 1);
                    }
                    base = inst.base;
                } else {
                    var cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) baseParent.replaceChild(base, initialBase);
                    if (!toUnmount && component._parentComponent) {
                        initialBase._component = null;
                        recollectNodeTree(initialBase);
                    }
                }
                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
                component.base = base;
                if (base) {
                    var componentRef = component,
                        t = component;
                    while (t = t._parentComponent) {
                        componentRef = t;
                    }base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) {
                mounts.unshift(component);
                if (!diffLevel) flushMounts();
            } else if (!skip && component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
            var fn,
                cb = component._renderCallbacks;
            if (cb) while (fn = cb.pop()) {
                fn.call(component);
            }return rendered;
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component,
            oldDom = dom,
            isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
            isOwner = isDirectOwner,
            props = getNodeProps(vnode);
        while (c && !isOwner && (c = c._parentComponent)) {
            isOwner = c.constructor === vnode.nodeName;
        }if (isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (c && !isDirectOwner) {
                unmountComponent(c, !0);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.nextBase) c.nextBase = dom;
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom);
            }
        }
        return dom;
    }
    function unmountComponent(component, remove) {
        var base = component.base;
        component._disableRendering = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner, remove);else if (base) {
            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
            component.nextBase = base;
            if (remove) {
                removeNode(base);
                collectComponent(component);
            }
            removeOrphanedChildren(base.childNodes, !remove);
        }
        if (component.__ref) component.__ref(null);
        if (component.componentDidUnmount) component.componentDidUnmount();
    }
    function Component(props, context) {
        this._dirty = !0;
        this._disableRendering = !1;
        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
        this.context = context;
        this.props = props;
        this.state = this.getInitialState && this.getInitialState() || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent);
    }
    var options = {};
    var lcCache = {};
    var toLowerCase = function toLowerCase(s) {
        return lcCache[s] || (lcCache[s] = s.toLowerCase());
    };
    var resolved = 'undefined' != typeof Promise && Promise.resolve();
    var defer = resolved ? function (f) {
        resolved.then(f);
    } : setTimeout;
    var SHARED_TEMP_ARRAY = [];
    var EMPTY = {};
    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
    var NON_DIMENSION_PROPS = {
        boxFlex: 1,
        boxFlexGroup: 1,
        columnCount: 1,
        fillOpacity: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        fontWeight: 1,
        lineClamp: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        strokeOpacity: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1
    };
    var NON_BUBBLING_EVENTS = {
        blur: 1,
        error: 1,
        focus: 1,
        load: 1,
        resize: 1,
        scroll: 1
    };
    var items = [];
    var itemsOffline = [];
    var nodes = {};
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var components = {};
    extend(Component.prototype, {
        linkState: function linkState(key, eventPath) {
            var c = this._linkedStates || (this._linkedStates = {}),
                cacheKey = key + '|' + eventPath;
            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
        },
        setState: function setState(state, callback) {
            var s = this.state;
            if (!this.prevState) this.prevState = clone(s);
            extend(s, isFunction(state) ? state(s, this.props) : state);
            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
            triggerComponentRender(this);
        },
        forceUpdate: function forceUpdate() {
            renderComponent(this, 2);
        },
        render: function render() {
            return null;
        }
    });
    exports.h = h;
    exports.cloneElement = cloneElement;
    exports.Component = Component;
    exports.render = render;
    exports.rerender = rerender;
    exports.options = options;
});
//# sourceMappingURL=preact.js.map

/***/ },
/* 133 */
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ },
/* 134 */
/***/ function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "body {\n  font-size: 16px;\n  font-family: --apple-system, sans-serif;\n}\n", ""]);

// exports


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".power {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  height: 3rem;\n  width: 3rem;\n\n  border: 2px solid #333;\n  border-radius: 50%;\n\n  font-size: 1rem;\n\n  background-color: transparent;\n\n  cursor: pointer;\n}\n\n.power.is-on {\n  border-color: hsl(154, 95%, 35%);\n  color: hsl(154, 95%, 35%);\n}\n\n.power.is-on .power-icon svg {\n  fill: hsl(154, 95%, 35%);\n}\n\n.power.is-on:hover {\n  border-color: hsl(154, 95%, 45%);\n  color: hsl(154, 95%, 45%);\n}\n\n.power.is-on:hover .power-icon svg {\n  fill: hsl(154, 95%, 45%);\n}\n\n.power.is-off {\n  border-color: hsl(10, 85%, 40%);\n  color: hsl(10, 85%, 40%);\n}\n\n.power.is-off .power-icon svg {\n  fill: hsl(10, 85%, 40%);\n}\n\n.power.is-off:hover {\n  border-color: hsl(10, 85%, 55%);\n  color: hsl(10, 85%, 55%);\n}\n\n.power.is-off:hover .power-icon svg {\n  fill: hsl(10, 85%, 55%);\n}\n", ""]);

// exports


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".service-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.service-list-service {\n  position: relative;\n  width: 10vw;\n  height: 10vw;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  -webkit-transition: -webkit-transform 0.2s ease-out;\n\n  transition: -webkit-transform 0.2s ease-out;\n\n  transition: transform 0.2s ease-out;\n\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n\n  cursor: pointer;\n}\n\n.service-list-service.is-active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.service-list-image {\n  position: absolute;\n\n  width: 10vw;\n\n  -webkit-transition: opacity 0.3s ease-out;\n\n  transition: opacity 0.3s ease-out;\n}\n\n.service-list-service .service-list-image-inactive {\n  z-index: 0;\n}\n\n.service-list-service .service-list-image-active {\n  z-index: 1;\n}\n\n.service-list-service.is-inactive:hover {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n.service-list-service.is-inactive:hover .service-list-image-active {\n  opacity: 0.6;\n}\n\n.service-list-service.is-inactive .service-list-image-active {\n  opacity: 0;\n}\n\n.service-list-service.is-active .service-list-image-inactive {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".stack-layout {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n", ""]);

// exports


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".stepped-range {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.stepped-range--step-wrapper {\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin-right: 3px;\n}\n\n.step {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: gray;\n\n  cursor: pointer;\n}\n\n.step.is-active {\n  background-color: hsl(154, 95%, 35%);\n}\n\n.step:hover {\n  background-color: hsl(154, 95%, 45%);\n}\n", ""]);

// exports


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.PropTypes = mod.exports;
  }
})(this, function (exports, module) {

  'use strict';

  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  var ReactElement = {};

  ReactElement.isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  var ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };

  var emptyFunction = {
    thatReturns: function thatReturns(what) {
      return function () {
        return what;
      };
    }
  };

  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  var ANONYMOUS = '<<anonymous>>';

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];

        var preciseType = getPreciseType(propValue);

        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (propValue === expectedValues[i]) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      return createChainableTypeChecker(function () {
        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
      });
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName) == null) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    return propType;
  }

  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  module.exports = ReactPropTypes;
});

//# sourceMappingURL=index.js.map

/***/ },
/* 141 */
/***/ function(module, exports) {

module.exports = "<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z\"/>\n</svg>"

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(8)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }
/******/ ]);
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./animation-demo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./animation-demo.js":
/*!***************************!*\
  !*** ./animation-demo.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ \"./animation.js\");\n/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ease.js */ \"./ease.js\");\n\n\nvar btn_pause = document.querySelector('#pause');\nvar btn_resume = document.querySelector('#resume');\nvar div = document.querySelector('#el');\nvar div2 = document.querySelector('#el2');\nvar tl = new _animation_js__WEBPACK_IMPORTED_MODULE_0__[\"Timeline\"]();\nvar animation = new _animation_js__WEBPACK_IMPORTED_MODULE_0__[\"Animation\"](div.style, 'transform', 0, 500, 2000, 0, _ease_js__WEBPACK_IMPORTED_MODULE_1__[\"liner\"], function (v) {\n  return \"translateX(\".concat(v, \"px)\");\n});\ndiv2.style.transition = \"2s liner\";\ndiv2.style.transform = \"translateX(\".concat(500, \"px)\");\nbtn_pause.addEventListener('click', function () {\n  tl.pause();\n});\nbtn_resume.addEventListener('click', function () {\n  tl.resume();\n});\ntl.add(animation);\ntl.start();\n\n//# sourceURL=webpack:///./animation-demo.js?");

/***/ }),

/***/ "./animation.js":
/*!**********************!*\
  !*** ./animation.js ***!
  \**********************/
/*! exports provided: Timeline, Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timeline\", function() { return Timeline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animation\", function() { return Animation; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TICK = Symbol(\"tick\");\nvar TICK_HANDLER = Symbol(\"tick-handler\");\nvar ANIMATIONS = Symbol(\"animations\");\nvar START_TIME = Symbol(\"start-time\");\nvar PAUSE_START = Symbol(\"pause-start\");\nvar PAUSE_TIME = Symbol(\"pause-time\");\nvar Timeline = /*#__PURE__*/function () {\n  function Timeline() {\n    _classCallCheck(this, Timeline);\n\n    this[ANIMATIONS] = new Set();\n    this[START_TIME] = new Map();\n    this.state = 'Inited'; //设置状态控制执行\n  }\n\n  _createClass(Timeline, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      if (this.state !== \"Inited\") return;\n      this.state = \"Started\";\n      var startTime = Date.now();\n      this[PAUSE_TIME] = 0;\n\n      this[TICK] = function () {\n        var now = Date.now();\n\n        var _iterator = _createForOfIteratorHelper(_this[ANIMATIONS]),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var animation = _step.value;\n            //可以控制多个animation同时进行\n            var t = void 0;\n            if (_this[START_TIME].get(animation) < startTime) //this.add()传入的时间早于Timeline的startTime\n              t = now - startTime - _this[PAUSE_TIME]; //因为Date.now()在不断变化，所以要减去暂停所用到的时间this[PAUSE_TIME]\n            else //this.add()传入的时间晚于Timeline的startTime\n              t = now - _this[START_TIME].get(animation) - _this[PAUSE_TIME];\n\n            if (animation.duration < t) {\n              _this[ANIMATIONS][\"delete\"](animation);\n\n              t = animation.duration;\n            }\n\n            animation.receive(t);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        _this[TICK_HANDLER] = requestAnimationFrame(_this[TICK]); //this[TICK_HANDLER]收集requestAnimationFrame(this[TICK])的返回值       \n      }; //用于pause()中的cancelAnimationFrame(this[TICK_HANDLER])\n\n\n      this[TICK]();\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      //将所有状态和参数初始化\n      this.state = \"Inited\";\n      this.pause();\n      var startTime = Date.now();\n      this[ANIMATIONS] = new Set();\n      this[START_TIME] = new Map();\n      this[PAUSE_TIME] = 0;\n      this[PAUSE_START] = 0;\n      this[TICK_HANDLER] = null;\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      if (this.state !== \"Started\") return;\n      this.state = \"Paused\";\n      this[PAUSE_START] = Date.now();\n      cancelAnimationFrame(this[TICK_HANDLER]); //取消动画播放，这个函数的参数为\"requestAnimationFrame()\"的返回值\n    }\n  }, {\n    key: \"resume\",\n    value: function resume() {\n      if (this.state !== \"Paused\") return;\n      this.state = \"Started\";\n      this[PAUSE_TIME] += Date.now() - this[PAUSE_START]; //计算出每次暂停的时间间隔，并累加\n\n      this[TICK]();\n    }\n  }, {\n    key: \"add\",\n    value: function add(animation, startTime) {\n      if (arguments.length < 2) {\n        startTime = Date.now();\n      }\n\n      this[ANIMATIONS].add(animation);\n      this[START_TIME].set(animation, startTime + animation.delay); //传入animation和它实际开始的时间\n    }\n  }]);\n\n  return Timeline;\n}();\nvar Animation = /*#__PURE__*/function () {\n  function Animation(object, property, stratValue, endValue, duration, delay, timingFunction, template) {\n    _classCallCheck(this, Animation);\n\n    this.object = object;\n    this.property = property;\n    this.stratValue = stratValue;\n    this.endValue = endValue;\n    this.duration = duration;\n    this.timingFunction = timingFunction; //控制进程参数的变化方式，以callback形式传入\n\n    this.delay = delay;\n    this.template = template; //控制参数对this.object[this.property]的改变方式，以callback形式传入\n  }\n\n  _createClass(Animation, [{\n    key: \"receive\",\n    value: function receive(time) {\n      //接受Timeline控制的时间，并根据timingFunction和template来改变this.object[this.property]\n      //console.log(time);\n      var progress = this.timingFunction(time / this.duration);\n      var range = this.endValue - this.stratValue;\n      this.object[this.property] = this.template(this.stratValue + range * progress);\n    }\n  }]);\n\n  return Animation;\n}();\n\n//# sourceURL=webpack:///./animation.js?");

/***/ }),

/***/ "./ease.js":
/*!*****************!*\
  !*** ./ease.js ***!
  \*****************/
/*! exports provided: liner, cubicBezier, ease, easeIn, easeOut, easeInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"liner\", function() { return liner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubicBezier\", function() { return cubicBezier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ease\", function() { return ease; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"easeIn\", function() { return easeIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"easeOut\", function() { return easeOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"easeInOut\", function() { return easeInOut; });\nvar liner = function liner(v) {\n  return v;\n};\nfunction cubicBezier(p1x, p1y, p2x, p2y) {\n  var ZERO_LIMIT = 1e-6; // Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).\n\n  var cx = 3.0 * p1x;\n  var bx = 3.0 * (p2x - p1x) - cx;\n  var ax = 1.0 - cx - bx;\n  var cy = 3.0 * p1y;\n  var by = 3.0 * (p2y - p1y) - cy;\n  var ay = 1.0 - cy - by; // Public\n\n  function solve(x) {\n    return sampleCurveY(solveCurveX(x));\n  } // Private\n\n\n  function sampleCurveX(t) {\n    // `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.\n    return ((ax * t + bx) * t + cx) * t;\n  }\n\n  function sampleCurveY(t) {\n    return ((ay * t + by) * t + cy) * t;\n  }\n\n  function sampleCurveDerivativeX(t) {\n    return (3.0 * ax * t + 2.0 * bx) * t + cx;\n  } // Given an x value, find a parametric value it came from.\n\n\n  function solveCurveX(x, epsilon) {\n    var t0,\n        t1,\n        t2 = x,\n        x2,\n        derivative; // First try a few iterations of Newton's method -- normally very fast.\n\n    for (var i = 0; i < 8; i++) {\n      x2 = sampleCurveX(t2) - x;\n      if (Math.abs(x2) < epsilon) return t2;\n      derivative = sampleCurveDerivativeX(t2);\n      if (Math.abs(derivative) < 1e-6) break;\n      t2 = t2 - x2 / derivative;\n    } // Fall back to the bisection method for reliability.\n\n\n    t0 = 0.0;\n    t1 = 1.0;\n    t2 = x;\n    if (t2 < t0) return t0;\n    if (t2 > t1) return t1;\n\n    while (t0 < t1) {\n      x2 = sampleCurveX(t2);\n      if (Math.abs(x2 - x) < ZERO_LIMIT) return t2;\n      if (x > x2) t0 = t2;else t1 = t2;\n      t2 = (t1 - t0) * 0.5 + t0;\n    } // Failure.\n\n\n    return t2;\n  }\n\n  return solve;\n}\nvar ease = cubicBezier(0.25, 0.1, 0.25, 1);\nvar easeIn = cubicBezier(0.42, 0, 1, 1);\nvar easeOut = cubicBezier(0, 0, 0.58, 1);\nvar easeInOut = cubicBezier(0.42, 0, 0.58, 1);\n\n//# sourceURL=webpack:///./ease.js?");

/***/ })

/******/ });
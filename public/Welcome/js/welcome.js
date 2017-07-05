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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parts_Waves_js__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Welcome = function Welcome() {
    _classCallCheck(this, Welcome);

    this.waves = new __WEBPACK_IMPORTED_MODULE_0__parts_Waves_js__["a" /* default */]();
};

new Welcome();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Waves = function () {
    function Waves() {
        _classCallCheck(this, Waves);

        this.setConfig();
        this.initCanvas();
        this.draw();
    }

    _createClass(Waves, [{
        key: 'setConfig',
        value: function setConfig() {
            this.conf = {
                canvas: 'canvas',
                unit: 100,
                amplitude: 0.3,
                smoothing: 80
            };

            this.waves = [{ x: 0, speed: 0.009, opacity: 0.03, offset: { x: 0, y: 0.33 } }, { x: 300, speed: 0.015, opacity: 0.03, offset: { x: 0, y: 0.66 } }];
        }
    }, {
        key: 'initCanvas',
        value: function initCanvas() {
            this.canvas = document.getElementById(this.conf.canvas);
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight;
            this.ctx = this.canvas.getContext('2d');
            this.drawLimit = this.canvas.width + this.conf.smoothing;
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawWaves();
            requestAnimationFrame(this.draw.bind(this));
        }
    }, {
        key: 'drawWaves',
        value: function drawWaves() {
            var i = 0;
            for (i; i < this.waves.length; i++) {
                this.ctx.beginPath();
                this.drawWave(this.waves[i]);
                this.ctx.closePath();
            }
        }
    }, {
        key: 'drawWave',
        value: function drawWave(wave) {
            var x,
                y,
                i = 0;
            wave.x -= wave.speed;
            for (i; i <= this.drawLimit; i += this.conf.smoothing) {
                x = wave.x + i / this.conf.unit;
                y = Math.sin(this.conf.amplitude * x);
                this.ctx.lineTo(i, Math.round(this.conf.unit * y + wave.offset.y * this.canvas.height));
            }
            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.fillStyle = 'rgba(255, 255, 255, ' + wave.opacity + ')';
            this.ctx.fill();
        }
    }]);

    return Waves;
}();

/* harmony default export */ __webpack_exports__["a"] = (Waves);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
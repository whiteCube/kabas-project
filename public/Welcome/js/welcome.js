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
        this.getElements();
        this.initWaves();
    }

    _createClass(Waves, [{
        key: 'setConfig',
        value: function setConfig() {
            this.config = {
                wave: 'wave',
                waveContainer: 'wave-container',
                width: 1.05
            };

            this.waves = [{ x: 0, duration: 100, opacity: 0.04, amplitude: 0.15, offset: { x: 0, y: 30 } }, { x: 0, duration: 45, opacity: 0.03, amplitude: 0.10, offset: { x: 0, y: 60 } }];
        }
    }, {
        key: 'getElements',
        value: function getElements() {
            this.waveContainer = document.querySelector('.' + this.config.waveContainer);
        }
    }, {
        key: 'initWaves',
        value: function initWaves() {
            for (var i = 0; i < this.waves.length; i++) {
                this.drawWave(this.waves[i]);
            }
        }
    }, {
        key: 'drawWave',
        value: function drawWave(wave) {
            wave.svg = this.createSvg(wave);
            wave.svg.appendChild(this.createPath(wave));
            this.waveContainer.appendChild(wave.svg);
        }
    }, {
        key: 'createSvg',
        value: function createSvg(wave) {
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var width = this.getSvgWidth();
            var height = this.getSvgHeight(wave);
            svg.setAttribute('width', width);
            svg.setAttribute('height', height);
            svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
            svg.classList.add(this.config.wave);
            svg.style.opacity = wave.opacity;
            svg.style.top = wave.offset.y + '%';
            svg.style.height = height + 'px';
            svg.style.animation = 'wave ' + wave.duration + 's linear infinite';
            return svg;
        }
    }, {
        key: 'createPath',
        value: function createPath(wave) {
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            var svgHeight = this.getSvgHeight(wave);
            var width = this.getSvgWidth();
            var height = this.calculate(100, width) * wave.amplitude;
            path.setAttribute('d', 'M 0 ' + height + ' C ' + this.calculate(50, width) + ' ' + height + ', ' + this.calculate(50, width) + ' 0, ' + this.calculate(100, width) + ' 0 C ' + this.calculate(150, width) + ' 0, ' + this.calculate(150, width) + ' ' + height + ', ' + this.calculate(200, width) + ' ' + height + ' C ' + this.calculate(250, width) + ' ' + height + ', ' + this.calculate(250, width) + ' 0, ' + this.calculate(300, width) + ' 0 C ' + this.calculate(350, width) + ' 0, ' + this.calculate(350, width) + ' ' + height + ', ' + this.calculate(400, width) + ' ' + height + ' V ' + svgHeight + ' H 0 Z');
            path.setAttribute('fill', 'white');
            return path;
        }
    }, {
        key: 'getSvgHeight',
        value: function getSvgHeight(wave) {
            return window.innerHeight * ((100 - wave.offset.y) / 100);
        }
    }, {
        key: 'getSvgWidth',
        value: function getSvgWidth() {
            return window.innerWidth * this.config.width;
        }
    }, {
        key: 'calculate',
        value: function calculate(number, width) {
            return number * width / 400;
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
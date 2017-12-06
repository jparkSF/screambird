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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundLoop = undefined;

var _board = __webpack_require__(1);

var _board2 = _interopRequireDefault(_board);

var _bird = __webpack_require__(2);

var _bird2 = _interopRequireDefault(_bird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var board = new _board2.default();
var bird = new _bird2.default();

var backgroundLoop = exports.backgroundLoop = function backgroundLoop() {

  board.setup();
  bird.setup();
};

backgroundLoop();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board() {
    _classCallCheck(this, Board);
  }

  _createClass(Board, [{
    key: 'setup',
    value: function setup() {
      var _this = this;

      this.backgroundPos = 0;
      this.foregroundPos = 0;
      this.backgroundSpeed = 0.7;
      this.foregroundSpeed = 2;
      this.backgroundWidth = 350;
      this.birdPosY = 250;
      this.freeFall = 0;

      this.fillBoard();
      this.loop();

      var self = this;

      document.addEventListener('keypress', function (e) {
        if (e.which === 32) {
          _this.freeFall = -16;
        }
      });
    }
  }, {
    key: 'loop',
    value: function loop() {
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // add eventlistener to boost the bird's position up

      this.updatePosition();

      this.render();
    }
  }, {
    key: 'fillBoard',
    value: function fillBoard() {

      this.canvas = document.getElementById('canvas');
      this.canvas.width = 350;
      this.canvas.height = 600;

      this.ctx = this.canvas.getContext('2d');
      this.ctx.fillRect(0, 0, 350, 600);

      // Drawing sky background
      this.backgroundSky = document.getElementById('sky');
      this.ctx.drawImage(this.backgroundSky, 0, 0, 350, 400);
      // Drawing inner layer
      this.background = document.getElementById('sheet');
      this.ctx.drawImage(this.background, 0, 0, 275, 350, 0, 250, 350, 600);
      // Drawing outter layer(top layer)
      this.foreground = document.getElementById('sheet');
      this.ctx.drawImage(this.foreground, 277, 0, 222, 252, 0, 480, 350, 300);
      // drawing bird
      this.bird = document.getElementById('sheet');
      this.ctx.drawImage(this.bird, 311, 230, 37, 24, 50, this.birdPosY, 45, 30);
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition() {
      this.backgroundPos -= this.backgroundSpeed;
      this.foregroundPos -= this.foregroundSpeed;
      this.freeFall += 1.25;
      this.birdPosY += this.freeFall;

      if (this.backgroundPos < -this.backgroundWidth) {
        this.backgroundPos = 0;
      }

      if (this.foregroundPos < -this.backgroundWidth) {
        this.foregroundPos = 0;
      }

      if (this.birdPosY >= this.canvas.height - 30) {
        this.freeFall = 0;
        this.birdPosY = this.canvas.height - 30;
      } else if (this.birdPosY <= 0) {
        this.birdPosY = 0;
      }

      this.ctx.drawImage(this.bird, 311, 230, 37, 24, 50, this.birdPosY, 45, 30);
    }
  }, {
    key: 'render',
    value: function render() {
      this.ctx.drawImage(this.backgroundSky, 0, 0, 350, 400);
      for (var i = 0; i <= this.canvas.width / this.backgroundWidth + 1; i++) {
        this.ctx.drawImage(this.background, 0, 0, 275, 350, this.backgroundPos + i * this.backgroundWidth, 250, this.backgroundWidth, 600);
      }

      for (var _i = 0; _i <= this.backgroundWidth / this.backgroundWidth + 1; _i++) {
        this.ctx.drawImage(this.foreground, 277, 0, 222, 252, this.foregroundPos + _i * this.backgroundWidth, 482, this.backgroundWidth, 300);
      }

      this.ctx.drawImage(this.bird, 311, 230, 37, 24, 50, this.birdPosY, 45, 30);
      window.requestAnimationFrame(this.loop.bind(this));
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bird = function () {
  function Bird() {
    _classCallCheck(this, Bird);
  }

  _createClass(Bird, [{
    key: 'setup',
    value: function setup() {

      this.initBird();
    }
  }, {
    key: 'initBird',
    value: function initBird() {
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      var bird = document.getElementById('sheet');

      ctx.drawImage(bird, 311, 230, 37, 24, 50, 200, 45, 30);
    }
  }]);

  return Bird;
}();

exports.default = Bird;

/***/ })
/******/ ]);
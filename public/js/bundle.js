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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classwork_customEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classwork/customEvent */ \"./classwork/customEvent.js\");\n// Точка входа в наше приложение\r\n// import Observer from './observer';\r\n// import HOF from './hoc';\r\n// import CustomEvents from './observer/CustomEvents';\r\n\r\n// import homeWorkObs from '../classwork/observer';\r\n\r\n\r\n\r\n\r\n\r\n// 0. HOC\r\n// HOF();\r\n// 1. Observer ->\r\n// console.log( Observer );\r\n// Observer();\r\n// console.log('INDEX');\r\n// 2. CustomEvents ->\r\n// CustomEvents();\r\n\r\n// homeWorkObs();\r\nObject(_classwork_customEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./classwork/customEvent.js":
/*!**********************************!*\
  !*** ./classwork/customEvent.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\r\n  Задание:  Открыть файл task1.html в папке паблик и настроить светофоры в\r\n            соответсвии с правилавми ниже:\r\n\r\n  1. Написать кастомные события которые будут менять статус светофора:\r\n  - start: включает зеленый свет\r\n  - stop: включает красный свет\r\n  - night: включает желтый свет, который моргает с интервалом в 1с.\r\n  И зарегистрировать каждое через addEventListener на каждом из светофоров.\r\n\r\n  2.  Сразу после загрузки на каждом светофоре вызывать событие night, для того,\r\n      чтобы включить режим \"нерегулируемого перекрестка\" (моргающий желтый).\r\n\r\n  3.  По клику на любой из светофоров нунжо включать на нем поочередно красный (не первый клик)\r\n      или зеленый (на второй клик) цвет соотвественно.\r\n      Действие нужно выполнить только диспатча событие зарегистрированое в пункте 1.\r\n\r\n  4.  + Бонус: На кнопку \"Start Night\" повесить сброс всех светофоров с их текущего\r\n      статуса, на мигающий желтые.\r\n      Двойной, тройной и более клики на кнопку не должны вызывать повторную\r\n      инициализацию инвервала.\r\n\r\n*/\r\n\r\nconst CustomEvents = () => {\r\n\r\n\r\n    let start = new Event ('color');\r\n    let night = new Event ('night');\r\n\r\n    let myElements = [].slice.call(document.getElementsByClassName('trafficLight'));\r\n    myElements.map(key => {\r\n        key.addEventListener('color', function(e) {\r\n            let circle = key.getElementsByClassName('trafficLight__circle');\r\n            clearInterval(myInterval);\r\n            if (circle[0].style.backgroundColor == '' && circle[2].style.backgroundColor == ''){\r\n                circle[0].style.backgroundColor = 'red'; \r\n            } else if (circle[0].style.backgroundColor == 'red'){\r\n                circle[2].style.backgroundColor = 'green';\r\n                circle[0].style.backgroundColor = ''\r\n            } else { \r\n                circle[0].style.backgroundColor = 'red';\r\n                circle[2].style.backgroundColor = '';\r\n            }\r\n        });\r\n\r\n        key.addEventListener('click', function(){\r\n            key.dispatchEvent(start);\r\n        });\r\n\r\n        key.addEventListener('night', function(e) {\r\n            let circle = key.getElementsByClassName('trafficLight__circle');\r\n            circle[0].style.backgroundColor = '';\r\n            circle[2].style.backgroundColor = '';\r\n            myInterval\r\n        });\r\n    \r\n        document.addEventListener ('DOMContentLoaded', function(){\r\n            document.dispatchEvent(night);\r\n        });\r\n\r\n        const myInterval = setInterval(function(){\r\n            let circle = key.getElementsByClassName('trafficLight__circle');\r\n            circle[1].style.backgroundColor = 'orange';\r\n            setTimeout(function(){circle[1].style.backgroundColor = ''},1000)\r\n        }, 2000);\r\n\r\n    })\r\n\r\n    // let startNight = document.getElementById('Do');\r\n    // startNight.addEventListener ('click', function(){\r\n    //     let myElements = [].slice.call(document.getElementsByClassName('trafficLight'));\r\n    //     myElements.map(key => {\r\n    //         let circle = key.getElementsByClassName('trafficLight__circle');\r\n    //         circle[0].style.backgroundColor = '';\r\n    //         circle[2].style.backgroundColor = '';\r\n    //         const myInterval = setInterval(function(){\r\n    //             let circle = key.getElementsByClassName('trafficLight__circle');\r\n    //             circle[1].style.backgroundColor = 'orange';\r\n    //             setTimeout(function(){circle[1].style.backgroundColor = ''},1000)\r\n    //         }, 2000);\r\n    //         myInterval  \r\n    //     })\r\n    // });\r\n\r\n}; // custom events end!\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomEvents);\r\n\n\n//# sourceURL=webpack:///./classwork/customEvent.js?");

/***/ })

/******/ });
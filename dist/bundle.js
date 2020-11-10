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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: storeState, stateControl, stateControl2, changeState, feed, hydrate, giveLight, blueFood, greenFood, hydrateMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storeState\", function() { return storeState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stateControl\", function() { return stateControl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stateControl2\", function() { return stateControl2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeState\", function() { return changeState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"feed\", function() { return feed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hydrate\", function() { return hydrate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"giveLight\", function() { return giveLight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blueFood\", function() { return blueFood; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greenFood\", function() { return greenFood; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hydrateMore\", function() { return hydrateMore; });\nconst storeState = (initialState) => {\n  let currentState = {initialState};\n  return (stateChangeFunction = state => state) => {\n    const newState = stateChangeFunction(currentState);\n    currentState = { ...newState };\n    return newState;\n  };\n};\n\nconst stateControl = storeState();\nconst stateControl2 = storeState();\n\n\nconst changeState = (prop) => {\n  return (value) => {\n    return (state) => ({\n      ...state, // {soil: 0, water: 0, light: 0, }\n      [prop]: (state[prop] || 0) + value,\n    });\n  };\n};\n\nconst feed = changeState(\"soil\");\nconst hydrate = changeState(\"water\");\nconst giveLight = changeState(\"light\");\nconst blueFood = changeState(\"soil\")(5);\nconst greenFood = changeState(\"soil\")(10);\nconst hydrateMore = changeState(\"water\")(5);\n\n// export const fedPlant = stateControl(blueFood);\n// export const fedPlantAgain = stateControl(greenFood);\n\n// export const fedPlant2 = stateControl2(blueFood);\n// export const fedPlantAgain2 = stateControl2(greenFood);\n\n// { soil: 5 }\n\n$(document).ready(function() {\n  \n    $('#feed').click(function() {\n      const newState = stateControl(blueFood);\n      $('#soil-value').text(`Soil: ${newState.soil}`);\n    });\n  \n    $('#show-state').click(function() {\n      const currentState = stateControl();\n      $('#soil-value').text(`Soil: ${currentState.soil}`);\n    });\n  });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
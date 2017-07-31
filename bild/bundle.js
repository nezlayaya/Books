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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__all_books__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_detailBooks__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_detailBooks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__detail_detailBooks__);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service__ = __webpack_require__(2);


books();
function books() {

    var temporary = [];

    let promise = new Promise((resolve, reject) => {
        resolve(Object(__WEBPACK_IMPORTED_MODULE_0__service__["a" /* getBooks */])());
    });

    promise.then(result => {
        createListBooks(result);
        temporary = result;
    }, error => {
        console.log("Rejected: " + error);
    });

    function createListBooks(data) {
        var container = document.querySelector('.books');
        data.forEach(book => {
            let item = document.createElement('div');
            let title = document.createElement('a');
            title.innerHTML = book.title;
            title.setAttribute('href', '../detail/detailBookPage.html?' + book._id);
            item.appendChild(title);
            container.appendChild(item);
        });
    }

    function createFilters(arrayFilters) {
        const filtersBlock = document.querySelector('.filters');
        arrayFilters.forEach(filter => {
            let btn = document.createElement('button');
            btn.innerHTML = filter;
            btn.addEventListener('click', filterData);
            filtersBlock.appendChild(btn);
        });
    }

    function filterData() {
        let value = this.innerHTML;
        let container = document.querySelector('.books');

        let newArray = temporary.filter(book => {
            return value === book.genre;
        });
        container.innerHTML = '';
        createListBooks(newArray);
    }

    createFilters(['Домоводство', 'Триллеры']);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBooks;
function getBooks() {
    return $.get("http://localhost:3001/books", function (data) {
        return data;
    });
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const id = this.location.search.slice(1);

$.get("http://localhost:3001/books/" + id, function (data) {
    console.log(data);
    createDetailBook(data);
});

function createDetailBook(book) {
    var container = document.querySelector('.detailBooks');
    let buttonForCard = document.createElement('button');
    let item = document.createElement('div');
    let title = document.createElement('h1');
    let about = document.createElement('p');
    let avatar = document.createElement('img');
    title.innerHTML = book.title;
    about.innerHTML = book.about;
    item.appendChild(title);
    item.appendChild(avatar);
    item.appendChild(about);
    item.appendChild(buttonForCard);
    buttonForCard.innerHTML = 'Купить';
    avatar.setAttribute('src', book.avatar);
    container.appendChild(item);
};

/***/ })
/******/ ]);
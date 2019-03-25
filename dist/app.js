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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Message.js":
/*!***************************!*\
  !*** ./src/js/Message.js ***!
  \***************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n\n\nfunction Message(header, msg, err) {\n    let div = document.createElement('div');div.classList.add('msg-body');\n    div.innerHTML = `<h5>${header}</h5><p>${msg}</p>`;\n    document.body.appendChild(div);\n\n    setInterval(function () {\n        div.style.opacity = 0;\n    }, 2000);\n    div.addEventListener('mouseenter', () => div.style.opacity = 0);\n    if (err) {\n        div.style.background = '#e57373';\n    } else {\n        div.style.background = \"#4285F4\";\n    }\n}\n\n//# sourceURL=webpack:///./src/js/Message.js?");

/***/ }),

/***/ "./src/js/Restful.js":
/*!***************************!*\
  !*** ./src/js/Restful.js ***!
  \***************************/
/*! exports provided: Get, Post, getJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Get\", function() { return Get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Post\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getJson\", function() { return getJson; });\n\n\nfunction Get(url) {\n    return new Promise(function (succeed, fail) {\n        let req = new XMLHttpRequest();\n        req.open('GET', url, true);\n        req.addEventListener('load', () => {\n            if (req.status < 400) succeed(req.responseText);else fail(new Error(\"Request failed:\" + req.status));\n        });\n        req.addEventListener('error', () => {\n            fail(new Error(\"Network error\"));\n        });\n        req.send();\n    });\n}\nfunction Post(url, requestuestBody) {\n    return new Promise(function (succeed, fail) {\n        let req = new XMLHttpRequest();\n        req.open(\"POST\", url, true);\n        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\n        req.addEventListener('load', () => {\n            if (req.status < 400) succeed(req.responseText);else fail(new Error(\"Request failed:\" + req.status));\n        });\n        req.addEventListener('error', () => {\n            fail(new Error(\"Network error\"));\n        });\n        req.send(requestuestBody);\n    });\n}\nfunction getJson(file, callback) {\n    let rawFile = new XMLHttpRequest();\n    rawFile.overrideMimeType(\"application/json\");\n    rawFile.open(\"GET\", file, true);\n    rawFile.onreadystatechange = function () {\n        if (rawFile.readyState === 4 && rawFile.status == \"200\") {\n            callback(rawFile.responseText);\n        }\n    };\n    rawFile.send(null);\n}\n\n//# sourceURL=webpack:///./src/js/Restful.js?");

/***/ }),

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message */ \"./src/js/Message.js\");\n/* harmony import */ var _Restful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Restful */ \"./src/js/Restful.js\");\n\n\n\n\n\nconst data_post = 'http://demo0267974.mockable.io/signup',\n      data_get = 'http://demo0267974.mockable.io/login',\n      d = document;\nfunction randomInteger(min, max) {\n    let rand = min + Math.random() * (max - min);\n    rand = Math.round(rand);\n    return rand;\n}\nwindow.addEventListener('load', function () {\n    if (document.getElementById('reg')) {\n        // Sign in\n        d.getElementById('singin').addEventListener('click', e => {\n            e.preventDefault();\n\n            let form = document.forms.Auto;\n            let body = {\n                username: form.elements.username.value,\n                password: form.elements.password.value\n            };\n            Object(_Restful__WEBPACK_IMPORTED_MODULE_1__[\"Get\"])(data_get).then(response => {\n                console.log(response);\n                return ValidateIn(body, JSON.parse(response));\n            }).catch(error => {\n                console.log('Error!');\n                console.log(error);\n            });\n        });\n\n        document.getElementById('signup').addEventListener('click', e => {\n            e.preventDefault();\n\n            let form = d.forms.regForm;\n            let body = {\n                id: randomInteger(2, 100),\n                username: form.elements.uname.value,\n                password: form.elements.pass.value,\n                passwordC: form.elements.pass_confirm.value\n            };\n            ValidateUP(body);\n            let params = \"id=\" + body.id + \"&username=\" + body.username + \"&pass=\" + body.password;\n            Object(_Restful__WEBPACK_IMPORTED_MODULE_1__[\"Post\"])(data_post, params).then(text => {\n                console.log(text);\n            }, error => console.log(error));\n        });\n        d.getElementById('sUp').addEventListener('click', e => {\n            e.preventDefault();\n            d.getElementById('singIn-form').classList.remove('active-form');\n            d.getElementById('registration_form').classList.add('active-form');\n        });\n\n        d.getElementById('sIn').addEventListener('click', e => {\n            e.preventDefault();\n            d.getElementById('registration_form').classList.remove('active-form');\n            d.getElementById('singIn-form').classList.add('active-form');\n        });\n    }\n});\n//validate sign UP\nfunction ValidateUP(obj) {\n\n    if (obj.username == '' && obj.password == '') {\n        Object(_Message__WEBPACK_IMPORTED_MODULE_0__[\"Message\"])('Problem', 'The fields is empty, please fill it!', true);\n    } else if (obj.password !== obj.passwordC) {\n        Object(_Message__WEBPACK_IMPORTED_MODULE_0__[\"Message\"])('Problem', 'Passwords do not match!');\n    } else {\n        Object(_Message__WEBPACK_IMPORTED_MODULE_0__[\"Message\"])('Success', 'You have successfully sign up');\n        localStorage.setItem('user', JSON.stringify(obj));\n        window.location.replace('/Shop/src/catalog.html');\n    }\n}\n// validate sign in\nfunction ValidateIn(obj, data) {\n    if (obj.username == '' && obj.password == '') {\n        Object(_Message__WEBPACK_IMPORTED_MODULE_0__[\"Message\"])('Problem', 'The fields is empty, please fill it!', true);\n    } else if (data.username !== obj.username && data.password !== obj.password) {\n        Object(_Message__WEBPACK_IMPORTED_MODULE_0__[\"Message\"])('Error', 'The password or name is incorrect, please try again', true);\n    } else {\n        Object(_Message__WEBPACK_IMPORTED_MODULE_0__[\"Message\"])('Success', 'You have successfully logged in');\n        localStorage.setItem('user', JSON.stringify(data));\n        window.location.replace('/Shop/src/catalog.html');\n    }\n}\n//The field must have minimum of 3 symbols and maximum 6\n\n//# sourceURL=webpack:///./src/js/auth.js?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var _Restful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Restful */ \"./src/js/Restful.js\");\n\n\n\n\n\n\nObject(_Restful__WEBPACK_IMPORTED_MODULE_1__[\"Get\"])(_index__WEBPACK_IMPORTED_MODULE_0__[\"data\"]).then(response => {\n    return JSON.parse(response);\n}).then(list => {\n    Filter(list);\n    Sort(list);\n}).catch(error => {\n    console.log('Error!');\n    console.log(error);\n});\nconst elem = document.getElementById('catalog_p');\nfunction Filter(o) {\n    if (elem) {\n        document.getElementById('filter').addEventListener('change', () => {\n            let val = document.getElementById('filter').value;\n            let node = document.getElementById('catalog');\n            if (node.hasChildNodes()) {\n                node.innerHTML = '';\n            }\n            val != 'all' ? sortByCategory(o, val) : Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"View\"])(o);\n        });\n    }\n    function sortByCategory(obj, filter) {\n        for (let i in obj) {\n            if (!obj[i].title.indexOf(filter)) {\n                Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"addDataInCatalog\"])(obj[i]);\n            }\n        }\n    }\n}\nfunction Sort(o) {\n    if (elem) {\n        document.getElementById('sort_select').addEventListener('change', () => {\n            let val = document.getElementById('sort_select').value;\n            let node = document.getElementById('catalog');\n            if (node.hasChildNodes()) {\n                node.innerHTML = '';\n            }\n            sortByString(o, val);\n        });\n    }\n    function sortByString(obj, type) {\n        obj.sort((a, b) => {\n            return parseInt(a.price) - parseInt(b.price);\n        });\n        type !== 'max' ? Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"View\"])(obj) : Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"View\"])(obj.reverse());\n    }\n}\n\n//# sourceURL=webpack:///./src/js/filter.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: data, View, addDataInCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addDataInCatalog\", function() { return addDataInCatalog; });\n/* harmony import */ var _Restful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Restful */ \"./src/js/Restful.js\");\n\n\n\n\nconst data = \"http://demo0267974.mockable.io/shop\";\nconst pageId = document.getElementById('catalog_p');\n\nObject(_Restful__WEBPACK_IMPORTED_MODULE_0__[\"Get\"])(data).then(response => {\n    return JSON.parse(response);\n}).then(list => {\n    View(list);\n}).catch(error => {\n    console.log('Error!');\n    console.log(error);\n});\n\nfunction View(file) {\n    for (let i in file) {\n        addDataInCatalog(file[i], i);\n    }\n}\n\nfunction addDataInCatalog(data, i) {\n    let block = document.getElementById('catalog');\n    let divb = document.createElement('div');\n    divb.className = \"col-lg-4 col-md-4 col-sm-12 item-goods\";\n    divb.setAttribute('data-num', i);\n    divb.innerHTML = `<h2>${data.title}</h2><figure><img src=\"${data.img}\" alt=\"\"><figcaption><p>${data.description}</p>` + `<div class=\"nav-b\"><p>${data.price} <span>UAH</span></p>\n<a class=\"full-more btn\" data-id=\"${data.id}\" data-title=\"${data.title}\" data-img=\"${data.img}\" data-price=\"${data.price}\">More</a>\n<button type=\"button\" class=\"btn add_item\" data-id=\"${data.id}\" data-title=\"${data.title}\" data-img=\"${data.img}\" data-price=\"${data.price}\">Add to cart</button>\n</div></figcaption></figure>`;\n    block.appendChild(divb);\n}\n//display of items\nfunction viewFull(data) {\n    let block = document.getElementById('catalog');\n    block.classList.add(\"block__full\");\n    let str = '';\n    str += `<div class=\"block_info row\">\n                <div class=\"col-md-6\"><figure class=\"img_goods\"><img src=\"${data.img}\" alt=\"\"></figure></div>\n                <div class=\"col-md-6\">\n                    <h2 class=\"title_goods\">${data.title}</h2>\n                    <p>prise <span>${data.price}</span></p>\n                    <button type=\"button\" class=\"btn add_item\" data-id=\"${data.id}\" data-title=\"${data.title}\" data-img=\"${data.img}\" data-price=\"${data.price}\">Add to cart</button>\n                </div>\n            </div>\n            <div class=\"block_description\"><p>${data.description}</p></div>`;\n\n    block.innerHTML = str;\n}\n//\nfunction recently(data) {\n    let last = document.querySelector('.last');\n    let div = document.createElement('div');\n    div.className = \"col-lg-4 col-md-4 col-sm-12 item-goods\";\n    div.innerHTML = `` + `<h2>${data.title}</h2>` + `<figure><img src=\"${data.img}\" alt=\"\">` + `<figcaption><p>${data.description}</p>` + `<div class=\"nav-b\">` + `<p>${data.price}<span>UAH</span></p>` + `<a class=\"full-more btn\" data-id=\"${data.id}\" data-title=\"${data.title}\" data-img=\"${data.img}\" data-price=\"${data.price}\">More</a>` + `<button type=\"button\" class=\"btn add_item\" data-id=\"${data.id}\" data-title=\"${data.title}\" data-img=\"${data.img}\" data-price=\"${data.price}\">Add to cart</button>\n                              </div>\n                        </figcaption>\n                        </figure>`;\n\n    last.appendChild(div);\n}\n//deleted item from localStorage\nfunction delLastView() {\n    let key, value;\n    for (let i = 0; i < localStorage.length; i++) {\n        key = localStorage.key(i);\n        value = JSON.parse(localStorage.getItem(key));\n        if (Date.parse(value.date) < new Date() - 24 * 60 * 60 * 1000) {\n            localStorage.removeItem(key);\n        }\n    }\n}\n//display of viewed items\nfunction viewRecently() {\n    let key, value;\n    for (let i = 0; i < localStorage.length; i++) {\n        key = localStorage.key(i);\n        if (!isNaN(key)) {\n            value = JSON.parse(localStorage.getItem(key));\n            recently(value);\n        }\n    }\n}\n// adding product to viewed in localstor\nif (pageId) {\n    window.addEventListener('DOMContentLoaded', function () {\n        document.querySelector('#catalog').addEventListener('click', function (e) {\n            let obj = {};\n            if (e.target && e.target.classList.contains(\"full-more\")) {\n                let desc = e.target.parentNode.parentNode.firstChild;\n                obj.id = e.target.dataset.id;\n                obj.title = e.target.dataset.title;\n                obj.img = e.target.dataset.img;\n                obj.price = e.target.dataset.price;\n                obj.description = desc.innerHTML;\n                obj.date = new Date();\n                viewFull(obj);\n                localStorage.setItem(obj.id, JSON.stringify(obj));\n            }\n        });\n        delLastView();\n        viewRecently();\n    });\n}\n\n// function Pag(list){\n//\n//     let len = Object.keys(list).length;\n//     let countOnPage = 6;\n//     let page = Math.ceil(len/countOnPage);\n//     document.querySelector('#pag').addEventListener('click', function (e) {\n//\n//         if(e.target && e.target.tagName == \"LI\"){\n//             let pagenextlist = [];\n//             let p = e.target.dataset.page;\n//             console.log(p);\n//             for(let i = 0; i<itemall.length; i++){\n//                 let data_num = itemall.lastChild;\n//                 console.log(data_num);\n//                 // if(){\n//                 //     pagenextlist = list.splice(0, countOnPage);\n//                 //     View(pagenextlist);\n//                 // }\n//             }\n//\n//         }\n//     });\n//\n//     function AddCountPage(page){\n//         let pag = document.getElementById('pag');\n//         let pages = '';\n//         for(let i = 0; i < page; i++){\n//             pages += `<li data-page=\"${i+1}\" id=\"page${i+1}\">${i+1}</li>`;\n//         }\n//         pag.innerHTML = pages;\n//     }\n//\n//     function firstItem(){\n//         let pagList = list.splice(0,countOnPage);\n//         View(pagList);\n//         console.log(pagList);\n//     }\n//\n//     function init(){\n//         AddCountPage(page);\n//         firstItem();\n//     }\n//\n//     return init();\n// }\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/auth */ \"./src/js/auth.js\");\n/* harmony import */ var _js_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/filter */ \"./src/js/filter.js\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/index */ \"./src/js/index.js\");\n/* harmony import */ var _js_Restful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Restful */ \"./src/js/Restful.js\");\n/* harmony import */ var _js_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/Message */ \"./src/js/Message.js\");\n\n\n\n\n\n\n\n\nconst url_cart = 'http://demo0267974.mockable.io/cart';\n\nlet user = JSON.parse(localStorage.getItem('user')),\n    count = localStorage.getItem('counter');\nif (document.getElementById('cart_p')) {\n\n    document.getElementById('send').addEventListener('click', e => {\n        e.preventDefault();\n        let dataSend = localStorage.getItem('cart');\n        Object(_js_Restful__WEBPACK_IMPORTED_MODULE_3__[\"Post\"])(url_cart, dataSend).then(() => {\n            Object(_js_Message__WEBPACK_IMPORTED_MODULE_4__[\"Message\"])('Successfully', 'The order is successfully sent');\n        }).catch(error => console.log(error));\n        localStorage.removeItem('cart');\n        cart_box.parentNode.removeChild(cart_box);\n        document.querySelector('#total-cart-count').innerHTML = count;\n        document.querySelector('#total_sum').innerHTML = 0;\n    });\n}\ndocument.getElementById('user').innerHTML = \"Hi,\" + \" \" + user.username;\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });
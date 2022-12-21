/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Frontend/components/tasksCardRender/tasksCardRender.js":
/*!********************************************************************!*\
  !*** ./src/Frontend/components/tasksCardRender/tasksCardRender.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TasksCardRender\": () => (/* binding */ TasksCardRender)\n/* harmony export */ });\n/* harmony import */ var _tasksList_tasksList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasksList/tasksList.js */ \"./src/Frontend/components/tasksList/tasksList.js\");\n\n\nclass TasksCardRender {\n\tconstructor(parent) {\n\t\tthis.parent = parent;\n\t\tthis.container = null;\n\t}\n\n\trender(data) {\n\t\tif (Array.isArray(data)) {\n\t\t\tthis.container = document.createElement('div');\n\n\t\t\tconst infoTasksList = document.createElement('div');\n\t\t\tinfoTasksList.classList.add('info-tasks-list');\n\n\t\t\tconst inputCreateNewTask = document.createElement('div');\n\t\t\tinputCreateNewTask.classList.add('input-create-new-task');\n\n\t\t\tconst tasksList = document.createElement('ul');\n\t\t\ttasksList.classList.add('tasks-list');\n\n\t\t\tthis.container.append(infoTasksList, inputCreateNewTask, tasksList);\n\n\t\t\tdata.forEach((task) => {\n\t\t\t\tconst taskCard = new _tasksList_tasksList_js__WEBPACK_IMPORTED_MODULE_0__.TasksList(tasksList);\n\t\t\t\ttaskCard.render(task.id, task.header, task.is_done);\n\t\t\t});\n\n\t\t\tthis.parent.append(this.container);\n\t\t} else {\n\t\t\tconsole.log('Не получилось получить данные с сервера');\n\t\t}\n\t}\n\n\tupdate(data) {\n\t\tif (this.container) {\n\t\t\tthis.container.innerHTML = '';\n\t\t}\n\t\tthis.render(data);\n\t}\n}\n\n\n//# sourceURL=webpack://2022-autumn-d.usov/./src/Frontend/components/tasksCardRender/tasksCardRender.js?");

/***/ }),

/***/ "./src/Frontend/components/tasksList/tasksList.js":
/*!********************************************************!*\
  !*** ./src/Frontend/components/tasksList/tasksList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TasksList\": () => (/* binding */ TasksList)\n/* harmony export */ });\n/* harmony import */ var _controller_mainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/mainController.js */ \"./src/Frontend/controller/mainController.js\");\n\n\nclass TasksList {\n\tconstructor(parent) {\n\t\tthis.parent = parent;\n\t}\n\n\trender(id, header, is_done) {\n\t\tconst container = document.createElement('div');\n\n\t\tconst tasksContainer = document.createElement('li');\n\t\ttasksContainer.classList.add('task-container');\n\n\t\tconst taskField = document.createElement('div');\n\t\ttaskField.classList.add('task-field');\n\n\t\tconst customСheckboxInput = document.createElement('input');\n\t\tcustomСheckboxInput.setAttribute('type', 'checkbox');\n\t\tcustomСheckboxInput.setAttribute('id', `checkbox-input-${id}`);\n\t\tcustomСheckboxInput.classList.add('custom-checkbox-input');\n\n\t\tconst taskHeader = document.createElement('label');\n\t\ttaskHeader.textContent = header;\n\t\ttaskHeader.setAttribute('for', `checkbox-input-${id}`);\n\t\ttaskHeader.classList.add('task-header');\n\n\t\tcustomСheckboxInput.addEventListener('click', () => {\n\t\t\tconsole.log(id);\n\t\t\t_controller_mainController_js__WEBPACK_IMPORTED_MODULE_0__.MainController.changeStatus(id);\n\t\t});\n\n\t\tif (is_done) {\n\t\t\tcustomСheckboxInput.checked = true;\n\t\t\ttaskField.classList.add('checked');\n\t\t\tcustomСheckboxInput.classList.add('checked');\n\t\t\ttaskHeader.classList.add('checked');\n\t\t} else {\n\t\t\tcustomСheckboxInput.checked = false;\n\t\t\ttaskField.classList.remove('checked');\n\t\t\tcustomСheckboxInput.classList.remove('checked');\n\t\t\ttaskHeader.classList.remove('checked');\n\t\t}\n\n\t\ttaskField.append(customСheckboxInput, taskHeader);\n\t\ttasksContainer.append(taskField);\n\t\tcontainer.append(tasksContainer);\n\t\tthis.parent.append(container);\n\t}\n}\n\n\n//# sourceURL=webpack://2022-autumn-d.usov/./src/Frontend/components/tasksList/tasksList.js?");

/***/ }),

/***/ "./src/Frontend/controller/mainController.js":
/*!***************************************************!*\
  !*** ./src/Frontend/controller/mainController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainController\": () => (/* binding */ MainController)\n/* harmony export */ });\n/* harmony import */ var _view_mainView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/mainView.js */ \"./src/Frontend/view/mainView.js\");\n/* harmony import */ var _model_taskData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/taskData.js */ \"./src/Frontend/model/taskData.js\");\n/* harmony import */ var _model_taskStatusChange_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/taskStatusChange.js */ \"./src/Frontend/model/taskStatusChange.js\");\n\n\n\n\nclass MainController {\n\tprocess() {\n\t\tconst mainView = new _view_mainView_js__WEBPACK_IMPORTED_MODULE_0__.MainView();\n\t\tmainView.render();\n\n\t\tconst taskData = new _model_taskData_js__WEBPACK_IMPORTED_MODULE_1__.TaskData();\n\t\ttaskData.fetchData();\n\t}\n\n\tstatic changeStatus(id) {\n\t\tconst taskStatus = new _model_taskStatusChange_js__WEBPACK_IMPORTED_MODULE_2__.TaskStatusChange();\n\t\ttaskStatus.fetchData(id);\n\t}\n}\n\n\n//# sourceURL=webpack://2022-autumn-d.usov/./src/Frontend/controller/mainController.js?");

/***/ }),

/***/ "./src/Frontend/model/taskData.js":
/*!****************************************!*\
  !*** ./src/Frontend/model/taskData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskData\": () => (/* binding */ TaskData)\n/* harmony export */ });\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/eventBus.js */ \"./src/Frontend/utils/eventBus.js\");\n\n\nclass TaskData {\n\tconstructor() {\n\t\tthis.products = null;\n\t}\n\n\tfetchData() {\n\t\tfetch('/api/tasks')\n\t\t\t.then((response) => response.json())\n\t\t\t.then((data) => {\n\t\t\t\tthis.products = data;\n\t\t\t\t_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('tasks', data);\n\t\t\t});\n\t}\n}\n\n\n//# sourceURL=webpack://2022-autumn-d.usov/./src/Frontend/model/taskData.js?");

/***/ }),

/***/ "./src/Frontend/model/taskStatusChange.js":
/*!************************************************!*\
  !*** ./src/Frontend/model/taskStatusChange.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskStatusChange\": () => (/* binding */ TaskStatusChange)\n/* harmony export */ });\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/eventBus.js */ \"./src/Frontend/utils/eventBus.js\");\n\n\nclass TaskStatusChange {\n\tconstructor() {\n\t\tthis.status = null;\n\t}\n\n\tfetchData(id) {\n\t\tfetch(`/api/taskStatus/${id}`, {\n\t\t\tmethod: 'put',\n\t\t})\n\t\t\t.then((response) => response.json())\n\t\t\t.then((data) => {\n\t\t\t\tthis.status = data.is_done;\n\t\t\t\t_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('taskStatus', data);\n\t\t\t})\n\t\t\t.catch((error) => {\n\t\t\t\terror.message;\n\t\t\t});\n\t}\n}\n\n\n//# sourceURL=webpack://2022-autumn-d.usov/./src/Frontend/model/taskStatusChange.js?");

/***/ }),

/***/ "./src/Frontend/router/router.js":
/*!***************************************!*\
  !*** ./src/Frontend/router/router.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": () => (/* binding */ Router),\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _controller_mainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/mainController.js */ \"./src/Frontend/controller/mainController.js\");\n\n\nconst routes = {\n\t'/': _controller_mainController_js__WEBPACK_IMPORTED_MODULE_0__.MainController,\n};\n\nclass Router {\n\tconstructor() {\n\t\tthis.onDocumentClick = this.onDocumentClick.bind(this);\n\t}\n\n\tonDocumentClick(event) {\n\t\tconst { target } = event;\n\t\tconst { tagName } = target;\n\n\t\tif (tagName === 'A') {\n\t\t\tevent.preventDefault();\n\n\t\t\tif (target.href !== undefined) {\n\t\t\t\tthis.go(target.href);\n\t\t\t}\n\t\t}\n\t}\n\n\tgo(pathname) {\n\t\twindow.history.pushState({}, '', pathname);\n\t\tthis.invokeController();\n\t}\n\n\tinvokeController() {\n\t\tconst ControllerClass = routes[window.location.pathname];\n\t\tconst controller = new ControllerClass();\n\t\tcontroller.process();\n\t}\n\n\tstart() {\n\t\tdocument.addEventListener('click', this.onDocumentClick);\n\t\tthis.invokeController();\n\t}\n\n\tstop() {\n\t\tdocument.removeEventListener('click', this.onDocumentClick);\n\t}\n}\n\nconst router = new Router();\n\n\n//# sourceURL=webpack://2022-autumn-d.usov/./src/Frontend/router/router.js?");

/***/ }),

/***/ "./src/Frontend/script.js":
/*!********************************!*\
  !*** ./src/Frontend/script.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/router.js */ \"./src/Frontend/router/router.js\");\n\n\n_router_router_js__WEBPACK_IMPORTED_MODULE_0__.router.start();\n\n\n//# sourceURL=webpack://2022-autumn-d.usov/./src/Frontend/script.js?");

/***/ }),

/***/ "./src/Frontend/utils/eventBus.js":
/*!****************************************!*\
  !*** ./src/Frontend/utils/eventBus.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass EventBus {\n\tlisteners = {};\n\n\ton(eventName, callback) {\n\t\tif (!this.listeners[eventName]) {\n\t\t\tthis.listeners[eventName] = new Set();\n\t\t}\n\t\tthis.listeners[eventName].add(callback);\n\t}\n\n\toff(eventName, callback) {\n\t\tif (!this.listeners[eventName]) {\n\t\t\treturn;\n\t\t}\n\t\tconst newListeners = this.listeners[listeners].filter(\n\t\t\t(listener) => listener !== callback\n\t\t);\n\t\tthis.listeners[eventName] = newListeners;\n\t}\n\n\temit(eventName, data) {\n\t\tif (!this.listeners[eventName]) {\n\t\t\treturn;\n\t\t}\n\t\tthis.listeners[eventName].forEach((listener) => {\n\t\t\tlistener(data);\n\t\t});\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EventBus());\n\n\n//# sourceURL=webpack://2022-autumn-d.usov/./src/Frontend/utils/eventBus.js?");

/***/ }),

/***/ "./src/Frontend/view/mainView.js":
/*!***************************************!*\
  !*** ./src/Frontend/view/mainView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainView\": () => (/* binding */ MainView)\n/* harmony export */ });\n/* harmony import */ var _components_tasksCardRender_tasksCardRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tasksCardRender/tasksCardRender.js */ \"./src/Frontend/components/tasksCardRender/tasksCardRender.js\");\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/eventBus.js */ \"./src/Frontend/utils/eventBus.js\");\n\n\n\nclass MainView {\n\tconstructor() {\n\t\tthis.tasks = null;\n\n\t\t_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('tasks', this.update.bind(this));\n\t}\n\n\trender() {\n\t\tconst root = document.querySelector('#root');\n\t\tthis.container = document.createElement('div');\n\n\t\tconst headerContainer = document.createElement('div');\n\t\theaderContainer.classList.add('main-header-container');\n\n\t\tconst tasksContainer = document.createElement('div');\n\t\ttasksContainer.classList.add('main-tasks-container');\n\t\tthis.tasks = new _components_tasksCardRender_tasksCardRender_js__WEBPACK_IMPORTED_MODULE_0__.TasksCardRender(tasksContainer);\n\n\t\tthis.container.append(headerContainer, tasksContainer);\n\n\t\tif (root !== null) {\n\t\t\troot.append(this.container);\n\t\t} else {\n\t\t\tconsole.log('root is null');\n\t\t}\n\t}\n\n\tupdate(data = []) {\n\t\tif (!data || !Array.isArray(data) || data.length === 0) {\n\t\t\treturn;\n\t\t}\n\t\tthis.tasks.update(data);\n\t}\n}\n\n\n//# sourceURL=webpack://2022-autumn-d.usov/./src/Frontend/view/mainView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Frontend/script.js");
/******/ 	
/******/ })()
;
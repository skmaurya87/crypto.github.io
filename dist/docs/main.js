(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-orders-full/active-orders-full.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/active-orders-full/active-orders-full.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"d-flex justify-content-between align-items-center\">\n      <div class=\"py-2\">\n        <h6 class=\"mt-0 mb-1\">Current Orders</h6>\n        <p class=\"mb-0\">This is Photoshop's version of Lorem Ipsum. Proin gravida nibjs</p>\n      </div>\n      <div class=\"py-2\">\n        Short By: <p-dropdown class=\"btn-select-sm sort-by\" [options]=\"sortby\"></p-dropdown>\n      </div>\n    </div>\n    <hr class=\"my-1\">\n    <div class=\"d-flex justify-content-between align-items-center flex-sm-wrap flex-wrap\">\n         <div class=\"py-2\">\n             <button type=\"button\" class=\"btn btn-link btn-sm\">All Transaction</button>\n             <button type=\"button\" class=\"btn btn-link btn-sm\">Processed</button>\n             <button type=\"button\" class=\"btn btn-link btn-sm\">Pending</button>\n             <button type=\"button\" class=\"btn btn-link btn-sm\">Deny Transaction</button>\n         </div>\n         <div class=\"py-2\">\n             <button type=\"button\" class=\"btn btn-link btn-sm\"><i class=\"fa fa-file-excel-o\"></i> Create Excel Sheet</button>\n             <button type=\"button\" class=\"btn btn-link btn-sm\"><i class=\"fa fa-pdf-o\"></i> Download PDF</button>\n             <button type=\"button\" class=\"btn btn-link btn-sm\"><i class=\"fa fa-envelope-o\"></i> Shared By Email</button>\n         </div>\n         </div>\n         <div class=\"table-responsive-md\">      \n    <!-- <table class=\"table table-md fnt-12 mt-1 w-100 mb-0\">\n      <thead>\n      <tr class=\"bg-light\">\n              <th>Date</th>\n              <th>Type</th>\n              <th>TR. ID</th>\n              <th>Price Amount</th>\n              <th>Crypto Amount</th>\n              <th>Change</th>\n              <th>Order Fees</th>\n              <th class=\"text-right\">Action</th>\n      </tr>\n      </thead>\n  <tbody>\n      <tr *ngFor=\"let d of tradehistroy\">\n          <td>{{d.date}}</td>\n          <td>{{d.type}}</td>\n          <td>{{d.trID}}</td>\n          <td>{{d.price}}</td>\n          <td><img src=\"{{d.ico}}\" style=\"width: 16px;\" alt=\"\"> {{d.amount}}</td>\n          <td><img src=\"{{d.change}}\" alt=\"\"></td>\n          <td>{{d.fees}}</td>\n          <td class=\"text-right\">\n            <button type='button' class='btn btn-outline-secondary btn-xs'><i class='fa fa-eye'></i></button>\n            <button type='button' class='btn btn-outline-danger btn-xs'><i class='fa fa-trash-o'></i></button>\n          \n          </td>\n          \n      </tr>\n  </tbody>\n  </table> -->\n\n  <p-table class=\"table table-md fnt-12 mt-1 table-fixed\" [value]=\"tradehistroy\" [paginator]=\"true\" [rows]=\"5\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\n    <ng-template pTemplate=\"header\" class=\"bg-light\">\n        <tr class=\"bg-light font-weight-500\">\n          <th>Date</th>\n          <th>Type</th>\n          <th>TR. ID</th>\n          <th>Price Amount</th>\n          <th>Crypto Amount</th>\n          <th>Change</th>\n          <th>Order Fees</th>\n          <th class=\"text-right\">Action</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-sale>\n        <tr>\n            <td>{{sale.date}}</td>\n            <td>{{sale.type}}</td>\n            <td>{{sale.trID}}</td>\n            <td>{{sale.price}}</td>\n            <td><img src=\"{{sale.ico}}\" style=\"width: 16px;\" alt=\"\"> {{sale.amount}}</td>\n            <td><img src=\"{{sale.change}}\" alt=\"\"></td>\n            <td>{{sale.fees}}</td>\n            <td class=\"text-right\">\n              <button type='button' class='btn btn-outline-secondary btn-xs'><i class='fa fa-eye'></i></button>\n              <button type='button' class='btn btn-outline-danger btn-xs'><i class='fa fa-trash-o'></i></button>\n            \n            </td>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"summary\">\n      Total {{tradehistroy?.length}} Rows\n  </ng-template>\n</p-table>\n\n  \n\n\n  </div>\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-orders/active-orders.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/active-orders/active-orders.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center\">\n    <div class=\"py-2\">\n      <h6 class=\"mt-0 mb-1\">Active Orders Graphs</h6>\n      <p class=\"mb-0\">This is Photoshop's version of Lorem Ipsum. Proin</p>\n    </div>\n    <div class=\"py-2\">\n      \n       Short By: <p-dropdown class=\"btn-select-sm sort-by\" [options]=\"sortby\"></p-dropdown>\n    </div>\n  </div>\n  <hr class=\"my-1\">\n  <highcharts-chart\n   [Highcharts] = \"highcharts\" \n   [options] = \"chartOptions\" \n   style = \"width: 100%; height: 300px; display: block;\">\n</highcharts-chart>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/audience-metrics/audience-metrics.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/audience-metrics/audience-metrics.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center\">\n    <div class=\"py-2\">\n      <h6 class=\"mt-0 mb-2\">Website Audience Metrics</h6>\n      <h5 class=\"real-data mr-4\"><small>Open Rate</small>9,452.59</h5>\n      <h5 class=\"real-data mr-4\"><small>High Rate</small>95,705</h5>\n      <h5 class=\"real-data mr-4\"><small>Low Rate</small>19.03%</h5>\n      <h5 class=\"real-data\"><small>Close Rate</small>12,785</h5>\n    </div>\n    <div class=\"py-2\">\n      <div class=\"btn-group btn-group-sm btn-group-toggle\" data-toggle=\"buttons\">\n        <label class=\"btn btn-light active\">\n            <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked=\"\">Day\n        </label>\n        <label class=\"btn btn-light\">\n            <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Month\n        </label>\n        <label class=\"btn btn-light\">\n            <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Year\n        </label>\n      </div></div>\n  </div>\n\n<highcharts-chart\n   [Highcharts] = \"highcharts\" \n   [options] = \"chartOptions\" \n   style = \"width: 100%; height: 300px; display: block;\">\n</highcharts-chart>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/google-analytice/google-analytice.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/google-analytice/google-analytice.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center\">\n    <div class=\"py-2\">\n        <h6 class=\"mt-0 mb-1\">Google Analytics Web Performance</h6>\n        <p class=\"mb-0\">This is Photoshop's version of Lorem Ipsum. Proin gravida nibjs</p>\n    </div>\n</div>\n<hr class=\"my-1\">\n<div class=\"px-1\">\n<div class=\"row no-gutters d-flex justify-content-between align-items-center\">\n    <div class=\"col-9\">\n            <highcharts-chart\n            [Highcharts] = \"highcharts\" \n            [options] = \"chartOptions\" \n            style = \"width: 100%; height: 113px; display: block;\">\n         </highcharts-chart>\n    </div>\n    <div class=\"col-3 text-right\">\n            <h5 class=\"real-data pr-2\">\n                49.75%\n                <small><i class=\"fa fa-arrow-up text-success\"></i> 28.60%</small>\n                <small>VS 66.88% (Prev)</small>\n            </h5>\n    </div>\n</div>\n<hr>\n<div class=\"row no-gutters d-flex justify-content-between align-items-center\">\n        <div class=\"col-9\">\n                <highcharts-chart\n                [Highcharts] = \"highcharts\" \n                [options] = \"chartOptions1\" \n                style = \"width: 100%; height: 113px; display: block;\">\n             </highcharts-chart>\n        </div>\n        <div class=\"col-3 text-right\">\n                <h5 class=\"real-data pr-2\">\n                    49.75%\n                    <small><i class=\"fa fa-arrow-up text-success\"></i> 28.60%</small>\n                    <small>VS 66.88% (Prev)</small>\n                </h5>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row no-gutters d-flex justify-content-between align-items-center\">\n            <div class=\"col-9\">\n                    <highcharts-chart\n                    [Highcharts] = \"highcharts\" \n                    [options] = \"chartOptions\" \n                    style = \"width: 100%; height: 113px; display: block;\">\n                 </highcharts-chart>\n            </div>\n            <div class=\"col-3 text-right\">\n                    <h5 class=\"real-data pr-2\">\n                        49.75%\n                        <small><i class=\"fa fa-arrow-up text-success\"></i> 28.60%</small>\n                        <small>VS 66.88% (Prev)</small>\n                    </h5>\n            </div>\n        </div>\n        <hr>\n        <div class=\"row no-gutters d-flex justify-content-between align-items-center\">\n                <div class=\"col-9\">\n                        <highcharts-chart\n                        [Highcharts] = \"highcharts\" \n                        [options] = \"chartOptions1\" \n                        style = \"width: 100%; height: 113px; display: block;\">\n                     </highcharts-chart>\n                </div>\n                <div class=\"col-3 text-right\">\n                        <h5 class=\"real-data pr-2\">\n                            49.75%\n                            <small><i class=\"fa fa-arrow-up text-success\"></i> 28.60%</small>\n                            <small>VS 66.88% (Prev)</small>\n                        </h5>\n                </div>\n            </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/google-session/google-session.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/google-session/google-session.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center\">\n<div class=\"py-2\">\n    <h6 class=\"mt-0 mb-1\">Google Analytics Session</h6>\n    <p  class=\"mb-0\">This is Photoshop's version of Lorem Ipsum.</p>\n</div>\n</div>\n<hr>\n<div class=\"d-flex justify-content-between align-items-center\">\n    <div class=\"text-center\">\n    <p><span class=\"bg-primary text-white p-2 radius4\"><i class=\"fa fa-lg fa-desktop\"></i></span></p>    \n    <p class=\"font-weight-bolder linehieght\">Desktop<br>\n    <span class=\"text-primary h6\">45.07%</span><br>\n    <span class=\"text-primary\">201,434</span><br>\n    </p>\n    </div>\n    \n    <div class=\"text-center\">\n    <p><span class=\"bg-warning text-white p-2 radius4\"><i class=\"fa fa-2x fa-mobile-phone\"></i></span></p>    \n    <p class=\"font-weight-bolder linehieght\">Mobile<br>\n    <span class=\"text-warning h6\">29.05%</span><br>\n    <span class=\"text-warning\">134,693</span><br>\n    </p>\n    </div>\n\n    <div class=\"text-center\">\n    <p><span class=\"bg-success text-white p-2 radius4\"><i class=\"fa fa-lg fa-tablet\"></i></span></p>    \n    <p class=\"font-weight-bolder linehieght\">Tablet<br>\n    <span class=\"text-success h6\">18.43%</span><br>\n    <span class=\"text-success\">81,525</span><br>\n    </p>\n    </div>\n\n    <div class=\"text-center\">\n    <p><span class=\"bg-danger text-white p-2 radius4\"><i class=\"fa fa-lg  fa-laptop\"></i></span></p>    \n    <p class=\"font-weight-bolder linehieght\">Other<br>\n    <span class=\"text-danger h6\">7.05%</span><br>\n    <span class=\"text-danger\">37,875</span><br>\n    </p>\n    </div>\n</div>\n\n<div class=\"progress\" style=\"height: 30px;\">\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 45.05%\"></div>\n        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 29.05%\"></div>\n        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 18.43%\"></div>\n        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 7.05%\"></div>\n      </div>\n <hr class=\"my-4\"> \n <h6>Google Analytics Session</h6> \n <div class=\"d-flex justify-content-between align-items-center\">\n        <div class=\"text-center\">\n        <p class=\"font-weight-bolder linehieght\"><span class=\"text-primary\">Desktop</span><br>\n        <span class=\"h6\">35.04%</span><br>\n        <span class=\"text-secondary\">201,434</span><br>\n        </p>\n        </div>\n        \n        <div class=\"text-center\"> \n        <p class=\"font-weight-bolder linehieght\"><span class=\"text-success\">Mobile</span><br>\n        <span class=\"h6\">39.08%</span><br>\n        <span class=\"text-secondary\">134,693</span><br>\n        </p>\n        </div>\n    \n        <div class=\"text-center\"> \n        <p class=\"font-weight-bolder linehieght\"><span class=\"text-success\">Tablet</span><br>\n        <span class=\"h6\">19.45%</span><br>\n        <span class=\"text-secondary\">81,525</span><br>\n        </p>\n        </div>\n    \n        <div class=\"text-center\">\n        <p class=\"font-weight-bolder linehieght\"><span class=\"text-danger\">Other</span><br>\n        <span class=\"h6\">5.09%</span><br>\n        <span class=\"text-secondary\">37,875</span><br>\n        </p>\n        </div>\n    </div>   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/page-view/page-view.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/page-view/page-view.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center\">\n    <div class=\"py-2\">\n      <h6 class=\"mt-0 mb-1\">Page View by Page Tittle</h6>\n      <p class=\"mb-0\">This is Photoshop's version of Lorem Ipsum. Proin gravida nibjs</p>\n    </div>\n  </div>\n  <div class=\"table-responsive-md\">\n  <table class=\"table table-md fnt-12 mt-1 mb-0\" id=\"posi\">\n    <thead>\n    <tr class=\"bg-light\">\n            <th>Page Name</th>\n            <th>Page URL</th>\n            <th>Avrage Traffic</th>\n            <th>Impression</th>\n    </tr>\n    </thead>\n<tbody>\n    <tr *ngFor=\"let d of sessions | custompipe:6\">\n        <td>{{d.pageName}}</td>\n        <td>{{d.pageUrl}}</td>\n        <td>{{d.position}}%</td>\n        <td>{{d.volume}}</td>\n    </tr>\n</tbody>\n</table>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/session-by-channel/session-by-channel.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/session-by-channel/session-by-channel.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"d-flex justify-content-between align-items-center\">\n        <div class=\"py-2\">\n          <h6 class=\"mt-0 mb-1\">Sessions By Channel</h6>\n          <p class=\"mb-0\">This is Photoshop's version of Lorem Ipsum. Proin gravida nibjs</p>\n        </div>\n      </div>\n      <div class=\"table-responsive-md\">\n      <table class=\"table table-md fnt-12 mt-1 table-fixed\">\n        <thead>\n        <tr class=\"bg-light\">\n                <th>Channel</th>\n                <th>Session</th>\n                <th>Previous Period</th>\n                <th>Change</th>\n                <th>Trande</th>\n        </tr>\n        </thead>\n    <tbody>\n        <tr *ngFor=\"let d of sessions | custompipe:6\">\n            <td>{{d.channel}}</td>\n            <td>{{d.session}}</td>\n            <td>{{d.period}}</td>\n            <td>{{d.fees}}%</td>\n            <td><img src=\"{{d.change}}\"></td>\n        </tr>\n    </tbody>\n    </table>\n    </div>\n    \n    \n    \n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/user-activity/user-activity.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/user-activity/user-activity.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-activity works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/user-by-country/user-by-country.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/user-by-country/user-by-country.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-by-country works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/web-analytics/web-analytics.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/web-analytics/web-analytics.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-1 py-3\">\n        <div class=\"row m-0\">\n            <div class=\"col-sm-12\">\n                <div class=\"bg-white h-100 p-2\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"px-2\">\n                           www.example.com:    \n                           <p-dropdown class=\"select filter mx-1\" [options]=\"website\"></p-dropdown>\n                          <p-dropdown class=\"select filter mx-1\" [options]=\"filter\"></p-dropdown>\n                        </div>\n                      </div>\n                </div>\n            </div>\n</div>\n<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n    <div class=\"col-md-8 col-sm-12\">\n        <div class=\"bg-white p-2 mt-3\">\n            <app-audience-metrics></app-audience-metrics>\n        </div>\n        <div class=\"bg-white p-2 mt-3\">\n            <app-session-by-channel></app-session-by-channel>\n        </div>\n        <div class=\"bg-white p-2 mt-3\">\n           <app-page-view></app-page-view>\n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n        <div class=\"bg-white p-2 mt-3 \">\n            <app-google-analytice></app-google-analytice>\n        </div>\n        <div class=\"bg-white p-2 mt-3 \">\n            <app-google-session></app-google-session>\n        </div>\n    </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/web-performance/web-performance.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/web-performance/web-performance.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>web-performance works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("      <div class=\"report-wrapper\">\n        <div class=\"left-sidebar\"  [ngClass]=\"status ? 'active' : 'zd'\">\n          <app-leftnavbar></app-leftnavbar>\n        </div>\n        <!-- *ngif=\"show=true\" -->\n        <!------------left slide menu-------------->\n<div class=\"main-content\">  \n  <app-topbar></app-topbar>\n\n\n\n\n\n<router-outlet></router-outlet>\n </div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chart-rating/chart-rating.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chart-rating/chart-rating.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center\">\n      <div class=\"py-2\">\n        <h6 class=\"mt-0 mb-1\">Bitcoin Rating Graph</h6>\n        <p class=\"mb-0\">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh</p>\n      </div>\n      <div class=\"py-2\">\n        <div class=\"btn-group btn-group-sm btn-group-toggle\" data-toggle=\"buttons\">\n          <label class=\"btn btn-light active\">\n              <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked=\"\">Day\n          </label>\n          <label class=\"btn btn-light\">\n              <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Month\n          </label>\n          <label class=\"btn btn-light\">\n              <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Year\n          </label>\n        </div></div>\n    </div>\n    <hr class=\"my-1\">\n    <div class=\"d-flex justify-content-between align-items-center flex-sm-wrap flex-wrap\">\n         <div class=\"py-2\">\n         <p-dropdown class=\"bitcoin-select fnt-11\" [options]=\"SelectCoins\" [(ngModel)]=\"selectedCar2\">\n             <ng-template let-CoinIcon pTemplate=\"selectedItem\">\n                 <img src=\"../../assets/images/{{CoinIcon.label}}.png\" style=\"width:18px;vertical-align:middle\" />\n                 <span style=\"vertical-align:middle; margin-left: .5em\">{{CoinIcon.label}}</span>\n             </ng-template>\n             <ng-template let-SelectCoins pTemplate=\"item\" class=\"fnt-11\">\n                 <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 20px;\">\n                     <img src=\"../../assets/images/{{SelectCoins.label}}.png\" style=\"width:18px;position:absolute;top:1px;left:5px\"/>\n                     <div style=\"font-size:11px; margin-left: 25px; margin-top:1px\">{{SelectCoins.label}}</div>\n                 </div>\n             </ng-template>\n         </p-dropdown>\n             <button type=\"button\" class=\"btn btn-link btn-sm\">Charts</button>\n             <button type=\"button\" class=\"btn btn-link btn-sm\">Markets</button>\n             <button type=\"button\" class=\"btn btn-link btn-sm\">Data Wallet</button>\n         </div>\n         <div class=\"py-2\">\n             <button type=\"button\" class=\"btn btn-link btn-sm\"><i class=\"fa fa-file-excel-o\"></i> Create Excel Sheet</button>\n             <button type=\"button\" class=\"btn btn-link btn-sm\"><i class=\"fa fa-envelope-o\"></i> Shared By Email</button>\n         </div>\n         </div>\n         <hr class=\"m-0\">\n\n\n\n<highcharts-chart\n   [Highcharts] = \"highcharts\" \n   [options] = \"chartOptions\" \n   style = \"width: 100%; height: 400px; display: block;\">\n</highcharts-chart>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/all-charts/all-charts.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/all-charts/all-charts.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-1 py-3\">\n  <div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n    <div  class=\"col-md-6 mb-3\">\n      <div class=\"bg-white h-100\">\n              <highcharts-chart\n              [Highcharts] = \"highcharts\" \n              [options] = \"chartOptions\" \n              style = \"width: 100%; height: 400px; display: block;\">\n            </highcharts-chart>\n      </div>\n    </div>\n    <div  class=\"col-md-6 mb-3\">\n      <div class=\"bg-white h-100\">\n              <highcharts-chart\n              [Highcharts] = \"highcharts\" \n              [options] = \"chartOptions2\" \n              style = \"width: 100%; height: 400px; display: block;\">\n            </highcharts-chart>\n      </div>\n    </div>\n    <div  class=\"col-md-6 mb-3\">\n      <div class=\"bg-white h-100\">\n              <highcharts-chart\n              [Highcharts] = \"highcharts\" \n              [options] = \"chartOptions3\" \n              style = \"width: 100%; height: 400px; display: block;\">\n            </highcharts-chart>\n      </div>\n    </div>\n    <div  class=\"col-md-6 mb-3\">\n      <div class=\"bg-white h-100\">\n              <highcharts-chart\n              [Highcharts] = \"highcharts\" \n              [options] = \"chartOptions4\" \n              style = \"width: 100%; height: 400px; display: block;\">\n            </highcharts-chart>\n      </div>\n    </div>\n  \n  \n  </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/area-charts/area-charts.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/area-charts/area-charts.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-1 py-3\">\n  <div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n    <div  class=\"col-md-6 mb-3\">\n      <div class=\"bg-white h-100\">\n              <highcharts-chart\n              [Highcharts] = \"highcharts\" \n              [options] = \"chartOptions\" \n              style = \"width: 100%; height: 400px; display: block;\">\n            </highcharts-chart>\n      </div>\n    </div>\n    <div  class=\"col-md-6 mb-3\">\n      <div class=\"bg-white h-100\">\n              <highcharts-chart\n              [Highcharts] = \"highcharts\" \n              [options] = \"chartOptions2\" \n              style = \"width: 100%; height: 400px; display: block;\">\n            </highcharts-chart>\n      </div>\n    </div>\n    <div  class=\"col-md-6 mb-3\">\n      <div class=\"bg-white h-100\">\n              <highcharts-chart\n              [Highcharts] = \"highcharts\" \n              [options] = \"chartOptions3\" \n              style = \"width: 100%; height: 400px; display: block;\">\n            </highcharts-chart>\n      </div>\n    </div>\n    <div  class=\"col-md-6 mb-3\">\n      <div class=\"bg-white h-100\">\n              <highcharts-chart\n              [Highcharts] = \"highcharts\" \n              [options] = \"chartOptions4\" \n              style = \"width: 100%; height: 400px; display: block;\">\n            </highcharts-chart>\n      </div>\n    </div>\n  \n  \n  </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/line-chart/line-chart.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/line-chart/line-chart.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-1 py-3\">\n<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n  <div  class=\"col-sm-6 mb-3\">\n    <div class=\"bg-white h-100\">\n            <highcharts-chart\n            [Highcharts] = \"highcharts\" \n            [options] = \"chartOptions\" \n            style = \"width: 100%; height: 400px; display: block;\">\n          </highcharts-chart>\n    </div>\n  </div>\n  <div class=\"col-sm-6 mb-3\">\n    <div class=\"bg-white h-100\">\n            <highcharts-chart\n            [Highcharts] = \"highcharts\" \n            [options] = \"chartOptions2\" \n            style = \"width: 100%; height: 400px; display: block;\">\n          </highcharts-chart>\n    </div>\n  </div>\n  <div class=\"col-sm-6 mb-3\">\n    <div class=\"bg-white h-100\">\n            <highcharts-chart\n            [Highcharts] = \"highcharts\" \n            [options] = \"chartOptions3\" \n            style = \"width: 100%; height: 400px; display: block;\">\n          </highcharts-chart>\n    </div>\n  </div>\n  <div class=\"col-sm-6 mb-3\">\n    <div class=\"bg-white h-100\">\n            <highcharts-chart\n            [Highcharts] = \"highcharts\" \n            [options] = \"chartOptions4\" \n            style = \"width: 100%; height: 400px; display: block;\">\n          </highcharts-chart>\n    </div>\n  </div>\n\n\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coins/coins.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coins/coins.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid px-0\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 col-sm-6 col-12 coins mt-3\" *ngFor=\"let c of coins\">\n    <div class=\"bg-white d-flex justify-content-between\">\n      <div class=\"p-2\">\n        <div class=\"media\">\n          <span class=\"d-flex align-self-start mr-2 coin-circle text-white\"><i class=\"fa {{c.icon}}\"></i></span>\n           <div class=\"media-body\">\n              <h6 class=\"mt-0\">{{c.coin}}<small class=\"mt-1\">{{c.sm}}</small></h6>\n            </div>\n          </div>\n          <p class=\"fnt-12 mb-0\">{{c.txt}} <i class=\"fa {{c.upd}}\"></i></p>\n        </div>\n        <div>\n         <img src=\"{{c.img}}\" alt=\"\" class=\"img-fluid\">\n      </div>\n      </div>\n      </div>\n\n      <div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-8 col-sm-12 mt-3\">\n          <div class=\"bg-white p-2 h-100\">\n            <app-chart-rating></app-chart-rating>\n          </div>\n        </div>\n      <div class=\"col-md-4 col-sm-12 mt-3\">\n          <div class=\"bg-white p-2 h-100\">\n              <app-trade-table></app-trade-table>\n          </div>\n      </div>\n      </div>\n\n      <div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-6 col-sm-12 mt-3\">\n          <div class=\"bg-white p-2 h-100\">\n            <app-current-orders></app-current-orders>\n          </div>\n        </div>\n      <div class=\"col-md-6 col-sm-12 mt-3\">\n          <div class=\"bg-white p-2 h-100\">\n              <app-active-orders></app-active-orders>\n          </div>\n      </div>\n      </div>\n\n      <div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-12 col-sm-12 mt-3\">\n          <div class=\"bg-white p-2 h-100\">\n            <app-active-orders-full></app-active-orders-full>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n          <div class=\"col-md-8 col-sm-12 mt-3\">\n            <div class=\"bg-white p-2 h-100\">\n              <app-crypto-currency></app-crypto-currency>\n            </div>\n          </div>\n        <div class=\"col-md-4 col-sm-12 mt-3\">\n            <div class=\"bg-white p-2 h-100\">\n                <app-crypto-market></app-crypto-market>\n            </div>\n        </div>\n        </div>\n\n\n    </div>\n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/crypto-currency/crypto-currency.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crypto-currency/crypto-currency.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center\">\n    <div class=\"py-2\">\n      <h6 class=\"mt-0 mb-1\">Crypto Currency Rating Graph</h6>\n      <p class=\"mb-0\">Real time crypto currency information and real date</p>\n    </div>\n    <div class=\"py-2\">\n      <div class=\"btn-group btn-group-sm btn-group-toggle\" data-toggle=\"buttons\">\n        <label class=\"btn btn-light active\">\n            <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked=\"\">Day\n        </label>\n        <label class=\"btn btn-light\">\n            <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Month\n        </label>\n        <label class=\"btn btn-light\">\n            <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Year\n        </label>\n      </div></div>\n  </div>\n  <hr class=\"my-1\">\n  <div class=\"d-flex justify-content-between align-items-center flex-sm-wrap flex-wrap\">\n      <div class=\"py-2\">\n        <h5 class=\"real-data mr-4\"><small>Open Rate</small>9,452.59</h5>\n        <h5 class=\"real-data mr-4\"><small>High Rate</small>95,705</h5>\n        <h5 class=\"real-data mr-4\"><small>Low Rate</small>19.03%</h5>\n        <h5 class=\"real-data\"><small>Close Rate</small>12,785</h5>\n      </div>\n      <div class=\"py-2\">\n          <button type=\"button\" class=\"btn btn-link btn-sm\"><i class=\"fa fa-file-excel-o\"></i> Create Excel Sheet</button>\n          <button type=\"button\" class=\"btn btn-link btn-sm\"><i class=\"fa fa-envelope-o\"></i> Shared By Email</button>\n      </div>\n      </div>\n      <hr class=\"m-0\">\n\n      <highcharts-chart\n   [Highcharts] = \"highcharts\" \n   [options] = \"chartOptions\" \n   style = \"width: 100%; height: 300px; display: block;\">\n</highcharts-chart>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/crypto-market/crypto-market.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crypto-market/crypto-market.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center\">\n    <div class=\"py-2\">\n      <h6 class=\"mt-0 mb-1\">Crypto Market Position</h6>\n      <p class=\"mb-0\">Market value and position of crypto currency</p>\n    </div>\n  </div>\n\n<div class=\"py-2 crypto-market-coins\">\n  <owl-carousel [options]=\"carouselOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row','sliding']\">\n      <div class=\"item\" *ngFor=\"let image of images;let i= index\">\n        <div class=\"slide-text\">\n          <button type=\"button\" class=\"btn btn-secondary custom-btn\">{{image.text}}</button>\n        </div>\n      </div>\n    </owl-carousel>\n</div> \n\n<table class=\"table table-md fnt-12 mt-1 mb-0\" id=\"posi\">\n  <thead>\n  <tr class=\"bg-light\">\n          <th>Country</th>\n          <th>Crypto Value</th>\n          <th>Position</th>\n          <th>Volume</th>\n  </tr>\n  </thead>\n<tbody>\n  <tr *ngFor=\"let d of tabledata\">\n      <td>{{d.country}}</td>\n      <td>{{d.value}}</td>\n      <td class=\"position-td\">{{d.position}}</td>\n      <td>{{d.volume}}</td>\n      \n  </tr>\n</tbody>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/current-orders/current-orders.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/current-orders/current-orders.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"d-flex justify-content-between align-items-center\">\n        <div class=\"py-2\">\n          <h6 class=\"mt-0 mb-1\">Current Orders</h6>\n          <p class=\"mb-0\">This is Photoshop's version of Lorem Ipsum. Proin gravida nibjs</p>\n        </div>\n        \n      </div>\n  \n      <table class=\"table table-md fnt-12 mt-1 table-fixed\">\n        <thead>\n        <tr class=\"bg-light\">\n                <th>Price</th>\n                <th>Sals Amount</th>\n                <th>TR. ID</th>\n                <th>Date</th>\n        </tr>\n        </thead>\n    <tbody>\n        <tr *ngFor=\"let d of tradehistroy | custompipe:7\">\n            <td>{{d.price}}</td>\n            <td><img src=\"{{d.ico}}\" style=\"width: 16px;\"> {{d.amount}}</td>\n            <td>#TR{{d.trID}}</td>\n            <td>{{d.date}}</td>\n        </tr>\n    </tbody>\n    </table>\n    \n    \n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashbord1/dashbord1.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashbord1/dashbord1.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-3\">\n\n<div class=\"bg-white news fnt-12 d-flex align-items-center p-2\">\n  <div class=\"news-hed p-2 fnt-14\">News Update</div>\n <div class=\"marquee\"> This is Photoshop's version  of Lorem Ipsum. | Proin gravida nibh vel velit auctor aliquet. | This is Photoshop's version  of Lorem Ipsum. | Proin gravida nibh vel velit auctor aliquet.</div>\n</div>\n\n<div class=\"bg-white coins mt-3 justify-content-between fnt-13 d-flex align-items-center p-2\">\n<div class=\"mx-2 coinsbtn\" *ngFor=\"let c of coinsbtn\"><i class=\"fa {{c.icon}}\"></i> {{c.txt}}</div>\n</div>\n\n<app-coins></app-coins>\n\n\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashbord2/dashbord2.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashbord2/dashbord2.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  dashbord2 works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/checkbox-validation/checkbox-validation.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/checkbox-validation/checkbox-validation.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("          <div class=\"bg-white h-100 p-2\">\n            <p class=\"font-weight-bolder\">Third Party Form Validation</p>\n            <p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\n\n            <form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\">\n                <div class=\"form-row\">\n                    <div class=\"form-group col-12\">\n                        <label class=\"mb-0 font-weight-bolder\">First Name *:</label>\n                        <input class=\"p-input form-control\" minlength=\"3\" pInputText type=\"text\" formControlName=\"firstname\" placeholder=\"Required\"/>\n                        <p-message class=\"my-1\" severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['firstname'].valid&&userform.controls['firstname'].dirty\"></p-message>\n                      </div>\n             \n\n                <div class=\"form-group col-12\">\n                    <label class=\"mb-0 font-weight-bolder\">Last Name *:</label>\n                    <input class=\"p-input form-control\" minlength=\"3\" pInputText type=\"text\" formControlName=\"lastname\" placeholder=\"Required\"/>\n                    <p-message severity=\"error\" class=\"my-1\" text=\"Lastname is required\" *ngIf=\"!userform.controls['lastname'].valid&&userform.controls['lastname'].dirty\"></p-message>\n                </div>\n\n                <div class=\"form-group col-12\">\n                    <label class=\"mb-0 font-weight-bolder\">Password *:</label>\n                    <input class=\"p-input form-control\" pInputText type=\"password\"  formControlName=\"password\" placeholder=\"Required - Min(6)\"/>\n                    <p-message severity=\"error\" class=\"my-1\" [text]=\"userform.controls['password'].errors['required'] ? 'Password is required' : userform.controls['password'].errors['minlength'] ? 'Must be longer than 6 characters' : ''\" \n                                    *ngIf=\"!userform.controls['password'].valid&&userform.controls['password'].dirty\"></p-message>\n                </div>\n\n                <div class=\"form-group col-12\">\n                    <label class=\"mb-0 font-weight-bolder\"> Description:</label>\n                    <textarea pInputTextarea type=\"text\" class=\"form-control\" formControlName=\"description\"></textarea>\n                </div>\n\n                <div class=\"form-group col-12\">\n                    <label class=\"mb-0 font-weight-bolder\">Gender *:</label>\n                    <p-dropdown [style]=\"{'display':'block'}\" class=\"p-select\" [options]=\"genders\" formControlName=\"gender\"></p-dropdown>\n                    <p-message severity=\"error\" class=\"my-1\" text=\"Gender is required\" *ngIf=\"!userform.controls['gender'].valid&&userform.controls['gender'].dirty\"></p-message>\n                </div>\n\n                <div class=\"form-group col-12\">\n                    <button class=\"btn btn-primary mr-1\" [disabled]=\"!userform.valid\">Register</button>\n                    <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\n                </div>\n                </div>\n                <div style=\"text-align:center;margin-top:20px\" *ngIf=\"submitted\">\n                    Form Submitted\n                    <br>\n                    {{diagnostic}}\n                </div>\n            </form>\n            \n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/custom-forms/custom-forms.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/custom-forms/custom-forms.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-4 mb-3\">\n                <div class=\"bg-white h-100 p-2\">\n                    <p class=\"font-weight-bolder\">Select Picker</p>\n                    <p class=\"fnt-13 mb-0\">Basic</p> \n                    <p-dropdown [options]=\"cities\" [style]=\"{'display':'block'}\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a City\" optionLabel=\"name\" class=\"p-select\"></p-dropdown>\n                    \n                    <p class=\"fnt-13 mt-3 mb-0\">Select With Search</p> \n                    <p-dropdown [options]=\"cars\" [style]=\"{'display':'block'}\" [(ngModel)]=\"selectedCar\" filter=\"true\" placeholder=\"Select a Car\" class=\"p-select\"></p-dropdown>\n\n\n                    <p class=\"fnt-13 mb-0 mt-3\">Select with icon</p>            \n                    <p-dropdown class=\"p-select\" [options]=\"SelectCoins\" [(ngModel)]=\"selectedCar2\"  [style]=\"{'display':'block'}\"> \n                            <ng-template let-CoinIcon pTemplate=\"selectedItem\" class=\"p-select\">\n                                <img src=\"../../assets/images/{{CoinIcon.label}}.png\" style=\"width:16px;vertical-align:middle\" />\n                                <span style=\"vertical-align:middle; margin-left: .5em\">{{CoinIcon.label}}</span>\n                            </ng-template>\n                            <ng-template let-SelectCoins pTemplate=\"item\" class=\"p-select\">\n                                <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 16px;\">\n                                    <img src=\"../../assets/images/{{SelectCoins.label}}.png\" style=\"width:18px;position:absolute;top:1px;left:5px\"/>\n                                    <div style=\"font-size:11px; margin-left: 25px; margin-top:1px\">{{SelectCoins.label}}</div>\n                                </div>\n                            </ng-template>\n                        </p-dropdown>\n\n                        <p class=\"fnt-13 mb-0 mt-3\">Multi Select</p>\n                        <p-multiSelect [options]=\"cities1\" [(ngModel)]=\"selectedCities1\"  [style]=\"{'display':'block'}\"></p-multiSelect>\n                </div>\n                    </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <div class=\"bg-white h-100 p-2\">\n            <app-typehead></app-typehead>\n\n                </div>\n                </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <div class=\"bg-white h-100 p-2\">\n                <p class=\"font-weight-bolder\">Calendar</p>\n                <p class=\"fnt-13 mb-0\">Basic</p>\n                <p-calendar [(ngModel)]=\"date1\" class=\"p-input\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Spanish</p>\n                <p-calendar [(ngModel)]=\"date2\" [locale]=\"es\" class=\"p-input\" dateFormat=\"dd/mm/yy\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Icon</p>\n                <p-calendar [(ngModel)]=\"date3\" class=\"p-input\" [showIcon]=\"true\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Min-Max</p>\n                <p-calendar [(ngModel)]=\"date4\" [minDate]=\"minDate\" class=\"p-input\" [maxDate]=\"maxDate\" [readonlyInput]=\"true\"></p-calendar>\n                </div>\n                </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <div class=\"bg-white h-100 p-2\">\n                <p class=\"font-weight-bolder\">Calendar</p>\n                <p class=\"fnt-13 mb-0\">Disable Days</p>\n                <p-calendar [(ngModel)]=\"date5\" [disabledDates]=\"invalidDates\" class=\"p-input\"  [disabledDays]=\"[0,6]\" [readonlyInput]=\"true\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Navigators</p>\n                <p-calendar [(ngModel)]=\"date6\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"  class=\"p-input\" yearRange=\"2000:2030\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Time</p>\n                <p-calendar [(ngModel)]=\"date7\" [showTime]=\"true\"  class=\"p-input\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Time Only</p>\n                <p-calendar [(ngModel)]=\"date8\" [timeOnly]=\"true\" class=\"p-input\"></p-calendar>\n                </div>\n                </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <div class=\"bg-white h-100 p-2\">\n                <p class=\"font-weight-bolder\">Calendar</p>\n                <p class=\"fnt-13 mb-0\">Multiple</p>\n                <p-calendar [(ngModel)]=\"dates\" selectionMode=\"multiple\" [readonlyInput]=\"true\" class=\"p-input\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Range</p>\n                <p-calendar [(ngModel)]=\"rangeDates\" selectionMode=\"range\" [readonlyInput]=\"true\" class=\"p-input\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Button bar</p>\n                <p-calendar [(ngModel)]=\"date9\" showButtonBar=\"true\" class=\"p-input\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Date Template</p>\n                <p-calendar [(ngModel)]=\"date10\"  class=\"p-input\">\n                        <ng-template pTemplate=\"date\" let-date>\n                            <span [ngStyle]=\"{backgroundColor: (date.day < 30 && date.day > 15) ? '#81C784' : 'inherit'}\" style=\"border-radius:50%;padding: .25em;width: 1.75em; height:1.75em; display:block;\">{{date.day}}</span>\n                        </ng-template>\n                    </p-calendar>\n                </div>\n                </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <div class=\"bg-white h-100 p-2\">\n                <p class=\"font-weight-bolder\">Calendar</p>\n                <p class=\"fnt-13 mb-0\">Multiple Months</p>\n                <p-calendar [(ngModel)]=\"date11\" [numberOfMonths]=\"3\" class=\"p-input\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Month Picker</p>\n                <p-calendar [(ngModel)]=\"date12\" view=\"month\" dateFormat=\"mm/yy\" [yearNavigator]=\"true\" yearRange=\"2000:2030\" [readonlyInput]=\"true\" class=\"p-input\"></p-calendar>\n\n                <p class=\"fnt-13 mt-3 mb-0\">Touch UI</p>\n                <p-calendar [(ngModel)]=\"date13\" [touchUI]=\"true\" [readonlyInput]=\"true\" class=\"p-input\"></p-calendar>\n                </div>\n                </div>\n\n        \n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/form-validation/form-validation.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/form-validation/form-validation.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n<app-input-validation  class=\"col-md-6 mb-3\"></app-input-validation>\n<app-checkbox-validation  class=\"col-md-6 mb-3\"></app-checkbox-validation>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms-index/forms-index.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms-index/forms-index.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-1 py-3\">\n    \n        <router-outlet></router-outlet>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/input-groups/input-groups.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/input-groups/input-groups.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-4 mb-3\">\n        <div class=\"bg-white h-100 p-2\">\n            <p class=\"font-weight-bolder\">Input Addon</p>\n              <p class=\"mt-3 mb-0\">Form Input Prepend</p>\n           <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Left addon</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n              </div>\n              <p class=\"mt-4 mb-0\">Form Input Append</p>\n           <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n                <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">Right addon</span>\n                </div>\n              </div>\n              <p class=\"mt-4 mb-0\">Form Input Groups</p>\n              <div class=\"input-group\">\n                   <div class=\"input-group-prepend\">\n                     <span class=\"input-group-text\">Left addon</span>\n                   </div>\n                   <input type=\"text\" class=\"form-control\">\n                   <div class=\"input-group-append\">\n                     <span class=\"input-group-text\">Right addon</span>\n                   </div>\n                 </div>\n        </div>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n            <div class=\"bg-white h-100 p-2\">\n                <p class=\"font-weight-bolder\">Input Addon sm-size</p>\n                  <p class=\"mt-3 mb-0\">Form Input Prepend</p>\n               <div class=\"input-group input-group-sm\">\n                    <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-home\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n                  </div>\n                  <p class=\"mt-4 mb-0\">Form Input Append</p>\n               <div class=\"input-group input-group-sm\">\n                    <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-home\"></i></span>\n                       </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n                    <div class=\"input-group-append\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-home\"></i></span>\n                    </div>\n                  </div>\n                  <p class=\"mt-4 mb-0\">Form Input Groups</p>\n                  <div class=\"input-group input-group-sm\">\n                       <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-home\"></i></span>\n                       </div>\n                       <input type=\"text\" class=\"form-control\">\n                       <div class=\"input-group-append\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-home\"></i></span>\n                       </div>\n                     </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n                <div class=\"bg-white h-100 p-2\">\n                    <p class=\"font-weight-bolder\">Input Addon Lg-size</p>\n                      <p class=\"mt-3 mb-0\">Form Input Prepend</p>\n                   <div class=\"input-group input-group-lg\">\n                        <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"fa fa-user-circle\"></i></span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n                      </div>\n                      <p class=\"mt-4 mb-0\">Form Input Append</p>\n                   <div class=\"input-group input-group-lg\">\n                        <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"fa fa-user-circle\"></i></span>\n                           </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n                        <div class=\"input-group-append\">\n                                <span class=\"input-group-text\"><i class=\"fa fa-user-circle\"></i></span>\n                        </div>\n                      </div>\n                      <p class=\"mt-4 mb-0\">Form Input Groups</p>\n                      <div class=\"input-group input-group-lg\">\n                           <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"fa fa-user-circle\"></i></span>\n                           </div>\n                           <input type=\"text\" class=\"form-control\">\n                           <div class=\"input-group-append\">\n                                <span class=\"input-group-text\"><i class=\"fa fa-user-circle\"></i></span>\n                           </div>\n                         </div>\n                </div>\n            </div>\n\n\n\n\n        <div class=\"col-md-4 mb-3\">\n        <div class=\"bg-white h-100 p-2\">\n            <p class=\"font-weight-bolder\">Input Addon Color</p>\n              <p class=\"mt-3 mb-0\">Form Input Prepend</p>\n           <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                        <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n              </div>\n              <p class=\"mt-4 mb-0\">Form Input Append</p>\n           <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                        <button class=\"btn btn-warning\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                   </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n                <div class=\"input-group-append\">\n                        <button class=\"btn btn-info\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                </div>\n              </div>\n              <p class=\"mt-4 mb-0\">Form Input Groups</p>\n              <div class=\"input-group\">\n                   <div class=\"input-group-prepend\">\n                        <button class=\"btn btn-success\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                   </div>\n                   <input type=\"text\" class=\"form-control\">\n                   <div class=\"input-group-append\">\n                        <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                   </div>\n                 </div>\n\n                 <div class=\"form-group has-success  mt-2\">\n                        <label class=\"form-control-label mb-1\" for=\"inputSuccess1\">Valid input</label>\n                        <input type=\"text\" value=\"correct value\" class=\"form-control is-valid\" id=\"inputValid\">\n                        <div class=\"valid-feedback\">Success! You've done it.</div>\n                      </div>\n        </div>\n    </div>\n\n\n        <div class=\"col-md-4 mb-3\">\n        <div class=\"bg-white h-100 p-2\">\n            <p class=\"font-weight-bolder\">Input Addon outline Color</p>\n              <p class=\"mt-3 mb-0\">Form Input Prepend</p>\n           <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                <button class=\"btn btn-outline-primary border-right-0\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                </div>\n                <input type=\"text\" class=\"form-control border-primary\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n              </div>\n              <p class=\"mt-4 mb-0\">Form Input Append</p>\n           <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                        <button class=\"btn btn-outline-warning  border-right-0\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                   </div>\n                <input type=\"text\" class=\"form-control border-warning\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n                <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-info  border-left-0\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                </div>\n              </div>\n              <p class=\"mt-4 mb-0\">Form Input Groups</p>\n              <div class=\"input-group\">\n                   <div class=\"input-group-prepend\">\n                        <button class=\"btn btn-outline-success  border-right-0\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                   </div>\n                   <input type=\"text\" class=\"form-control border-success\">\n                   <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-danger  border-left-0\" type=\"button\"><i class=\"fa fa-home\"></i></button>\n                   </div>\n                 </div>\n                 <div class=\"form-group has-danger mt-2\">\n                        <label class=\"form-control-label mb-1\" for=\"inputDanger1\">Invalid input</label>\n                        <input type=\"text\" value=\"wrong value\" class=\"form-control is-invalid\" id=\"inputInvalid\">\n                        <div class=\"invalid-feedback\">Sorry, that username's taken. Try another?</div>\n                      </div>\n        </div>\n    </div>\n\n\n    <div class=\"col-md-4 mb-3\">\n            <div class=\"bg-white h-100 p-2\">\n                <p class=\"font-weight-bolder\">Only Input Size and Border</p>\n                <input class=\"form-control form-control-lg mt-3\" type=\"text\" placeholder=\".form-control-lg\">\n                <input class=\"form-control form-control-sm mt-3\" type=\"text\" placeholder=\".form-control-sm\">\n                <input class=\"form-control border-primary mt-3\" type=\"text\" placeholder=\".border-primary\">\n                <input class=\"form-control border-secondary mt-3\" type=\"text\" placeholder=\".border-secondary\">\n                <input class=\"form-control border-warning mt-3\" type=\"text\" placeholder=\".border-warning\">\n                <input class=\"form-control border-danger mt-3\" type=\"text\" placeholder=\".border-danger\">\n             \n               \n            </div>\n        </div>\n    \n\n\n</div>\n\n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/input-validation/input-validation.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/input-validation/input-validation.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <div class=\"bg-white h-100 p-2\">\n            <p class=\"font-weight-bolder\">Normal Form Validation</p>\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-row\">\n                    <div class=\"form-group col-4 col-sm-2\">\n                        <label class=\"mb-0 font-weight-bolder\">Title</label>\n                        <select formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\n                            <option value=\"\"></option>\n                            <option value=\"Mr\">Mr</option>\n                            <option value=\"Mrs\">Mrs</option>\n                            <option value=\"Miss\">Miss</option>\n                            <option value=\"Ms\">Ms</option>\n                        </select>\n                        <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.title.errors.required\">Title is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-8  col-sm-10\">\n                        <label class=\"mb-0 font-weight-bolder\">First Name</label>\n                        <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-12\">\n                        <label class=\"mb-0 font-weight-bolder\">Last Name</label>\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-12\">\n                        <label class=\"mb-0 font-weight-bolder\">Gender</label>\n                        <div class=\"d-flex justify-content-start custom-radio pl-0 mb-2\">\n                            <span>\n                            <input id=\"male\" type=\"radio\" class=\"custom-control-input\" value=\"male\" formControlName=\"gender\" [ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\">\n                            <label class=\"custom-control-label mr-3\" for=\"male\">Male</label>\n                            </span>\n                       \n                        <span>\n                            <input id=\"female\" type=\"radio\" class=\"custom-control-input\" value=\"female\" formControlName=\"gender\" [ngClass]=\"{ 'is-invalid': submitted && f.gender.errors }\">\n                            <label class=\"custom-control-label mr-3\" for=\"female\">Female</label>\n                            <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback mb-0 spec-error\">\n                            Please select either value\n                            </div>\n                        </span>\n                          </div>\n\n                         \n                    </div>\n\n                <div class=\"form-group col-12\">\n                    <label class=\"mb-0 font-weight-bolder\">Email</label>\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                        <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                    </div>\n                </div>\n                \n                <div class=\"form-group col-12\">\n                        <label class=\"mb-0 font-weight-bolder\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-12\">\n                        <label class=\"mb-0 font-weight-bolder\">Confirm Password</label>\n                        <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                        <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                            <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-12\">\n                    <div class=\"custom-control1 custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"acceptTerms\" formControlName=\"acceptTerms\" [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\">\n                            <label class=\"custom-control-label\" for=\"acceptTerms\">Check this custom checkbox</label>\n                            <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback\">Accept Ts & Cs is required</div>\n                          </div>\n                        </div>\n                <div class=\"form-group col-12\">\n                    <button class=\"btn btn-primary mr-1\">Register</button>\n                    <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\n                </div>\n                </div>\n            </form>\n    \n    \n    \n    </div>\n    \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/simple-form/simple-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/simple-form/simple-form.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-6 mb-3\">\n            <div class=\"bg-white h-100 p-2\">\n                    <form>\n                            <fieldset>\n                              <legend>Simple Form</legend>\n                              <div class=\"form-group\">\n                                <label for=\"exampleInputEmail1\">Email address</label>\n                                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                                <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n                              </div>\n                              <div class=\"form-group\">\n                                <label for=\"exampleInputPassword1\">Password</label>\n                                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n                              </div>\n                              <div class=\"form-group\">\n                                <label for=\"exampleSelect1\">Example select</label>\n                                <select class=\"form-control\" id=\"exampleSelect1\">\n                                  <option>1</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                                  <option>5</option>\n                                </select>\n                              </div>\n                             \n                              <div class=\"form-group\">\n                                <label for=\"exampleTextarea\">Example textarea</label>\n                                <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"2\"></textarea>\n                              </div>\n                              <div class=\"form-group\">\n                                <label for=\"exampleInputFile\">File input</label>\n                                <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\n                                <!-- <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small> -->\n                              </div>\n                              <div class=\"form-group\">\n                                <p>Radio buttons</p>\n                                <div class=\"form-check form-check-inline\">\n                                  <label class=\"form-check-label\">\n                                    <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n                                   Option 1\n                                  </label>\n                                </div>\n                                <div class=\"form-check form-check-inline\">\n                                <label class=\"form-check-label\">\n                                    <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\n                                   Option 2\n                                  </label>\n                                </div>\n                                <div class=\"form-check form-check-inline disabled\">\n                                <label class=\"form-check-label\">\n                                    <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\" disabled=\"\">\n                                   Option 3\n                                  </label>\n                                </div>\n                            </div>\n                              <div class=\"form-group\">\n                                <p>Checkboxes</p>\n                                <div class=\"form-check form-check-inline\">\n                                  <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                   Choose option\n                                  </label>\n                                </div>\n                                <div class=\"form-check form-check-inline disabled\">\n                                  <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                                    Choose option\n                                  </label>\n                                </div>\n                            </div>\n                              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                            </fieldset>\n                          </form>\n            </div>\n        </div>\n        <div class=\"col-md-6 mb-3\">\n            <div class=\"bg-white h-100 p-2\">\n                    <form>\n                            <fieldset>\n                              <legend>Customized Form</legend>\n                              <div class=\"form-group row\">\n                                <label for=\"exampleInputEmail2\" class=\"col-md-3 col-form-label\">Email address</label>\n                                <div class=\"col-md-9\">\n                                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                              </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                <label for=\"exampleInputPassword2\" class=\"col-md-3 col-form-label\">Password</label>\n                                <div class=\"col-md-9\">\n                                        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Password\">\n                              </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                <label for=\"exampleSelect3\" class=\"col-md-3 col-form-label\">Example select</label>\n                                <div class=\"col-md-9\">\n                                        <select class=\"form-control custom-select\"  id=\"exampleSelect3\">\n                                                <option>1</option>\n                                                <option>2</option>\n                                                <option>3</option>\n                                                <option>4</option>\n                                                <option>5</option>\n                                              </select>\n                              </div>\n                              </div>\n                              <div class=\"form-group row\">\n                                <label for=\"exampleTextarea2\" class=\"col-md-3 col-form-label\">Example textarea</label>\n                                <div class=\"col-md-9\">\n                                <textarea class=\"form-control\" id=\"exampleTextarea2\" rows=\"2\"></textarea>\n                              </div>\n                              </div>\n\n                              <div class=\"form-group row\">\n                                <label for=\"exampleInputFile2\"  class=\"col-md-3 col-form-label\">File input</label>\n                                <div class=\"col-md-9\">\n                                        <div class=\"custom-file\">\n                                                <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\">\n                                                <label class=\"custom-file-label\" for=\"inputGroupFile02\">Choose file</label>\n                                              </div>\n                              </div>\n                              </div>\n\n                              <div class=\"form-group row\">\n                                    <label  class=\"col-md-3 col-form-label\">Radio buttons</label>\n                                    <div class=\"col-md-9\">\n                                <div class=\"custom-radio form-check form-check-inline\">\n                                        <input type=\"radio\" id=\"customRadioA1\" name=\"customRadio\" class=\"custom-control-input\">\n                                        <label class=\"custom-control-label\" for=\"customRadioA1\">Option 1</label>\n                                </div>\n                                   \n                                <div class=\"custom-radio form-check form-check-inline\">\n                                        <input type=\"radio\" id=\"customRadioA2\" name=\"customRadio\" class=\"custom-control-input\">\n                                        <label class=\"custom-control-label\" for=\"customRadioA2\">Option 2</label>\n                                </div>\n                                <div class=\"custom-radio disabled form-check form-check-inline\">\n                                        <input type=\"radio\" id=\"customRadioA1\" name=\"customRadio\" class=\"custom-control-input\">\n                                        <label class=\"custom-control-label\" for=\"customRadioA3\">Option 3</label>\n                                </div>\n\n                               \n                               \n                              \n                               \n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                    <label  class=\"col-md-3 col-form-label\">Checkboxes</label>\n                                    <div class=\"col-md-9\">\n                            <div class=\"form-check form-check-inline custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckA1\">\n                                    <label class=\"custom-control-label\" for=\"customCheckA1\">Check this custom checkbox</label>\n                                    </div>\n                            <div class=\"form-check form-check-inline custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckA2\">\n                                    <label class=\"custom-control-label\" for=\"customCheckA2\">Check this custom checkbox</label>\n                                    </div>\n                                \n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                    <div class=\"col-md-9 offset-md-3\">\n                                            <button type=\"submit\" class=\"btn btn-primary mr-2\">Submit</button>\n                                            <button type=\"submit\" class=\"btn btn-secondary mr-2\">Cancel</button>\n                                    </div>\n                                  </div>\n                           \n                              \n                            </fieldset>\n                          </form>\n            </div>\n        </div>\n    </div>\n\n    \n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/typehead/typehead.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/typehead/typehead.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"font-weight-bolder\">AutoComplete Searchable</p>\n<p class=\"fnt-13 mb-0\">Basic</p>\n<p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"filterCountrySingle($event)\" field=\"name\" [size]=\"30\"\n    placeholder=\"Countries\" [minLength]=\"1\"  styleClass=\"wid100 typehed\"></p-autoComplete>\n<span>Country: {{country ? country.name||country : 'none'}}</span>\n\n\n<p class=\"fnt-13 mt-3 mb-0\">Advanced</p>\n<p-autoComplete  styleClass=\"wid100 typehed\" [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\n    [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\">\n    <ng-template let-brand pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\n            <img src=\"../../assets/images/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\n            <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\n        </div>\n    </ng-template>\n</p-autoComplete>\n\n\n<p class=\"fnt-13 mt-3 mb-0\">Multiple</p>\n<span class=\"ui-fluid\">\n    <p-autoComplete  [style]=\"{'display':'block'}\" [(ngModel)]=\"countries\" [suggestions]=\"filteredCountriesMultiple\" (completeMethod)=\"filterCountryMultiple($event)\" styleClass=\"wid100\"\n        [minLength]=\"1\" placeholder=\"Countries\" field=\"name\" [multiple]=\"true\">\n    </p-autoComplete>\n</span>\n<ul>\n    <li *ngFor=\"let c of countries\">{{c.name}}</li>\n</ul>\n\n<p-rating [(ngModel)]=\"val2\" (onRate)=\"handleRate($event)\" (onCancel)=\"handleCancel($event)\"></p-rating> \n<span *ngIf=\"msg\" style=\"margin-left:10px\">{{msg}}</span>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/leftnavbar/leftnavbar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leftnavbar/leftnavbar.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\"><a  routerLink=\"dashbord1\"><img src=\"assets/images/logo.png\" alt=\"\"></a></div>\n\n    <ul class=\"relative list-unstyled slide-navbar\"  id=\"accordionExample\">\n   <li class=\"sliderBtn\"><span class=\"navbar-icon\"></span></li>\n    <li class=\"set\"><span class=\"parent-drop\"><i class=\"fa fa-tachometer mr-2\"></i>Dashboard <i class=\"fa icof fa-angle-down\"></i></span>\n        <ul class=\"list-unstyled slide-submenu\">\n                <li><a routerLink=\"dashbord1\">Crypto Currency</a></li>\n                <li><a routerLink=\"web-analytics\">Web Analytics</a></li>\n                <li><a routerLink=\"main\">Social Media</a></li>\n            </ul>\n    </li>\n    <li class=\"set\"><span class=\"parent-drop\"><i class=\"fa fa-pie-chart mr-2\"></i>Charts <i class=\"fa fa-angle-down icof\"></i></span>\n        <ul class=\"list-unstyled slide-submenu pt-0\">\n            <li><a routerLink=\"line-chart\">Line Charts</a></li>\n            <li><a routerLink=\"area-charts\">Area Charts</a></li>\n            <li><a routerLink=\"all-charts\">All Charts</a></li>\n        </ul>\n        </li>\n    <li class=\"set\"><span class=\"parent-drop\"><i class=\"fa fa-edit mr-2\"></i>Forms <i class=\"fa fa-angle-down icof\"></i></span>\n        <ul class=\"list-unstyled slide-submenu\">\n            <li><a routerLink=\"forms-index/simple-form\">Forms</a></li>\n            <li><a routerLink=\"forms-index/input-groups\">Form Input Groups</a></li>\n            <li><a routerLink=\"forms-index/custom-forms\">Custom Forms</a></li>\n            <li><a routerLink=\"forms-index/form-validation\">Form Validation</a></li>\n        </ul>\n        </li>\n    <li class=\"set\"><span class=\"parent-drop\"><i class=\"fa fa-th mr-2\"></i>Widgets <i class=\"fa fa-angle-down icof\"></i></span>\n        <ul class=\"list-unstyled slide-submenu\">\n            <li><a routerLink=\"wiget-main/carousel\">Carousel</a></li>\n            <li><a routerLink=\"wiget-main/accordian\">Collapse</a></li>\n            <li><a routerLink=\"wiget-main/modal\">Modal</a></li>\n            <li><a routerLink=\"wiget-main/tooltip\">Tooltips</a></li>\n        </ul>\n        </li>\n        <li class=\"set\"><a class=\"parent-drop\" href=\"javascriot:void(0);\"><i class=\"fa fa-hand-pointer-o mr-2\"></i>Buttons</a></li>\n        <li class=\"set\"><a class=\"parent-drop\" routerLink=\"ui-elements\"><i class=\"fa fa-laptop mr-2\"></i>UI Elements</a></li>\n\n</ul>\n\n\n       \n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/main/main.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/main/main.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-1 py-3\">\n\n<app-social-activity></app-social-activity>\n<app-social-followers></app-social-followers>\n<app-youtubefacebook-widget></app-youtubefacebook-widget>\n  \n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/social-activity/social-activity.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/social-activity/social-activity.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n    <div class=\"col-12\">\n        <div class=\"bg-white p-2\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"py-2\">\n                    <h6 class=\"mt-0 mb-1\">Social Activity</h6>\n                    <p class=\"mb-0\">This is Photoshop's version of Lorem Ipsum. Proin</p>\n                </div>\n                <div class=\"py-2\">\n                    View: <p-dropdown class=\"btn-select-sm sort-by\" [options]=\"viewdays\"></p-dropdown>\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-sm ml-2\">Add New</button>\n                </div>\n            </div>\n            <div class=\"mx-n2\"><hr class=\"my-2\"></div>\n<div class=\"row my-3 social-widgit\">\n    <div class=\"col-md-6 col-lg-3 col-sm-12\">\n        <div class=\"d-flex justify-content-between align-items-center twitter\">\n        <div>Twitter<br><i class=\"fa fa-twitter fa-3x mt-3\"></i></div>\n        <div>Total Subscription<br><span class=\"fnt-16\"><i class=\"fas fa-arrow-up fnt-14\"></i> 76853</span><br><small>48% in Last 24 hours</small></div>\n    </div>\n    </div>\n    <div class=\"col-md-6 col-lg-3 col-sm-12\">\n        <div class=\"d-flex justify-content-between align-items-center linkdin\">\n        <div>Linkdin<br><i class=\"fa fa-linkedin-square fa-3x mt-3\"></i></div>\n        <div>Total Subscription<br><span class=\"fnt-16\"><i class=\"fas fa-arrow-up fnt-14\"></i> 76853</span><br><small>48% in Last 24 hours</small></div>\n    </div>\n    </div>\n    <div class=\"col-md-6 col-lg-3 col-sm-12\">\n        <div class=\" d-flex justify-content-between align-items-center facebook\">\n                <div>Facebook<br><i class=\"fa fa-facebook-official fa-3x mt-3\"></i></div>\n                <div>Total Subscription<br><span class=\"fnt-16\"><i class=\"fas fa-arrow-up fnt-14\"></i> 76853</span><br><small>48% in Last 24 hours</small></div>\n    </div>\n    </div>\n    <div class=\"col-md-6 col-lg-3 col-sm-12\">\n        <div class=\"d-flex justify-content-between align-items-center instagram\">\n                <div>Instagram<br><i class=\"fa fa-instagram fa-3x mt-3\"></i></div>\n                <div>Total Subscription<br><span class=\"fnt-16\"><i class=\"fas fa-arrow-up fnt-14\"></i> 76853</span><br><small>48% in Last 24 hours</small></div>\n    </div>\n    </div>\n\n</div>\n\n\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/social-followers/social-followers.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/social-followers/social-followers.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0 mt-3 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-4\">\n            <div class=\"bg-white h-100 p-2\">\n                  <h6>Social Media Followers</h6>\n                  <div class=\"mx-n2\">\n                        <table class=\"social-widget\">\n                            <tr>\n                            <td>\n                                <span class=\"social fb\"><i class=\"fa fa-facebook-f text-white\"></i></span>\n                                <span class=\"h6 mt-2 mb-0\">98,275</span>\n                                <small class=\"text-secondary\">Likes</small>\n                            </td>\n                            <td>\n                                <span class=\"social tw\"><i class=\"fa fa-twitter text-white\"></i></span>\n                                <span class=\"h6 mt-2 mb-0\">12,125</span>\n                                <small class=\"text-secondary\">Fallowers</small>\n                            </td>\n                            <td>\n                                <span class=\"social insta\"><i class=\"fa fa-instagram text-white\"></i></span>\n                                <span class=\"h6 mt-2 mb-0\">7,236</span>\n                                <small class=\"text-secondary\">Fallowers</small>\n                            </td>\n                        </tr>\n                        <tr>\n                                <td>\n                                        <span class=\"social gplus\"><i class=\"fa fa-google-plus-g text-white\"></i></span>\n                                        <span class=\"h6 mt-2 mb-0\">10,321</span>\n                                        <small class=\"text-secondary\">Fallowers</small>\n                                    </td>\n                                <td>\n                                        <span class=\"social youtub\"><i class=\"fa fa-youtube-play text-white\"></i></span>\n                                        <span class=\"h6 mt-2 mb-0\">10,956</span>\n                                        <small class=\"text-secondary\">Subscribers</small>\n                                    </td>\n                                <td>\n                                        <span class=\"social linkdin\"><i class=\"fa fa-linkedin text-white\"></i></span>\n                                        <span class=\"h6 mt-2 mb-0\">8,325</span>\n                                        <small class=\"text-secondary\">Fallowers</small>\n                                    </td>\n                        </tr>\n                        </table>               \n                </div>\n                          \n        </div>\n        </div>\n        <div class=\"col-md-8\">\n            <div class=\"bg-white h-100 p-2\">\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"py-2\">\n                                <h6 class=\"mt-0 mb-1\">Social Media Conversation</h6>\n                                <p class=\"mb-0\">This is Photoshop's version of Lorem Ipsum. Proin</p>\n                            </div>\n                            <div class=\"py-2\">\n                                View: <p-dropdown class=\"btn-select-sm sort-by\" [options]=\"viewdays\"></p-dropdown>\n                                <button type=\"button\" class=\"btn btn-outline-primary btn-sm ml-2\">Add New</button>\n                            </div>\n                        </div>\n                        <!-- <div class=\"mx-n2\"><hr class=\"my-2\"></div> -->\n                        <div class=\"table-responsive-md\">\n                        <table class=\"table table-md table-bordered mb-0\">\n                            <thead>\n                                <tr class=\"bg-light\">\n                                    <th>Source</th>\n                                    <th colspan=\"3\">Conversation</th>\n                                    <th colspan=\"2\">Sessions</th>\n                                    <th>Avg. Rate</th>\n                                </tr>\n                            </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let d of conversation | custompipe:5\">\n                                        <td>{{d.source}}</td>\n                                        <td style=\"width: 180px;\">\n                                            <div class=\"progress\" style=\"border-radius: 0px; height:8px; width: 100%;\">\n                                            <div class=\"progress-bar\" [ngStyle]=\"{'width.%': d.cv1}\"></div>\n                                            </div>\n                                            </td>\n                                        <td>{{d.cv1}}</td>\n                                        <td>{{d.cv2}}</td>\n                                        <td>{{d.cv1}}</td>\n                                        <td>{{d.cv2}}</td>\n                                        <td>{{d.avg}}</td>\n                                    </tr>\n                                </tbody>\n                        </table>\n                    </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/youtubefacebook-widget/youtubefacebook-widget.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/youtubefacebook-widget/youtubefacebook-widget.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-6\">\n            <div class=\"bg-white p-2 mt-3 h-100\">\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"py-2\">\n                              <h6 class=\"mt-0 mb-2\">Youtube Subscribers</h6>\n                              <h5 class=\"real-data mr-4\"><small>Total Subscriber</small>485,452</h5>\n                              <h5 class=\"real-data mr-4\"><small>New Subscriber</small>95,705</h5>\n                              <h5 class=\"real-data mr-4\"><small>Unsubscribed</small>7,253</h5>\n                            </div>\n                            <div class=\"py-2\">\n                        View: <p-dropdown class=\"btn-select-sm sort-by\" [options]=\"viewdays\"></p-dropdown></div>\n                          </div>\n                          <highcharts-chart\n                          [Highcharts] = \"highcharts\" \n                          [options] = \"chartOptions\" \n                          style = \"width: 100%; height: 300px; display: block;\">\n                        </highcharts-chart>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"bg-white p-2 mt-3 h-100\">\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                            <div>\n                              <h6 class=\"mb-3 mt-2\">Faceboomk Engaged Users and Page Impression</h6>\n                            </div>\n                          \n            </div>\n            <div class=\"mx-n2\"><hr class=\"mt-0 mb-2\"></div>\n            <div class=\"d-flex justify-content-between align-items-center\">\n                    <div class=\"py-2\">\n                      <p class=\"fnt-12 font-weight-bolder m-0\">Jan 25, 2019 To Feb 28, 2019</p>\n                      <p class=\"fnt-12  text-secondary m-0\">Jan 01, 2019 To Jan 24, 2019 (prev)</p>\n                      <p class=\"my-3 font-weight-bolder\">Facebook Page: <p-dropdown [style]=\"{'width':'130px'}\" class=\"bitcoin-select btn-select-sm sort-by\" [options]=\"page\"></p-dropdown></p>\n                    </div>\n                    <div class=\"py-2\">\n                View: <p-dropdown class=\"btn-select-sm sort-by\" [options]=\"viewdays\"></p-dropdown></div>\n                  </div>\n<div class=\"d-flex justify-content-between\">\n  <div class=\"w-50\">\n    <h6 class=\"mb-1\">Engaged Users</h6>\n    <h6 class=\"mb-1 font-weight-bolder text-primary\">17,178</h6>\n    <p class=\"fnt-13\"><i class=\"fa fa-arrow-up text-success\"></i> 2.75% <br>\n    <small class=\"text-secondary\">VS 16,641 (prev)</small></p>\n      <highcharts-chart\n      [Highcharts] = \"highcharts\" \n      [options] = \"chartOptions1\" \n      style = \"width: 100%; height: 150px; display: block;\">\n   </highcharts-chart>\n  </div>\n  <div class=\"w-50\">\n      <h6 class=\"mb-1\">Page Impression</h6>\n      <h6 class=\"mb-1 font-weight-bolder text-primary\">6,879,475</h6>\n      <p class=\"fnt-13\"><i class=\"fa fa-arrow-up text-success\"></i> 2.75% <br>\n      <small class=\"text-secondary\">VS 16,641 (prev)</small></p>\n    <highcharts-chart\n    [Highcharts] = \"highcharts\" \n    [options] = \"chartOptions2\" \n    style = \"width: 100%; height: 150px; display: block;\">\n </highcharts-chart>\n</div>\n</div>\n\n\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top-header d-flex justify-content-between align-items-center p-2\">\n    <div></div>\n  <div class=\"fnt-12 fnt-weight500\">\n      <div class=\"search-bar mx-2 mx-md-3\">\n          <input type=\"text\" name=\"search\" placeholder=\"{{text}}\" class=\"form-control search-input\">\n          <button type=\"submit\" class=\"search-btn\"><i class=\"fa fa-search\"></i></button>\n        </div>\n        <span class=\"search-bar mx-2 mx-md-3 notification\"><i class=\"fa fa-envelope\"></i></span>\n        <span class=\"search-bar mx-2 mx-md-3 notification\"><i class=\"fa fa-bell\"></i></span>\n        <span class=\"user\"><img src=\"assets/images/user.jpg\" class=\"ml-4 mr-3\"></span>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-table/trade-table.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trade-table/trade-table.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"d-flex justify-content-between align-items-center\">\n      <div class=\"py-2\">\n        <h6 class=\"mt-0 mb-1\">Trade History</h6>\n        <p class=\"mb-0\">Real time trade information and rating data</p>\n      </div>\n      <div class=\"py-2\">\n        <button type=\"button\" class=\"btn btn-light btn-sm\">View All</button>\n      </div>\n    </div>\n    <div class=\"table-responsive\">\n    <table class=\"table table-md fnt-12 mt-1 table-fixed\">\n      <thead>\n      <tr class=\"bg-light\">\n              <th>Price</th>\n              <th>Amount</th>\n              <th>Date</th>\n      </tr>\n      </thead>\n  <tbody>\n      <tr *ngFor=\"let d of tradehistroy | custompipe:12 \">\n          <td>{{d.price}}</td>\n          <td><img src=\"{{d.ico}}\" style=\"width: 16px;\"> {{d.amount}}</td>\n          <td>{{d.date}}</td>\n      </tr>\n  </tbody>\n  </table>\n  </div>\n  \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tradehistroy/tradehistroy.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tradehistroy/tradehistroy.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  tradehistroy works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/ui-elements.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/ui-elements.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-1 py-3\">\n  <div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n    <div  class=\"col-sm-6 mb-3\">\n      <div class=\"bg-white h-100 p-2\">\n        <h5>Alerts</h5>\n        <p>Alerts are created with the .alert class, followed by a contextual color classes:</p>\n        <div class=\"alert alert-success  alert-dismissible fade show\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          <strong>Success!</strong> This alert box could indicate a successful or positive action.\n        </div>\n        <div class=\"alert alert-info alert-dismissible fade show\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          <strong>Info!</strong> This alert box could indicate a neutral informative change or action.\n        </div>\n        <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <strong>Warning</strong> You should check in on some of those fields below.\n        </div>\n        <div class=\"alert alert-danger alert-dismissible fade show\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.\n        </div>\n        <div class=\"alert alert-primary alert-dismissible fade show\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          <strong>Primary!</strong> Indicates an important action.\n        </div>\n        <div class=\"alert alert-secondary alert-dismissible fade show\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          <strong>Secondary!</strong> Indicates a slightly less important action.\n        </div>\n      </div>\n    </div>\n\n    <div  class=\"col-sm-6 mb-3\">\n        <div class=\"bg-white h-100 p-2\">\n            <h5>Pill Badges</h5>\n            <span class=\"badge badge-pill badge-primary mx-1\">Primary</span>\n            <span class=\"badge badge-pill badge-secondary mx-1\">Secondary</span>\n            <span class=\"badge badge-pill badge-success mx-1\">Success</span>\n            <span class=\"badge badge-pill badge-danger mx-1\">Danger</span>\n            <span class=\"badge badge-pill badge-warning mx-1\">Warning</span>\n            <span class=\"badge badge-pill badge-info mx-1\">Info</span>\n            <span class=\"badge badge-pill badge-light mx-1\">Light</span>\n            <span class=\"badge badge-pill badge-dark mx-1\">Dark</span>\n            <hr>\n            <h5>Contextual Label Classes</h5>\n            <p>Contextual classes can be used to color the label.</p>  \n            <span class=\"badge badge-primary mx-1\">Primary</span>\n            <span class=\"badge badge-secondary mx-1\">Secondary</span>\n            <span class=\"badge badge-success mx-1\">Success</span>\n            <span class=\"badge badge-danger mx-1\">Danger</span>\n            <span class=\"badge badge-warning mx-1\">Warning</span>\n            <span class=\"badge badge-info mx-1\">Info</span>\n            <span class=\"badge badge-light mx-1\">Light</span>\n            <span class=\"badge badge-dark mx-1\">Dark</span>\n<hr>\n            <h5>Badges on Buttons</h5>\n            <button type=\"button\" class=\"btn btn-primary mx-1\">Primary <span class=\"badge badge-light\">4</span></button>\n            <button type=\"button\" class=\"btn btn-success mx-1\">Green <span class=\"badge badge-light\">4</span></button>\n            <button type=\"button\" class=\"btn btn-danger mx-1\">Red <span class=\"badge badge-light\">4</span></button>\n            <hr>\n            <h5>Badges Sizes</h5>\n            <div class=\"d-flex align-items-center flex-wrap\">\n              <div class=\"p-1\"><h1><span class=\"badge badge-secondary\">New</span></h1></div>\n              <div class=\"p-1\"><h2><span class=\"badge badge-secondary\">New</span></h2></div>\n              <div class=\"p-1\"><h3><span class=\"badge badge-secondary\">New</span></h3></div>\n              <div class=\"p-1\"><h4><span class=\"badge badge-secondary\">New</span></h4></div>\n              <div class=\"p-1\"><h5><span class=\"badge badge-secondary\">New</span></h5></div>\n              <div class=\"p-1\"><h6><span class=\"badge badge-secondary\">New</span></h6></div>\n            </div>\n          </div>\n          </div>\n          <div  class=\"col-sm-6 mb-3\">\n              <div class=\"bg-white h-100 p-2\">\n                  <h5>Breadcrumb</h5>\n                  <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                      <li class=\"breadcrumb-item active\" aria-current=\"page\">Home</li>\n                    </ol>\n                  </nav>\n                  \n                  <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                      <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                      <li class=\"breadcrumb-item active\" aria-current=\"page\">Library</li>\n                    </ol>\n                  </nav>\n                  \n                  <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                      <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                      <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>\n                      <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n                    </ol>\n                  </nav>\n                  <hr>\n\n         <h5>Spinners</h5>\n        <p>To create a spinner/loader, use the <code>.spinner-border</code> class:</p>                          \n        <div class=\"spinner-border\"></div>\n        <hr>\n          <p>Use any <strong>text color utilites</strong> to add a color to the spinner:</p>                                 \n          <div class=\"spinner-border text-muted m-1\"></div>\n          <div class=\"spinner-border text-primary m-1\"></div>\n          <div class=\"spinner-border text-success m-1\"></div>\n          <div class=\"spinner-border text-info m-1\"></div>\n          <div class=\"spinner-border text-warning m-1\"></div>\n          <div class=\"spinner-border text-danger m-1\"></div>\n          <div class=\"spinner-border text-secondary m-1\"></div>\n          <div class=\"spinner-border text-dark m-1\"></div>\n          <div class=\"spinner-border text-light m-1\"></div>\n\n                  </div>\n                  </div>\n                  <div  class=\"col-sm-6 mb-3\">\n                      <div class=\"bg-white h-100 p-2\">\n                          <h5>Pagination</h5>\n                          <nav aria-label=\"Page navigation example\">\n                              <ul class=\"pagination\">\n                                <li class=\"page-item\">\n                                  <a class=\"page-link\" href=\"#!\" aria-label=\"Previous\">\n                                    <span aria-hidden=\"true\">&laquo;</span>\n                                    <span class=\"sr-only\">Previous</span>\n                                  </a>\n                                </li>\n                                <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">1</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">2</a></li>\n                                <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">3</a></li>\n                                <li class=\"page-item\">\n                                  <a class=\"page-link\" href=\"#!\" aria-label=\"Next\">\n                                    <span aria-hidden=\"true\">&raquo;</span>\n                                    <span class=\"sr-only\">Next</span>\n                                  </a>\n                                </li>\n                              </ul>\n                            </nav>\n                          <hr>\n                          <h5>Disabled Pagination</h5>\n                          <nav aria-label=\"Page navigation example\">\n                              <ul class=\"pagination\">\n                                  <li class=\"page-item disabled\">\n                                    <a class=\"page-link\" href=\"#!\" tabindex=\"-1\">Previous</a>\n                                  </li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">1</a></li>\n                                  <li class=\"page-item active\">\n                                    <a class=\"page-link\" href=\"#!\">2 <span class=\"sr-only\">(current)</span></a>\n                                  </li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">3</a></li>\n                                  <li class=\"page-item\">\n                                    <a class=\"page-link\" href=\"#!\">Next</a>\n                                  </li>\n                                </ul>\n                            </nav>\n                            <hr>\n                            <h5>Large Pagination</h5>\n                            <nav aria-label=\"Page navigation example\">\n                                <ul class=\"pagination pagination-lg\">\n                                    <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#!\">1</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">2</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">3</a></li>\n                                  </ul>\n                              </nav>\n                            <hr>\n                            <h5>Small Pagination</h5>\n                            <nav aria-label=\"Page navigation example\">\n                                <ul class=\"pagination pagination-sm\">\n                                    <li class=\"page-item \">\n                                      <a class=\"page-link\" href=\"#!\" tabindex=\"-1\">Previous</a>\n                                    </li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">1</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">2</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#!\">3</a></li>\n                                    <li class=\"page-item\">\n                                      <a class=\"page-link\" href=\"#!\">Next</a>\n                                    </li>\n                                  </ul>\n                              </nav>\n                        </div>\n                        </div>\n\n\n  </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/accordian/accordian.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/accordian/accordian.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-6 mb-3\">\n                <div class=\"bg-white h-100 p-2\">\n                        <h6>Single Open</h6>\n                        <div id=\"accordion2\" role=\"tablist\">\n                                <div class=\"card\" *ngFor=\"let item of items\">\n                                  <div class=\"card-header accordinLink\" role=\"tab\">\n                                      <a href=\"javascript:void(0)\">\n                                       {{item.heading}}\n                                      </a>\n                                  </div>\n                                  <div class=\"collapse\">\n                                    <div class=\"card-body\">\n                                      {{item.body}}\n                                    </div>\n                                  </div>\n                                </div>\n                              </div> \n                            <hr>\n                        <h6>Multiple Open</h6>\n                        <div id=\"accordion\" role=\"tablist\">\n                                <div class=\"card\" *ngFor=\"let item of items; let i = index\">\n                                  <div class=\"card-header\" role=\"tab\">\n                                      <a data-toggle=\"collapse\" href=\"#collapse{{i}}\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                                       {{item.heading}}\n                                      </a>\n                                  </div>\n                              \n                                  <div id=\"collapse{{i}}\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                                    <div class=\"card-body\">\n                                      {{item.body}}\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>                  \n                            <hr>          \n                    </div>\n                    </div>   \n                    <div class=\"col-md-6 mb-3\">\n                            <div class=\"bg-white h-100 p-2\">\n                                <h6>Third Party Accordian</h6>\n                                <p-accordion>\n                                        <p-accordionTab *ngFor=\"let item of items; let i = index\" [selected]=\"i == 0\">\n                                            <p-header>{{item.heading}}</p-header>\n                                                {{item.body}}\n                                        </p-accordionTab>\n                                    </p-accordion>  \n                                    <h6 class=\"mt-3\">Third Party Tab Panel</h6>\n                <!-- <p-tabView>\n                        <p-tabPanel [header]=\"item.heading\" *ngFor=\"let item of items; let i = index\" [selected]=\"i == 0\">\n                            {{item.body}}\n                        </p-tabPanel>\n                    </p-tabView> -->\n\n                    <p-tabView>\n                      <p-tabPanel header=\"Godfather I\" leftIcon=\"pi pi-calendar\">\n                          The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                      </p-tabPanel>\n                      <p-tabPanel header=\"Godfather II\" leftIcon=\"pi pi-inbox\">\n                          Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                      </p-tabPanel>\n                      <p-tabPanel header=\"Godfather III\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n                          After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n                      </p-tabPanel>\n                  </p-tabView>\n\n</div>\n</div>\n\n                    </div>\n\n\n\n                  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/carousel/carousel.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/carousel/carousel.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-12 mb-3\">\n                <div class=\"bg-white h-100 p-2\">\n                <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n                        <ol class=\"carousel-indicators\">\n                        <li data-target=\"#carouselExampleCaptions\" *ngFor=\"let n of images let i = index\" [attr.data-slide-to]=\"i\" [ngClass]=\"{'active': i == 0}\"></li>\n                        </ol>\n                        <div class=\"carousel-inner\" role=\"listbox\" id=\"myDIV\">\n                        <div class=\"carousel-item\" *ngFor=\"let d of images; let x = index\"  [ngClass]=\"{'active': x == 0}\">\n                        <img class=\"d-block w-100\" src=\"{{d.img}}\" alt=\"{{d.img}}\">\n                        <div class=\"carousel-caption d-none d-md-block\">\n                        <h3>{{d.title1}}</h3>\n                        <p>{{d.subtittle}}</p>\n                        <a href=\"{{d.link}}\" target=\"_new\" class=\"btn btn-light\">Read More</a>\n                        </div>\n                        </div>\n                        </div>\n                        <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Previous</span>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                        </a>\n                </div>\n        </div>\n       </div>\n\n        <div class=\"col-md-12 mb-3\">\n                <div class=\"bg-white h-100 p-2\">\n                        \n                        <div id=\"carouselExampleCaptions1\" class=\"carousel slide\" data-ride=\"carousel\">\n                                <div class=\"carousel-inner\" role=\"listbox\" id=\"myDIV\">\n                                <div class=\"carousel-item\" *ngFor=\"let d of images  | custompipe:5 let x = index\"  [ngClass]=\"{'active': x == 0}\">\n                                <img class=\"d-block w-100\" src=\"{{d.img}}\" alt=\"{{d.img}}\">\n                                <div class=\"carousel-caption d-none d-md-block\">\n                                 <div class=\"container text-left\">\n                                <h3>{{d.title1}}</h3>\n                                <p>{{d.subtittle}}</p>\n                                <a href=\"{{d.link}}\" target=\"_new\" class=\"btn btn-light\">Read More</a>\n                                </div>\n                                </div>\n                                </div>\n                                </div>\n                                <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions1\" role=\"button\" data-slide=\"prev\">\n                                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                                <span class=\"sr-only\">Previous</span>\n                                </a>\n                                <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions1\" role=\"button\" data-slide=\"next\">\n                                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                                <span class=\"sr-only\">Next</span>\n                                </a>\n\n                                <ol class=\"thumb-indicators carousel-indicators\">\n                                                <li data-target=\"#carouselExampleCaptions1\" *ngFor=\"let n2 of images  | custompipe:5 let i = index\" [attr.data-slide-to]=\"i\" [ngClass]=\"{'active': i == 0}\">\n                                                  <img src=\"{{n2.img}}\" alt=\"\">\n                                                </li>\n                                              </ol>\n                        </div>\n                </div>\n       </div>\n</div>       \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/modal/modal.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/modal/modal.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0 w-100 d-flex flex-wrap align-content-stretch\">\n        <div class=\"col-md-6 mb-3\">\n                <div class=\"bg-white h-100 p-2\">\n                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n                                Launch demo modal\n                              </button>\n                    </div>\n                    </div>\n                    </div>\n\n\n\n                    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                            <div class=\"modal-dialog\" role=\"document\">\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                  </button>\n                                </div>\n                                <div class=\"modal-body\">\n                                <app-current-orders></app-current-orders>\n                                </div>\n                                <div class=\"modal-footer\">\n                                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>                    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/tooltip/tooltip.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/tooltip/tooltip.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>tooltip works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/wiget-main/wiget-main.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/wiget-main/wiget-main.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-1 py-3\">\r\n    \r\n        <router-outlet></router-outlet>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/active-orders-full/active-orders-full.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/active-orders-full/active-orders-full.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2ZS1vcmRlcnMtZnVsbC9hY3RpdmUtb3JkZXJzLWZ1bGwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/active-orders-full/active-orders-full.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/active-orders-full/active-orders-full.component.ts ***!
  \********************************************************************/
/*! exports provided: ActiveOrdersFullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveOrdersFullComponent", function() { return ActiveOrdersFullComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ActiveOrdersFullComponent = /** @class */ (function () {
    function ActiveOrdersFullComponent(http) {
        this.http = http;
        this.sortby = [
            { label: 'sort by', value: null },
            { label: '1 Days', value: { id: 1, name: '1 Days' } },
            { label: '7 Days', value: { id: 2, name: '7 Days' } },
            { label: '15 Days', value: { id: 3, name: 'Lon15 Days' } },
            { label: '1 Month', value: { id: 4, name: '1 Month' } },
            { label: '3 Month', value: { id: 5, name: '3 Month' } }
        ];
    }
    ActiveOrdersFullComponent.prototype.ngOnInit = function () {
        this.letNewss();
    };
    ActiveOrdersFullComponent.prototype.letNewss = function () {
        var _this = this;
        var url = "../../assets/data-folder/table.json";
        this.http.get(url)
            .subscribe(function (res) {
            console.log(res);
            _this.resData = res;
            _this.tradehistroy = res;
        }, function (err) {
            console.log(err);
        });
    };
    ActiveOrdersFullComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ActiveOrdersFullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active-orders-full',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./active-orders-full.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-orders-full/active-orders-full.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./active-orders-full.component.css */ "./src/app/active-orders-full/active-orders-full.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActiveOrdersFullComponent);
    return ActiveOrdersFullComponent;
}());

// 
// resData: any;
// letNews: any;
// tradehistroy: any;
// 


/***/ }),

/***/ "./src/app/active-orders/active-orders.component.css":
/*!***********************************************************!*\
  !*** ./src/app/active-orders/active-orders.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host>>>.sort-by .ui-dropdown{min-width: 100px;}\r\n:host>>>.highcharts-title, :host>>>.highcharts-credits{display: none;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLW9yZGVycy9hY3RpdmUtb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCLGdCQUFnQixDQUFDO0FBQy9DLHVEQUF1RCxhQUFhLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hY3RpdmUtb3JkZXJzL2FjdGl2ZS1vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0Pj4+LnNvcnQtYnkgLnVpLWRyb3Bkb3due21pbi13aWR0aDogMTAwcHg7fVxyXG46aG9zdD4+Pi5oaWdoY2hhcnRzLXRpdGxlLCA6aG9zdD4+Pi5oaWdoY2hhcnRzLWNyZWRpdHN7ZGlzcGxheTogbm9uZTt9Il19 */");

/***/ }),

/***/ "./src/app/active-orders/active-orders.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/active-orders/active-orders.component.ts ***!
  \**********************************************************/
/*! exports provided: ActiveOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveOrdersComponent", function() { return ActiveOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var ActiveOrdersComponent = /** @class */ (function () {
    function ActiveOrdersComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                plotBorderWidth: null,
                plotShadow: false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        // format: '{point.name}%: {point.percentage:.1f} %',
                        format: '{point.name}',
                    },
                    showInLegend: true
                }
            },
            legend: {
                itemMarginTop: 12,
                itemMarginBottom: 12,
                symbolHeight: 11,
                symbolRadius: 0,
                itemStyle: {
                    fontWeight: '400',
                },
                align: 'left',
                layout: 'vertical',
                verticalAlign: 'top',
                x: 0,
                y: 10
            },
            series: [{
                    minPointSize: 5,
                    innerSize: '60%',
                    zMin: 0,
                    type: 'pie',
                    legend: 'true',
                    name: 'Currency value',
                    data: [
                        ['Bitcoin', 30],
                        ['ETHERUM', 15],
                        //  {
                        //     name: 'Chrome',
                        //     y: 12.8,
                        //     sliced: true,
                        //     selected: true
                        //  },
                        ['ZCASH', 15],
                        ['PEERCOIN', 10],
                        ['Litecoin', 15],
                        ['Dash', 15]
                    ],
                    dataLabels: {
                        style: {
                            fontWeight: 'normal'
                        }
                    }
                }]
        };
        this.sortby = [
            { label: 'sort by', value: null },
            { label: '1 Days', value: { id: 1, name: '1 Days' } },
            { label: '7 Days', value: { id: 2, name: '7 Days' } },
            { label: '15 Days', value: { id: 3, name: 'Lon15 Days' } },
            { label: '1 Month', value: { id: 4, name: '1 Month' } },
            { label: '3 Month', value: { id: 5, name: '3 Month' } }
        ];
    }
    ActiveOrdersComponent.prototype.ngOnInit = function () {
    };
    ActiveOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active-orders',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./active-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/active-orders/active-orders.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./active-orders.component.css */ "./src/app/active-orders/active-orders.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActiveOrdersComponent);
    return ActiveOrdersComponent;
}());



/***/ }),

/***/ "./src/app/analytics/audience-metrics/audience-metrics.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/analytics/audience-metrics/audience-metrics.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".real-data{float: left; font-size: 17px;}\r\n.real-data>small{display: block; font-size: 60%; margin-bottom: .25rem}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbHl0aWNzL2F1ZGllbmNlLW1ldHJpY3MvYXVkaWVuY2UtbWV0cmljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsV0FBVyxFQUFFLGVBQWUsQ0FBQztBQUN4QyxpQkFBaUIsY0FBYyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIiLCJmaWxlIjoic3JjL2FwcC9hbmFseXRpY3MvYXVkaWVuY2UtbWV0cmljcy9hdWRpZW5jZS1tZXRyaWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhbC1kYXRhe2Zsb2F0OiBsZWZ0OyBmb250LXNpemU6IDE3cHg7fVxyXG4ucmVhbC1kYXRhPnNtYWxse2Rpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDYwJTsgbWFyZ2luLWJvdHRvbTogLjI1cmVtfSJdfQ== */");

/***/ }),

/***/ "./src/app/analytics/audience-metrics/audience-metrics.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/analytics/audience-metrics/audience-metrics.component.ts ***!
  \**************************************************************************/
/*! exports provided: AudienceMetricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceMetricsComponent", function() { return AudienceMetricsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var AudienceMetricsComponent = /** @class */ (function () {
    function AudienceMetricsComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['12PM', '02PM', '04PM', '06PM', '08PM', '10PM', '00AM', '02AM', '04AM', '06AM', '08AM', '10AM']
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                },
                series: {
                    fillOpacity: 0.1
                }
            },
            series: [{
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                    color: '#ff815a',
                }, {
                    name: 'London',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
                    color: '#357ffc'
                }]
        };
    }
    AudienceMetricsComponent.prototype.ngOnInit = function () {
    };
    AudienceMetricsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audience-metrics',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audience-metrics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/audience-metrics/audience-metrics.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audience-metrics.component.css */ "./src/app/analytics/audience-metrics/audience-metrics.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AudienceMetricsComponent);
    return AudienceMetricsComponent;
}());



/***/ }),

/***/ "./src/app/analytics/google-analytice/google-analytice.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/analytics/google-analytice/google-analytice.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host>>>.highcharts-credits{display: none;}\r\n.real-data{font-size: 16px;}\r\n.real-data>small{display: block; font-size: 70%; margin: .5rem 0em}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbHl0aWNzL2dvb2dsZS1hbmFseXRpY2UvZ29vZ2xlLWFuYWx5dGljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QixhQUFhLENBQUM7QUFDMUMsV0FBVyxlQUFlLENBQUM7QUFDM0IsaUJBQWlCLGNBQWMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCIiwiZmlsZSI6InNyYy9hcHAvYW5hbHl0aWNzL2dvb2dsZS1hbmFseXRpY2UvZ29vZ2xlLWFuYWx5dGljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q+Pj4uaGlnaGNoYXJ0cy1jcmVkaXRze2Rpc3BsYXk6IG5vbmU7fVxyXG4ucmVhbC1kYXRhe2ZvbnQtc2l6ZTogMTZweDt9XHJcbi5yZWFsLWRhdGE+c21hbGx7ZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogNzAlOyBtYXJnaW46IC41cmVtIDBlbX0iXX0= */");

/***/ }),

/***/ "./src/app/analytics/google-analytice/google-analytice.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/analytics/google-analytice/google-analytice.component.ts ***!
  \**************************************************************************/
/*! exports provided: GoogleAnalyticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticeComponent", function() { return GoogleAnalyticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var GoogleAnalyticeComponent = /** @class */ (function () {
    function GoogleAnalyticeComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                type: "area"
            },
            title: {
                text: ""
            },
            subtitle: {
                text: ""
            },
            yAxis: {
                title: {
                    text: ""
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
            },
            xAxis: {
                title: {
                    text: ""
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
            },
            tooltip: {
                valueSuffix: ""
            },
            legend: {
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                x: -15,
                y: 0,
            },
            series: [{
                    fillOpacity: 0.1,
                    color: '#08bf6f',
                    name: 'Bounce Rate',
                    data: [1.2, 3.3, 4.2, 5.3, 6.7, 7.1, 7.3, 9.1, 8.2]
                }]
        };
        this.chartOptions1 = {
            chart: {
                type: "area"
            },
            title: {
                text: ""
            },
            subtitle: {
                text: ""
            },
            yAxis: {
                title: {
                    text: ""
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
            },
            xAxis: {
                title: {
                    text: ""
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
            },
            tooltip: {
                valueSuffix: ""
            },
            legend: {
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                x: -15,
                y: 0,
            },
            series: [{
                    fillOpacity: 0.1,
                    color: '#fb6436',
                    name: 'Time On Site',
                    data: [1.2, 3.3, 4.2, 5.3, 6.7, 7.1, 7.3, 9.1, 8.2]
                }]
        };
    }
    GoogleAnalyticeComponent.prototype.ngOnInit = function () {
    };
    GoogleAnalyticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-analytice',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-analytice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/google-analytice/google-analytice.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-analytice.component.css */ "./src/app/analytics/google-analytice/google-analytice.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleAnalyticeComponent);
    return GoogleAnalyticeComponent;
}());



/***/ }),

/***/ "./src/app/analytics/google-session/google-session.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/analytics/google-session/google-session.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".radius4{border-radius: 4px; width: 36px; height: 36px; display: inline-block;}\r\n.linehieght{line-height: 25px;}\r\n.linehieght .h6{font-size: 18px; font-weight: 600;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbHl0aWNzL2dvb2dsZS1zZXNzaW9uL2dvb2dsZS1zZXNzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixDQUFDO0FBQzlFLFlBQVksaUJBQWlCLENBQUM7QUFDOUIsZ0JBQWdCLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy9nb29nbGUtc2Vzc2lvbi9nb29nbGUtc2Vzc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGl1czR7Ym9yZGVyLXJhZGl1czogNHB4OyB3aWR0aDogMzZweDsgaGVpZ2h0OiAzNnB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4ubGluZWhpZWdodHtsaW5lLWhlaWdodDogMjVweDt9XHJcbi5saW5laGllZ2h0IC5oNntmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7fSJdfQ== */");

/***/ }),

/***/ "./src/app/analytics/google-session/google-session.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/analytics/google-session/google-session.component.ts ***!
  \**********************************************************************/
/*! exports provided: GoogleSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleSessionComponent", function() { return GoogleSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleSessionComponent = /** @class */ (function () {
    function GoogleSessionComponent() {
    }
    GoogleSessionComponent.prototype.ngOnInit = function () {
    };
    GoogleSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-session',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-session.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/google-session/google-session.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-session.component.css */ "./src/app/analytics/google-session/google-session.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleSessionComponent);
    return GoogleSessionComponent;
}());



/***/ }),

/***/ "./src/app/analytics/page-view/page-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/analytics/page-view/page-view.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy9wYWdlLXZpZXcvcGFnZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/analytics/page-view/page-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/analytics/page-view/page-view.component.ts ***!
  \************************************************************/
/*! exports provided: PageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewComponent", function() { return PageViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PageViewComponent = /** @class */ (function () {
    function PageViewComponent(http) {
        this.http = http;
    }
    PageViewComponent.prototype.ngOnInit = function () {
        this.letNewss();
    };
    PageViewComponent.prototype.letNewss = function () {
        var _this = this;
        var url = "../../assets/data-folder/table.json";
        this.http.get(url)
            .subscribe(function (res) {
            console.log(res);
            _this.resData = res;
            _this.sessions = res;
        }, function (err) {
            console.log(err);
        });
    };
    PageViewComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PageViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/page-view/page-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-view.component.css */ "./src/app/analytics/page-view/page-view.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageViewComponent);
    return PageViewComponent;
}());



/***/ }),

/***/ "./src/app/analytics/session-by-channel/session-by-channel.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/analytics/session-by-channel/session-by-channel.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy9zZXNzaW9uLWJ5LWNoYW5uZWwvc2Vzc2lvbi1ieS1jaGFubmVsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/analytics/session-by-channel/session-by-channel.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/analytics/session-by-channel/session-by-channel.component.ts ***!
  \******************************************************************************/
/*! exports provided: SessionByChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionByChannelComponent", function() { return SessionByChannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SessionByChannelComponent = /** @class */ (function () {
    function SessionByChannelComponent(http) {
        this.http = http;
    }
    SessionByChannelComponent.prototype.ngOnInit = function () {
        this.letNewss();
    };
    SessionByChannelComponent.prototype.letNewss = function () {
        var _this = this;
        var url = "../../assets/data-folder/table.json";
        this.http.get(url)
            .subscribe(function (res) {
            console.log(res);
            _this.resData = res;
            _this.sessions = res;
        }, function (err) {
            console.log(err);
        });
    };
    SessionByChannelComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SessionByChannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-by-channel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./session-by-channel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/session-by-channel/session-by-channel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./session-by-channel.component.css */ "./src/app/analytics/session-by-channel/session-by-channel.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SessionByChannelComponent);
    return SessionByChannelComponent;
}());



/***/ }),

/***/ "./src/app/analytics/user-activity/user-activity.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/analytics/user-activity/user-activity.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy91c2VyLWFjdGl2aXR5L3VzZXItYWN0aXZpdHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/analytics/user-activity/user-activity.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/analytics/user-activity/user-activity.component.ts ***!
  \********************************************************************/
/*! exports provided: UserActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivityComponent", function() { return UserActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserActivityComponent = /** @class */ (function () {
    function UserActivityComponent() {
    }
    UserActivityComponent.prototype.ngOnInit = function () {
    };
    UserActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-activity',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/user-activity/user-activity.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-activity.component.css */ "./src/app/analytics/user-activity/user-activity.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserActivityComponent);
    return UserActivityComponent;
}());



/***/ }),

/***/ "./src/app/analytics/user-by-country/user-by-country.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/analytics/user-by-country/user-by-country.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy91c2VyLWJ5LWNvdW50cnkvdXNlci1ieS1jb3VudHJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/analytics/user-by-country/user-by-country.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/analytics/user-by-country/user-by-country.component.ts ***!
  \************************************************************************/
/*! exports provided: UserByCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserByCountryComponent", function() { return UserByCountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserByCountryComponent = /** @class */ (function () {
    function UserByCountryComponent() {
    }
    UserByCountryComponent.prototype.ngOnInit = function () {
    };
    UserByCountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-by-country',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-by-country.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/user-by-country/user-by-country.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-by-country.component.css */ "./src/app/analytics/user-by-country/user-by-country.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserByCountryComponent);
    return UserByCountryComponent;
}());



/***/ }),

/***/ "./src/app/analytics/web-analytics/web-analytics.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/analytics/web-analytics/web-analytics.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy93ZWItYW5hbHl0aWNzL3dlYi1hbmFseXRpY3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/analytics/web-analytics/web-analytics.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/analytics/web-analytics/web-analytics.component.ts ***!
  \********************************************************************/
/*! exports provided: WebAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAnalyticsComponent", function() { return WebAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WebAnalyticsComponent = /** @class */ (function () {
    function WebAnalyticsComponent(http) {
        this.http = http;
        this.website = [
            { label: 'Select a Website', value: null },
            { label: 'www.example.com', value: { id: 1, name: 'www.example.com' } },
            { label: 'www.example2.com', value: { id: 2, name: 'www.example2.com' } },
        ];
        this.filter = [
            { label: 'Filter by Date', value: null },
            { label: 'Last One Weak', value: { id: 1, name: 'Last one weak' } },
            { label: 'Last 15 days', value: { id: 2, name: 'last 15 days' } },
        ];
    }
    WebAnalyticsComponent.prototype.ngOnInit = function () {
    };
    WebAnalyticsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WebAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-web-analytics',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./web-analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/web-analytics/web-analytics.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./web-analytics.component.css */ "./src/app/analytics/web-analytics/web-analytics.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebAnalyticsComponent);
    return WebAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/analytics/web-performance/web-performance.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/analytics/web-performance/web-performance.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy93ZWItcGVyZm9ybWFuY2Uvd2ViLXBlcmZvcm1hbmNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/analytics/web-performance/web-performance.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/analytics/web-performance/web-performance.component.ts ***!
  \************************************************************************/
/*! exports provided: WebPerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPerformanceComponent", function() { return WebPerformanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebPerformanceComponent = /** @class */ (function () {
    function WebPerformanceComponent() {
    }
    WebPerformanceComponent.prototype.ngOnInit = function () {
    };
    WebPerformanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-web-performance',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./web-performance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics/web-performance/web-performance.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./web-performance.component.css */ "./src/app/analytics/web-performance/web-performance.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebPerformanceComponent);
    return WebPerformanceComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashbord1_dashbord1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashbord1/dashbord1.component */ "./src/app/dashbord1/dashbord1.component.ts");
/* harmony import */ var _dashbord2_dashbord2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashbord2/dashbord2.component */ "./src/app/dashbord2/dashbord2.component.ts");
/* harmony import */ var _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts/line-chart/line-chart.component */ "./src/app/charts/line-chart/line-chart.component.ts");
/* harmony import */ var _charts_area_charts_area_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/area-charts/area-charts.component */ "./src/app/charts/area-charts/area-charts.component.ts");
/* harmony import */ var _charts_all_charts_all_charts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/all-charts/all-charts.component */ "./src/app/charts/all-charts/all-charts.component.ts");
/* harmony import */ var _ui_elements_ui_elements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui-elements/ui-elements.component */ "./src/app/ui-elements/ui-elements.component.ts");
/* harmony import */ var _analytics_web_analytics_web_analytics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./analytics/web-analytics/web-analytics.component */ "./src/app/analytics/web-analytics/web-analytics.component.ts");
/* harmony import */ var _socialMedia_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./socialMedia/main/main.component */ "./src/app/socialMedia/main/main.component.ts");
/* harmony import */ var _forms_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/input-groups/input-groups.component */ "./src/app/forms/input-groups/input-groups.component.ts");
/* harmony import */ var _forms_simple_form_simple_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/simple-form/simple-form.component */ "./src/app/forms/simple-form/simple-form.component.ts");
/* harmony import */ var _forms_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/form-validation/form-validation.component */ "./src/app/forms/form-validation/form-validation.component.ts");
/* harmony import */ var _forms_custom_forms_custom_forms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forms/custom-forms/custom-forms.component */ "./src/app/forms/custom-forms/custom-forms.component.ts");
/* harmony import */ var _forms_forms_index_forms_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms/forms-index/forms-index.component */ "./src/app/forms/forms-index/forms-index.component.ts");
/* harmony import */ var _wigets_wiget_main_wiget_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wigets/wiget-main/wiget-main.component */ "./src/app/wigets/wiget-main/wiget-main.component.ts");
/* harmony import */ var _wigets_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wigets/carousel/carousel.component */ "./src/app/wigets/carousel/carousel.component.ts");
/* harmony import */ var _wigets_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wigets/accordian/accordian.component */ "./src/app/wigets/accordian/accordian.component.ts");
/* harmony import */ var _wigets_modal_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./wigets/modal/modal.component */ "./src/app/wigets/modal/modal.component.ts");
/* harmony import */ var _wigets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./wigets/tooltip/tooltip.component */ "./src/app/wigets/tooltip/tooltip.component.ts");





















var routes = [
    { path: '', component: _dashbord1_dashbord1_component__WEBPACK_IMPORTED_MODULE_3__["Dashbord1Component"] },
    { path: 'dashbord1', component: _dashbord1_dashbord1_component__WEBPACK_IMPORTED_MODULE_3__["Dashbord1Component"] },
    { path: 'dashbord2', component: _dashbord2_dashbord2_component__WEBPACK_IMPORTED_MODULE_4__["Dashbord2Component"] },
    { path: 'line-chart', component: _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"] },
    { path: 'area-charts', component: _charts_area_charts_area_charts_component__WEBPACK_IMPORTED_MODULE_6__["AreaChartsComponent"] },
    { path: 'all-charts', component: _charts_all_charts_all_charts_component__WEBPACK_IMPORTED_MODULE_7__["AllChartsComponent"] },
    { path: 'ui-elements', component: _ui_elements_ui_elements_component__WEBPACK_IMPORTED_MODULE_8__["UiElementsComponent"] },
    { path: 'web-analytics', component: _analytics_web_analytics_web_analytics_component__WEBPACK_IMPORTED_MODULE_9__["WebAnalyticsComponent"] },
    { path: 'main', component: _socialMedia_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"] },
    { path: 'forms-index', component: _forms_forms_index_forms_index_component__WEBPACK_IMPORTED_MODULE_15__["FormsIndexComponent"], children: [
            { path: 'simple-form', component: _forms_simple_form_simple_form_component__WEBPACK_IMPORTED_MODULE_12__["SimpleFormComponent"] },
            { path: 'input-groups', component: _forms_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_11__["InputGroupsComponent"] },
            { path: 'custom-forms', component: _forms_custom_forms_custom_forms_component__WEBPACK_IMPORTED_MODULE_14__["CustomFormsComponent"] },
            { path: 'form-validation', component: _forms_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_13__["FormValidationComponent"] },
        ] },
    { path: 'wiget-main', component: _wigets_wiget_main_wiget_main_component__WEBPACK_IMPORTED_MODULE_16__["WigetMainComponent"], children: [
            { path: 'carousel', component: _wigets_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_17__["CarouselComponent"] },
            { path: 'accordian', component: _wigets_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_18__["AccordianComponent"] },
            { path: 'modal', component: _wigets_modal_modal_component__WEBPACK_IMPORTED_MODULE_19__["ModalComponent"] },
            { path: 'tooltip', component: _wigets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_20__["TooltipComponent"] }
        ] },
    { path: '**', component: _dashbord1_dashbord1_component__WEBPACK_IMPORTED_MODULE_3__["Dashbord1Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_Customservice) {
        this._Customservice = _Customservice;
        this.title = 'cripto';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.text = this._Customservice.display();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/rating */ "./node_modules/primeng/rating.js");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_rating__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _leftnavbar_leftnavbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./leftnavbar/leftnavbar.component */ "./src/app/leftnavbar/leftnavbar.component.ts");
/* harmony import */ var _dashbord1_dashbord1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashbord1/dashbord1.component */ "./src/app/dashbord1/dashbord1.component.ts");
/* harmony import */ var _dashbord2_dashbord2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashbord2/dashbord2.component */ "./src/app/dashbord2/dashbord2.component.ts");
/* harmony import */ var _coins_coins_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./coins/coins.component */ "./src/app/coins/coins.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _service_counrtyservices_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/counrtyservices.service */ "./src/app/service/counrtyservices.service.ts");
/* harmony import */ var _chart_rating_chart_rating_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./chart-rating/chart-rating.component */ "./src/app/chart-rating/chart-rating.component.ts");
/* harmony import */ var _trade_table_trade_table_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./trade-table/trade-table.component */ "./src/app/trade-table/trade-table.component.ts");
/* harmony import */ var _tradehistroy_tradehistroy_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tradehistroy/tradehistroy.component */ "./src/app/tradehistroy/tradehistroy.component.ts");
/* harmony import */ var _current_orders_current_orders_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./current-orders/current-orders.component */ "./src/app/current-orders/current-orders.component.ts");
/* harmony import */ var _active_orders_active_orders_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./active-orders/active-orders.component */ "./src/app/active-orders/active-orders.component.ts");
/* harmony import */ var _active_orders_full_active_orders_full_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./active-orders-full/active-orders-full.component */ "./src/app/active-orders-full/active-orders-full.component.ts");
/* harmony import */ var _crypto_currency_crypto_currency_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./crypto-currency/crypto-currency.component */ "./src/app/crypto-currency/crypto-currency.component.ts");
/* harmony import */ var _crypto_market_crypto_market_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./crypto-market/crypto-market.component */ "./src/app/crypto-market/crypto-market.component.ts");
/* harmony import */ var _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./charts/line-chart/line-chart.component */ "./src/app/charts/line-chart/line-chart.component.ts");
/* harmony import */ var _charts_area_charts_area_charts_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./charts/area-charts/area-charts.component */ "./src/app/charts/area-charts/area-charts.component.ts");
/* harmony import */ var _charts_all_charts_all_charts_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./charts/all-charts/all-charts.component */ "./src/app/charts/all-charts/all-charts.component.ts");
/* harmony import */ var _ui_elements_ui_elements_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ui-elements/ui-elements.component */ "./src/app/ui-elements/ui-elements.component.ts");
/* harmony import */ var _mypipe_custompipe_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./mypipe/custompipe.pipe */ "./src/app/mypipe/custompipe.pipe.ts");
/* harmony import */ var _analytics_web_analytics_web_analytics_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./analytics/web-analytics/web-analytics.component */ "./src/app/analytics/web-analytics/web-analytics.component.ts");
/* harmony import */ var _analytics_audience_metrics_audience_metrics_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./analytics/audience-metrics/audience-metrics.component */ "./src/app/analytics/audience-metrics/audience-metrics.component.ts");
/* harmony import */ var _analytics_session_by_channel_session_by_channel_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./analytics/session-by-channel/session-by-channel.component */ "./src/app/analytics/session-by-channel/session-by-channel.component.ts");
/* harmony import */ var _analytics_web_performance_web_performance_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./analytics/web-performance/web-performance.component */ "./src/app/analytics/web-performance/web-performance.component.ts");
/* harmony import */ var _analytics_google_analytice_google_analytice_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./analytics/google-analytice/google-analytice.component */ "./src/app/analytics/google-analytice/google-analytice.component.ts");
/* harmony import */ var _analytics_user_activity_user_activity_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./analytics/user-activity/user-activity.component */ "./src/app/analytics/user-activity/user-activity.component.ts");
/* harmony import */ var _analytics_user_by_country_user_by_country_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./analytics/user-by-country/user-by-country.component */ "./src/app/analytics/user-by-country/user-by-country.component.ts");
/* harmony import */ var _analytics_page_view_page_view_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./analytics/page-view/page-view.component */ "./src/app/analytics/page-view/page-view.component.ts");
/* harmony import */ var _analytics_google_session_google_session_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./analytics/google-session/google-session.component */ "./src/app/analytics/google-session/google-session.component.ts");
/* harmony import */ var _socialMedia_main_main_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./socialMedia/main/main.component */ "./src/app/socialMedia/main/main.component.ts");
/* harmony import */ var _socialMedia_social_activity_social_activity_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./socialMedia/social-activity/social-activity.component */ "./src/app/socialMedia/social-activity/social-activity.component.ts");
/* harmony import */ var _socialMedia_social_followers_social_followers_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./socialMedia/social-followers/social-followers.component */ "./src/app/socialMedia/social-followers/social-followers.component.ts");
/* harmony import */ var _socialMedia_youtubefacebook_widget_youtubefacebook_widget_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./socialMedia/youtubefacebook-widget/youtubefacebook-widget.component */ "./src/app/socialMedia/youtubefacebook-widget/youtubefacebook-widget.component.ts");
/* harmony import */ var _forms_simple_form_simple_form_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./forms/simple-form/simple-form.component */ "./src/app/forms/simple-form/simple-form.component.ts");
/* harmony import */ var _forms_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./forms/input-groups/input-groups.component */ "./src/app/forms/input-groups/input-groups.component.ts");
/* harmony import */ var _forms_custom_forms_custom_forms_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./forms/custom-forms/custom-forms.component */ "./src/app/forms/custom-forms/custom-forms.component.ts");
/* harmony import */ var _forms_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./forms/form-validation/form-validation.component */ "./src/app/forms/form-validation/form-validation.component.ts");
/* harmony import */ var _forms_forms_index_forms_index_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./forms/forms-index/forms-index.component */ "./src/app/forms/forms-index/forms-index.component.ts");
/* harmony import */ var _forms_typehead_typehead_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./forms/typehead/typehead.component */ "./src/app/forms/typehead/typehead.component.ts");
/* harmony import */ var _forms_checkbox_validation_checkbox_validation_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./forms/checkbox-validation/checkbox-validation.component */ "./src/app/forms/checkbox-validation/checkbox-validation.component.ts");
/* harmony import */ var _forms_input_validation_input_validation_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./forms/input-validation/input-validation.component */ "./src/app/forms/input-validation/input-validation.component.ts");
/* harmony import */ var _wigets_wiget_main_wiget_main_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./wigets/wiget-main/wiget-main.component */ "./src/app/wigets/wiget-main/wiget-main.component.ts");
/* harmony import */ var _wigets_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./wigets/carousel/carousel.component */ "./src/app/wigets/carousel/carousel.component.ts");
/* harmony import */ var _wigets_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./wigets/accordian/accordian.component */ "./src/app/wigets/accordian/accordian.component.ts");
/* harmony import */ var _wigets_modal_modal_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./wigets/modal/modal.component */ "./src/app/wigets/modal/modal.component.ts");
/* harmony import */ var _wigets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./wigets/tooltip/tooltip.component */ "./src/app/wigets/tooltip/tooltip.component.ts");









"";





























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_21__["TopbarComponent"],
                _leftnavbar_leftnavbar_component__WEBPACK_IMPORTED_MODULE_22__["LeftnavbarComponent"],
                _dashbord1_dashbord1_component__WEBPACK_IMPORTED_MODULE_23__["Dashbord1Component"],
                _dashbord2_dashbord2_component__WEBPACK_IMPORTED_MODULE_24__["Dashbord2Component"],
                _coins_coins_component__WEBPACK_IMPORTED_MODULE_25__["CoinsComponent"],
                _chart_rating_chart_rating_component__WEBPACK_IMPORTED_MODULE_28__["ChartRatingComponent"],
                _trade_table_trade_table_component__WEBPACK_IMPORTED_MODULE_29__["TradeTableComponent"],
                _tradehistroy_tradehistroy_component__WEBPACK_IMPORTED_MODULE_30__["TradehistroyComponent"],
                _current_orders_current_orders_component__WEBPACK_IMPORTED_MODULE_31__["CurrentOrdersComponent"],
                _active_orders_active_orders_component__WEBPACK_IMPORTED_MODULE_32__["ActiveOrdersComponent"],
                _active_orders_full_active_orders_full_component__WEBPACK_IMPORTED_MODULE_33__["ActiveOrdersFullComponent"],
                _crypto_currency_crypto_currency_component__WEBPACK_IMPORTED_MODULE_34__["CryptoCurrencyComponent"],
                _crypto_market_crypto_market_component__WEBPACK_IMPORTED_MODULE_35__["CryptoMarketComponent"],
                _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_36__["LineChartComponent"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_26__["HighchartsChartComponent"],
                _charts_area_charts_area_charts_component__WEBPACK_IMPORTED_MODULE_37__["AreaChartsComponent"],
                _charts_all_charts_all_charts_component__WEBPACK_IMPORTED_MODULE_38__["AllChartsComponent"],
                _ui_elements_ui_elements_component__WEBPACK_IMPORTED_MODULE_39__["UiElementsComponent"],
                _mypipe_custompipe_pipe__WEBPACK_IMPORTED_MODULE_40__["CustompipePipe"],
                _analytics_web_analytics_web_analytics_component__WEBPACK_IMPORTED_MODULE_41__["WebAnalyticsComponent"],
                _analytics_audience_metrics_audience_metrics_component__WEBPACK_IMPORTED_MODULE_42__["AudienceMetricsComponent"],
                _analytics_session_by_channel_session_by_channel_component__WEBPACK_IMPORTED_MODULE_43__["SessionByChannelComponent"],
                _analytics_web_performance_web_performance_component__WEBPACK_IMPORTED_MODULE_44__["WebPerformanceComponent"],
                _analytics_google_analytice_google_analytice_component__WEBPACK_IMPORTED_MODULE_45__["GoogleAnalyticeComponent"],
                _analytics_user_activity_user_activity_component__WEBPACK_IMPORTED_MODULE_46__["UserActivityComponent"],
                _analytics_user_by_country_user_by_country_component__WEBPACK_IMPORTED_MODULE_47__["UserByCountryComponent"],
                _analytics_page_view_page_view_component__WEBPACK_IMPORTED_MODULE_48__["PageViewComponent"],
                _analytics_google_session_google_session_component__WEBPACK_IMPORTED_MODULE_49__["GoogleSessionComponent"],
                _socialMedia_main_main_component__WEBPACK_IMPORTED_MODULE_50__["MainComponent"],
                _socialMedia_social_activity_social_activity_component__WEBPACK_IMPORTED_MODULE_51__["SocialActivityComponent"],
                _socialMedia_social_followers_social_followers_component__WEBPACK_IMPORTED_MODULE_52__["SocialFollowersComponent"],
                _socialMedia_youtubefacebook_widget_youtubefacebook_widget_component__WEBPACK_IMPORTED_MODULE_53__["YoutubefacebookWidgetComponent"],
                _forms_simple_form_simple_form_component__WEBPACK_IMPORTED_MODULE_54__["SimpleFormComponent"],
                _forms_input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_55__["InputGroupsComponent"],
                _forms_custom_forms_custom_forms_component__WEBPACK_IMPORTED_MODULE_56__["CustomFormsComponent"],
                _forms_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_57__["FormValidationComponent"],
                _forms_forms_index_forms_index_component__WEBPACK_IMPORTED_MODULE_58__["FormsIndexComponent"],
                _forms_typehead_typehead_component__WEBPACK_IMPORTED_MODULE_59__["TypeheadComponent"],
                _forms_checkbox_validation_checkbox_validation_component__WEBPACK_IMPORTED_MODULE_60__["CheckboxValidationComponent"],
                _forms_input_validation_input_validation_component__WEBPACK_IMPORTED_MODULE_61__["InputValidationComponent"],
                _wigets_wiget_main_wiget_main_component__WEBPACK_IMPORTED_MODULE_62__["WigetMainComponent"],
                _wigets_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_63__["CarouselComponent"],
                _wigets_accordian_accordian_component__WEBPACK_IMPORTED_MODULE_64__["AccordianComponent"],
                _wigets_modal_modal_component__WEBPACK_IMPORTED_MODULE_65__["ModalComponent"],
                _wigets_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_66__["TooltipComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_8__["OwlModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutoCompleteModule"],
                primeng_rating__WEBPACK_IMPORTED_MODULE_13__["RatingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_14__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_15__["MessageModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_16__["ToastModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_18__["TabViewModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"], _service_counrtyservices_service__WEBPACK_IMPORTED_MODULE_27__["CountryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart-rating/chart-rating.component.css":
/*!*********************************************************!*\
  !*** ./src/app/chart-rating/chart-rating.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0LXJhdGluZy9jaGFydC1yYXRpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/chart-rating/chart-rating.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chart-rating/chart-rating.component.ts ***!
  \********************************************************/
/*! exports provided: ChartRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartRatingComponent", function() { return ChartRatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var ChartRatingComponent = /** @class */ (function () {
    function ChartRatingComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Chart with time series'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                minRange: 14 * 24 * 3600000 // fourteen days
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legand: {
                enabled: false
            },
            tooltip: {
                valueSuffix: " °C"
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]],
                            [1, new highcharts__WEBPACK_IMPORTED_MODULE_2__["Color"](highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                    type: 'area',
                    name: 'USD to EUR',
                    pointInterval: 24 * 3600 * 1000,
                    pointStart: Date.UTC(2006, 0, 1),
                    data: [
                        0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232,
                        0.8233, 0.8258, 0.8283, 0.8278, 0.8256, 0.8292, 0.8239, 0.8239,
                        0.8245, 0.8265, 0.8261, 0.8269, 0.8273, 0.8244, 0.8244, 0.8172,
                        0.8139, 0.8146, 0.8164, 0.82, 0.8269, 0.8269, 0.8269, 0.8258,
                        0.8247, 0.8286, 0.8289, 0.8316, 0.832, 0.8333, 0.8352, 0.8357,
                        0.8355, 0.8354, 0.8403, 0.8403, 0.8406, 0.8403, 0.8396, 0.8418,
                        0.8409, 0.8384, 0.8386, 0.8372, 0.839, 0.84, 0.8389, 0.84, 0.8423,
                        0.8423, 0.8435, 0.8422, 0.838, 0.8373, 0.8316, 0.8303, 0.8303,
                        0.8302, 0.8369, 0.84, 0.8385, 0.84, 0.8401, 0.8402, 0.8381,
                        0.8351, 0.8314, 0.8273, 0.8213, 0.8207, 0.8207, 0.8215, 0.8242,
                        0.8273, 0.8301, 0.8346, 0.8312, 0.8312, 0.8312, 0.8306, 0.8327,
                        0.8282, 0.824, 0.8255, 0.8256, 0.8273, 0.8209, 0.8151, 0.8149,
                        0.8213, 0.8273, 0.8273, 0.8261, 0.8252, 0.824, 0.8262, 0.8258,
                        0.8261, 0.826, 0.8199, 0.8153, 0.8097, 0.8101, 0.8119, 0.8107,
                        0.8105, 0.8084, 0.8069, 0.8047, 0.8023, 0.7965, 0.7919, 0.7921,
                        0.7922, 0.7934, 0.7918, 0.7915, 0.787, 0.7861, 0.7861, 0.7853,
                        0.7867, 0.7827, 0.7834, 0.7766, 0.7751, 0.7739, 0.7767, 0.7802,
                        0.7788, 0.7828, 0.7816, 0.7829, 0.783, 0.7829, 0.7781, 0.7811,
                        0.7831, 0.7826, 0.7855, 0.7855, 0.7845, 0.7798, 0.7777, 0.7822,
                        0.7785, 0.7744, 0.7743, 0.7726, 0.7766, 0.7806, 0.785, 0.7907,
                        0.7912, 0.7913, 0.7931, 0.7952, 0.7951, 0.7928, 0.791, 0.7913,
                        0.7912, 0.7941, 0.7953, 0.7921, 0.7919, 0.7968, 0.7999, 0.7999,
                        0.7974, 0.7942, 0.796, 0.7969, 0.7862, 0.7821, 0.7821, 0.7821,
                        0.7811, 0.7833, 0.7849, 0.7819, 0.7809, 0.7809, 0.7827, 0.7848,
                        0.785, 0.7873, 0.7894, 0.7907, 0.7909, 0.7947, 0.7987, 0.799,
                        0.7927, 0.79, 0.7878, 0.7878, 0.7907, 0.7922, 0.7937, 0.786,
                        0.787, 0.7838, 0.7838, 0.7837, 0.7836, 0.7806, 0.7825, 0.7798,
                        0.777, 0.777, 0.7772, 0.7793, 0.7788, 0.7785, 0.7832, 0.7865,
                        0.7865, 0.7853, 0.7847, 0.7809, 0.778, 0.7799, 0.78, 0.7801,
                        0.7765, 0.7785, 0.7811, 0.782, 0.7835, 0.7845, 0.7844, 0.782,
                        0.7811, 0.7795, 0.7794, 0.7806, 0.7794, 0.7794, 0.7778, 0.7793,
                        0.7808, 0.7824, 0.787, 0.7894, 0.7893, 0.7882, 0.7871, 0.7882,
                        0.7871, 0.7878, 0.79, 0.7901, 0.7898, 0.7879, 0.7886, 0.7858,
                        0.7814, 0.7825, 0.7826, 0.7826, 0.786, 0.7878, 0.7868, 0.7883,
                        0.7893, 0.7892, 0.7876, 0.785, 0.787, 0.7873, 0.7901, 0.7936,
                        0.7939, 0.7938, 0.7956, 0.7975, 0.7978, 0.7972, 0.7995, 0.7995,
                        0.7994, 0.7976, 0.7977, 0.796, 0.7922, 0.7928, 0.7929, 0.7948,
                        0.797, 0.7953, 0.7907, 0.7872, 0.7852, 0.7852, 0.786, 0.7862,
                        0.7836, 0.7837, 0.784, 0.7867, 0.7867, 0.7869, 0.7837, 0.7827,
                        0.7825, 0.7779, 0.7791, 0.779, 0.7787, 0.78, 0.7807, 0.7803,
                        0.7817, 0.7799, 0.7799, 0.7795, 0.7801, 0.7765, 0.7725, 0.7683,
                        0.7641, 0.7639, 0.7616, 0.7608, 0.759, 0.7582, 0.7539, 0.75,
                        0.75, 0.7507, 0.7505, 0.7516, 0.7522, 0.7531, 0.7577, 0.7577,
                        0.7582, 0.755, 0.7542, 0.7576, 0.7616, 0.7648, 0.7648, 0.7641,
                        0.7614, 0.757, 0.7587, 0.7588, 0.762, 0.762, 0.7617, 0.7618,
                        0.7615, 0.7612, 0.7596, 0.758, 0.758, 0.758, 0.7547, 0.7549,
                        0.7613, 0.7655, 0.7693, 0.7694, 0.7688, 0.7678, 0.7708, 0.7727,
                        0.7749, 0.7741, 0.7741, 0.7732, 0.7727, 0.7737, 0.7724, 0.7712,
                        0.772, 0.7721, 0.7717, 0.7704, 0.769, 0.7711, 0.774, 0.7745,
                        0.7745, 0.774, 0.7716, 0.7713, 0.7678, 0.7688, 0.7718, 0.7718,
                        0.7728, 0.7729, 0.7698, 0.7685, 0.7681, 0.769, 0.769, 0.7698,
                        0.7699, 0.7651, 0.7613, 0.7616, 0.7614, 0.7614, 0.7607, 0.7602,
                        0.7611, 0.7622, 0.7615, 0.7598, 0.7598, 0.7592, 0.7573, 0.7566,
                        0.7567, 0.7591, 0.7582, 0.7585, 0.7613, 0.7631, 0.7615, 0.76,
                        0.7613, 0.7627, 0.7627, 0.7608, 0.7583, 0.7575, 0.7562, 0.752,
                        0.7512, 0.7512, 0.7517, 0.752, 0.7511, 0.748, 0.7509, 0.7531,
                        0.7531, 0.7527, 0.7498, 0.7493, 0.7504, 0.75, 0.7491, 0.7491,
                        0.7485, 0.7484, 0.7492, 0.7471, 0.7459, 0.7477, 0.7477, 0.7483,
                        0.7458, 0.7448, 0.743, 0.7399, 0.7395, 0.7395, 0.7378, 0.7382,
                        0.7362, 0.7355, 0.7348, 0.7361, 0.7361, 0.7365, 0.7362, 0.7331,
                        0.7339, 0.7344, 0.7327, 0.7327, 0.7336, 0.7333, 0.7359, 0.7359,
                        0.7372, 0.736, 0.736, 0.735, 0.7365, 0.7384, 0.7395, 0.7413,
                        0.7397, 0.7396, 0.7385, 0.7378, 0.7366, 0.74, 0.7411, 0.7406,
                        0.7405, 0.7414, 0.7431, 0.7431, 0.7438, 0.7443, 0.7443, 0.7443,
                        0.7434, 0.7429, 0.7442, 0.744, 0.7439, 0.7437, 0.7437, 0.7429,
                        0.7403, 0.7399, 0.7418, 0.7468, 0.748, 0.748, 0.749, 0.7494,
                        0.7522, 0.7515, 0.7502, 0.7472, 0.7472, 0.7462, 0.7455, 0.7449,
                        0.7467, 0.7458, 0.7427, 0.7427, 0.743, 0.7429, 0.744, 0.743,
                        0.7422, 0.7388, 0.7388, 0.7369, 0.7345, 0.7345, 0.7345, 0.7352,
                        0.7341, 0.7341, 0.734, 0.7324, 0.7272, 0.7264, 0.7255, 0.7258,
                        0.7258, 0.7256, 0.7257, 0.7247, 0.7243, 0.7244, 0.7235, 0.7235,
                        0.7235, 0.7235, 0.7262, 0.7288, 0.7301, 0.7337, 0.7337, 0.7324,
                        0.7297, 0.7317, 0.7315, 0.7288, 0.7263, 0.7263, 0.7242, 0.7253,
                        0.7264, 0.727, 0.7312, 0.7305, 0.7305, 0.7318, 0.7358, 0.7409,
                        0.7454, 0.7437, 0.7424, 0.7424, 0.7415, 0.7419, 0.7414, 0.7377,
                        0.7355, 0.7315, 0.7315, 0.732, 0.7332, 0.7346, 0.7328, 0.7323,
                        0.734, 0.734, 0.7336, 0.7351, 0.7346, 0.7321, 0.7294, 0.7266,
                        0.7266, 0.7254, 0.7242, 0.7213, 0.7197, 0.7209, 0.721, 0.721,
                        0.721, 0.7209, 0.7159, 0.7133, 0.7105, 0.7099, 0.7099, 0.7093,
                        0.7093, 0.7076, 0.707, 0.7049, 0.7012, 0.7011, 0.7019, 0.7046,
                        0.7063, 0.7089, 0.7077, 0.7077, 0.7077, 0.7091, 0.7118, 0.7079,
                        0.7053, 0.705, 0.7055, 0.7055, 0.7045, 0.7051, 0.7051, 0.7017,
                        0.7, 0.6995, 0.6994, 0.7014, 0.7036, 0.7021, 0.7002, 0.6967,
                        0.695, 0.695, 0.6939, 0.694, 0.6922, 0.6919, 0.6914, 0.6894,
                        0.6891, 0.6904, 0.689, 0.6834, 0.6823, 0.6807, 0.6815, 0.6815,
                        0.6847, 0.6859, 0.6822, 0.6827, 0.6837, 0.6823, 0.6822, 0.6822,
                        0.6792, 0.6746, 0.6735, 0.6731, 0.6742, 0.6744, 0.6739, 0.6731,
                        0.6761, 0.6761, 0.6785, 0.6818, 0.6836, 0.6823, 0.6805, 0.6793,
                        0.6849, 0.6833, 0.6825, 0.6825, 0.6816, 0.6799, 0.6813, 0.6809,
                        0.6868, 0.6933, 0.6933, 0.6945, 0.6944, 0.6946, 0.6964, 0.6965,
                        0.6956, 0.6956, 0.695, 0.6948, 0.6928, 0.6887, 0.6824, 0.6794,
                        0.6794, 0.6803, 0.6855, 0.6824, 0.6791, 0.6783, 0.6785, 0.6785,
                        0.6797, 0.68, 0.6803, 0.6805, 0.676, 0.677, 0.677, 0.6736,
                        0.6726, 0.6764, 0.6821, 0.6831, 0.6842, 0.6842, 0.6887, 0.6903,
                        0.6848, 0.6824, 0.6788, 0.6814, 0.6814, 0.6797, 0.6769, 0.6765,
                        0.6733, 0.6729, 0.6758, 0.6758, 0.675, 0.678, 0.6833, 0.6856,
                        0.6903, 0.6896, 0.6896, 0.6882, 0.6879, 0.6862, 0.6852, 0.6823,
                        0.6813, 0.6813, 0.6822, 0.6802, 0.6802, 0.6784, 0.6748, 0.6747,
                        0.6747, 0.6748, 0.6733, 0.665, 0.6611, 0.6583, 0.659, 0.659,
                        0.6581, 0.6578, 0.6574, 0.6532, 0.6502, 0.6514, 0.6514, 0.6507,
                        0.651, 0.6489, 0.6424, 0.6406, 0.6382, 0.6382, 0.6341, 0.6344,
                        0.6378, 0.6439, 0.6478, 0.6481, 0.6481, 0.6494, 0.6438, 0.6377,
                        0.6329, 0.6336, 0.6333, 0.6333, 0.633, 0.6371, 0.6403, 0.6396,
                        0.6364, 0.6356, 0.6356, 0.6368, 0.6357, 0.6354, 0.632, 0.6332,
                        0.6328, 0.6331, 0.6342, 0.6321, 0.6302, 0.6278, 0.6308, 0.6324,
                        0.6324, 0.6307, 0.6277, 0.6269, 0.6335, 0.6392, 0.64, 0.6401,
                        0.6396, 0.6407, 0.6423, 0.6429, 0.6472, 0.6485, 0.6486, 0.6467,
                        0.6444, 0.6467, 0.6509, 0.6478, 0.6461, 0.6461, 0.6468, 0.6449,
                        0.647, 0.6461, 0.6452, 0.6422, 0.6422, 0.6425, 0.6414, 0.6366,
                        0.6346, 0.635, 0.6346, 0.6346, 0.6343, 0.6346, 0.6379, 0.6416,
                        0.6442, 0.6431, 0.6431, 0.6435, 0.644, 0.6473, 0.6469, 0.6386,
                        0.6356, 0.634, 0.6346, 0.643, 0.6452, 0.6467, 0.6506, 0.6504,
                        0.6503, 0.6481, 0.6451, 0.645, 0.6441, 0.6414, 0.6409, 0.6409,
                        0.6428, 0.6431, 0.6418, 0.6371, 0.6349, 0.6333, 0.6334, 0.6338,
                        0.6342, 0.632, 0.6318, 0.637, 0.6368, 0.6368, 0.6383, 0.6371,
                        0.6371, 0.6355, 0.632, 0.6277, 0.6276, 0.6291, 0.6274, 0.6293,
                        0.6311, 0.631, 0.6312, 0.6312, 0.6304, 0.6294, 0.6348, 0.6378,
                        0.6368, 0.6368, 0.6368, 0.636, 0.637, 0.6418, 0.6411, 0.6435,
                        0.6427, 0.6427, 0.6419, 0.6446, 0.6468, 0.6487, 0.6594, 0.6666,
                        0.6666, 0.6678, 0.6712, 0.6705, 0.6718, 0.6784, 0.6811, 0.6811,
                        0.6794, 0.6804, 0.6781, 0.6756, 0.6735, 0.6763, 0.6762, 0.6777,
                        0.6815, 0.6802, 0.678, 0.6796, 0.6817, 0.6817, 0.6832, 0.6877,
                        0.6912, 0.6914, 0.7009, 0.7012, 0.701, 0.7005, 0.7076, 0.7087,
                        0.717, 0.7105, 0.7031, 0.7029, 0.7006, 0.7035, 0.7045, 0.6956,
                        0.6988, 0.6915, 0.6914, 0.6859, 0.6778, 0.6815, 0.6815, 0.6843,
                        0.6846, 0.6846, 0.6923, 0.6997, 0.7098, 0.7188, 0.7232, 0.7262,
                        0.7266, 0.7359, 0.7368, 0.7337, 0.7317, 0.7387, 0.7467, 0.7461,
                        0.7366, 0.7319, 0.7361, 0.7437, 0.7432, 0.7461, 0.7461, 0.7454,
                        0.7549, 0.7742, 0.7801, 0.7903, 0.7876, 0.7928, 0.7991, 0.8007,
                        0.7823, 0.7661, 0.785, 0.7863, 0.7862, 0.7821, 0.7858, 0.7731,
                        0.7779, 0.7844, 0.7866, 0.7864, 0.7788, 0.7875, 0.7971, 0.8004,
                        0.7857, 0.7932, 0.7938, 0.7927, 0.7918, 0.7919, 0.7989, 0.7988,
                        0.7949, 0.7948, 0.7882, 0.7745, 0.771, 0.775, 0.7791, 0.7882,
                        0.7882, 0.7899, 0.7905, 0.7889, 0.7879, 0.7855, 0.7866, 0.7865,
                        0.7795, 0.7758, 0.7717, 0.761, 0.7497, 0.7471, 0.7473, 0.7407,
                        0.7288, 0.7074, 0.6927, 0.7083, 0.7191, 0.719, 0.7153, 0.7156,
                        0.7158, 0.714, 0.7119, 0.7129, 0.7129, 0.7049, 0.7095
                    ]
                }]
        };
        this.SelectCoins = [
            { label: 'Bitcoin', value: 'Bitcoin' },
            { label: 'ETHERUM', value: 'ETHERUM' },
            { label: 'PEERCOIN', value: 'PEERCOIN' },
            { label: 'ZCASH', value: 'ZCASH' },
        ];
    }
    ChartRatingComponent.prototype.ngOnInit = function () {
    };
    ChartRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart-rating',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart-rating.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chart-rating/chart-rating.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart-rating.component.css */ "./src/app/chart-rating/chart-rating.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartRatingComponent);
    return ChartRatingComponent;
}());



/***/ }),

/***/ "./src/app/charts/all-charts/all-charts.component.css":
/*!************************************************************!*\
  !*** ./src/app/charts/all-charts/all-charts.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9hbGwtY2hhcnRzL2FsbC1jaGFydHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/all-charts/all-charts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/charts/all-charts/all-charts.component.ts ***!
  \***********************************************************/
/*! exports provided: AllChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllChartsComponent", function() { return AllChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var AllChartsComponent = /** @class */ (function () {
    function AllChartsComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Bar chart with negative values'
            },
            yAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            series: [
                {
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                },
                {
                    name: 'Jane',
                    data: [2, -2, -3, 2, 1]
                },
                {
                    name: 'Joe',
                    data: [3, 4, 4, -2, 5]
                }
            ]
        };
        this.chartOptions2 = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Historic World Population by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            legend: {
                layout: 'horizontal',
                align: 'bottom',
                verticalAlign: 'top',
                x: 250,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF'
            },
            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
                    text: null
                }
            },
            yAxis: {
                min: 0, title: {
                    text: 'Population (millions)', align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    stacking: 'normal'
                }
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Year 1800',
                    data: [107, 31, 635, 203, 2]
                },
                {
                    name: 'Year 1900',
                    data: [133, 156, 947, 408, 6]
                },
                {
                    name: 'Year 2008',
                    data: [973, 914, 4054, 732, 34]
                }
            ]
        };
        this.chartOptions3 = {
            chart: {
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Browser share',
                    data: [
                        ['Firefox', 45.0],
                        ['IE', 26.8],
                        {
                            name: 'Chrome',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        },
                        ['Safari', 8.5],
                        ['Opera', 6.2],
                        ['Others', 0.7]
                    ]
                }]
        };
        this.chartOptions4 = {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Source: WorldClimate.com'
            },
            subtitle: {
                text: 'Average Monthly Temperature and Rainfall in Tokyo'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            },
            yAxis: [
                {
                    labels: {
                        format: '{value}\xB0C',
                        style: {
                            color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[1]
                        }
                    },
                    title: {
                        text: 'Temperature',
                        style: {
                            color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[1]
                        }
                    }
                },
                {
                    title: {
                        text: 'Rainfall',
                        style: {
                            color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]
                        }
                    },
                    labels: {
                        format: '{value} mm',
                        style: {
                            color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]
                        }
                    },
                    opposite: true
                }
            ],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 60,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: '#FFFFFF'
            },
            series: [
                {
                    name: 'Rainfall',
                    type: 'column',
                    yAxis: 1,
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
                        216.4, 194.1, 95.6, 54.4],
                    tooltip: {
                        valueSuffix: ' mm'
                    }
                },
                {
                    name: 'Temperature',
                    type: 'spline',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                    tooltip: {
                        valueSuffix: '\xB0C'
                    }
                }
            ]
        };
    }
    AllChartsComponent.prototype.ngOnInit = function () {
    };
    AllChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-charts',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/all-charts/all-charts.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-charts.component.css */ "./src/app/charts/all-charts/all-charts.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AllChartsComponent);
    return AllChartsComponent;
}());



/***/ }),

/***/ "./src/app/charts/area-charts/area-charts.component.css":
/*!**************************************************************!*\
  !*** ./src/app/charts/area-charts/area-charts.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9hcmVhLWNoYXJ0cy9hcmVhLWNoYXJ0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/area-charts/area-charts.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/charts/area-charts/area-charts.component.ts ***!
  \*************************************************************/
/*! exports provided: AreaChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartsComponent", function() { return AreaChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var AreaChartsComponent = /** @class */ (function () {
    function AreaChartsComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Average fruit consumption during one week'
            },
            subtitle: {
                style: {
                    position: 'absolute',
                    right: '0px',
                    bottom: '10px'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: -150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF'
            },
            xAxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            yAxis: {
                title: {
                    text: 'Number of units'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                },
                min: 0
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.x + ': ' + this.y;
                }
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'John',
                    data: [3, 4, 3, 5, 4, 10, 12]
                },
                {
                    name: 'Jane',
                    data: [1, 3, 4, 3, 3, 5, 4]
                }
            ]
        };
        this.chartOptions2 = {
            chart: {
                type: "area"
            },
            title: {
                text: 'Area chart with negative values'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                },
                {
                    name: 'Jane',
                    data: [2, -2, -3, 2, 1]
                },
                {
                    name: 'Joe',
                    data: [3, 4, 4, -2, 5]
                }
            ]
        };
        this.chartOptions3 = {
            chart: {
                type: "area"
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Growth by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Billions'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' millions'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Asia',
                    data: [502, 635, 809, 947, 1402, 3634, 5268]
                },
                {
                    name: 'Africa',
                    data: [106, 107, 111, 133, 221, 767, 1766]
                },
                {
                    name: 'Europe',
                    data: [163, 203, 276, 408, 547, 729, 628]
                },
                {
                    name: 'America',
                    data: [18, 31, 54, 156, 339, 818, 1201]
                },
                {
                    name: 'Oceania',
                    data: [2, 2, 2, 6, 13, 30, 46]
                }
            ]
        };
        this.chartOptions4 = {
            chart: {
                type: "area"
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Growth by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Billions'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' millions'
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'Asia',
                    data: [502, 635, 809, 947, 1402, 3634, 5268]
                },
                {
                    name: 'Africa',
                    data: [106, 107, 111, 133, 221, 767, 1766]
                },
                {
                    name: 'Europe',
                    data: [163, 203, 276, 408, 547, 729, 628]
                },
                {
                    name: 'America',
                    data: [18, 31, 54, 156, 339, 818, 1201]
                },
                {
                    name: 'Oceania',
                    data: [2, 2, 2, 6, 13, 30, 46]
                }
            ]
        };
    }
    AreaChartsComponent.prototype.ngOnInit = function () {
    };
    AreaChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-area-charts',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./area-charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/area-charts/area-charts.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./area-charts.component.css */ "./src/app/charts/area-charts/area-charts.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AreaChartsComponent);
    return AreaChartsComponent;
}());



/***/ }),

/***/ "./src/app/charts/line-chart/line-chart.component.css":
/*!************************************************************!*\
  !*** ./src/app/charts/line-chart/line-chart.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/line-chart/line-chart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/charts/line-chart/line-chart.component.ts ***!
  \***********************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                type: "spline"
            },
            title: {
                text: "Basic line chart"
            },
            subtitle: {
                text: "Source: WorldClimate.com"
            },
            xAxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            yAxis: {
                title: {
                    text: "Temperature °C"
                }
            },
            tooltip: {
                valueSuffix: " °C"
            },
            series: [{
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                },
                {
                    name: 'New York',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                },
                {
                    name: 'Berlin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                },
                {
                    name: 'London',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }]
        };
        this.chartOptions2 = {
            chart: {
                type: "spline"
            },
            title: {
                text: "Monthly Average Temperature"
            },
            subtitle: {
                text: "Source: WorldClimate.com"
            },
            xAxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            yAxis: {
                title: {
                    text: "Temperature °C"
                },
                labels: {
                    formatter: function () {
                        return this.value + '\xB0';
                    }
                },
                lineWidth: 2
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                    name: 'Tokyo',
                    marker: {
                        symbol: 'square'
                    },
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                            y: 26.5,
                            marker: {
                                symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
                            }
                        }, 23.3, 18.3, 13.9, 9.6]
                },
                {
                    name: 'London',
                    marker: {
                        symbol: 'diamond'
                    },
                    data: [{
                            y: 3.9,
                            marker: {
                                symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
                            }
                        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }
            ]
        };
        this.chartOptions3 = {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Chart with time series'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                minRange: 14 * 24 * 3600000 // fourteen days
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legand: {
                enabled: false
            },
            tooltip: {
                valueSuffix: " °C"
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]],
                            [1, new highcharts__WEBPACK_IMPORTED_MODULE_2__["Color"](highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                    type: 'area',
                    name: 'USD to EUR',
                    pointInterval: 24 * 3600 * 1000,
                    pointStart: Date.UTC(2006, 0, 1),
                    data: [
                        0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232,
                        0.8233, 0.8258, 0.8283, 0.8278, 0.8256, 0.8292, 0.8239, 0.8239,
                        0.8245, 0.8265, 0.8261, 0.8269, 0.8273, 0.8244, 0.8244, 0.8172,
                        0.8139, 0.8146, 0.8164, 0.82, 0.8269, 0.8269, 0.8269, 0.8258,
                        0.8247, 0.8286, 0.8289, 0.8316, 0.832, 0.8333, 0.8352, 0.8357,
                        0.8355, 0.8354, 0.8403, 0.8403, 0.8406, 0.8403, 0.8396, 0.8418,
                        0.8409, 0.8384, 0.8386, 0.8372, 0.839, 0.84, 0.8389, 0.84, 0.8423,
                        0.8423, 0.8435, 0.8422, 0.838, 0.8373, 0.8316, 0.8303, 0.8303,
                        0.8302, 0.8369, 0.84, 0.8385, 0.84, 0.8401, 0.8402, 0.8381,
                        0.8351, 0.8314, 0.8273, 0.8213, 0.8207, 0.8207, 0.8215, 0.8242,
                        0.8273, 0.8301, 0.8346, 0.8312, 0.8312, 0.8312, 0.8306, 0.8327,
                        0.8282, 0.824, 0.8255, 0.8256, 0.8273, 0.8209, 0.8151, 0.8149,
                        0.8213, 0.8273, 0.8273, 0.8261, 0.8252, 0.824, 0.8262, 0.8258,
                        0.8261, 0.826, 0.8199, 0.8153, 0.8097, 0.8101, 0.8119, 0.8107,
                        0.8105, 0.8084, 0.8069, 0.8047, 0.8023, 0.7965, 0.7919, 0.7921,
                        0.7922, 0.7934, 0.7918, 0.7915, 0.787, 0.7861, 0.7861, 0.7853,
                        0.7867, 0.7827, 0.7834, 0.7766, 0.7751, 0.7739, 0.7767, 0.7802,
                        0.7788, 0.7828, 0.7816, 0.7829, 0.783, 0.7829, 0.7781, 0.7811,
                        0.7831, 0.7826, 0.7855, 0.7855, 0.7845, 0.7798, 0.7777, 0.7822,
                        0.7785, 0.7744, 0.7743, 0.7726, 0.7766, 0.7806, 0.785, 0.7907,
                        0.7912, 0.7913, 0.7931, 0.7952, 0.7951, 0.7928, 0.791, 0.7913,
                        0.7912, 0.7941, 0.7953, 0.7921, 0.7919, 0.7968, 0.7999, 0.7999,
                        0.7974, 0.7942, 0.796, 0.7969, 0.7862, 0.7821, 0.7821, 0.7821,
                        0.7811, 0.7833, 0.7849, 0.7819, 0.7809, 0.7809, 0.7827, 0.7848,
                        0.785, 0.7873, 0.7894, 0.7907, 0.7909, 0.7947, 0.7987, 0.799,
                        0.7927, 0.79, 0.7878, 0.7878, 0.7907, 0.7922, 0.7937, 0.786,
                        0.787, 0.7838, 0.7838, 0.7837, 0.7836, 0.7806, 0.7825, 0.7798,
                        0.777, 0.777, 0.7772, 0.7793, 0.7788, 0.7785, 0.7832, 0.7865,
                        0.7865, 0.7853, 0.7847, 0.7809, 0.778, 0.7799, 0.78, 0.7801,
                        0.7765, 0.7785, 0.7811, 0.782, 0.7835, 0.7845, 0.7844, 0.782,
                        0.7811, 0.7795, 0.7794, 0.7806, 0.7794, 0.7794, 0.7778, 0.7793,
                        0.7808, 0.7824, 0.787, 0.7894, 0.7893, 0.7882, 0.7871, 0.7882,
                        0.7871, 0.7878, 0.79, 0.7901, 0.7898, 0.7879, 0.7886, 0.7858,
                        0.7814, 0.7825, 0.7826, 0.7826, 0.786, 0.7878, 0.7868, 0.7883,
                        0.7893, 0.7892, 0.7876, 0.785, 0.787, 0.7873, 0.7901, 0.7936,
                        0.7939, 0.7938, 0.7956, 0.7975, 0.7978, 0.7972, 0.7995, 0.7995,
                        0.7994, 0.7976, 0.7977, 0.796, 0.7922, 0.7928, 0.7929, 0.7948,
                        0.797, 0.7953, 0.7907, 0.7872, 0.7852, 0.7852, 0.786, 0.7862,
                        0.7836, 0.7837, 0.784, 0.7867, 0.7867, 0.7869, 0.7837, 0.7827,
                        0.7825, 0.7779, 0.7791, 0.779, 0.7787, 0.78, 0.7807, 0.7803,
                        0.7817, 0.7799, 0.7799, 0.7795, 0.7801, 0.7765, 0.7725, 0.7683,
                        0.7641, 0.7639, 0.7616, 0.7608, 0.759, 0.7582, 0.7539, 0.75,
                        0.75, 0.7507, 0.7505, 0.7516, 0.7522, 0.7531, 0.7577, 0.7577,
                        0.7582, 0.755, 0.7542, 0.7576, 0.7616, 0.7648, 0.7648, 0.7641,
                        0.7614, 0.757, 0.7587, 0.7588, 0.762, 0.762, 0.7617, 0.7618,
                        0.7615, 0.7612, 0.7596, 0.758, 0.758, 0.758, 0.7547, 0.7549,
                        0.7613, 0.7655, 0.7693, 0.7694, 0.7688, 0.7678, 0.7708, 0.7727,
                        0.7749, 0.7741, 0.7741, 0.7732, 0.7727, 0.7737, 0.7724, 0.7712,
                        0.772, 0.7721, 0.7717, 0.7704, 0.769, 0.7711, 0.774, 0.7745,
                        0.7745, 0.774, 0.7716, 0.7713, 0.7678, 0.7688, 0.7718, 0.7718,
                        0.7728, 0.7729, 0.7698, 0.7685, 0.7681, 0.769, 0.769, 0.7698,
                        0.7699, 0.7651, 0.7613, 0.7616, 0.7614, 0.7614, 0.7607, 0.7602,
                        0.7611, 0.7622, 0.7615, 0.7598, 0.7598, 0.7592, 0.7573, 0.7566,
                        0.7567, 0.7591, 0.7582, 0.7585, 0.7613, 0.7631, 0.7615, 0.76,
                        0.7613, 0.7627, 0.7627, 0.7608, 0.7583, 0.7575, 0.7562, 0.752,
                        0.7512, 0.7512, 0.7517, 0.752, 0.7511, 0.748, 0.7509, 0.7531,
                        0.7531, 0.7527, 0.7498, 0.7493, 0.7504, 0.75, 0.7491, 0.7491,
                        0.7485, 0.7484, 0.7492, 0.7471, 0.7459, 0.7477, 0.7477, 0.7483,
                        0.7458, 0.7448, 0.743, 0.7399, 0.7395, 0.7395, 0.7378, 0.7382,
                        0.7362, 0.7355, 0.7348, 0.7361, 0.7361, 0.7365, 0.7362, 0.7331,
                        0.7339, 0.7344, 0.7327, 0.7327, 0.7336, 0.7333, 0.7359, 0.7359,
                        0.7372, 0.736, 0.736, 0.735, 0.7365, 0.7384, 0.7395, 0.7413,
                        0.7397, 0.7396, 0.7385, 0.7378, 0.7366, 0.74, 0.7411, 0.7406,
                        0.7405, 0.7414, 0.7431, 0.7431, 0.7438, 0.7443, 0.7443, 0.7443,
                        0.7434, 0.7429, 0.7442, 0.744, 0.7439, 0.7437, 0.7437, 0.7429,
                        0.7403, 0.7399, 0.7418, 0.7468, 0.748, 0.748, 0.749, 0.7494,
                        0.7522, 0.7515, 0.7502, 0.7472, 0.7472, 0.7462, 0.7455, 0.7449,
                        0.7467, 0.7458, 0.7427, 0.7427, 0.743, 0.7429, 0.744, 0.743,
                        0.7422, 0.7388, 0.7388, 0.7369, 0.7345, 0.7345, 0.7345, 0.7352,
                        0.7341, 0.7341, 0.734, 0.7324, 0.7272, 0.7264, 0.7255, 0.7258,
                        0.7258, 0.7256, 0.7257, 0.7247, 0.7243, 0.7244, 0.7235, 0.7235,
                        0.7235, 0.7235, 0.7262, 0.7288, 0.7301, 0.7337, 0.7337, 0.7324,
                        0.7297, 0.7317, 0.7315, 0.7288, 0.7263, 0.7263, 0.7242, 0.7253,
                        0.7264, 0.727, 0.7312, 0.7305, 0.7305, 0.7318, 0.7358, 0.7409,
                        0.7454, 0.7437, 0.7424, 0.7424, 0.7415, 0.7419, 0.7414, 0.7377,
                        0.7355, 0.7315, 0.7315, 0.732, 0.7332, 0.7346, 0.7328, 0.7323,
                        0.734, 0.734, 0.7336, 0.7351, 0.7346, 0.7321, 0.7294, 0.7266,
                        0.7266, 0.7254, 0.7242, 0.7213, 0.7197, 0.7209, 0.721, 0.721,
                        0.721, 0.7209, 0.7159, 0.7133, 0.7105, 0.7099, 0.7099, 0.7093,
                        0.7093, 0.7076, 0.707, 0.7049, 0.7012, 0.7011, 0.7019, 0.7046,
                        0.7063, 0.7089, 0.7077, 0.7077, 0.7077, 0.7091, 0.7118, 0.7079,
                        0.7053, 0.705, 0.7055, 0.7055, 0.7045, 0.7051, 0.7051, 0.7017,
                        0.7, 0.6995, 0.6994, 0.7014, 0.7036, 0.7021, 0.7002, 0.6967,
                        0.695, 0.695, 0.6939, 0.694, 0.6922, 0.6919, 0.6914, 0.6894,
                        0.6891, 0.6904, 0.689, 0.6834, 0.6823, 0.6807, 0.6815, 0.6815,
                        0.6847, 0.6859, 0.6822, 0.6827, 0.6837, 0.6823, 0.6822, 0.6822,
                        0.6792, 0.6746, 0.6735, 0.6731, 0.6742, 0.6744, 0.6739, 0.6731,
                        0.6761, 0.6761, 0.6785, 0.6818, 0.6836, 0.6823, 0.6805, 0.6793,
                        0.6849, 0.6833, 0.6825, 0.6825, 0.6816, 0.6799, 0.6813, 0.6809,
                        0.6868, 0.6933, 0.6933, 0.6945, 0.6944, 0.6946, 0.6964, 0.6965,
                        0.6956, 0.6956, 0.695, 0.6948, 0.6928, 0.6887, 0.6824, 0.6794,
                        0.6794, 0.6803, 0.6855, 0.6824, 0.6791, 0.6783, 0.6785, 0.6785,
                        0.6797, 0.68, 0.6803, 0.6805, 0.676, 0.677, 0.677, 0.6736,
                        0.6726, 0.6764, 0.6821, 0.6831, 0.6842, 0.6842, 0.6887, 0.6903,
                        0.6848, 0.6824, 0.6788, 0.6814, 0.6814, 0.6797, 0.6769, 0.6765,
                        0.6733, 0.6729, 0.6758, 0.6758, 0.675, 0.678, 0.6833, 0.6856,
                        0.6903, 0.6896, 0.6896, 0.6882, 0.6879, 0.6862, 0.6852, 0.6823,
                        0.6813, 0.6813, 0.6822, 0.6802, 0.6802, 0.6784, 0.6748, 0.6747,
                        0.6747, 0.6748, 0.6733, 0.665, 0.6611, 0.6583, 0.659, 0.659,
                        0.6581, 0.6578, 0.6574, 0.6532, 0.6502, 0.6514, 0.6514, 0.6507,
                        0.651, 0.6489, 0.6424, 0.6406, 0.6382, 0.6382, 0.6341, 0.6344,
                        0.6378, 0.6439, 0.6478, 0.6481, 0.6481, 0.6494, 0.6438, 0.6377,
                        0.6329, 0.6336, 0.6333, 0.6333, 0.633, 0.6371, 0.6403, 0.6396,
                        0.6364, 0.6356, 0.6356, 0.6368, 0.6357, 0.6354, 0.632, 0.6332,
                        0.6328, 0.6331, 0.6342, 0.6321, 0.6302, 0.6278, 0.6308, 0.6324,
                        0.6324, 0.6307, 0.6277, 0.6269, 0.6335, 0.6392, 0.64, 0.6401,
                        0.6396, 0.6407, 0.6423, 0.6429, 0.6472, 0.6485, 0.6486, 0.6467,
                        0.6444, 0.6467, 0.6509, 0.6478, 0.6461, 0.6461, 0.6468, 0.6449,
                        0.647, 0.6461, 0.6452, 0.6422, 0.6422, 0.6425, 0.6414, 0.6366,
                        0.6346, 0.635, 0.6346, 0.6346, 0.6343, 0.6346, 0.6379, 0.6416,
                        0.6442, 0.6431, 0.6431, 0.6435, 0.644, 0.6473, 0.6469, 0.6386,
                        0.6356, 0.634, 0.6346, 0.643, 0.6452, 0.6467, 0.6506, 0.6504,
                        0.6503, 0.6481, 0.6451, 0.645, 0.6441, 0.6414, 0.6409, 0.6409,
                        0.6428, 0.6431, 0.6418, 0.6371, 0.6349, 0.6333, 0.6334, 0.6338,
                        0.6342, 0.632, 0.6318, 0.637, 0.6368, 0.6368, 0.6383, 0.6371,
                        0.6371, 0.6355, 0.632, 0.6277, 0.6276, 0.6291, 0.6274, 0.6293,
                        0.6311, 0.631, 0.6312, 0.6312, 0.6304, 0.6294, 0.6348, 0.6378,
                        0.6368, 0.6368, 0.6368, 0.636, 0.637, 0.6418, 0.6411, 0.6435,
                        0.6427, 0.6427, 0.6419, 0.6446, 0.6468, 0.6487, 0.6594, 0.6666,
                        0.6666, 0.6678, 0.6712, 0.6705, 0.6718, 0.6784, 0.6811, 0.6811,
                        0.6794, 0.6804, 0.6781, 0.6756, 0.6735, 0.6763, 0.6762, 0.6777,
                        0.6815, 0.6802, 0.678, 0.6796, 0.6817, 0.6817, 0.6832, 0.6877,
                        0.6912, 0.6914, 0.7009, 0.7012, 0.701, 0.7005, 0.7076, 0.7087,
                        0.717, 0.7105, 0.7031, 0.7029, 0.7006, 0.7035, 0.7045, 0.6956,
                        0.6988, 0.6915, 0.6914, 0.6859, 0.6778, 0.6815, 0.6815, 0.6843,
                        0.6846, 0.6846, 0.6923, 0.6997, 0.7098, 0.7188, 0.7232, 0.7262,
                        0.7266, 0.7359, 0.7368, 0.7337, 0.7317, 0.7387, 0.7467, 0.7461,
                        0.7366, 0.7319, 0.7361, 0.7437, 0.7432, 0.7461, 0.7461, 0.7454,
                        0.7549, 0.7742, 0.7801, 0.7903, 0.7876, 0.7928, 0.7991, 0.8007,
                        0.7823, 0.7661, 0.785, 0.7863, 0.7862, 0.7821, 0.7858, 0.7731,
                        0.7779, 0.7844, 0.7866, 0.7864, 0.7788, 0.7875, 0.7971, 0.8004,
                        0.7857, 0.7932, 0.7938, 0.7927, 0.7918, 0.7919, 0.7989, 0.7988,
                        0.7949, 0.7948, 0.7882, 0.7745, 0.771, 0.775, 0.7791, 0.7882,
                        0.7882, 0.7899, 0.7905, 0.7889, 0.7879, 0.7855, 0.7866, 0.7865,
                        0.7795, 0.7758, 0.7717, 0.761, 0.7497, 0.7471, 0.7473, 0.7407,
                        0.7288, 0.7074, 0.6927, 0.7083, 0.7191, 0.719, 0.7153, 0.7156,
                        0.7158, 0.714, 0.7119, 0.7129, 0.7129, 0.7049, 0.7095
                    ]
                }]
        };
        this.chartOptions4 = {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Spline chart with plot bands'
            },
            subtitle: {
                text: 'October 6th and 7th 2009 at two locations in Vik i Sogn, Norway'
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    overflow: 'justify'
                }
            },
            yAxis: {
                title: {
                    text: 'Wind speed (m/s)'
                },
                min: 0,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                plotBands: [
                    {
                        from: 0.3,
                        to: 1.5,
                        color: 'rgba(68, 170, 213, 0.1)',
                        label: {
                            text: 'Light air',
                            style: {
                                color: '#606060'
                            }
                        }
                    },
                    {
                        from: 1.5,
                        to: 3.3,
                        color: 'rgba(0, 0, 0, 0)',
                        label: {
                            text: 'Light breeze',
                            style: {
                                color: '#606060'
                            }
                        }
                    },
                    {
                        from: 3.3,
                        to: 5.5,
                        color: 'rgba(68, 170, 213, 0.1)',
                        label: {
                            text: 'Gentle breeze',
                            style: {
                                color: '#606060'
                            }
                        }
                    },
                    {
                        from: 5.5,
                        to: 8,
                        color: 'rgba(0, 0, 0, 0)',
                        label: {
                            text: 'Moderate breeze',
                            style: {
                                color: '#606060'
                            }
                        }
                    },
                    {
                        from: 8,
                        to: 11,
                        color: 'rgba(68, 170, 213, 0.1)',
                        label: {
                            text: 'Fresh breeze',
                            style: {
                                color: '#606060'
                            }
                        }
                    },
                    {
                        from: 11,
                        to: 14,
                        color: 'rgba(0, 0, 0, 0)',
                        label: {
                            text: 'Strong breeze',
                            style: {
                                color: '#606060'
                            }
                        }
                    },
                    {
                        from: 14,
                        to: 15,
                        color: 'rgba(68, 170, 213, 0.1)',
                        label: {
                            text: 'High wind',
                            style: {
                                color: '#606060'
                            }
                        }
                    }
                ]
            },
            tooltip: {
                valueSuffix: ' m/s'
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    },
                    pointInterval: 3600000,
                    pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
                }
            },
            series: [
                {
                    name: 'Vik i Sogn',
                    data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                        7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
                        8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5,
                        7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
                        3.0, 3.0]
                },
                {
                    name: 'Norway',
                    data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.3, 0.0,
                        0.0, 0.4, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                        0.0, 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3,
                        3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4]
                }
            ],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        };
    }
    LineChartComponent.prototype.ngOnInit = function () {
    };
    LineChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-line-chart',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/line-chart/line-chart.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./line-chart.component.css */ "./src/app/charts/line-chart/line-chart.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/coins/coins.component.css":
/*!*******************************************!*\
  !*** ./src/app/coins/coins.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".coin-circle{width: 36px;height: 36px;border-radius: 50%;justify-content: center;align-items: center; font-size: 18px;}\r\n.media-body>h6>small{display: block; font-size: 70%;}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29pbnMvY29pbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLFdBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO0FBQ3RILHFCQUFxQixjQUFjLEVBQUUsY0FBYyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvY29pbnMvY29pbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2luLWNpcmNsZXt3aWR0aDogMzZweDtoZWlnaHQ6IDM2cHg7Ym9yZGVyLXJhZGl1czogNTAlO2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7IGZvbnQtc2l6ZTogMThweDt9XHJcbi5tZWRpYS1ib2R5Pmg2PnNtYWxse2Rpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDcwJTt9ICAgICJdfQ== */");

/***/ }),

/***/ "./src/app/coins/coins.component.ts":
/*!******************************************!*\
  !*** ./src/app/coins/coins.component.ts ***!
  \******************************************/
/*! exports provided: CoinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinsComponent", function() { return CoinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoinsComponent = /** @class */ (function () {
    function CoinsComponent() {
        this.selectedCar2 = 'ETHERUM';
        this.coins = [
            { "icon": "fa-bitcoin", "coin": "Bitcoin", "sm": "BTC", "txt": "1 BTC = $8720.00 USD", "upd": "fa-angle-down", "img": "../../assets/images/chart1.jpg" },
            { "icon": "fa-euro", "coin": "ETHERUM", "sm": "ETH", "txt": "1 BTC = $5255.00 USD", "upd": "fa-angle-up", "img": "../../assets/images/chart2.jpg" },
            { "icon": "fa-yen", "coin": "ZCASH", "sm": "ZEC", "txt": "1 BTC = $8236.00 USD", "upd": "fa-angle-down", "img": "../../assets/images/chart3.jpg" },
            { "icon": "fa-leaf", "coin": "PEERCOIN", "sm": "PPC", "txt": "1 BTC = $5236.00 USD", "upd": "fa-angle-up", "img": "../../assets/images/chart4.jpg" }
        ];
        this.cities = [
            { name: 'Enable', code: 'enab' },
            { name: 'Disable', code: 'disa' },
        ];
        this.SelectCoins = [
            { label: 'Bitcoin', value: 'Bitcoin' },
            { label: 'ETHERUM', value: 'ETHERUM' },
            { label: 'ZCASH', value: 'ZCASH' },
            { label: 'ZCASH', value: 'ZCASH' }
        ];
    }
    CoinsComponent.prototype.ngOnInit = function () {
    };
    CoinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coins',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coins/coins.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coins.component.css */ "./src/app/coins/coins.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoinsComponent);
    return CoinsComponent;
}());



/***/ }),

/***/ "./src/app/crypto-currency/crypto-currency.component.css":
/*!***************************************************************!*\
  !*** ./src/app/crypto-currency/crypto-currency.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".real-data{float: left; font-size: 17px;}\r\n.real-data>small{display: block; font-size: 60%; margin-bottom: .25rem}\r\n:host>>>.highcharts-title{display: none;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3J5cHRvLWN1cnJlbmN5L2NyeXB0by1jdXJyZW5jeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsV0FBVyxFQUFFLGVBQWUsQ0FBQztBQUN4QyxpQkFBaUIsY0FBYyxFQUFFLGNBQWMsRUFBRSxxQkFBcUI7QUFDdEUsMEJBQTBCLGFBQWEsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NyeXB0by1jdXJyZW5jeS9jcnlwdG8tY3VycmVuY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWFsLWRhdGF7ZmxvYXQ6IGxlZnQ7IGZvbnQtc2l6ZTogMTdweDt9XHJcbi5yZWFsLWRhdGE+c21hbGx7ZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogNjAlOyBtYXJnaW4tYm90dG9tOiAuMjVyZW19XHJcbjpob3N0Pj4+LmhpZ2hjaGFydHMtdGl0bGV7ZGlzcGxheTogbm9uZTt9Il19 */");

/***/ }),

/***/ "./src/app/crypto-currency/crypto-currency.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/crypto-currency/crypto-currency.component.ts ***!
  \**************************************************************/
/*! exports provided: CryptoCurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoCurrencyComponent", function() { return CryptoCurrencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var CryptoCurrencyComponent = /** @class */ (function () {
    function CryptoCurrencyComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                zoomType: 'x',
                //  animation: Highcharts.svg, // don't animate in IE < IE 10.
                marginRight: 10,
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                            y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            // title : {
            //    text: 'Live random data'   
            // },   
            // xAxis : {
            //    type: 'datetime',
            //    tickPixelInterval: 150
            // },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        highcharts__WEBPACK_IMPORTED_MODULE_2__["dateFormat"]('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        highcharts__WEBPACK_IMPORTED_MODULE_2__["numberFormat"](this.y, 2);
                }
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                    name: 'Random data',
                    data: (function () {
                        // generate an array of random data
                        var data = [], time = (new Date()).getTime(), i;
                        for (i = -19; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 1000,
                                y: Math.random()
                            });
                        }
                        return data;
                    }())
                }]
        };
    }
    CryptoCurrencyComponent.prototype.ngOnInit = function () {
    };
    CryptoCurrencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crypto-currency',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crypto-currency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/crypto-currency/crypto-currency.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crypto-currency.component.css */ "./src/app/crypto-currency/crypto-currency.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CryptoCurrencyComponent);
    return CryptoCurrencyComponent;
}());



/***/ }),

/***/ "./src/app/crypto-market/crypto-market.component.css":
/*!***********************************************************!*\
  !*** ./src/app/crypto-market/crypto-market.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-btn{border-radius: 0px;font-size: 13px;padding: 4px 20px;}\r\n.crypto-market-coins{padding: 0px 50px;}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3J5cHRvLW1hcmtldC9jcnlwdG8tbWFya2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUM7QUFDakUscUJBQXFCLGlCQUFpQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY3J5cHRvLW1hcmtldC9jcnlwdG8tbWFya2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWJ0bntib3JkZXItcmFkaXVzOiAwcHg7Zm9udC1zaXplOiAxM3B4O3BhZGRpbmc6IDRweCAyMHB4O31cclxuLmNyeXB0by1tYXJrZXQtY29pbnN7cGFkZGluZzogMHB4IDUwcHg7fVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/crypto-market/crypto-market.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/crypto-market/crypto-market.component.ts ***!
  \**********************************************************/
/*! exports provided: CryptoMarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoMarketComponent", function() { return CryptoMarketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CryptoMarketComponent = /** @class */ (function () {
    function CryptoMarketComponent() {
        this.carouselOptions = {
            margin: 25,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
            // loop:true,
            responsive: {
                0: {
                    items: 3,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                },
                1500: {
                    items: 4,
                    nav: true,
                }
            }
        };
        this.images = [
            { text: "BTC", },
            { text: "XRP", },
            { text: "ETH", },
            { text: "ZEC", },
            { text: "PPC", },
            { text: "CPT", },
            { text: "ERP", },
            { text: "CYP", },
            { text: "ZHS", }
        ];
        this.tabledata = [
            { "country": "United Kingdom", "value": "8767.70", "position": "+17.25%", "volume": "7.67%" },
            { "country": "United State", "value": "4867.90", "position": "-9.15%", "volume": "9.67%" },
            { "country": "Australia", "value": "7538.60", "position": "+32.25%", "volume": "12.55%" },
            { "country": "Netharlands", "value": "4256.70", "position": "+18.25%", "volume": "11.67%" },
            { "country": "Russia", "value": "7253.56", "position": "+8.29%", "volume": "14.67%" },
            { "country": "Bangladesh", "value": "4658.52", "position": "+5.18%", "volume": "10.63%" },
            { "country": "India", "value": "7567.70", "position": "+33.25%", "volume": "13.57%" },
            { "country": "China", "value": "2336.70", "position": "+7.24%", "volume": "11.62%" },
        ];
    }
    CryptoMarketComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#posi tbody tr').each(function () {
                var len = $(this).find(".position-td").text().length;
                if (len < 7) {
                    $(this).find(".position-td").addClass("text-danger");
                }
                else {
                    $(this).find(".position-td").addClass("text-success");
                }
            });
        });
    };
    CryptoMarketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crypto-market',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crypto-market.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/crypto-market/crypto-market.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crypto-market.component.css */ "./src/app/crypto-market/crypto-market.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CryptoMarketComponent);
    return CryptoMarketComponent;
}());



/***/ }),

/***/ "./src/app/current-orders/current-orders.component.css":
/*!*************************************************************!*\
  !*** ./src/app/current-orders/current-orders.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbnQtb3JkZXJzL2N1cnJlbnQtb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/current-orders/current-orders.component.ts":
/*!************************************************************!*\
  !*** ./src/app/current-orders/current-orders.component.ts ***!
  \************************************************************/
/*! exports provided: CurrentOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentOrdersComponent", function() { return CurrentOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CurrentOrdersComponent = /** @class */ (function () {
    function CurrentOrdersComponent(http) {
        this.http = http;
    }
    CurrentOrdersComponent.prototype.ngOnInit = function () {
        this.letNewss();
    };
    CurrentOrdersComponent.prototype.letNewss = function () {
        var _this = this;
        var url = "../../assets/data-folder/table.json";
        this.http.get(url)
            .subscribe(function (res) {
            console.log(res);
            _this.resData = res;
            _this.tradehistroy = res;
        }, function (err) {
            console.log(err);
        });
    };
    CurrentOrdersComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CurrentOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-orders',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./current-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/current-orders/current-orders.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./current-orders.component.css */ "./src/app/current-orders/current-orders.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CurrentOrdersComponent);
    return CurrentOrdersComponent;
}());



/***/ }),

/***/ "./src/app/dashbord1/dashbord1.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashbord1/dashbord1.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".news{padding-left:140px!important;position:relative;height:40px;white-space:nowrap;overflow:hidden}\r\n.news-hed{position:absolute;left:0;top:0;bottom:0;padding:.5em;z-index:9;width:120px}\r\n.news-hed::after{content:\"\";position:absolute;left:120px;top:0;bottom:0;border-bottom:solid 40px transparent;border-right:solid 40px transparent}\r\n@keyframes marquee {\r\n0%{text-indent:10%}\r\n100%{text-indent:-50%}\r\n}\r\n@-webkit-keyframes marquee {\r\n0%{text-indent:10%}\r\n100%{text-indent:-50%}\r\n}\r\n.coins{height: 40px;}\r\n.marquee{overflow:hidden;white-space:nowrap;animation:marquee 20s linear infinite;-webkit-animation:marquee 20s linear infinite;width:100%}\r\n.marquee:hover{-webkit-animation-play-state:paused;animation-play-state:paused}\r\n@media(max-width:768px){\r\n    .coins{height: auto; flex-wrap: wrap;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvcmQxL2Rhc2hib3JkMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sNEJBQTRCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGVBQWU7QUFDbkcsVUFBVSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVc7QUFDcEYsaUJBQWlCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxvQ0FBb0MsQ0FBQyxtQ0FBbUM7QUFDaEo7QUFDQSxHQUFHLGVBQWU7QUFDbEIsS0FBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBLEdBQUcsZUFBZTtBQUNsQixLQUFLLGdCQUFnQjtBQUNyQjtBQUNBLE9BQU8sWUFBWSxDQUFDO0FBQ3BCLFNBQVMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLHFDQUFxQyxDQUFDLDZDQUE2QyxDQUFDLFVBQVU7QUFDMUksZUFBZSxtQ0FBbUMsQ0FBQywyQkFBMkI7QUFFOUU7SUFDSSxPQUFPLFlBQVksRUFBRSxlQUFlLENBQUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9yZDEvZGFzaGJvcmQxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3c3twYWRkaW5nLWxlZnQ6MTQwcHghaW1wb3J0YW50O3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDo0MHB4O3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59XHJcbi5uZXdzLWhlZHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7Ym90dG9tOjA7cGFkZGluZzouNWVtO3otaW5kZXg6OTt3aWR0aDoxMjBweH1cclxuLm5ld3MtaGVkOjphZnRlcntjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxMjBweDt0b3A6MDtib3R0b206MDtib3JkZXItYm90dG9tOnNvbGlkIDQwcHggdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OnNvbGlkIDQwcHggdHJhbnNwYXJlbnR9XHJcbkBrZXlmcmFtZXMgbWFycXVlZSB7XHJcbjAle3RleHQtaW5kZW50OjEwJX1cclxuMTAwJXt0ZXh0LWluZGVudDotNTAlfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtYXJxdWVlIHtcclxuMCV7dGV4dC1pbmRlbnQ6MTAlfVxyXG4xMDAle3RleHQtaW5kZW50Oi01MCV9XHJcbn1cclxuLmNvaW5ze2hlaWdodDogNDBweDt9XHJcbi5tYXJxdWVle292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7YW5pbWF0aW9uOm1hcnF1ZWUgMjBzIGxpbmVhciBpbmZpbml0ZTstd2Via2l0LWFuaW1hdGlvbjptYXJxdWVlIDIwcyBsaW5lYXIgaW5maW5pdGU7d2lkdGg6MTAwJX1cclxuLm1hcnF1ZWU6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWQ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAuY29pbnN7aGVpZ2h0OiBhdXRvOyBmbGV4LXdyYXA6IHdyYXA7fVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/dashbord1/dashbord1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashbord1/dashbord1.component.ts ***!
  \**************************************************/
/*! exports provided: Dashbord1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashbord1Component", function() { return Dashbord1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Dashbord1Component = /** @class */ (function () {
    function Dashbord1Component() {
        this.coinsbtn = [
            { "icon": "fa-adjust", "txt": "BTC 11002.52" },
            { "icon": "fa-registered", "txt": "ETC 12502.32" },
            { "icon": "fa-universal-access", "txt": "PPC 20354.25" },
            { "icon": "fa-gg-circle", "txt": "ZEC 25346.28" },
            { "icon": "fa-adjust", "txt": "BTC 11002.52" },
            { "icon": "fa-registered", "txt": "ETC 12502.32" },
            { "icon": "fa-universal-access", "txt": "PPC 20354.25" },
            { "icon": "fa-gg-circle", "txt": "ZEC 25346.28" }
        ];
    }
    Dashbord1Component.prototype.ngOnInit = function () {
    };
    Dashbord1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashbord1',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashbord1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashbord1/dashbord1.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashbord1.component.css */ "./src/app/dashbord1/dashbord1.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Dashbord1Component);
    return Dashbord1Component;
}());



/***/ }),

/***/ "./src/app/dashbord2/dashbord2.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashbord2/dashbord2.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib3JkMi9kYXNoYm9yZDIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashbord2/dashbord2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashbord2/dashbord2.component.ts ***!
  \**************************************************/
/*! exports provided: Dashbord2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashbord2Component", function() { return Dashbord2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Dashbord2Component = /** @class */ (function () {
    function Dashbord2Component() {
    }
    Dashbord2Component.prototype.ngOnInit = function () {
    };
    Dashbord2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashbord2',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashbord2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashbord2/dashbord2.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashbord2.component.css */ "./src/app/dashbord2/dashbord2.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Dashbord2Component);
    return Dashbord2Component;
}());



/***/ }),

/***/ "./src/app/forms/checkbox-validation/checkbox-validation.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/forms/checkbox-validation/checkbox-validation.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2NoZWNrYm94LXZhbGlkYXRpb24vY2hlY2tib3gtdmFsaWRhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/forms/checkbox-validation/checkbox-validation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/forms/checkbox-validation/checkbox-validation.component.ts ***!
  \****************************************************************************/
/*! exports provided: CheckboxValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxValidationComponent", function() { return CheckboxValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);




var CheckboxValidationComponent = /** @class */ (function () {
    function CheckboxValidationComponent(fb, messageService) {
        this.fb = fb;
        this.messageService = messageService;
    }
    CheckboxValidationComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.genders = [];
        this.genders.push({ label: 'Select Gender', value: '' });
        this.genders.push({ label: 'Male', value: 'Male' });
        this.genders.push({ label: 'Female', value: 'Female' });
    };
    CheckboxValidationComponent.prototype.onSubmit = function (value) {
        this.submitted = true;
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
    };
    Object.defineProperty(CheckboxValidationComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.userform.value); },
        enumerable: true,
        configurable: true
    });
    CheckboxValidationComponent.prototype.onReset = function () {
        this.submitted = false;
        this.userform.reset();
    };
    CheckboxValidationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
    ]; };
    CheckboxValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox-validation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkbox-validation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/checkbox-validation/checkbox-validation.component.html")).default,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkbox-validation.component.css */ "./src/app/forms/checkbox-validation/checkbox-validation.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], CheckboxValidationComponent);
    return CheckboxValidationComponent;
}());



/***/ }),

/***/ "./src/app/forms/custom-forms/custom-forms.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forms/custom-forms/custom-forms.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2N1c3RvbS1mb3Jtcy9jdXN0b20tZm9ybXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/forms/custom-forms/custom-forms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/custom-forms/custom-forms.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormsComponent", function() { return CustomFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomFormsComponent = /** @class */ (function () {
    function CustomFormsComponent() {
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.SelectCoins = [
            { label: 'Bitcoin', value: 'Bitcoin' },
            { label: 'ETHERUM', value: 'ETHERUM' },
            { label: 'PEERCOIN', value: 'PEERCOIN' },
            { label: 'ZCASH', value: 'ZCASH' },
        ];
        this.cars = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' },
        ];
        this.cities1 = [
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
        ];
    }
    CustomFormsComponent.prototype.ngOnInit = function () {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            today: 'Hoy',
            clear: 'Borrar'
        };
        var today = new Date();
        var month = today.getMonth();
        var year = today.getFullYear();
        var prevMonth = (month === 0) ? 11 : month - 1;
        var prevYear = (prevMonth === 11) ? year - 1 : year;
        var nextMonth = (month === 11) ? 0 : month + 1;
        var nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
        var invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today, invalidDate];
    };
    CustomFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-forms',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-forms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/custom-forms/custom-forms.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./custom-forms.component.css */ "./src/app/forms/custom-forms/custom-forms.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomFormsComponent);
    return CustomFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-validation/form-validation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/forms/form-validation/form-validation.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm0tdmFsaWRhdGlvbi9mb3JtLXZhbGlkYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/forms/form-validation/form-validation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/form-validation/form-validation.component.ts ***!
  \********************************************************************/
/*! exports provided: FormValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationComponent", function() { return FormValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormValidationComponent = /** @class */ (function () {
    function FormValidationComponent() {
    }
    FormValidationComponent.prototype.ngOnInit = function () {
    };
    FormValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-validation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-validation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/form-validation/form-validation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-validation.component.css */ "./src/app/forms/form-validation/form-validation.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormValidationComponent);
    return FormValidationComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms-index/forms-index.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forms/forms-index/forms-index.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2Zvcm1zLWluZGV4L2Zvcm1zLWluZGV4LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/forms/forms-index/forms-index.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/forms-index/forms-index.component.ts ***!
  \************************************************************/
/*! exports provided: FormsIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsIndexComponent", function() { return FormsIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormsIndexComponent = /** @class */ (function () {
    function FormsIndexComponent() {
    }
    FormsIndexComponent.prototype.ngOnInit = function () {
    };
    FormsIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms-index',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms-index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms-index/forms-index.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forms-index.component.css */ "./src/app/forms/forms-index/forms-index.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormsIndexComponent);
    return FormsIndexComponent;
}());



/***/ }),

/***/ "./src/app/forms/input-groups/input-groups.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forms/input-groups/input-groups.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL2lucHV0LWdyb3Vwcy9pbnB1dC1ncm91cHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/forms/input-groups/input-groups.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/input-groups/input-groups.component.ts ***!
  \**************************************************************/
/*! exports provided: InputGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupsComponent", function() { return InputGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputGroupsComponent = /** @class */ (function () {
    function InputGroupsComponent() {
    }
    InputGroupsComponent.prototype.ngOnInit = function () {
    };
    InputGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-groups',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-groups.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/input-groups/input-groups.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-groups.component.css */ "./src/app/forms/input-groups/input-groups.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputGroupsComponent);
    return InputGroupsComponent;
}());



/***/ }),

/***/ "./src/app/forms/input-validation/input-validation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/forms/input-validation/input-validation.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spec-error{position: absolute; left: 5px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvaW5wdXQtdmFsaWRhdGlvbi9pbnB1dC12YWxpZGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxrQkFBa0IsRUFBRSxTQUFTLENBQUMiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9pbnB1dC12YWxpZGF0aW9uL2lucHV0LXZhbGlkYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjLWVycm9ye3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNXB4O30iXX0= */");

/***/ }),

/***/ "./src/app/forms/input-validation/input-validation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/forms/input-validation/input-validation.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidationComponent", function() { return InputValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/must-match.validator */ "./src/app/service/must-match.validator.ts");



// import custom validator to validate that password and confirm password fields match

var InputValidationComponent = /** @class */ (function () {
    function InputValidationComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    InputValidationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
        }, {
            validator: Object(_service_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
        });
    };
    Object.defineProperty(InputValidationComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    InputValidationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    };
    InputValidationComponent.prototype.onReset = function () {
        this.submitted = false;
        this.registerForm.reset();
    };
    InputValidationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    InputValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-validation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-validation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/input-validation/input-validation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-validation.component.css */ "./src/app/forms/input-validation/input-validation.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], InputValidationComponent);
    return InputValidationComponent;
}());



/***/ }),

/***/ "./src/app/forms/simple-form/simple-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forms/simple-form/simple-form.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3NpbXBsZS1mb3JtL3NpbXBsZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/forms/simple-form/simple-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forms/simple-form/simple-form.component.ts ***!
  \************************************************************/
/*! exports provided: SimpleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFormComponent", function() { return SimpleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SimpleFormComponent = /** @class */ (function () {
    function SimpleFormComponent() {
    }
    SimpleFormComponent.prototype.ngOnInit = function () {
    };
    SimpleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simple-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/simple-form/simple-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simple-form.component.css */ "./src/app/forms/simple-form/simple-form.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimpleFormComponent);
    return SimpleFormComponent;
}());



/***/ }),

/***/ "./src/app/forms/typehead/typehead.component.css":
/*!*******************************************************!*\
  !*** ./src/app/forms/typehead/typehead.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control{font-size: .8rem !important;}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdHlwZWhlYWQvdHlwZWhlYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLDJCQUEyQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvdHlwZWhlYWQvdHlwZWhlYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2x7Zm9udC1zaXplOiAuOHJlbSAhaW1wb3J0YW50O31cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/forms/typehead/typehead.component.ts":
/*!******************************************************!*\
  !*** ./src/app/forms/typehead/typehead.component.ts ***!
  \******************************************************/
/*! exports provided: TypeheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeheadComponent", function() { return TypeheadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_counrtyservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/counrtyservices.service */ "./src/app/service/counrtyservices.service.ts");



// import {CountryService} from '../../service/counrtyservices.service';
var TypeheadComponent = /** @class */ (function () {
    function TypeheadComponent(countryService) {
        this.countryService = countryService;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
        this.val2 = 5;
        this.val4 = 5;
    }
    TypeheadComponent.prototype.handleRate = function (event) {
        this.msg = "You have rated " + event.value;
    };
    TypeheadComponent.prototype.handleCancel = function (event) {
        this.msg = "Rating Cancelled";
    };
    TypeheadComponent.prototype.filterCountrySingle = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountriesSingle = _this.filterCountry(query, countries);
        });
    };
    TypeheadComponent.prototype.filterCountryMultiple = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountriesMultiple = _this.filterCountry(query, countries);
        });
    };
    TypeheadComponent.prototype.filterCountry = function (query, countries) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    TypeheadComponent.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    TypeheadComponent.prototype.ngOnInit = function () {
        // this.letNewss();
    };
    TypeheadComponent.ctorParameters = function () { return [
        { type: _service_counrtyservices_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"] }
    ]; };
    TypeheadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typehead',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typehead.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/typehead/typehead.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./typehead.component.css */ "./src/app/forms/typehead/typehead.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_counrtyservices_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"]])
    ], TypeheadComponent);
    return TypeheadComponent;
}());



/***/ }),

/***/ "./src/app/leftnavbar/leftnavbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/leftnavbar/leftnavbar.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo{padding: 7px 4px;border-bottom: solid 1px}\r\n.parent-drop, .slide-submenu>li>a{transition:all 300ms ease;padding: 10px; display: block;position: relative; cursor: pointer;text-decoration: none}\r\n.slide-submenu{ padding-top: 10px; padding-left: 12px; display: none}\r\n.icof{float: right; margin-top: 3px; transition:all 300ms ease;}\r\n/* .slide-navbar .active::before{content: \"\";position: absolute;left: 0px;width: 4px;height:39px;top: 0;} */\r\n.sliderBtn{position:absolute;right:-31px;top:-36px;height:19px;display:block;width:22px;cursor:pointer;z-index:9999;background:#fff}\r\n.sliderBtn:hover{background:#FFF}\r\n.navbar-icon{position:absolute;content:\"\";width:22px;height:.1em;background-color:#333;top:1px; transition: all 300ms ease;}\r\n.navbar-icon:before{position:absolute;content:\"\";width:22px;height:.1em;background-color:#333;bottom:20px;top:8px}\r\n.navbar-icon:after{position:absolute;content:\"\";width:22px;height:.1em;background-color:#333;top:16px}\r\n.cross .navbar-icon{background: transparent;}\r\n.cross .navbar-icon:after{top: 8px; transform: rotate(-45deg);}\r\n.cross .navbar-icon:before{transform: rotate(45deg);}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdG5hdmJhci9sZWZ0bmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxnQkFBZ0IsQ0FBQyx3QkFBd0I7QUFDL0Msa0NBQWtDLHlCQUF5QixDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLHFCQUFxQjtBQUNuSixnQkFBZ0IsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsYUFBYTtBQUNwRSxNQUFNLFlBQVksRUFBRSxlQUFlLEVBQUUseUJBQXlCLENBQUM7QUFDL0QsMkdBQTJHO0FBSTNHLFdBQVcsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGVBQWU7QUFDbkksaUJBQWlCLGVBQWU7QUFDaEMsYUFBYSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsMEJBQTBCLENBQUM7QUFDM0gsb0JBQW9CLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxPQUFPO0FBQ2pILG1CQUFtQixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRO0FBQ3JHLG9CQUFvQix1QkFBdUIsQ0FBQztBQUM1QywwQkFBMEIsUUFBUSxFQUFFLHlCQUF5QixDQUFDO0FBQzlELDJCQUEyQix3QkFBd0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2xlZnRuYXZiYXIvbGVmdG5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297cGFkZGluZzogN3B4IDRweDtib3JkZXItYm90dG9tOiBzb2xpZCAxcHh9XHJcbi5wYXJlbnQtZHJvcCwgLnNsaWRlLXN1Ym1lbnU+bGk+YXt0cmFuc2l0aW9uOmFsbCAzMDBtcyBlYXNlO3BhZGRpbmc6IDEwcHg7IGRpc3BsYXk6IGJsb2NrO3Bvc2l0aW9uOiByZWxhdGl2ZTsgY3Vyc29yOiBwb2ludGVyO3RleHQtZGVjb3JhdGlvbjogbm9uZX1cclxuLnNsaWRlLXN1Ym1lbnV7IHBhZGRpbmctdG9wOiAxMHB4OyBwYWRkaW5nLWxlZnQ6IDEycHg7IGRpc3BsYXk6IG5vbmV9XHJcbi5pY29me2Zsb2F0OiByaWdodDsgbWFyZ2luLXRvcDogM3B4OyB0cmFuc2l0aW9uOmFsbCAzMDBtcyBlYXNlO31cclxuLyogLnNsaWRlLW5hdmJhciAuYWN0aXZlOjpiZWZvcmV7Y29udGVudDogXCJcIjtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMHB4O3dpZHRoOiA0cHg7aGVpZ2h0OjM5cHg7dG9wOiAwO30gKi9cclxuXHJcblxyXG5cclxuLnNsaWRlckJ0bntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDotMzFweDt0b3A6LTM2cHg7aGVpZ2h0OjE5cHg7ZGlzcGxheTpibG9jazt3aWR0aDoyMnB4O2N1cnNvcjpwb2ludGVyO3otaW5kZXg6OTk5OTtiYWNrZ3JvdW5kOiNmZmZ9XHJcbi5zbGlkZXJCdG46aG92ZXJ7YmFja2dyb3VuZDojRkZGfVxyXG4ubmF2YmFyLWljb257cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcIlwiO3dpZHRoOjIycHg7aGVpZ2h0Oi4xZW07YmFja2dyb3VuZC1jb2xvcjojMzMzO3RvcDoxcHg7IHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO31cclxuLm5hdmJhci1pY29uOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlwiXCI7d2lkdGg6MjJweDtoZWlnaHQ6LjFlbTtiYWNrZ3JvdW5kLWNvbG9yOiMzMzM7Ym90dG9tOjIwcHg7dG9wOjhweH1cclxuLm5hdmJhci1pY29uOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XCJcIjt3aWR0aDoyMnB4O2hlaWdodDouMWVtO2JhY2tncm91bmQtY29sb3I6IzMzMzt0b3A6MTZweH0gICBcclxuLmNyb3NzIC5uYXZiYXItaWNvbntiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XHJcbi5jcm9zcyAubmF2YmFyLWljb246YWZ0ZXJ7dG9wOiA4cHg7IHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7fVxyXG4uY3Jvc3MgLm5hdmJhci1pY29uOmJlZm9yZXt0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7fVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/leftnavbar/leftnavbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/leftnavbar/leftnavbar.component.ts ***!
  \****************************************************/
/*! exports provided: LeftnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftnavbarComponent", function() { return LeftnavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");



var LeftnavbarComponent = /** @class */ (function () {
    function LeftnavbarComponent() {
        this.status = false;
    }
    LeftnavbarComponent.prototype.ngOnInit = function () {
    };
    LeftnavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leftnavbar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leftnavbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/leftnavbar/leftnavbar.component.html")).default,
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leftnavbar.component.css */ "./src/app/leftnavbar/leftnavbar.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftnavbarComponent);
    return LeftnavbarComponent;
}());



/***/ }),

/***/ "./src/app/mypipe/custompipe.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/mypipe/custompipe.pipe.ts ***!
  \*******************************************/
/*! exports provided: CustompipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustompipePipe", function() { return CustompipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustompipePipe = /** @class */ (function () {
    function CustompipePipe() {
    }
    CustompipePipe.prototype.transform = function (value, args) {
        if (args) {
            var arr = [];
            for (var i = 0; i < args; i++) {
                arr.push(value[i]);
            }
            return arr;
        }
        else
            ;
        {
            return value;
        }
    };
    CustompipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'custompipe'
        })
    ], CustompipePipe);
    return CustompipePipe;
}());



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyserviceService = /** @class */ (function () {
    function MyserviceService() {
    }
    // status: boolean = false;
    MyserviceService.prototype.display = function () {
        return "Helo World";
    };
    ;
    MyserviceService.prototype.myclick = function () {
        // this.status = !this.status;     
        alert("hi");
    };
    MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyserviceService);
    return MyserviceService;
}());



/***/ }),

/***/ "./src/app/service/counrtyservices.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/counrtyservices.service.ts ***!
  \****************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get('../../assets/data-folder/countries.json')
            .toPromise()
            .then(function (res) { return res.data; })
            .then(function (data) { return data; });
    };
    CountryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/service/must-match.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/service/must-match.validator.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/socialMedia/main/main.component.css":
/*!*****************************************************!*\
  !*** ./src/app/socialMedia/main/main.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbE1lZGlhL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/socialMedia/main/main.component.ts":
/*!****************************************************!*\
  !*** ./src/app/socialMedia/main/main.component.ts ***!
  \****************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/main/main.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/socialMedia/main/main.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/socialMedia/social-activity/social-activity.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/socialMedia/social-activity/social-activity.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".twitter{background-color: #3da4f1; color: #fff; border-radius: 4px; padding: 10px;}\r\n.linkdin{background-color: #0177b5; color: #fff; border-radius: 4px; padding: 10px;}\r\n.facebook{background-color: #3b5999; color: #fff; border-radius: 4px; padding: 10px;}\r\n.instagram{ background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%); color: #fff; border-radius: 4px; padding: 10px;}\r\n.social-widgit .fa-twitter, .social-widgit .fa-linkedin-square, .social-widgit .fa-facebook-official, .social-widgit .fa-instagram{opacity: .4;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsTWVkaWEvc29jaWFsLWFjdGl2aXR5L3NvY2lhbC1hY3Rpdml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMseUJBQXlCLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztBQUNuRixTQUFTLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLENBQUM7QUFDbkYsVUFBVSx5QkFBeUIsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO0FBQ3BGLFlBQVksNEdBQTRHLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztBQUN6SyxtSUFBbUksV0FBVyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsTWVkaWEvc29jaWFsLWFjdGl2aXR5L3NvY2lhbC1hY3Rpdml0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR3aXR0ZXJ7YmFja2dyb3VuZC1jb2xvcjogIzNkYTRmMTsgY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDRweDsgcGFkZGluZzogMTBweDt9XHJcbi5saW5rZGlue2JhY2tncm91bmQtY29sb3I6ICMwMTc3YjU7IGNvbG9yOiAjZmZmOyBib3JkZXItcmFkaXVzOiA0cHg7IHBhZGRpbmc6IDEwcHg7fVxyXG4uZmFjZWJvb2t7YmFja2dyb3VuZC1jb2xvcjogIzNiNTk5OTsgY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDRweDsgcGFkZGluZzogMTBweDt9XHJcbi5pbnN0YWdyYW17IGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCNkNjI0OWYgNjAlLCMyODVBRUIgOTAlKTsgY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDRweDsgcGFkZGluZzogMTBweDt9XHJcbi5zb2NpYWwtd2lkZ2l0IC5mYS10d2l0dGVyLCAuc29jaWFsLXdpZGdpdCAuZmEtbGlua2VkaW4tc3F1YXJlLCAuc29jaWFsLXdpZGdpdCAuZmEtZmFjZWJvb2stb2ZmaWNpYWwsIC5zb2NpYWwtd2lkZ2l0IC5mYS1pbnN0YWdyYW17b3BhY2l0eTogLjQ7fSJdfQ== */");

/***/ }),

/***/ "./src/app/socialMedia/social-activity/social-activity.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/socialMedia/social-activity/social-activity.component.ts ***!
  \**************************************************************************/
/*! exports provided: SocialActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialActivityComponent", function() { return SocialActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SocialActivityComponent = /** @class */ (function () {
    function SocialActivityComponent() {
        this.viewdays = [
            { label: "1 days", code: "1days" },
            { label: "7 days", code: "7days" },
            { label: "15 days", code: "15days" },
            { label: "1 Month", code: "1month" },
        ];
    }
    SocialActivityComponent.prototype.ngOnInit = function () {
    };
    SocialActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social-activity',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/social-activity/social-activity.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-activity.component.css */ "./src/app/socialMedia/social-activity/social-activity.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialActivityComponent);
    return SocialActivityComponent;
}());



/***/ }),

/***/ "./src/app/socialMedia/social-followers/social-followers.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/socialMedia/social-followers/social-followers.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".social-widget{width: 100%; border-collapse: collapse; margin-bottom: -.5rem;}\r\n.social-widget>tr>td{width: 33.3333%; height: 130px; vertical-align: middle; text-align: center; border: solid 1px #eee;}\r\n.social-widget>tr>td i, .social-widget>tr>td span, .social-widget>tr>td small{display: block;}\r\n.social{width: 36px;height: 36px;text-align: center;border-radius: 4px;margin: auto;padding-top: 9px;font-size: 18px;}\r\n.fb{background-color: #3b5999;}\r\n.tw{background-color: #3da4f1;}\r\n.insta{background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%); }\r\n.gplus{background-color: #dc4e42;}\r\n.youtub{background-color: #ff0101;}\r\n.linkdin{background-color: #0077b6;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsTWVkaWEvc29jaWFsLWZvbGxvd2Vycy9zb2NpYWwtZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxXQUFXLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLENBQUM7QUFDN0UscUJBQXFCLGVBQWUsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUM7QUFDeEgsOEVBQThFLGNBQWMsQ0FBQztBQUM3RixRQUFRLFdBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztBQUVySCxJQUFJLHlCQUF5QixDQUFDO0FBQzlCLElBQUkseUJBQXlCLENBQUM7QUFDOUIsT0FBTyw0R0FBNEcsRUFBRTtBQUNySCxPQUFPLHlCQUF5QixDQUFDO0FBQ2pDLFFBQVEseUJBQXlCLENBQUM7QUFDbEMsU0FBUyx5QkFBeUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbE1lZGlhL3NvY2lhbC1mb2xsb3dlcnMvc29jaWFsLWZvbGxvd2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbC13aWRnZXR7d2lkdGg6IDEwMCU7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IG1hcmdpbi1ib3R0b206IC0uNXJlbTt9XHJcbi5zb2NpYWwtd2lkZ2V0PnRyPnRke3dpZHRoOiAzMy4zMzMzJTsgaGVpZ2h0OiAxMzBweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXI6IHNvbGlkIDFweCAjZWVlO31cclxuLnNvY2lhbC13aWRnZXQ+dHI+dGQgaSwgLnNvY2lhbC13aWRnZXQ+dHI+dGQgc3BhbiwgLnNvY2lhbC13aWRnZXQ+dHI+dGQgc21hbGx7ZGlzcGxheTogYmxvY2s7fVxyXG4uc29jaWFse3dpZHRoOiAzNnB4O2hlaWdodDogMzZweDt0ZXh0LWFsaWduOiBjZW50ZXI7Ym9yZGVyLXJhZGl1czogNHB4O21hcmdpbjogYXV0bztwYWRkaW5nLXRvcDogOXB4O2ZvbnQtc2l6ZTogMThweDt9XHJcblxyXG4uZmJ7YmFja2dyb3VuZC1jb2xvcjogIzNiNTk5OTt9XHJcbi50d3tiYWNrZ3JvdW5kLWNvbG9yOiAjM2RhNGYxO31cclxuLmluc3Rhe2JhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDEwNyUsICNmZGY0OTcgMCUsICNmZGY0OTcgNSUsICNmZDU5NDkgNDUlLCNkNjI0OWYgNjAlLCMyODVBRUIgOTAlKTsgfVxyXG4uZ3BsdXN7YmFja2dyb3VuZC1jb2xvcjogI2RjNGU0Mjt9XHJcbi55b3V0dWJ7YmFja2dyb3VuZC1jb2xvcjogI2ZmMDEwMTt9XHJcbi5saW5rZGlue2JhY2tncm91bmQtY29sb3I6ICMwMDc3YjY7fSJdfQ== */");

/***/ }),

/***/ "./src/app/socialMedia/social-followers/social-followers.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/socialMedia/social-followers/social-followers.component.ts ***!
  \****************************************************************************/
/*! exports provided: SocialFollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialFollowersComponent", function() { return SocialFollowersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SocialFollowersComponent = /** @class */ (function () {
    function SocialFollowersComponent() {
        this.viewdays = [
            { label: "1 days", code: "1days" },
            { label: "7 days", code: "7days" },
            { label: "15 days", code: "15days" },
            { label: "1 Month", code: "1month" },
        ];
        this.conversation = [
            { "source": "Facebook", "cv1": "76", "cv2": "64", "avg": "9.12%" },
            { "source": "Twitter", "cv1": "40", "cv2": "10", "avg": "7.65%" },
            { "source": "Linkdin", "cv1": "35", "cv2": "6", "avg": "14.29%" },
            { "source": "Goolge Plus", "cv1": "45", "cv2": "8", "avg": "10.99%" },
            { "source": "Instagram", "cv1": "27", "cv2": "2", "avg": "6.75%" },
            { "source": "You Tube", "cv1": "31", "cv2": "18", "avg": "17.27%" },
        ];
    }
    SocialFollowersComponent.prototype.ngOnInit = function () {
    };
    SocialFollowersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social-followers',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-followers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/social-followers/social-followers.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-followers.component.css */ "./src/app/socialMedia/social-followers/social-followers.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialFollowersComponent);
    return SocialFollowersComponent;
}());



/***/ }),

/***/ "./src/app/socialMedia/youtubefacebook-widget/youtubefacebook-widget.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/socialMedia/youtubefacebook-widget/youtubefacebook-widget.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbE1lZGlhL3lvdXR1YmVmYWNlYm9vay13aWRnZXQveW91dHViZWZhY2Vib29rLXdpZGdldC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/socialMedia/youtubefacebook-widget/youtubefacebook-widget.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/socialMedia/youtubefacebook-widget/youtubefacebook-widget.component.ts ***!
  \****************************************************************************************/
/*! exports provided: YoutubefacebookWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubefacebookWidgetComponent", function() { return YoutubefacebookWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var YoutubefacebookWidgetComponent = /** @class */ (function () {
    function YoutubefacebookWidgetComponent() {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            },
            credits: {
                enabled: false
            },
            series: [{
                    showInLegend: false,
                    name: 'John',
                    data: [1000, -400, 3500, -700, 2000, -600, 2000]
                }, {
                    showInLegend: false,
                    name: 'Jane',
                    data: [-800, 2000, -600, 2000, -1000, 2000, -1000]
                }, {
                    showInLegend: false,
                    name: 'Joe',
                    data: [3000, -1000, 3000, -900, -1200, 3000, -600]
                },
                {
                    showInLegend: false,
                    name: 'John',
                    data: [1000, -600, 3300, -300, 2000, -1000, 2000]
                }, {
                    showInLegend: false,
                    name: 'Jane',
                    data: [-800, 2000, -1000, 2000, -1000, 2000, -1000]
                }, {
                    showInLegend: false,
                    name: 'Joe',
                    data: [3000, -1000, 3000, -300, -500, 3000, -400]
                }]
        };
        this.chartOptions1 = {
            chart: {
                type: "area"
            },
            title: {
                text: ""
            },
            subtitle: {
                text: ""
            },
            yAxis: {
                title: {
                    text: ""
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
            },
            xAxis: {
                title: {
                    text: ""
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
            },
            tooltip: {
                valueSuffix: ""
            },
            legend: {
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                x: -15,
                y: 0,
            },
            series: [{
                    fillOpacity: 0.1,
                    color: '#08bf6f',
                    name: '',
                    showInLegend: false,
                    data: [1.2, 3.6, 4.3, 5.1, 6.0, 5.4, 4.7, 3.6, 2.1, 1.1]
                }]
        };
        this.chartOptions2 = {
            chart: {
                type: "area"
            },
            title: {
                text: ""
            },
            subtitle: {
                text: ""
            },
            yAxis: {
                title: {
                    text: ""
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
            },
            xAxis: {
                title: {
                    text: ""
                },
                labels: {
                    enabled: false
                },
                gridLineWidth: 0,
            },
            tooltip: {
                valueSuffix: ""
            },
            legend: {
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                x: -15,
                y: 0,
            },
            series: [{
                    fillOpacity: 0.1,
                    color: '#fb6436',
                    name: '',
                    showInLegend: false,
                    data: [1.2, 3.3, 4.2, 5.3, 6.7, 5.1, 4.3, 3.1, 2.2, 1.1]
                }]
        };
        this.viewdays = [
            { label: "1 days", code: "1days" },
            { label: "7 days", code: "7days" },
            { label: "15 days", code: "15days" },
            { label: "1 Month", code: "1month" },
        ];
        this.page = [
            { label: "Facebook Page", code: "page" },
            { label: "Facebook Page1", code: "page1" },
            { label: "Facebook Page2", code: "page2" },
            { label: "Facebook Page3", code: "page3" },
        ];
    }
    YoutubefacebookWidgetComponent.prototype.ngOnInit = function () {
    };
    YoutubefacebookWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-youtubefacebook-widget',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./youtubefacebook-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/socialMedia/youtubefacebook-widget/youtubefacebook-widget.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./youtubefacebook-widget.component.css */ "./src/app/socialMedia/youtubefacebook-widget/youtubefacebook-widget.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], YoutubefacebookWidgetComponent);
    return YoutubefacebookWidgetComponent;
}());



/***/ }),

/***/ "./src/app/topbar/topbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/topbar/topbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-header{width:100%}\r\n.search-bar{position:relative;display:inline-block}\r\n.search-input{border-radius:25px;width:170px;border:none;padding:5px 15px;font-size:14px}\r\n.search-btn{background-color:transparent;outline:none;border:none;position:absolute;right:5px;top:4px;opacity:.5;cursor:pointer;transition:all 300ms ease}\r\n.search-btn:hover{opacity:1}\r\n.search-bar .fa-envelope,.search-bar .fa-bell{opacity:.5}\r\n.notification::after{content:\"\";width:8px;height:8px;position:absolute;border-radius:50%;z-index:9;right:-2px;top:0}\r\n.user{position:relative}\r\n.user img{width:30px;border-radius:50%}\r\n.user::after{content:\"\";width:1px;position:absolute;left:6px;top:-17px;bottom:-17px}\r\n.sliderBtn{cursor: pointer;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksVUFBVTtBQUN0QixZQUFZLGlCQUFpQixDQUFDLG9CQUFvQjtBQUNsRCxjQUFjLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsY0FBYztBQUN4RixZQUFZLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLHlCQUF5QjtBQUN6SixrQkFBa0IsU0FBUztBQUMzQiw4Q0FBOEMsVUFBVTtBQUN4RCxxQkFBcUIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLO0FBQ25ILE1BQU0saUJBQWlCO0FBQ3ZCLFVBQVUsVUFBVSxDQUFDLGlCQUFpQjtBQUN0QyxhQUFhLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZO0FBQ25GLFdBQVcsZUFBZSxDQUFDIiwiZmlsZSI6InNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1oZWFkZXJ7d2lkdGg6MTAwJX1cclxuLnNlYXJjaC1iYXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2t9XHJcbi5zZWFyY2gtaW5wdXR7Ym9yZGVyLXJhZGl1czoyNXB4O3dpZHRoOjE3MHB4O2JvcmRlcjpub25lO3BhZGRpbmc6NXB4IDE1cHg7Zm9udC1zaXplOjE0cHh9XHJcbi5zZWFyY2gtYnRue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7b3V0bGluZTpub25lO2JvcmRlcjpub25lO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjVweDt0b3A6NHB4O29wYWNpdHk6LjU7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjphbGwgMzAwbXMgZWFzZX1cclxuLnNlYXJjaC1idG46aG92ZXJ7b3BhY2l0eToxfVxyXG4uc2VhcmNoLWJhciAuZmEtZW52ZWxvcGUsLnNlYXJjaC1iYXIgLmZhLWJlbGx7b3BhY2l0eTouNX1cclxuLm5vdGlmaWNhdGlvbjo6YWZ0ZXJ7Y29udGVudDpcIlwiO3dpZHRoOjhweDtoZWlnaHQ6OHB4O3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO3otaW5kZXg6OTtyaWdodDotMnB4O3RvcDowfVxyXG4udXNlcntwb3NpdGlvbjpyZWxhdGl2ZX1cclxuLnVzZXIgaW1ne3dpZHRoOjMwcHg7Ym9yZGVyLXJhZGl1czo1MCV9XHJcbi51c2VyOjphZnRlcntjb250ZW50OlwiXCI7d2lkdGg6MXB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NnB4O3RvcDotMTdweDtib3R0b206LTE3cHh9XHJcbi5zbGlkZXJCdG57Y3Vyc29yOiBwb2ludGVyO30iXX0= */");

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");



var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(_clickService) {
        this._clickService = _clickService;
        this.status = false;
    }
    TopbarComponent.prototype.ngOnInit = function () {
        // this.status=this. _clickService.myclick()
        this.status = !this.status;
    };
    TopbarComponent.ctorParameters = function () { return [
        { type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"] }
    ]; };
    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topbar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/topbar/topbar.component.html")).default,
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topbar.component.css */ "./src/app/topbar/topbar.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/trade-table/trade-table.component.css":
/*!*******************************************************!*\
  !*** ./src/app/trade-table/trade-table.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-fixed{table-layout: fixed}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZGUtdGFibGUvdHJhZGUtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG1CQUFtQiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlLXRhYmxlL3RyYWRlLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtZml4ZWR7dGFibGUtbGF5b3V0OiBmaXhlZH0iXX0= */");

/***/ }),

/***/ "./src/app/trade-table/trade-table.component.ts":
/*!******************************************************!*\
  !*** ./src/app/trade-table/trade-table.component.ts ***!
  \******************************************************/
/*! exports provided: TradeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeTableComponent", function() { return TradeTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TradeTableComponent = /** @class */ (function () {
    function TradeTableComponent(http) {
        this.http = http;
    }
    TradeTableComponent.prototype.ngOnInit = function () {
        this.letNewss();
    };
    TradeTableComponent.prototype.letNewss = function () {
        var _this = this;
        var url = "../../assets/data-folder/table.json";
        this.http.get(url)
            .subscribe(function (res) {
            console.log(res);
            _this.resData = res;
            _this.tradehistroy = res;
        }, function (err) {
            console.log(err);
        });
    };
    TradeTableComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TradeTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trade-table',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trade-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trade-table/trade-table.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trade-table.component.css */ "./src/app/trade-table/trade-table.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TradeTableComponent);
    return TradeTableComponent;
}());



/***/ }),

/***/ "./src/app/tradehistroy/tradehistroy.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tradehistroy/tradehistroy.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlaGlzdHJveS90cmFkZWhpc3Ryb3kuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/tradehistroy/tradehistroy.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tradehistroy/tradehistroy.component.ts ***!
  \********************************************************/
/*! exports provided: TradehistroyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradehistroyComponent", function() { return TradehistroyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TradehistroyComponent = /** @class */ (function () {
    function TradehistroyComponent() {
    }
    TradehistroyComponent.prototype.ngOnInit = function () {
    };
    TradehistroyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tradehistroy',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tradehistroy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tradehistroy/tradehistroy.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tradehistroy.component.css */ "./src/app/tradehistroy/tradehistroy.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TradehistroyComponent);
    return TradehistroyComponent;
}());



/***/ }),

/***/ "./src/app/ui-elements/ui-elements.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ui-elements/ui-elements.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWVsZW1lbnRzL3VpLWVsZW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-elements/ui-elements.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ui-elements/ui-elements.component.ts ***!
  \******************************************************/
/*! exports provided: UiElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementsComponent", function() { return UiElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiElementsComponent = /** @class */ (function () {
    function UiElementsComponent() {
    }
    UiElementsComponent.prototype.ngOnInit = function () {
    };
    UiElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ui-elements',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ui-elements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/ui-elements.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ui-elements.component.css */ "./src/app/ui-elements/ui-elements.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiElementsComponent);
    return UiElementsComponent;
}());



/***/ }),

/***/ "./src/app/wigets/accordian/accordian.component.css":
/*!**********************************************************!*\
  !*** ./src/app/wigets/accordian/accordian.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZ2V0cy9hY2NvcmRpYW4vYWNjb3JkaWFuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/wigets/accordian/accordian.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/wigets/accordian/accordian.component.ts ***!
  \*********************************************************/
/*! exports provided: AccordianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordianComponent", function() { return AccordianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccordianComponent = /** @class */ (function () {
    function AccordianComponent() {
        this.items = [
            { "heading": "First accordian", "body": "First accordian Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
            { "heading": "Second accordian", "body": "Second accordian Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
            { "heading": "Third accordian", "body": "Third accordian Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
            { "heading": "Fourth accordian", "body": "Fourth accordian Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
        ];
    }
    AccordianComponent.prototype.ngOnInit = function () {
    };
    AccordianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accordian',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accordian.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/accordian/accordian.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accordian.component.css */ "./src/app/wigets/accordian/accordian.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccordianComponent);
    return AccordianComponent;
}());



/***/ }),

/***/ "./src/app/wigets/carousel/carousel.component.css":
/*!********************************************************!*\
  !*** ./src/app/wigets/carousel/carousel.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.img-fit{-o-object-fit: cover;object-fit: cover; height: 400px;}\r\n.carousel-item::after{content:\"\"; position: absolute; left: 0; right: 0; top: 0; bottom: 0; background-color: rgba(0,0,0,.6);}\r\n.badge{display: table; width: auto; font-weight: 400;}\r\n.carousel-caption{bottom: 25%;}\r\n.img-fit{-o-object-fit:cover;object-fit:cover;height:400px}\r\n.carousel-control-next, .carousel-control-prev{width: 5%; bottom: 30px;}\r\n.carousel-item::after{content:\"\";position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.6)}\r\n.badge{display:table;width:auto;font-weight:400}\r\n.carousel-caption{bottom:25%}\r\n.thumb-indicators{display:flex!important;justify-content:center!important;list-style:none;margin:5px -3px;padding:0;position:static}\r\n.thumb-indicators>li{padding:0 3px;max-width:100px;position:relative;text-indent:0;width:100px;opacity:1;height:auto;margin-right:0;margin-left:0;border:none;background-color:transparent}\r\n.thumb-indicators>li::after{content:\"\";position:absolute;left:3px;right:3px;top:0;bottom:0;background-color:rgba(0,0,0,.6);transition:all 300ms ease}\r\n.thumb-indicators>li:hover::after{background-color:rgba(0,0,0,.3)}\r\n.thumb-indicators>li>img{width:100%;height:40px;-o-object-fit:cover;object-fit:cover}\r\n.thumb-indicators> .active::after{background-color:rgba(0,0,0,0)}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lnZXRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsb0JBQWlCLENBQWpCLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztBQUMxQyxzQkFBc0IsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQztBQUM3SCxPQUFPLGNBQWMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7QUFDckQsa0JBQWtCLFdBQVcsQ0FBQztBQUc5QixTQUFTLG1CQUFnQixDQUFoQixnQkFBZ0IsQ0FBQyxZQUFZO0FBQ3RDLCtDQUErQyxTQUFTLEVBQUUsWUFBWSxDQUFDO0FBQ3ZFLHNCQUFzQixVQUFVLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLCtCQUErQjtBQUNoSCxPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUMsZUFBZTtBQUMvQyxrQkFBa0IsVUFBVTtBQUM1QixrQkFBa0Isc0JBQXNCLENBQUMsZ0NBQWdDLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsZUFBZTtBQUNuSSxxQkFBcUIsYUFBYSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsNEJBQTRCO0FBQzFMLDRCQUE0QixVQUFVLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLHlCQUF5QjtBQUNwSixrQ0FBa0MsK0JBQStCO0FBQ2pFLHlCQUF5QixVQUFVLENBQUMsV0FBVyxDQUFDLG1CQUFlLENBQWYsZ0JBQWdCO0FBQ2hFLGtDQUFrQyw4QkFBOEIiLCJmaWxlIjoic3JjL2FwcC93aWdldHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW1nLWZpdHtvYmplY3QtZml0OiBjb3ZlcjsgaGVpZ2h0OiA0MDBweDt9XHJcbi5jYXJvdXNlbC1pdGVtOjphZnRlcntjb250ZW50OlwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogMDsgYm90dG9tOiAwOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTt9XHJcbi5iYWRnZXtkaXNwbGF5OiB0YWJsZTsgd2lkdGg6IGF1dG87IGZvbnQtd2VpZ2h0OiA0MDA7fVxyXG4uY2Fyb3VzZWwtY2FwdGlvbntib3R0b206IDI1JTt9XHJcblxyXG5cclxuLmltZy1maXR7b2JqZWN0LWZpdDpjb3ZlcjtoZWlnaHQ6NDAwcHh9XHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5jYXJvdXNlbC1jb250cm9sLXByZXZ7d2lkdGg6IDUlOyBib3R0b206IDMwcHg7fVxyXG4uY2Fyb3VzZWwtaXRlbTo6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNil9XHJcbi5iYWRnZXtkaXNwbGF5OnRhYmxlO3dpZHRoOmF1dG87Zm9udC13ZWlnaHQ6NDAwfVxyXG4uY2Fyb3VzZWwtY2FwdGlvbntib3R0b206MjUlfVxyXG4udGh1bWItaW5kaWNhdG9yc3tkaXNwbGF5OmZsZXghaW1wb3J0YW50O2p1c3RpZnktY29udGVudDpjZW50ZXIhaW1wb3J0YW50O2xpc3Qtc3R5bGU6bm9uZTttYXJnaW46NXB4IC0zcHg7cGFkZGluZzowO3Bvc2l0aW9uOnN0YXRpY31cclxuLnRodW1iLWluZGljYXRvcnM+bGl7cGFkZGluZzowIDNweDttYXgtd2lkdGg6MTAwcHg7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1pbmRlbnQ6MDt3aWR0aDoxMDBweDtvcGFjaXR5OjE7aGVpZ2h0OmF1dG87bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MDtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fVxyXG4udGh1bWItaW5kaWNhdG9ycz5saTo6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6M3B4O3JpZ2h0OjNweDt0b3A6MDtib3R0b206MDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjYpO3RyYW5zaXRpb246YWxsIDMwMG1zIGVhc2V9XHJcbi50aHVtYi1pbmRpY2F0b3JzPmxpOmhvdmVyOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjMpfVxyXG4udGh1bWItaW5kaWNhdG9ycz5saT5pbWd7d2lkdGg6MTAwJTtoZWlnaHQ6NDBweDtvYmplY3QtZml0OmNvdmVyfVxyXG4udGh1bWItaW5kaWNhdG9ycz4gLmFjdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApfSJdfQ== */");

/***/ }),

/***/ "./src/app/wigets/carousel/carousel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/wigets/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(http) {
        this.http = http;
    }
    CarouselComponent.prototype.crouselImages = function () {
        var _this = this;
        var url = "assets/data-folder/images-data.json";
        this.http.get(url)
            .subscribe(function (res) {
            console.log(res);
            _this.banner = res;
            _this.images = res;
        }, function (err) {
            console.log(err);
        });
    };
    CarouselComponent.prototype.ngOnInit = function () {
        this.crouselImages();
    };
    CarouselComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/carousel/carousel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.css */ "./src/app/wigets/carousel/carousel.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/wigets/modal/modal.component.css":
/*!**************************************************!*\
  !*** ./src/app/wigets/modal/modal.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZ2V0cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/wigets/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/wigets/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/modal/modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/wigets/modal/modal.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/wigets/tooltip/tooltip.component.css":
/*!******************************************************!*\
  !*** ./src/app/wigets/tooltip/tooltip.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZ2V0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/wigets/tooltip/tooltip.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/wigets/tooltip/tooltip.component.ts ***!
  \*****************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tooltip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/tooltip/tooltip.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tooltip.component.css */ "./src/app/wigets/tooltip/tooltip.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/wigets/wiget-main/wiget-main.component.css":
/*!************************************************************!*\
  !*** ./src/app/wigets/wiget-main/wiget-main.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZ2V0cy93aWdldC1tYWluL3dpZ2V0LW1haW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/wigets/wiget-main/wiget-main.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/wigets/wiget-main/wiget-main.component.ts ***!
  \***********************************************************/
/*! exports provided: WigetMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WigetMainComponent", function() { return WigetMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WigetMainComponent = /** @class */ (function () {
    function WigetMainComponent() {
    }
    WigetMainComponent.prototype.ngOnInit = function () {
    };
    WigetMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wiget-main',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wiget-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wigets/wiget-main/wiget-main.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wiget-main.component.css */ "./src/app/wigets/wiget-main/wiget-main.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WigetMainComponent);
    return WigetMainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HTML5Application\cripto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
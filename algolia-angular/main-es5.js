function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/faq-algolia/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/faq-algolia/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFaqAlgoliaDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./first-page_6.entry.js": ["./node_modules/faq-algolia/dist/esm/first-page_6.entry.js", "stencil-first-page_6-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/faq-algolia/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/algolia.service.ts":
  /*!************************************!*\
    !*** ./src/app/algolia.service.ts ***!
    \************************************/

  /*! exports provided: AlgoliaService */

  /***/
  function srcAppAlgoliaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgoliaService", function () {
      return AlgoliaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlgoliaService = function AlgoliaService() {
      _classCallCheck(this, AlgoliaService);

      this.header = [{
        id: 1,
        header: 'Чем мы можем вам помочь?'
      }];
      this.searchMenu = [{
        id: 'все',
        name: 'все',
        active: false
      }, {
        id: 'вебсайт',
        name: 'вебсайт',
        active: false
      }, {
        id: 'ресурсы',
        name: 'ресурсы',
        active: false
      }, {
        id: 'блог',
        name: 'блог',
        active: false
      }, {
        id: 'документы',
        name: 'документы',
        active: false
      }];
      this.category = [{
        id: 'Поиск-сайта',
        name: 'Поиск сайта',
        active: false
      }, {
        id: 'Поиск-api',
        name: 'Поиск API',
        active: false
      }, {
        id: 'Персонализация',
        name: 'Персонализация',
        active: false
      }, {
        id: 'Аналитика',
        name: 'Аналитика',
        active: false
      }, {
        id: 'Быстрый-поиск',
        name: 'Быстрый поиск',
        active: false
      }, {
        id: 'Клиенты',
        name: 'Клиенты',
        active: false
      }, {
        id: 'Ценообразование',
        name: 'Ценообразование',
        active: false
      }, {
        id: 'мобильный поиск',
        name: 'Мобильный поиск',
        active: false
      }, {
        id: 'э-коммерция',
        name: 'Э-коммерция',
        active: false
      }];
      this.logo = [{
        id: 'site-search',
        link: 'https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1590760208/Algolia_com_Website_assets/images/search/search-by-algolia.svg'
      }];
      this.placeHolder = ['Введите поисковый запрос...'];
      this.blockHeader = [{
        id: 1,
        header: 'Блог',
        results: 138,
        link: 'показать поиск',
        pageActive: 1,
        resultPages: 12
      }];
      this.blocks = [{
        id: 1,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2020/04/BlogPost_Site_Search_API_How_They_Work_Together-720x400.jpg',
        header: "<span>\u041F\u043E\u0438\u0441\u043A</span> \u043F\u043E \u0441\u0430\u0439\u0442\u0443 \u0438 <span>APIs</span>: \u041A\u0430\u043A \u043E\u043D\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432\u043C\u0435\u0441\u0442\u0435",
        text: "\u2026 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C. &nbsp; \u041A\u0430\u043A APIs \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u043F\u043E\u0438\u0441\u043A\u0430" + " \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442 \u043C\u043E\u0449\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 <span>\u043F\u043E\u0438\u0441\u043A\u0430</span> \u0430  <span>\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0435 APIs</span>" + " \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E <span>\u043F\u043E\u0438\u0441\u043A\u0430</span> \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/ab5610fa71cfc5a9cfb78865ca64621b?s=96&d=mm&r=g',
        authorName: 'Бенуа Перро',
        authorAction: 'Директор по проектированию'
      }, {
        id: 2,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2020/04/2020-04_what-to-look-for-in-a-search-API-720x400.jpg',
        header: "\u0427\u0442\u043E \u0438\u0441\u043A\u0430\u0442\u044C \u0432 <span>API \u043F\u043E\u0438\u0441\u043A\u0430</span>",
        text: "\u2026 \u0438\u0441\u043A\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0443\u0441\u043F\u0435\u0445.\n       \u0411\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u0430\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F <span>\u043F\u043E\u0438\u0441\u043A\u0430</span> \u0441 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u043C\u0438 <span>API</span>\u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/ab5610fa71cfc5a9cfb78865ca64621b?s=96&d=mm&r=g',
        authorName: 'Бенуа Перро',
        authorAction: 'Директор по проектированию'
      }, {
        id: 3,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2015/06/ssd-cheese.png',
        header: 'Когда твердотельные накопители не такие твердые',
        text: "\u042D\u0442\u043E \u0431\u044B\u043B\u043E \u043F\u043E\u0445\u043E\u0436\u0435 \u043D\u0430 \u0434\u0440\u0443\u0433\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u043E\u0441\u0440\u0435\u0434\u0438 \u043D\u043E\u0447\u0438. \u041E\u0434\u0438\u043D \u0438\u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432 \u043D\u0430\u0448\u0435\u0433\u043E <span>\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u0433\u043E API</span> \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/0d23f348c8416b65e5acf54cd52edf57?s=96&d=mm&r=g',
        authorName: 'Адам Сурак',
        authorAction: 'Директор по инфраструктуре и безопасности'
      }, {
        id: 4,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2014/03/latency.png',
        header: "\u041D\u043E\u0432\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B <span>API \u043F\u043E\u0438\u0441\u043A\u0430</span> Java & Android \u043A\u0430\u043A \u0443\u0441\u043B\u0443\u0433\u0430 \u043D\u0430 DroidCon Paris!",
        text: "\u041D\u0430\u0448\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \xAB\u041F\u043E\u0438\u0441\u043A \u043A\u0430\u043A \u0443\u0441\u043B\u0443\u0433\u0430\xBB \u043F\u0440\u0438\u0431\u043B\u0438\u0436\u0430\u0435\u0442\u0441\u044F \u043A \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0432\u044B\u043F\u0443\u0441\u043A\u0443.\n             \u041C\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0438 \u043D\u0430\u0448 <span>\u043F\u043E\u0438\u0441\u043A</span> \u043F\u043E Java \u0438 AndroidAPI\u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=96&d=mm&r=g',
        authorName: 'Жюльен Лемуан',
        authorAction: 'Соучредитель & CTO в Algolia'
      }, {
        id: 5,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2019/04/Blogpost-Loadbalancer-KB-4.18.19-720x400.png',
        header: "\u041E\u0434\u0438\u043D \u0433\u043E\u0434 \u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u043A\u0438 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
        text: "\u2026 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043B\u044E\u0431\u0443\u044E \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u043A\u0438 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043C\u0435\u0436\u0434\u0443\n               \u043D\u0430\u0448\u0438\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u0438 \u043D\u0430\u0448\u0438\u043C\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043C\u0438 <span>API \u043F\u043E\u0438\u0441\u043A\u0430</span>. \u041C\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u044D\u0442\u043E\u0442\n               \u0432\u044B\u0431\u043E\u0440, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u0435\u0449\u0438 \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/003a44a43bf820edb4d6a1cc2a8ee96c?s=96&d=mm&r=g',
        authorName: 'Пол Берто',
        authorAction: 'Старший инженер по надежности сайта'
      }, {
        id: 6,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2015/11/illus.png',
        header: "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 InstantSearch.js: \u0432\u0441\u0435, \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0434\u043B\u044F \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0433\u043E <span>\u043F\u043E\u0438\u0441\u043A\u0430</span> \u0432 \u043E\u0434\u043D\u043E\u0439 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0435",
        text: "\u2026 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043B\u0443\u0447\u0448\u0438\u0439 \u043E\u043F\u044B\u0442 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0433\u043E <span>\u043F\u043E\u0438\u0441\u043A\u0430</span> \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043D\u043E\u0433\u043E \u0432 Algolia\n               <span>API \u043F\u043E\u0438\u0441\u043A\u0430</span>. \u0422\u0430\u043A \u043A\u0430\u043A \u0436\u0435 \u044D\u0442\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043C\u0435\u043D\u044F\u0435\u0442 <span>\u043F\u043E\u0438\u0441\u043A</span>? \u043D\u0430\u0448 \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/9b5b54cd240a4e451639d3185ed8045d?s=96&d=mm&r=g',
        authorName: 'Александр Станиславский'
      }, {
        id: 7,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2015/10/Untitled-design.png',
        header: "OneSignal \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u0445\u0430\u043A\u0435\u0440\u0441\u043A\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0441 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0410\u043B\u0433\u043E\u043B\u0438\u0438",
        text: "\u2026 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C, \u043A\u0430\u043A \u043E\u043D\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 Algolia's Hacker News <span>Search API</span> \u0434\u043B\u044F\n                \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u0432\u043E\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/37e607f71b47cc1e06a61e51d9cf5770?s=96&d=mm&r=g',
        authorName: 'Гийом Дюморье'
      }, {
        id: 8,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2017/06/15994409_935842486546596_8761301610453709536_o.png',
        header: "\u0421\u0431\u043E\u0440\u043A\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 - \u043E\u0431\u0437\u043E\u0440 \u043D\u043E\u0432\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0432 2017 \u0433\u043E\u0434\u0443",
        text: "\u2026 \u043D\u0430\u0447\u0430\u043B. \u041C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0438\u043C\u0435\u044E\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u0442\u0430\u043A \u0447\u0442\u043E \u043F\u043E\u0435\u0445\u0430\u043B\u0438! \u041D\u043E\u0432\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 <span>API \u041F\u043E\u0438\u0441\u043A</span>\n               \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0444\u0430\u0441\u0435\u0442\u043E\u0432 \u0412 \u043C\u0430\u0440\u0442\u0435 \u043C\u044B \u043E\u0431\u044A\u044F\u0432\u0438\u043B\u0438 \u043E <span>\u043F\u043E\u0438\u0441\u043A\u0435</span> \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=96&d=mm&r=g',
        authorName: 'Джош Дзиелак'
      }, {
        id: 9,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2015/01/hn-blog.png',
        header: "\u041D\u043E\u0432\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F Hacker News <span>Search</span>, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u0430\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Algoli",
        text: "\u2026 \u0434\u043B\u044F hn.algolia.com \u043C\u044B \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C API <span>\u043F\u043E\u0438\u0441\u043A\u0430</span> HN: \u043C\u043D\u043E\u0433\u0438\u0435 \u0438\u0437 \u0432\u0430\u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u0435\u0433\u043E \u0434\u043B\u044F \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/e94df49f046da9bdb0c1006f72d570c2?s=96&d=mm&r=g',
        authorName: 'Кевин'
      }, {
        id: 10,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2019/02/2019-01_Migrating-Heroku-GKE-720x400.png',
        header: 'Он бросает вызов миграции с Heroku на Google Kubernetes Engine',
        text: "\u2026 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F API <span>\u043F\u043E\u0438\u0441\u043A\u0430</span> Algolia.\n                \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0441\u043F\u0440\u043E\u0441\u0438\u043B\u0438, \u043C\u043E\u0436\u0435\u043C \u043B\u0438 \u043C\u044B \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/0ada20c283f0ef471356c564d0336856?s=96&d=mm&r=g',
        authorName: 'Адриен Джоли',
        authorAction: 'Старший инженер-программист'
      }, {
        id: 11,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2014/05/jsonp.png',
        header: "\u041F\u043E\u0447\u0435\u043C\u0443 JSONP \u0432\u0441\u0435 \u0435\u0449\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C",
        text: "\u2026 \u0431\u044D\u043A\u044D\u043D\u0434 <span>\u043F\u043E\u0438\u0441\u043A\u0430</span> , \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\n                \u0447\u0435\u0440\u0435\u0437 API, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0438 \u0432\u044B\u0437\u043E\u0432\u0435 \u0438\u0437 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u041F\u0435\u0440\u0435\u0441\u0435\u043A\u0430\u0442\u044C \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=96&d=mm&r=g',
        authorName: 'Жюльен Лемуан',
        authorAction: 'Соучредитель & CTO в Algolia'
      }, {
        id: 12,
        img: 'https://blog-api.algolia.com/wp-content/uploads/2018/09/08-2018_From-GSA-to-Algolia-01-720x400.png',
        header: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043E\u0442 GSA \u0432 Algolia",
        text: "\u2026 \u041D\u0430\u0447\u043D\u0435\u043C \u0441 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043E \u043D\u0430\u0441. Algolia - \u044D\u0442\u043E <span>\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439</span> API, \u043A\u043E\u0442\u043E\u0440\u044B\u0439\n               \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430\u043C \u043F\u043E\u043B\u043D\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F <span>\u043F\u043E\u0438\u0441\u043A\u0430</span>. \u2026",
        authorAvatar: 'https://secure.gravatar.com/avatar/fc1cfea7486378aec9b576a1511d5209?s=96&d=mm&r=g',
        authorName: 'Эллиот Глюк',
        authorAction: 'Менеджер по маркетингу продуктов'
      }];
      this.placeholderValue = [{
        text: 'Введите запрос'
      }];
    };

    AlgoliaService.ɵfac = function AlgoliaService_Factory(t) {
      return new (t || AlgoliaService)();
    };

    AlgoliaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlgoliaService,
      factory: AlgoliaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgoliaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./first-page/first-page.component */
    "./src/app/first-page/first-page.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'algolia-angular';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-first-page");
        }
      },
      directives: [_first_page_first_page_component__WEBPACK_IMPORTED_MODULE_1__["FirstPageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./first-page/first-page.component */
    "./src/app/first-page/first-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__["FirstPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__["FirstPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/first-page/first-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/first-page/first-page.component.ts ***!
    \****************************************************/

  /*! exports provided: FirstPageComponent */

  /***/
  function srcAppFirstPageFirstPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function () {
      return FirstPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _algolia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../algolia.service */
    "./src/app/algolia.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FirstPageComponent_s_cnt_faq_search_pop_up_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-cnt-faq-search-pop-up", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickBlackBlock", function FirstPageComponent_s_cnt_faq_search_pop_up_2_Template_s_cnt_faq_search_pop_up_clickBlackBlock_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.hideSearch();
        })("clickSearchPop", function FirstPageComponent_s_cnt_faq_search_pop_up_2_Template_s_cnt_faq_search_pop_up_clickSearchPop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.showEvent($event);
        })("clickHints", function FirstPageComponent_s_cnt_faq_search_pop_up_2_Template_s_cnt_faq_search_pop_up_clickHints_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.showEvent($event);
        })("searchKeyDown", function FirstPageComponent_s_cnt_faq_search_pop_up_2_Template_s_cnt_faq_search_pop_up_searchKeyDown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.showEvent($event);
        })("searchKeyup", function FirstPageComponent_s_cnt_faq_search_pop_up_2_Template_s_cnt_faq_search_pop_up_searchKeyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.showEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchHintsData", ctx_r0.getBlocks())("searchPlace", ctx_r0.getSearchPlace());
      }
    }

    function FirstPageComponent_s_cnt_faq_blocks_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-cnt-faq-blocks", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickBlockHeader", function FirstPageComponent_s_cnt_faq_blocks_6_Template_s_cnt_faq_blocks_clickBlockHeader_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.showEvent($event);
        })("clickBlockText", function FirstPageComponent_s_cnt_faq_blocks_6_Template_s_cnt_faq_blocks_clickBlockText_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.showEvent($event);
        })("clickBlockAuthor", function FirstPageComponent_s_cnt_faq_blocks_6_Template_s_cnt_faq_blocks_clickBlockAuthor_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.showEvent($event);
        })("clickBlockImg", function FirstPageComponent_s_cnt_faq_blocks_6_Template_s_cnt_faq_blocks_clickBlockImg_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.showEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blocks", item_r8);
      }
    }

    var FirstPageComponent = /*#__PURE__*/function () {
      function FirstPageComponent(algolia) {
        var _this = this;

        _classCallCheck(this, FirstPageComponent);

        this.algolia = algolia;
        this.searchState = false;

        this.showSearch = function () {
          _this.searchState = true;
        };

        this.hideSearch = function () {
          _this.searchState = false;
        };

        this.getHeader = function () {
          return _this.algolia.header.slice(0, 1);
        };

        this.getSearchMenu = function () {
          return _this.algolia.searchMenu.slice(0, 5);
        };

        this.getCategory = function () {
          return _this.algolia.category.slice(0, 9);
        };

        this.getLogo = function () {
          return _this.algolia.logo.slice(0, 1);
        };

        this.getPlaceholder = function () {
          return _this.algolia.placeHolder.slice(0, 1);
        };

        this.getBlockHeader = function () {
          return _this.algolia.blockHeader.slice(0, 1);
        };

        this.getBlocks = function () {
          return _this.algolia.blocks.slice(0, 12);
        };
      }

      _createClass(FirstPageComponent, [{
        key: "getSearchPlace",
        value: function getSearchPlace() {
          return this.algolia.placeholderValue;
        }
      }, {
        key: "showEvent",
        value: function showEvent(_ref) {
          var detail = _ref.detail;
          console.log(detail);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FirstPageComponent;
    }();

    FirstPageComponent.ɵfac = function FirstPageComponent_Factory(t) {
      return new (t || FirstPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_algolia_service__WEBPACK_IMPORTED_MODULE_1__["AlgoliaService"]));
    };

    FirstPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstPageComponent,
      selectors: [["app-first-page"]],
      decls: 7,
      vars: 9,
      consts: [[3, "header", "clickBack"], [3, "menu", "category", "searchHints", "logo", "placeHolder", "clickMenu", "clickSearch", "clickLogo", "clickCategory", "clickSearchHint", "inputValueDown", "inputValueUp"], [3, "searchHintsData", "searchPlace", "clickBlackBlock", "clickSearchPop", "clickHints", "searchKeyDown", "searchKeyup", 4, "ngIf"], [3, "blockHeader", "clickLink", "clickRight", "clickLeft"], [1, "my_container"], [1, "row"], ["class", "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12", 3, "blocks", "clickBlockHeader", "clickBlockText", "clickBlockAuthor", "clickBlockImg", 4, "ngFor", "ngForOf"], [3, "searchHintsData", "searchPlace", "clickBlackBlock", "clickSearchPop", "clickHints", "searchKeyDown", "searchKeyup"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-6", "col-12", 3, "blocks", "clickBlockHeader", "clickBlockText", "clickBlockAuthor", "clickBlockImg"]],
      template: function FirstPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-cnt-faq-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickBack", function FirstPageComponent_Template_s_cnt_faq_header_clickBack_0_listener($event) {
            return ctx.showEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "s-cnt-faq-search", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickMenu", function FirstPageComponent_Template_s_cnt_faq_search_clickMenu_1_listener($event) {
            return ctx.showEvent($event);
          })("clickSearch", function FirstPageComponent_Template_s_cnt_faq_search_clickSearch_1_listener($event) {
            return ctx.showEvent($event);
          })("clickLogo", function FirstPageComponent_Template_s_cnt_faq_search_clickLogo_1_listener($event) {
            return ctx.showEvent($event);
          })("clickCategory", function FirstPageComponent_Template_s_cnt_faq_search_clickCategory_1_listener($event) {
            return ctx.showEvent($event);
          })("clickSearchHint", function FirstPageComponent_Template_s_cnt_faq_search_clickSearchHint_1_listener($event) {
            return ctx.showEvent($event);
          })("inputValueDown", function FirstPageComponent_Template_s_cnt_faq_search_inputValueDown_1_listener($event) {
            return ctx.showEvent($event);
          })("inputValueUp", function FirstPageComponent_Template_s_cnt_faq_search_inputValueUp_1_listener($event) {
            return ctx.showEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FirstPageComponent_s_cnt_faq_search_pop_up_2_Template, 1, 2, "s-cnt-faq-search-pop-up", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "s-cnt-faq-block-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickLink", function FirstPageComponent_Template_s_cnt_faq_block_header_clickLink_3_listener() {
            return ctx.showSearch();
          })("clickRight", function FirstPageComponent_Template_s_cnt_faq_block_header_clickRight_3_listener($event) {
            return ctx.showEvent($event);
          })("clickLeft", function FirstPageComponent_Template_s_cnt_faq_block_header_clickLeft_3_listener($event) {
            return ctx.showEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FirstPageComponent_s_cnt_faq_blocks_6_Template, 1, 1, "s-cnt-faq-blocks", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.getHeader());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", ctx.getSearchMenu())("category", ctx.getCategory())("searchHints", ctx.getBlocks())("logo", ctx.getLogo())("placeHolder", ctx.getPlaceholder());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockHeader", ctx.getBlockHeader());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getBlocks());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvZmlyc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-first-page',
          templateUrl: './first-page.component.html',
          styleUrls: ['./first-page.component.css']
        }]
      }], function () {
        return [{
          type: _algolia_service__WEBPACK_IMPORTED_MODULE_1__["AlgoliaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var faq_algolia_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! faq-algolia/loader */
    "./node_modules/faq-algolia/loader/index.es2017.mjs");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* Stencil js */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /* Stencil js add loader */


    Object(faq_algolia_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ADmin\Desktop\angular\algolia-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
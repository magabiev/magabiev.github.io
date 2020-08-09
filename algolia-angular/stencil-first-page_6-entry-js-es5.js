function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e25) { throw _e25; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e26) { didErr = true; err = _e26; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-first-page_6-entry-js"], {
  /***/
  "./node_modules/faq-algolia/dist/esm/first-page_6.entry.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/faq-algolia/dist/esm/first-page_6.entry.js ***!
    \*****************************************************************/

  /*! exports provided: first_page, s_cnt_faq_block_header, s_cnt_faq_blocks, s_cnt_faq_header, s_cnt_faq_search, s_cnt_faq_search_pop_up */

  /***/
  function node_modulesFaqAlgoliaDistEsmFirstPage_6EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "first_page", function () {
      return FirstPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_cnt_faq_block_header", function () {
      return SCntFaqBlockHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_cnt_faq_blocks", function () {
      return SCntFaqBlocks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_cnt_faq_header", function () {
      return SCntFaqHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_cnt_faq_search", function () {
      return SCntFaqSearch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_cnt_faq_search_pop_up", function () {
      return SCntFaqSearchPopUp;
    });
    /* harmony import */


    var _index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-6c3a0dc7.js */
    "./node_modules/faq-algolia/dist/esm/index-6c3a0dc7.js");

    var header = [{
      id: 1,
      header: 'How can we help you?\n'
    }];
    var searchMenu = [{
      id: 'all',
      name: 'all',
      active: false
    }, {
      id: 'website',
      name: 'website',
      active: false
    }, {
      id: 'resources',
      name: 'resources',
      active: false
    }, {
      id: 'blog',
      name: 'blog',
      active: false
    }, {
      id: 'docs',
      name: 'docs',
      active: false
    }];
    var placeHolder = ['Learn about search-as-a-service…'];
    var category = [{
      id: 'site-search',
      name: 'Site Search',
      active: false
    }, {
      id: 'search-api',
      name: 'Search API',
      active: false
    }, {
      id: 'personalization',
      name: 'Personalization',
      active: false
    }, {
      id: 'analytics',
      name: 'Analytics',
      active: false
    }, {
      id: 'instantSearch',
      name: 'InstantSearch',
      active: false
    }, {
      id: ' customers',
      name: ' Customers',
      active: false
    }, {
      id: 'pricing',
      name: 'Pricing',
      active: false
    }, {
      id: 'mobile-search',
      name: 'Mobile Search',
      active: false
    }, {
      id: 'e-commerce',
      name: 'E-commerce',
      active: false
    }];
    var logo = [{
      id: 'site-search',
      link: 'https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1590760208/Algolia_com_Website_assets/images/search/search-by-algolia.svg'
    }];
    var blockHeader = [{
      id: 1,
      header: 'Blog',
      results: 0,
      link: 'view blog',
      pageActive: 1,
      resultPages: 12
    }];
    var blocks = [{
      id: 1,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2020/04/BlogPost_Site_Search_API_How_They_Work_Together-720x400.jpg',
      header: "Site <span>search</span> and <span>APIs</span>: How they work together",
      text: "\u2026 to write. &nbsp; How Search APIs enable" + " powerful <span>search</span> experiences <span>Search APIs</span> are the" + " most straightforward way to integrate modern <span>search</span> \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/ab5610fa71cfc5a9cfb78865ca64621b?s=96&d=mm&r=g',
      authorName: 'Benoit Perrot',
      authorAction: 'Director, Engineering'
    }, {
      id: 2,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2020/04/2020-04_what-to-look-for-in-a-search-API-720x400.jpg',
      header: "What to look for in a <span>Search API</span>",
      text: "\u2026 <span>search</span> configurations and use analytics to determine success." + " &nbsp; Seamlessly integrate <span>search</span> with Algolia\u2019s <span>Search API</span> <span>Search</span> APIs are one \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/ab5610fa71cfc5a9cfb78865ca64621b?s=96&d=mm&r=g',
      authorName: 'Benoit Perrot',
      authorAction: 'Director, Engineering'
    }, {
      id: 3,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2015/06/ssd-cheese.png',
      header: 'When Solid State Drives are not that solid',
      text: "It looked just like another page in the middle of the night. One of the servers of our <span>search API</span> \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/0d23f348c8416b65e5acf54cd52edf57?s=96&d=mm&r=g',
      authorName: 'Adam Surak',
      authorAction: 'Director of Infrastructure & Security'
    }, {
      id: 4,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2014/03/latency.png',
      header: "New Java & Android <span>Search</span>-as-a-Service <span>API</span> Clients at DroidCon Paris!",
      text: "Our Search-as-a-Service offer is progressing toward its official release." + " We launched our Java and Android <span>searchAPI</span>\u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=96&d=mm&r=g',
      authorName: 'Julien Lemoine',
      authorAction: 'Co-founder & CTO at Algolia'
    }, {
      id: 5,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2019/04/Blogpost-Loadbalancer-KB-4.18.19-720x400.png',
      header: "One Year of Load Balancing",
      text: "\u2026 place any load balancing infrastructure between our users and our" + " <span>search API</span> servers. We made this choice to keep things \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/003a44a43bf820edb4d6a1cc2a8ee96c?s=96&d=mm&r=g',
      authorName: 'Paul Berthaux',
      authorAction: 'Sr. Site Reliability Engineer'
    }, {
      id: 6,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2015/11/illus.png',
      header: "Announcing instantsearch.js: Everything you need for great <span>search</span> in one library",
      text: "\u2026 build the best instant-<span>search</span> experience with Algolia\u2019s" + " hosted <span>search API</span>. So how does this library change <span>search</span>? Our \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/9b5b54cd240a4e451639d3185ed8045d?s=96&d=mm&r=g',
      authorName: 'Alexandre Stanislawski'
    }, {
      id: 7,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2015/10/Untitled-design.png',
      header: "OneSignal Builds Hacker News Notifications With a Little Help From Algolia",
      text: "\u2026 us to share how they used Algolia's Hacker News <span>Search API</span> to create" + " a demo of their notification\xA0platform \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/37e607f71b47cc1e06a61e51d9cf5770?s=96&d=mm&r=g',
      authorName: 'Guillaume Dumortier'
    }, {
      id: 8,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2017/06/15994409_935842486546596_8761301610453709536_o.png',
      header: "Building for developers\u2014a tour of new features and resources in 2017",
      text: "\u2026 began. Milliseconds matter, so let's go!" + " New API features <span>Search</span> for facet values In March, we announced\xA0<span>search</span> for \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=96&d=mm&r=g',
      authorName: 'Josh Dzielak'
    }, {
      id: 9,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2015/01/hn-blog.png',
      header: "New experimental version of Hacker News <span>Search</span> built with Algoli",
      text: "\u2026 to hn.algolia.com\xA0we're also providing the HN <span>Search API</span>: a lot of you have used\xA0it to \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/e94df49f046da9bdb0c1006f72d570c2?s=96&d=mm&r=g',
      authorName: 'kevin'
    }, {
      id: 10,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2019/02/2019-01_Migrating-Heroku-GKE-720x400.png',
      header: 'The Challenging Migration from Heroku to Google Kubernetes Engine',
      text: "\u2026 uploading their data to a searchable index," + " using Algolia\u2019s <span>Search API</span>. Several potential customers asked if we could populate \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/0ada20c283f0ef471356c564d0336856?s=96&d=mm&r=g',
      authorName: 'Adrien Joly',
      authorAction: 'Senior Software Engineer'
    }, {
      id: 11,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2014/05/jsonp.png',
      header: "Why JSONP is still Mandatory",
      text: "\u2026 <span>search</span> backend that replies within a few milliseconds through " + "an API that handles\xA0security\xA0when called from the browser. Cross \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/25760a5d4e793e491f26da5db64bb738?s=96&d=mm&r=g',
      authorName: 'Julien Lemoine',
      authorAction: 'Co-founder & CTO at Algolia'
    }, {
      id: 12,
      img: 'https://blog-api.algolia.com/wp-content/uploads/2018/09/08-2018_From-GSA-to-Algolia-01-720x400.png',
      header: "Moving on from GSA to Algolia",
      text: "\u2026 start with a bit about us. Algolia is a <span>search API</span> that " + "gives developers a complete toolkit for building <span>search</span> \u2026",
      authorAvatar: 'https://secure.gravatar.com/avatar/fc1cfea7486378aec9b576a1511d5209?s=96&d=mm&r=g',
      authorName: 'Elliott Gluck',
      authorAction: 'Product Marketing Manager'
    }];
    var placeholderValue = [{
      text: 'Введите запрос'
    }];
    var firstPageCss = ".sc-first-page-h{display:block}";

    var FirstPage = /*#__PURE__*/function () {
      function FirstPage(hostRef) {
        _classCallCheck(this, FirstPage);

        Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(FirstPage, [{
        key: "render",
        value: function render() {
          var clicked = function clicked(item) {
            console.log(item);
          };

          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-faq-header", {
            header: header,
            onClickBack: function onClickBack(item) {
              return clicked(item.detail);
            }
          }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-faq-search", {
            menu: searchMenu,
            category: category,
            logo: logo,
            placeHolder: placeHolder,
            searchHints: blocks,
            onClickMenu: function onClickMenu(item) {
              return clicked(item.detail);
            },
            onClickSearchHint: function onClickSearchHint(item) {
              return clicked(item.detail);
            },
            onClickSearch: function onClickSearch(item) {
              return clicked(item.detail);
            },
            onClickLogo: function onClickLogo(item) {
              return clicked(item.detail);
            },
            onClickCategory: function onClickCategory(item) {
              return clicked(item.detail);
            },
            onInputValueDown: function onInputValueDown(item) {
              return clicked(item.detail);
            },
            onInputValueUp: function onInputValueUp(item) {
              return clicked(item.detail);
            }
          }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-faq-block-header", {
            blockHeader: blockHeader,
            onClickLink: function onClickLink(item) {
              return clicked(item.detail);
            },
            onClickRight: function onClickRight(item) {
              return clicked(item.detail);
            },
            onClickLeft: function onClickLeft(item) {
              return clicked(item.detail);
            }
          }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "my_container"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row"
          }, blocks.map(function (item) {
            return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-faq-blocks", {
              "class": "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12",
              blocks: item,
              onClickBlockHeader: function onClickBlockHeader(item) {
                return clicked(item.detail);
              },
              onClickBlockText: function onClickBlockText(item) {
                return clicked(item.detail);
              },
              onClickBlockAuthor: function onClickBlockAuthor(item) {
                return clicked(item.detail);
              },
              onClickBlockImg: function onClickBlockImg(item) {
                return clicked(item.detail);
              }
            });
          }))), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-cnt-faq-search-pop-up", {
            searchHintsData: blocks,
            searchPlace: placeholderValue,
            onClickBlackBlock: function onClickBlackBlock(item) {
              return clicked(item.detail);
            },
            onClickSearchPop: function onClickSearchPop(item) {
              return clicked(item.detail);
            },
            onClickHints: function onClickHints(item) {
              return clicked(item.detail);
            },
            onSearchKeyDown: function onSearchKeyDown(item) {
              return clicked(item.detail);
            },
            onSearchKeyUp: function onSearchKeyUp(item) {
              return clicked(item.detail);
            }
          }));
        }
      }]);

      return FirstPage;
    }();

    FirstPage.style = firstPageCss;
    var sCntFaqBlockHeaderCss = ".header.sc-s-cnt-faq-block-header{font-weight:400;font-size:24px;color:#3A416F}.header.sc-s-cnt-faq-block-header:empty{width:47px;height:36px;background-color:#f5f5fa;border-radius:2px;-webkit-animation:loading 1s infinite ease-in-out}.header.sc-s-cnt-faq-block-header:empty{background-color:#ccc;-webkit-animation:loading 1s infinite ease-in-out}.result.sc-s-cnt-faq-block-header{color:#848ab8;font-size:14px;margin:0}.result_btn.sc-s-cnt-faq-block-header{width:25px;height:25px;font-size:9px;border-radius:2px;border-width:1px;border-color:#c5c9e0;-webkit-appearance:none;background:-webkit-gradient(linear, left top, left bottom, from(rgb(255, 255, 255)), to(rgb(249, 250, 251)));background:linear-gradient(rgb(255, 255, 255), rgb(249, 250, 251))}.result_page.sc-s-cnt-faq-block-header{font-size:14px;font-weight:400}.result_link.sc-s-cnt-faq-block-header{text-transform:uppercase;font-size:13px;font-weight:700;color:#5468ff}@media only screen and (max-width: 991px ){.result_btn.sc-s-cnt-faq-block-header,.result_page.sc-s-cnt-faq-block-header,.result_link.sc-s-cnt-faq-block-header{display:none}}@-webkit-keyframes loading{0%{background-color:#f5f5fa}50%{background-color:#fefefe}100%{background-color:#f5f5fa}}@keyframes loading{0%{background-color:#f5f5fa}50%{background-color:#fefefe}100%{background-color:#f5f5fa}}";

    var SCntFaqBlockHeader = /*#__PURE__*/function () {
      function SCntFaqBlockHeader(hostRef) {
        _classCallCheck(this, SCntFaqBlockHeader);

        Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *  Получение данных из массива для вывода
         */

        this.blockHeader = [];
        this.clickLink = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickLink", 7);
        this.clickRight = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickRight", 7);
        this.clickLeft = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickLeft", 7);
      }

      _createClass(SCntFaqBlockHeader, [{
        key: "render",
        value: function render() {
          var _this = this;

          if (this.blockHeader.length !== 0) {
            return this.blockHeader.map(function (item) {
              return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "my_container"
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "header_block d-flex justify-content-between mb-5"
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "header"
              }, item.header), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "results d-flex align-items-center"
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", {
                "class": "result"
              }, item.results, " ", _this.result(item)), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "result_buttons ml-2"
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
                disabled: _this.checkDisableL(item),
                "class": "result_btn",
                onClick: function onClick() {
                  _this.clickLeft.emit({
                    place: 'left arrow',
                    item: item
                  });

                  {
                    item.pageActive = item.pageActive - 1;
                    _this.counterPage = item.pageActive;
                  }
                }
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
                "class": "fas fa-arrow-left"
              })), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
                "class": "result_btn",
                disabled: _this.checkDisableR(item),
                onClick: function onClick() {
                  _this.clickRight.emit({
                    place: 'right arrow',
                    item: item
                  });

                  {
                    item.pageActive = item.pageActive + 1;
                    _this.counterPage = item.pageActive;
                  }
                }
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
                "class": "fas fa-arrow-right"
              }))), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "result_page ml-3"
              }, item.pageActive, "-", item.resultPages), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "result_link ml-3 clicked",
                onClick: function onClick() {
                  return _this.clickLink.emit({
                    place: 'link',
                    item: item
                  });
                }
              }, item.link, "  ", Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
                "class": "fas fa-caret-right"
              }))))));
            });
          }

          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "my_container d-flex"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-auto not_data text-focus-in p-3"
          }, "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"));
        }
        /**
         * Деактивация левой кнопки переключения страницы
         */

      }, {
        key: "checkDisableL",
        value: function checkDisableL(props) {
          if (props.pageActive === 1) {
            return this.disableLeft = true;
          }
        }
        /**
         * Деактивация правой кнопки переключения страницы
         */

      }, {
        key: "checkDisableR",
        value: function checkDisableR(props) {
          if (props.pageActive === props.resultPages) {
            return this.disableRight = true;
          }
        }
        /**
         * Вывод слова результат относительно количества результатов
         */

      }, {
        key: "result",
        value: function result(props) {
          if (props.results === 1) {
            return "результат";
          } else if (props.results === 0) {
            return "результатов";
          } else if (props.results <= 4) {
            return "результата";
          } else if (props.results > 4) {
            return "результатов";
          }
        }
      }]);

      return SCntFaqBlockHeader;
    }();

    SCntFaqBlockHeader.style = sCntFaqBlockHeaderCss;
    var sCntFaqBlocksCss = ".block{height:100%;padding-bottom:25px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:48px}span{color:#5468ff;cursor:pointer}.img{width:100%;border-radius:6px;height:150px;background-size:cover;background-position:center}.img:empty{background-color:#f5f5fa;-webkit-animation:loading 1s infinite ease-in-out}.header{font-size:18px;font-weight:700;margin-top:16px}.header:empty{width:100%;height:27px;background-color:#f5f5fa;border-radius:2px;-webkit-animation:loading 1s infinite ease-in-out}.text{font-weight:400;font-size:14px;color:#5d6494;margin-top:8px}.text:empty{margin-top:20px;width:100%;background-color:#f5f5fa;height:20px;border-radius:2px;-webkit-animation:loading 1s infinite ease-in-out}.text:empty:before{display:block;content:'';position:relative;width:80%;background-color:#f5f5fa;height:20px;top:39px;border-radius:2px;-webkit-animation:loading 1s infinite ease-in-out}.author{margin-top:24px}.author_info{margin-left:8px;font-weight:400;color:#5d6494}.author_img{height:32px;width:32px;border-radius:50%;background-size:cover;background-position:center}.author_img:empty{background-color:#f5f5fa;-webkit-animation:loading 1s infinite ease-in-out}.name{font-size:14px;font-weight:400}.name:empty{width:100px;height:20px;background-color:#f5f5fa;border-radius:2px;-webkit-animation:loading 1s infinite ease-in-out}.action{font-size:12px;font-weight:400}@-webkit-keyframes loading{0%{background-color:#f5f5fa}50%{background-color:#fefefe}100%{background-color:#f5f5fa}}@keyframes loading{0%{background-color:#f5f5fa}50%{background-color:#fefefe}100%{background-color:#f5f5fa}}.not_data{font-size:25px;font-weight:600;color:#848ab8}";

    var SCntFaqBlocks = /*#__PURE__*/function () {
      function SCntFaqBlocks(hostRef) {
        _classCallCheck(this, SCntFaqBlocks);

        Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные о должности если есть
         */

        this.getAction = function (item) {
          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action"
          }, item.authorAction);
        };

        this.clickBlockHeader = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickBlockHeader", 7);
        this.clickBlockText = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickBlockText", 7);
        this.clickBlockAuthor = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickBlockAuthor", 7);
        this.clickBlockImg = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickBlockImg", 7);
      }

      _createClass(SCntFaqBlocks, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          if (this.blocks) {
            return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "block"
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "info"
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "img clicked",
              onClick: function onClick() {
                return _this2.clickBlockImg.emit({
                  place: 'img',
                  item: _this2.blocks
                });
              },
              style: {
                backgroundImage: "url(" + this.blocks.img + ")"
              }
            }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "header clicked",
              onClick: function onClick() {
                return _this2.clickBlockHeader.emit({
                  place: 'header',
                  item: _this2.blocks
                });
              },
              innerHTML: this.blocks.header
            }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "text clicked",
              onClick: function onClick() {
                return _this2.clickBlockText.emit({
                  place: 'text',
                  item: _this2.blocks
                });
              },
              innerHTML: this.blocks.text
            })), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "author d-flex align-items-center clicked",
              onClick: function onClick() {
                return _this2.clickBlockAuthor.emit({
                  place: 'author',
                  item: _this2.blocks
                });
              }
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "author_img",
              style: {
                backgroundImage: "url(" + this.blocks.authorAvatar + ")"
              }
            }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "author_info"
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "name"
            }, this.blocks.authorName), this.getAction(this.blocks))));
          }

          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "my_container d-flex"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-auto not_data text-focus-in"
          }, "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"));
        }
      }]);

      return SCntFaqBlocks;
    }();

    SCntFaqBlocks.style = sCntFaqBlocksCss;
    var sCntFaqHeaderCss = ".back_block.sc-s-cnt-faq-header{width:25px;height:25px;text-align:center;color:#5d6494;font-weight:400;font-size:14px}.back.sc-s-cnt-faq-header{font-weight:400;font-size:18px}.header_block.sc-s-cnt-faq-header{padding:48px 0;max-width:100%}h1.sc-s-cnt-faq-header{font-weight:400;color:#3A416F;font-size:36px}h1.sc-s-cnt-faq-header:empty{width:350px;height:40px;background-color:#f5f5fa;border-radius:2px;-webkit-animation:loading 1s infinite ease-in-out}.back_adaptive.sc-s-cnt-faq-header{display:none}.bottom_block.sc-s-cnt-faq-header{display:none}@media only screen and (max-width: 991px ){.back_adaptive.sc-s-cnt-faq-header{text-align:center;display:block;position:fixed;bottom:20px;z-index:5;left:50%;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);width:60px;height:60px;border-radius:50%;color:white;background-color:#3a416f;-webkit-box-shadow:0 5px 15px 0 rgba(37,44,97,.15), 0 2px 4px 0 rgba(93,100,148,.2);box-shadow:0 5px 15px 0 rgba(37,44,97,.15), 0 2px 4px 0 rgba(93,100,148,.2)}.back_in.sc-s-cnt-faq-header{display:-ms-flexbox;display:flex;width:inherit;height:inherit;border-radius:inherit;font-size:25px}.bottom_block.sc-s-cnt-faq-header{z-index:5;display:block;background-image:-webkit-gradient( linear,left top, left bottom,from(rgba(255,255,255,0)),color-stop(65%, rgb(255,255,255)),to(rgb(255,255,255)) );background-image:linear-gradient( -180deg,rgba(255,255,255,0) 0%,rgb(255,255,255) 65%,rgb(255,255,255) 100% );height:100px;width:100%;position:fixed;right:0;left:0;bottom:0}.header_block.sc-s-cnt-faq-header{display:none !important}}";

    var SCntFaqHeader = /*#__PURE__*/function () {
      function SCntFaqHeader(hostRef) {
        _classCallCheck(this, SCntFaqHeader);

        Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.header = [];
        this.clickBack = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickBack", 7);
      }

      _createClass(SCntFaqHeader, [{
        key: "render",
        value: function render() {
          var _this3 = this;

          if (this.header.length !== 0) {
            return this.header.map(function (item) {
              return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "my_container"
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "header_block d-flex justify-content-between"
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", null, item.header)), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "back_block clicked",
                onClick: function onClick() {
                  return _this3.clickBack.emit('Back');
                }
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "back"
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
                "class": "fas fa-times"
              })), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "esc"))), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "bottom_block"
              }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "back_adaptive clicked",
                onClick: function onClick() {
                  return _this3.clickBack.emit('Back');
                }
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "back_in"
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "m-auto"
              }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
                "class": "fas fa-times"
              })))));
            });
          }

          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "my_container d-flex"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-auto not_data text-focus-in p-3"
          }, "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"));
        }
      }]);

      return SCntFaqHeader;
    }();

    SCntFaqHeader.style = sCntFaqHeaderCss;
    var CONTENT_REF_ID = 'r';
    var ORG_LOCATION_ID = 'o';
    var SLOT_NODE_ID = 's';
    var TEXT_NODE_ID = 't';
    var XLINK_NS = 'http://www.w3.org/1999/xlink';
    var attrHandler = {
      get: function get(obj, prop) {
        if (prop in obj) {
          return obj[prop];
        }

        if (!isNaN(prop)) {
          return obj.__items[prop];
        }

        return undefined;
      }
    };

    var createAttributeProxy = function createAttributeProxy(caseInsensitive) {
      return new Proxy(new MockAttributeMap(caseInsensitive), attrHandler);
    };

    var MockAttributeMap = /*#__PURE__*/function () {
      function MockAttributeMap() {
        var caseInsensitive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, MockAttributeMap);

        this.caseInsensitive = caseInsensitive;
        this.__items = [];
      }

      _createClass(MockAttributeMap, [{
        key: "item",
        value: function item(index) {
          return this.__items[index] || null;
        }
      }, {
        key: "setNamedItem",
        value: function setNamedItem(attr) {
          attr.namespaceURI = null;
          this.setNamedItemNS(attr);
        }
      }, {
        key: "setNamedItemNS",
        value: function setNamedItemNS(attr) {
          if (attr != null && attr.value != null) {
            attr.value = String(attr.value);
          }

          var existingAttr = this.__items.find(function (a) {
            return a.name === attr.name && a.namespaceURI === attr.namespaceURI;
          });

          if (existingAttr != null) {
            existingAttr.value = attr.value;
          } else {
            this.__items.push(attr);
          }
        }
      }, {
        key: "getNamedItem",
        value: function getNamedItem(attrName) {
          if (this.caseInsensitive) {
            attrName = attrName.toLowerCase();
          }

          return this.getNamedItemNS(null, attrName);
        }
      }, {
        key: "getNamedItemNS",
        value: function getNamedItemNS(namespaceURI, attrName) {
          namespaceURI = getNamespaceURI(namespaceURI);
          return this.__items.find(function (attr) {
            return attr.name === attrName && getNamespaceURI(attr.namespaceURI) === namespaceURI;
          }) || null;
        }
      }, {
        key: "removeNamedItem",
        value: function removeNamedItem(attr) {
          this.removeNamedItemNS(attr);
        }
      }, {
        key: "removeNamedItemNS",
        value: function removeNamedItemNS(attr) {
          for (var i = 0, ii = this.__items.length; i < ii; i++) {
            if (this.__items[i].name === attr.name && this.__items[i].namespaceURI === attr.namespaceURI) {
              this.__items.splice(i, 1);

              break;
            }
          }
        }
      }, {
        key: "length",
        get: function get() {
          return this.__items.length;
        }
      }]);

      return MockAttributeMap;
    }();

    function getNamespaceURI(namespaceURI) {
      return namespaceURI === XLINK_NS ? null : namespaceURI;
    }

    function cloneAttributes(srcAttrs) {
      var sortByName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var dstAttrs = new MockAttributeMap(srcAttrs.caseInsensitive);

      if (srcAttrs != null) {
        var attrLen = srcAttrs.length;

        if (sortByName && attrLen > 1) {
          var sortedAttrs = [];

          for (var i = 0; i < attrLen; i++) {
            var srcAttr = srcAttrs.item(i);
            var dstAttr = new MockAttr(srcAttr.name, srcAttr.value, srcAttr.namespaceURI);
            sortedAttrs.push(dstAttr);
          }

          sortedAttrs.sort(sortAttributes).forEach(function (attr) {
            dstAttrs.setNamedItemNS(attr);
          });
        } else {
          for (var _i = 0; _i < attrLen; _i++) {
            var _srcAttr = srcAttrs.item(_i);

            var _dstAttr = new MockAttr(_srcAttr.name, _srcAttr.value, _srcAttr.namespaceURI);

            dstAttrs.setNamedItemNS(_dstAttr);
          }
        }
      }

      return dstAttrs;
    }

    function sortAttributes(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }

    var MockAttr = /*#__PURE__*/function () {
      function MockAttr(attrName, attrValue) {
        var namespaceURI = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, MockAttr);

        this._name = attrName;
        this._value = String(attrValue);
        this._namespaceURI = namespaceURI;
      }

      _createClass(MockAttr, [{
        key: "name",
        get: function get() {
          return this._name;
        },
        set: function set(value) {
          this._name = value;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(value) {
          this._value = String(value);
        }
      }, {
        key: "nodeName",
        get: function get() {
          return this._name;
        },
        set: function set(value) {
          this._name = value;
        }
      }, {
        key: "nodeValue",
        get: function get() {
          return this._value;
        },
        set: function set(value) {
          this._value = String(value);
        }
      }, {
        key: "namespaceURI",
        get: function get() {
          return this._namespaceURI;
        },
        set: function set(namespaceURI) {
          this._namespaceURI = namespaceURI;
        }
      }]);

      return MockAttr;
    }();

    var MockCustomElementRegistry = /*#__PURE__*/function () {
      function MockCustomElementRegistry(win) {
        _classCallCheck(this, MockCustomElementRegistry);

        this.win = win;
      }

      _createClass(MockCustomElementRegistry, [{
        key: "define",
        value: function define(tagName, cstr, options) {
          var _this4 = this;

          if (tagName.toLowerCase() !== tagName) {
            throw new Error("Failed to execute 'define' on 'CustomElementRegistry': \"".concat(tagName, "\" is not a valid custom element name"));
          }

          if (this.__registry == null) {
            this.__registry = new Map();
          }

          this.__registry.set(tagName, {
            cstr: cstr,
            options: options
          });

          if (this.__whenDefined != null) {
            var whenDefinedResolveFns = this.__whenDefined.get(tagName);

            if (whenDefinedResolveFns != null) {
              whenDefinedResolveFns.forEach(function (whenDefinedResolveFn) {
                whenDefinedResolveFn();
              });
              whenDefinedResolveFns.length = 0;

              this.__whenDefined["delete"](tagName);
            }
          }

          var doc = this.win.document;

          if (doc != null) {
            var hosts = doc.querySelectorAll(tagName);
            hosts.forEach(function (host) {
              if (upgradedElements.has(host) === false) {
                tempDisableCallbacks.add(doc);
                var upgradedCmp = createCustomElement(_this4, doc, tagName);

                for (var i = 0; i < host.childNodes.length; i++) {
                  var childNode = host.childNodes[i];
                  childNode.remove();
                  upgradedCmp.appendChild(childNode);
                }

                tempDisableCallbacks["delete"](doc);

                if (proxyElements.has(host)) {
                  proxyElements.set(host, upgradedCmp);
                }
              }

              fireConnectedCallback(host);
            });
          }
        }
      }, {
        key: "get",
        value: function get(tagName) {
          if (this.__registry != null) {
            var def = this.__registry.get(tagName.toLowerCase());

            if (def != null) {
              return def.cstr;
            }
          }

          return undefined;
        }
      }, {
        key: "upgrade",
        value: function upgrade(_rootNode) {//
        }
      }, {
        key: "clear",
        value: function clear() {
          if (this.__registry != null) {
            this.__registry.clear();
          }

          if (this.__whenDefined != null) {
            this.__whenDefined.clear();
          }
        }
      }, {
        key: "whenDefined",
        value: function whenDefined(tagName) {
          var _this5 = this;

          tagName = tagName.toLowerCase();

          if (this.__registry != null && this.__registry.has(tagName) === true) {
            return Promise.resolve();
          }

          return new Promise(function (resolve) {
            if (_this5.__whenDefined == null) {
              _this5.__whenDefined = new Map();
            }

            var whenDefinedResolveFns = _this5.__whenDefined.get(tagName);

            if (whenDefinedResolveFns == null) {
              whenDefinedResolveFns = [];

              _this5.__whenDefined.set(tagName, whenDefinedResolveFns);
            }

            whenDefinedResolveFns.push(resolve);
          });
        }
      }]);

      return MockCustomElementRegistry;
    }();

    function createCustomElement(customElements, ownerDocument, tagName) {
      var Cstr = customElements.get(tagName);

      if (Cstr != null) {
        var cmp = new Cstr(ownerDocument);
        cmp.nodeName = tagName.toUpperCase();
        upgradedElements.add(cmp);
        return cmp;
      }

      var host = new Proxy({}, {
        get: function get(obj, prop) {
          var elm = proxyElements.get(host);

          if (elm != null) {
            return elm[prop];
          }

          return obj[prop];
        },
        set: function set(obj, prop, val) {
          var elm = proxyElements.get(host);

          if (elm != null) {
            elm[prop] = val;
          } else {
            obj[prop] = val;
          }

          return true;
        },
        has: function has(obj, prop) {
          var elm = proxyElements.get(host);

          if (prop in elm) {
            return true;
          }

          if (prop in obj) {
            return true;
          }

          return false;
        }
      });
      var elm = new MockHTMLElement(ownerDocument, tagName);
      proxyElements.set(host, elm);
      return host;
    }

    var proxyElements = new WeakMap();
    var upgradedElements = new WeakSet();

    function connectNode(ownerDocument, node) {
      node.ownerDocument = ownerDocument;

      if (node.nodeType === 1
      /* ELEMENT_NODE */
      ) {
          if (ownerDocument != null && node.nodeName.includes('-')) {
            var win = ownerDocument.defaultView;

            if (win != null && typeof node.connectedCallback === 'function' && node.isConnected) {
              fireConnectedCallback(node);
            }

            var shadowRoot = node.shadowRoot;

            if (shadowRoot != null) {
              shadowRoot.childNodes.forEach(function (childNode) {
                connectNode(ownerDocument, childNode);
              });
            }
          }

          node.childNodes.forEach(function (childNode) {
            connectNode(ownerDocument, childNode);
          });
        } else {
        node.childNodes.forEach(function (childNode) {
          childNode.ownerDocument = ownerDocument;
        });
      }
    }

    function fireConnectedCallback(node) {
      if (typeof node.connectedCallback === 'function') {
        if (tempDisableCallbacks.has(node.ownerDocument) === false) {
          try {
            node.connectedCallback();
          } catch (e) {
            console.error(e);
          }
        }
      }
    }

    function disconnectNode(node) {
      if (node.nodeType === 1
      /* ELEMENT_NODE */
      ) {
          if (node.nodeName.includes('-') === true && typeof node.disconnectedCallback === 'function') {
            if (tempDisableCallbacks.has(node.ownerDocument) === false) {
              try {
                node.disconnectedCallback();
              } catch (e) {
                console.error(e);
              }
            }
          }

          node.childNodes.forEach(disconnectNode);
        }
    }

    function attributeChanged(node, attrName, oldValue, newValue) {
      attrName = attrName.toLowerCase();
      var observedAttributes = node.constructor.observedAttributes;

      if (Array.isArray(observedAttributes) === true && observedAttributes.some(function (obs) {
        return obs.toLowerCase() === attrName;
      }) === true) {
        try {
          node.attributeChangedCallback(attrName, oldValue, newValue);
        } catch (e) {
          console.error(e);
        }
      }
    }

    function checkAttributeChanged(node) {
      return node.nodeName.includes('-') === true && typeof node.attributeChangedCallback === 'function';
    }

    var tempDisableCallbacks = new Set();

    function dataset(elm) {
      var ds = {};
      var attributes = elm.attributes;
      var attrLen = attributes.length;

      for (var i = 0; i < attrLen; i++) {
        var attr = attributes.item(i);
        var nodeName = attr.nodeName;

        if (nodeName.startsWith('data-')) {
          ds[dashToPascalCase(nodeName)] = attr.nodeValue;
        }
      }

      return new Proxy(ds, {
        get: function get(_obj, camelCaseProp) {
          return ds[camelCaseProp];
        },
        set: function set(_obj, camelCaseProp, value) {
          var dataAttr = toDataAttribute(camelCaseProp);
          elm.setAttribute(dataAttr, value);
          return true;
        }
      });
    }

    function toDataAttribute(str) {
      return 'data-' + String(str).replace(/([A-Z0-9])/g, function (g) {
        return ' ' + g[0];
      }).trim().replace(/ /g, '-').toLowerCase();
    }

    function dashToPascalCase(str) {
      str = String(str).substr(5);
      return str.split('-').map(function (segment, index) {
        if (index === 0) {
          return segment.charAt(0).toLowerCase() + segment.slice(1);
        }

        return segment.charAt(0).toUpperCase() + segment.slice(1);
      }).join('');
    }

    var Sizzle = function () {
      var window = {
        document: {
          createElement: function createElement() {
            return {};
          },
          nodeType: 9,
          documentElement: {
            nodeType: 1,
            nodeName: 'HTML'
          }
        }
      };
      var module = {
        exports: {}
      };
      /*! Sizzle v2.3.5 | (c) JS Foundation and other contributors | js.foundation */

      !function (e) {
        var t,
            n,
            r,
            i,
            o,
            u,
            l,
            a,
            c,
            s,
            d,
            f,
            p,
            h,
            g,
            m,
            y,
            v,
            w,
            b = "sizzle" + 1 * new Date(),
            N = e.document,
            C = 0,
            x = 0,
            E = ae(),
            A = ae(),
            S = ae(),
            D = ae(),
            T = function T(e, t) {
          return e === t && (d = !0), 0;
        },
            L = {}.hasOwnProperty,
            q = [],
            I = q.pop,
            B = q.push,
            R = q.push,
            $ = q.slice,
            k = function k(e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            if (e[n] === t) return n;
          }

          return -1;
        },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            z = "\\[" + M + "*(" + P + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + M + "*\\]",
            F = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            O = new RegExp(M + "+", "g"),
            j = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            G = new RegExp("^" + M + "*," + M + "*"),
            U = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            V = new RegExp(M + "|>"),
            X = new RegExp(F),
            J = new RegExp("^" + P + "$"),
            K = {
          ID: new RegExp("^#(" + P + ")"),
          CLASS: new RegExp("^\\.(" + P + ")"),
          TAG: new RegExp("^(" + P + "|[*])"),
          ATTR: new RegExp("^" + z),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + H + ")$", "i"),
          needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
            Q = /HTML$/i,
            W = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function ne(e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
        },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function ie(e, t) {
          return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            oe = function oe() {
          f();
        },
            ue = ve(function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
          dir: "parentNode",
          next: "legend"
        });

        try {
          R.apply(q = $.call(N.childNodes), N.childNodes), q[N.childNodes.length].nodeType;
        } catch (e) {
          R = {
            apply: q.length ? function (e, t) {
              B.apply(e, $.call(t));
            } : function (e, t) {
              var n = e.length,
                  r = 0;

              while (e[n++] = t[r++]) {
                ;
              }

              e.length = n - 1;
            }
          };
        }

        function le(e, t, r, i) {
          var o,
              l,
              c,
              s,
              d,
              h,
              y,
              v = t && t.ownerDocument,
              N = t ? t.nodeType : 9;
          if (r = r || [], "string" != typeof e || !e || 1 !== N && 9 !== N && 11 !== N) return r;

          if (!i && (f(t), t = t || p, g)) {
            if (11 !== N && (d = _.exec(e))) if (o = d[1]) {
              if (9 === N) {
                if (!(c = t.getElementById(o))) return r;
                if (c.id === o) return r.push(c), r;
              } else if (v && (c = v.getElementById(o)) && w(t, c) && c.id === o) return r.push(c), r;
            } else {
              if (d[2]) return R.apply(r, t.getElementsByTagName(e)), r;
              if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return R.apply(r, t.getElementsByClassName(o)), r;
            }

            if (n.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== N || "object" !== t.nodeName.toLowerCase())) {
              if (y = e, v = t, 1 === N && (V.test(e) || U.test(e))) {
                (v = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((s = t.getAttribute("id")) ? s = s.replace(re, ie) : t.setAttribute("id", s = b)), l = (h = u(e)).length;

                while (l--) {
                  h[l] = (s ? "#" + s : ":scope") + " " + ye(h[l]);
                }

                y = h.join(",");
              }

              try {
                return R.apply(r, v.querySelectorAll(y)), r;
              } catch (t) {
                D(e, !0);
              } finally {
                s === b && t.removeAttribute("id");
              }
            }
          }

          return a(e.replace(j, "$1"), t, r, i);
        }

        function ae() {
          var e = [];

          function t(n, i) {
            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
          }

          return t;
        }

        function ce(e) {
          return e[b] = !0, e;
        }

        function se(e) {
          var t = p.createElement("fieldset");

          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
          }
        }

        function de(e, t) {
          var n = e.split("|"),
              i = n.length;

          while (i--) {
            r.attrHandle[n[i]] = t;
          }
        }

        function fe(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) while (n = n.nextSibling) {
            if (n === t) return -1;
          }
          return e ? 1 : -1;
        }

        function pe(e) {
          return function (t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ue(t) === e : t.disabled === e : "label" in t && t.disabled === e;
          };
        }

        function he(e) {
          return ce(function (t) {
            return t = +t, ce(function (n, r) {
              var i,
                  o = e([], n.length, t),
                  u = o.length;

              while (u--) {
                n[i = o[u]] && (n[i] = !(r[i] = n[i]));
              }
            });
          });
        }

        function ge(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }

        n = le.support = {}, o = le.isXML = function (e) {
          var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
          return !Q.test(t || n && n.nodeName || "HTML");
        }, f = le.setDocument = function (e) {
          var t,
              i,
              u = e ? e.ownerDocument || e : N;
          return u != p && 9 === u.nodeType && u.documentElement ? (p = u, h = p.documentElement, g = !o(p), N != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = se(function (e) {
            return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
          }), n.attributes = se(function (e) {
            return e.className = "i", !e.getAttribute("className");
          }), n.getElementsByTagName = se(function (e) {
            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
          }), n.getElementsByClassName = Z.test(p.getElementsByClassName), n.getById = se(function (e) {
            return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length;
          }), n.getById ? (r.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n = t.getElementById(e);
              return n ? [n] : [];
            }
          }) : (r.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t;
            };
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n,
                  r,
                  i,
                  o = t.getElementById(e);

              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                i = t.getElementsByName(e), r = 0;

                while (o = i[r++]) {
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                }
              }

              return [];
            }
          }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
          } : function (e, t) {
            var n,
                r = [],
                i = 0,
                o = t.getElementsByTagName(e);

            if ("*" === e) {
              while (n = o[i++]) {
                1 === n.nodeType && r.push(n);
              }

              return r;
            }

            return o;
          }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
          }, y = [], m = [], (n.qsa = Z.test(p.querySelectorAll)) && (se(function (e) {
            var t;
            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]");
          }), se(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = p.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
          })), (n.matchesSelector = Z.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function (e) {
            n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", F);
          }), m = m.length && new RegExp(m.join("|")), y = y.length && new RegExp(y.join("|")), t = Z.test(h.compareDocumentPosition), w = t || Z.test(h.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
          } : function (e, t) {
            if (t) while (t = t.parentNode) {
              if (t === e) return !0;
            }
            return !1;
          }, T = t ? function (e, t) {
            if (e === t) return d = !0, 0;
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == N && w(N, e) ? -1 : t == p || t.ownerDocument == N && w(N, t) ? 1 : s ? k(s, e) - k(s, t) : 0 : 4 & r ? -1 : 1);
          } : function (e, t) {
            if (e === t) return d = !0, 0;
            var n,
                r = 0,
                i = e.parentNode,
                o = t.parentNode,
                u = [e],
                l = [t];
            if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : s ? k(s, e) - k(s, t) : 0;
            if (i === o) return fe(e, t);
            n = e;

            while (n = n.parentNode) {
              u.unshift(n);
            }

            n = t;

            while (n = n.parentNode) {
              l.unshift(n);
            }

            while (u[r] === l[r]) {
              r++;
            }

            return r ? fe(u[r], l[r]) : u[r] == N ? -1 : l[r] == N ? 1 : 0;
          }, p) : p;
        }, le.matches = function (e, t) {
          return le(e, null, null, t);
        }, le.matchesSelector = function (e, t) {
          if (f(e), n.matchesSelector && g && !D[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) try {
            var r = v.call(e, t);
            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
          } catch (e) {
            D(t, !0);
          }
          return le(t, p, null, [e]).length > 0;
        }, le.contains = function (e, t) {
          return (e.ownerDocument || e) != p && f(e), w(e, t);
        }, le.attr = function (e, t) {
          (e.ownerDocument || e) != p && f(e);
          var i = r.attrHandle[t.toLowerCase()],
              o = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, le.escape = function (e) {
          return (e + "").replace(re, ie);
        }, le.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }, le.uniqueSort = function (e) {
          var t,
              r = [],
              i = 0,
              o = 0;

          if (d = !n.detectDuplicates, s = !n.sortStable && e.slice(0), e.sort(T), d) {
            while (t = e[o++]) {
              t === e[o] && (i = r.push(o));
            }

            while (i--) {
              e.splice(r[i], 1);
            }
          }

          return s = null, e;
        }, i = le.getText = function (e) {
          var t,
              n = "",
              r = 0,
              o = e.nodeType;

          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;

              for (e = e.firstChild; e; e = e.nextSibling) {
                n += i(e);
              }
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else while (t = e[r++]) {
            n += i(t);
          }

          return n;
        }, (r = le.selectors = {
          cacheLength: 50,
          createPseudo: ce,
          match: K,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function ATTR(e) {
              return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            },
            CHILD: function CHILD(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || le.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && le.error(e[0]), e;
            },
            PSEUDO: function PSEUDO(e) {
              var t,
                  n = !e[6] && e[2];
              return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = u(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
            }
          },
          filter: {
            TAG: function TAG(e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e ? function () {
                return !0;
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            },
            CLASS: function CLASS(e) {
              var t = E[e + " "];
              return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
              });
            },
            ATTR: function ATTR(e, t, n) {
              return function (r) {
                var i = le.attr(r, e);
                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(O, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function CHILD(e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                  u = "last" !== e.slice(-4),
                  l = "of-type" === t;
              return 1 === r && 0 === i ? function (e) {
                return !!e.parentNode;
              } : function (t, n, a) {
                var c,
                    s,
                    d,
                    f,
                    p,
                    h,
                    g = o !== u ? "nextSibling" : "previousSibling",
                    m = t.parentNode,
                    y = l && t.nodeName.toLowerCase(),
                    v = !a && !l,
                    w = !1;

                if (m) {
                  if (o) {
                    while (g) {
                      f = t;

                      while (f = f[g]) {
                        if (l ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                      }

                      h = g = "only" === e && !h && "nextSibling";
                    }

                    return !0;
                  }

                  if (h = [u ? m.firstChild : m.lastChild], u && v) {
                    w = (p = (c = (s = (d = (f = m)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], f = p && m.childNodes[p];

                    while (f = ++p && f && f[g] || (w = p = 0) || h.pop()) {
                      if (1 === f.nodeType && ++w && f === t) {
                        s[e] = [C, p, w];
                        break;
                      }
                    }
                  } else if (v && (w = p = (c = (s = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === w) while (f = ++p && f && f[g] || (w = p = 0) || h.pop()) {
                    if ((l ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) && ++w && (v && ((s = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [C, w]), f === t)) break;
                  }

                  return (w -= i) === r || w % r == 0 && w / r >= 0;
                }
              };
            },
            PSEUDO: function PSEUDO(e, t) {
              var n,
                  i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || le.error("unsupported pseudo: " + e);
              return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, n) {
                var r,
                    o = i(e, t),
                    u = o.length;

                while (u--) {
                  e[r = k(e, o[u])] = !(n[r] = o[u]);
                }
              }) : function (e) {
                return i(e, 0, n);
              }) : i;
            }
          },
          pseudos: {
            not: ce(function (e) {
              var t = [],
                  n = [],
                  r = l(e.replace(j, "$1"));
              return r[b] ? ce(function (e, t, n, i) {
                var o,
                    u = r(e, null, i, []),
                    l = e.length;

                while (l--) {
                  (o = u[l]) && (e[l] = !(t[l] = o));
                }
              }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
              };
            }),
            has: ce(function (e) {
              return function (t) {
                return le(e, t).length > 0;
              };
            }),
            contains: ce(function (e) {
              return e = e.replace(te, ne), function (t) {
                return (t.textContent || i(t)).indexOf(e) > -1;
              };
            }),
            lang: ce(function (e) {
              return J.test(e || "") || le.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                var n;

                do {
                  if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);

                return !1;
              };
            }),
            target: function target(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function root(e) {
              return e === h;
            },
            focus: function focus(e) {
              return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            },
            enabled: pe(!1),
            disabled: pe(!0),
            checked: function checked(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected;
            },
            selected: function selected(e) {
              return !0 === e.selected;
            },
            empty: function empty(e) {
              for (e = e.firstChild; e; e = e.nextSibling) {
                if (e.nodeType < 6) return !1;
              }

              return !0;
            },
            parent: function parent(e) {
              return !r.pseudos.empty(e);
            },
            header: function header(e) {
              return Y.test(e.nodeName);
            },
            input: function input(e) {
              return W.test(e.nodeName);
            },
            button: function button(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t;
            },
            text: function text(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            },
            first: he(function () {
              return [0];
            }),
            last: he(function (e, t) {
              return [t - 1];
            }),
            eq: he(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: he(function (e, t) {
              for (var n = 0; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            odd: he(function (e, t) {
              for (var n = 1; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            lt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
                e.push(r);
              }

              return e;
            }),
            gt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) {
                e.push(r);
              }

              return e;
            })
          }
        }).pseudos.nth = r.pseudos.eq;

        for (t in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) {
          r.pseudos[t] = function (e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }(t);
        }

        for (t in {
          submit: !0,
          reset: !0
        }) {
          r.pseudos[t] = function (e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }(t);
        }

        function me() {}

        me.prototype = r.filters = r.pseudos, r.setFilters = new me(), u = le.tokenize = function (e, t) {
          var n,
              i,
              o,
              u,
              l,
              a,
              c,
              s = A[e + " "];
          if (s) return t ? 0 : s.slice(0);
          l = e, a = [], c = r.preFilter;

          while (l) {
            n && !(i = G.exec(l)) || (i && (l = l.slice(i[0].length) || l), a.push(o = [])), n = !1, (i = U.exec(l)) && (n = i.shift(), o.push({
              value: n,
              type: i[0].replace(j, " ")
            }), l = l.slice(n.length));

            for (u in r.filter) {
              !(i = K[u].exec(l)) || c[u] && !(i = c[u](i)) || (n = i.shift(), o.push({
                value: n,
                type: u,
                matches: i
              }), l = l.slice(n.length));
            }

            if (!n) break;
          }

          return t ? l.length : l ? le.error(e) : A(e, a).slice(0);
        };

        function ye(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) {
            r += e[t].value;
          }

          return r;
        }

        function ve(e, t, n) {
          var r = t.dir,
              i = t.next,
              o = i || r,
              u = n && "parentNode" === o,
              l = x++;
          return t.first ? function (t, n, i) {
            while (t = t[r]) {
              if (1 === t.nodeType || u) return e(t, n, i);
            }

            return !1;
          } : function (t, n, a) {
            var c,
                s,
                d,
                f = [C, l];

            if (a) {
              while (t = t[r]) {
                if ((1 === t.nodeType || u) && e(t, n, a)) return !0;
              }
            } else while (t = t[r]) {
              if (1 === t.nodeType || u) if (d = t[b] || (t[b] = {}), s = d[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                if ((c = s[o]) && c[0] === C && c[1] === l) return f[2] = c[2];
                if (s[o] = f, f[2] = e(t, n, a)) return !0;
              }
            }

            return !1;
          };
        }

        function we(e) {
          return e.length > 1 ? function (t, n, r) {
            var i = e.length;

            while (i--) {
              if (!e[i](t, n, r)) return !1;
            }

            return !0;
          } : e[0];
        }

        function be(e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            le(e, t[r], n);
          }

          return n;
        }

        function Ne(e, t, n, r, i) {
          for (var o, u = [], l = 0, a = e.length, c = null != t; l < a; l++) {
            (o = e[l]) && (n && !n(o, r, i) || (u.push(o), c && t.push(l)));
          }

          return u;
        }

        function Ce(e, t, n, r, i, o) {
          return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), ce(function (o, u, l, a) {
            var c,
                s,
                d,
                f = [],
                p = [],
                h = u.length,
                g = o || be(t || "*", l.nodeType ? [l] : l, []),
                m = !e || !o && t ? g : Ne(g, f, e, l, a),
                y = n ? i || (o ? e : h || r) ? [] : u : m;

            if (n && n(m, y, l, a), r) {
              c = Ne(y, p), r(c, [], l, a), s = c.length;

              while (s--) {
                (d = c[s]) && (y[p[s]] = !(m[p[s]] = d));
              }
            }

            if (o) {
              if (i || e) {
                if (i) {
                  c = [], s = y.length;

                  while (s--) {
                    (d = y[s]) && c.push(m[s] = d);
                  }

                  i(null, y = [], c, a);
                }

                s = y.length;

                while (s--) {
                  (d = y[s]) && (c = i ? k(o, d) : f[s]) > -1 && (o[c] = !(u[c] = d));
                }
              }
            } else y = Ne(y === u ? y.splice(h, y.length) : y), i ? i(null, u, y, a) : R.apply(u, y);
          });
        }

        function xe(e) {
          for (var t, n, i, o = e.length, u = r.relative[e[0].type], l = u || r.relative[" "], a = u ? 1 : 0, s = ve(function (e) {
            return e === t;
          }, l, !0), d = ve(function (e) {
            return k(t, e) > -1;
          }, l, !0), f = [function (e, n, r) {
            var i = !u && (r || n !== c) || ((t = n).nodeType ? s(e, n, r) : d(e, n, r));
            return t = null, i;
          }]; a < o; a++) {
            if (n = r.relative[e[a].type]) f = [ve(we(f), n)];else {
              if ((n = r.filter[e[a].type].apply(null, e[a].matches))[b]) {
                for (i = ++a; i < o; i++) {
                  if (r.relative[e[i].type]) break;
                }

                return Ce(a > 1 && we(f), a > 1 && ye(e.slice(0, a - 1).concat({
                  value: " " === e[a - 2].type ? "*" : ""
                })).replace(j, "$1"), n, a < i && xe(e.slice(a, i)), i < o && xe(e = e.slice(i)), i < o && ye(e));
              }

              f.push(n);
            }
          }

          return we(f);
        }

        function Ee(e, t) {
          var n = t.length > 0,
              i = e.length > 0,
              o = function o(_o, u, l, a, s) {
            var d,
                h,
                m,
                y = 0,
                v = "0",
                w = _o && [],
                b = [],
                N = c,
                x = _o || i && r.find.TAG("*", s),
                E = C += null == N ? 1 : Math.random() || .1,
                A = x.length;

            for (s && (c = u == p || u || s); v !== A && null != (d = x[v]); v++) {
              if (i && d) {
                h = 0, u || d.ownerDocument == p || (f(d), l = !g);

                while (m = e[h++]) {
                  if (m(d, u || p, l)) {
                    a.push(d);
                    break;
                  }
                }

                s && (C = E);
              }

              n && ((d = !m && d) && y--, _o && w.push(d));
            }

            if (y += v, n && v !== y) {
              h = 0;

              while (m = t[h++]) {
                m(w, b, u, l);
              }

              if (_o) {
                if (y > 0) while (v--) {
                  w[v] || b[v] || (b[v] = I.call(a));
                }
                b = Ne(b);
              }

              R.apply(a, b), s && !_o && b.length > 0 && y + t.length > 1 && le.uniqueSort(a);
            }

            return s && (C = E, c = N), w;
          };

          return n ? ce(o) : o;
        }

        l = le.compile = function (e, t) {
          var n,
              r = [],
              i = [],
              o = S[e + " "];

          if (!o) {
            t || (t = u(e)), n = t.length;

            while (n--) {
              (o = xe(t[n]))[b] ? r.push(o) : i.push(o);
            }

            (o = S(e, Ee(i, r))).selector = e;
          }

          return o;
        }, a = le.select = function (e, t, n, i) {
          var o,
              a,
              c,
              s,
              d,
              f = "function" == typeof e && e,
              p = !i && u(e = f.selector || e);

          if (n = n || [], 1 === p.length) {
            if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = a[0]).type && 9 === t.nodeType && g && r.relative[a[1].type]) {
              if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
              f && (t = t.parentNode), e = e.slice(a.shift().value.length);
            }

            o = K.needsContext.test(e) ? 0 : a.length;

            while (o--) {
              if (c = a[o], r.relative[s = c.type]) break;

              if ((d = r.find[s]) && (i = d(c.matches[0].replace(te, ne), ee.test(a[0].type) && ge(t.parentNode) || t))) {
                if (a.splice(o, 1), !(e = i.length && ye(a))) return R.apply(n, i), n;
                break;
              }
            }
          }

          return (f || l(e, p))(i, t, !g, n, !t || ee.test(e) && ge(t.parentNode) || t), n;
        }, n.sortStable = b.split("").sort(T).join("") === b, n.detectDuplicates = !!d, f(), n.sortDetached = se(function (e) {
          return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
        }), se(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || de("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && se(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || de("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), se(function (e) {
          return null == e.getAttribute("disabled");
        }) || de(H, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        });
        var Ae = e.Sizzle;
        le.noConflict = function () {
          return e.Sizzle === le && (e.Sizzle = Ae), le;
        }, "function" == typeof define && __webpack_require__(
        /*! !webpack amd options */
        "./node_modules/webpack/buildin/amd-options.js") ? define(function () {
          return le;
        }) : "undefined" != typeof module && module.exports ? module.exports = le : e.Sizzle = le;
      }(window);
      return module.exports;
    }();

    function _matches(selector, elm) {
      var r = Sizzle.matches(selector, [elm]);
      return r.length > 0;
    }

    function selectOne(selector, elm) {
      var r = Sizzle(selector, elm);
      return r[0] || null;
    }

    function selectAll(selector, elm) {
      return Sizzle(selector, elm);
    }

    var MockClassList = /*#__PURE__*/function () {
      function MockClassList(elm) {
        _classCallCheck(this, MockClassList);

        this.elm = elm;
      }

      _createClass(MockClassList, [{
        key: "add",
        value: function add() {
          var clsNames = getItems(this.elm);
          var updated = false;

          for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
            classNames[_key] = arguments[_key];
          }

          classNames.forEach(function (className) {
            className = String(className);
            validateClass(className);

            if (clsNames.includes(className) === false) {
              clsNames.push(className);
              updated = true;
            }
          });

          if (updated) {
            this.elm.setAttributeNS(null, 'class', clsNames.join(' '));
          }
        }
      }, {
        key: "remove",
        value: function remove() {
          var clsNames = getItems(this.elm);
          var updated = false;

          for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            classNames[_key2] = arguments[_key2];
          }

          classNames.forEach(function (className) {
            className = String(className);
            validateClass(className);
            var index = clsNames.indexOf(className);

            if (index > -1) {
              clsNames.splice(index, 1);
              updated = true;
            }
          });

          if (updated) {
            this.elm.setAttributeNS(null, 'class', clsNames.filter(function (c) {
              return c.length > 0;
            }).join(' '));
          }
        }
      }, {
        key: "contains",
        value: function contains(className) {
          className = String(className);
          return getItems(this.elm).includes(className);
        }
      }, {
        key: "toggle",
        value: function toggle(className) {
          className = String(className);

          if (this.contains(className) === true) {
            this.remove(className);
          } else {
            this.add(className);
          }
        }
      }, {
        key: "item",
        value: function item(index) {
          return getItems(this.elm)[index];
        }
      }, {
        key: "toString",
        value: function toString() {
          return getItems(this.elm).join(' ');
        }
      }, {
        key: "length",
        get: function get() {
          return getItems(this.elm).length;
        }
      }]);

      return MockClassList;
    }();

    function validateClass(className) {
      if (className === '') {
        throw new Error('The token provided must not be empty.');
      }

      if (/\s/.test(className)) {
        throw new Error("The token provided ('".concat(className, "') contains HTML space characters, which are not valid in tokens."));
      }
    }

    function getItems(elm) {
      var className = elm.getAttribute('class');

      if (typeof className === 'string' && className.length > 0) {
        return className.trim().split(' ').filter(function (c) {
          return c.length > 0;
        });
      }

      return [];
    }

    var MockCSSStyleDeclaration = /*#__PURE__*/function () {
      function MockCSSStyleDeclaration() {
        _classCallCheck(this, MockCSSStyleDeclaration);

        this._styles = new Map();
      }

      _createClass(MockCSSStyleDeclaration, [{
        key: "setProperty",
        value: function setProperty(prop, value) {
          prop = jsCaseToCssCase(prop);

          if (value == null || value === '') {
            this._styles["delete"](prop);
          } else {
            this._styles.set(prop, String(value));
          }
        }
      }, {
        key: "getPropertyValue",
        value: function getPropertyValue(prop) {
          prop = jsCaseToCssCase(prop);
          return String(this._styles.get(prop) || '');
        }
      }, {
        key: "removeProperty",
        value: function removeProperty(prop) {
          prop = jsCaseToCssCase(prop);

          this._styles["delete"](prop);
        }
      }, {
        key: "length",
        get: function get() {
          return this._styles.size;
        }
      }, {
        key: "cssText",
        get: function get() {
          var cssText = [];

          this._styles.forEach(function (value, prop) {
            cssText.push("".concat(prop, ": ").concat(value, ";"));
          });

          return cssText.join(' ').trim();
        },
        set: function set(cssText) {
          var _this6 = this;

          if (cssText == null || cssText === '') {
            this._styles.clear();

            return;
          }

          cssText.split(';').forEach(function (rule) {
            rule = rule.trim();

            if (rule.length > 0) {
              var splt = rule.split(':');

              if (splt.length > 1) {
                var prop = splt[0].trim();
                var value = splt[1].trim();

                if (prop !== '' && value !== '') {
                  _this6._styles.set(jsCaseToCssCase(prop), value);
                }
              }
            }
          });
        }
      }]);

      return MockCSSStyleDeclaration;
    }();

    function createCSSStyleDeclaration() {
      return new Proxy(new MockCSSStyleDeclaration(), cssProxyHandler);
    }

    var cssProxyHandler = {
      get: function get(cssStyle, prop) {
        if (prop in cssStyle) {
          return cssStyle[prop];
        }

        prop = cssCaseToJsCase(prop);
        return cssStyle.getPropertyValue(prop);
      },
      set: function set(cssStyle, prop, value) {
        if (prop in cssStyle) {
          cssStyle[prop] = value;
        } else {
          cssStyle.setProperty(prop, value);
        }

        return true;
      }
    };

    function cssCaseToJsCase(str) {
      // font-size to fontSize
      if (str.length > 1 && str.includes('-') === true) {
        str = str.toLowerCase().split('-').map(function (segment) {
          return segment.charAt(0).toUpperCase() + segment.slice(1);
        }).join('');
        str = str.substr(0, 1).toLowerCase() + str.substr(1);
      }

      return str;
    }

    function jsCaseToCssCase(str) {
      // fontSize to font-size
      if (str.length > 1 && str.includes('-') === false && /[A-Z]/.test(str) === true) {
        str = str.replace(/([A-Z])/g, function (g) {
          return ' ' + g[0];
        }).trim().replace(/ /g, '-').toLowerCase();
      }

      return str;
    }

    var MockEvent = /*#__PURE__*/function () {
      function MockEvent(type, eventInitDict) {
        _classCallCheck(this, MockEvent);

        this.bubbles = false;
        this.cancelBubble = false;
        this.cancelable = false;
        this.composed = false;
        this.currentTarget = null;
        this.defaultPrevented = false;
        this.srcElement = null;
        this.target = null;

        if (typeof type !== 'string') {
          throw new Error("Event type required");
        }

        this.type = type;
        this.timeStamp = Date.now();

        if (eventInitDict != null) {
          Object.assign(this, eventInitDict);
        }
      }

      _createClass(MockEvent, [{
        key: "preventDefault",
        value: function preventDefault() {
          this.defaultPrevented = true;
        }
      }, {
        key: "stopPropagation",
        value: function stopPropagation() {
          this.cancelBubble = true;
        }
      }, {
        key: "stopImmediatePropagation",
        value: function stopImmediatePropagation() {
          this.cancelBubble = true;
        }
      }]);

      return MockEvent;
    }();

    var MockCustomEvent = /*#__PURE__*/function (_MockEvent) {
      _inherits(MockCustomEvent, _MockEvent);

      var _super = _createSuper(MockCustomEvent);

      function MockCustomEvent(type, customEventInitDic) {
        var _this7;

        _classCallCheck(this, MockCustomEvent);

        _this7 = _super.call(this, type);
        _this7.detail = null;

        if (customEventInitDic != null) {
          Object.assign(_assertThisInitialized(_this7), customEventInitDic);
        }

        return _this7;
      }

      return MockCustomEvent;
    }(MockEvent);

    var MockKeyboardEvent = /*#__PURE__*/function (_MockEvent2) {
      _inherits(MockKeyboardEvent, _MockEvent2);

      var _super2 = _createSuper(MockKeyboardEvent);

      function MockKeyboardEvent(type, keyboardEventInitDic) {
        var _this8;

        _classCallCheck(this, MockKeyboardEvent);

        _this8 = _super2.call(this, type);
        _this8.code = '';
        _this8.key = '';
        _this8.altKey = false;
        _this8.ctrlKey = false;
        _this8.metaKey = false;
        _this8.shiftKey = false;
        _this8.location = 0;
        _this8.repeat = false;

        if (keyboardEventInitDic != null) {
          Object.assign(_assertThisInitialized(_this8), keyboardEventInitDic);
        }

        return _this8;
      }

      return MockKeyboardEvent;
    }(MockEvent);

    var MockMouseEvent = /*#__PURE__*/function (_MockEvent3) {
      _inherits(MockMouseEvent, _MockEvent3);

      var _super3 = _createSuper(MockMouseEvent);

      function MockMouseEvent(type, mouseEventInitDic) {
        var _this9;

        _classCallCheck(this, MockMouseEvent);

        _this9 = _super3.call(this, type);
        _this9.screenX = 0;
        _this9.screenY = 0;
        _this9.clientX = 0;
        _this9.clientY = 0;
        _this9.ctrlKey = false;
        _this9.shiftKey = false;
        _this9.altKey = false;
        _this9.metaKey = false;
        _this9.button = 0;
        _this9.buttons = 0;
        _this9.relatedTarget = null;

        if (mouseEventInitDic != null) {
          Object.assign(_assertThisInitialized(_this9), mouseEventInitDic);
        }

        return _this9;
      }

      return MockMouseEvent;
    }(MockEvent);

    var MockEventListener = function MockEventListener(type, handler) {
      _classCallCheck(this, MockEventListener);

      this.type = type;
      this.handler = handler;
    };

    function _addEventListener(elm, type, handler) {
      var target = elm;

      if (target.__listeners == null) {
        target.__listeners = [];
      }

      target.__listeners.push(new MockEventListener(type, handler));
    }

    function _removeEventListener(elm, type, handler) {
      var target = elm;

      if (target != null && Array.isArray(target.__listeners) === true) {
        var elmListener = target.__listeners.find(function (e) {
          return e.type === type && e.handler === handler;
        });

        if (elmListener != null) {
          var index = target.__listeners.indexOf(elmListener);

          target.__listeners.splice(index, 1);
        }
      }
    }

    function resetEventListeners(target) {
      if (target != null && target.__listeners != null) {
        target.__listeners = null;
      }
    }

    function triggerEventListener(elm, ev) {
      if (elm == null || ev.cancelBubble === true) {
        return;
      }

      var target = elm;
      ev.currentTarget = elm;

      if (Array.isArray(target.__listeners) === true) {
        var listeners = target.__listeners.filter(function (e) {
          return e.type === ev.type;
        });

        listeners.forEach(function (listener) {
          try {
            listener.handler.call(target, ev);
          } catch (err) {
            console.error(err);
          }
        });
      }

      if (ev.bubbles === false) {
        return;
      }

      if (elm.nodeName === "#document"
      /* DOCUMENT_NODE */
      ) {
          triggerEventListener(elm.defaultView, ev);
        } else {
        triggerEventListener(elm.parentElement, ev);
      }
    }

    function _dispatchEvent(currentTarget, ev) {
      ev.target = currentTarget;
      triggerEventListener(currentTarget, ev);
      return true;
    }

    function serializeNodeToHtml(elm) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var output = {
        currentLineWidth: 0,
        indent: 0,
        isWithinBody: false,
        text: []
      };

      if (opts.prettyHtml) {
        if (typeof opts.indentSpaces !== 'number') {
          opts.indentSpaces = 2;
        }

        if (typeof opts.newLines !== 'boolean') {
          opts.newLines = true;
        }

        opts.approximateLineWidth = -1;
      } else {
        opts.prettyHtml = false;

        if (typeof opts.newLines !== 'boolean') {
          opts.newLines = false;
        }

        if (typeof opts.indentSpaces !== 'number') {
          opts.indentSpaces = 0;
        }
      }

      if (typeof opts.approximateLineWidth !== 'number') {
        opts.approximateLineWidth = -1;
      }

      if (typeof opts.removeEmptyAttributes !== 'boolean') {
        opts.removeEmptyAttributes = true;
      }

      if (typeof opts.removeAttributeQuotes !== 'boolean') {
        opts.removeAttributeQuotes = false;
      }

      if (typeof opts.removeBooleanAttributeQuotes !== 'boolean') {
        opts.removeBooleanAttributeQuotes = false;
      }

      if (typeof opts.removeHtmlComments !== 'boolean') {
        opts.removeHtmlComments = false;
      }

      if (typeof opts.serializeShadowRoot !== 'boolean') {
        opts.serializeShadowRoot = false;
      }

      if (opts.outerHtml) {
        serializeToHtml(elm, opts, output, false);
      } else {
        for (var i = 0, ii = elm.childNodes.length; i < ii; i++) {
          serializeToHtml(elm.childNodes[i], opts, output, false);
        }
      }

      if (output.text[0] === '\n') {
        output.text.shift();
      }

      if (output.text[output.text.length - 1] === '\n') {
        output.text.pop();
      }

      return output.text.join('');
    }

    function serializeToHtml(node, opts, output, isShadowRoot) {
      if (node.nodeType === 1
      /* ELEMENT_NODE */
      || isShadowRoot) {
        var tagName = isShadowRoot ? 'mock:shadow-root' : getTagName(node);

        if (tagName === 'body') {
          output.isWithinBody = true;
        }

        var ignoreTag = opts.excludeTags != null && opts.excludeTags.includes(tagName);

        if (ignoreTag === false) {
          if (opts.newLines) {
            output.text.push('\n');
            output.currentLineWidth = 0;
          }

          if (opts.indentSpaces > 0) {
            for (var i = 0; i < output.indent; i++) {
              output.text.push(' ');
            }

            output.currentLineWidth += output.indent;
          }

          output.text.push('<' + tagName);
          output.currentLineWidth += tagName.length + 1;
          var attrsLength = node.attributes.length;
          var attributes = opts.prettyHtml && attrsLength > 1 ? cloneAttributes(node.attributes, true) : node.attributes;

          for (var _i2 = 0; _i2 < attrsLength; _i2++) {
            var attr = attributes.item(_i2);
            var attrName = attr.name;

            if (attrName === 'style') {
              continue;
            }

            var attrValue = attr.value;

            if (opts.removeEmptyAttributes && attrValue === '' && REMOVE_EMPTY_ATTR.has(attrName)) {
              continue;
            }

            var attrNamespaceURI = attr.namespaceURI;

            if (attrNamespaceURI == null) {
              output.currentLineWidth += attrName.length + 1;

              if (opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
                output.text.push('\n' + attrName);
                output.currentLineWidth = 0;
              } else {
                output.text.push(' ' + attrName);
              }
            } else if (attrNamespaceURI === 'http://www.w3.org/XML/1998/namespace') {
              output.text.push(' xml:' + attrName);
              output.currentLineWidth += attrName.length + 5;
            } else if (attrNamespaceURI === 'http://www.w3.org/2000/xmlns/') {
              if (attrName !== 'xmlns') {
                output.text.push(' xmlns:' + attrName);
                output.currentLineWidth += attrName.length + 7;
              } else {
                output.text.push(' ' + attrName);
                output.currentLineWidth += attrName.length + 1;
              }
            } else if (attrNamespaceURI === XLINK_NS) {
              output.text.push(' xlink:' + attrName);
              output.currentLineWidth += attrName.length + 7;
            } else {
              output.text.push(' ' + attrNamespaceURI + ':' + attrName);
              output.currentLineWidth += attrNamespaceURI.length + attrName.length + 2;
            }

            if (opts.prettyHtml && attrName === 'class') {
              attrValue = attr.value = attrValue.split(' ').filter(function (t) {
                return t !== '';
              }).sort().join(' ').trim();
            }

            if (attrValue === '') {
              if (opts.removeBooleanAttributeQuotes && BOOLEAN_ATTR.has(attrName)) {
                continue;
              }

              if (opts.removeEmptyAttributes && attrName.startsWith('data-')) {
                continue;
              }
            }

            if (opts.removeAttributeQuotes && CAN_REMOVE_ATTR_QUOTES.test(attrValue)) {
              output.text.push('=' + escapeString(attrValue, true));
              output.currentLineWidth += attrValue.length + 1;
            } else {
              output.text.push('="' + escapeString(attrValue, true) + '"');
              output.currentLineWidth += attrValue.length + 3;
            }
          }

          if (node.hasAttribute('style')) {
            var cssText = node.style.cssText;

            if (opts.approximateLineWidth > 0 && output.currentLineWidth + cssText.length + 10 > opts.approximateLineWidth) {
              output.text.push("\nstyle=\"".concat(cssText, "\">"));
              output.currentLineWidth = 0;
            } else {
              output.text.push(" style=\"".concat(cssText, "\">"));
              output.currentLineWidth += cssText.length + 10;
            }
          } else {
            output.text.push('>');
            output.currentLineWidth += 1;
          }
        }

        if (EMPTY_ELEMENTS.has(tagName) === false) {
          if (opts.serializeShadowRoot && node.shadowRoot != null) {
            output.indent = output.indent + opts.indentSpaces;
            serializeToHtml(node.shadowRoot, opts, output, true);
            output.indent = output.indent - opts.indentSpaces;

            if (opts.newLines && (node.childNodes.length === 0 || node.childNodes.length === 1 && node.childNodes[0].nodeType === 3
            /* TEXT_NODE */
            && node.childNodes[0].nodeValue.trim() === '')) {
              output.text.push('\n');
              output.currentLineWidth = 0;

              for (var _i3 = 0; _i3 < output.indent; _i3++) {
                output.text.push(' ');
              }

              output.currentLineWidth += output.indent;
            }
          }

          if (opts.excludeTagContent == null || opts.excludeTagContent.includes(tagName) === false) {
            var childNodes = tagName === 'template' ? node.content.childNodes : node.childNodes;
            var childNodeLength = childNodes.length;

            if (childNodeLength > 0) {
              if (childNodeLength === 1 && childNodes[0].nodeType === 3
              /* TEXT_NODE */
              && (typeof childNodes[0].nodeValue !== 'string' || childNodes[0].nodeValue.trim() === '')) ;else {
                if (opts.indentSpaces > 0 && ignoreTag === false) {
                  output.indent = output.indent + opts.indentSpaces;
                }

                for (var _i4 = 0; _i4 < childNodeLength; _i4++) {
                  serializeToHtml(childNodes[_i4], opts, output, false);
                }

                if (ignoreTag === false) {
                  if (opts.newLines) {
                    output.text.push('\n');
                    output.currentLineWidth = 0;
                  }

                  if (opts.indentSpaces > 0) {
                    output.indent = output.indent - opts.indentSpaces;

                    for (var _i5 = 0; _i5 < output.indent; _i5++) {
                      output.text.push(' ');
                    }

                    output.currentLineWidth += output.indent;
                  }
                }
              }
            }

            if (ignoreTag === false) {
              output.text.push('</' + tagName + '>');
              output.currentLineWidth += tagName.length + 3;
            }
          }
        }

        if (opts.approximateLineWidth > 0 && STRUCTURE_ELEMENTS.has(tagName)) {
          output.text.push('\n');
          output.currentLineWidth = 0;
        }

        if (tagName === 'body') {
          output.isWithinBody = false;
        }
      } else if (node.nodeType === 3
      /* TEXT_NODE */
      ) {
          var textContent = node.nodeValue;

          if (typeof textContent === 'string') {
            var trimmedTextContent = textContent.trim();

            if (trimmedTextContent === '') {
              // this text node is whitespace only
              if (isWithinWhitespaceSensitive(node)) {
                // whitespace matters within this element
                // just add the exact text we were given
                output.text.push(textContent);
                output.currentLineWidth += textContent.length;
              } else if (opts.approximateLineWidth > 0 && !output.isWithinBody) ;else if (!opts.prettyHtml) {
                // this text node is only whitespace, and it's not
                // within a whitespace sensitive element like <pre> or <code>
                // so replace the entire white space with a single new line
                output.currentLineWidth += 1;

                if (opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
                  // good enough for a new line
                  // for perf these are all just estimates
                  // we don't care to ensure exact line lengths
                  output.text.push('\n');
                  output.currentLineWidth = 0;
                } else {
                  // let's keep it all on the same line yet
                  output.text.push(' ');
                }
              }
            } else {
              // this text node has text content
              if (opts.newLines) {
                output.text.push('\n');
                output.currentLineWidth = 0;
              }

              if (opts.indentSpaces > 0) {
                for (var _i6 = 0; _i6 < output.indent; _i6++) {
                  output.text.push(' ');
                }

                output.currentLineWidth += output.indent;
              }

              var textContentLength = textContent.length;

              if (textContentLength > 0) {
                // this text node has text content
                var parentTagName = node.parentNode != null && node.parentNode.nodeType === 1
                /* ELEMENT_NODE */
                ? node.parentNode.nodeName : null;

                if (NON_ESCAPABLE_CONTENT.has(parentTagName)) {
                  // this text node cannot have its content escaped since it's going
                  // into an element like <style> or <script>
                  if (isWithinWhitespaceSensitive(node)) {
                    output.text.push(textContent);
                  } else {
                    output.text.push(trimmedTextContent);
                    textContentLength = trimmedTextContent.length;
                  }

                  output.currentLineWidth += textContentLength;
                } else {
                  // this text node is going into a normal element and html can be escaped
                  if (opts.prettyHtml) {
                    // pretty print the text node
                    output.text.push(escapeString(textContent.replace(/\s\s+/g, ' ').trim(), false));
                    output.currentLineWidth += textContentLength;
                  } else {
                    // not pretty printing the text node
                    if (isWithinWhitespaceSensitive(node)) {
                      output.currentLineWidth += textContentLength;
                    } else {
                      // this element is not a whitespace sensitive one, like <pre> or <code> so
                      // any whitespace at the start and end can be cleaned up to just be one space
                      if (/\s/.test(textContent.charAt(0))) {
                        textContent = ' ' + textContent.trimLeft();
                      }

                      textContentLength = textContent.length;

                      if (textContentLength > 1) {
                        if (/\s/.test(textContent.charAt(textContentLength - 1))) {
                          if (opts.approximateLineWidth > 0 && output.currentLineWidth + textContentLength > opts.approximateLineWidth) {
                            textContent = textContent.trimRight() + '\n';
                            output.currentLineWidth = 0;
                          } else {
                            textContent = textContent.trimRight() + ' ';
                          }
                        }
                      }

                      output.currentLineWidth += textContentLength;
                    }

                    output.text.push(escapeString(textContent, false));
                  }
                }
              }
            }
          }
        } else if (node.nodeType === 8
      /* COMMENT_NODE */
      ) {
          var nodeValue = node.nodeValue;

          if (opts.removeHtmlComments) {
            var isHydrateAnnotation = nodeValue.startsWith(CONTENT_REF_ID + '.') || nodeValue.startsWith(ORG_LOCATION_ID + '.') || nodeValue.startsWith(SLOT_NODE_ID + '.') || nodeValue.startsWith(TEXT_NODE_ID + '.');

            if (!isHydrateAnnotation) {
              return;
            }
          }

          if (opts.newLines) {
            output.text.push('\n');
            output.currentLineWidth = 0;
          }

          if (opts.indentSpaces > 0) {
            for (var _i7 = 0; _i7 < output.indent; _i7++) {
              output.text.push(' ');
            }

            output.currentLineWidth += output.indent;
          }

          output.text.push('<!--' + nodeValue + '-->');
          output.currentLineWidth += nodeValue.length + 7;
        } else if (node.nodeType === 10
      /* DOCUMENT_TYPE_NODE */
      ) {
          output.text.push('<!doctype html>');
        }
    }

    var AMP_REGEX = /&/g;
    var NBSP_REGEX = /\u00a0/g;
    var DOUBLE_QUOTE_REGEX = /"/g;
    var LT_REGEX = /</g;
    var GT_REGEX = />/g;
    var CAN_REMOVE_ATTR_QUOTES = /^[^ \t\n\f\r"'`=<>\/\\-]+$/;

    function getTagName(element) {
      if (element.namespaceURI === 'http://www.w3.org/1999/xhtml') {
        return element.nodeName.toLowerCase();
      } else {
        return element.nodeName;
      }
    }

    function escapeString(str, attrMode) {
      str = str.replace(AMP_REGEX, '&amp;').replace(NBSP_REGEX, '&nbsp;');

      if (attrMode) {
        return str.replace(DOUBLE_QUOTE_REGEX, '&quot;');
      }

      return str.replace(LT_REGEX, '&lt;').replace(GT_REGEX, '&gt;');
    }

    function isWithinWhitespaceSensitive(node) {
      while (node != null) {
        if (WHITESPACE_SENSITIVE.has(node.nodeName)) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    }
    /*@__PURE__*/


    var NON_ESCAPABLE_CONTENT = new Set(['STYLE', 'SCRIPT', 'IFRAME', 'NOSCRIPT', 'XMP', 'NOEMBED', 'NOFRAMES', 'PLAINTEXT']);
    /*@__PURE__*/

    var WHITESPACE_SENSITIVE = new Set(['CODE', 'OUTPUT', 'PLAINTEXT', 'PRE', 'TEMPLATE', 'TEXTAREA']);
    /*@__PURE__*/

    var EMPTY_ELEMENTS = new Set(['area', 'base', 'basefont', 'bgsound', 'br', 'col', 'embed', 'frame', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'trace', 'wbr']);
    /*@__PURE__*/

    var REMOVE_EMPTY_ATTR = new Set(['class', 'dir', 'id', 'lang', 'name', 'title']);
    /*@__PURE__*/

    var BOOLEAN_ATTR = new Set(['allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare', 'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nohref', 'nomodule', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'truespeed', 'typemustmatch', 'visible']);
    /*@__PURE__*/

    var STRUCTURE_ELEMENTS = new Set(['html', 'body', 'head', 'iframe', 'meta', 'link', 'base', 'title', 'script', 'style']);

    var parse5 = /*@__PURE__*/function (e) {
      var _St, _Ct, _INITIAL_MODE, _BEFORE_HTML_MODE, _BEFORE_HEAD_MODE, _IN_HEAD_MODE, _IN_HEAD_NO_SCRIPT_MO, _AFTER_HEAD_MODE, _IN_BODY_MODE, _TEXT_MODE, _Ot, _IN_TABLE_TEXT_MODE, _IN_CAPTION_MODE, _IN_COLUMN_GROUP_MODE, _IN_TABLE_BODY_MODE, _IN_ROW_MODE, _IN_CELL_MODE, _IN_SELECT_MODE, _IN_SELECT_IN_TABLE_M, _IN_TEMPLATE_MODE, _AFTER_BODY_MODE, _IN_FRAMESET_MODE, _AFTER_FRAMESET_MODE, _AFTER_AFTER_BODY_MOD, _AFTER_AFTER_FRAMESET, _dt;

      var t = [65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];

      var n = "�",
          s = {
        EOF: -1,
        NULL: 0,
        TABULATION: 9,
        CARRIAGE_RETURN: 13,
        LINE_FEED: 10,
        FORM_FEED: 12,
        SPACE: 32,
        EXCLAMATION_MARK: 33,
        QUOTATION_MARK: 34,
        NUMBER_SIGN: 35,
        AMPERSAND: 38,
        APOSTROPHE: 39,
        HYPHEN_MINUS: 45,
        SOLIDUS: 47,
        DIGIT_0: 48,
        DIGIT_9: 57,
        SEMICOLON: 59,
        LESS_THAN_SIGN: 60,
        EQUALS_SIGN: 61,
        GREATER_THAN_SIGN: 62,
        QUESTION_MARK: 63,
        LATIN_CAPITAL_A: 65,
        LATIN_CAPITAL_F: 70,
        LATIN_CAPITAL_X: 88,
        LATIN_CAPITAL_Z: 90,
        RIGHT_SQUARE_BRACKET: 93,
        GRAVE_ACCENT: 96,
        LATIN_SMALL_A: 97,
        LATIN_SMALL_F: 102,
        LATIN_SMALL_X: 120,
        LATIN_SMALL_Z: 122,
        REPLACEMENT_CHARACTER: 65533
      },
          r = {
        DASH_DASH_STRING: [45, 45],
        DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
        CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
        SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
        PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
        SYSTEM_STRING: [83, 89, 83, 84, 69, 77]
      },
          i = function i(e) {
        return e >= 55296 && e <= 57343;
      },
          T = function T(e) {
        return e >= 56320 && e <= 57343;
      },
          o = function o(e, t) {
        return 1024 * (e - 55296) + 9216 + t;
      },
          E = function E(e) {
        return 32 !== e && 10 !== e && 13 !== e && 9 !== e && 12 !== e && e >= 1 && e <= 31 || e >= 127 && e <= 159;
      },
          a = function a(e) {
        return e >= 64976 && e <= 65007 || t.indexOf(e) > -1;
      },
          _ = "control-character-in-input-stream",
          A = "noncharacter-in-input-stream",
          h = "surrogate-in-input-stream",
          c = "non-void-html-element-start-tag-with-trailing-solidus",
          l = "end-tag-with-attributes",
          m = "end-tag-with-trailing-solidus",
          p = "unexpected-solidus-in-tag",
          N = "unexpected-null-character",
          u = "unexpected-question-mark-instead-of-tag-name",
          O = "invalid-first-character-of-tag-name",
          S = "unexpected-equals-sign-before-attribute-name",
          C = "missing-end-tag-name",
          d = "unexpected-character-in-attribute-name",
          R = "unknown-named-character-reference",
          I = "missing-semicolon-after-character-reference",
          f = "unexpected-character-after-doctype-system-identifier",
          M = "unexpected-character-in-unquoted-attribute-value",
          L = "eof-before-tag-name",
          D = "eof-in-tag",
          g = "missing-attribute-value",
          P = "missing-whitespace-between-attributes",
          k = "missing-whitespace-after-doctype-public-keyword",
          H = "missing-whitespace-between-doctype-public-and-system-identifiers",
          U = "missing-whitespace-after-doctype-system-keyword",
          F = "missing-quote-before-doctype-public-identifier",
          B = "missing-quote-before-doctype-system-identifier",
          G = "missing-doctype-public-identifier",
          K = "missing-doctype-system-identifier",
          b = "abrupt-doctype-public-identifier",
          Y = "abrupt-doctype-system-identifier",
          x = "cdata-in-html-content",
          y = "incorrectly-opened-comment",
          v = "eof-in-script-html-comment-like-text",
          w = "eof-in-doctype",
          Q = "nested-comment",
          X = "abrupt-closing-of-empty-comment",
          W = "eof-in-comment",
          V = "incorrectly-closed-comment",
          j = "eof-in-cdata",
          z = "absence-of-digits-in-numeric-character-reference",
          q = "null-character-reference",
          J = "surrogate-character-reference",
          Z = "character-reference-outside-unicode-range",
          $ = "control-character-reference",
          ee = "noncharacter-character-reference",
          te = "missing-whitespace-before-doctype-name",
          ne = "missing-doctype-name",
          se = "invalid-character-sequence-after-doctype-name",
          re = "duplicate-attribute",
          ie = "non-conforming-doctype",
          Te = "missing-doctype",
          oe = "misplaced-doctype",
          Ee = "end-tag-without-matching-open-element",
          ae = "closing-of-element-with-open-child-elements",
          _e = "disallowed-content-in-noscript-in-head",
          Ae = "open-elements-left-after-eof",
          he = "abandoned-head-element-child",
          ce = "misplaced-start-tag-for-head-element",
          le = "nested-noscript-in-head",
          me = "eof-in-element-that-can-contain-only-text";

      var pe = s;

      var Ne = /*#__PURE__*/function () {
        function Ne() {
          _classCallCheck(this, Ne);

          this.html = null, this.pos = -1, this.lastGapPos = -1, this.lastCharPos = -1, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = 65536;
        }

        _createClass(Ne, [{
          key: "_err",
          value: function _err() {}
        }, {
          key: "_addGap",
          value: function _addGap() {
            this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
          }
        }, {
          key: "_processSurrogate",
          value: function _processSurrogate(e) {
            if (this.pos !== this.lastCharPos) {
              var _t2 = this.html.charCodeAt(this.pos + 1);

              if (T(_t2)) return this.pos++, this._addGap(), o(e, _t2);
            } else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, pe.EOF;

            return this._err(h), e;
          }
        }, {
          key: "dropParsedChunk",
          value: function dropParsedChunk() {
            this.pos > this.bufferWaterline && (this.lastCharPos -= this.pos, this.html = this.html.substring(this.pos), this.pos = 0, this.lastGapPos = -1, this.gapStack = []);
          }
        }, {
          key: "write",
          value: function write(e, t) {
            this.html ? this.html += e : this.html = e, this.lastCharPos = this.html.length - 1, this.endOfChunkHit = !1, this.lastChunkWritten = t;
          }
        }, {
          key: "insertHtmlAtCurrentPos",
          value: function insertHtmlAtCurrentPos(e) {
            this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1, this.html.length), this.lastCharPos = this.html.length - 1, this.endOfChunkHit = !1;
          }
        }, {
          key: "advance",
          value: function advance() {
            if (this.pos++, this.pos > this.lastCharPos) return this.endOfChunkHit = !this.lastChunkWritten, pe.EOF;
            var e = this.html.charCodeAt(this.pos);
            if (this.skipNextNewLine && e === pe.LINE_FEED) return this.skipNextNewLine = !1, this._addGap(), this.advance();
            if (e === pe.CARRIAGE_RETURN) return this.skipNextNewLine = !0, pe.LINE_FEED;
            return this.skipNextNewLine = !1, i(e) && (e = this._processSurrogate(e)), e > 31 && e < 127 || e === pe.LINE_FEED || e === pe.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e;
          }
        }, {
          key: "_checkForProblematicCharacters",
          value: function _checkForProblematicCharacters(e) {
            E(e) ? this._err(_) : a(e) && this._err(A);
          }
        }, {
          key: "retreat",
          value: function retreat() {
            this.pos === this.lastGapPos && (this.lastGapPos = this.gapStack.pop(), this.pos--), this.pos--;
          }
        }]);

        return Ne;
      }(),
          ue = new Uint16Array([4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987, 2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274, 6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386, 11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095, 19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105, 103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1, 59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1, 59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208, 1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112, 232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115, 272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1, 59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115, 117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115, 104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1, 1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349, 56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4, 14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542, 547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454, 1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478, 1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111, 110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105, 110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59, 1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99, 108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115, 59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115, 623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108, 110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868, 4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742, 745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59, 67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1, 8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99, 121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044, 108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97, 102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84, 950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100, 101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3, 59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784, 98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089, 1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102, 116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149, 1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658, 101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114, 111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114, 114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86, 1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1, 8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641, 97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1, 8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479, 114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650, 1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201, 1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99, 5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114, 97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97, 112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3, 55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2, 59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1, 919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115, 1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100, 4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117, 1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984, 99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1, 915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100, 105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3, 55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69, 70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925, 1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807, 114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349, 56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036, 2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1, 711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459, 114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109, 112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245, 2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025, 99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206, 1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101, 5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103, 2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59, 1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265, 2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105, 98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115, 59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349, 56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109, 2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115, 117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1, 1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114, 59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97, 99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121, 59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310, 59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349, 56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585, 2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99, 109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59, 1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4, 3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59, 1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644, 2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1, 8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65, 86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2, 101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119, 59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4, 3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863, 2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1, 8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962, 2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1, 8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115, 103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079, 3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643, 101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114, 59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1, 1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105, 110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99, 121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114, 111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380, 3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101, 59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810, 76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444, 3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4, 2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59, 1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97, 108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116, 115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602, 3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115, 59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101, 59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3, 8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3, 10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741, 3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114, 59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795, 3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59, 69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97, 108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933, 3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930, 101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1, 8931, 4, 3, 98, 99, 112, 3981, 4e3, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834, 8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015, 4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4, 2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4, 4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5, 209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316, 4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2, 105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59, 1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97, 101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59, 1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272, 4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1, 8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216, 1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213, 101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354, 4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1, 9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4, 9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471, 4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595, 105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112, 4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4, 4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69, 83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4, 2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59, 97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349, 56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59, 4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4, 12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704, 4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648, 1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219, 114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695, 4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710, 4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101, 109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59, 1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912, 4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1, 8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101, 99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111, 114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1, 8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117, 97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2, 112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091, 114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198, 5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1, 1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59, 97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100, 105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114, 116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114, 117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367, 1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98, 112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1, 8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1, 8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4, 4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4, 2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108, 59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59, 1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1, 8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839, 101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546, 5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222, 65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4, 2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111, 110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101, 105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1, 920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99, 101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113, 117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100, 101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1, 8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14, 97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823, 5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117, 116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114, 59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2, 105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59, 1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114, 59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114, 5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80, 5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1, 370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996, 6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593, 97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76, 82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933, 105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109, 108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143, 6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987, 121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101, 114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4, 2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231, 97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1, 10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202, 114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100, 97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105, 114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3, 55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339, 114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349, 56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410, 6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116, 101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1, 1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500, 109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477, 6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463, 6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483, 6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59, 1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634, 6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59, 6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584, 6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598, 1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59, 6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5, 224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121, 109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99, 108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100, 103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100, 59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101, 108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101, 59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102, 103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1, 10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59, 118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112, 116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112, 6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111, 112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1, 10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917, 6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116, 121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957, 6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5, 228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755, 110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786, 7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112, 115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1, 1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59, 1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113, 7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107, 59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111, 59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2, 59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1, 1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1, 8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117, 118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281, 111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2, 113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110, 103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112, 108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114, 111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107, 4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117, 97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411, 7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103, 104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451, 59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485, 4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4, 4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510, 7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721, 7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1, 9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1, 9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616, 59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635, 7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1, 9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673, 7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117, 7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524, 105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864, 4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1, 9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474, 59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109, 101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1, 59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503, 109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59, 98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109, 7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101, 7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4, 15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075, 8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114, 7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977, 7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97, 117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745, 65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117, 8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269, 100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115, 8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088, 8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5, 162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608, 4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1, 10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115, 8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187, 8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4, 2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5, 82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1, 8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116, 59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117, 8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400, 111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788, 4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102, 108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110, 116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388, 8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412, 8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114, 59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2, 99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469, 8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111, 116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697, 8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115, 8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1, 8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1, 8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59, 1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114, 118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121, 4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1, 8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101, 110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690, 101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100, 59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1, 8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930, 8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114, 59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224, 101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1, 8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2, 97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864, 8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116, 115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1, 176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115, 104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643, 59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111, 115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116, 59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4, 3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247, 110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4, 2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116, 117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4, 5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102, 9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1, 8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99, 9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1, 8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245, 59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100, 114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662, 4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108, 101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1, 10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755, 9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785, 4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1, 10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2, 59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1, 1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59, 3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59, 9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108, 115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4, 2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544, 9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116, 59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1, 8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2, 103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115, 9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1, 10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013, 4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1, 8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116, 4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97, 101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68, 9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97, 9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783, 9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801, 59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820, 1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59, 1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111, 112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108, 101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2, 105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108, 105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984, 116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2, 112, 114, 1e4, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1, 8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1, 10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55, 10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086, 10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188, 59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534, 4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540, 53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108, 59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268, 10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59, 108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116, 101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114, 101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075, 111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1, 8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1, 10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111, 116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1, 10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349, 56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121, 59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1, 10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4, 2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442, 1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102, 59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458, 109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6, 59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105, 10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1, 10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579, 10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1, 10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923, 108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2, 101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809, 65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724, 10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668, 10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459, 4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1, 8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4, 3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829, 105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3, 55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114, 111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114, 114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863, 10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2, 98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99, 101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977, 10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116, 101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99, 5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99, 108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349, 56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013, 11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749, 102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111, 112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101, 108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1, 8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116, 11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59, 116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99, 101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103, 114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107, 59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211, 11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114, 111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105, 11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266, 11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1, 8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1, 297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4, 6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121, 11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1, 567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511, 114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111, 115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118, 11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311, 59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093, 99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171, 12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114, 116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523, 97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59, 1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606, 11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676, 114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617, 11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59, 11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673, 11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527, 115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1, 10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1, 10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729, 11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99, 4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1, 10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121, 11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108, 59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828, 11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1, 8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1, 10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1, 8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111, 119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959, 11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115, 12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100, 103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59, 111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59, 101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095, 12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113, 4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114, 59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116, 59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1, 8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1, 8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59, 1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59, 1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1, 9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97, 12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303, 12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889, 4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808, 105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421, 12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701, 114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2, 97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101, 102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458, 12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59, 1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59, 101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4, 2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540, 12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4, 2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97, 99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249, 114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818, 59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630, 12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108, 113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668, 12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907, 109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4, 2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1, 9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1, 10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113, 59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025, 13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827, 12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4, 2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1, 8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110, 59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2, 111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618, 111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1, 181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105, 114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995, 12997, 13e3, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2, 99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723, 4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1, 8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3, 59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59, 1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414, 13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214, 14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158, 13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4, 2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235, 13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116, 13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59, 3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3, 10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4, 2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4, 2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352, 13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391, 13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108, 59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112, 59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120, 13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2, 104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1, 8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489, 97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1, 8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563, 13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115, 13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3, 10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3, 65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59, 1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1, 8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116, 13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114, 114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1, 8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3, 8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824, 59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101, 13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102, 59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69, 100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824, 4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59, 118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958, 59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874, 13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3, 8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832, 117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931, 1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114, 59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59, 3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101, 13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036, 14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1, 8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109, 112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109, 4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105, 100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1, 8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124, 14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141, 14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2, 59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183, 14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201, 3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105, 108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236, 1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102, 116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59, 101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59, 101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72, 97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408, 14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115, 104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102, 105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59, 3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2, 65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59, 3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104, 114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598, 101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111, 112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657, 14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115, 14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121, 14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1, 1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861, 108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684, 108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349, 56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59, 14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937, 110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1, 8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101, 59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103, 97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1, 10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759, 14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100, 105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1, 8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111, 14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829, 1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59, 1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1, 59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1, 59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108, 5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105, 108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192, 15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182, 2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986, 109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112, 116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108, 59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105, 109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116, 59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104, 102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107, 15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115, 4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168, 15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786, 4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59, 15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112, 117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673, 110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931, 112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97, 99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120, 59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101, 115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105, 109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59, 1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109, 59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386, 15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1, 8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101, 108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99, 115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485, 15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114, 105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520, 15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116, 59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1, 59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977, 16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97, 114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1, 10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114, 116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3, 8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675, 103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1, 10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754, 15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115, 59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1, 10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781, 105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474, 4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2, 97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101, 115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1, 10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2, 100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088, 4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59, 1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3, 97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1, 8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174, 1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621, 111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100, 117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59, 118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4, 6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119, 4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4, 2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97, 104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111, 117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100, 59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244, 16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265, 16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101, 115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116, 59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99, 104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519, 59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1, 8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109, 101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59, 1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59, 1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116, 117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924, 16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113, 117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496, 16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114, 16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524, 16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547, 16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1, 10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587, 1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634, 16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59, 1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640, 1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110, 117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3, 55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114, 112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116, 4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118, 16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112, 114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858, 4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59, 1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115, 59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116, 16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2, 100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922, 4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938, 16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952, 16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985, 101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99, 115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011, 1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024, 117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1, 8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115, 17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848, 113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106, 17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109, 116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105, 108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59, 102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4, 2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981, 115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69, 100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285, 17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838, 111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1, 10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105, 117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2, 59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842, 59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99, 4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112, 114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4, 3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1, 10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478, 17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178, 1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115, 17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839, 111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1, 10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545, 59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598, 17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580, 17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956, 109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110, 17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1, 10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538, 108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111, 112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957, 17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964, 114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357, 100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981, 114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114, 116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756, 97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2, 99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776, 105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776, 105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868, 17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1, 215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749, 4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927, 17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111, 17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101, 59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100, 101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101, 4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59, 1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796, 105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1, 9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1, 10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116, 18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121, 59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812, 104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250, 18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603, 114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5, 250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1, 1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1, 251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99, 59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622, 59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325, 18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4, 2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365, 1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385, 18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111, 110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434, 18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116, 59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108, 18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119, 115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114, 110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103, 59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561, 18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579, 18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252, 1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857, 18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2, 59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114, 18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695, 18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112, 112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728, 18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104, 18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1, 962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787, 3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803, 18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1, 977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882, 105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108, 114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1, 8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59, 1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98, 112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114, 111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3, 55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955, 65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843, 65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020, 19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032, 19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052, 1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3, 55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768, 99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115, 117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252, 19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97, 19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182, 19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1, 8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221, 19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97, 19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263, 114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117, 115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367, 19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1, 1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59, 19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682, 99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1, 59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441, 19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121, 19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116, 19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121, 59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59, 3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204]);

      var Oe = s,
          Se = r,
          Ce = {
        128: 8364,
        130: 8218,
        131: 402,
        132: 8222,
        133: 8230,
        134: 8224,
        135: 8225,
        136: 710,
        137: 8240,
        138: 352,
        139: 8249,
        140: 338,
        142: 381,
        145: 8216,
        146: 8217,
        147: 8220,
        148: 8221,
        149: 8226,
        150: 8211,
        151: 8212,
        152: 732,
        153: 8482,
        154: 353,
        155: 8250,
        156: 339,
        158: 382,
        159: 376
      },
          de = "DATA_STATE";

      function Re(e) {
        return e === Oe.SPACE || e === Oe.LINE_FEED || e === Oe.TABULATION || e === Oe.FORM_FEED;
      }

      function Ie(e) {
        return e >= Oe.DIGIT_0 && e <= Oe.DIGIT_9;
      }

      function fe(e) {
        return e >= Oe.LATIN_CAPITAL_A && e <= Oe.LATIN_CAPITAL_Z;
      }

      function Me(e) {
        return e >= Oe.LATIN_SMALL_A && e <= Oe.LATIN_SMALL_Z;
      }

      function Le(e) {
        return Me(e) || fe(e);
      }

      function De(e) {
        return Le(e) || Ie(e);
      }

      function ge(e) {
        return e >= Oe.LATIN_CAPITAL_A && e <= Oe.LATIN_CAPITAL_F;
      }

      function Pe(e) {
        return e >= Oe.LATIN_SMALL_A && e <= Oe.LATIN_SMALL_F;
      }

      function ke(e) {
        return e + 32;
      }

      function He(e) {
        return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(e >>> 10 & 1023 | 55296) + String.fromCharCode(56320 | 1023 & e));
      }

      function Ue(e) {
        return String.fromCharCode(ke(e));
      }

      function Fe(e, t) {
        var n = ue[++e];
        var s = ++e,
            r = s + n - 1;

        for (; s <= r;) {
          var _e2 = s + r >>> 1,
              _i8 = ue[_e2];

          if (_i8 < t) s = _e2 + 1;else {
            if (!(_i8 > t)) return ue[_e2 + n];
            r = _e2 - 1;
          }
        }

        return -1;
      }

      var Be = /*#__PURE__*/function () {
        function Be() {
          _classCallCheck(this, Be);

          this.preprocessor = new Ne(), this.tokenQueue = [], this.allowCDATA = !1, this.state = de, this.returnState = "", this.charRefCode = -1, this.tempBuff = [], this.lastStartTagName = "", this.consumedAfterSnapshot = -1, this.active = !1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = null;
        }

        _createClass(Be, [{
          key: "_err",
          value: function _err() {}
        }, {
          key: "_errOnNextCodePoint",
          value: function _errOnNextCodePoint(e) {
            this._consume(), this._err(e), this._unconsume();
          }
        }, {
          key: "getNextToken",
          value: function getNextToken() {
            for (; !this.tokenQueue.length && this.active;) {
              this.consumedAfterSnapshot = 0;

              var _e3 = this._consume();

              this._ensureHibernation() || this[this.state](_e3);
            }

            return this.tokenQueue.shift();
          }
        }, {
          key: "write",
          value: function write(e, t) {
            this.active = !0, this.preprocessor.write(e, t);
          }
        }, {
          key: "insertHtmlAtCurrentPos",
          value: function insertHtmlAtCurrentPos(e) {
            this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e);
          }
        }, {
          key: "_ensureHibernation",
          value: function _ensureHibernation() {
            if (this.preprocessor.endOfChunkHit) {
              for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) {
                this.preprocessor.retreat();
              }

              return this.active = !1, this.tokenQueue.push({
                type: Be.HIBERNATION_TOKEN
              }), !0;
            }

            return !1;
          }
        }, {
          key: "_consume",
          value: function _consume() {
            return this.consumedAfterSnapshot++, this.preprocessor.advance();
          }
        }, {
          key: "_unconsume",
          value: function _unconsume() {
            this.consumedAfterSnapshot--, this.preprocessor.retreat();
          }
        }, {
          key: "_reconsumeInState",
          value: function _reconsumeInState(e) {
            this.state = e, this._unconsume();
          }
        }, {
          key: "_consumeSequenceIfMatch",
          value: function _consumeSequenceIfMatch(e, t, n) {
            var s = 0,
                r = !0;
            var i = e.length;
            var T = 0,
                o = t,
                E = void 0;

            for (; T < i; T++) {
              if (T > 0 && (o = this._consume(), s++), o === Oe.EOF) {
                r = !1;
                break;
              }

              if (E = e[T], o !== E && (n || o !== ke(E))) {
                r = !1;
                break;
              }
            }

            if (!r) for (; s--;) {
              this._unconsume();
            }
            return r;
          }
        }, {
          key: "_isTempBufferEqualToScriptString",
          value: function _isTempBufferEqualToScriptString() {
            if (this.tempBuff.length !== Se.SCRIPT_STRING.length) return !1;

            for (var _e4 = 0; _e4 < this.tempBuff.length; _e4++) {
              if (this.tempBuff[_e4] !== Se.SCRIPT_STRING[_e4]) return !1;
            }

            return !0;
          }
        }, {
          key: "_createStartTagToken",
          value: function _createStartTagToken() {
            this.currentToken = {
              type: Be.START_TAG_TOKEN,
              tagName: "",
              selfClosing: !1,
              ackSelfClosing: !1,
              attrs: []
            };
          }
        }, {
          key: "_createEndTagToken",
          value: function _createEndTagToken() {
            this.currentToken = {
              type: Be.END_TAG_TOKEN,
              tagName: "",
              selfClosing: !1,
              attrs: []
            };
          }
        }, {
          key: "_createCommentToken",
          value: function _createCommentToken() {
            this.currentToken = {
              type: Be.COMMENT_TOKEN,
              data: ""
            };
          }
        }, {
          key: "_createDoctypeToken",
          value: function _createDoctypeToken(e) {
            this.currentToken = {
              type: Be.DOCTYPE_TOKEN,
              name: e,
              forceQuirks: !1,
              publicId: null,
              systemId: null
            };
          }
        }, {
          key: "_createCharacterToken",
          value: function _createCharacterToken(e, t) {
            this.currentCharacterToken = {
              type: e,
              chars: t
            };
          }
        }, {
          key: "_createEOFToken",
          value: function _createEOFToken() {
            this.currentToken = {
              type: Be.EOF_TOKEN
            };
          }
        }, {
          key: "_createAttr",
          value: function _createAttr(e) {
            this.currentAttr = {
              name: e,
              value: ""
            };
          }
        }, {
          key: "_leaveAttrName",
          value: function _leaveAttrName(e) {
            null === Be.getTokenAttr(this.currentToken, this.currentAttr.name) ? this.currentToken.attrs.push(this.currentAttr) : this._err(re), this.state = e;
          }
        }, {
          key: "_leaveAttrValue",
          value: function _leaveAttrValue(e) {
            this.state = e;
          }
        }, {
          key: "_emitCurrentToken",
          value: function _emitCurrentToken() {
            this._emitCurrentCharacterToken();

            var e = this.currentToken;
            this.currentToken = null, e.type === Be.START_TAG_TOKEN ? this.lastStartTagName = e.tagName : e.type === Be.END_TAG_TOKEN && (e.attrs.length > 0 && this._err(l), e.selfClosing && this._err(m)), this.tokenQueue.push(e);
          }
        }, {
          key: "_emitCurrentCharacterToken",
          value: function _emitCurrentCharacterToken() {
            this.currentCharacterToken && (this.tokenQueue.push(this.currentCharacterToken), this.currentCharacterToken = null);
          }
        }, {
          key: "_emitEOFToken",
          value: function _emitEOFToken() {
            this._createEOFToken(), this._emitCurrentToken();
          }
        }, {
          key: "_appendCharToCurrentCharacterToken",
          value: function _appendCharToCurrentCharacterToken(e, t) {
            this.currentCharacterToken && this.currentCharacterToken.type !== e && this._emitCurrentCharacterToken(), this.currentCharacterToken ? this.currentCharacterToken.chars += t : this._createCharacterToken(e, t);
          }
        }, {
          key: "_emitCodePoint",
          value: function _emitCodePoint(e) {
            var t = Be.CHARACTER_TOKEN;
            Re(e) ? t = Be.WHITESPACE_CHARACTER_TOKEN : e === Oe.NULL && (t = Be.NULL_CHARACTER_TOKEN), this._appendCharToCurrentCharacterToken(t, He(e));
          }
        }, {
          key: "_emitSeveralCodePoints",
          value: function _emitSeveralCodePoints(e) {
            for (var _t3 = 0; _t3 < e.length; _t3++) {
              this._emitCodePoint(e[_t3]);
            }
          }
        }, {
          key: "_emitChars",
          value: function _emitChars(e) {
            this._appendCharToCurrentCharacterToken(Be.CHARACTER_TOKEN, e);
          }
        }, {
          key: "_matchNamedCharacterReference",
          value: function _matchNamedCharacterReference(e) {
            var t = null,
                n = 1,
                s = Fe(0, e);

            for (this.tempBuff.push(e); s > -1;) {
              var _e5 = ue[s],
                  _r = _e5 < 7;

              _r && 1 & _e5 && (t = 2 & _e5 ? [ue[++s], ue[++s]] : [ue[++s]], n = 0);

              var _i9 = this._consume();

              if (this.tempBuff.push(_i9), n++, _i9 === Oe.EOF) break;
              s = _r ? 4 & _e5 ? Fe(s, _i9) : -1 : _i9 === _e5 ? ++s : -1;
            }

            for (; n--;) {
              this.tempBuff.pop(), this._unconsume();
            }

            return t;
          }
        }, {
          key: "_isCharacterReferenceInAttribute",
          value: function _isCharacterReferenceInAttribute() {
            return "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE" === this.returnState || "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE" === this.returnState || "ATTRIBUTE_VALUE_UNQUOTED_STATE" === this.returnState;
          }
        }, {
          key: "_isCharacterReferenceAttributeQuirk",
          value: function _isCharacterReferenceAttributeQuirk(e) {
            if (!e && this._isCharacterReferenceInAttribute()) {
              var _e6 = this._consume();

              return this._unconsume(), _e6 === Oe.EQUALS_SIGN || De(_e6);
            }

            return !1;
          }
        }, {
          key: "_flushCodePointsConsumedAsCharacterReference",
          value: function _flushCodePointsConsumedAsCharacterReference() {
            if (this._isCharacterReferenceInAttribute()) for (var _e7 = 0; _e7 < this.tempBuff.length; _e7++) {
              this.currentAttr.value += He(this.tempBuff[_e7]);
            } else this._emitSeveralCodePoints(this.tempBuff);
            this.tempBuff = [];
          }
        }, {
          key: de,
          value: function value(e) {
            this.preprocessor.dropParsedChunk(), e === Oe.LESS_THAN_SIGN ? this.state = "TAG_OPEN_STATE" : e === Oe.AMPERSAND ? (this.returnState = de, this.state = "CHARACTER_REFERENCE_STATE") : e === Oe.NULL ? (this._err(N), this._emitCodePoint(e)) : e === Oe.EOF ? this._emitEOFToken() : this._emitCodePoint(e);
          }
        }, {
          key: "RCDATA_STATE",
          value: function RCDATA_STATE(e) {
            this.preprocessor.dropParsedChunk(), e === Oe.AMPERSAND ? (this.returnState = "RCDATA_STATE", this.state = "CHARACTER_REFERENCE_STATE") : e === Oe.LESS_THAN_SIGN ? this.state = "RCDATA_LESS_THAN_SIGN_STATE" : e === Oe.NULL ? (this._err(N), this._emitChars(n)) : e === Oe.EOF ? this._emitEOFToken() : this._emitCodePoint(e);
          }
        }, {
          key: "RAWTEXT_STATE",
          value: function RAWTEXT_STATE(e) {
            this.preprocessor.dropParsedChunk(), e === Oe.LESS_THAN_SIGN ? this.state = "RAWTEXT_LESS_THAN_SIGN_STATE" : e === Oe.NULL ? (this._err(N), this._emitChars(n)) : e === Oe.EOF ? this._emitEOFToken() : this._emitCodePoint(e);
          }
        }, {
          key: "SCRIPT_DATA_STATE",
          value: function SCRIPT_DATA_STATE(e) {
            this.preprocessor.dropParsedChunk(), e === Oe.LESS_THAN_SIGN ? this.state = "SCRIPT_DATA_LESS_THAN_SIGN_STATE" : e === Oe.NULL ? (this._err(N), this._emitChars(n)) : e === Oe.EOF ? this._emitEOFToken() : this._emitCodePoint(e);
          }
        }, {
          key: "PLAINTEXT_STATE",
          value: function PLAINTEXT_STATE(e) {
            this.preprocessor.dropParsedChunk(), e === Oe.NULL ? (this._err(N), this._emitChars(n)) : e === Oe.EOF ? this._emitEOFToken() : this._emitCodePoint(e);
          }
        }, {
          key: "TAG_OPEN_STATE",
          value: function TAG_OPEN_STATE(e) {
            e === Oe.EXCLAMATION_MARK ? this.state = "MARKUP_DECLARATION_OPEN_STATE" : e === Oe.SOLIDUS ? this.state = "END_TAG_OPEN_STATE" : Le(e) ? (this._createStartTagToken(), this._reconsumeInState("TAG_NAME_STATE")) : e === Oe.QUESTION_MARK ? (this._err(u), this._createCommentToken(), this._reconsumeInState("BOGUS_COMMENT_STATE")) : e === Oe.EOF ? (this._err(L), this._emitChars("<"), this._emitEOFToken()) : (this._err(O), this._emitChars("<"), this._reconsumeInState(de));
          }
        }, {
          key: "END_TAG_OPEN_STATE",
          value: function END_TAG_OPEN_STATE(e) {
            Le(e) ? (this._createEndTagToken(), this._reconsumeInState("TAG_NAME_STATE")) : e === Oe.GREATER_THAN_SIGN ? (this._err(C), this.state = de) : e === Oe.EOF ? (this._err(L), this._emitChars("</"), this._emitEOFToken()) : (this._err(O), this._createCommentToken(), this._reconsumeInState("BOGUS_COMMENT_STATE"));
          }
        }, {
          key: "TAG_NAME_STATE",
          value: function TAG_NAME_STATE(e) {
            Re(e) ? this.state = "BEFORE_ATTRIBUTE_NAME_STATE" : e === Oe.SOLIDUS ? this.state = "SELF_CLOSING_START_TAG_STATE" : e === Oe.GREATER_THAN_SIGN ? (this.state = de, this._emitCurrentToken()) : fe(e) ? this.currentToken.tagName += Ue(e) : e === Oe.NULL ? (this._err(N), this.currentToken.tagName += n) : e === Oe.EOF ? (this._err(D), this._emitEOFToken()) : this.currentToken.tagName += He(e);
          }
        }, {
          key: "RCDATA_LESS_THAN_SIGN_STATE",
          value: function RCDATA_LESS_THAN_SIGN_STATE(e) {
            e === Oe.SOLIDUS ? (this.tempBuff = [], this.state = "RCDATA_END_TAG_OPEN_STATE") : (this._emitChars("<"), this._reconsumeInState("RCDATA_STATE"));
          }
        }, {
          key: "RCDATA_END_TAG_OPEN_STATE",
          value: function RCDATA_END_TAG_OPEN_STATE(e) {
            Le(e) ? (this._createEndTagToken(), this._reconsumeInState("RCDATA_END_TAG_NAME_STATE")) : (this._emitChars("</"), this._reconsumeInState("RCDATA_STATE"));
          }
        }, {
          key: "RCDATA_END_TAG_NAME_STATE",
          value: function RCDATA_END_TAG_NAME_STATE(e) {
            if (fe(e)) this.currentToken.tagName += Ue(e), this.tempBuff.push(e);else if (Me(e)) this.currentToken.tagName += He(e), this.tempBuff.push(e);else {
              if (this.lastStartTagName === this.currentToken.tagName) {
                if (Re(e)) return void (this.state = "BEFORE_ATTRIBUTE_NAME_STATE");
                if (e === Oe.SOLIDUS) return void (this.state = "SELF_CLOSING_START_TAG_STATE");
                if (e === Oe.GREATER_THAN_SIGN) return this.state = de, void this._emitCurrentToken();
              }

              this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("RCDATA_STATE");
            }
          }
        }, {
          key: "RAWTEXT_LESS_THAN_SIGN_STATE",
          value: function RAWTEXT_LESS_THAN_SIGN_STATE(e) {
            e === Oe.SOLIDUS ? (this.tempBuff = [], this.state = "RAWTEXT_END_TAG_OPEN_STATE") : (this._emitChars("<"), this._reconsumeInState("RAWTEXT_STATE"));
          }
        }, {
          key: "RAWTEXT_END_TAG_OPEN_STATE",
          value: function RAWTEXT_END_TAG_OPEN_STATE(e) {
            Le(e) ? (this._createEndTagToken(), this._reconsumeInState("RAWTEXT_END_TAG_NAME_STATE")) : (this._emitChars("</"), this._reconsumeInState("RAWTEXT_STATE"));
          }
        }, {
          key: "RAWTEXT_END_TAG_NAME_STATE",
          value: function RAWTEXT_END_TAG_NAME_STATE(e) {
            if (fe(e)) this.currentToken.tagName += Ue(e), this.tempBuff.push(e);else if (Me(e)) this.currentToken.tagName += He(e), this.tempBuff.push(e);else {
              if (this.lastStartTagName === this.currentToken.tagName) {
                if (Re(e)) return void (this.state = "BEFORE_ATTRIBUTE_NAME_STATE");
                if (e === Oe.SOLIDUS) return void (this.state = "SELF_CLOSING_START_TAG_STATE");
                if (e === Oe.GREATER_THAN_SIGN) return this._emitCurrentToken(), void (this.state = de);
              }

              this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("RAWTEXT_STATE");
            }
          }
        }, {
          key: "SCRIPT_DATA_LESS_THAN_SIGN_STATE",
          value: function SCRIPT_DATA_LESS_THAN_SIGN_STATE(e) {
            e === Oe.SOLIDUS ? (this.tempBuff = [], this.state = "SCRIPT_DATA_END_TAG_OPEN_STATE") : e === Oe.EXCLAMATION_MARK ? (this.state = "SCRIPT_DATA_ESCAPE_START_STATE", this._emitChars("<!")) : (this._emitChars("<"), this._reconsumeInState("SCRIPT_DATA_STATE"));
          }
        }, {
          key: "SCRIPT_DATA_END_TAG_OPEN_STATE",
          value: function SCRIPT_DATA_END_TAG_OPEN_STATE(e) {
            Le(e) ? (this._createEndTagToken(), this._reconsumeInState("SCRIPT_DATA_END_TAG_NAME_STATE")) : (this._emitChars("</"), this._reconsumeInState("SCRIPT_DATA_STATE"));
          }
        }, {
          key: "SCRIPT_DATA_END_TAG_NAME_STATE",
          value: function SCRIPT_DATA_END_TAG_NAME_STATE(e) {
            if (fe(e)) this.currentToken.tagName += Ue(e), this.tempBuff.push(e);else if (Me(e)) this.currentToken.tagName += He(e), this.tempBuff.push(e);else {
              if (this.lastStartTagName === this.currentToken.tagName) {
                if (Re(e)) return void (this.state = "BEFORE_ATTRIBUTE_NAME_STATE");
                if (e === Oe.SOLIDUS) return void (this.state = "SELF_CLOSING_START_TAG_STATE");
                if (e === Oe.GREATER_THAN_SIGN) return this._emitCurrentToken(), void (this.state = de);
              }

              this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("SCRIPT_DATA_STATE");
            }
          }
        }, {
          key: "SCRIPT_DATA_ESCAPE_START_STATE",
          value: function SCRIPT_DATA_ESCAPE_START_STATE(e) {
            e === Oe.HYPHEN_MINUS ? (this.state = "SCRIPT_DATA_ESCAPE_START_DASH_STATE", this._emitChars("-")) : this._reconsumeInState("SCRIPT_DATA_STATE");
          }
        }, {
          key: "SCRIPT_DATA_ESCAPE_START_DASH_STATE",
          value: function SCRIPT_DATA_ESCAPE_START_DASH_STATE(e) {
            e === Oe.HYPHEN_MINUS ? (this.state = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE", this._emitChars("-")) : this._reconsumeInState("SCRIPT_DATA_STATE");
          }
        }, {
          key: "SCRIPT_DATA_ESCAPED_STATE",
          value: function SCRIPT_DATA_ESCAPED_STATE(e) {
            e === Oe.HYPHEN_MINUS ? (this.state = "SCRIPT_DATA_ESCAPED_DASH_STATE", this._emitChars("-")) : e === Oe.LESS_THAN_SIGN ? this.state = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE" : e === Oe.NULL ? (this._err(N), this._emitChars(n)) : e === Oe.EOF ? (this._err(v), this._emitEOFToken()) : this._emitCodePoint(e);
          }
        }, {
          key: "SCRIPT_DATA_ESCAPED_DASH_STATE",
          value: function SCRIPT_DATA_ESCAPED_DASH_STATE(e) {
            e === Oe.HYPHEN_MINUS ? (this.state = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE", this._emitChars("-")) : e === Oe.LESS_THAN_SIGN ? this.state = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE" : e === Oe.NULL ? (this._err(N), this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitChars(n)) : e === Oe.EOF ? (this._err(v), this._emitEOFToken()) : (this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitCodePoint(e));
          }
        }, {
          key: "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE",
          value: function SCRIPT_DATA_ESCAPED_DASH_DASH_STATE(e) {
            e === Oe.HYPHEN_MINUS ? this._emitChars("-") : e === Oe.LESS_THAN_SIGN ? this.state = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE" : e === Oe.GREATER_THAN_SIGN ? (this.state = "SCRIPT_DATA_STATE", this._emitChars(">")) : e === Oe.NULL ? (this._err(N), this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitChars(n)) : e === Oe.EOF ? (this._err(v), this._emitEOFToken()) : (this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitCodePoint(e));
          }
        }, {
          key: "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE",
          value: function SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE(e) {
            e === Oe.SOLIDUS ? (this.tempBuff = [], this.state = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE") : Le(e) ? (this.tempBuff = [], this._emitChars("<"), this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE")) : (this._emitChars("<"), this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE"));
          }
        }, {
          key: "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE",
          value: function SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE(e) {
            Le(e) ? (this._createEndTagToken(), this._reconsumeInState("SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE")) : (this._emitChars("</"), this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE"));
          }
        }, {
          key: "SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE",
          value: function SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE(e) {
            if (fe(e)) this.currentToken.tagName += Ue(e), this.tempBuff.push(e);else if (Me(e)) this.currentToken.tagName += He(e), this.tempBuff.push(e);else {
              if (this.lastStartTagName === this.currentToken.tagName) {
                if (Re(e)) return void (this.state = "BEFORE_ATTRIBUTE_NAME_STATE");
                if (e === Oe.SOLIDUS) return void (this.state = "SELF_CLOSING_START_TAG_STATE");
                if (e === Oe.GREATER_THAN_SIGN) return this._emitCurrentToken(), void (this.state = de);
              }

              this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE");
            }
          }
        }, {
          key: "SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE",
          value: function SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE(e) {
            Re(e) || e === Oe.SOLIDUS || e === Oe.GREATER_THAN_SIGN ? (this.state = this._isTempBufferEqualToScriptString() ? "SCRIPT_DATA_DOUBLE_ESCAPED_STATE" : "SCRIPT_DATA_ESCAPED_STATE", this._emitCodePoint(e)) : fe(e) ? (this.tempBuff.push(ke(e)), this._emitCodePoint(e)) : Me(e) ? (this.tempBuff.push(e), this._emitCodePoint(e)) : this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE");
          }
        }, {
          key: "SCRIPT_DATA_DOUBLE_ESCAPED_STATE",
          value: function SCRIPT_DATA_DOUBLE_ESCAPED_STATE(e) {
            e === Oe.HYPHEN_MINUS ? (this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE", this._emitChars("-")) : e === Oe.LESS_THAN_SIGN ? (this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", this._emitChars("<")) : e === Oe.NULL ? (this._err(N), this._emitChars(n)) : e === Oe.EOF ? (this._err(v), this._emitEOFToken()) : this._emitCodePoint(e);
          }
        }, {
          key: "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE",
          value: function SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE(e) {
            e === Oe.HYPHEN_MINUS ? (this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE", this._emitChars("-")) : e === Oe.LESS_THAN_SIGN ? (this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", this._emitChars("<")) : e === Oe.NULL ? (this._err(N), this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitChars(n)) : e === Oe.EOF ? (this._err(v), this._emitEOFToken()) : (this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitCodePoint(e));
          }
        }, {
          key: "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE",
          value: function SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE(e) {
            e === Oe.HYPHEN_MINUS ? this._emitChars("-") : e === Oe.LESS_THAN_SIGN ? (this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", this._emitChars("<")) : e === Oe.GREATER_THAN_SIGN ? (this.state = "SCRIPT_DATA_STATE", this._emitChars(">")) : e === Oe.NULL ? (this._err(N), this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitChars(n)) : e === Oe.EOF ? (this._err(v), this._emitEOFToken()) : (this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitCodePoint(e));
          }
        }, {
          key: "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE",
          value: function SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE(e) {
            e === Oe.SOLIDUS ? (this.tempBuff = [], this.state = "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE", this._emitChars("/")) : this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPED_STATE");
          }
        }, {
          key: "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE",
          value: function SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE(e) {
            Re(e) || e === Oe.SOLIDUS || e === Oe.GREATER_THAN_SIGN ? (this.state = this._isTempBufferEqualToScriptString() ? "SCRIPT_DATA_ESCAPED_STATE" : "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitCodePoint(e)) : fe(e) ? (this.tempBuff.push(ke(e)), this._emitCodePoint(e)) : Me(e) ? (this.tempBuff.push(e), this._emitCodePoint(e)) : this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPED_STATE");
          }
        }, {
          key: "BEFORE_ATTRIBUTE_NAME_STATE",
          value: function BEFORE_ATTRIBUTE_NAME_STATE(e) {
            Re(e) || (e === Oe.SOLIDUS || e === Oe.GREATER_THAN_SIGN || e === Oe.EOF ? this._reconsumeInState("AFTER_ATTRIBUTE_NAME_STATE") : e === Oe.EQUALS_SIGN ? (this._err(S), this._createAttr("="), this.state = "ATTRIBUTE_NAME_STATE") : (this._createAttr(""), this._reconsumeInState("ATTRIBUTE_NAME_STATE")));
          }
        }, {
          key: "ATTRIBUTE_NAME_STATE",
          value: function ATTRIBUTE_NAME_STATE(e) {
            Re(e) || e === Oe.SOLIDUS || e === Oe.GREATER_THAN_SIGN || e === Oe.EOF ? (this._leaveAttrName("AFTER_ATTRIBUTE_NAME_STATE"), this._unconsume()) : e === Oe.EQUALS_SIGN ? this._leaveAttrName("BEFORE_ATTRIBUTE_VALUE_STATE") : fe(e) ? this.currentAttr.name += Ue(e) : e === Oe.QUOTATION_MARK || e === Oe.APOSTROPHE || e === Oe.LESS_THAN_SIGN ? (this._err(d), this.currentAttr.name += He(e)) : e === Oe.NULL ? (this._err(N), this.currentAttr.name += n) : this.currentAttr.name += He(e);
          }
        }, {
          key: "AFTER_ATTRIBUTE_NAME_STATE",
          value: function AFTER_ATTRIBUTE_NAME_STATE(e) {
            Re(e) || (e === Oe.SOLIDUS ? this.state = "SELF_CLOSING_START_TAG_STATE" : e === Oe.EQUALS_SIGN ? this.state = "BEFORE_ATTRIBUTE_VALUE_STATE" : e === Oe.GREATER_THAN_SIGN ? (this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._err(D), this._emitEOFToken()) : (this._createAttr(""), this._reconsumeInState("ATTRIBUTE_NAME_STATE")));
          }
        }, {
          key: "BEFORE_ATTRIBUTE_VALUE_STATE",
          value: function BEFORE_ATTRIBUTE_VALUE_STATE(e) {
            Re(e) || (e === Oe.QUOTATION_MARK ? this.state = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE" : e === Oe.APOSTROPHE ? this.state = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE" : e === Oe.GREATER_THAN_SIGN ? (this._err(g), this.state = de, this._emitCurrentToken()) : this._reconsumeInState("ATTRIBUTE_VALUE_UNQUOTED_STATE"));
          }
        }, {
          key: "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE",
          value: function ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE(e) {
            e === Oe.QUOTATION_MARK ? this.state = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE" : e === Oe.AMPERSAND ? (this.returnState = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE", this.state = "CHARACTER_REFERENCE_STATE") : e === Oe.NULL ? (this._err(N), this.currentAttr.value += n) : e === Oe.EOF ? (this._err(D), this._emitEOFToken()) : this.currentAttr.value += He(e);
          }
        }, {
          key: "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE",
          value: function ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE(e) {
            e === Oe.APOSTROPHE ? this.state = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE" : e === Oe.AMPERSAND ? (this.returnState = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE", this.state = "CHARACTER_REFERENCE_STATE") : e === Oe.NULL ? (this._err(N), this.currentAttr.value += n) : e === Oe.EOF ? (this._err(D), this._emitEOFToken()) : this.currentAttr.value += He(e);
          }
        }, {
          key: "ATTRIBUTE_VALUE_UNQUOTED_STATE",
          value: function ATTRIBUTE_VALUE_UNQUOTED_STATE(e) {
            Re(e) ? this._leaveAttrValue("BEFORE_ATTRIBUTE_NAME_STATE") : e === Oe.AMPERSAND ? (this.returnState = "ATTRIBUTE_VALUE_UNQUOTED_STATE", this.state = "CHARACTER_REFERENCE_STATE") : e === Oe.GREATER_THAN_SIGN ? (this._leaveAttrValue(de), this._emitCurrentToken()) : e === Oe.NULL ? (this._err(N), this.currentAttr.value += n) : e === Oe.QUOTATION_MARK || e === Oe.APOSTROPHE || e === Oe.LESS_THAN_SIGN || e === Oe.EQUALS_SIGN || e === Oe.GRAVE_ACCENT ? (this._err(M), this.currentAttr.value += He(e)) : e === Oe.EOF ? (this._err(D), this._emitEOFToken()) : this.currentAttr.value += He(e);
          }
        }, {
          key: "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE",
          value: function AFTER_ATTRIBUTE_VALUE_QUOTED_STATE(e) {
            Re(e) ? this._leaveAttrValue("BEFORE_ATTRIBUTE_NAME_STATE") : e === Oe.SOLIDUS ? this._leaveAttrValue("SELF_CLOSING_START_TAG_STATE") : e === Oe.GREATER_THAN_SIGN ? (this._leaveAttrValue(de), this._emitCurrentToken()) : e === Oe.EOF ? (this._err(D), this._emitEOFToken()) : (this._err(P), this._reconsumeInState("BEFORE_ATTRIBUTE_NAME_STATE"));
          }
        }, {
          key: "SELF_CLOSING_START_TAG_STATE",
          value: function SELF_CLOSING_START_TAG_STATE(e) {
            e === Oe.GREATER_THAN_SIGN ? (this.currentToken.selfClosing = !0, this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._err(D), this._emitEOFToken()) : (this._err(p), this._reconsumeInState("BEFORE_ATTRIBUTE_NAME_STATE"));
          }
        }, {
          key: "BOGUS_COMMENT_STATE",
          value: function BOGUS_COMMENT_STATE(e) {
            e === Oe.GREATER_THAN_SIGN ? (this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._emitCurrentToken(), this._emitEOFToken()) : e === Oe.NULL ? (this._err(N), this.currentToken.data += n) : this.currentToken.data += He(e);
          }
        }, {
          key: "MARKUP_DECLARATION_OPEN_STATE",
          value: function MARKUP_DECLARATION_OPEN_STATE(e) {
            this._consumeSequenceIfMatch(Se.DASH_DASH_STRING, e, !0) ? (this._createCommentToken(), this.state = "COMMENT_START_STATE") : this._consumeSequenceIfMatch(Se.DOCTYPE_STRING, e, !1) ? this.state = "DOCTYPE_STATE" : this._consumeSequenceIfMatch(Se.CDATA_START_STRING, e, !0) ? this.allowCDATA ? this.state = "CDATA_SECTION_STATE" : (this._err(x), this._createCommentToken(), this.currentToken.data = "[CDATA[", this.state = "BOGUS_COMMENT_STATE") : this._ensureHibernation() || (this._err(y), this._createCommentToken(), this._reconsumeInState("BOGUS_COMMENT_STATE"));
          }
        }, {
          key: "COMMENT_START_STATE",
          value: function COMMENT_START_STATE(e) {
            e === Oe.HYPHEN_MINUS ? this.state = "COMMENT_START_DASH_STATE" : e === Oe.GREATER_THAN_SIGN ? (this._err(X), this.state = de, this._emitCurrentToken()) : this._reconsumeInState("COMMENT_STATE");
          }
        }, {
          key: "COMMENT_START_DASH_STATE",
          value: function COMMENT_START_DASH_STATE(e) {
            e === Oe.HYPHEN_MINUS ? this.state = "COMMENT_END_STATE" : e === Oe.GREATER_THAN_SIGN ? (this._err(X), this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._err(W), this._emitCurrentToken(), this._emitEOFToken()) : (this.currentToken.data += "-", this._reconsumeInState("COMMENT_STATE"));
          }
        }, {
          key: "COMMENT_STATE",
          value: function COMMENT_STATE(e) {
            e === Oe.HYPHEN_MINUS ? this.state = "COMMENT_END_DASH_STATE" : e === Oe.LESS_THAN_SIGN ? (this.currentToken.data += "<", this.state = "COMMENT_LESS_THAN_SIGN_STATE") : e === Oe.NULL ? (this._err(N), this.currentToken.data += n) : e === Oe.EOF ? (this._err(W), this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.data += He(e);
          }
        }, {
          key: "COMMENT_LESS_THAN_SIGN_STATE",
          value: function COMMENT_LESS_THAN_SIGN_STATE(e) {
            e === Oe.EXCLAMATION_MARK ? (this.currentToken.data += "!", this.state = "COMMENT_LESS_THAN_SIGN_BANG_STATE") : e === Oe.LESS_THAN_SIGN ? this.currentToken.data += "!" : this._reconsumeInState("COMMENT_STATE");
          }
        }, {
          key: "COMMENT_LESS_THAN_SIGN_BANG_STATE",
          value: function COMMENT_LESS_THAN_SIGN_BANG_STATE(e) {
            e === Oe.HYPHEN_MINUS ? this.state = "COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE" : this._reconsumeInState("COMMENT_STATE");
          }
        }, {
          key: "COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE",
          value: function COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE(e) {
            e === Oe.HYPHEN_MINUS ? this.state = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE" : this._reconsumeInState("COMMENT_END_DASH_STATE");
          }
        }, {
          key: "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE",
          value: function COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE(e) {
            e !== Oe.GREATER_THAN_SIGN && e !== Oe.EOF && this._err(Q), this._reconsumeInState("COMMENT_END_STATE");
          }
        }, {
          key: "COMMENT_END_DASH_STATE",
          value: function COMMENT_END_DASH_STATE(e) {
            e === Oe.HYPHEN_MINUS ? this.state = "COMMENT_END_STATE" : e === Oe.EOF ? (this._err(W), this._emitCurrentToken(), this._emitEOFToken()) : (this.currentToken.data += "-", this._reconsumeInState("COMMENT_STATE"));
          }
        }, {
          key: "COMMENT_END_STATE",
          value: function COMMENT_END_STATE(e) {
            e === Oe.GREATER_THAN_SIGN ? (this.state = de, this._emitCurrentToken()) : e === Oe.EXCLAMATION_MARK ? this.state = "COMMENT_END_BANG_STATE" : e === Oe.HYPHEN_MINUS ? this.currentToken.data += "-" : e === Oe.EOF ? (this._err(W), this._emitCurrentToken(), this._emitEOFToken()) : (this.currentToken.data += "--", this._reconsumeInState("COMMENT_STATE"));
          }
        }, {
          key: "COMMENT_END_BANG_STATE",
          value: function COMMENT_END_BANG_STATE(e) {
            e === Oe.HYPHEN_MINUS ? (this.currentToken.data += "--!", this.state = "COMMENT_END_DASH_STATE") : e === Oe.GREATER_THAN_SIGN ? (this._err(V), this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._err(W), this._emitCurrentToken(), this._emitEOFToken()) : (this.currentToken.data += "--!", this._reconsumeInState("COMMENT_STATE"));
          }
        }, {
          key: "DOCTYPE_STATE",
          value: function DOCTYPE_STATE(e) {
            Re(e) ? this.state = "BEFORE_DOCTYPE_NAME_STATE" : e === Oe.GREATER_THAN_SIGN ? this._reconsumeInState("BEFORE_DOCTYPE_NAME_STATE") : e === Oe.EOF ? (this._err(w), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(te), this._reconsumeInState("BEFORE_DOCTYPE_NAME_STATE"));
          }
        }, {
          key: "BEFORE_DOCTYPE_NAME_STATE",
          value: function BEFORE_DOCTYPE_NAME_STATE(e) {
            Re(e) || (fe(e) ? (this._createDoctypeToken(Ue(e)), this.state = "DOCTYPE_NAME_STATE") : e === Oe.NULL ? (this._err(N), this._createDoctypeToken(n), this.state = "DOCTYPE_NAME_STATE") : e === Oe.GREATER_THAN_SIGN ? (this._err(ne), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = de) : e === Oe.EOF ? (this._err(w), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._createDoctypeToken(He(e)), this.state = "DOCTYPE_NAME_STATE"));
          }
        }, {
          key: "DOCTYPE_NAME_STATE",
          value: function DOCTYPE_NAME_STATE(e) {
            Re(e) ? this.state = "AFTER_DOCTYPE_NAME_STATE" : e === Oe.GREATER_THAN_SIGN ? (this.state = de, this._emitCurrentToken()) : fe(e) ? this.currentToken.name += Ue(e) : e === Oe.NULL ? (this._err(N), this.currentToken.name += n) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.name += He(e);
          }
        }, {
          key: "AFTER_DOCTYPE_NAME_STATE",
          value: function AFTER_DOCTYPE_NAME_STATE(e) {
            Re(e) || (e === Oe.GREATER_THAN_SIGN ? (this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this._consumeSequenceIfMatch(Se.PUBLIC_STRING, e, !1) ? this.state = "AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE" : this._consumeSequenceIfMatch(Se.SYSTEM_STRING, e, !1) ? this.state = "AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE" : this._ensureHibernation() || (this._err(se), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")));
          }
        }, {
          key: "AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE",
          value: function AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE(e) {
            Re(e) ? this.state = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE" : e === Oe.QUOTATION_MARK ? (this._err(k), this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE") : e === Oe.APOSTROPHE ? (this._err(k), this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE") : e === Oe.GREATER_THAN_SIGN ? (this._err(G), this.currentToken.forceQuirks = !0, this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(F), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE"));
          }
        }, {
          key: "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE",
          value: function BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE(e) {
            Re(e) || (e === Oe.QUOTATION_MARK ? (this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE") : e === Oe.APOSTROPHE ? (this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE") : e === Oe.GREATER_THAN_SIGN ? (this._err(G), this.currentToken.forceQuirks = !0, this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(F), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")));
          }
        }, {
          key: "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE",
          value: function DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE(e) {
            e === Oe.QUOTATION_MARK ? this.state = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE" : e === Oe.NULL ? (this._err(N), this.currentToken.publicId += n) : e === Oe.GREATER_THAN_SIGN ? (this._err(b), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = de) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.publicId += He(e);
          }
        }, {
          key: "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE",
          value: function DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE(e) {
            e === Oe.APOSTROPHE ? this.state = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE" : e === Oe.NULL ? (this._err(N), this.currentToken.publicId += n) : e === Oe.GREATER_THAN_SIGN ? (this._err(b), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = de) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.publicId += He(e);
          }
        }, {
          key: "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE",
          value: function AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE(e) {
            Re(e) ? this.state = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE" : e === Oe.GREATER_THAN_SIGN ? (this.state = de, this._emitCurrentToken()) : e === Oe.QUOTATION_MARK ? (this._err(H), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE") : e === Oe.APOSTROPHE ? (this._err(H), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE") : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(B), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE"));
          }
        }, {
          key: "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE",
          value: function BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE(e) {
            Re(e) || (e === Oe.GREATER_THAN_SIGN ? (this._emitCurrentToken(), this.state = de) : e === Oe.QUOTATION_MARK ? (this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE") : e === Oe.APOSTROPHE ? (this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE") : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(B), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")));
          }
        }, {
          key: "AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE",
          value: function AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE(e) {
            Re(e) ? this.state = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE" : e === Oe.QUOTATION_MARK ? (this._err(U), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE") : e === Oe.APOSTROPHE ? (this._err(U), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE") : e === Oe.GREATER_THAN_SIGN ? (this._err(K), this.currentToken.forceQuirks = !0, this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(B), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE"));
          }
        }, {
          key: "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE",
          value: function BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE(e) {
            Re(e) || (e === Oe.QUOTATION_MARK ? (this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE") : e === Oe.APOSTROPHE ? (this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE") : e === Oe.GREATER_THAN_SIGN ? (this._err(K), this.currentToken.forceQuirks = !0, this.state = de, this._emitCurrentToken()) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(B), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")));
          }
        }, {
          key: "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE",
          value: function DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE(e) {
            e === Oe.QUOTATION_MARK ? this.state = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE" : e === Oe.NULL ? (this._err(N), this.currentToken.systemId += n) : e === Oe.GREATER_THAN_SIGN ? (this._err(Y), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = de) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.systemId += He(e);
          }
        }, {
          key: "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE",
          value: function DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE(e) {
            e === Oe.APOSTROPHE ? this.state = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE" : e === Oe.NULL ? (this._err(N), this.currentToken.systemId += n) : e === Oe.GREATER_THAN_SIGN ? (this._err(Y), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = de) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.systemId += He(e);
          }
        }, {
          key: "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE",
          value: function AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE(e) {
            Re(e) || (e === Oe.GREATER_THAN_SIGN ? (this._emitCurrentToken(), this.state = de) : e === Oe.EOF ? (this._err(w), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(f), this._reconsumeInState("BOGUS_DOCTYPE_STATE")));
          }
        }, {
          key: "BOGUS_DOCTYPE_STATE",
          value: function BOGUS_DOCTYPE_STATE(e) {
            e === Oe.GREATER_THAN_SIGN ? (this._emitCurrentToken(), this.state = de) : e === Oe.NULL ? this._err(N) : e === Oe.EOF && (this._emitCurrentToken(), this._emitEOFToken());
          }
        }, {
          key: "CDATA_SECTION_STATE",
          value: function CDATA_SECTION_STATE(e) {
            e === Oe.RIGHT_SQUARE_BRACKET ? this.state = "CDATA_SECTION_BRACKET_STATE" : e === Oe.EOF ? (this._err(j), this._emitEOFToken()) : this._emitCodePoint(e);
          }
        }, {
          key: "CDATA_SECTION_BRACKET_STATE",
          value: function CDATA_SECTION_BRACKET_STATE(e) {
            e === Oe.RIGHT_SQUARE_BRACKET ? this.state = "CDATA_SECTION_END_STATE" : (this._emitChars("]"), this._reconsumeInState("CDATA_SECTION_STATE"));
          }
        }, {
          key: "CDATA_SECTION_END_STATE",
          value: function CDATA_SECTION_END_STATE(e) {
            e === Oe.GREATER_THAN_SIGN ? this.state = de : e === Oe.RIGHT_SQUARE_BRACKET ? this._emitChars("]") : (this._emitChars("]]"), this._reconsumeInState("CDATA_SECTION_STATE"));
          }
        }, {
          key: "CHARACTER_REFERENCE_STATE",
          value: function CHARACTER_REFERENCE_STATE(e) {
            this.tempBuff = [Oe.AMPERSAND], e === Oe.NUMBER_SIGN ? (this.tempBuff.push(e), this.state = "NUMERIC_CHARACTER_REFERENCE_STATE") : De(e) ? this._reconsumeInState("NAMED_CHARACTER_REFERENCE_STATE") : (this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState));
          }
        }, {
          key: "NAMED_CHARACTER_REFERENCE_STATE",
          value: function NAMED_CHARACTER_REFERENCE_STATE(e) {
            var t = this._matchNamedCharacterReference(e);

            if (this._ensureHibernation()) this.tempBuff = [Oe.AMPERSAND];else if (t) {
              var _e8 = this.tempBuff[this.tempBuff.length - 1] === Oe.SEMICOLON;

              this._isCharacterReferenceAttributeQuirk(_e8) || (_e8 || this._errOnNextCodePoint(I), this.tempBuff = t), this._flushCodePointsConsumedAsCharacterReference(), this.state = this.returnState;
            } else this._flushCodePointsConsumedAsCharacterReference(), this.state = "AMBIGUOS_AMPERSAND_STATE";
          }
        }, {
          key: "AMBIGUOS_AMPERSAND_STATE",
          value: function AMBIGUOS_AMPERSAND_STATE(e) {
            De(e) ? this._isCharacterReferenceInAttribute() ? this.currentAttr.value += He(e) : this._emitCodePoint(e) : (e === Oe.SEMICOLON && this._err(R), this._reconsumeInState(this.returnState));
          }
        }, {
          key: "NUMERIC_CHARACTER_REFERENCE_STATE",
          value: function NUMERIC_CHARACTER_REFERENCE_STATE(e) {
            this.charRefCode = 0, e === Oe.LATIN_SMALL_X || e === Oe.LATIN_CAPITAL_X ? (this.tempBuff.push(e), this.state = "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE") : this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_START_STATE");
          }
        }, {
          key: "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE",
          value: function HEXADEMICAL_CHARACTER_REFERENCE_START_STATE(e) {
            !function (e) {
              return Ie(e) || ge(e) || Pe(e);
            }(e) ? (this._err(z), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)) : this._reconsumeInState("HEXADEMICAL_CHARACTER_REFERENCE_STATE");
          }
        }, {
          key: "DECIMAL_CHARACTER_REFERENCE_START_STATE",
          value: function DECIMAL_CHARACTER_REFERENCE_START_STATE(e) {
            Ie(e) ? this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_STATE") : (this._err(z), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState));
          }
        }, {
          key: "HEXADEMICAL_CHARACTER_REFERENCE_STATE",
          value: function HEXADEMICAL_CHARACTER_REFERENCE_STATE(e) {
            ge(e) ? this.charRefCode = 16 * this.charRefCode + e - 55 : Pe(e) ? this.charRefCode = 16 * this.charRefCode + e - 87 : Ie(e) ? this.charRefCode = 16 * this.charRefCode + e - 48 : e === Oe.SEMICOLON ? this.state = "NUMERIC_CHARACTER_REFERENCE_END_STATE" : (this._err(I), this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE"));
          }
        }, {
          key: "DECIMAL_CHARACTER_REFERENCE_STATE",
          value: function DECIMAL_CHARACTER_REFERENCE_STATE(e) {
            Ie(e) ? this.charRefCode = 10 * this.charRefCode + e - 48 : e === Oe.SEMICOLON ? this.state = "NUMERIC_CHARACTER_REFERENCE_END_STATE" : (this._err(I), this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE"));
          }
        }, {
          key: "NUMERIC_CHARACTER_REFERENCE_END_STATE",
          value: function NUMERIC_CHARACTER_REFERENCE_END_STATE() {
            if (this.charRefCode === Oe.NULL) this._err(q), this.charRefCode = Oe.REPLACEMENT_CHARACTER;else if (this.charRefCode > 1114111) this._err(Z), this.charRefCode = Oe.REPLACEMENT_CHARACTER;else if (i(this.charRefCode)) this._err(J), this.charRefCode = Oe.REPLACEMENT_CHARACTER;else if (a(this.charRefCode)) this._err(ee);else if (E(this.charRefCode) || this.charRefCode === Oe.CARRIAGE_RETURN) {
              this._err($);

              var _e9 = Ce[this.charRefCode];
              _e9 && (this.charRefCode = _e9);
            }
            this.tempBuff = [this.charRefCode], this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState);
          }
        }]);

        return Be;
      }();

      Be.CHARACTER_TOKEN = "CHARACTER_TOKEN", Be.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN", Be.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN", Be.START_TAG_TOKEN = "START_TAG_TOKEN", Be.END_TAG_TOKEN = "END_TAG_TOKEN", Be.COMMENT_TOKEN = "COMMENT_TOKEN", Be.DOCTYPE_TOKEN = "DOCTYPE_TOKEN", Be.EOF_TOKEN = "EOF_TOKEN", Be.HIBERNATION_TOKEN = "HIBERNATION_TOKEN", Be.MODE = {
        DATA: de,
        RCDATA: "RCDATA_STATE",
        RAWTEXT: "RAWTEXT_STATE",
        SCRIPT_DATA: "SCRIPT_DATA_STATE",
        PLAINTEXT: "PLAINTEXT_STATE"
      }, Be.getTokenAttr = function (e, t) {
        for (var _n2 = e.attrs.length - 1; _n2 >= 0; _n2--) {
          if (e.attrs[_n2].name === t) return e.attrs[_n2].value;
        }

        return null;
      };
      var Ge = Be;

      function Ke(e, t) {
        return e(t = {
          exports: {}
        }, t.exports), t.exports;
      }

      var be = Ke(function (e, t) {
        var _n$HTML, _n$MATHML, _n$SVG, _t$SPECIAL_ELEMENTS;

        var n = t.NAMESPACES = {
          HTML: "http://www.w3.org/1999/xhtml",
          MATHML: "http://www.w3.org/1998/Math/MathML",
          SVG: "http://www.w3.org/2000/svg",
          XLINK: "http://www.w3.org/1999/xlink",
          XML: "http://www.w3.org/XML/1998/namespace",
          XMLNS: "http://www.w3.org/2000/xmlns/"
        };
        t.ATTRS = {
          TYPE: "type",
          ACTION: "action",
          ENCODING: "encoding",
          PROMPT: "prompt",
          NAME: "name",
          COLOR: "color",
          FACE: "face",
          SIZE: "size"
        }, t.DOCUMENT_MODE = {
          NO_QUIRKS: "no-quirks",
          QUIRKS: "quirks",
          LIMITED_QUIRKS: "limited-quirks"
        };
        var s = t.TAG_NAMES = {
          A: "a",
          ADDRESS: "address",
          ANNOTATION_XML: "annotation-xml",
          APPLET: "applet",
          AREA: "area",
          ARTICLE: "article",
          ASIDE: "aside",
          B: "b",
          BASE: "base",
          BASEFONT: "basefont",
          BGSOUND: "bgsound",
          BIG: "big",
          BLOCKQUOTE: "blockquote",
          BODY: "body",
          BR: "br",
          BUTTON: "button",
          CAPTION: "caption",
          CENTER: "center",
          CODE: "code",
          COL: "col",
          COLGROUP: "colgroup",
          DD: "dd",
          DESC: "desc",
          DETAILS: "details",
          DIALOG: "dialog",
          DIR: "dir",
          DIV: "div",
          DL: "dl",
          DT: "dt",
          EM: "em",
          EMBED: "embed",
          FIELDSET: "fieldset",
          FIGCAPTION: "figcaption",
          FIGURE: "figure",
          FONT: "font",
          FOOTER: "footer",
          FOREIGN_OBJECT: "foreignObject",
          FORM: "form",
          FRAME: "frame",
          FRAMESET: "frameset",
          H1: "h1",
          H2: "h2",
          H3: "h3",
          H4: "h4",
          H5: "h5",
          H6: "h6",
          HEAD: "head",
          HEADER: "header",
          HGROUP: "hgroup",
          HR: "hr",
          HTML: "html",
          I: "i",
          IMG: "img",
          IMAGE: "image",
          INPUT: "input",
          IFRAME: "iframe",
          KEYGEN: "keygen",
          LABEL: "label",
          LI: "li",
          LINK: "link",
          LISTING: "listing",
          MAIN: "main",
          MALIGNMARK: "malignmark",
          MARQUEE: "marquee",
          MATH: "math",
          MENU: "menu",
          META: "meta",
          MGLYPH: "mglyph",
          MI: "mi",
          MO: "mo",
          MN: "mn",
          MS: "ms",
          MTEXT: "mtext",
          NAV: "nav",
          NOBR: "nobr",
          NOFRAMES: "noframes",
          NOEMBED: "noembed",
          NOSCRIPT: "noscript",
          OBJECT: "object",
          OL: "ol",
          OPTGROUP: "optgroup",
          OPTION: "option",
          P: "p",
          PARAM: "param",
          PLAINTEXT: "plaintext",
          PRE: "pre",
          RB: "rb",
          RP: "rp",
          RT: "rt",
          RTC: "rtc",
          RUBY: "ruby",
          S: "s",
          SCRIPT: "script",
          SECTION: "section",
          SELECT: "select",
          SOURCE: "source",
          SMALL: "small",
          SPAN: "span",
          STRIKE: "strike",
          STRONG: "strong",
          STYLE: "style",
          SUB: "sub",
          SUMMARY: "summary",
          SUP: "sup",
          TABLE: "table",
          TBODY: "tbody",
          TEMPLATE: "template",
          TEXTAREA: "textarea",
          TFOOT: "tfoot",
          TD: "td",
          TH: "th",
          THEAD: "thead",
          TITLE: "title",
          TR: "tr",
          TRACK: "track",
          TT: "tt",
          U: "u",
          UL: "ul",
          SVG: "svg",
          VAR: "var",
          WBR: "wbr",
          XMP: "xmp"
        };
        t.SPECIAL_ELEMENTS = (_t$SPECIAL_ELEMENTS = {}, _defineProperty(_t$SPECIAL_ELEMENTS, n.HTML, (_n$HTML = {}, _defineProperty(_n$HTML, s.ADDRESS, !0), _defineProperty(_n$HTML, s.APPLET, !0), _defineProperty(_n$HTML, s.AREA, !0), _defineProperty(_n$HTML, s.ARTICLE, !0), _defineProperty(_n$HTML, s.ASIDE, !0), _defineProperty(_n$HTML, s.BASE, !0), _defineProperty(_n$HTML, s.BASEFONT, !0), _defineProperty(_n$HTML, s.BGSOUND, !0), _defineProperty(_n$HTML, s.BLOCKQUOTE, !0), _defineProperty(_n$HTML, s.BODY, !0), _defineProperty(_n$HTML, s.BR, !0), _defineProperty(_n$HTML, s.BUTTON, !0), _defineProperty(_n$HTML, s.CAPTION, !0), _defineProperty(_n$HTML, s.CENTER, !0), _defineProperty(_n$HTML, s.COL, !0), _defineProperty(_n$HTML, s.COLGROUP, !0), _defineProperty(_n$HTML, s.DD, !0), _defineProperty(_n$HTML, s.DETAILS, !0), _defineProperty(_n$HTML, s.DIR, !0), _defineProperty(_n$HTML, s.DIV, !0), _defineProperty(_n$HTML, s.DL, !0), _defineProperty(_n$HTML, s.DT, !0), _defineProperty(_n$HTML, s.EMBED, !0), _defineProperty(_n$HTML, s.FIELDSET, !0), _defineProperty(_n$HTML, s.FIGCAPTION, !0), _defineProperty(_n$HTML, s.FIGURE, !0), _defineProperty(_n$HTML, s.FOOTER, !0), _defineProperty(_n$HTML, s.FORM, !0), _defineProperty(_n$HTML, s.FRAME, !0), _defineProperty(_n$HTML, s.FRAMESET, !0), _defineProperty(_n$HTML, s.H1, !0), _defineProperty(_n$HTML, s.H2, !0), _defineProperty(_n$HTML, s.H3, !0), _defineProperty(_n$HTML, s.H4, !0), _defineProperty(_n$HTML, s.H5, !0), _defineProperty(_n$HTML, s.H6, !0), _defineProperty(_n$HTML, s.HEAD, !0), _defineProperty(_n$HTML, s.HEADER, !0), _defineProperty(_n$HTML, s.HGROUP, !0), _defineProperty(_n$HTML, s.HR, !0), _defineProperty(_n$HTML, s.HTML, !0), _defineProperty(_n$HTML, s.IFRAME, !0), _defineProperty(_n$HTML, s.IMG, !0), _defineProperty(_n$HTML, s.INPUT, !0), _defineProperty(_n$HTML, s.LI, !0), _defineProperty(_n$HTML, s.LINK, !0), _defineProperty(_n$HTML, s.LISTING, !0), _defineProperty(_n$HTML, s.MAIN, !0), _defineProperty(_n$HTML, s.MARQUEE, !0), _defineProperty(_n$HTML, s.MENU, !0), _defineProperty(_n$HTML, s.META, !0), _defineProperty(_n$HTML, s.NAV, !0), _defineProperty(_n$HTML, s.NOEMBED, !0), _defineProperty(_n$HTML, s.NOFRAMES, !0), _defineProperty(_n$HTML, s.NOSCRIPT, !0), _defineProperty(_n$HTML, s.OBJECT, !0), _defineProperty(_n$HTML, s.OL, !0), _defineProperty(_n$HTML, s.P, !0), _defineProperty(_n$HTML, s.PARAM, !0), _defineProperty(_n$HTML, s.PLAINTEXT, !0), _defineProperty(_n$HTML, s.PRE, !0), _defineProperty(_n$HTML, s.SCRIPT, !0), _defineProperty(_n$HTML, s.SECTION, !0), _defineProperty(_n$HTML, s.SELECT, !0), _defineProperty(_n$HTML, s.SOURCE, !0), _defineProperty(_n$HTML, s.STYLE, !0), _defineProperty(_n$HTML, s.SUMMARY, !0), _defineProperty(_n$HTML, s.TABLE, !0), _defineProperty(_n$HTML, s.TBODY, !0), _defineProperty(_n$HTML, s.TD, !0), _defineProperty(_n$HTML, s.TEMPLATE, !0), _defineProperty(_n$HTML, s.TEXTAREA, !0), _defineProperty(_n$HTML, s.TFOOT, !0), _defineProperty(_n$HTML, s.TH, !0), _defineProperty(_n$HTML, s.THEAD, !0), _defineProperty(_n$HTML, s.TITLE, !0), _defineProperty(_n$HTML, s.TR, !0), _defineProperty(_n$HTML, s.TRACK, !0), _defineProperty(_n$HTML, s.UL, !0), _defineProperty(_n$HTML, s.WBR, !0), _defineProperty(_n$HTML, s.XMP, !0), _n$HTML)), _defineProperty(_t$SPECIAL_ELEMENTS, n.MATHML, (_n$MATHML = {}, _defineProperty(_n$MATHML, s.MI, !0), _defineProperty(_n$MATHML, s.MO, !0), _defineProperty(_n$MATHML, s.MN, !0), _defineProperty(_n$MATHML, s.MS, !0), _defineProperty(_n$MATHML, s.MTEXT, !0), _defineProperty(_n$MATHML, s.ANNOTATION_XML, !0), _n$MATHML)), _defineProperty(_t$SPECIAL_ELEMENTS, n.SVG, (_n$SVG = {}, _defineProperty(_n$SVG, s.TITLE, !0), _defineProperty(_n$SVG, s.FOREIGN_OBJECT, !0), _defineProperty(_n$SVG, s.DESC, !0), _n$SVG)), _t$SPECIAL_ELEMENTS);
      });
      var Ye = be.TAG_NAMES,
          xe = be.NAMESPACES;

      function ye(e) {
        switch (e.length) {
          case 1:
            return e === Ye.P;

          case 2:
            return e === Ye.RB || e === Ye.RP || e === Ye.RT || e === Ye.DD || e === Ye.DT || e === Ye.LI;

          case 3:
            return e === Ye.RTC;

          case 6:
            return e === Ye.OPTION;

          case 8:
            return e === Ye.OPTGROUP;
        }

        return !1;
      }

      function ve(e) {
        switch (e.length) {
          case 1:
            return e === Ye.P;

          case 2:
            return e === Ye.RB || e === Ye.RP || e === Ye.RT || e === Ye.DD || e === Ye.DT || e === Ye.LI || e === Ye.TD || e === Ye.TH || e === Ye.TR;

          case 3:
            return e === Ye.RTC;

          case 5:
            return e === Ye.TBODY || e === Ye.TFOOT || e === Ye.THEAD;

          case 6:
            return e === Ye.OPTION;

          case 7:
            return e === Ye.CAPTION;

          case 8:
            return e === Ye.OPTGROUP || e === Ye.COLGROUP;
        }

        return !1;
      }

      function we(e, t) {
        switch (e.length) {
          case 2:
            if (e === Ye.TD || e === Ye.TH) return t === xe.HTML;
            if (e === Ye.MI || e === Ye.MO || e === Ye.MN || e === Ye.MS) return t === xe.MATHML;
            break;

          case 4:
            if (e === Ye.HTML) return t === xe.HTML;
            if (e === Ye.DESC) return t === xe.SVG;
            break;

          case 5:
            if (e === Ye.TABLE) return t === xe.HTML;
            if (e === Ye.MTEXT) return t === xe.MATHML;
            if (e === Ye.TITLE) return t === xe.SVG;
            break;

          case 6:
            return (e === Ye.APPLET || e === Ye.OBJECT) && t === xe.HTML;

          case 7:
            return (e === Ye.CAPTION || e === Ye.MARQUEE) && t === xe.HTML;

          case 8:
            return e === Ye.TEMPLATE && t === xe.HTML;

          case 13:
            return e === Ye.FOREIGN_OBJECT && t === xe.SVG;

          case 14:
            return e === Ye.ANNOTATION_XML && t === xe.MATHML;
        }

        return !1;
      }

      var Qe = /*#__PURE__*/function () {
        function Qe(e, t) {
          _classCallCheck(this, Qe);

          this.stackTop = -1, this.items = [], this.current = e, this.currentTagName = null, this.currentTmplContent = null, this.tmplCount = 0, this.treeAdapter = t;
        }

        _createClass(Qe, [{
          key: "_indexOf",
          value: function _indexOf(e) {
            var t = -1;

            for (var _n3 = this.stackTop; _n3 >= 0; _n3--) {
              if (this.items[_n3] === e) {
                t = _n3;
                break;
              }
            }

            return t;
          }
        }, {
          key: "_isInTemplate",
          value: function _isInTemplate() {
            return this.currentTagName === Ye.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === xe.HTML;
          }
        }, {
          key: "_updateCurrentElement",
          value: function _updateCurrentElement() {
            this.current = this.items[this.stackTop], this.currentTagName = this.current && this.treeAdapter.getTagName(this.current), this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
          }
        }, {
          key: "push",
          value: function push(e) {
            this.items[++this.stackTop] = e, this._updateCurrentElement(), this._isInTemplate() && this.tmplCount++;
          }
        }, {
          key: "pop",
          value: function pop() {
            this.stackTop--, this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this._updateCurrentElement();
          }
        }, {
          key: "replace",
          value: function replace(e, t) {
            var n = this._indexOf(e);

            this.items[n] = t, n === this.stackTop && this._updateCurrentElement();
          }
        }, {
          key: "insertAfter",
          value: function insertAfter(e, t) {
            var n = this._indexOf(e) + 1;
            this.items.splice(n, 0, t), n === ++this.stackTop && this._updateCurrentElement();
          }
        }, {
          key: "popUntilTagNamePopped",
          value: function popUntilTagNamePopped(e) {
            for (; this.stackTop > -1;) {
              var _t4 = this.currentTagName,
                  _n4 = this.treeAdapter.getNamespaceURI(this.current);

              if (this.pop(), _t4 === e && _n4 === xe.HTML) break;
            }
          }
        }, {
          key: "popUntilElementPopped",
          value: function popUntilElementPopped(e) {
            for (; this.stackTop > -1;) {
              var _t5 = this.current;
              if (this.pop(), _t5 === e) break;
            }
          }
        }, {
          key: "popUntilNumberedHeaderPopped",
          value: function popUntilNumberedHeaderPopped() {
            for (; this.stackTop > -1;) {
              var _e10 = this.currentTagName,
                  _t6 = this.treeAdapter.getNamespaceURI(this.current);

              if (this.pop(), _e10 === Ye.H1 || _e10 === Ye.H2 || _e10 === Ye.H3 || _e10 === Ye.H4 || _e10 === Ye.H5 || _e10 === Ye.H6 && _t6 === xe.HTML) break;
            }
          }
        }, {
          key: "popUntilTableCellPopped",
          value: function popUntilTableCellPopped() {
            for (; this.stackTop > -1;) {
              var _e11 = this.currentTagName,
                  _t7 = this.treeAdapter.getNamespaceURI(this.current);

              if (this.pop(), _e11 === Ye.TD || _e11 === Ye.TH && _t7 === xe.HTML) break;
            }
          }
        }, {
          key: "popAllUpToHtmlElement",
          value: function popAllUpToHtmlElement() {
            this.stackTop = 0, this._updateCurrentElement();
          }
        }, {
          key: "clearBackToTableContext",
          value: function clearBackToTableContext() {
            for (; this.currentTagName !== Ye.TABLE && this.currentTagName !== Ye.TEMPLATE && this.currentTagName !== Ye.HTML || this.treeAdapter.getNamespaceURI(this.current) !== xe.HTML;) {
              this.pop();
            }
          }
        }, {
          key: "clearBackToTableBodyContext",
          value: function clearBackToTableBodyContext() {
            for (; this.currentTagName !== Ye.TBODY && this.currentTagName !== Ye.TFOOT && this.currentTagName !== Ye.THEAD && this.currentTagName !== Ye.TEMPLATE && this.currentTagName !== Ye.HTML || this.treeAdapter.getNamespaceURI(this.current) !== xe.HTML;) {
              this.pop();
            }
          }
        }, {
          key: "clearBackToTableRowContext",
          value: function clearBackToTableRowContext() {
            for (; this.currentTagName !== Ye.TR && this.currentTagName !== Ye.TEMPLATE && this.currentTagName !== Ye.HTML || this.treeAdapter.getNamespaceURI(this.current) !== xe.HTML;) {
              this.pop();
            }
          }
        }, {
          key: "remove",
          value: function remove(e) {
            for (var _t8 = this.stackTop; _t8 >= 0; _t8--) {
              if (this.items[_t8] === e) {
                this.items.splice(_t8, 1), this.stackTop--, this._updateCurrentElement();
                break;
              }
            }
          }
        }, {
          key: "tryPeekProperlyNestedBodyElement",
          value: function tryPeekProperlyNestedBodyElement() {
            var e = this.items[1];
            return e && this.treeAdapter.getTagName(e) === Ye.BODY ? e : null;
          }
        }, {
          key: "contains",
          value: function contains(e) {
            return this._indexOf(e) > -1;
          }
        }, {
          key: "getCommonAncestor",
          value: function getCommonAncestor(e) {
            var t = this._indexOf(e);

            return --t >= 0 ? this.items[t] : null;
          }
        }, {
          key: "isRootHtmlElementCurrent",
          value: function isRootHtmlElementCurrent() {
            return 0 === this.stackTop && this.currentTagName === Ye.HTML;
          }
        }, {
          key: "hasInScope",
          value: function hasInScope(e) {
            for (var _t9 = this.stackTop; _t9 >= 0; _t9--) {
              var _n5 = this.treeAdapter.getTagName(this.items[_t9]),
                  _s = this.treeAdapter.getNamespaceURI(this.items[_t9]);

              if (_n5 === e && _s === xe.HTML) return !0;
              if (we(_n5, _s)) return !1;
            }

            return !0;
          }
        }, {
          key: "hasNumberedHeaderInScope",
          value: function hasNumberedHeaderInScope() {
            for (var _e12 = this.stackTop; _e12 >= 0; _e12--) {
              var _t10 = this.treeAdapter.getTagName(this.items[_e12]),
                  _n6 = this.treeAdapter.getNamespaceURI(this.items[_e12]);

              if ((_t10 === Ye.H1 || _t10 === Ye.H2 || _t10 === Ye.H3 || _t10 === Ye.H4 || _t10 === Ye.H5 || _t10 === Ye.H6) && _n6 === xe.HTML) return !0;
              if (we(_t10, _n6)) return !1;
            }

            return !0;
          }
        }, {
          key: "hasInListItemScope",
          value: function hasInListItemScope(e) {
            for (var _t11 = this.stackTop; _t11 >= 0; _t11--) {
              var _n7 = this.treeAdapter.getTagName(this.items[_t11]),
                  _s2 = this.treeAdapter.getNamespaceURI(this.items[_t11]);

              if (_n7 === e && _s2 === xe.HTML) return !0;
              if ((_n7 === Ye.UL || _n7 === Ye.OL) && _s2 === xe.HTML || we(_n7, _s2)) return !1;
            }

            return !0;
          }
        }, {
          key: "hasInButtonScope",
          value: function hasInButtonScope(e) {
            for (var _t12 = this.stackTop; _t12 >= 0; _t12--) {
              var _n8 = this.treeAdapter.getTagName(this.items[_t12]),
                  _s3 = this.treeAdapter.getNamespaceURI(this.items[_t12]);

              if (_n8 === e && _s3 === xe.HTML) return !0;
              if (_n8 === Ye.BUTTON && _s3 === xe.HTML || we(_n8, _s3)) return !1;
            }

            return !0;
          }
        }, {
          key: "hasInTableScope",
          value: function hasInTableScope(e) {
            for (var _t13 = this.stackTop; _t13 >= 0; _t13--) {
              var _n9 = this.treeAdapter.getTagName(this.items[_t13]);

              if (this.treeAdapter.getNamespaceURI(this.items[_t13]) === xe.HTML) {
                if (_n9 === e) return !0;
                if (_n9 === Ye.TABLE || _n9 === Ye.TEMPLATE || _n9 === Ye.HTML) return !1;
              }
            }

            return !0;
          }
        }, {
          key: "hasTableBodyContextInTableScope",
          value: function hasTableBodyContextInTableScope() {
            for (var _e13 = this.stackTop; _e13 >= 0; _e13--) {
              var _t14 = this.treeAdapter.getTagName(this.items[_e13]);

              if (this.treeAdapter.getNamespaceURI(this.items[_e13]) === xe.HTML) {
                if (_t14 === Ye.TBODY || _t14 === Ye.THEAD || _t14 === Ye.TFOOT) return !0;
                if (_t14 === Ye.TABLE || _t14 === Ye.HTML) return !1;
              }
            }

            return !0;
          }
        }, {
          key: "hasInSelectScope",
          value: function hasInSelectScope(e) {
            for (var _t15 = this.stackTop; _t15 >= 0; _t15--) {
              var _n10 = this.treeAdapter.getTagName(this.items[_t15]);

              if (this.treeAdapter.getNamespaceURI(this.items[_t15]) === xe.HTML) {
                if (_n10 === e) return !0;
                if (_n10 !== Ye.OPTION && _n10 !== Ye.OPTGROUP) return !1;
              }
            }

            return !0;
          }
        }, {
          key: "generateImpliedEndTags",
          value: function generateImpliedEndTags() {
            for (; ye(this.currentTagName);) {
              this.pop();
            }
          }
        }, {
          key: "generateImpliedEndTagsThoroughly",
          value: function generateImpliedEndTagsThoroughly() {
            for (; ve(this.currentTagName);) {
              this.pop();
            }
          }
        }, {
          key: "generateImpliedEndTagsWithExclusion",
          value: function generateImpliedEndTagsWithExclusion(e) {
            for (; ye(this.currentTagName) && this.currentTagName !== e;) {
              this.pop();
            }
          }
        }]);

        return Qe;
      }();

      var Xe = /*#__PURE__*/function () {
        function Xe(e) {
          _classCallCheck(this, Xe);

          this.length = 0, this.entries = [], this.treeAdapter = e, this.bookmark = null;
        }

        _createClass(Xe, [{
          key: "_getNoahArkConditionCandidates",
          value: function _getNoahArkConditionCandidates(e) {
            var t = [];

            if (this.length >= 3) {
              var _n11 = this.treeAdapter.getAttrList(e).length,
                  _s4 = this.treeAdapter.getTagName(e),
                  _r2 = this.treeAdapter.getNamespaceURI(e);

              for (var _e14 = this.length - 1; _e14 >= 0; _e14--) {
                var _i10 = this.entries[_e14];
                if (_i10.type === Xe.MARKER_ENTRY) break;

                var _T = _i10.element,
                    _o2 = this.treeAdapter.getAttrList(_T);

                this.treeAdapter.getTagName(_T) === _s4 && this.treeAdapter.getNamespaceURI(_T) === _r2 && _o2.length === _n11 && t.push({
                  idx: _e14,
                  attrs: _o2
                });
              }
            }

            return t.length < 3 ? [] : t;
          }
        }, {
          key: "_ensureNoahArkCondition",
          value: function _ensureNoahArkCondition(e) {
            var t = this._getNoahArkConditionCandidates(e);

            var n = t.length;

            if (n) {
              var _s5 = this.treeAdapter.getAttrList(e),
                  _r3 = _s5.length,
                  _i11 = Object.create(null);

              for (var _e15 = 0; _e15 < _r3; _e15++) {
                var _t16 = _s5[_e15];
                _i11[_t16.name] = _t16.value;
              }

              for (var _e16 = 0; _e16 < _r3; _e16++) {
                for (var _s6 = 0; _s6 < n; _s6++) {
                  var _r4 = t[_s6].attrs[_e16];
                  if (_i11[_r4.name] !== _r4.value && (t.splice(_s6, 1), n--), t.length < 3) return;
                }
              }

              for (var _e17 = n - 1; _e17 >= 2; _e17--) {
                this.entries.splice(t[_e17].idx, 1), this.length--;
              }
            }
          }
        }, {
          key: "insertMarker",
          value: function insertMarker() {
            this.entries.push({
              type: Xe.MARKER_ENTRY
            }), this.length++;
          }
        }, {
          key: "pushElement",
          value: function pushElement(e, t) {
            this._ensureNoahArkCondition(e), this.entries.push({
              type: Xe.ELEMENT_ENTRY,
              element: e,
              token: t
            }), this.length++;
          }
        }, {
          key: "insertElementAfterBookmark",
          value: function insertElementAfterBookmark(e, t) {
            var n = this.length - 1;

            for (; n >= 0 && this.entries[n] !== this.bookmark; n--) {
              ;
            }

            this.entries.splice(n + 1, 0, {
              type: Xe.ELEMENT_ENTRY,
              element: e,
              token: t
            }), this.length++;
          }
        }, {
          key: "removeEntry",
          value: function removeEntry(e) {
            for (var _t17 = this.length - 1; _t17 >= 0; _t17--) {
              if (this.entries[_t17] === e) {
                this.entries.splice(_t17, 1), this.length--;
                break;
              }
            }
          }
        }, {
          key: "clearToLastMarker",
          value: function clearToLastMarker() {
            for (; this.length;) {
              var _e18 = this.entries.pop();

              if (this.length--, _e18.type === Xe.MARKER_ENTRY) break;
            }
          }
        }, {
          key: "getElementEntryInScopeWithTagName",
          value: function getElementEntryInScopeWithTagName(e) {
            for (var _t18 = this.length - 1; _t18 >= 0; _t18--) {
              var _n12 = this.entries[_t18];
              if (_n12.type === Xe.MARKER_ENTRY) return null;
              if (this.treeAdapter.getTagName(_n12.element) === e) return _n12;
            }

            return null;
          }
        }, {
          key: "getElementEntry",
          value: function getElementEntry(e) {
            for (var _t19 = this.length - 1; _t19 >= 0; _t19--) {
              var _n13 = this.entries[_t19];
              if (_n13.type === Xe.ELEMENT_ENTRY && _n13.element === e) return _n13;
            }

            return null;
          }
        }]);

        return Xe;
      }();

      Xe.MARKER_ENTRY = "MARKER_ENTRY", Xe.ELEMENT_ENTRY = "ELEMENT_ENTRY";
      var We = Xe;

      var Ve = /*#__PURE__*/function () {
        function Ve(e) {
          _classCallCheck(this, Ve);

          var t = {},
              n = this._getOverriddenMethods(this, t);

          for (var _i12 = 0, _Object$keys = Object.keys(n); _i12 < _Object$keys.length; _i12++) {
            var _s7 = _Object$keys[_i12];
            "function" == typeof n[_s7] && (t[_s7] = e[_s7], e[_s7] = n[_s7]);
          }
        }

        _createClass(Ve, [{
          key: "_getOverriddenMethods",
          value: function _getOverriddenMethods() {
            throw new Error("Not implemented");
          }
        }]);

        return Ve;
      }();

      Ve.install = function (e, t, n) {
        e.__mixins || (e.__mixins = []);

        for (var _n14 = 0; _n14 < e.__mixins.length; _n14++) {
          if (e.__mixins[_n14].constructor === t) return e.__mixins[_n14];
        }

        var s = new t(e, n);
        return e.__mixins.push(s), s;
      };

      var je = Ve;

      var ze = /*#__PURE__*/function (_je) {
        _inherits(ze, _je);

        var _super4 = _createSuper(ze);

        function ze(e) {
          var _this10;

          _classCallCheck(this, ze);

          _this10 = _super4.call(this, e), _this10.preprocessor = e, _this10.isEol = !1, _this10.lineStartPos = 0, _this10.droppedBufferSize = 0, _this10.offset = 0, _this10.col = 0, _this10.line = 1;
          return _this10;
        }

        _createClass(ze, [{
          key: "_getOverriddenMethods",
          value: function _getOverriddenMethods(e, t) {
            return {
              advance: function advance() {
                var n = this.pos + 1,
                    s = this.html[n];
                return e.isEol && (e.isEol = !1, e.line++, e.lineStartPos = n), ("\n" === s || "\r" === s && "\n" !== this.html[n + 1]) && (e.isEol = !0), e.col = n - e.lineStartPos + 1, e.offset = e.droppedBufferSize + n, t.advance.call(this);
              },
              retreat: function retreat() {
                t.retreat.call(this), e.isEol = !1, e.col = this.pos - e.lineStartPos + 1;
              },
              dropParsedChunk: function dropParsedChunk() {
                var n = this.pos;
                t.dropParsedChunk.call(this);
                var s = n - this.pos;
                e.lineStartPos -= s, e.droppedBufferSize += s, e.offset = e.droppedBufferSize + this.pos;
              }
            };
          }
        }]);

        return ze;
      }(je);

      var qe = /*#__PURE__*/function (_je2) {
        _inherits(qe, _je2);

        var _super5 = _createSuper(qe);

        function qe(e) {
          var _this11;

          _classCallCheck(this, qe);

          _this11 = _super5.call(this, e), _this11.tokenizer = e, _this11.posTracker = je.install(e.preprocessor, ze), _this11.currentAttrLocation = null, _this11.ctLoc = null;
          return _this11;
        }

        _createClass(qe, [{
          key: "_getCurrentLocation",
          value: function _getCurrentLocation() {
            return {
              startLine: this.posTracker.line,
              startCol: this.posTracker.col,
              startOffset: this.posTracker.offset,
              endLine: -1,
              endCol: -1,
              endOffset: -1
            };
          }
        }, {
          key: "_attachCurrentAttrLocationInfo",
          value: function _attachCurrentAttrLocationInfo() {
            this.currentAttrLocation.endLine = this.posTracker.line, this.currentAttrLocation.endCol = this.posTracker.col, this.currentAttrLocation.endOffset = this.posTracker.offset;
            var e = this.tokenizer.currentToken,
                t = this.tokenizer.currentAttr;
            e.location.attrs || (e.location.attrs = Object.create(null)), e.location.attrs[t.name] = this.currentAttrLocation;
          }
        }, {
          key: "_getOverriddenMethods",
          value: function _getOverriddenMethods(e, t) {
            var n = {
              _createStartTagToken: function _createStartTagToken() {
                t._createStartTagToken.call(this), this.currentToken.location = e.ctLoc;
              },
              _createEndTagToken: function _createEndTagToken() {
                t._createEndTagToken.call(this), this.currentToken.location = e.ctLoc;
              },
              _createCommentToken: function _createCommentToken() {
                t._createCommentToken.call(this), this.currentToken.location = e.ctLoc;
              },
              _createDoctypeToken: function _createDoctypeToken(n) {
                t._createDoctypeToken.call(this, n), this.currentToken.location = e.ctLoc;
              },
              _createCharacterToken: function _createCharacterToken(n, s) {
                t._createCharacterToken.call(this, n, s), this.currentCharacterToken.location = e.ctLoc;
              },
              _createEOFToken: function _createEOFToken() {
                t._createEOFToken.call(this), this.currentToken.location = e._getCurrentLocation();
              },
              _createAttr: function _createAttr(n) {
                t._createAttr.call(this, n), e.currentAttrLocation = e._getCurrentLocation();
              },
              _leaveAttrName: function _leaveAttrName(n) {
                t._leaveAttrName.call(this, n), e._attachCurrentAttrLocationInfo();
              },
              _leaveAttrValue: function _leaveAttrValue(n) {
                t._leaveAttrValue.call(this, n), e._attachCurrentAttrLocationInfo();
              },
              _emitCurrentToken: function _emitCurrentToken() {
                var n = this.currentToken.location;
                this.currentCharacterToken && (this.currentCharacterToken.location.endLine = n.startLine, this.currentCharacterToken.location.endCol = n.startCol, this.currentCharacterToken.location.endOffset = n.startOffset), this.currentToken.type === Ge.EOF_TOKEN ? (n.endLine = n.startLine, n.endCol = n.startCol, n.endOffset = n.startOffset) : (n.endLine = e.posTracker.line, n.endCol = e.posTracker.col + 1, n.endOffset = e.posTracker.offset + 1), t._emitCurrentToken.call(this);
              },
              _emitCurrentCharacterToken: function _emitCurrentCharacterToken() {
                var n = this.currentCharacterToken && this.currentCharacterToken.location;
                n && -1 === n.endOffset && (n.endLine = e.posTracker.line, n.endCol = e.posTracker.col, n.endOffset = e.posTracker.offset), t._emitCurrentCharacterToken.call(this);
              }
            };
            return Object.keys(Ge.MODE).forEach(function (s) {
              var r = Ge.MODE[s];

              n[r] = function (n) {
                e.ctLoc = e._getCurrentLocation(), t[r].call(this, n);
              };
            }), n;
          }
        }]);

        return qe;
      }(je);

      var Je = /*#__PURE__*/function (_je3) {
        _inherits(Je, _je3);

        var _super6 = _createSuper(Je);

        function Je(e, t) {
          var _this12;

          _classCallCheck(this, Je);

          _this12 = _super6.call(this, e), _this12.onItemPop = t.onItemPop;
          return _this12;
        }

        _createClass(Je, [{
          key: "_getOverriddenMethods",
          value: function _getOverriddenMethods(e, t) {
            return {
              pop: function pop() {
                e.onItemPop(this.current), t.pop.call(this);
              },
              popAllUpToHtmlElement: function popAllUpToHtmlElement() {
                for (var _t20 = this.stackTop; _t20 > 0; _t20--) {
                  e.onItemPop(this.items[_t20]);
                }

                t.popAllUpToHtmlElement.call(this);
              },
              remove: function remove(n) {
                e.onItemPop(this.current), t.remove.call(this, n);
              }
            };
          }
        }]);

        return Je;
      }(je);

      var Ze = be.TAG_NAMES;

      var $e = /*#__PURE__*/function (_je4) {
        _inherits($e, _je4);

        var _super7 = _createSuper($e);

        function $e(e) {
          var _this13;

          _classCallCheck(this, $e);

          _this13 = _super7.call(this, e), _this13.parser = e, _this13.treeAdapter = _this13.parser.treeAdapter, _this13.posTracker = null, _this13.lastStartTagToken = null, _this13.lastFosterParentingLocation = null, _this13.currentToken = null;
          return _this13;
        }

        _createClass($e, [{
          key: "_setStartLocation",
          value: function _setStartLocation(e) {
            var t = null;
            this.lastStartTagToken && (t = Object.assign({}, this.lastStartTagToken.location), t.startTag = this.lastStartTagToken.location), this.treeAdapter.setNodeSourceCodeLocation(e, t);
          }
        }, {
          key: "_setEndLocation",
          value: function _setEndLocation(e, t) {
            var n = this.treeAdapter.getNodeSourceCodeLocation(e);

            if (n && t.location) {
              var _s8 = t.location,
                  _r5 = this.treeAdapter.getTagName(e);

              t.type === Ge.END_TAG_TOKEN && _r5 === t.tagName ? (n.endTag = Object.assign({}, _s8), n.endLine = _s8.endLine, n.endCol = _s8.endCol, n.endOffset = _s8.endOffset) : (n.endLine = _s8.startLine, n.endCol = _s8.startCol, n.endOffset = _s8.startOffset);
            }
          }
        }, {
          key: "_getOverriddenMethods",
          value: function _getOverriddenMethods(e, t) {
            return {
              _bootstrap: function _bootstrap(n, s) {
                t._bootstrap.call(this, n, s), e.lastStartTagToken = null, e.lastFosterParentingLocation = null, e.currentToken = null;
                var r = je.install(this.tokenizer, qe);
                e.posTracker = r.posTracker, je.install(this.openElements, Je, {
                  onItemPop: function onItemPop(t) {
                    e._setEndLocation(t, e.currentToken);
                  }
                });
              },
              _runParsingLoop: function _runParsingLoop(n) {
                t._runParsingLoop.call(this, n);

                for (var _t21 = this.openElements.stackTop; _t21 >= 0; _t21--) {
                  e._setEndLocation(this.openElements.items[_t21], e.currentToken);
                }
              },
              _processTokenInForeignContent: function _processTokenInForeignContent(n) {
                e.currentToken = n, t._processTokenInForeignContent.call(this, n);
              },
              _processToken: function _processToken(n) {
                if (e.currentToken = n, t._processToken.call(this, n), n.type === Ge.END_TAG_TOKEN && (n.tagName === Ze.HTML || n.tagName === Ze.BODY && this.openElements.hasInScope(Ze.BODY))) for (var _t22 = this.openElements.stackTop; _t22 >= 0; _t22--) {
                  var _s9 = this.openElements.items[_t22];

                  if (this.treeAdapter.getTagName(_s9) === n.tagName) {
                    e._setEndLocation(_s9, n);

                    break;
                  }
                }
              },
              _setDocumentType: function _setDocumentType(e) {
                t._setDocumentType.call(this, e);

                var n = this.treeAdapter.getChildNodes(this.document),
                    s = n.length;

                for (var _t23 = 0; _t23 < s; _t23++) {
                  var _s10 = n[_t23];

                  if (this.treeAdapter.isDocumentTypeNode(_s10)) {
                    this.treeAdapter.setNodeSourceCodeLocation(_s10, e.location);
                    break;
                  }
                }
              },
              _attachElementToTree: function _attachElementToTree(n) {
                e._setStartLocation(n), e.lastStartTagToken = null, t._attachElementToTree.call(this, n);
              },
              _appendElement: function _appendElement(n, s) {
                e.lastStartTagToken = n, t._appendElement.call(this, n, s);
              },
              _insertElement: function _insertElement(n, s) {
                e.lastStartTagToken = n, t._insertElement.call(this, n, s);
              },
              _insertTemplate: function _insertTemplate(n) {
                e.lastStartTagToken = n, t._insertTemplate.call(this, n);
                var s = this.treeAdapter.getTemplateContent(this.openElements.current);
                this.treeAdapter.setNodeSourceCodeLocation(s, null);
              },
              _insertFakeRootElement: function _insertFakeRootElement() {
                t._insertFakeRootElement.call(this), this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null);
              },
              _appendCommentNode: function _appendCommentNode(e, n) {
                t._appendCommentNode.call(this, e, n);

                var s = this.treeAdapter.getChildNodes(n),
                    r = s[s.length - 1];
                this.treeAdapter.setNodeSourceCodeLocation(r, e.location);
              },
              _findFosterParentingLocation: function _findFosterParentingLocation() {
                return e.lastFosterParentingLocation = t._findFosterParentingLocation.call(this), e.lastFosterParentingLocation;
              },
              _insertCharacters: function _insertCharacters(n) {
                t._insertCharacters.call(this, n);

                var s = this._shouldFosterParentOnInsertion(),
                    r = s && e.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current,
                    i = this.treeAdapter.getChildNodes(r),
                    T = s && e.lastFosterParentingLocation.beforeElement ? i.indexOf(e.lastFosterParentingLocation.beforeElement) - 1 : i.length - 1,
                    o = i[T],
                    E = this.treeAdapter.getNodeSourceCodeLocation(o);

                E ? (E.endLine = n.location.endLine, E.endCol = n.location.endCol, E.endOffset = n.location.endOffset) : this.treeAdapter.setNodeSourceCodeLocation(o, n.location);
              }
            };
          }
        }]);

        return $e;
      }(je);

      var et = /*#__PURE__*/function (_je5) {
        _inherits(et, _je5);

        var _super8 = _createSuper(et);

        function et(e, t) {
          var _this14;

          _classCallCheck(this, et);

          _this14 = _super8.call(this, e), _this14.posTracker = null, _this14.onParseError = t.onParseError;
          return _this14;
        }

        _createClass(et, [{
          key: "_setErrorLocation",
          value: function _setErrorLocation(e) {
            e.startLine = e.endLine = this.posTracker.line, e.startCol = e.endCol = this.posTracker.col, e.startOffset = e.endOffset = this.posTracker.offset;
          }
        }, {
          key: "_reportError",
          value: function _reportError(e) {
            var t = {
              code: e,
              startLine: -1,
              startCol: -1,
              startOffset: -1,
              endLine: -1,
              endCol: -1,
              endOffset: -1
            };
            this._setErrorLocation(t), this.onParseError(t);
          }
        }, {
          key: "_getOverriddenMethods",
          value: function _getOverriddenMethods(e) {
            return {
              _err: function _err(t) {
                e._reportError(t);
              }
            };
          }
        }]);

        return et;
      }(je);

      var tt = /*#__PURE__*/function (_et) {
        _inherits(tt, _et);

        var _super9 = _createSuper(tt);

        function tt(e, t) {
          var _this15;

          _classCallCheck(this, tt);

          _this15 = _super9.call(this, e, t), _this15.posTracker = je.install(e, ze), _this15.lastErrOffset = -1;
          return _this15;
        }

        _createClass(tt, [{
          key: "_reportError",
          value: function _reportError(e) {
            this.lastErrOffset !== this.posTracker.offset && (this.lastErrOffset = this.posTracker.offset, _get(_getPrototypeOf(tt.prototype), "_reportError", this).call(this, e));
          }
        }]);

        return tt;
      }(et);

      var nt = /*#__PURE__*/function (_et2) {
        _inherits(nt, _et2);

        var _super10 = _createSuper(nt);

        function nt(e, t) {
          var _this16;

          _classCallCheck(this, nt);

          _this16 = _super10.call(this, e, t);
          var n = je.install(e.preprocessor, tt, t);
          _this16.posTracker = n.posTracker;
          return _this16;
        }

        return nt;
      }(et);

      var st = /*#__PURE__*/function (_et3) {
        _inherits(st, _et3);

        var _super11 = _createSuper(st);

        function st(e, t) {
          var _this17;

          _classCallCheck(this, st);

          _this17 = _super11.call(this, e, t), _this17.opts = t, _this17.ctLoc = null, _this17.locBeforeToken = !1;
          return _this17;
        }

        _createClass(st, [{
          key: "_setErrorLocation",
          value: function _setErrorLocation(e) {
            this.ctLoc && (e.startLine = this.ctLoc.startLine, e.startCol = this.ctLoc.startCol, e.startOffset = this.ctLoc.startOffset, e.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine, e.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol, e.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset);
          }
        }, {
          key: "_getOverriddenMethods",
          value: function _getOverriddenMethods(e, t) {
            return {
              _bootstrap: function _bootstrap(n, s) {
                t._bootstrap.call(this, n, s), je.install(this.tokenizer, nt, e.opts), je.install(this.tokenizer, qe);
              },
              _processInputToken: function _processInputToken(n) {
                e.ctLoc = n.location, t._processInputToken.call(this, n);
              },
              _err: function _err(t, n) {
                e.locBeforeToken = n && n.beforeToken, e._reportError(t);
              }
            };
          }
        }]);

        return st;
      }(et),
          rt = Ke(function (e, t) {
        var n = be.DOCUMENT_MODE;
        t.createDocument = function () {
          return {
            nodeName: "#document",
            mode: n.NO_QUIRKS,
            childNodes: []
          };
        }, t.createDocumentFragment = function () {
          return {
            nodeName: "#document-fragment",
            childNodes: []
          };
        }, t.createElement = function (e, t, n) {
          return {
            nodeName: e,
            tagName: e,
            attrs: n,
            namespaceURI: t,
            childNodes: [],
            parentNode: null
          };
        }, t.createCommentNode = function (e) {
          return {
            nodeName: "#comment",
            data: e,
            parentNode: null
          };
        };

        var s = function s(e) {
          return {
            nodeName: "#text",
            value: e,
            parentNode: null
          };
        },
            r = t.appendChild = function (e, t) {
          e.childNodes.push(t), t.parentNode = e;
        },
            i = t.insertBefore = function (e, t, n) {
          var s = e.childNodes.indexOf(n);
          e.childNodes.splice(s, 0, t), t.parentNode = e;
        };

        t.setTemplateContent = function (e, t) {
          e.content = t;
        }, t.getTemplateContent = function (e) {
          return e.content;
        }, t.setDocumentType = function (e, t, n, s) {
          var i = null;

          for (var _t24 = 0; _t24 < e.childNodes.length; _t24++) {
            if ("#documentType" === e.childNodes[_t24].nodeName) {
              i = e.childNodes[_t24];
              break;
            }
          }

          i ? (i.name = t, i.publicId = n, i.systemId = s) : r(e, {
            nodeName: "#documentType",
            name: t,
            publicId: n,
            systemId: s
          });
        }, t.setDocumentMode = function (e, t) {
          e.mode = t;
        }, t.getDocumentMode = function (e) {
          return e.mode;
        }, t.detachNode = function (e) {
          if (e.parentNode) {
            var _t25 = e.parentNode.childNodes.indexOf(e);

            e.parentNode.childNodes.splice(_t25, 1), e.parentNode = null;
          }
        }, t.insertText = function (e, t) {
          if (e.childNodes.length) {
            var _n15 = e.childNodes[e.childNodes.length - 1];
            if ("#text" === _n15.nodeName) return void (_n15.value += t);
          }

          r(e, s(t));
        }, t.insertTextBefore = function (e, t, n) {
          var r = e.childNodes[e.childNodes.indexOf(n) - 1];
          r && "#text" === r.nodeName ? r.value += t : i(e, s(t), n);
        }, t.adoptAttributes = function (e, t) {
          var n = [];

          for (var _t26 = 0; _t26 < e.attrs.length; _t26++) {
            n.push(e.attrs[_t26].name);
          }

          for (var _s11 = 0; _s11 < t.length; _s11++) {
            -1 === n.indexOf(t[_s11].name) && e.attrs.push(t[_s11]);
          }
        }, t.getFirstChild = function (e) {
          return e.childNodes[0];
        }, t.getChildNodes = function (e) {
          return e.childNodes;
        }, t.getParentNode = function (e) {
          return e.parentNode;
        }, t.getAttrList = function (e) {
          return e.attrs;
        }, t.getTagName = function (e) {
          return e.tagName;
        }, t.getNamespaceURI = function (e) {
          return e.namespaceURI;
        }, t.getTextNodeContent = function (e) {
          return e.value;
        }, t.getCommentNodeContent = function (e) {
          return e.data;
        }, t.getDocumentTypeNodeName = function (e) {
          return e.name;
        }, t.getDocumentTypeNodePublicId = function (e) {
          return e.publicId;
        }, t.getDocumentTypeNodeSystemId = function (e) {
          return e.systemId;
        }, t.isTextNode = function (e) {
          return "#text" === e.nodeName;
        }, t.isCommentNode = function (e) {
          return "#comment" === e.nodeName;
        }, t.isDocumentTypeNode = function (e) {
          return "#documentType" === e.nodeName;
        }, t.isElementNode = function (e) {
          return !!e.tagName;
        }, t.setNodeSourceCodeLocation = function (e, t) {
          e.sourceCodeLocation = t;
        }, t.getNodeSourceCodeLocation = function (e) {
          return e.sourceCodeLocation;
        };
      });

      var it = be.DOCUMENT_MODE,
          Tt = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"],
          ot = Tt.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]),
          Et = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"],
          at = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"],
          _t = at.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]);

      function At(e, t) {
        for (var _n16 = 0; _n16 < t.length; _n16++) {
          if (0 === e.indexOf(t[_n16])) return !0;
        }

        return !1;
      }

      var ht = function ht(e) {
        return "html" === e.name && null === e.publicId && (null === e.systemId || "about:legacy-compat" === e.systemId);
      },
          ct = function ct(e) {
        if ("html" !== e.name) return it.QUIRKS;
        var t = e.systemId;
        if (t && "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" === t.toLowerCase()) return it.QUIRKS;
        var n = e.publicId;

        if (null !== n) {
          if (n = n.toLowerCase(), Et.indexOf(n) > -1) return it.QUIRKS;

          var _e19 = null === t ? ot : Tt;

          if (At(n, _e19)) return it.QUIRKS;
          if (_e19 = null === t ? at : _t, At(n, _e19)) return it.LIMITED_QUIRKS;
        }

        return it.NO_QUIRKS;
      },
          lt = Ke(function (e, t) {
        var _ref;

        var n = be.TAG_NAMES,
            s = be.NAMESPACES,
            r = be.ATTRS,
            i = "text/html",
            T = "application/xhtml+xml",
            o = {
          attributename: "attributeName",
          attributetype: "attributeType",
          basefrequency: "baseFrequency",
          baseprofile: "baseProfile",
          calcmode: "calcMode",
          clippathunits: "clipPathUnits",
          diffuseconstant: "diffuseConstant",
          edgemode: "edgeMode",
          filterunits: "filterUnits",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          limitingconeangle: "limitingConeAngle",
          markerheight: "markerHeight",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          numoctaves: "numOctaves",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          refx: "refX",
          refy: "refY",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stitchtiles: "stitchTiles",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textlength: "textLength",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          xchannelselector: "xChannelSelector",
          ychannelselector: "yChannelSelector",
          zoomandpan: "zoomAndPan"
        },
            E = {
          "xlink:actuate": {
            prefix: "xlink",
            name: "actuate",
            namespace: s.XLINK
          },
          "xlink:arcrole": {
            prefix: "xlink",
            name: "arcrole",
            namespace: s.XLINK
          },
          "xlink:href": {
            prefix: "xlink",
            name: "href",
            namespace: s.XLINK
          },
          "xlink:role": {
            prefix: "xlink",
            name: "role",
            namespace: s.XLINK
          },
          "xlink:show": {
            prefix: "xlink",
            name: "show",
            namespace: s.XLINK
          },
          "xlink:title": {
            prefix: "xlink",
            name: "title",
            namespace: s.XLINK
          },
          "xlink:type": {
            prefix: "xlink",
            name: "type",
            namespace: s.XLINK
          },
          "xml:base": {
            prefix: "xml",
            name: "base",
            namespace: s.XML
          },
          "xml:lang": {
            prefix: "xml",
            name: "lang",
            namespace: s.XML
          },
          "xml:space": {
            prefix: "xml",
            name: "space",
            namespace: s.XML
          },
          xmlns: {
            prefix: "",
            name: "xmlns",
            namespace: s.XMLNS
          },
          "xmlns:xlink": {
            prefix: "xmlns",
            name: "xlink",
            namespace: s.XMLNS
          }
        },
            a = t.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
          altglyph: "altGlyph",
          altglyphdef: "altGlyphDef",
          altglyphitem: "altGlyphItem",
          animatecolor: "animateColor",
          animatemotion: "animateMotion",
          animatetransform: "animateTransform",
          clippath: "clipPath",
          feblend: "feBlend",
          fecolormatrix: "feColorMatrix",
          fecomponenttransfer: "feComponentTransfer",
          fecomposite: "feComposite",
          feconvolvematrix: "feConvolveMatrix",
          fediffuselighting: "feDiffuseLighting",
          fedisplacementmap: "feDisplacementMap",
          fedistantlight: "feDistantLight",
          feflood: "feFlood",
          fefunca: "feFuncA",
          fefuncb: "feFuncB",
          fefuncg: "feFuncG",
          fefuncr: "feFuncR",
          fegaussianblur: "feGaussianBlur",
          feimage: "feImage",
          femerge: "feMerge",
          femergenode: "feMergeNode",
          femorphology: "feMorphology",
          feoffset: "feOffset",
          fepointlight: "fePointLight",
          fespecularlighting: "feSpecularLighting",
          fespotlight: "feSpotLight",
          fetile: "feTile",
          feturbulence: "feTurbulence",
          foreignobject: "foreignObject",
          glyphref: "glyphRef",
          lineargradient: "linearGradient",
          radialgradient: "radialGradient",
          textpath: "textPath"
        },
            _ = (_ref = {}, _defineProperty(_ref, n.B, !0), _defineProperty(_ref, n.BIG, !0), _defineProperty(_ref, n.BLOCKQUOTE, !0), _defineProperty(_ref, n.BODY, !0), _defineProperty(_ref, n.BR, !0), _defineProperty(_ref, n.CENTER, !0), _defineProperty(_ref, n.CODE, !0), _defineProperty(_ref, n.DD, !0), _defineProperty(_ref, n.DIV, !0), _defineProperty(_ref, n.DL, !0), _defineProperty(_ref, n.DT, !0), _defineProperty(_ref, n.EM, !0), _defineProperty(_ref, n.EMBED, !0), _defineProperty(_ref, n.H1, !0), _defineProperty(_ref, n.H2, !0), _defineProperty(_ref, n.H3, !0), _defineProperty(_ref, n.H4, !0), _defineProperty(_ref, n.H5, !0), _defineProperty(_ref, n.H6, !0), _defineProperty(_ref, n.HEAD, !0), _defineProperty(_ref, n.HR, !0), _defineProperty(_ref, n.I, !0), _defineProperty(_ref, n.IMG, !0), _defineProperty(_ref, n.LI, !0), _defineProperty(_ref, n.LISTING, !0), _defineProperty(_ref, n.MENU, !0), _defineProperty(_ref, n.META, !0), _defineProperty(_ref, n.NOBR, !0), _defineProperty(_ref, n.OL, !0), _defineProperty(_ref, n.P, !0), _defineProperty(_ref, n.PRE, !0), _defineProperty(_ref, n.RUBY, !0), _defineProperty(_ref, n.S, !0), _defineProperty(_ref, n.SMALL, !0), _defineProperty(_ref, n.SPAN, !0), _defineProperty(_ref, n.STRONG, !0), _defineProperty(_ref, n.STRIKE, !0), _defineProperty(_ref, n.SUB, !0), _defineProperty(_ref, n.SUP, !0), _defineProperty(_ref, n.TABLE, !0), _defineProperty(_ref, n.TT, !0), _defineProperty(_ref, n.U, !0), _defineProperty(_ref, n.UL, !0), _defineProperty(_ref, n.VAR, !0), _ref);

        t.causesExit = function (e) {
          var t = e.tagName;
          return !!(t === n.FONT && (null !== Ge.getTokenAttr(e, r.COLOR) || null !== Ge.getTokenAttr(e, r.SIZE) || null !== Ge.getTokenAttr(e, r.FACE))) || _[t];
        }, t.adjustTokenMathMLAttrs = function (e) {
          for (var _t27 = 0; _t27 < e.attrs.length; _t27++) {
            if ("definitionurl" === e.attrs[_t27].name) {
              e.attrs[_t27].name = "definitionURL";
              break;
            }
          }
        }, t.adjustTokenSVGAttrs = function (e) {
          for (var _t28 = 0; _t28 < e.attrs.length; _t28++) {
            var _n17 = o[e.attrs[_t28].name];
            _n17 && (e.attrs[_t28].name = _n17);
          }
        }, t.adjustTokenXMLAttrs = function (e) {
          for (var _t29 = 0; _t29 < e.attrs.length; _t29++) {
            var _n18 = E[e.attrs[_t29].name];
            _n18 && (e.attrs[_t29].prefix = _n18.prefix, e.attrs[_t29].name = _n18.name, e.attrs[_t29].namespace = _n18.namespace);
          }
        }, t.adjustTokenSVGTagName = function (e) {
          var t = a[e.tagName];
          t && (e.tagName = t);
        }, t.isIntegrationPoint = function (e, t, o, E) {
          return !(E && E !== s.HTML || !function (e, t, o) {
            if (t === s.MATHML && e === n.ANNOTATION_XML) for (var _e20 = 0; _e20 < o.length; _e20++) {
              if (o[_e20].name === r.ENCODING) {
                var _t30 = o[_e20].value.toLowerCase();

                return _t30 === i || _t30 === T;
              }
            }
            return t === s.SVG && (e === n.FOREIGN_OBJECT || e === n.DESC || e === n.TITLE);
          }(e, t, o)) || !(E && E !== s.MATHML || !function (e, t) {
            return t === s.MATHML && (e === n.MI || e === n.MO || e === n.MN || e === n.MS || e === n.MTEXT);
          }(e, t));
        };
      });

      var mt = be.TAG_NAMES,
          pt = be.NAMESPACES,
          Nt = be.ATTRS,
          ut = {
        scriptingEnabled: !0,
        sourceCodeLocationInfo: !1,
        onParseError: null,
        treeAdapter: rt
      },
          Ot = "IN_TABLE_MODE",
          St = (_St = {}, _defineProperty(_St, mt.TR, "IN_ROW_MODE"), _defineProperty(_St, mt.TBODY, "IN_TABLE_BODY_MODE"), _defineProperty(_St, mt.THEAD, "IN_TABLE_BODY_MODE"), _defineProperty(_St, mt.TFOOT, "IN_TABLE_BODY_MODE"), _defineProperty(_St, mt.CAPTION, "IN_CAPTION_MODE"), _defineProperty(_St, mt.COLGROUP, "IN_COLUMN_GROUP_MODE"), _defineProperty(_St, mt.TABLE, Ot), _defineProperty(_St, mt.BODY, "IN_BODY_MODE"), _defineProperty(_St, mt.FRAMESET, "IN_FRAMESET_MODE"), _St),
          Ct = (_Ct = {}, _defineProperty(_Ct, mt.CAPTION, Ot), _defineProperty(_Ct, mt.COLGROUP, Ot), _defineProperty(_Ct, mt.TBODY, Ot), _defineProperty(_Ct, mt.TFOOT, Ot), _defineProperty(_Ct, mt.THEAD, Ot), _defineProperty(_Ct, mt.COL, "IN_COLUMN_GROUP_MODE"), _defineProperty(_Ct, mt.TR, "IN_TABLE_BODY_MODE"), _defineProperty(_Ct, mt.TD, "IN_ROW_MODE"), _defineProperty(_Ct, mt.TH, "IN_ROW_MODE"), _Ct),
          dt = (_dt = {
        INITIAL_MODE: (_INITIAL_MODE = {}, _defineProperty(_INITIAL_MODE, Ge.CHARACTER_TOKEN, Kt), _defineProperty(_INITIAL_MODE, Ge.NULL_CHARACTER_TOKEN, Kt), _defineProperty(_INITIAL_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, kt), _defineProperty(_INITIAL_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_INITIAL_MODE, Ge.DOCTYPE_TOKEN, function (e, t) {
          e._setDocumentType(t);

          var n = t.forceQuirks ? be.DOCUMENT_MODE.QUIRKS : ct(t);
          ht(t) || e._err(ie);
          e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = "BEFORE_HTML_MODE";
        }), _defineProperty(_INITIAL_MODE, Ge.START_TAG_TOKEN, Kt), _defineProperty(_INITIAL_MODE, Ge.END_TAG_TOKEN, Kt), _defineProperty(_INITIAL_MODE, Ge.EOF_TOKEN, Kt), _INITIAL_MODE),
        BEFORE_HTML_MODE: (_BEFORE_HTML_MODE = {}, _defineProperty(_BEFORE_HTML_MODE, Ge.CHARACTER_TOKEN, bt), _defineProperty(_BEFORE_HTML_MODE, Ge.NULL_CHARACTER_TOKEN, bt), _defineProperty(_BEFORE_HTML_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, kt), _defineProperty(_BEFORE_HTML_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_BEFORE_HTML_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_BEFORE_HTML_MODE, Ge.START_TAG_TOKEN, function (e, t) {
          t.tagName === mt.HTML ? (e._insertElement(t, pt.HTML), e.insertionMode = "BEFORE_HEAD_MODE") : bt(e, t);
        }), _defineProperty(_BEFORE_HTML_MODE, Ge.END_TAG_TOKEN, function (e, t) {
          var n = t.tagName;
          n !== mt.HTML && n !== mt.HEAD && n !== mt.BODY && n !== mt.BR || bt(e, t);
        }), _defineProperty(_BEFORE_HTML_MODE, Ge.EOF_TOKEN, bt), _BEFORE_HTML_MODE),
        BEFORE_HEAD_MODE: (_BEFORE_HEAD_MODE = {}, _defineProperty(_BEFORE_HEAD_MODE, Ge.CHARACTER_TOKEN, Yt), _defineProperty(_BEFORE_HEAD_MODE, Ge.NULL_CHARACTER_TOKEN, Yt), _defineProperty(_BEFORE_HEAD_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, kt), _defineProperty(_BEFORE_HEAD_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_BEFORE_HEAD_MODE, Ge.DOCTYPE_TOKEN, Ht), _defineProperty(_BEFORE_HEAD_MODE, Ge.START_TAG_TOKEN, function (e, t) {
          var n = t.tagName;
          n === mt.HTML ? sn(e, t) : n === mt.HEAD ? (e._insertElement(t, pt.HTML), e.headElement = e.openElements.current, e.insertionMode = "IN_HEAD_MODE") : Yt(e, t);
        }), _defineProperty(_BEFORE_HEAD_MODE, Ge.END_TAG_TOKEN, function (e, t) {
          var n = t.tagName;
          n === mt.HEAD || n === mt.BODY || n === mt.HTML || n === mt.BR ? Yt(e, t) : e._err(Ee);
        }), _defineProperty(_BEFORE_HEAD_MODE, Ge.EOF_TOKEN, Yt), _BEFORE_HEAD_MODE),
        IN_HEAD_MODE: (_IN_HEAD_MODE = {}, _defineProperty(_IN_HEAD_MODE, Ge.CHARACTER_TOKEN, vt), _defineProperty(_IN_HEAD_MODE, Ge.NULL_CHARACTER_TOKEN, vt), _defineProperty(_IN_HEAD_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Bt), _defineProperty(_IN_HEAD_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_HEAD_MODE, Ge.DOCTYPE_TOKEN, Ht), _defineProperty(_IN_HEAD_MODE, Ge.START_TAG_TOKEN, xt), _defineProperty(_IN_HEAD_MODE, Ge.END_TAG_TOKEN, yt), _defineProperty(_IN_HEAD_MODE, Ge.EOF_TOKEN, vt), _IN_HEAD_MODE),
        IN_HEAD_NO_SCRIPT_MODE: (_IN_HEAD_NO_SCRIPT_MO = {}, _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Ge.CHARACTER_TOKEN, wt), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Ge.NULL_CHARACTER_TOKEN, wt), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Ge.WHITESPACE_CHARACTER_TOKEN, Bt), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Ge.DOCTYPE_TOKEN, Ht), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Ge.START_TAG_TOKEN, function (e, t) {
          var n = t.tagName;
          n === mt.HTML ? sn(e, t) : n === mt.BASEFONT || n === mt.BGSOUND || n === mt.HEAD || n === mt.LINK || n === mt.META || n === mt.NOFRAMES || n === mt.STYLE ? xt(e, t) : n === mt.NOSCRIPT ? e._err(le) : wt(e, t);
        }), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Ge.END_TAG_TOKEN, function (e, t) {
          var n = t.tagName;
          n === mt.NOSCRIPT ? (e.openElements.pop(), e.insertionMode = "IN_HEAD_MODE") : n === mt.BR ? wt(e, t) : e._err(Ee);
        }), _defineProperty(_IN_HEAD_NO_SCRIPT_MO, Ge.EOF_TOKEN, wt), _IN_HEAD_NO_SCRIPT_MO),
        AFTER_HEAD_MODE: (_AFTER_HEAD_MODE = {}, _defineProperty(_AFTER_HEAD_MODE, Ge.CHARACTER_TOKEN, Qt), _defineProperty(_AFTER_HEAD_MODE, Ge.NULL_CHARACTER_TOKEN, Qt), _defineProperty(_AFTER_HEAD_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Bt), _defineProperty(_AFTER_HEAD_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_AFTER_HEAD_MODE, Ge.DOCTYPE_TOKEN, Ht), _defineProperty(_AFTER_HEAD_MODE, Ge.START_TAG_TOKEN, function (e, t) {
          var n = t.tagName;
          n === mt.HTML ? sn(e, t) : n === mt.BODY ? (e._insertElement(t, pt.HTML), e.framesetOk = !1, e.insertionMode = "IN_BODY_MODE") : n === mt.FRAMESET ? (e._insertElement(t, pt.HTML), e.insertionMode = "IN_FRAMESET_MODE") : n === mt.BASE || n === mt.BASEFONT || n === mt.BGSOUND || n === mt.LINK || n === mt.META || n === mt.NOFRAMES || n === mt.SCRIPT || n === mt.STYLE || n === mt.TEMPLATE || n === mt.TITLE ? (e._err(he), e.openElements.push(e.headElement), xt(e, t), e.openElements.remove(e.headElement)) : n === mt.HEAD ? e._err(ce) : Qt(e, t);
        }), _defineProperty(_AFTER_HEAD_MODE, Ge.END_TAG_TOKEN, function (e, t) {
          var n = t.tagName;
          n === mt.BODY || n === mt.HTML || n === mt.BR ? Qt(e, t) : n === mt.TEMPLATE ? yt(e, t) : e._err(Ee);
        }), _defineProperty(_AFTER_HEAD_MODE, Ge.EOF_TOKEN, Qt), _AFTER_HEAD_MODE),
        IN_BODY_MODE: (_IN_BODY_MODE = {}, _defineProperty(_IN_BODY_MODE, Ge.CHARACTER_TOKEN, Wt), _defineProperty(_IN_BODY_MODE, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_IN_BODY_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Xt), _defineProperty(_IN_BODY_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_BODY_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_BODY_MODE, Ge.START_TAG_TOKEN, sn), _defineProperty(_IN_BODY_MODE, Ge.END_TAG_TOKEN, En), _defineProperty(_IN_BODY_MODE, Ge.EOF_TOKEN, an), _IN_BODY_MODE),
        TEXT_MODE: (_TEXT_MODE = {}, _defineProperty(_TEXT_MODE, Ge.CHARACTER_TOKEN, Bt), _defineProperty(_TEXT_MODE, Ge.NULL_CHARACTER_TOKEN, Bt), _defineProperty(_TEXT_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Bt), _defineProperty(_TEXT_MODE, Ge.COMMENT_TOKEN, kt), _defineProperty(_TEXT_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_TEXT_MODE, Ge.START_TAG_TOKEN, kt), _defineProperty(_TEXT_MODE, Ge.END_TAG_TOKEN, function (e, t) {
          t.tagName === mt.SCRIPT && (e.pendingScript = e.openElements.current);
          e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
        }), _defineProperty(_TEXT_MODE, Ge.EOF_TOKEN, function (e, t) {
          e._err(me), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e._processToken(t);
        }), _TEXT_MODE)
      }, _defineProperty(_dt, Ot, (_Ot = {}, _defineProperty(_Ot, Ge.CHARACTER_TOKEN, _n), _defineProperty(_Ot, Ge.NULL_CHARACTER_TOKEN, _n), _defineProperty(_Ot, Ge.WHITESPACE_CHARACTER_TOKEN, _n), _defineProperty(_Ot, Ge.COMMENT_TOKEN, Ut), _defineProperty(_Ot, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_Ot, Ge.START_TAG_TOKEN, An), _defineProperty(_Ot, Ge.END_TAG_TOKEN, hn), _defineProperty(_Ot, Ge.EOF_TOKEN, an), _Ot)), _defineProperty(_dt, "IN_TABLE_TEXT_MODE", (_IN_TABLE_TEXT_MODE = {}, _defineProperty(_IN_TABLE_TEXT_MODE, Ge.CHARACTER_TOKEN, function (e, t) {
        e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
      }), _defineProperty(_IN_TABLE_TEXT_MODE, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_IN_TABLE_TEXT_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, function (e, t) {
        e.pendingCharacterTokens.push(t);
      }), _defineProperty(_IN_TABLE_TEXT_MODE, Ge.COMMENT_TOKEN, ln), _defineProperty(_IN_TABLE_TEXT_MODE, Ge.DOCTYPE_TOKEN, ln), _defineProperty(_IN_TABLE_TEXT_MODE, Ge.START_TAG_TOKEN, ln), _defineProperty(_IN_TABLE_TEXT_MODE, Ge.END_TAG_TOKEN, ln), _defineProperty(_IN_TABLE_TEXT_MODE, Ge.EOF_TOKEN, ln), _IN_TABLE_TEXT_MODE)), _defineProperty(_dt, "IN_CAPTION_MODE", (_IN_CAPTION_MODE = {}, _defineProperty(_IN_CAPTION_MODE, Ge.CHARACTER_TOKEN, Wt), _defineProperty(_IN_CAPTION_MODE, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_IN_CAPTION_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Xt), _defineProperty(_IN_CAPTION_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_CAPTION_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_CAPTION_MODE, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.CAPTION || n === mt.COL || n === mt.COLGROUP || n === mt.TBODY || n === mt.TD || n === mt.TFOOT || n === mt.TH || n === mt.THEAD || n === mt.TR ? e.openElements.hasInTableScope(mt.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(mt.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Ot, e._processToken(t)) : sn(e, t);
      }), _defineProperty(_IN_CAPTION_MODE, Ge.END_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.CAPTION || n === mt.TABLE ? e.openElements.hasInTableScope(mt.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(mt.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Ot, n === mt.TABLE && e._processToken(t)) : n !== mt.BODY && n !== mt.COL && n !== mt.COLGROUP && n !== mt.HTML && n !== mt.TBODY && n !== mt.TD && n !== mt.TFOOT && n !== mt.TH && n !== mt.THEAD && n !== mt.TR && En(e, t);
      }), _defineProperty(_IN_CAPTION_MODE, Ge.EOF_TOKEN, an), _IN_CAPTION_MODE)), _defineProperty(_dt, "IN_COLUMN_GROUP_MODE", (_IN_COLUMN_GROUP_MODE = {}, _defineProperty(_IN_COLUMN_GROUP_MODE, Ge.CHARACTER_TOKEN, mn), _defineProperty(_IN_COLUMN_GROUP_MODE, Ge.NULL_CHARACTER_TOKEN, mn), _defineProperty(_IN_COLUMN_GROUP_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Bt), _defineProperty(_IN_COLUMN_GROUP_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_COLUMN_GROUP_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_COLUMN_GROUP_MODE, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.HTML ? sn(e, t) : n === mt.COL ? (e._appendElement(t, pt.HTML), t.ackSelfClosing = !0) : n === mt.TEMPLATE ? xt(e, t) : mn(e, t);
      }), _defineProperty(_IN_COLUMN_GROUP_MODE, Ge.END_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.COLGROUP ? e.openElements.currentTagName === mt.COLGROUP && (e.openElements.pop(), e.insertionMode = Ot) : n === mt.TEMPLATE ? yt(e, t) : n !== mt.COL && mn(e, t);
      }), _defineProperty(_IN_COLUMN_GROUP_MODE, Ge.EOF_TOKEN, an), _IN_COLUMN_GROUP_MODE)), _defineProperty(_dt, "IN_TABLE_BODY_MODE", (_IN_TABLE_BODY_MODE = {}, _defineProperty(_IN_TABLE_BODY_MODE, Ge.CHARACTER_TOKEN, _n), _defineProperty(_IN_TABLE_BODY_MODE, Ge.NULL_CHARACTER_TOKEN, _n), _defineProperty(_IN_TABLE_BODY_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, _n), _defineProperty(_IN_TABLE_BODY_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_TABLE_BODY_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_TABLE_BODY_MODE, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.TR ? (e.openElements.clearBackToTableBodyContext(), e._insertElement(t, pt.HTML), e.insertionMode = "IN_ROW_MODE") : n === mt.TH || n === mt.TD ? (e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(mt.TR), e.insertionMode = "IN_ROW_MODE", e._processToken(t)) : n === mt.CAPTION || n === mt.COL || n === mt.COLGROUP || n === mt.TBODY || n === mt.TFOOT || n === mt.THEAD ? e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Ot, e._processToken(t)) : An(e, t);
      }), _defineProperty(_IN_TABLE_BODY_MODE, Ge.END_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.TBODY || n === mt.TFOOT || n === mt.THEAD ? e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Ot) : n === mt.TABLE ? e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Ot, e._processToken(t)) : (n !== mt.BODY && n !== mt.CAPTION && n !== mt.COL && n !== mt.COLGROUP || n !== mt.HTML && n !== mt.TD && n !== mt.TH && n !== mt.TR) && hn(e, t);
      }), _defineProperty(_IN_TABLE_BODY_MODE, Ge.EOF_TOKEN, an), _IN_TABLE_BODY_MODE)), _defineProperty(_dt, "IN_ROW_MODE", (_IN_ROW_MODE = {}, _defineProperty(_IN_ROW_MODE, Ge.CHARACTER_TOKEN, _n), _defineProperty(_IN_ROW_MODE, Ge.NULL_CHARACTER_TOKEN, _n), _defineProperty(_IN_ROW_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, _n), _defineProperty(_IN_ROW_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_ROW_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_ROW_MODE, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.TH || n === mt.TD ? (e.openElements.clearBackToTableRowContext(), e._insertElement(t, pt.HTML), e.insertionMode = "IN_CELL_MODE", e.activeFormattingElements.insertMarker()) : n === mt.CAPTION || n === mt.COL || n === mt.COLGROUP || n === mt.TBODY || n === mt.TFOOT || n === mt.THEAD || n === mt.TR ? e.openElements.hasInTableScope(mt.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = "IN_TABLE_BODY_MODE", e._processToken(t)) : An(e, t);
      }), _defineProperty(_IN_ROW_MODE, Ge.END_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.TR ? e.openElements.hasInTableScope(mt.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = "IN_TABLE_BODY_MODE") : n === mt.TABLE ? e.openElements.hasInTableScope(mt.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = "IN_TABLE_BODY_MODE", e._processToken(t)) : n === mt.TBODY || n === mt.TFOOT || n === mt.THEAD ? (e.openElements.hasInTableScope(n) || e.openElements.hasInTableScope(mt.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = "IN_TABLE_BODY_MODE", e._processToken(t)) : (n !== mt.BODY && n !== mt.CAPTION && n !== mt.COL && n !== mt.COLGROUP || n !== mt.HTML && n !== mt.TD && n !== mt.TH) && hn(e, t);
      }), _defineProperty(_IN_ROW_MODE, Ge.EOF_TOKEN, an), _IN_ROW_MODE)), _defineProperty(_dt, "IN_CELL_MODE", (_IN_CELL_MODE = {}, _defineProperty(_IN_CELL_MODE, Ge.CHARACTER_TOKEN, Wt), _defineProperty(_IN_CELL_MODE, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_IN_CELL_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Xt), _defineProperty(_IN_CELL_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_CELL_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_CELL_MODE, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.CAPTION || n === mt.COL || n === mt.COLGROUP || n === mt.TBODY || n === mt.TD || n === mt.TFOOT || n === mt.TH || n === mt.THEAD || n === mt.TR ? (e.openElements.hasInTableScope(mt.TD) || e.openElements.hasInTableScope(mt.TH)) && (e._closeTableCell(), e._processToken(t)) : sn(e, t);
      }), _defineProperty(_IN_CELL_MODE, Ge.END_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.TD || n === mt.TH ? e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = "IN_ROW_MODE") : n === mt.TABLE || n === mt.TBODY || n === mt.TFOOT || n === mt.THEAD || n === mt.TR ? e.openElements.hasInTableScope(n) && (e._closeTableCell(), e._processToken(t)) : n !== mt.BODY && n !== mt.CAPTION && n !== mt.COL && n !== mt.COLGROUP && n !== mt.HTML && En(e, t);
      }), _defineProperty(_IN_CELL_MODE, Ge.EOF_TOKEN, an), _IN_CELL_MODE)), _defineProperty(_dt, "IN_SELECT_MODE", (_IN_SELECT_MODE = {}, _defineProperty(_IN_SELECT_MODE, Ge.CHARACTER_TOKEN, Bt), _defineProperty(_IN_SELECT_MODE, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_IN_SELECT_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Bt), _defineProperty(_IN_SELECT_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_SELECT_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_SELECT_MODE, Ge.START_TAG_TOKEN, pn), _defineProperty(_IN_SELECT_MODE, Ge.END_TAG_TOKEN, Nn), _defineProperty(_IN_SELECT_MODE, Ge.EOF_TOKEN, an), _IN_SELECT_MODE)), _defineProperty(_dt, "IN_SELECT_IN_TABLE_MODE", (_IN_SELECT_IN_TABLE_M = {}, _defineProperty(_IN_SELECT_IN_TABLE_M, Ge.CHARACTER_TOKEN, Bt), _defineProperty(_IN_SELECT_IN_TABLE_M, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_IN_SELECT_IN_TABLE_M, Ge.WHITESPACE_CHARACTER_TOKEN, Bt), _defineProperty(_IN_SELECT_IN_TABLE_M, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_SELECT_IN_TABLE_M, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_SELECT_IN_TABLE_M, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.CAPTION || n === mt.TABLE || n === mt.TBODY || n === mt.TFOOT || n === mt.THEAD || n === mt.TR || n === mt.TD || n === mt.TH ? (e.openElements.popUntilTagNamePopped(mt.SELECT), e._resetInsertionMode(), e._processToken(t)) : pn(e, t);
      }), _defineProperty(_IN_SELECT_IN_TABLE_M, Ge.END_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.CAPTION || n === mt.TABLE || n === mt.TBODY || n === mt.TFOOT || n === mt.THEAD || n === mt.TR || n === mt.TD || n === mt.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(mt.SELECT), e._resetInsertionMode(), e._processToken(t)) : Nn(e, t);
      }), _defineProperty(_IN_SELECT_IN_TABLE_M, Ge.EOF_TOKEN, an), _IN_SELECT_IN_TABLE_M)), _defineProperty(_dt, "IN_TEMPLATE_MODE", (_IN_TEMPLATE_MODE = {}, _defineProperty(_IN_TEMPLATE_MODE, Ge.CHARACTER_TOKEN, Wt), _defineProperty(_IN_TEMPLATE_MODE, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_IN_TEMPLATE_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Xt), _defineProperty(_IN_TEMPLATE_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_TEMPLATE_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_TEMPLATE_MODE, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        if (n === mt.BASE || n === mt.BASEFONT || n === mt.BGSOUND || n === mt.LINK || n === mt.META || n === mt.NOFRAMES || n === mt.SCRIPT || n === mt.STYLE || n === mt.TEMPLATE || n === mt.TITLE) xt(e, t);else {
          var _s12 = Ct[n] || "IN_BODY_MODE";

          e._popTmplInsertionMode(), e._pushTmplInsertionMode(_s12), e.insertionMode = _s12, e._processToken(t);
        }
      }), _defineProperty(_IN_TEMPLATE_MODE, Ge.END_TAG_TOKEN, function (e, t) {
        t.tagName === mt.TEMPLATE && yt(e, t);
      }), _defineProperty(_IN_TEMPLATE_MODE, Ge.EOF_TOKEN, un), _IN_TEMPLATE_MODE)), _defineProperty(_dt, "AFTER_BODY_MODE", (_AFTER_BODY_MODE = {}, _defineProperty(_AFTER_BODY_MODE, Ge.CHARACTER_TOKEN, On), _defineProperty(_AFTER_BODY_MODE, Ge.NULL_CHARACTER_TOKEN, On), _defineProperty(_AFTER_BODY_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Xt), _defineProperty(_AFTER_BODY_MODE, Ge.COMMENT_TOKEN, function (e, t) {
        e._appendCommentNode(t, e.openElements.items[0]);
      }), _defineProperty(_AFTER_BODY_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_AFTER_BODY_MODE, Ge.START_TAG_TOKEN, function (e, t) {
        t.tagName === mt.HTML ? sn(e, t) : On(e, t);
      }), _defineProperty(_AFTER_BODY_MODE, Ge.END_TAG_TOKEN, function (e, t) {
        t.tagName === mt.HTML ? e.fragmentContext || (e.insertionMode = "AFTER_AFTER_BODY_MODE") : On(e, t);
      }), _defineProperty(_AFTER_BODY_MODE, Ge.EOF_TOKEN, Gt), _AFTER_BODY_MODE)), _defineProperty(_dt, "IN_FRAMESET_MODE", (_IN_FRAMESET_MODE = {}, _defineProperty(_IN_FRAMESET_MODE, Ge.CHARACTER_TOKEN, kt), _defineProperty(_IN_FRAMESET_MODE, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_IN_FRAMESET_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Bt), _defineProperty(_IN_FRAMESET_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_IN_FRAMESET_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_IN_FRAMESET_MODE, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.HTML ? sn(e, t) : n === mt.FRAMESET ? e._insertElement(t, pt.HTML) : n === mt.FRAME ? (e._appendElement(t, pt.HTML), t.ackSelfClosing = !0) : n === mt.NOFRAMES && xt(e, t);
      }), _defineProperty(_IN_FRAMESET_MODE, Ge.END_TAG_TOKEN, function (e, t) {
        t.tagName !== mt.FRAMESET || e.openElements.isRootHtmlElementCurrent() || (e.openElements.pop(), e.fragmentContext || e.openElements.currentTagName === mt.FRAMESET || (e.insertionMode = "AFTER_FRAMESET_MODE"));
      }), _defineProperty(_IN_FRAMESET_MODE, Ge.EOF_TOKEN, Gt), _IN_FRAMESET_MODE)), _defineProperty(_dt, "AFTER_FRAMESET_MODE", (_AFTER_FRAMESET_MODE = {}, _defineProperty(_AFTER_FRAMESET_MODE, Ge.CHARACTER_TOKEN, kt), _defineProperty(_AFTER_FRAMESET_MODE, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_AFTER_FRAMESET_MODE, Ge.WHITESPACE_CHARACTER_TOKEN, Bt), _defineProperty(_AFTER_FRAMESET_MODE, Ge.COMMENT_TOKEN, Ut), _defineProperty(_AFTER_FRAMESET_MODE, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_AFTER_FRAMESET_MODE, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.HTML ? sn(e, t) : n === mt.NOFRAMES && xt(e, t);
      }), _defineProperty(_AFTER_FRAMESET_MODE, Ge.END_TAG_TOKEN, function (e, t) {
        t.tagName === mt.HTML && (e.insertionMode = "AFTER_AFTER_FRAMESET_MODE");
      }), _defineProperty(_AFTER_FRAMESET_MODE, Ge.EOF_TOKEN, Gt), _AFTER_FRAMESET_MODE)), _defineProperty(_dt, "AFTER_AFTER_BODY_MODE", (_AFTER_AFTER_BODY_MOD = {}, _defineProperty(_AFTER_AFTER_BODY_MOD, Ge.CHARACTER_TOKEN, Sn), _defineProperty(_AFTER_AFTER_BODY_MOD, Ge.NULL_CHARACTER_TOKEN, Sn), _defineProperty(_AFTER_AFTER_BODY_MOD, Ge.WHITESPACE_CHARACTER_TOKEN, Xt), _defineProperty(_AFTER_AFTER_BODY_MOD, Ge.COMMENT_TOKEN, Ft), _defineProperty(_AFTER_AFTER_BODY_MOD, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_AFTER_AFTER_BODY_MOD, Ge.START_TAG_TOKEN, function (e, t) {
        t.tagName === mt.HTML ? sn(e, t) : Sn(e, t);
      }), _defineProperty(_AFTER_AFTER_BODY_MOD, Ge.END_TAG_TOKEN, Sn), _defineProperty(_AFTER_AFTER_BODY_MOD, Ge.EOF_TOKEN, Gt), _AFTER_AFTER_BODY_MOD)), _defineProperty(_dt, "AFTER_AFTER_FRAMESET_MODE", (_AFTER_AFTER_FRAMESET = {}, _defineProperty(_AFTER_AFTER_FRAMESET, Ge.CHARACTER_TOKEN, kt), _defineProperty(_AFTER_AFTER_FRAMESET, Ge.NULL_CHARACTER_TOKEN, kt), _defineProperty(_AFTER_AFTER_FRAMESET, Ge.WHITESPACE_CHARACTER_TOKEN, Xt), _defineProperty(_AFTER_AFTER_FRAMESET, Ge.COMMENT_TOKEN, Ft), _defineProperty(_AFTER_AFTER_FRAMESET, Ge.DOCTYPE_TOKEN, kt), _defineProperty(_AFTER_AFTER_FRAMESET, Ge.START_TAG_TOKEN, function (e, t) {
        var n = t.tagName;
        n === mt.HTML ? sn(e, t) : n === mt.NOFRAMES && xt(e, t);
      }), _defineProperty(_AFTER_AFTER_FRAMESET, Ge.END_TAG_TOKEN, kt), _defineProperty(_AFTER_AFTER_FRAMESET, Ge.EOF_TOKEN, Gt), _AFTER_AFTER_FRAMESET)), _dt);

      var Rt = /*#__PURE__*/function () {
        function Rt(e) {
          _classCallCheck(this, Rt);

          this.options = function (e, t) {
            return [e, t = t || Object.create(null)].reduce(function (e, t) {
              return Object.keys(t).forEach(function (n) {
                e[n] = t[n];
              }), e;
            }, Object.create(null));
          }(ut, e), this.treeAdapter = this.options.treeAdapter, this.pendingScript = null, this.options.sourceCodeLocationInfo && je.install(this, $e), this.options.onParseError && je.install(this, st, {
            onParseError: this.options.onParseError
          });
        }

        _createClass(Rt, [{
          key: "parse",
          value: function parse(e) {
            var t = this.treeAdapter.createDocument();
            return this._bootstrap(t, null), this.tokenizer.write(e, !0), this._runParsingLoop(null), t;
          }
        }, {
          key: "parseFragment",
          value: function parseFragment(e, t) {
            t || (t = this.treeAdapter.createElement(mt.TEMPLATE, pt.HTML, []));
            var n = this.treeAdapter.createElement("documentmock", pt.HTML, []);
            this._bootstrap(n, t), this.treeAdapter.getTagName(t) === mt.TEMPLATE && this._pushTmplInsertionMode("IN_TEMPLATE_MODE"), this._initTokenizerForFragmentParsing(), this._insertFakeRootElement(), this._resetInsertionMode(), this._findFormInFragmentContext(), this.tokenizer.write(e, !0), this._runParsingLoop(null);
            var s = this.treeAdapter.getFirstChild(n),
                r = this.treeAdapter.createDocumentFragment();
            return this._adoptNodes(s, r), r;
          }
        }, {
          key: "_bootstrap",
          value: function _bootstrap(e, t) {
            this.tokenizer = new Ge(this.options), this.stopped = !1, this.insertionMode = "INITIAL_MODE", this.originalInsertionMode = "", this.document = e, this.fragmentContext = t, this.headElement = null, this.formElement = null, this.openElements = new Qe(this.document, this.treeAdapter), this.activeFormattingElements = new We(this.treeAdapter), this.tmplInsertionModeStack = [], this.tmplInsertionModeStackTop = -1, this.currentTmplInsertionMode = null, this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1;
          }
        }, {
          key: "_err",
          value: function _err() {}
        }, {
          key: "_runParsingLoop",
          value: function _runParsingLoop(e) {
            for (; !this.stopped;) {
              this._setupTokenizerCDATAMode();

              var _t31 = this.tokenizer.getNextToken();

              if (_t31.type === Ge.HIBERNATION_TOKEN) break;

              if (this.skipNextNewLine && (this.skipNextNewLine = !1, _t31.type === Ge.WHITESPACE_CHARACTER_TOKEN && "\n" === _t31.chars[0])) {
                if (1 === _t31.chars.length) continue;
                _t31.chars = _t31.chars.substr(1);
              }

              if (this._processInputToken(_t31), e && this.pendingScript) break;
            }
          }
        }, {
          key: "runParsingLoopForCurrentChunk",
          value: function runParsingLoopForCurrentChunk(e, t) {
            if (this._runParsingLoop(t), t && this.pendingScript) {
              var _e21 = this.pendingScript;
              return this.pendingScript = null, void t(_e21);
            }

            e && e();
          }
        }, {
          key: "_setupTokenizerCDATAMode",
          value: function _setupTokenizerCDATAMode() {
            var e = this._getAdjustedCurrentElement();

            this.tokenizer.allowCDATA = e && e !== this.document && this.treeAdapter.getNamespaceURI(e) !== pt.HTML && !this._isIntegrationPoint(e);
          }
        }, {
          key: "_switchToTextParsing",
          value: function _switchToTextParsing(e, t) {
            this._insertElement(e, pt.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = "TEXT_MODE";
          }
        }, {
          key: "switchToPlaintextParsing",
          value: function switchToPlaintextParsing() {
            this.insertionMode = "TEXT_MODE", this.originalInsertionMode = "IN_BODY_MODE", this.tokenizer.state = Ge.MODE.PLAINTEXT;
          }
        }, {
          key: "_getAdjustedCurrentElement",
          value: function _getAdjustedCurrentElement() {
            return 0 === this.openElements.stackTop && this.fragmentContext ? this.fragmentContext : this.openElements.current;
          }
        }, {
          key: "_findFormInFragmentContext",
          value: function _findFormInFragmentContext() {
            var e = this.fragmentContext;

            do {
              if (this.treeAdapter.getTagName(e) === mt.FORM) {
                this.formElement = e;
                break;
              }

              e = this.treeAdapter.getParentNode(e);
            } while (e);
          }
        }, {
          key: "_initTokenizerForFragmentParsing",
          value: function _initTokenizerForFragmentParsing() {
            if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === pt.HTML) {
              var _e22 = this.treeAdapter.getTagName(this.fragmentContext);

              _e22 === mt.TITLE || _e22 === mt.TEXTAREA ? this.tokenizer.state = Ge.MODE.RCDATA : _e22 === mt.STYLE || _e22 === mt.XMP || _e22 === mt.IFRAME || _e22 === mt.NOEMBED || _e22 === mt.NOFRAMES || _e22 === mt.NOSCRIPT ? this.tokenizer.state = Ge.MODE.RAWTEXT : _e22 === mt.SCRIPT ? this.tokenizer.state = Ge.MODE.SCRIPT_DATA : _e22 === mt.PLAINTEXT && (this.tokenizer.state = Ge.MODE.PLAINTEXT);
            }
          }
        }, {
          key: "_setDocumentType",
          value: function _setDocumentType(e) {
            var t = e.name || "",
                n = e.publicId || "",
                s = e.systemId || "";
            this.treeAdapter.setDocumentType(this.document, t, n, s);
          }
        }, {
          key: "_attachElementToTree",
          value: function _attachElementToTree(e) {
            if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);else {
              var _t32 = this.openElements.currentTmplContent || this.openElements.current;

              this.treeAdapter.appendChild(_t32, e);
            }
          }
        }, {
          key: "_appendElement",
          value: function _appendElement(e, t) {
            var n = this.treeAdapter.createElement(e.tagName, t, e.attrs);

            this._attachElementToTree(n);
          }
        }, {
          key: "_insertElement",
          value: function _insertElement(e, t) {
            var n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
            this._attachElementToTree(n), this.openElements.push(n);
          }
        }, {
          key: "_insertFakeElement",
          value: function _insertFakeElement(e) {
            var t = this.treeAdapter.createElement(e, pt.HTML, []);
            this._attachElementToTree(t), this.openElements.push(t);
          }
        }, {
          key: "_insertTemplate",
          value: function _insertTemplate(e) {
            var t = this.treeAdapter.createElement(e.tagName, pt.HTML, e.attrs),
                n = this.treeAdapter.createDocumentFragment();
            this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t), this.openElements.push(t);
          }
        }, {
          key: "_insertFakeRootElement",
          value: function _insertFakeRootElement() {
            var e = this.treeAdapter.createElement(mt.HTML, pt.HTML, []);
            this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e);
          }
        }, {
          key: "_appendCommentNode",
          value: function _appendCommentNode(e, t) {
            var n = this.treeAdapter.createCommentNode(e.data);
            this.treeAdapter.appendChild(t, n);
          }
        }, {
          key: "_insertCharacters",
          value: function _insertCharacters(e) {
            if (this._shouldFosterParentOnInsertion()) this._fosterParentText(e.chars);else {
              var _t33 = this.openElements.currentTmplContent || this.openElements.current;

              this.treeAdapter.insertText(_t33, e.chars);
            }
          }
        }, {
          key: "_adoptNodes",
          value: function _adoptNodes(e, t) {
            for (var _n19 = this.treeAdapter.getFirstChild(e); _n19; _n19 = this.treeAdapter.getFirstChild(e)) {
              this.treeAdapter.detachNode(_n19), this.treeAdapter.appendChild(t, _n19);
            }
          }
        }, {
          key: "_shouldProcessTokenInForeignContent",
          value: function _shouldProcessTokenInForeignContent(e) {
            var t = this._getAdjustedCurrentElement();

            if (!t || t === this.document) return !1;
            var n = this.treeAdapter.getNamespaceURI(t);
            if (n === pt.HTML) return !1;
            if (this.treeAdapter.getTagName(t) === mt.ANNOTATION_XML && n === pt.MATHML && e.type === Ge.START_TAG_TOKEN && e.tagName === mt.SVG) return !1;
            var s = e.type === Ge.CHARACTER_TOKEN || e.type === Ge.NULL_CHARACTER_TOKEN || e.type === Ge.WHITESPACE_CHARACTER_TOKEN;
            return (!(e.type === Ge.START_TAG_TOKEN && e.tagName !== mt.MGLYPH && e.tagName !== mt.MALIGNMARK) && !s || !this._isIntegrationPoint(t, pt.MATHML)) && (e.type !== Ge.START_TAG_TOKEN && !s || !this._isIntegrationPoint(t, pt.HTML)) && e.type !== Ge.EOF_TOKEN;
          }
        }, {
          key: "_processToken",
          value: function _processToken(e) {
            dt[this.insertionMode][e.type](this, e);
          }
        }, {
          key: "_processTokenInBodyMode",
          value: function _processTokenInBodyMode(e) {
            dt.IN_BODY_MODE[e.type](this, e);
          }
        }, {
          key: "_processTokenInForeignContent",
          value: function _processTokenInForeignContent(e) {
            e.type === Ge.CHARACTER_TOKEN ? function (e, t) {
              e._insertCharacters(t), e.framesetOk = !1;
            }(this, e) : e.type === Ge.NULL_CHARACTER_TOKEN ? function (e, t) {
              t.chars = n, e._insertCharacters(t);
            }(this, e) : e.type === Ge.WHITESPACE_CHARACTER_TOKEN ? Bt(this, e) : e.type === Ge.COMMENT_TOKEN ? Ut(this, e) : e.type === Ge.START_TAG_TOKEN ? function (e, t) {
              if (lt.causesExit(t) && !e.fragmentContext) {
                for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== pt.HTML && !e._isIntegrationPoint(e.openElements.current);) {
                  e.openElements.pop();
                }

                e._processToken(t);
              } else {
                var _n20 = e._getAdjustedCurrentElement(),
                    _s13 = e.treeAdapter.getNamespaceURI(_n20);

                _s13 === pt.MATHML ? lt.adjustTokenMathMLAttrs(t) : _s13 === pt.SVG && (lt.adjustTokenSVGTagName(t), lt.adjustTokenSVGAttrs(t)), lt.adjustTokenXMLAttrs(t), t.selfClosing ? e._appendElement(t, _s13) : e._insertElement(t, _s13), t.ackSelfClosing = !0;
              }
            }(this, e) : e.type === Ge.END_TAG_TOKEN && function (e, t) {
              for (var _n21 = e.openElements.stackTop; _n21 > 0; _n21--) {
                var _s14 = e.openElements.items[_n21];

                if (e.treeAdapter.getNamespaceURI(_s14) === pt.HTML) {
                  e._processToken(t);

                  break;
                }

                if (e.treeAdapter.getTagName(_s14).toLowerCase() === t.tagName) {
                  e.openElements.popUntilElementPopped(_s14);
                  break;
                }
              }
            }(this, e);
          }
        }, {
          key: "_processInputToken",
          value: function _processInputToken(e) {
            this._shouldProcessTokenInForeignContent(e) ? this._processTokenInForeignContent(e) : this._processToken(e), e.type === Ge.START_TAG_TOKEN && e.selfClosing && !e.ackSelfClosing && this._err(c);
          }
        }, {
          key: "_isIntegrationPoint",
          value: function _isIntegrationPoint(e, t) {
            var n = this.treeAdapter.getTagName(e),
                s = this.treeAdapter.getNamespaceURI(e),
                r = this.treeAdapter.getAttrList(e);
            return lt.isIntegrationPoint(n, s, r, t);
          }
        }, {
          key: "_reconstructActiveFormattingElements",
          value: function _reconstructActiveFormattingElements() {
            var e = this.activeFormattingElements.length;

            if (e) {
              var _t34 = e,
                  _n22 = null;

              do {
                if (_t34--, _n22 = this.activeFormattingElements.entries[_t34], _n22.type === We.MARKER_ENTRY || this.openElements.contains(_n22.element)) {
                  _t34++;
                  break;
                }
              } while (_t34 > 0);

              for (var _s15 = _t34; _s15 < e; _s15++) {
                _n22 = this.activeFormattingElements.entries[_s15], this._insertElement(_n22.token, this.treeAdapter.getNamespaceURI(_n22.element)), _n22.element = this.openElements.current;
              }
            }
          }
        }, {
          key: "_closeTableCell",
          value: function _closeTableCell() {
            this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = "IN_ROW_MODE";
          }
        }, {
          key: "_closePElement",
          value: function _closePElement() {
            this.openElements.generateImpliedEndTagsWithExclusion(mt.P), this.openElements.popUntilTagNamePopped(mt.P);
          }
        }, {
          key: "_resetInsertionMode",
          value: function _resetInsertionMode() {
            for (var _e23 = this.openElements.stackTop, _t35 = !1; _e23 >= 0; _e23--) {
              var _n23 = this.openElements.items[_e23];
              0 === _e23 && (_t35 = !0, this.fragmentContext && (_n23 = this.fragmentContext));

              var _s16 = this.treeAdapter.getTagName(_n23),
                  _r6 = St[_s16];

              if (_r6) {
                this.insertionMode = _r6;
                break;
              }

              if (!(_t35 || _s16 !== mt.TD && _s16 !== mt.TH)) {
                this.insertionMode = "IN_CELL_MODE";
                break;
              }

              if (!_t35 && _s16 === mt.HEAD) {
                this.insertionMode = "IN_HEAD_MODE";
                break;
              }

              if (_s16 === mt.SELECT) {
                this._resetInsertionModeForSelect(_e23);

                break;
              }

              if (_s16 === mt.TEMPLATE) {
                this.insertionMode = this.currentTmplInsertionMode;
                break;
              }

              if (_s16 === mt.HTML) {
                this.insertionMode = this.headElement ? "AFTER_HEAD_MODE" : "BEFORE_HEAD_MODE";
                break;
              }

              if (_t35) {
                this.insertionMode = "IN_BODY_MODE";
                break;
              }
            }
          }
        }, {
          key: "_resetInsertionModeForSelect",
          value: function _resetInsertionModeForSelect(e) {
            if (e > 0) for (var _t36 = e - 1; _t36 > 0; _t36--) {
              var _e24 = this.openElements.items[_t36],
                  _n24 = this.treeAdapter.getTagName(_e24);

              if (_n24 === mt.TEMPLATE) break;
              if (_n24 === mt.TABLE) return void (this.insertionMode = "IN_SELECT_IN_TABLE_MODE");
            }
            this.insertionMode = "IN_SELECT_MODE";
          }
        }, {
          key: "_pushTmplInsertionMode",
          value: function _pushTmplInsertionMode(e) {
            this.tmplInsertionModeStack.push(e), this.tmplInsertionModeStackTop++, this.currentTmplInsertionMode = e;
          }
        }, {
          key: "_popTmplInsertionMode",
          value: function _popTmplInsertionMode() {
            this.tmplInsertionModeStack.pop(), this.tmplInsertionModeStackTop--, this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
          }
        }, {
          key: "_isElementCausesFosterParenting",
          value: function _isElementCausesFosterParenting(e) {
            var t = this.treeAdapter.getTagName(e);
            return t === mt.TABLE || t === mt.TBODY || t === mt.TFOOT || t === mt.THEAD || t === mt.TR;
          }
        }, {
          key: "_shouldFosterParentOnInsertion",
          value: function _shouldFosterParentOnInsertion() {
            return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
          }
        }, {
          key: "_findFosterParentingLocation",
          value: function _findFosterParentingLocation() {
            var e = {
              parent: null,
              beforeElement: null
            };

            for (var _t37 = this.openElements.stackTop; _t37 >= 0; _t37--) {
              var _n25 = this.openElements.items[_t37],
                  _s17 = this.treeAdapter.getTagName(_n25),
                  _r7 = this.treeAdapter.getNamespaceURI(_n25);

              if (_s17 === mt.TEMPLATE && _r7 === pt.HTML) {
                e.parent = this.treeAdapter.getTemplateContent(_n25);
                break;
              }

              if (_s17 === mt.TABLE) {
                e.parent = this.treeAdapter.getParentNode(_n25), e.parent ? e.beforeElement = _n25 : e.parent = this.openElements.items[_t37 - 1];
                break;
              }
            }

            return e.parent || (e.parent = this.openElements.items[0]), e;
          }
        }, {
          key: "_fosterParentElement",
          value: function _fosterParentElement(e) {
            var t = this._findFosterParentingLocation();

            t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e);
          }
        }, {
          key: "_fosterParentText",
          value: function _fosterParentText(e) {
            var t = this._findFosterParentingLocation();

            t.beforeElement ? this.treeAdapter.insertTextBefore(t.parent, e, t.beforeElement) : this.treeAdapter.insertText(t.parent, e);
          }
        }, {
          key: "_isSpecialElement",
          value: function _isSpecialElement(e) {
            var t = this.treeAdapter.getTagName(e),
                n = this.treeAdapter.getNamespaceURI(e);
            return be.SPECIAL_ELEMENTS[n][t];
          }
        }]);

        return Rt;
      }();

      function It(e, t) {
        var n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
        return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagName) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : on(e, t), n;
      }

      function ft(e, t) {
        var n = null;

        for (var _s18 = e.openElements.stackTop; _s18 >= 0; _s18--) {
          var _r8 = e.openElements.items[_s18];
          if (_r8 === t.element) break;
          e._isSpecialElement(_r8) && (n = _r8);
        }

        return n || (e.openElements.popUntilElementPopped(t.element), e.activeFormattingElements.removeEntry(t)), n;
      }

      function Mt(e, t, n) {
        var s = t,
            r = e.openElements.getCommonAncestor(t);

        for (var _i13 = 0, _T2 = r; _T2 !== n; _i13++, _T2 = r) {
          r = e.openElements.getCommonAncestor(_T2);

          var _n26 = e.activeFormattingElements.getElementEntry(_T2),
              _o3 = _n26 && _i13 >= 3;

          !_n26 || _o3 ? (_o3 && e.activeFormattingElements.removeEntry(_n26), e.openElements.remove(_T2)) : (_T2 = Lt(e, _n26), s === t && (e.activeFormattingElements.bookmark = _n26), e.treeAdapter.detachNode(s), e.treeAdapter.appendChild(_T2, s), s = _T2);
        }

        return s;
      }

      function Lt(e, t) {
        var n = e.treeAdapter.getNamespaceURI(t.element),
            s = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
        return e.openElements.replace(t.element, s), t.element = s, s;
      }

      function Dt(e, t, n) {
        if (e._isElementCausesFosterParenting(t)) e._fosterParentElement(n);else {
          var _s19 = e.treeAdapter.getTagName(t),
              _r9 = e.treeAdapter.getNamespaceURI(t);

          _s19 === mt.TEMPLATE && _r9 === pt.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
        }
      }

      function gt(e, t, n) {
        var s = e.treeAdapter.getNamespaceURI(n.element),
            r = n.token,
            i = e.treeAdapter.createElement(r.tagName, s, r.attrs);
        e._adoptNodes(t, i), e.treeAdapter.appendChild(t, i), e.activeFormattingElements.insertElementAfterBookmark(i, n.token), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, i);
      }

      function Pt(e, t) {
        var n;

        for (var _s20 = 0; _s20 < 8 && (n = It(e, t), n); _s20++) {
          var _t38 = ft(e, n);

          if (!_t38) break;
          e.activeFormattingElements.bookmark = n;

          var _s21 = Mt(e, _t38, n.element),
              _r10 = e.openElements.getCommonAncestor(n.element);

          e.treeAdapter.detachNode(_s21), Dt(e, _r10, _s21), gt(e, _t38, n);
        }
      }

      function kt() {}

      function Ht(e) {
        e._err(oe);
      }

      function Ut(e, t) {
        e._appendCommentNode(t, e.openElements.currentTmplContent || e.openElements.current);
      }

      function Ft(e, t) {
        e._appendCommentNode(t, e.document);
      }

      function Bt(e, t) {
        e._insertCharacters(t);
      }

      function Gt(e) {
        e.stopped = !0;
      }

      function Kt(e, t) {
        e._err(Te, {
          beforeToken: !0
        }), e.treeAdapter.setDocumentMode(e.document, be.DOCUMENT_MODE.QUIRKS), e.insertionMode = "BEFORE_HTML_MODE", e._processToken(t);
      }

      function bt(e, t) {
        e._insertFakeRootElement(), e.insertionMode = "BEFORE_HEAD_MODE", e._processToken(t);
      }

      function Yt(e, t) {
        e._insertFakeElement(mt.HEAD), e.headElement = e.openElements.current, e.insertionMode = "IN_HEAD_MODE", e._processToken(t);
      }

      function xt(e, t) {
        var n = t.tagName;
        n === mt.HTML ? sn(e, t) : n === mt.BASE || n === mt.BASEFONT || n === mt.BGSOUND || n === mt.LINK || n === mt.META ? (e._appendElement(t, pt.HTML), t.ackSelfClosing = !0) : n === mt.TITLE ? e._switchToTextParsing(t, Ge.MODE.RCDATA) : n === mt.NOSCRIPT ? e.options.scriptingEnabled ? e._switchToTextParsing(t, Ge.MODE.RAWTEXT) : (e._insertElement(t, pt.HTML), e.insertionMode = "IN_HEAD_NO_SCRIPT_MODE") : n === mt.NOFRAMES || n === mt.STYLE ? e._switchToTextParsing(t, Ge.MODE.RAWTEXT) : n === mt.SCRIPT ? e._switchToTextParsing(t, Ge.MODE.SCRIPT_DATA) : n === mt.TEMPLATE ? (e._insertTemplate(t, pt.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = "IN_TEMPLATE_MODE", e._pushTmplInsertionMode("IN_TEMPLATE_MODE")) : n === mt.HEAD ? e._err(ce) : vt(e, t);
      }

      function yt(e, t) {
        var n = t.tagName;
        n === mt.HEAD ? (e.openElements.pop(), e.insertionMode = "AFTER_HEAD_MODE") : n === mt.BODY || n === mt.BR || n === mt.HTML ? vt(e, t) : n === mt.TEMPLATE && e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagName !== mt.TEMPLATE && e._err(ae), e.openElements.popUntilTagNamePopped(mt.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e._popTmplInsertionMode(), e._resetInsertionMode()) : e._err(Ee);
      }

      function vt(e, t) {
        e.openElements.pop(), e.insertionMode = "AFTER_HEAD_MODE", e._processToken(t);
      }

      function wt(e, t) {
        var n = t.type === Ge.EOF_TOKEN ? Ae : _e;
        e._err(n), e.openElements.pop(), e.insertionMode = "IN_HEAD_MODE", e._processToken(t);
      }

      function Qt(e, t) {
        e._insertFakeElement(mt.BODY), e.insertionMode = "IN_BODY_MODE", e._processToken(t);
      }

      function Xt(e, t) {
        e._reconstructActiveFormattingElements(), e._insertCharacters(t);
      }

      function Wt(e, t) {
        e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
      }

      function Vt(e, t) {
        e.openElements.hasInButtonScope(mt.P) && e._closePElement(), e._insertElement(t, pt.HTML);
      }

      function jt(e, t) {
        e.openElements.hasInButtonScope(mt.P) && e._closePElement(), e._insertElement(t, pt.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
      }

      function zt(e, t) {
        e._reconstructActiveFormattingElements(), e._insertElement(t, pt.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
      }

      function qt(e, t) {
        e._reconstructActiveFormattingElements(), e._insertElement(t, pt.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
      }

      function Jt(e, t) {
        e._reconstructActiveFormattingElements(), e._appendElement(t, pt.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
      }

      function Zt(e, t) {
        e._appendElement(t, pt.HTML), t.ackSelfClosing = !0;
      }

      function $t(e, t) {
        e._switchToTextParsing(t, Ge.MODE.RAWTEXT);
      }

      function en(e, t) {
        e.openElements.currentTagName === mt.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, pt.HTML);
      }

      function tn(e, t) {
        e.openElements.hasInScope(mt.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, pt.HTML);
      }

      function nn(e, t) {
        e._reconstructActiveFormattingElements(), e._insertElement(t, pt.HTML);
      }

      function sn(e, t) {
        var n = t.tagName;

        switch (n.length) {
          case 1:
            n === mt.I || n === mt.S || n === mt.B || n === mt.U ? zt(e, t) : n === mt.P ? Vt(e, t) : n === mt.A ? function (e, t) {
              var n = e.activeFormattingElements.getElementEntryInScopeWithTagName(mt.A);
              n && (Pt(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, pt.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
            }(e, t) : nn(e, t);
            break;

          case 2:
            n === mt.DL || n === mt.OL || n === mt.UL ? Vt(e, t) : n === mt.H1 || n === mt.H2 || n === mt.H3 || n === mt.H4 || n === mt.H5 || n === mt.H6 ? function (e, t) {
              e.openElements.hasInButtonScope(mt.P) && e._closePElement();
              var n = e.openElements.currentTagName;
              n !== mt.H1 && n !== mt.H2 && n !== mt.H3 && n !== mt.H4 && n !== mt.H5 && n !== mt.H6 || e.openElements.pop(), e._insertElement(t, pt.HTML);
            }(e, t) : n === mt.LI || n === mt.DD || n === mt.DT ? function (e, t) {
              e.framesetOk = !1;
              var n = t.tagName;

              for (var _t39 = e.openElements.stackTop; _t39 >= 0; _t39--) {
                var _s22 = e.openElements.items[_t39],
                    _r11 = e.treeAdapter.getTagName(_s22);

                var _i14 = null;

                if (n === mt.LI && _r11 === mt.LI ? _i14 = mt.LI : n !== mt.DD && n !== mt.DT || _r11 !== mt.DD && _r11 !== mt.DT || (_i14 = _r11), _i14) {
                  e.openElements.generateImpliedEndTagsWithExclusion(_i14), e.openElements.popUntilTagNamePopped(_i14);
                  break;
                }

                if (_r11 !== mt.ADDRESS && _r11 !== mt.DIV && _r11 !== mt.P && e._isSpecialElement(_s22)) break;
              }

              e.openElements.hasInButtonScope(mt.P) && e._closePElement(), e._insertElement(t, pt.HTML);
            }(e, t) : n === mt.EM || n === mt.TT ? zt(e, t) : n === mt.BR ? Jt(e, t) : n === mt.HR ? function (e, t) {
              e.openElements.hasInButtonScope(mt.P) && e._closePElement(), e._appendElement(t, pt.HTML), e.framesetOk = !1, e.ackSelfClosing = !0;
            }(e, t) : n === mt.RB ? tn(e, t) : n === mt.RT || n === mt.RP ? function (e, t) {
              e.openElements.hasInScope(mt.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(mt.RTC), e._insertElement(t, pt.HTML);
            }(e, t) : n !== mt.TH && n !== mt.TD && n !== mt.TR && nn(e, t);
            break;

          case 3:
            n === mt.DIV || n === mt.DIR || n === mt.NAV ? Vt(e, t) : n === mt.PRE ? jt(e, t) : n === mt.BIG ? zt(e, t) : n === mt.IMG || n === mt.WBR ? Jt(e, t) : n === mt.XMP ? function (e, t) {
              e.openElements.hasInButtonScope(mt.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, Ge.MODE.RAWTEXT);
            }(e, t) : n === mt.SVG ? function (e, t) {
              e._reconstructActiveFormattingElements(), lt.adjustTokenSVGAttrs(t), lt.adjustTokenXMLAttrs(t), t.selfClosing ? e._appendElement(t, pt.SVG) : e._insertElement(t, pt.SVG), t.ackSelfClosing = !0;
            }(e, t) : n === mt.RTC ? tn(e, t) : n !== mt.COL && nn(e, t);
            break;

          case 4:
            n === mt.HTML ? function (e, t) {
              0 === e.openElements.tmplCount && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
            }(e, t) : n === mt.BASE || n === mt.LINK || n === mt.META ? xt(e, t) : n === mt.BODY ? function (e, t) {
              var n = e.openElements.tryPeekProperlyNestedBodyElement();
              n && 0 === e.openElements.tmplCount && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs));
            }(e, t) : n === mt.MAIN || n === mt.MENU ? Vt(e, t) : n === mt.FORM ? function (e, t) {
              var n = e.openElements.tmplCount > 0;
              e.formElement && !n || (e.openElements.hasInButtonScope(mt.P) && e._closePElement(), e._insertElement(t, pt.HTML), n || (e.formElement = e.openElements.current));
            }(e, t) : n === mt.CODE || n === mt.FONT ? zt(e, t) : n === mt.NOBR ? function (e, t) {
              e._reconstructActiveFormattingElements(), e.openElements.hasInScope(mt.NOBR) && (Pt(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, pt.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
            }(e, t) : n === mt.AREA ? Jt(e, t) : n === mt.MATH ? function (e, t) {
              e._reconstructActiveFormattingElements(), lt.adjustTokenMathMLAttrs(t), lt.adjustTokenXMLAttrs(t), t.selfClosing ? e._appendElement(t, pt.MATHML) : e._insertElement(t, pt.MATHML), t.ackSelfClosing = !0;
            }(e, t) : n === mt.MENU ? function (e, t) {
              e.openElements.hasInButtonScope(mt.P) && e._closePElement(), e._insertElement(t, pt.HTML);
            }(e, t) : n !== mt.HEAD && nn(e, t);
            break;

          case 5:
            n === mt.STYLE || n === mt.TITLE ? xt(e, t) : n === mt.ASIDE ? Vt(e, t) : n === mt.SMALL ? zt(e, t) : n === mt.TABLE ? function (e, t) {
              e.treeAdapter.getDocumentMode(e.document) !== be.DOCUMENT_MODE.QUIRKS && e.openElements.hasInButtonScope(mt.P) && e._closePElement(), e._insertElement(t, pt.HTML), e.framesetOk = !1, e.insertionMode = Ot;
            }(e, t) : n === mt.EMBED ? Jt(e, t) : n === mt.INPUT ? function (e, t) {
              e._reconstructActiveFormattingElements(), e._appendElement(t, pt.HTML);
              var n = Ge.getTokenAttr(t, Nt.TYPE);
              n && "hidden" === n.toLowerCase() || (e.framesetOk = !1), t.ackSelfClosing = !0;
            }(e, t) : n === mt.PARAM || n === mt.TRACK ? Zt(e, t) : n === mt.IMAGE ? function (e, t) {
              t.tagName = mt.IMG, Jt(e, t);
            }(e, t) : n !== mt.FRAME && n !== mt.TBODY && n !== mt.TFOOT && n !== mt.THEAD && nn(e, t);
            break;

          case 6:
            n === mt.SCRIPT ? xt(e, t) : n === mt.CENTER || n === mt.FIGURE || n === mt.FOOTER || n === mt.HEADER || n === mt.HGROUP || n === mt.DIALOG ? Vt(e, t) : n === mt.BUTTON ? function (e, t) {
              e.openElements.hasInScope(mt.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(mt.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, pt.HTML), e.framesetOk = !1;
            }(e, t) : n === mt.STRIKE || n === mt.STRONG ? zt(e, t) : n === mt.APPLET || n === mt.OBJECT ? qt(e, t) : n === mt.KEYGEN ? Jt(e, t) : n === mt.SOURCE ? Zt(e, t) : n === mt.IFRAME ? function (e, t) {
              e.framesetOk = !1, e._switchToTextParsing(t, Ge.MODE.RAWTEXT);
            }(e, t) : n === mt.SELECT ? function (e, t) {
              e._reconstructActiveFormattingElements(), e._insertElement(t, pt.HTML), e.framesetOk = !1, e.insertionMode === Ot || "IN_CAPTION_MODE" === e.insertionMode || "IN_TABLE_BODY_MODE" === e.insertionMode || "IN_ROW_MODE" === e.insertionMode || "IN_CELL_MODE" === e.insertionMode ? e.insertionMode = "IN_SELECT_IN_TABLE_MODE" : e.insertionMode = "IN_SELECT_MODE";
            }(e, t) : n === mt.OPTION ? en(e, t) : nn(e, t);
            break;

          case 7:
            n === mt.BGSOUND ? xt(e, t) : n === mt.DETAILS || n === mt.ADDRESS || n === mt.ARTICLE || n === mt.SECTION || n === mt.SUMMARY ? Vt(e, t) : n === mt.LISTING ? jt(e, t) : n === mt.MARQUEE ? qt(e, t) : n === mt.NOEMBED ? $t(e, t) : n !== mt.CAPTION && nn(e, t);
            break;

          case 8:
            n === mt.BASEFONT ? xt(e, t) : n === mt.FRAMESET ? function (e, t) {
              var n = e.openElements.tryPeekProperlyNestedBodyElement();
              e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, pt.HTML), e.insertionMode = "IN_FRAMESET_MODE");
            }(e, t) : n === mt.FIELDSET ? Vt(e, t) : n === mt.TEXTAREA ? function (e, t) {
              e._insertElement(t, pt.HTML), e.skipNextNewLine = !0, e.tokenizer.state = Ge.MODE.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = "TEXT_MODE";
            }(e, t) : n === mt.TEMPLATE ? xt(e, t) : n === mt.NOSCRIPT ? e.options.scriptingEnabled ? $t(e, t) : nn(e, t) : n === mt.OPTGROUP ? en(e, t) : n !== mt.COLGROUP && nn(e, t);
            break;

          case 9:
            n === mt.PLAINTEXT ? function (e, t) {
              e.openElements.hasInButtonScope(mt.P) && e._closePElement(), e._insertElement(t, pt.HTML), e.tokenizer.state = Ge.MODE.PLAINTEXT;
            }(e, t) : nn(e, t);
            break;

          case 10:
            n === mt.BLOCKQUOTE || n === mt.FIGCAPTION ? Vt(e, t) : nn(e, t);
            break;

          default:
            nn(e, t);
        }
      }

      function rn(e, t) {
        var n = t.tagName;
        e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
      }

      function Tn(e, t) {
        var n = t.tagName;
        e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
      }

      function on(e, t) {
        var n = t.tagName;

        for (var _t40 = e.openElements.stackTop; _t40 > 0; _t40--) {
          var _s23 = e.openElements.items[_t40];

          if (e.treeAdapter.getTagName(_s23) === n) {
            e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilElementPopped(_s23);
            break;
          }

          if (e._isSpecialElement(_s23)) break;
        }
      }

      function En(e, t) {
        var n = t.tagName;

        switch (n.length) {
          case 1:
            n === mt.A || n === mt.B || n === mt.I || n === mt.S || n === mt.U ? Pt(e, t) : n === mt.P ? function (e) {
              e.openElements.hasInButtonScope(mt.P) || e._insertFakeElement(mt.P), e._closePElement();
            }(e) : on(e, t);
            break;

          case 2:
            n === mt.DL || n === mt.UL || n === mt.OL ? rn(e, t) : n === mt.LI ? function (e) {
              e.openElements.hasInListItemScope(mt.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(mt.LI), e.openElements.popUntilTagNamePopped(mt.LI));
            }(e) : n === mt.DD || n === mt.DT ? function (e, t) {
              var n = t.tagName;
              e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
            }(e, t) : n === mt.H1 || n === mt.H2 || n === mt.H3 || n === mt.H4 || n === mt.H5 || n === mt.H6 ? function (e) {
              e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
            }(e) : n === mt.BR ? function (e) {
              e._reconstructActiveFormattingElements(), e._insertFakeElement(mt.BR), e.openElements.pop(), e.framesetOk = !1;
            }(e) : n === mt.EM || n === mt.TT ? Pt(e, t) : on(e, t);
            break;

          case 3:
            n === mt.BIG ? Pt(e, t) : n === mt.DIR || n === mt.DIV || n === mt.NAV || n === mt.PRE ? rn(e, t) : on(e, t);
            break;

          case 4:
            n === mt.BODY ? function (e) {
              e.openElements.hasInScope(mt.BODY) && (e.insertionMode = "AFTER_BODY_MODE");
            }(e) : n === mt.HTML ? function (e, t) {
              e.openElements.hasInScope(mt.BODY) && (e.insertionMode = "AFTER_BODY_MODE", e._processToken(t));
            }(e, t) : n === mt.FORM ? function (e) {
              var t = e.openElements.tmplCount > 0,
                  n = e.formElement;
              t || (e.formElement = null), (n || t) && e.openElements.hasInScope(mt.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(mt.FORM) : e.openElements.remove(n));
            }(e) : n === mt.CODE || n === mt.FONT || n === mt.NOBR ? Pt(e, t) : n === mt.MAIN || n === mt.MENU ? rn(e, t) : on(e, t);
            break;

          case 5:
            n === mt.ASIDE ? rn(e, t) : n === mt.SMALL ? Pt(e, t) : on(e, t);
            break;

          case 6:
            n === mt.CENTER || n === mt.FIGURE || n === mt.FOOTER || n === mt.HEADER || n === mt.HGROUP || n === mt.DIALOG ? rn(e, t) : n === mt.APPLET || n === mt.OBJECT ? Tn(e, t) : n === mt.STRIKE || n === mt.STRONG ? Pt(e, t) : on(e, t);
            break;

          case 7:
            n === mt.ADDRESS || n === mt.ARTICLE || n === mt.DETAILS || n === mt.SECTION || n === mt.SUMMARY || n === mt.LISTING ? rn(e, t) : n === mt.MARQUEE ? Tn(e, t) : on(e, t);
            break;

          case 8:
            n === mt.FIELDSET ? rn(e, t) : n === mt.TEMPLATE ? yt(e, t) : on(e, t);
            break;

          case 10:
            n === mt.BLOCKQUOTE || n === mt.FIGCAPTION ? rn(e, t) : on(e, t);
            break;

          default:
            on(e, t);
        }
      }

      function an(e, t) {
        e.tmplInsertionModeStackTop > -1 ? un(e, t) : e.stopped = !0;
      }

      function _n(e, t) {
        var n = e.openElements.currentTagName;
        n === mt.TABLE || n === mt.TBODY || n === mt.TFOOT || n === mt.THEAD || n === mt.TR ? (e.pendingCharacterTokens = [], e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = "IN_TABLE_TEXT_MODE", e._processToken(t)) : cn(e, t);
      }

      function An(e, t) {
        var n = t.tagName;

        switch (n.length) {
          case 2:
            n === mt.TD || n === mt.TH || n === mt.TR ? function (e, t) {
              e.openElements.clearBackToTableContext(), e._insertFakeElement(mt.TBODY), e.insertionMode = "IN_TABLE_BODY_MODE", e._processToken(t);
            }(e, t) : cn(e, t);
            break;

          case 3:
            n === mt.COL ? function (e, t) {
              e.openElements.clearBackToTableContext(), e._insertFakeElement(mt.COLGROUP), e.insertionMode = "IN_COLUMN_GROUP_MODE", e._processToken(t);
            }(e, t) : cn(e, t);
            break;

          case 4:
            n === mt.FORM ? function (e, t) {
              e.formElement || 0 !== e.openElements.tmplCount || (e._insertElement(t, pt.HTML), e.formElement = e.openElements.current, e.openElements.pop());
            }(e, t) : cn(e, t);
            break;

          case 5:
            n === mt.TABLE ? function (e, t) {
              e.openElements.hasInTableScope(mt.TABLE) && (e.openElements.popUntilTagNamePopped(mt.TABLE), e._resetInsertionMode(), e._processToken(t));
            }(e, t) : n === mt.STYLE ? xt(e, t) : n === mt.TBODY || n === mt.TFOOT || n === mt.THEAD ? function (e, t) {
              e.openElements.clearBackToTableContext(), e._insertElement(t, pt.HTML), e.insertionMode = "IN_TABLE_BODY_MODE";
            }(e, t) : n === mt.INPUT ? function (e, t) {
              var n = Ge.getTokenAttr(t, Nt.TYPE);
              n && "hidden" === n.toLowerCase() ? e._appendElement(t, pt.HTML) : cn(e, t), t.ackSelfClosing = !0;
            }(e, t) : cn(e, t);
            break;

          case 6:
            n === mt.SCRIPT ? xt(e, t) : cn(e, t);
            break;

          case 7:
            n === mt.CAPTION ? function (e, t) {
              e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, pt.HTML), e.insertionMode = "IN_CAPTION_MODE";
            }(e, t) : cn(e, t);
            break;

          case 8:
            n === mt.COLGROUP ? function (e, t) {
              e.openElements.clearBackToTableContext(), e._insertElement(t, pt.HTML), e.insertionMode = "IN_COLUMN_GROUP_MODE";
            }(e, t) : n === mt.TEMPLATE ? xt(e, t) : cn(e, t);
            break;

          default:
            cn(e, t);
        }
      }

      function hn(e, t) {
        var n = t.tagName;
        n === mt.TABLE ? e.openElements.hasInTableScope(mt.TABLE) && (e.openElements.popUntilTagNamePopped(mt.TABLE), e._resetInsertionMode()) : n === mt.TEMPLATE ? yt(e, t) : n !== mt.BODY && n !== mt.CAPTION && n !== mt.COL && n !== mt.COLGROUP && n !== mt.HTML && n !== mt.TBODY && n !== mt.TD && n !== mt.TFOOT && n !== mt.TH && n !== mt.THEAD && n !== mt.TR && cn(e, t);
      }

      function cn(e, t) {
        var n = e.fosterParentingEnabled;
        e.fosterParentingEnabled = !0, e._processTokenInBodyMode(t), e.fosterParentingEnabled = n;
      }

      function ln(e, t) {
        var n = 0;
        if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) {
          cn(e, e.pendingCharacterTokens[n]);
        } else for (; n < e.pendingCharacterTokens.length; n++) {
          e._insertCharacters(e.pendingCharacterTokens[n]);
        }
        e.insertionMode = e.originalInsertionMode, e._processToken(t);
      }

      function mn(e, t) {
        e.openElements.currentTagName === mt.COLGROUP && (e.openElements.pop(), e.insertionMode = Ot, e._processToken(t));
      }

      function pn(e, t) {
        var n = t.tagName;
        n === mt.HTML ? sn(e, t) : n === mt.OPTION ? (e.openElements.currentTagName === mt.OPTION && e.openElements.pop(), e._insertElement(t, pt.HTML)) : n === mt.OPTGROUP ? (e.openElements.currentTagName === mt.OPTION && e.openElements.pop(), e.openElements.currentTagName === mt.OPTGROUP && e.openElements.pop(), e._insertElement(t, pt.HTML)) : n === mt.INPUT || n === mt.KEYGEN || n === mt.TEXTAREA || n === mt.SELECT ? e.openElements.hasInSelectScope(mt.SELECT) && (e.openElements.popUntilTagNamePopped(mt.SELECT), e._resetInsertionMode(), n !== mt.SELECT && e._processToken(t)) : n !== mt.SCRIPT && n !== mt.TEMPLATE || xt(e, t);
      }

      function Nn(e, t) {
        var n = t.tagName;

        if (n === mt.OPTGROUP) {
          var _t41 = e.openElements.items[e.openElements.stackTop - 1],
              _n27 = _t41 && e.treeAdapter.getTagName(_t41);

          e.openElements.currentTagName === mt.OPTION && _n27 === mt.OPTGROUP && e.openElements.pop(), e.openElements.currentTagName === mt.OPTGROUP && e.openElements.pop();
        } else n === mt.OPTION ? e.openElements.currentTagName === mt.OPTION && e.openElements.pop() : n === mt.SELECT && e.openElements.hasInSelectScope(mt.SELECT) ? (e.openElements.popUntilTagNamePopped(mt.SELECT), e._resetInsertionMode()) : n === mt.TEMPLATE && yt(e, t);
      }

      function un(e, t) {
        e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(mt.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e._popTmplInsertionMode(), e._resetInsertionMode(), e._processToken(t)) : e.stopped = !0;
      }

      function On(e, t) {
        e.insertionMode = "IN_BODY_MODE", e._processToken(t);
      }

      function Sn(e, t) {
        e.insertionMode = "IN_BODY_MODE", e._processToken(t);
      }

      return e.parse = function (e, t) {
        return new Rt(t).parse(e);
      }, e.parseFragment = function (e, t, n) {
        return "string" == typeof e && (n = t, t = e, e = null), new Rt(n).parseFragment(t, e);
      }, e;
    }({});

    function parse(e, t) {
      return parse5.parse(e, t);
    }

    function parseFragment(e, t) {
      return parse5.parseFragment(e, t);
    }

    var docParser = new WeakMap();

    function parseDocumentUtil(ownerDocument, html) {
      var doc = parse(html.trim(), getParser(ownerDocument));
      doc.documentElement = doc.firstElementChild;
      doc.head = doc.documentElement.firstElementChild;
      doc.body = doc.head.nextElementSibling;
      return doc;
    }

    function parseFragmentUtil(ownerDocument, html) {
      if (typeof html === 'string') {
        html = html.trim();
      } else {
        html = '';
      }

      var frag = parseFragment(html, getParser(ownerDocument));
      return frag;
    }

    function getParser(ownerDocument) {
      var parseOptions = docParser.get(ownerDocument);

      if (parseOptions != null) {
        return parseOptions;
      }

      var treeAdapter = {
        createDocument: function createDocument() {
          var doc = ownerDocument.createElement("#document"
          /* DOCUMENT_NODE */
          );
          doc['x-mode'] = 'no-quirks';
          return doc;
        },
        createDocumentFragment: function createDocumentFragment() {
          return ownerDocument.createDocumentFragment();
        },
        createElement: function createElement(tagName, namespaceURI, attrs) {
          var elm = ownerDocument.createElementNS(namespaceURI, tagName);

          for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];

            if (attr.namespace == null || attr.namespace === 'http://www.w3.org/1999/xhtml') {
              elm.setAttribute(attr.name, attr.value);
            } else {
              elm.setAttributeNS(attr.namespace, attr.name, attr.value);
            }
          }

          return elm;
        },
        createCommentNode: function createCommentNode(data) {
          return ownerDocument.createComment(data);
        },
        appendChild: function appendChild(parentNode, newNode) {
          parentNode.appendChild(newNode);
        },
        insertBefore: function insertBefore(parentNode, newNode, referenceNode) {
          parentNode.insertBefore(newNode, referenceNode);
        },
        setTemplateContent: function setTemplateContent(templateElement, contentElement) {
          templateElement.content = contentElement;
        },
        getTemplateContent: function getTemplateContent(templateElement) {
          return templateElement.content;
        },
        setDocumentType: function setDocumentType(doc, name, publicId, systemId) {
          var doctypeNode = doc.childNodes.find(function (n) {
            return n.nodeType === 10;
          }
          /* DOCUMENT_TYPE_NODE */
          );

          if (doctypeNode == null) {
            doctypeNode = ownerDocument.createDocumentTypeNode();
            doc.insertBefore(doctypeNode, doc.firstChild);
          }

          doctypeNode.nodeValue = '!DOCTYPE';
          doctypeNode['x-name'] = name;
          doctypeNode['x-publicId'] = publicId;
          doctypeNode['x-systemId'] = systemId;
        },
        setDocumentMode: function setDocumentMode(doc, mode) {
          doc['x-mode'] = mode;
        },
        getDocumentMode: function getDocumentMode(doc) {
          return doc['x-mode'];
        },
        detachNode: function detachNode(node) {
          node.remove();
        },
        insertText: function insertText(parentNode, text) {
          var lastChild = parentNode.lastChild;

          if (lastChild != null && lastChild.nodeType === 3
          /* TEXT_NODE */
          ) {
              lastChild.nodeValue += text;
            } else {
            parentNode.appendChild(ownerDocument.createTextNode(text));
          }
        },
        insertTextBefore: function insertTextBefore(parentNode, text, referenceNode) {
          var prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];

          if (prevNode != null && prevNode.nodeType === 3
          /* TEXT_NODE */
          ) {
              prevNode.nodeValue += text;
            } else {
            parentNode.insertBefore(ownerDocument.createTextNode(text), referenceNode);
          }
        },
        adoptAttributes: function adoptAttributes(recipient, attrs) {
          for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i];

            if (recipient.hasAttributeNS(attr.namespace, attr.name) === false) {
              recipient.setAttributeNS(attr.namespace, attr.name, attr.value);
            }
          }
        },
        getFirstChild: function getFirstChild(node) {
          return node.childNodes[0];
        },
        getChildNodes: function getChildNodes(node) {
          return node.childNodes;
        },
        getParentNode: function getParentNode(node) {
          return node.parentNode;
        },
        getAttrList: function getAttrList(element) {
          var attrs = element.attributes.__items.map(function (attr) {
            return {
              name: attr.name,
              value: attr.value,
              namespace: attr.namespaceURI,
              prefix: null
            };
          });

          return attrs;
        },
        getTagName: function getTagName(element) {
          if (element.namespaceURI === 'http://www.w3.org/1999/xhtml') {
            return element.nodeName.toLowerCase();
          } else {
            return element.nodeName;
          }
        },
        getNamespaceURI: function getNamespaceURI(element) {
          return element.namespaceURI;
        },
        getTextNodeContent: function getTextNodeContent(textNode) {
          return textNode.nodeValue;
        },
        getCommentNodeContent: function getCommentNodeContent(commentNode) {
          return commentNode.nodeValue;
        },
        getDocumentTypeNodeName: function getDocumentTypeNodeName(doctypeNode) {
          return doctypeNode['x-name'];
        },
        getDocumentTypeNodePublicId: function getDocumentTypeNodePublicId(doctypeNode) {
          return doctypeNode['x-publicId'];
        },
        getDocumentTypeNodeSystemId: function getDocumentTypeNodeSystemId(doctypeNode) {
          return doctypeNode['x-systemId'];
        },
        isTextNode: function isTextNode(node) {
          return node.nodeType === 3
          /* TEXT_NODE */
          ;
        },
        isCommentNode: function isCommentNode(node) {
          return node.nodeType === 8
          /* COMMENT_NODE */
          ;
        },
        isDocumentTypeNode: function isDocumentTypeNode(node) {
          return node.nodeType === 10
          /* DOCUMENT_TYPE_NODE */
          ;
        },
        isElementNode: function isElementNode(node) {
          return node.nodeType === 1
          /* ELEMENT_NODE */
          ;
        }
      };
      parseOptions = {
        treeAdapter: treeAdapter
      };
      docParser.set(ownerDocument, parseOptions);
      return parseOptions;
    }

    var MockNode = /*#__PURE__*/function () {
      function MockNode(ownerDocument, nodeType, nodeName, nodeValue) {
        _classCallCheck(this, MockNode);

        this.ownerDocument = ownerDocument;
        this.nodeType = nodeType;
        this.nodeName = nodeName;
        this.nodeValue = nodeValue;
        this.parentNode = null;
        this.childNodes = [];
      }

      _createClass(MockNode, [{
        key: "appendChild",
        value: function appendChild(newNode) {
          if (newNode.nodeType === 11
          /* DOCUMENT_FRAGMENT_NODE */
          ) {
              var nodes = newNode.childNodes.slice();

              var _iterator = _createForOfIteratorHelper(nodes),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var child = _step.value;
                  this.appendChild(child);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
            newNode.remove();
            newNode.parentNode = this;
            this.childNodes.push(newNode);
            connectNode(this.ownerDocument, newNode);
          }

          return newNode;
        }
      }, {
        key: "append",
        value: function append() {
          var _this18 = this;

          for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            items[_key3] = arguments[_key3];
          }

          items.forEach(function (item) {
            var isNode = typeof item === 'object' && item !== null && 'nodeType' in item;

            _this18.appendChild(isNode ? item : _this18.ownerDocument.createTextNode(String(item)));
          });
        }
      }, {
        key: "prepend",
        value: function prepend() {
          var _this19 = this;

          var firstChild = this.firstChild;

          for (var _len4 = arguments.length, items = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            items[_key4] = arguments[_key4];
          }

          items.forEach(function (item) {
            var isNode = typeof item === 'object' && item !== null && 'nodeType' in item;

            _this19.insertBefore(isNode ? item : _this19.ownerDocument.createTextNode(String(item)), firstChild);
          });
        }
      }, {
        key: "cloneNode",
        value: function cloneNode(deep) {
          throw new Error("invalid node type to clone: ".concat(this.nodeType, ", deep: ").concat(deep));
        }
      }, {
        key: "compareDocumentPosition",
        value: function compareDocumentPosition(_other) {
          // unimplemented
          // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
          return -1;
        }
      }, {
        key: "insertBefore",
        value: function insertBefore(newNode, referenceNode) {
          if (newNode.nodeType === 11
          /* DOCUMENT_FRAGMENT_NODE */
          ) {
              for (var i = 0, ii = newNode.childNodes.length; i < ii; i++) {
                _insertBefore(this, newNode.childNodes[i], referenceNode);
              }
            } else {
            _insertBefore(this, newNode, referenceNode);
          }

          return newNode;
        }
      }, {
        key: "isSameNode",
        value: function isSameNode(node) {
          return this === node;
        }
      }, {
        key: "contains",
        value: function contains(otherNode) {
          return this.childNodes.includes(otherNode);
        }
      }, {
        key: "removeChild",
        value: function removeChild(childNode) {
          var index = this.childNodes.indexOf(childNode);

          if (index > -1) {
            this.childNodes.splice(index, 1);

            if (this.nodeType === 1
            /* ELEMENT_NODE */
            ) {
                var wasConnected = this.isConnected;
                childNode.parentNode = null;

                if (wasConnected === true) {
                  disconnectNode(childNode);
                }
              } else {
              childNode.parentNode = null;
            }
          } else {
            throw new Error("node not found within childNodes during removeChild");
          }

          return childNode;
        }
      }, {
        key: "remove",
        value: function remove() {
          if (this.parentNode != null) {
            this.parentNode.removeChild(this);
          }
        }
      }, {
        key: "replaceChild",
        value: function replaceChild(newChild, oldChild) {
          if (oldChild.parentNode === this) {
            this.insertBefore(newChild, oldChild);
            oldChild.remove();
            return newChild;
          }

          return null;
        }
      }, {
        key: "firstChild",
        get: function get() {
          return this.childNodes[0] || null;
        }
      }, {
        key: "isConnected",
        get: function get() {
          var node = this;

          while (node != null) {
            if (node.nodeType === 9
            /* DOCUMENT_NODE */
            ) {
                return true;
              }

            node = node.parentNode;

            if (node != null && node.nodeType === 11
            /* DOCUMENT_FRAGMENT_NODE */
            ) {
                node = node.host;
              }
          }

          return false;
        }
      }, {
        key: "lastChild",
        get: function get() {
          return this.childNodes[this.childNodes.length - 1] || null;
        }
      }, {
        key: "nextSibling",
        get: function get() {
          if (this.parentNode != null) {
            var index = this.parentNode.childNodes.indexOf(this) + 1;
            return this.parentNode.childNodes[index] || null;
          }

          return null;
        }
      }, {
        key: "parentElement",
        get: function get() {
          return this.parentNode || null;
        },
        set: function set(value) {
          this.parentNode = value;
        }
      }, {
        key: "previousSibling",
        get: function get() {
          if (this.parentNode != null) {
            var index = this.parentNode.childNodes.indexOf(this) - 1;
            return this.parentNode.childNodes[index] || null;
          }

          return null;
        }
      }, {
        key: "textContent",
        get: function get() {
          return this.nodeValue;
        },
        set: function set(value) {
          this.nodeValue = String(value);
        }
      }]);

      return MockNode;
    }();

    MockNode.ELEMENT_NODE = 1;
    MockNode.TEXT_NODE = 3;
    MockNode.PROCESSING_INSTRUCTION_NODE = 7;
    MockNode.COMMENT_NODE = 8;
    MockNode.DOCUMENT_NODE = 9;
    MockNode.DOCUMENT_TYPE_NODE = 10;
    MockNode.DOCUMENT_FRAGMENT_NODE = 11;

    var MockNodeList = function MockNodeList(ownerDocument, childNodes, length) {
      _classCallCheck(this, MockNodeList);

      this.ownerDocument = ownerDocument;
      this.childNodes = childNodes;
      this.length = length;
    };

    var MockElement = /*#__PURE__*/function (_MockNode) {
      _inherits(MockElement, _MockNode);

      var _super12 = _createSuper(MockElement);

      function MockElement(ownerDocument, nodeName) {
        var _this20;

        _classCallCheck(this, MockElement);

        _this20 = _super12.call(this, ownerDocument, 1
        /* ELEMENT_NODE */
        , typeof nodeName === 'string' ? nodeName : null, null);
        _this20.namespaceURI = null;
        return _this20;
      }

      _createClass(MockElement, [{
        key: "addEventListener",
        value: function addEventListener(type, handler) {
          _addEventListener(this, type, handler);
        }
      }, {
        key: "attachShadow",
        value: function attachShadow(_opts) {
          var shadowRoot = this.ownerDocument.createDocumentFragment();
          this.shadowRoot = shadowRoot;
          return shadowRoot;
        }
      }, {
        key: "click",
        value: function click() {
          _dispatchEvent(this, new MockEvent('click', {
            bubbles: true,
            cancelable: true,
            composed: true
          }));
        }
      }, {
        key: "cloneNode",
        value: function cloneNode(_deep) {
          // implemented on MockElement.prototype from within element.ts
          return null;
        }
      }, {
        key: "closest",
        value: function closest(selector) {
          var elm = this;

          while (elm != null) {
            if (elm.matches(selector)) {
              return elm;
            }

            elm = elm.parentNode;
          }

          return null;
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(ev) {
          return _dispatchEvent(this, ev);
        }
      }, {
        key: "getAttribute",
        value: function getAttribute(attrName) {
          if (attrName === 'style') {
            if (this.__style != null && this.__style.length > 0) {
              return this.style.cssText;
            }

            return null;
          }

          var attr = this.attributes.getNamedItem(attrName);

          if (attr != null) {
            return attr.value;
          }

          return null;
        }
      }, {
        key: "getAttributeNS",
        value: function getAttributeNS(namespaceURI, attrName) {
          var attr = this.attributes.getNamedItemNS(namespaceURI, attrName);

          if (attr != null) {
            return attr.value;
          }

          return null;
        }
      }, {
        key: "getBoundingClientRect",
        value: function getBoundingClientRect() {
          return {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
            x: 0,
            y: 0
          };
        }
      }, {
        key: "getRootNode",
        value: function getRootNode(opts) {
          var isComposed = opts != null && opts.composed === true;
          var node = this;

          while (node.parentNode != null) {
            node = node.parentNode;

            if (isComposed === true && node.parentNode == null && node.host != null) {
              node = node.host;
            }
          }

          return node;
        }
      }, {
        key: "hasChildNodes",
        value: function hasChildNodes() {
          return this.childNodes.length > 0;
        }
      }, {
        key: "insertAdjacentElement",
        value: function insertAdjacentElement(position, elm) {
          if (position === 'beforebegin') {
            _insertBefore(this.parentNode, elm, this);
          } else if (position === 'afterbegin') {
            this.prepend(elm);
          } else if (position === 'beforeend') {
            this.appendChild(elm);
          } else if (position === 'afterend') {
            _insertBefore(this.parentNode, elm, this.nextSibling);
          }

          return elm;
        }
      }, {
        key: "insertAdjacentHTML",
        value: function insertAdjacentHTML(position, html) {
          var frag = parseFragmentUtil(this.ownerDocument, html);

          if (position === 'beforebegin') {
            while (frag.childNodes.length > 0) {
              _insertBefore(this.parentNode, frag.childNodes[0], this);
            }
          } else if (position === 'afterbegin') {
            while (frag.childNodes.length > 0) {
              this.prepend(frag.childNodes[frag.childNodes.length - 1]);
            }
          } else if (position === 'beforeend') {
            while (frag.childNodes.length > 0) {
              this.appendChild(frag.childNodes[0]);
            }
          } else if (position === 'afterend') {
            while (frag.childNodes.length > 0) {
              _insertBefore(this.parentNode, frag.childNodes[frag.childNodes.length - 1], this.nextSibling);
            }
          }
        }
      }, {
        key: "insertAdjacentText",
        value: function insertAdjacentText(position, text) {
          var elm = this.ownerDocument.createTextNode(text);

          if (position === 'beforebegin') {
            _insertBefore(this.parentNode, elm, this);
          } else if (position === 'afterbegin') {
            this.prepend(elm);
          } else if (position === 'beforeend') {
            this.appendChild(elm);
          } else if (position === 'afterend') {
            _insertBefore(this.parentNode, elm, this.nextSibling);
          }
        }
      }, {
        key: "hasAttribute",
        value: function hasAttribute(attrName) {
          if (attrName === 'style') {
            return this.__style != null && this.__style.length > 0;
          }

          return this.getAttribute(attrName) !== null;
        }
      }, {
        key: "hasAttributeNS",
        value: function hasAttributeNS(namespaceURI, name) {
          return this.getAttributeNS(namespaceURI, name) !== null;
        }
      }, {
        key: "matches",
        value: function matches(selector) {
          return _matches(selector, this);
        }
      }, {
        key: "getElementsByClassName",
        value: function getElementsByClassName(classNames) {
          var classes = classNames.trim().split(' ').filter(function (c) {
            return c.length > 0;
          });
          var results = [];

          _getElementsByClassName(this, classes, results);

          return results;
        }
      }, {
        key: "getElementsByTagName",
        value: function getElementsByTagName(tagName) {
          var results = [];

          _getElementsByTagName(this, tagName.toLowerCase(), results);

          return results;
        }
      }, {
        key: "querySelector",
        value: function querySelector(selector) {
          return selectOne(selector, this);
        }
      }, {
        key: "querySelectorAll",
        value: function querySelectorAll(selector) {
          return selectAll(selector, this);
        }
      }, {
        key: "removeAttribute",
        value: function removeAttribute(attrName) {
          if (attrName === 'style') {
            delete this.__style;
          } else {
            var attr = this.attributes.getNamedItem(attrName);

            if (attr != null) {
              this.attributes.removeNamedItemNS(attr);

              if (checkAttributeChanged(this) === true) {
                attributeChanged(this, attrName, attr.value, null);
              }
            }
          }
        }
      }, {
        key: "removeAttributeNS",
        value: function removeAttributeNS(namespaceURI, attrName) {
          var attr = this.attributes.getNamedItemNS(namespaceURI, attrName);

          if (attr != null) {
            this.attributes.removeNamedItemNS(attr);

            if (checkAttributeChanged(this) === true) {
              attributeChanged(this, attrName, attr.value, null);
            }
          }
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(type, handler) {
          _removeEventListener(this, type, handler);
        }
      }, {
        key: "setAttribute",
        value: function setAttribute(attrName, value) {
          if (attrName === 'style') {
            this.style = value;
          } else {
            var attributes = this.attributes;
            var attr = attributes.getNamedItem(attrName);
            var checkAttrChanged = checkAttributeChanged(this);

            if (attr != null) {
              if (checkAttrChanged === true) {
                var oldValue = attr.value;
                attr.value = value;

                if (oldValue !== attr.value) {
                  attributeChanged(this, attr.name, oldValue, attr.value);
                }
              } else {
                attr.value = value;
              }
            } else {
              if (attributes.caseInsensitive) {
                attrName = attrName.toLowerCase();
              }

              attr = new MockAttr(attrName, value);

              attributes.__items.push(attr);

              if (checkAttrChanged === true) {
                attributeChanged(this, attrName, null, attr.value);
              }
            }
          }
        }
      }, {
        key: "setAttributeNS",
        value: function setAttributeNS(namespaceURI, attrName, value) {
          var attributes = this.attributes;
          var attr = attributes.getNamedItemNS(namespaceURI, attrName);
          var checkAttrChanged = checkAttributeChanged(this);

          if (attr != null) {
            if (checkAttrChanged === true) {
              var oldValue = attr.value;
              attr.value = value;

              if (oldValue !== attr.value) {
                attributeChanged(this, attr.name, oldValue, attr.value);
              }
            } else {
              attr.value = value;
            }
          } else {
            attr = new MockAttr(attrName, value, namespaceURI);

            attributes.__items.push(attr);

            if (checkAttrChanged === true) {
              attributeChanged(this, attrName, null, attr.value);
            }
          }
        }
      }, {
        key: "onanimationstart",
        value: function onanimationstart() {
          /**/
        }
      }, {
        key: "onanimationend",
        value: function onanimationend() {
          /**/
        }
      }, {
        key: "onanimationiteration",
        value: function onanimationiteration() {
          /**/
        }
      }, {
        key: "onabort",
        value: function onabort() {
          /**/
        }
      }, {
        key: "onauxclick",
        value: function onauxclick() {
          /**/
        }
      }, {
        key: "onbeforecopy",
        value: function onbeforecopy() {
          /**/
        }
      }, {
        key: "onbeforecut",
        value: function onbeforecut() {
          /**/
        }
      }, {
        key: "onbeforepaste",
        value: function onbeforepaste() {
          /**/
        }
      }, {
        key: "onblur",
        value: function onblur() {
          /**/
        }
      }, {
        key: "oncancel",
        value: function oncancel() {
          /**/
        }
      }, {
        key: "oncanplay",
        value: function oncanplay() {
          /**/
        }
      }, {
        key: "oncanplaythrough",
        value: function oncanplaythrough() {
          /**/
        }
      }, {
        key: "onchange",
        value: function onchange() {
          /**/
        }
      }, {
        key: "onclick",
        value: function onclick() {
          /**/
        }
      }, {
        key: "onclose",
        value: function onclose() {
          /**/
        }
      }, {
        key: "oncontextmenu",
        value: function oncontextmenu() {
          /**/
        }
      }, {
        key: "oncopy",
        value: function oncopy() {
          /**/
        }
      }, {
        key: "oncuechange",
        value: function oncuechange() {
          /**/
        }
      }, {
        key: "oncut",
        value: function oncut() {
          /**/
        }
      }, {
        key: "ondblclick",
        value: function ondblclick() {
          /**/
        }
      }, {
        key: "ondrag",
        value: function ondrag() {
          /**/
        }
      }, {
        key: "ondragend",
        value: function ondragend() {
          /**/
        }
      }, {
        key: "ondragenter",
        value: function ondragenter() {
          /**/
        }
      }, {
        key: "ondragleave",
        value: function ondragleave() {
          /**/
        }
      }, {
        key: "ondragover",
        value: function ondragover() {
          /**/
        }
      }, {
        key: "ondragstart",
        value: function ondragstart() {
          /**/
        }
      }, {
        key: "ondrop",
        value: function ondrop() {
          /**/
        }
      }, {
        key: "ondurationchange",
        value: function ondurationchange() {
          /**/
        }
      }, {
        key: "onemptied",
        value: function onemptied() {
          /**/
        }
      }, {
        key: "onended",
        value: function onended() {
          /**/
        }
      }, {
        key: "onerror",
        value: function onerror() {
          /**/
        }
      }, {
        key: "onfocus",
        value: function onfocus() {
          /**/
        }
      }, {
        key: "onformdata",
        value: function onformdata() {
          /**/
        }
      }, {
        key: "onfullscreenchange",
        value: function onfullscreenchange() {
          /**/
        }
      }, {
        key: "onfullscreenerror",
        value: function onfullscreenerror() {
          /**/
        }
      }, {
        key: "ongotpointercapture",
        value: function ongotpointercapture() {
          /**/
        }
      }, {
        key: "oninput",
        value: function oninput() {
          /**/
        }
      }, {
        key: "oninvalid",
        value: function oninvalid() {
          /**/
        }
      }, {
        key: "onkeydown",
        value: function onkeydown() {
          /**/
        }
      }, {
        key: "onkeypress",
        value: function onkeypress() {
          /**/
        }
      }, {
        key: "onkeyup",
        value: function onkeyup() {
          /**/
        }
      }, {
        key: "onload",
        value: function onload() {
          /**/
        }
      }, {
        key: "onloadeddata",
        value: function onloadeddata() {
          /**/
        }
      }, {
        key: "onloadedmetadata",
        value: function onloadedmetadata() {
          /**/
        }
      }, {
        key: "onloadstart",
        value: function onloadstart() {
          /**/
        }
      }, {
        key: "onlostpointercapture",
        value: function onlostpointercapture() {
          /**/
        }
      }, {
        key: "onmousedown",
        value: function onmousedown() {
          /**/
        }
      }, {
        key: "onmouseenter",
        value: function onmouseenter() {
          /**/
        }
      }, {
        key: "onmouseleave",
        value: function onmouseleave() {
          /**/
        }
      }, {
        key: "onmousemove",
        value: function onmousemove() {
          /**/
        }
      }, {
        key: "onmouseout",
        value: function onmouseout() {
          /**/
        }
      }, {
        key: "onmouseover",
        value: function onmouseover() {
          /**/
        }
      }, {
        key: "onmouseup",
        value: function onmouseup() {
          /**/
        }
      }, {
        key: "onmousewheel",
        value: function onmousewheel() {
          /**/
        }
      }, {
        key: "onpaste",
        value: function onpaste() {
          /**/
        }
      }, {
        key: "onpause",
        value: function onpause() {
          /**/
        }
      }, {
        key: "onplay",
        value: function onplay() {
          /**/
        }
      }, {
        key: "onplaying",
        value: function onplaying() {
          /**/
        }
      }, {
        key: "onpointercancel",
        value: function onpointercancel() {
          /**/
        }
      }, {
        key: "onpointerdown",
        value: function onpointerdown() {
          /**/
        }
      }, {
        key: "onpointerenter",
        value: function onpointerenter() {
          /**/
        }
      }, {
        key: "onpointerleave",
        value: function onpointerleave() {
          /**/
        }
      }, {
        key: "onpointermove",
        value: function onpointermove() {
          /**/
        }
      }, {
        key: "onpointerout",
        value: function onpointerout() {
          /**/
        }
      }, {
        key: "onpointerover",
        value: function onpointerover() {
          /**/
        }
      }, {
        key: "onpointerup",
        value: function onpointerup() {
          /**/
        }
      }, {
        key: "onprogress",
        value: function onprogress() {
          /**/
        }
      }, {
        key: "onratechange",
        value: function onratechange() {
          /**/
        }
      }, {
        key: "onreset",
        value: function onreset() {
          /**/
        }
      }, {
        key: "onresize",
        value: function onresize() {
          /**/
        }
      }, {
        key: "onscroll",
        value: function onscroll() {
          /**/
        }
      }, {
        key: "onsearch",
        value: function onsearch() {
          /**/
        }
      }, {
        key: "onseeked",
        value: function onseeked() {
          /**/
        }
      }, {
        key: "onseeking",
        value: function onseeking() {
          /**/
        }
      }, {
        key: "onselect",
        value: function onselect() {
          /**/
        }
      }, {
        key: "onselectstart",
        value: function onselectstart() {
          /**/
        }
      }, {
        key: "onstalled",
        value: function onstalled() {
          /**/
        }
      }, {
        key: "onsubmit",
        value: function onsubmit() {
          /**/
        }
      }, {
        key: "onsuspend",
        value: function onsuspend() {
          /**/
        }
      }, {
        key: "ontimeupdate",
        value: function ontimeupdate() {
          /**/
        }
      }, {
        key: "ontoggle",
        value: function ontoggle() {
          /**/
        }
      }, {
        key: "onvolumechange",
        value: function onvolumechange() {
          /**/
        }
      }, {
        key: "onwaiting",
        value: function onwaiting() {
          /**/
        }
      }, {
        key: "onwebkitfullscreenchange",
        value: function onwebkitfullscreenchange() {
          /**/
        }
      }, {
        key: "onwebkitfullscreenerror",
        value: function onwebkitfullscreenerror() {
          /**/
        }
      }, {
        key: "onwheel",
        value: function onwheel() {
          /**/
        }
      }, {
        key: "toString",
        value: function toString(opts) {
          return serializeNodeToHtml(this, opts);
        }
      }, {
        key: "shadowRoot",
        get: function get() {
          return this.__shadowRoot || null;
        },
        set: function set(shadowRoot) {
          if (shadowRoot != null) {
            shadowRoot.host = this;
            this.__shadowRoot = shadowRoot;
          } else {
            delete this.__shadowRoot;
          }
        }
      }, {
        key: "attributes",
        get: function get() {
          if (this.__attributeMap == null) {
            this.__attributeMap = createAttributeProxy(false);
          }

          return this.__attributeMap;
        },
        set: function set(attrs) {
          this.__attributeMap = attrs;
        }
      }, {
        key: "children",
        get: function get() {
          return this.childNodes.filter(function (n) {
            return n.nodeType === 1;
          }
          /* ELEMENT_NODE */
          );
        }
      }, {
        key: "childElementCount",
        get: function get() {
          return this.childNodes.filter(function (n) {
            return n.nodeType === 1;
          }
          /* ELEMENT_NODE */
          ).length;
        }
      }, {
        key: "className",
        get: function get() {
          return this.getAttributeNS(null, 'class') || '';
        },
        set: function set(value) {
          this.setAttributeNS(null, 'class', value);
        }
      }, {
        key: "classList",
        get: function get() {
          return new MockClassList(this);
        }
      }, {
        key: "dataset",
        get: function get() {
          return dataset(this);
        }
      }, {
        key: "dir",
        get: function get() {
          return this.getAttributeNS(null, 'dir') || '';
        },
        set: function set(value) {
          this.setAttributeNS(null, 'dir', value);
        }
      }, {
        key: "firstElementChild",
        get: function get() {
          return this.children[0] || null;
        }
      }, {
        key: "id",
        get: function get() {
          return this.getAttributeNS(null, 'id') || '';
        },
        set: function set(value) {
          this.setAttributeNS(null, 'id', value);
        }
      }, {
        key: "innerHTML",
        get: function get() {
          if (this.childNodes.length === 0) {
            return '';
          }

          return serializeNodeToHtml(this, {
            newLines: false,
            indentSpaces: 0
          });
        },
        set: function set(html) {
          if (NON_ESCAPABLE_CONTENT.has(this.nodeName) === true) {
            setTextContent(this, html);
          } else {
            for (var i = this.childNodes.length - 1; i >= 0; i--) {
              this.removeChild(this.childNodes[i]);
            }

            if (typeof html === 'string') {
              var frag = parseFragmentUtil(this.ownerDocument, html);

              while (frag.childNodes.length > 0) {
                this.appendChild(frag.childNodes[0]);
              }
            }
          }
        }
      }, {
        key: "innerText",
        get: function get() {
          var text = [];
          getTextContent(this.childNodes, text);
          return text.join('');
        },
        set: function set(value) {
          setTextContent(this, value);
        }
      }, {
        key: "hidden",
        get: function get() {
          return this.hasAttributeNS(null, 'hidden');
        },
        set: function set(isHidden) {
          if (isHidden === true) {
            this.setAttributeNS(null, 'hidden', '');
          } else {
            this.removeAttributeNS(null, 'hidden');
          }
        }
      }, {
        key: "lang",
        get: function get() {
          return this.getAttributeNS(null, 'lang') || '';
        },
        set: function set(value) {
          this.setAttributeNS(null, 'lang', value);
        }
      }, {
        key: "lastElementChild",
        get: function get() {
          var children = this.children;
          return children[children.length - 1] || null;
        }
      }, {
        key: "nextElementSibling",
        get: function get() {
          var parentElement = this.parentElement;

          if (parentElement != null && (parentElement.nodeType === 1
          /* ELEMENT_NODE */
          || parentElement.nodeType === 11
          /* DOCUMENT_FRAGMENT_NODE */
          || parentElement.nodeType === 9
          /* DOCUMENT_NODE */
          )) {
            var children = parentElement.children;
            var index = children.indexOf(this) + 1;
            return parentElement.children[index] || null;
          }

          return null;
        }
      }, {
        key: "outerHTML",
        get: function get() {
          return serializeNodeToHtml(this, {
            newLines: false,
            outerHtml: true,
            indentSpaces: 0
          });
        }
      }, {
        key: "previousElementSibling",
        get: function get() {
          var parentElement = this.parentElement;

          if (parentElement != null && (parentElement.nodeType === 1
          /* ELEMENT_NODE */
          || parentElement.nodeType === 11
          /* DOCUMENT_FRAGMENT_NODE */
          || parentElement.nodeType === 9
          /* DOCUMENT_NODE */
          )) {
            var children = parentElement.children;
            var index = children.indexOf(this) - 1;
            return parentElement.children[index] || null;
          }

          return null;
        }
      }, {
        key: "style",
        get: function get() {
          if (this.__style == null) {
            this.__style = createCSSStyleDeclaration();
          }

          return this.__style;
        },
        set: function set(val) {
          if (typeof val === 'string') {
            if (this.__style == null) {
              this.__style = createCSSStyleDeclaration();
            }

            this.__style.cssText = val;
          } else {
            this.__style = val;
          }
        }
      }, {
        key: "tabIndex",
        get: function get() {
          return parseInt(this.getAttributeNS(null, 'tabindex') || '-1', 10);
        },
        set: function set(value) {
          this.setAttributeNS(null, 'tabindex', value);
        }
      }, {
        key: "tagName",
        get: function get() {
          return this.nodeName;
        },
        set: function set(value) {
          this.nodeName = value;
        }
      }, {
        key: "textContent",
        get: function get() {
          var text = [];
          getTextContent(this.childNodes, text);
          return text.join('');
        },
        set: function set(value) {
          setTextContent(this, value);
        }
      }, {
        key: "title",
        get: function get() {
          return this.getAttributeNS(null, 'title') || '';
        },
        set: function set(value) {
          this.setAttributeNS(null, 'title', value);
        }
      }]);

      return MockElement;
    }(MockNode);

    function _getElementsByClassName(elm, classNames, foundElms) {
      var children = elm.children;

      for (var i = 0, ii = children.length; i < ii; i++) {
        var childElm = children[i];

        for (var j = 0, jj = classNames.length; j < jj; j++) {
          if (childElm.classList.contains(classNames[j])) {
            foundElms.push(childElm);
          }
        }

        _getElementsByClassName(childElm, classNames, foundElms);
      }
    }

    function _getElementsByTagName(elm, tagName, foundElms) {
      var children = elm.children;

      for (var i = 0, ii = children.length; i < ii; i++) {
        var childElm = children[i];

        if (tagName === '*' || childElm.nodeName.toLowerCase() === tagName) {
          foundElms.push(childElm);
        }

        _getElementsByTagName(childElm, tagName, foundElms);
      }
    }

    function resetElement(elm) {
      resetEventListeners(elm);
      delete elm.__attributeMap;
      delete elm.__shadowRoot;
      delete elm.__style;
    }

    function _insertBefore(parentNode, newNode, referenceNode) {
      if (newNode !== referenceNode) {
        newNode.remove();
        newNode.parentNode = parentNode;
        newNode.ownerDocument = parentNode.ownerDocument;

        if (referenceNode != null) {
          var index = parentNode.childNodes.indexOf(referenceNode);

          if (index > -1) {
            parentNode.childNodes.splice(index, 0, newNode);
          } else {
            throw new Error("referenceNode not found in parentNode.childNodes");
          }
        } else {
          parentNode.childNodes.push(newNode);
        }

        connectNode(parentNode.ownerDocument, newNode);
      }

      return newNode;
    }

    var MockHTMLElement = /*#__PURE__*/function (_MockElement) {
      _inherits(MockHTMLElement, _MockElement);

      var _super13 = _createSuper(MockHTMLElement);

      function MockHTMLElement(ownerDocument, nodeName) {
        var _this21;

        _classCallCheck(this, MockHTMLElement);

        _this21 = _super13.call(this, ownerDocument, typeof nodeName === 'string' ? nodeName.toUpperCase() : null);
        _this21.namespaceURI = 'http://www.w3.org/1999/xhtml';
        return _this21;
      }

      _createClass(MockHTMLElement, [{
        key: "tagName",
        get: function get() {
          return this.nodeName;
        },
        set: function set(value) {
          this.nodeName = value;
        }
      }, {
        key: "attributes",
        get: function get() {
          if (this.__attributeMap == null) {
            this.__attributeMap = createAttributeProxy(true);
          }

          return this.__attributeMap;
        },
        set: function set(attrs) {
          this.__attributeMap = attrs;
        }
      }]);

      return MockHTMLElement;
    }(MockElement);

    var MockTextNode = /*#__PURE__*/function (_MockNode2) {
      _inherits(MockTextNode, _MockNode2);

      var _super14 = _createSuper(MockTextNode);

      function MockTextNode(ownerDocument, text) {
        _classCallCheck(this, MockTextNode);

        return _super14.call(this, ownerDocument, 3
        /* TEXT_NODE */
        , "#text"
        /* TEXT_NODE */
        , text);
      }

      _createClass(MockTextNode, [{
        key: "cloneNode",
        value: function cloneNode(_deep) {
          return new MockTextNode(null, this.nodeValue);
        }
      }, {
        key: "textContent",
        get: function get() {
          return this.nodeValue;
        },
        set: function set(text) {
          this.nodeValue = text;
        }
      }, {
        key: "data",
        get: function get() {
          return this.nodeValue;
        },
        set: function set(text) {
          this.nodeValue = text;
        }
      }, {
        key: "wholeText",
        get: function get() {
          if (this.parentNode != null) {
            var text = [];

            for (var i = 0, ii = this.parentNode.childNodes.length; i < ii; i++) {
              var childNode = this.parentNode.childNodes[i];

              if (childNode.nodeType === 3
              /* TEXT_NODE */
              ) {
                  text.push(childNode.nodeValue);
                }
            }

            return text.join('');
          }

          return this.nodeValue;
        }
      }]);

      return MockTextNode;
    }(MockNode);

    function getTextContent(childNodes, text) {
      for (var i = 0, ii = childNodes.length; i < ii; i++) {
        var childNode = childNodes[i];

        if (childNode.nodeType === 3
        /* TEXT_NODE */
        ) {
            text.push(childNode.nodeValue);
          } else if (childNode.nodeType === 1
        /* ELEMENT_NODE */
        ) {
            getTextContent(childNode.childNodes, text);
          }
      }
    }

    function setTextContent(elm, text) {
      for (var i = elm.childNodes.length - 1; i >= 0; i--) {
        elm.removeChild(elm.childNodes[i]);
      }

      var textNode = new MockTextNode(elm.ownerDocument, text);
      elm.appendChild(textNode);
    }

    var MockComment = /*#__PURE__*/function (_MockNode3) {
      _inherits(MockComment, _MockNode3);

      var _super15 = _createSuper(MockComment);

      function MockComment(ownerDocument, data) {
        _classCallCheck(this, MockComment);

        return _super15.call(this, ownerDocument, 8
        /* COMMENT_NODE */
        , "#comment"
        /* COMMENT_NODE */
        , data);
      }

      _createClass(MockComment, [{
        key: "cloneNode",
        value: function cloneNode(_deep) {
          return new MockComment(null, this.nodeValue);
        }
      }, {
        key: "textContent",
        get: function get() {
          return this.nodeValue;
        },
        set: function set(text) {
          this.nodeValue = text;
        }
      }]);

      return MockComment;
    }(MockNode);

    var MockDocumentFragment = /*#__PURE__*/function (_MockHTMLElement) {
      _inherits(MockDocumentFragment, _MockHTMLElement);

      var _super16 = _createSuper(MockDocumentFragment);

      function MockDocumentFragment(ownerDocument) {
        var _this22;

        _classCallCheck(this, MockDocumentFragment);

        _this22 = _super16.call(this, ownerDocument, null);
        _this22.nodeName = "#document-fragment"
        /* DOCUMENT_FRAGMENT_NODE */
        ;
        _this22.nodeType = 11
        /* DOCUMENT_FRAGMENT_NODE */
        ;
        return _this22;
      }

      _createClass(MockDocumentFragment, [{
        key: "getElementById",
        value: function getElementById(id) {
          return _getElementById(this, id);
        }
      }, {
        key: "cloneNode",
        value: function cloneNode(deep) {
          var cloned = new MockDocumentFragment(null);

          if (deep) {
            for (var i = 0, ii = this.childNodes.length; i < ii; i++) {
              var childNode = this.childNodes[i];

              if (childNode.nodeType === 1
              /* ELEMENT_NODE */
              || childNode.nodeType === 3
              /* TEXT_NODE */
              || childNode.nodeType === 8
              /* COMMENT_NODE */
              ) {
                  var clonedChildNode = this.childNodes[i].cloneNode(true);
                  cloned.appendChild(clonedChildNode);
                }
            }
          }

          return cloned;
        }
      }]);

      return MockDocumentFragment;
    }(MockHTMLElement);

    var MockDocumentTypeNode = /*#__PURE__*/function (_MockHTMLElement2) {
      _inherits(MockDocumentTypeNode, _MockHTMLElement2);

      var _super17 = _createSuper(MockDocumentTypeNode);

      function MockDocumentTypeNode(ownerDocument) {
        var _this23;

        _classCallCheck(this, MockDocumentTypeNode);

        _this23 = _super17.call(this, ownerDocument, '!DOCTYPE');
        _this23.nodeType = 10
        /* DOCUMENT_TYPE_NODE */
        ;

        _this23.setAttribute('html', '');

        return _this23;
      }

      return MockDocumentTypeNode;
    }(MockHTMLElement);

    var MockCSSRule = function MockCSSRule(parentStyleSheet) {
      _classCallCheck(this, MockCSSRule);

      this.parentStyleSheet = parentStyleSheet;
      this.cssText = '';
      this.type = 0;
    };

    var MockCSSStyleSheet = /*#__PURE__*/function () {
      function MockCSSStyleSheet(ownerNode) {
        _classCallCheck(this, MockCSSStyleSheet);

        this.type = 'text/css';
        this.parentStyleSheet = null;
        this.cssRules = [];
        this.ownerNode = ownerNode;
      }

      _createClass(MockCSSStyleSheet, [{
        key: "deleteRule",
        value: function deleteRule(index) {
          if (index >= 0 && index < this.cssRules.length) {
            this.cssRules.splice(index, 1);
            updateStyleTextNode(this.ownerNode);
          }
        }
      }, {
        key: "insertRule",
        value: function insertRule(rule) {
          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (typeof index !== 'number') {
            index = 0;
          }

          if (index < 0) {
            index = 0;
          }

          if (index > this.cssRules.length) {
            index = this.cssRules.length;
          }

          var cssRule = new MockCSSRule(this);
          cssRule.cssText = rule;
          this.cssRules.splice(index, 0, cssRule);
          updateStyleTextNode(this.ownerNode);
          return index;
        }
      }, {
        key: "rules",
        get: function get() {
          return this.cssRules;
        },
        set: function set(rules) {
          this.cssRules = rules;
        }
      }]);

      return MockCSSStyleSheet;
    }();

    function getStyleElementText(styleElm) {
      var output = [];

      for (var i = 0; i < styleElm.childNodes.length; i++) {
        output.push(styleElm.childNodes[i].nodeValue);
      }

      return output.join('');
    }

    function setStyleElementText(styleElm, text) {
      // keeping the innerHTML and the sheet.cssRules connected
      // is not technically correct, but since we're doing
      // SSR we'll need to turn any assigned cssRules into
      // real text, not just properties that aren't rendered
      var sheet = styleElm.sheet;
      sheet.cssRules.length = 0;
      sheet.insertRule(text);
      updateStyleTextNode(styleElm);
    }

    function updateStyleTextNode(styleElm) {
      var childNodeLen = styleElm.childNodes.length;

      if (childNodeLen > 1) {
        for (var i = childNodeLen - 1; i >= 1; i--) {
          styleElm.removeChild(styleElm.childNodes[i]);
        }
      } else if (childNodeLen < 1) {
        styleElm.appendChild(styleElm.ownerDocument.createTextNode(''));
      }

      var textNode = styleElm.childNodes[0];
      textNode.nodeValue = styleElm.sheet.cssRules.map(function (r) {
        return r.cssText;
      }).join('\n');
    }

    function _createElement(ownerDocument, tagName) {
      if (typeof tagName !== 'string' || tagName === '' || !/^[a-z0-9-_:]+$/i.test(tagName)) {
        throw new Error("The tag name provided (".concat(tagName, ") is not a valid name."));
      }

      tagName = tagName.toLowerCase();

      switch (tagName) {
        case 'a':
          return new MockAnchorElement(ownerDocument);

        case 'base':
          return new MockBaseElement(ownerDocument);

        case 'button':
          return new MockButtonElement(ownerDocument);

        case 'canvas':
          return new MockCanvasElement(ownerDocument);

        case 'form':
          return new MockFormElement(ownerDocument);

        case 'img':
          return new MockImageElement(ownerDocument);

        case 'input':
          return new MockInputElement(ownerDocument);

        case 'link':
          return new MockLinkElement(ownerDocument);

        case 'meta':
          return new MockMetaElement(ownerDocument);

        case 'script':
          return new MockScriptElement(ownerDocument);

        case 'style':
          return new MockStyleElement(ownerDocument);

        case 'template':
          return new MockTemplateElement(ownerDocument);

        case 'title':
          return new MockTitleElement(ownerDocument);
      }

      if (ownerDocument != null && tagName.includes('-')) {
        var win = ownerDocument.defaultView;

        if (win != null && win.customElements != null) {
          return createCustomElement(win.customElements, ownerDocument, tagName);
        }
      }

      return new MockHTMLElement(ownerDocument, tagName);
    }

    function _createElementNS(ownerDocument, namespaceURI, tagName) {
      if (namespaceURI === 'http://www.w3.org/1999/xhtml') {
        return _createElement(ownerDocument, tagName);
      } else if (namespaceURI === 'http://www.w3.org/2000/svg') {
        return new MockSVGElement(ownerDocument, tagName);
      } else {
        return new MockElement(ownerDocument, tagName);
      }
    }

    var MockAnchorElement = /*#__PURE__*/function (_MockHTMLElement3) {
      _inherits(MockAnchorElement, _MockHTMLElement3);

      var _super18 = _createSuper(MockAnchorElement);

      function MockAnchorElement(ownerDocument) {
        _classCallCheck(this, MockAnchorElement);

        return _super18.call(this, ownerDocument, 'a');
      }

      _createClass(MockAnchorElement, [{
        key: "href",
        get: function get() {
          return fullUrl(this, 'href');
        },
        set: function set(value) {
          this.setAttribute('href', value);
        }
      }]);

      return MockAnchorElement;
    }(MockHTMLElement);

    var MockButtonElement = /*#__PURE__*/function (_MockHTMLElement4) {
      _inherits(MockButtonElement, _MockHTMLElement4);

      var _super19 = _createSuper(MockButtonElement);

      function MockButtonElement(ownerDocument) {
        _classCallCheck(this, MockButtonElement);

        return _super19.call(this, ownerDocument, 'button');
      }

      return MockButtonElement;
    }(MockHTMLElement);

    patchPropAttributes(MockButtonElement.prototype, {
      type: String
    }, {
      type: 'submit'
    });

    var MockImageElement = /*#__PURE__*/function (_MockHTMLElement5) {
      _inherits(MockImageElement, _MockHTMLElement5);

      var _super20 = _createSuper(MockImageElement);

      function MockImageElement(ownerDocument) {
        _classCallCheck(this, MockImageElement);

        return _super20.call(this, ownerDocument, 'img');
      }

      _createClass(MockImageElement, [{
        key: "src",
        get: function get() {
          return fullUrl(this, 'src');
        },
        set: function set(value) {
          this.setAttribute('src', value);
        }
      }]);

      return MockImageElement;
    }(MockHTMLElement);

    patchPropAttributes(MockImageElement.prototype, {
      height: Number,
      width: Number
    });

    var MockInputElement = /*#__PURE__*/function (_MockHTMLElement6) {
      _inherits(MockInputElement, _MockHTMLElement6);

      var _super21 = _createSuper(MockInputElement);

      function MockInputElement(ownerDocument) {
        _classCallCheck(this, MockInputElement);

        return _super21.call(this, ownerDocument, 'input');
      }

      _createClass(MockInputElement, [{
        key: "list",
        get: function get() {
          var listId = this.getAttribute('list');

          if (listId) {
            return this.ownerDocument.getElementById(listId);
          }

          return null;
        }
      }]);

      return MockInputElement;
    }(MockHTMLElement);

    patchPropAttributes(MockInputElement.prototype, {
      accept: String,
      autocomplete: String,
      autofocus: Boolean,
      capture: String,
      checked: Boolean,
      disabled: Boolean,
      form: String,
      formaction: String,
      formenctype: String,
      formmethod: String,
      formnovalidate: String,
      formtarget: String,
      height: Number,
      inputmode: String,
      max: String,
      maxLength: Number,
      min: String,
      minLength: Number,
      multiple: Boolean,
      name: String,
      pattern: String,
      placeholder: String,
      required: Boolean,
      readOnly: Boolean,
      size: Number,
      spellCheck: Boolean,
      src: String,
      step: String,
      type: String,
      value: String,
      width: Number
    }, {
      type: 'text'
    });

    var MockFormElement = /*#__PURE__*/function (_MockHTMLElement7) {
      _inherits(MockFormElement, _MockHTMLElement7);

      var _super22 = _createSuper(MockFormElement);

      function MockFormElement(ownerDocument) {
        _classCallCheck(this, MockFormElement);

        return _super22.call(this, ownerDocument, 'form');
      }

      return MockFormElement;
    }(MockHTMLElement);

    patchPropAttributes(MockFormElement.prototype, {
      name: String
    });

    var MockLinkElement = /*#__PURE__*/function (_MockHTMLElement8) {
      _inherits(MockLinkElement, _MockHTMLElement8);

      var _super23 = _createSuper(MockLinkElement);

      function MockLinkElement(ownerDocument) {
        _classCallCheck(this, MockLinkElement);

        return _super23.call(this, ownerDocument, 'link');
      }

      _createClass(MockLinkElement, [{
        key: "href",
        get: function get() {
          return fullUrl(this, 'href');
        },
        set: function set(value) {
          this.setAttribute('href', value);
        }
      }]);

      return MockLinkElement;
    }(MockHTMLElement);

    patchPropAttributes(MockLinkElement.prototype, {
      crossorigin: String,
      media: String,
      rel: String,
      type: String
    });

    var MockMetaElement = /*#__PURE__*/function (_MockHTMLElement9) {
      _inherits(MockMetaElement, _MockHTMLElement9);

      var _super24 = _createSuper(MockMetaElement);

      function MockMetaElement(ownerDocument) {
        _classCallCheck(this, MockMetaElement);

        return _super24.call(this, ownerDocument, 'meta');
      }

      return MockMetaElement;
    }(MockHTMLElement);

    patchPropAttributes(MockMetaElement.prototype, {
      charset: String,
      content: String,
      name: String
    });

    var MockScriptElement = /*#__PURE__*/function (_MockHTMLElement10) {
      _inherits(MockScriptElement, _MockHTMLElement10);

      var _super25 = _createSuper(MockScriptElement);

      function MockScriptElement(ownerDocument) {
        _classCallCheck(this, MockScriptElement);

        return _super25.call(this, ownerDocument, 'script');
      }

      _createClass(MockScriptElement, [{
        key: "src",
        get: function get() {
          return fullUrl(this, 'src');
        },
        set: function set(value) {
          this.setAttribute('src', value);
        }
      }]);

      return MockScriptElement;
    }(MockHTMLElement);

    patchPropAttributes(MockScriptElement.prototype, {
      type: String
    });

    var MockStyleElement = /*#__PURE__*/function (_MockHTMLElement11) {
      _inherits(MockStyleElement, _MockHTMLElement11);

      var _super26 = _createSuper(MockStyleElement);

      function MockStyleElement(ownerDocument) {
        var _this24;

        _classCallCheck(this, MockStyleElement);

        _this24 = _super26.call(this, ownerDocument, 'style');
        _this24.sheet = new MockCSSStyleSheet(_assertThisInitialized(_this24));
        return _this24;
      }

      _createClass(MockStyleElement, [{
        key: "innerHTML",
        get: function get() {
          return getStyleElementText(this);
        },
        set: function set(value) {
          setStyleElementText(this, value);
        }
      }, {
        key: "innerText",
        get: function get() {
          return getStyleElementText(this);
        },
        set: function set(value) {
          setStyleElementText(this, value);
        }
      }, {
        key: "textContent",
        get: function get() {
          return getStyleElementText(this);
        },
        set: function set(value) {
          setStyleElementText(this, value);
        }
      }]);

      return MockStyleElement;
    }(MockHTMLElement);

    var MockSVGElement = /*#__PURE__*/function (_MockElement2) {
      _inherits(MockSVGElement, _MockElement2);

      var _super27 = _createSuper(MockSVGElement);

      function MockSVGElement() {
        _classCallCheck(this, MockSVGElement);

        return _super27.apply(this, arguments);
      }

      _createClass(MockSVGElement, [{
        key: "focus",
        value: function focus() {
          /**/
        }
      }, {
        key: "onunload",
        value: function onunload() {}
        /**/
        // SVGGeometryElement properties and methods

      }, {
        key: "isPointInFill",
        value: function isPointInFill(_pt) {
          return false;
        }
      }, {
        key: "isPointInStroke",
        value: function isPointInStroke(_pt) {
          return false;
        }
      }, {
        key: "getTotalLength",
        value: function getTotalLength() {
          return 0;
        }
      }, {
        key: "ownerSVGElement",
        // SVGElement properties and methods
        get: function get() {
          return null;
        }
      }, {
        key: "viewportElement",
        get: function get() {
          return null;
        }
      }, {
        key: "pathLength",
        get: function get() {
          return 0;
        }
      }]);

      return MockSVGElement;
    }(MockElement);

    var MockBaseElement = /*#__PURE__*/function (_MockHTMLElement12) {
      _inherits(MockBaseElement, _MockHTMLElement12);

      var _super28 = _createSuper(MockBaseElement);

      function MockBaseElement(ownerDocument) {
        _classCallCheck(this, MockBaseElement);

        return _super28.call(this, ownerDocument, 'base');
      }

      _createClass(MockBaseElement, [{
        key: "href",
        get: function get() {
          return fullUrl(this, 'href');
        },
        set: function set(value) {
          this.setAttribute('href', value);
        }
      }]);

      return MockBaseElement;
    }(MockHTMLElement);

    var MockTemplateElement = /*#__PURE__*/function (_MockHTMLElement13) {
      _inherits(MockTemplateElement, _MockHTMLElement13);

      var _super29 = _createSuper(MockTemplateElement);

      function MockTemplateElement(ownerDocument) {
        var _this25;

        _classCallCheck(this, MockTemplateElement);

        _this25 = _super29.call(this, ownerDocument, 'template');
        _this25.content = new MockDocumentFragment(ownerDocument);
        return _this25;
      }

      _createClass(MockTemplateElement, [{
        key: "cloneNode",
        value: function cloneNode(deep) {
          var cloned = new MockTemplateElement(null);
          cloned.attributes = cloneAttributes(this.attributes);
          var styleCssText = this.getAttribute('style');

          if (styleCssText != null && styleCssText.length > 0) {
            cloned.setAttribute('style', styleCssText);
          }

          cloned.content = this.content.cloneNode(deep);

          if (deep) {
            for (var i = 0, ii = this.childNodes.length; i < ii; i++) {
              var clonedChildNode = this.childNodes[i].cloneNode(true);
              cloned.appendChild(clonedChildNode);
            }
          }

          return cloned;
        }
      }, {
        key: "innerHTML",
        get: function get() {
          return this.content.innerHTML;
        },
        set: function set(html) {
          this.content.innerHTML = html;
        }
      }]);

      return MockTemplateElement;
    }(MockHTMLElement);

    var MockTitleElement = /*#__PURE__*/function (_MockHTMLElement14) {
      _inherits(MockTitleElement, _MockHTMLElement14);

      var _super30 = _createSuper(MockTitleElement);

      function MockTitleElement(ownerDocument) {
        _classCallCheck(this, MockTitleElement);

        return _super30.call(this, ownerDocument, 'title');
      }

      _createClass(MockTitleElement, [{
        key: "text",
        get: function get() {
          return this.textContent;
        },
        set: function set(value) {
          this.textContent = value;
        }
      }]);

      return MockTitleElement;
    }(MockHTMLElement);

    var MockCanvasElement = /*#__PURE__*/function (_MockHTMLElement15) {
      _inherits(MockCanvasElement, _MockHTMLElement15);

      var _super31 = _createSuper(MockCanvasElement);

      function MockCanvasElement(ownerDocument) {
        _classCallCheck(this, MockCanvasElement);

        return _super31.call(this, ownerDocument, 'canvas');
      }

      _createClass(MockCanvasElement, [{
        key: "getContext",
        value: function getContext() {
          return {
            fillRect: function fillRect() {
              return;
            },
            clearRect: function clearRect() {
              return;
            },
            getImageData: function getImageData(_, __, w, h) {
              return {
                data: new Array(w * h * 4)
              };
            },
            putImageData: function putImageData() {
              return;
            },
            createImageData: function createImageData() {
              return [];
            },
            setTransform: function setTransform() {
              return;
            },
            drawImage: function drawImage() {
              return;
            },
            save: function save() {
              return;
            },
            fillText: function fillText() {
              return;
            },
            restore: function restore() {
              return;
            },
            beginPath: function beginPath() {
              return;
            },
            moveTo: function moveTo() {
              return;
            },
            lineTo: function lineTo() {
              return;
            },
            closePath: function closePath() {
              return;
            },
            stroke: function stroke() {
              return;
            },
            translate: function translate() {
              return;
            },
            scale: function scale() {
              return;
            },
            rotate: function rotate() {
              return;
            },
            arc: function arc() {
              return;
            },
            fill: function fill() {
              return;
            },
            measureText: function measureText() {
              return {
                width: 0
              };
            },
            transform: function transform() {
              return;
            },
            rect: function rect() {
              return;
            },
            clip: function clip() {
              return;
            }
          };
        }
      }]);

      return MockCanvasElement;
    }(MockHTMLElement);

    function fullUrl(elm, attrName) {
      var val = elm.getAttribute(attrName) || '';

      if (elm.ownerDocument != null) {
        var win = elm.ownerDocument.defaultView;

        if (win != null) {
          var loc = win.location;

          if (loc != null) {
            var url = new URL(val, loc.href);
            return url.href;
          }
        }
      }

      return val.replace(/\'|\"/g, '').trim();
    }

    function patchPropAttributes(prototype, attrs) {
      var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      Object.keys(attrs).forEach(function (propName) {
        var attr = attrs[propName];
        var defaultValue = defaults[propName];

        if (attr === Boolean) {
          Object.defineProperty(prototype, propName, {
            get: function get() {
              return this.hasAttribute(propName);
            },
            set: function set(value) {
              if (value) {
                this.setAttribute(propName, '');
              } else {
                this.removeAttribute(propName);
              }
            }
          });
        } else if (attr === Number) {
          Object.defineProperty(prototype, propName, {
            get: function get() {
              var value = this.getAttribute(propName);
              return value ? parseInt(value, 10) : defaultValue === undefined ? 0 : defaultValue;
            },
            set: function set(value) {
              this.setAttribute(propName, value);
            }
          });
        } else {
          Object.defineProperty(prototype, propName, {
            get: function get() {
              return this.hasAttribute(propName) ? this.getAttribute(propName) : defaultValue || '';
            },
            set: function set(value) {
              this.setAttribute(propName, value);
            }
          });
        }
      });
    }

    MockElement.prototype.cloneNode = function (deep) {
      // because we're creating elements, which extending specific HTML base classes there
      // is a MockElement circular reference that bundling has trouble dealing with so
      // the fix is to add cloneNode() to MockElement's prototype after the HTML classes
      var cloned = _createElement(this.ownerDocument, this.nodeName);

      cloned.attributes = cloneAttributes(this.attributes);
      var styleCssText = this.getAttribute('style');

      if (styleCssText != null && styleCssText.length > 0) {
        cloned.setAttribute('style', styleCssText);
      }

      if (deep) {
        for (var i = 0, ii = this.childNodes.length; i < ii; i++) {
          var clonedChildNode = this.childNodes[i].cloneNode(true);
          cloned.appendChild(clonedChildNode);
        }
      }

      return cloned;
    };

    var sharedDocument;

    function parseHtmlToFragment(html) {
      var ownerDocument = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (ownerDocument == null) {
        if (sharedDocument == null) {
          sharedDocument = new MockDocument();
        }

        ownerDocument = sharedDocument;
      }

      return parseFragmentUtil(ownerDocument, html);
    }

    var MockHeaders = /*#__PURE__*/function () {
      function MockHeaders(init) {
        _classCallCheck(this, MockHeaders);

        this._values = [];

        if (typeof init === 'object') {
          if (typeof init[Symbol.iterator] === 'function') {
            var kvs = [];

            var _iterator2 = _createForOfIteratorHelper(init),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _kv = _step2.value;

                if (typeof _kv[Symbol.iterator] === 'function') {
                  kvs.push(_toConsumableArray(_kv));
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            for (var _i15 = 0, _kvs = kvs; _i15 < _kvs.length; _i15++) {
              var kv = _kvs[_i15];
              this.append(kv[0], kv[1]);
            }
          } else {
            for (var key in init) {
              this.append(key, init[key]);
            }
          }
        }
      }

      _createClass(MockHeaders, [{
        key: "append",
        value: function append(key, value) {
          this._values.push([key, value + '']);
        }
      }, {
        key: "delete",
        value: function _delete(key) {
          key = key.toLowerCase();

          for (var i = this._values.length - 1; i >= 0; i--) {
            if (this._values[i][0].toLowerCase() === key) {
              this._values.splice(i, 1);
            }
          }
        }
      }, {
        key: "entries",
        value: function entries() {
          var entries = [];

          var _iterator3 = _createForOfIteratorHelper(this.keys()),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var kv = _step3.value;
              entries.push([kv, this.get(kv)]);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          var index = -1;
          return _defineProperty({
            next: function next() {
              index++;
              return {
                value: entries[index],
                done: !entries[index]
              };
            }
          }, Symbol.iterator, function () {
            return this;
          });
        }
      }, {
        key: "forEach",
        value: function forEach(cb) {
          var _iterator4 = _createForOfIteratorHelper(this.entries()),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var kv = _step4.value;
              cb(kv[1], kv[0]);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "get",
        value: function get(key) {
          var rtn = [];
          key = key.toLowerCase();

          var _iterator5 = _createForOfIteratorHelper(this._values),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var kv = _step5.value;

              if (kv[0].toLowerCase() === key) {
                rtn.push(kv[1]);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return rtn.length > 0 ? rtn.join(', ') : null;
        }
      }, {
        key: "has",
        value: function has(key) {
          key = key.toLowerCase();

          var _iterator6 = _createForOfIteratorHelper(this._values),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var kv = _step6.value;

              if (kv[0].toLowerCase() === key) {
                return true;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          return false;
        }
      }, {
        key: "keys",
        value: function keys() {
          var keys = [];

          var _iterator7 = _createForOfIteratorHelper(this._values),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var kv = _step7.value;
              var key = kv[0].toLowerCase();

              if (!keys.includes(key)) {
                keys.push(key);
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          var index = -1;
          return _defineProperty({
            next: function next() {
              index++;
              return {
                value: keys[index],
                done: !keys[index]
              };
            }
          }, Symbol.iterator, function () {
            return this;
          });
        }
      }, {
        key: "set",
        value: function set(key, value) {
          var _iterator8 = _createForOfIteratorHelper(this._values),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var kv = _step8.value;

              if (kv[0].toLowerCase() === key.toLowerCase()) {
                kv[1] = value + '';
                return;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          this.append(key, value);
        }
      }, {
        key: "values",
        value: function values() {
          var values = this._values;
          var index = -1;
          return _defineProperty({
            next: function next() {
              index++;
              var done = !values[index];
              return {
                value: done ? undefined : values[index][1],
                done: done
              };
            }
          }, Symbol.iterator, function () {
            return this;
          });
        }
      }, {
        key: Symbol.iterator,
        value: function value() {
          return this.entries();
        }
      }]);

      return MockHeaders;
    }();

    var MockRequest = /*#__PURE__*/function () {
      function MockRequest(input) {
        var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, MockRequest);

        this._method = 'GET';
        this._url = '/';
        this.bodyUsed = false;
        this.cache = 'default';
        this.credentials = 'same-origin';
        this.integrity = '';
        this.keepalive = false;
        this.mode = 'cors';
        this.redirect = 'follow';
        this.referrer = 'about:client';
        this.referrerPolicy = '';

        if (typeof input === 'string') {
          this.url = input;
        } else if (input) {
          Object.assign(this, input);
          this.headers = new MockHeaders(input.headers);
        }

        Object.assign(this, init);

        if (init.headers) {
          this.headers = new MockHeaders(init.headers);
        }

        if (!this.headers) {
          this.headers = new MockHeaders();
        }
      }

      _createClass(MockRequest, [{
        key: "clone",
        value: function clone() {
          var clone = Object.assign({}, this);
          clone.headers = new MockHeaders(this.headers);
          return new MockRequest(clone);
        }
      }, {
        key: "url",
        get: function get() {
          if (typeof this._url === 'string') {
            return new URL(this._url, location.href).href;
          }

          return new URL('/', location.href).href;
        },
        set: function set(value) {
          this._url = value;
        }
      }, {
        key: "method",
        get: function get() {
          if (typeof this._method === 'string') {
            return this._method.toUpperCase();
          }

          return 'GET';
        },
        set: function set(value) {
          this._method = value;
        }
      }]);

      return MockRequest;
    }();

    var MockResponse = /*#__PURE__*/function () {
      function MockResponse(body) {
        var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, MockResponse);

        this.ok = true;
        this.status = 200;
        this.statusText = '';
        this.type = 'default';
        this.url = '';
        this._body = body;

        if (init) {
          Object.assign(this, init);
        }

        this.headers = new MockHeaders(init.headers);
      }

      _createClass(MockResponse, [{
        key: "json",
        value: function () {
          var _json = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", JSON.parse(this._body));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function json() {
            return _json.apply(this, arguments);
          }

          return json;
        }()
      }, {
        key: "text",
        value: function () {
          var _text = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", this._body);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function text() {
            return _text.apply(this, arguments);
          }

          return text;
        }()
      }, {
        key: "clone",
        value: function clone() {
          var initClone = Object.assign({}, this);
          initClone.headers = new MockHeaders(this.headers);
          return new MockResponse(this._body, initClone);
        }
      }]);

      return MockResponse;
    }();

    function addGlobalsToWindowPrototype(mockWinPrototype) {
      GLOBAL_CONSTRUCTORS.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            cstrName = _ref6[0],
            Cstr = _ref6[1];

        Object.defineProperty(mockWinPrototype, cstrName, {
          get: function get() {
            return this['__' + cstrName] || Cstr;
          },
          set: function set(cstr) {
            this['__' + cstrName] = cstr;
          },
          configurable: true,
          enumerable: true
        });
      });
    }

    var GLOBAL_CONSTRUCTORS = [['CustomEvent', MockCustomEvent], ['Event', MockEvent], ['Headers', MockHeaders], ['KeyboardEvent', MockKeyboardEvent], ['MouseEvent', MockMouseEvent], ['Request', MockRequest], ['Response', MockResponse], ['HTMLAnchorElement', MockAnchorElement], ['HTMLBaseElement', MockBaseElement], ['HTMLButtonElement', MockButtonElement], ['HTMLCanvasElement', MockCanvasElement], ['HTMLFormElement', MockFormElement], ['HTMLImageElement', MockImageElement], ['HTMLInputElement', MockInputElement], ['HTMLLinkElement', MockLinkElement], ['HTMLMetaElement', MockMetaElement], ['HTMLScriptElement', MockScriptElement], ['HTMLStyleElement', MockStyleElement], ['HTMLTemplateElement', MockTemplateElement], ['HTMLTitleElement', MockTitleElement]];

    var consoleNoop = function consoleNoop() {
      /**/
    };

    function createConsole() {
      return {
        debug: consoleNoop,
        error: consoleNoop,
        info: consoleNoop,
        log: consoleNoop,
        warn: consoleNoop,
        dir: consoleNoop,
        dirxml: consoleNoop,
        table: consoleNoop,
        trace: consoleNoop,
        group: consoleNoop,
        groupCollapsed: consoleNoop,
        groupEnd: consoleNoop,
        clear: consoleNoop,
        count: consoleNoop,
        countReset: consoleNoop,
        assert: consoleNoop,
        profile: consoleNoop,
        profileEnd: consoleNoop,
        time: consoleNoop,
        timeLog: consoleNoop,
        timeEnd: consoleNoop,
        timeStamp: consoleNoop,
        context: consoleNoop,
        memory: consoleNoop
      };
    }

    var MockHistory = /*#__PURE__*/function () {
      function MockHistory() {
        _classCallCheck(this, MockHistory);

        this.items = [];
      }

      _createClass(MockHistory, [{
        key: "back",
        value: function back() {
          this.go(-1);
        }
      }, {
        key: "forward",
        value: function forward() {
          this.go(1);
        }
      }, {
        key: "go",
        value: function go(_value) {//
        }
      }, {
        key: "pushState",
        value: function pushState(_state, _title, _url) {//
        }
      }, {
        key: "replaceState",
        value: function replaceState(_state, _title, _url) {//
        }
      }, {
        key: "length",
        get: function get() {
          return this.items.length;
        }
      }]);

      return MockHistory;
    }();

    var MockIntersectionObserver = /*#__PURE__*/function () {
      function MockIntersectionObserver() {
        /**/

        _classCallCheck(this, MockIntersectionObserver);
      }

      _createClass(MockIntersectionObserver, [{
        key: "disconnect",
        value: function disconnect() {
          /**/
        }
      }, {
        key: "observe",
        value: function observe() {
          /**/
        }
      }, {
        key: "takeRecords",
        value: function takeRecords() {
          return [];
        }
      }, {
        key: "unobserve",
        value: function unobserve() {
          /**/
        }
      }]);

      return MockIntersectionObserver;
    }();

    var MockLocation = /*#__PURE__*/function () {
      function MockLocation() {
        _classCallCheck(this, MockLocation);

        this.ancestorOrigins = null;
        this.protocol = '';
        this.host = '';
        this.hostname = '';
        this.port = '';
        this.pathname = '';
        this.search = '';
        this.hash = '';
        this.username = '';
        this.password = '';
        this.origin = '';
        this._href = '';
      }

      _createClass(MockLocation, [{
        key: "assign",
        value: function assign(_url) {//
        }
      }, {
        key: "reload",
        value: function reload(_forcedReload) {//
        }
      }, {
        key: "replace",
        value: function replace(_url) {//
        }
      }, {
        key: "toString",
        value: function toString() {
          return this.href;
        }
      }, {
        key: "href",
        get: function get() {
          return this._href;
        },
        set: function set(value) {
          var url = new URL(value, 'http://mockdoc.stenciljs.com');
          this._href = url.href;
          this.protocol = url.protocol;
          this.host = url.host;
          this.port = url.port;
          this.pathname = url.pathname;
          this.search = url.search;
          this.hash = url.hash;
          this.username = url.username;
          this.password = url.password;
          this.origin = url.origin;
        }
      }]);

      return MockLocation;
    }();

    var MockNavigator = function MockNavigator() {
      _classCallCheck(this, MockNavigator);

      this.appCodeName = 'MockNavigator';
      this.appName = 'MockNavigator';
      this.appVersion = 'MockNavigator';
      this.platform = 'MockNavigator';
      this.userAgent = 'MockNavigator';
    };
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Performance
     */


    var MockPerformance = /*#__PURE__*/function () {
      function MockPerformance() {
        _classCallCheck(this, MockPerformance);

        this.timeOrigin = Date.now();
      }

      _createClass(MockPerformance, [{
        key: "addEventListener",
        value: function addEventListener() {//
        }
      }, {
        key: "clearMarks",
        value: function clearMarks() {//
        }
      }, {
        key: "clearMeasures",
        value: function clearMeasures() {//
        }
      }, {
        key: "clearResourceTimings",
        value: function clearResourceTimings() {//
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent() {
          return true;
        }
      }, {
        key: "getEntries",
        value: function getEntries() {
          return [];
        }
      }, {
        key: "getEntriesByName",
        value: function getEntriesByName() {
          return [];
        }
      }, {
        key: "getEntriesByType",
        value: function getEntriesByType() {
          return [];
        }
      }, {
        key: "mark",
        value: function mark() {//
        }
      }, {
        key: "measure",
        value: function measure() {//
        }
      }, {
        key: "now",
        value: function now() {
          return Date.now() - this.timeOrigin;
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener() {//
        }
      }, {
        key: "setResourceTimingBufferSize",
        value: function setResourceTimingBufferSize() {//
        }
      }, {
        key: "toJSON",
        value: function toJSON() {//
        }
      }, {
        key: "navigation",
        get: function get() {
          return {};
        }
      }, {
        key: "onresourcetimingbufferfull",
        get: function get() {
          return null;
        }
      }, {
        key: "timing",
        get: function get() {
          return {};
        }
      }]);

      return MockPerformance;
    }();

    function resetPerformance(perf) {
      if (perf != null) {
        try {
          perf.timeOrigin = Date.now();
        } catch (e) {}
      }
    }

    var MockStorage = /*#__PURE__*/function () {
      function MockStorage() {
        _classCallCheck(this, MockStorage);

        this.items = new Map();
      }

      _createClass(MockStorage, [{
        key: "key",
        value: function key(_value) {//
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          key = String(key);

          if (this.items.has(key)) {
            return this.items.get(key);
          }

          return null;
        }
      }, {
        key: "setItem",
        value: function setItem(key, value) {
          if (value == null) {
            value = 'null';
          }

          this.items.set(String(key), String(value));
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          this.items["delete"](String(key));
        }
      }, {
        key: "clear",
        value: function clear() {
          this.items.clear();
        }
      }]);

      return MockStorage;
    }();

    var nativeClearInterval = clearInterval;
    var nativeClearTimeout = clearTimeout;
    var nativeSetInterval = setInterval;
    var nativeSetTimeout = setTimeout;
    var nativeURL = URL;

    var MockWindow = /*#__PURE__*/function () {
      function MockWindow() {
        var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, MockWindow);

        if (html !== false) {
          this.document = new MockDocument(html, this);
        } else {
          this.document = null;
        }

        this.performance = new MockPerformance();
        this.customElements = new MockCustomElementRegistry(this);
        this.console = createConsole();
        resetWindowDefaults(this);
        resetWindowDimensions(this);
      }

      _createClass(MockWindow, [{
        key: "addEventListener",
        value: function addEventListener(type, handler) {
          _addEventListener(this, type, handler);
        }
      }, {
        key: "alert",
        value: function alert(msg) {
          if (this.console) {
            this.console.debug(msg);
          } else {
            console.debug(msg);
          }
        }
      }, {
        key: "blur",
        value: function blur() {
          /**/
        }
      }, {
        key: "cancelAnimationFrame",
        value: function cancelAnimationFrame(id) {
          this.__clearTimeout(id);
        }
      }, {
        key: "cancelIdleCallback",
        value: function cancelIdleCallback(id) {
          this.__clearTimeout(id);
        }
      }, {
        key: "clearInterval",
        value: function clearInterval(id) {
          this.__clearInterval(id);
        }
      }, {
        key: "clearTimeout",
        value: function clearTimeout(id) {
          this.__clearTimeout(id);
        }
      }, {
        key: "close",
        value: function close() {
          resetWindow(this);
        }
      }, {
        key: "confirm",
        value: function confirm() {
          return false;
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(ev) {
          return _dispatchEvent(this, ev);
        }
      }, {
        key: "focus",
        value: function focus() {
          /**/
        }
      }, {
        key: "getComputedStyle",
        value: function getComputedStyle(_) {
          return {
            cssText: '',
            length: 0,
            parentRule: null,
            getPropertyPriority: function getPropertyPriority() {
              return null;
            },
            getPropertyValue: function getPropertyValue() {
              return '';
            },
            item: function item() {
              return null;
            },
            removeProperty: function removeProperty() {
              return null;
            },
            setProperty: function setProperty() {
              return null;
            }
          };
        }
      }, {
        key: "matchMedia",
        value: function matchMedia() {
          return {
            matches: false
          };
        }
      }, {
        key: "prompt",
        value: function prompt() {
          return '';
        }
      }, {
        key: "open",
        value: function open() {
          return null;
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(type, handler) {
          _removeEventListener(this, type, handler);
        }
      }, {
        key: "requestAnimationFrame",
        value: function requestAnimationFrame(callback) {
          return this.setTimeout(function () {
            callback(Date.now());
          }, 0);
        }
      }, {
        key: "requestIdleCallback",
        value: function requestIdleCallback(callback) {
          return this.setTimeout(function () {
            callback({
              didTimeout: false,
              timeRemaining: function timeRemaining() {
                return 0;
              }
            });
          }, 0);
        }
      }, {
        key: "scroll",
        value: function scroll(_x, _y) {
          /**/
        }
      }, {
        key: "scrollBy",
        value: function scrollBy(_x, _y) {
          /**/
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(_x, _y) {
          /**/
        }
      }, {
        key: "setInterval",
        value: function setInterval(callback, ms) {
          var _this26 = this;

          for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
            args[_key5 - 2] = arguments[_key5];
          }

          if (this.__timeouts == null) {
            this.__timeouts = new Set();
          }

          ms = Math.min(ms, this.__maxTimeout);

          if (this.__allowInterval) {
            var intervalId = this.__setInterval(function () {
              _this26.__timeouts["delete"](intervalId);

              try {
                callback.apply(void 0, args);
              } catch (e) {
                if (_this26.console) {
                  _this26.console.error(e);
                } else {
                  console.error(e);
                }
              }
            }, ms);

            this.__timeouts.add(intervalId);

            return intervalId;
          }

          var timeoutId = this.__setTimeout(function () {
            _this26.__timeouts["delete"](timeoutId);

            try {
              callback.apply(void 0, args);
            } catch (e) {
              if (_this26.console) {
                _this26.console.error(e);
              } else {
                console.error(e);
              }
            }
          }, ms);

          this.__timeouts.add(timeoutId);

          return timeoutId;
        }
      }, {
        key: "setTimeout",
        value: function setTimeout(callback, ms) {
          var _this27 = this;

          for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
            args[_key6 - 2] = arguments[_key6];
          }

          if (this.__timeouts == null) {
            this.__timeouts = new Set();
          }

          ms = Math.min(ms, this.__maxTimeout);

          var timeoutId = this.__setTimeout(function () {
            _this27.__timeouts["delete"](timeoutId);

            try {
              callback.apply(void 0, args);
            } catch (e) {
              if (_this27.console) {
                _this27.console.error(e);
              } else {
                console.error(e);
              }
            }
          }, ms);

          this.__timeouts.add(timeoutId);

          return timeoutId;
        }
      }, {
        key: "onanimationstart",
        value: function onanimationstart() {
          /**/
        }
      }, {
        key: "onanimationend",
        value: function onanimationend() {
          /**/
        }
      }, {
        key: "onanimationiteration",
        value: function onanimationiteration() {
          /**/
        }
      }, {
        key: "onabort",
        value: function onabort() {
          /**/
        }
      }, {
        key: "onauxclick",
        value: function onauxclick() {
          /**/
        }
      }, {
        key: "onbeforecopy",
        value: function onbeforecopy() {
          /**/
        }
      }, {
        key: "onbeforecut",
        value: function onbeforecut() {
          /**/
        }
      }, {
        key: "onbeforepaste",
        value: function onbeforepaste() {
          /**/
        }
      }, {
        key: "onblur",
        value: function onblur() {
          /**/
        }
      }, {
        key: "oncancel",
        value: function oncancel() {
          /**/
        }
      }, {
        key: "oncanplay",
        value: function oncanplay() {
          /**/
        }
      }, {
        key: "oncanplaythrough",
        value: function oncanplaythrough() {
          /**/
        }
      }, {
        key: "onchange",
        value: function onchange() {
          /**/
        }
      }, {
        key: "onclick",
        value: function onclick() {
          /**/
        }
      }, {
        key: "onclose",
        value: function onclose() {
          /**/
        }
      }, {
        key: "oncontextmenu",
        value: function oncontextmenu() {
          /**/
        }
      }, {
        key: "oncopy",
        value: function oncopy() {
          /**/
        }
      }, {
        key: "oncuechange",
        value: function oncuechange() {
          /**/
        }
      }, {
        key: "oncut",
        value: function oncut() {
          /**/
        }
      }, {
        key: "ondblclick",
        value: function ondblclick() {
          /**/
        }
      }, {
        key: "ondrag",
        value: function ondrag() {
          /**/
        }
      }, {
        key: "ondragend",
        value: function ondragend() {
          /**/
        }
      }, {
        key: "ondragenter",
        value: function ondragenter() {
          /**/
        }
      }, {
        key: "ondragleave",
        value: function ondragleave() {
          /**/
        }
      }, {
        key: "ondragover",
        value: function ondragover() {
          /**/
        }
      }, {
        key: "ondragstart",
        value: function ondragstart() {
          /**/
        }
      }, {
        key: "ondrop",
        value: function ondrop() {
          /**/
        }
      }, {
        key: "ondurationchange",
        value: function ondurationchange() {
          /**/
        }
      }, {
        key: "onemptied",
        value: function onemptied() {
          /**/
        }
      }, {
        key: "onended",
        value: function onended() {
          /**/
        }
      }, {
        key: "onerror",
        value: function onerror() {
          /**/
        }
      }, {
        key: "onfocus",
        value: function onfocus() {
          /**/
        }
      }, {
        key: "onformdata",
        value: function onformdata() {
          /**/
        }
      }, {
        key: "onfullscreenchange",
        value: function onfullscreenchange() {
          /**/
        }
      }, {
        key: "onfullscreenerror",
        value: function onfullscreenerror() {
          /**/
        }
      }, {
        key: "ongotpointercapture",
        value: function ongotpointercapture() {
          /**/
        }
      }, {
        key: "oninput",
        value: function oninput() {
          /**/
        }
      }, {
        key: "oninvalid",
        value: function oninvalid() {
          /**/
        }
      }, {
        key: "onkeydown",
        value: function onkeydown() {
          /**/
        }
      }, {
        key: "onkeypress",
        value: function onkeypress() {
          /**/
        }
      }, {
        key: "onkeyup",
        value: function onkeyup() {
          /**/
        }
      }, {
        key: "onload",
        value: function onload() {
          /**/
        }
      }, {
        key: "onloadeddata",
        value: function onloadeddata() {
          /**/
        }
      }, {
        key: "onloadedmetadata",
        value: function onloadedmetadata() {
          /**/
        }
      }, {
        key: "onloadstart",
        value: function onloadstart() {
          /**/
        }
      }, {
        key: "onlostpointercapture",
        value: function onlostpointercapture() {
          /**/
        }
      }, {
        key: "onmousedown",
        value: function onmousedown() {
          /**/
        }
      }, {
        key: "onmouseenter",
        value: function onmouseenter() {
          /**/
        }
      }, {
        key: "onmouseleave",
        value: function onmouseleave() {
          /**/
        }
      }, {
        key: "onmousemove",
        value: function onmousemove() {
          /**/
        }
      }, {
        key: "onmouseout",
        value: function onmouseout() {
          /**/
        }
      }, {
        key: "onmouseover",
        value: function onmouseover() {
          /**/
        }
      }, {
        key: "onmouseup",
        value: function onmouseup() {
          /**/
        }
      }, {
        key: "onmousewheel",
        value: function onmousewheel() {
          /**/
        }
      }, {
        key: "onpaste",
        value: function onpaste() {
          /**/
        }
      }, {
        key: "onpause",
        value: function onpause() {
          /**/
        }
      }, {
        key: "onplay",
        value: function onplay() {
          /**/
        }
      }, {
        key: "onplaying",
        value: function onplaying() {
          /**/
        }
      }, {
        key: "onpointercancel",
        value: function onpointercancel() {
          /**/
        }
      }, {
        key: "onpointerdown",
        value: function onpointerdown() {
          /**/
        }
      }, {
        key: "onpointerenter",
        value: function onpointerenter() {
          /**/
        }
      }, {
        key: "onpointerleave",
        value: function onpointerleave() {
          /**/
        }
      }, {
        key: "onpointermove",
        value: function onpointermove() {
          /**/
        }
      }, {
        key: "onpointerout",
        value: function onpointerout() {
          /**/
        }
      }, {
        key: "onpointerover",
        value: function onpointerover() {
          /**/
        }
      }, {
        key: "onpointerup",
        value: function onpointerup() {
          /**/
        }
      }, {
        key: "onprogress",
        value: function onprogress() {
          /**/
        }
      }, {
        key: "onratechange",
        value: function onratechange() {
          /**/
        }
      }, {
        key: "onreset",
        value: function onreset() {
          /**/
        }
      }, {
        key: "onresize",
        value: function onresize() {
          /**/
        }
      }, {
        key: "onscroll",
        value: function onscroll() {
          /**/
        }
      }, {
        key: "onsearch",
        value: function onsearch() {
          /**/
        }
      }, {
        key: "onseeked",
        value: function onseeked() {
          /**/
        }
      }, {
        key: "onseeking",
        value: function onseeking() {
          /**/
        }
      }, {
        key: "onselect",
        value: function onselect() {
          /**/
        }
      }, {
        key: "onselectstart",
        value: function onselectstart() {
          /**/
        }
      }, {
        key: "onstalled",
        value: function onstalled() {
          /**/
        }
      }, {
        key: "onsubmit",
        value: function onsubmit() {
          /**/
        }
      }, {
        key: "onsuspend",
        value: function onsuspend() {
          /**/
        }
      }, {
        key: "ontimeupdate",
        value: function ontimeupdate() {
          /**/
        }
      }, {
        key: "ontoggle",
        value: function ontoggle() {
          /**/
        }
      }, {
        key: "onvolumechange",
        value: function onvolumechange() {
          /**/
        }
      }, {
        key: "onwaiting",
        value: function onwaiting() {
          /**/
        }
      }, {
        key: "onwebkitfullscreenchange",
        value: function onwebkitfullscreenchange() {
          /**/
        }
      }, {
        key: "onwebkitfullscreenerror",
        value: function onwebkitfullscreenerror() {
          /**/
        }
      }, {
        key: "onwheel",
        value: function onwheel() {
          /**/
        }
      }, {
        key: "CharacterData",
        get: function get() {
          if (this.__charDataCstr == null) {
            var ownerDocument = this.document;

            this.__charDataCstr = /*#__PURE__*/function (_MockNode4) {
              _inherits(_class, _MockNode4);

              var _super32 = _createSuper(_class);

              function _class() {
                var _this28;

                _classCallCheck(this, _class);

                _this28 = _super32.call(this, ownerDocument, 0, 'test', '');
                throw new Error('Illegal constructor: cannot construct CharacterData');
                return _this28;
              }

              return _class;
            }(MockNode);
          }

          return this.__charDataCstr;
        },
        set: function set(charDataCstr) {
          this.__charDataCstr = charDataCstr;
        }
      }, {
        key: "CSS",
        get: function get() {
          return {
            supports: function supports() {
              return true;
            }
          };
        }
      }, {
        key: "Document",
        get: function get() {
          if (this.__docCstr == null) {
            var win = this;

            this.__docCstr = /*#__PURE__*/function (_MockDocument) {
              _inherits(_class2, _MockDocument);

              var _super33 = _createSuper(_class2);

              function _class2() {
                var _this29;

                _classCallCheck(this, _class2);

                _this29 = _super33.call(this, false, win);
                throw new Error('Illegal constructor: cannot construct Document');
                return _this29;
              }

              return _class2;
            }(MockDocument);
          }

          return this.__docCstr;
        },
        set: function set(docCstr) {
          this.__docCstr = docCstr;
        }
      }, {
        key: "DocumentFragment",
        get: function get() {
          if (this.__docFragCstr == null) {
            var ownerDocument = this.document;

            this.__docFragCstr = /*#__PURE__*/function (_MockDocumentFragment) {
              _inherits(_class3, _MockDocumentFragment);

              var _super34 = _createSuper(_class3);

              function _class3() {
                var _this30;

                _classCallCheck(this, _class3);

                _this30 = _super34.call(this, ownerDocument);
                throw new Error('Illegal constructor: cannot construct DocumentFragment');
                return _this30;
              }

              return _class3;
            }(MockDocumentFragment);
          }

          return this.__docFragCstr;
        },
        set: function set(docFragCstr) {
          this.__docFragCstr = docFragCstr;
        }
      }, {
        key: "DocumentType",
        get: function get() {
          if (this.__docTypeCstr == null) {
            var ownerDocument = this.document;

            this.__docTypeCstr = /*#__PURE__*/function (_MockNode5) {
              _inherits(_class4, _MockNode5);

              var _super35 = _createSuper(_class4);

              function _class4() {
                var _this31;

                _classCallCheck(this, _class4);

                _this31 = _super35.call(this, ownerDocument, 0, 'test', '');
                throw new Error('Illegal constructor: cannot construct DocumentType');
                return _this31;
              }

              return _class4;
            }(MockNode);
          }

          return this.__docTypeCstr;
        },
        set: function set(docTypeCstr) {
          this.__docTypeCstr = docTypeCstr;
        }
      }, {
        key: "DOMTokenList",
        get: function get() {
          if (this.__domTokenListCstr == null) {
            this.__domTokenListCstr = function MockDOMTokenList() {
              _classCallCheck(this, MockDOMTokenList);
            };
          }

          return this.__domTokenListCstr;
        },
        set: function set(domTokenListCstr) {
          this.__domTokenListCstr = domTokenListCstr;
        }
      }, {
        key: "Element",
        get: function get() {
          if (this.__elementCstr == null) {
            var ownerDocument = this.document;

            this.__elementCstr = /*#__PURE__*/function (_MockElement3) {
              _inherits(_class5, _MockElement3);

              var _super36 = _createSuper(_class5);

              function _class5() {
                var _this32;

                _classCallCheck(this, _class5);

                _this32 = _super36.call(this, ownerDocument, '');
                throw new Error('Illegal constructor: cannot construct Element');
                return _this32;
              }

              return _class5;
            }(MockElement);
          }

          return this.__elementCstr;
        }
      }, {
        key: "globalThis",
        get: function get() {
          return this;
        }
      }, {
        key: "history",
        get: function get() {
          if (this.__history == null) {
            this.__history = new MockHistory();
          }

          return this.__history;
        },
        set: function set(hsty) {
          this.__history = hsty;
        }
      }, {
        key: "JSON",
        get: function get() {
          return JSON;
        }
      }, {
        key: "HTMLElement",
        get: function get() {
          if (this.__htmlElementCstr == null) {
            var ownerDocument = this.document;

            this.__htmlElementCstr = /*#__PURE__*/function (_MockHTMLElement16) {
              _inherits(_class6, _MockHTMLElement16);

              var _super37 = _createSuper(_class6);

              function _class6() {
                var _this33;

                _classCallCheck(this, _class6);

                _this33 = _super37.call(this, ownerDocument, '');
                var observedAttributes = _this33.constructor.observedAttributes;

                if (Array.isArray(observedAttributes) && typeof _this33.attributeChangedCallback === 'function') {
                  observedAttributes.forEach(function (attrName) {
                    var attrValue = _this33.getAttribute(attrName);

                    if (attrValue != null) {
                      _this33.attributeChangedCallback(attrName, null, attrValue);
                    }
                  });
                }

                return _this33;
              }

              return _class6;
            }(MockHTMLElement);
          }

          return this.__htmlElementCstr;
        },
        set: function set(htmlElementCstr) {
          this.__htmlElementCstr = htmlElementCstr;
        }
      }, {
        key: "IntersectionObserver",
        get: function get() {
          return MockIntersectionObserver;
        }
      }, {
        key: "localStorage",
        get: function get() {
          if (this.__localStorage == null) {
            this.__localStorage = new MockStorage();
          }

          return this.__localStorage;
        },
        set: function set(locStorage) {
          this.__localStorage = locStorage;
        }
      }, {
        key: "location",
        get: function get() {
          if (this.__location == null) {
            this.__location = new MockLocation();
          }

          return this.__location;
        },
        set: function set(val) {
          if (typeof val === 'string') {
            if (this.__location == null) {
              this.__location = new MockLocation();
            }

            this.__location.href = val;
          } else {
            this.__location = val;
          }
        }
      }, {
        key: "Node",
        get: function get() {
          if (this.__nodeCstr == null) {
            var ownerDocument = this.document;

            this.__nodeCstr = /*#__PURE__*/function (_MockNode6) {
              _inherits(_class7, _MockNode6);

              var _super38 = _createSuper(_class7);

              function _class7() {
                var _this34;

                _classCallCheck(this, _class7);

                _this34 = _super38.call(this, ownerDocument, 0, 'test', '');
                throw new Error('Illegal constructor: cannot construct Node');
                return _this34;
              }

              return _class7;
            }(MockNode);
          }

          return this.__nodeCstr;
        }
      }, {
        key: "NodeList",
        get: function get() {
          if (this.__nodeListCstr == null) {
            var ownerDocument = this.document;

            this.__nodeListCstr = /*#__PURE__*/function (_MockNodeList) {
              _inherits(_class8, _MockNodeList);

              var _super39 = _createSuper(_class8);

              function _class8() {
                var _this35;

                _classCallCheck(this, _class8);

                _this35 = _super39.call(this, ownerDocument, [], 0);
                throw new Error('Illegal constructor: cannot construct NodeList');
                return _this35;
              }

              return _class8;
            }(MockNodeList);
          }

          return this.__nodeListCstr;
        }
      }, {
        key: "navigator",
        get: function get() {
          if (this.__navigator == null) {
            this.__navigator = new MockNavigator();
          }

          return this.__navigator;
        },
        set: function set(nav) {
          this.__navigator = nav;
        }
      }, {
        key: "parent",
        get: function get() {
          return null;
        }
      }, {
        key: "origin",
        get: function get() {
          return this.location.origin;
        }
      }, {
        key: "self",
        get: function get() {
          return this;
        }
      }, {
        key: "sessionStorage",
        get: function get() {
          if (this.__sessionStorage == null) {
            this.__sessionStorage = new MockStorage();
          }

          return this.__sessionStorage;
        },
        set: function set(locStorage) {
          this.__sessionStorage = locStorage;
        }
      }, {
        key: "top",
        get: function get() {
          return this;
        }
      }, {
        key: "window",
        get: function get() {
          return this;
        }
      }]);

      return MockWindow;
    }();

    addGlobalsToWindowPrototype(MockWindow.prototype);

    function resetWindowDefaults(win) {
      win.__clearInterval = nativeClearInterval;
      win.__clearTimeout = nativeClearTimeout;
      win.__setInterval = nativeSetInterval;
      win.__setTimeout = nativeSetTimeout;
      win.__maxTimeout = 30000;
      win.__allowInterval = true;
      win.URL = nativeURL;
    }

    function resetWindow(win) {
      if (win != null) {
        if (win.__timeouts) {
          win.__timeouts.forEach(function (timeoutId) {
            nativeClearInterval(timeoutId);
            nativeClearTimeout(timeoutId);
          });

          win.__timeouts.clear();
        }

        if (win.customElements && win.customElements.clear) {
          win.customElements.clear();
        }

        resetDocument(win.document);
        resetPerformance(win.performance);

        for (var key in win) {
          if (win.hasOwnProperty(key) && key !== 'document' && key !== 'performance' && key !== 'customElements') {
            delete win[key];
          }
        }

        resetWindowDefaults(win);
        resetWindowDimensions(win);
        resetEventListeners(win);

        if (win.document != null) {
          try {
            win.document.defaultView = win;
          } catch (e) {}
        }
      }
    }

    function resetWindowDimensions(win) {
      try {
        win.devicePixelRatio = 1;
        win.innerHeight = 768;
        win.innerWidth = 1366;
        win.pageXOffset = 0;
        win.pageYOffset = 0;
        win.screenLeft = 0;
        win.screenTop = 0;
        win.screenX = 0;
        win.screenY = 0;
        win.scrollX = 0;
        win.scrollY = 0;
        win.screen = {
          availHeight: win.innerHeight,
          availLeft: 0,
          availTop: 0,
          availWidth: win.innerWidth,
          colorDepth: 24,
          height: win.innerHeight,
          keepAwake: false,
          orientation: {
            angle: 0,
            type: 'portrait-primary'
          },
          pixelDepth: 24,
          width: win.innerWidth
        };
      } catch (e) {}
    }

    var MockDocument = /*#__PURE__*/function (_MockHTMLElement17) {
      _inherits(MockDocument, _MockHTMLElement17);

      var _super40 = _createSuper(MockDocument);

      function MockDocument() {
        var _this36;

        var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var win = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, MockDocument);

        _this36 = _super40.call(this, null, null);
        _this36.nodeName = "#document"
        /* DOCUMENT_NODE */
        ;
        _this36.nodeType = 9
        /* DOCUMENT_NODE */
        ;
        _this36.defaultView = win;
        _this36.cookie = '';
        _this36.referrer = '';

        _this36.appendChild(_this36.createDocumentTypeNode());

        if (typeof html === 'string') {
          var parsedDoc = parseDocumentUtil(_assertThisInitialized(_this36), html);
          var documentElement = parsedDoc.children.find(function (elm) {
            return elm.nodeName === 'HTML';
          });

          if (documentElement != null) {
            _this36.appendChild(documentElement);

            setOwnerDocument(documentElement, _assertThisInitialized(_this36));
          }
        } else if (html !== false) {
          var _documentElement = new MockHTMLElement(_assertThisInitialized(_this36), 'html');

          _this36.appendChild(_documentElement);

          _documentElement.appendChild(new MockHTMLElement(_assertThisInitialized(_this36), 'head'));

          _documentElement.appendChild(new MockHTMLElement(_assertThisInitialized(_this36), 'body'));
        }

        return _this36;
      }

      _createClass(MockDocument, [{
        key: "appendChild",
        value: function appendChild(newNode) {
          newNode.remove();
          newNode.parentNode = this;
          this.childNodes.push(newNode);
          return newNode;
        }
      }, {
        key: "createComment",
        value: function createComment(data) {
          return new MockComment(this, data);
        }
      }, {
        key: "createAttribute",
        value: function createAttribute(attrName) {
          return new MockAttr(attrName.toLowerCase(), '');
        }
      }, {
        key: "createAttributeNS",
        value: function createAttributeNS(namespaceURI, attrName) {
          return new MockAttr(attrName, '', namespaceURI);
        }
      }, {
        key: "createElement",
        value: function createElement(tagName) {
          if (tagName === "#document"
          /* DOCUMENT_NODE */
          ) {
              var doc = new MockDocument(false);
              doc.nodeName = tagName;
              doc.parentNode = null;
              return doc;
            }

          return _createElement(this, tagName);
        }
      }, {
        key: "createElementNS",
        value: function createElementNS(namespaceURI, tagName) {
          var elmNs = _createElementNS(this, namespaceURI, tagName);

          elmNs.namespaceURI = namespaceURI;
          return elmNs;
        }
      }, {
        key: "createTextNode",
        value: function createTextNode(text) {
          return new MockTextNode(this, text);
        }
      }, {
        key: "createDocumentFragment",
        value: function createDocumentFragment() {
          return new MockDocumentFragment(this);
        }
      }, {
        key: "createDocumentTypeNode",
        value: function createDocumentTypeNode() {
          return new MockDocumentTypeNode(this);
        }
      }, {
        key: "getElementById",
        value: function getElementById(id) {
          return _getElementById(this, id);
        }
      }, {
        key: "getElementsByName",
        value: function getElementsByName(elmName) {
          return _getElementsByName(this, elmName.toLowerCase());
        }
      }, {
        key: "location",
        get: function get() {
          if (this.defaultView != null) {
            return this.defaultView.location;
          }

          return null;
        },
        set: function set(val) {
          if (this.defaultView != null) {
            this.defaultView.location = val;
          }
        }
      }, {
        key: "baseURI",
        get: function get() {
          var baseNode = this.head.childNodes.find(function (node) {
            return node.nodeName === 'BASE';
          });

          if (baseNode) {
            return baseNode.href;
          }

          return this.URL;
        }
      }, {
        key: "URL",
        get: function get() {
          return this.location.href;
        }
      }, {
        key: "styleSheets",
        get: function get() {
          return this.querySelectorAll('style');
        }
      }, {
        key: "scripts",
        get: function get() {
          return this.querySelectorAll('script');
        }
      }, {
        key: "forms",
        get: function get() {
          return this.querySelectorAll('form');
        }
      }, {
        key: "images",
        get: function get() {
          return this.querySelectorAll('img');
        }
      }, {
        key: "scrollingElement",
        get: function get() {
          return this.documentElement;
        }
      }, {
        key: "documentElement",
        get: function get() {
          for (var i = this.childNodes.length - 1; i >= 0; i--) {
            if (this.childNodes[i].nodeName === 'HTML') {
              return this.childNodes[i];
            }
          }

          var documentElement = new MockHTMLElement(this, 'html');
          this.appendChild(documentElement);
          return documentElement;
        },
        set: function set(documentElement) {
          for (var i = this.childNodes.length - 1; i >= 0; i--) {
            if (this.childNodes[i].nodeType !== 10
            /* DOCUMENT_TYPE_NODE */
            ) {
                this.childNodes[i].remove();
              }
          }

          if (documentElement != null) {
            this.appendChild(documentElement);
            setOwnerDocument(documentElement, this);
          }
        }
      }, {
        key: "head",
        get: function get() {
          var documentElement = this.documentElement;

          for (var i = 0; i < documentElement.childNodes.length; i++) {
            if (documentElement.childNodes[i].nodeName === 'HEAD') {
              return documentElement.childNodes[i];
            }
          }

          var head = new MockHTMLElement(this, 'head');
          documentElement.insertBefore(head, documentElement.firstChild);
          return head;
        },
        set: function set(head) {
          var documentElement = this.documentElement;

          for (var i = documentElement.childNodes.length - 1; i >= 0; i--) {
            if (documentElement.childNodes[i].nodeName === 'HEAD') {
              documentElement.childNodes[i].remove();
            }
          }

          if (head != null) {
            documentElement.insertBefore(head, documentElement.firstChild);
            setOwnerDocument(head, this);
          }
        }
      }, {
        key: "body",
        get: function get() {
          var documentElement = this.documentElement;

          for (var i = documentElement.childNodes.length - 1; i >= 0; i--) {
            if (documentElement.childNodes[i].nodeName === 'BODY') {
              return documentElement.childNodes[i];
            }
          }

          var body = new MockHTMLElement(this, 'body');
          documentElement.appendChild(body);
          return body;
        },
        set: function set(body) {
          var documentElement = this.documentElement;

          for (var i = documentElement.childNodes.length - 1; i >= 0; i--) {
            if (documentElement.childNodes[i].nodeName === 'BODY') {
              documentElement.childNodes[i].remove();
            }
          }

          if (body != null) {
            documentElement.appendChild(body);
            setOwnerDocument(body, this);
          }
        }
      }, {
        key: "title",
        get: function get() {
          var title = this.head.childNodes.find(function (elm) {
            return elm.nodeName === 'TITLE';
          });

          if (title != null) {
            return title.textContent;
          }

          return '';
        },
        set: function set(value) {
          var head = this.head;
          var title = head.childNodes.find(function (elm) {
            return elm.nodeName === 'TITLE';
          });

          if (title == null) {
            title = this.createElement('title');
            head.appendChild(title);
          }

          title.textContent = value;
        }
      }]);

      return MockDocument;
    }(MockHTMLElement);

    function resetDocument(doc) {
      if (doc != null) {
        resetEventListeners(doc);
        var documentElement = doc.documentElement;

        if (documentElement != null) {
          resetElement(documentElement);

          for (var i = 0, ii = documentElement.childNodes.length; i < ii; i++) {
            var childNode = documentElement.childNodes[i];
            resetElement(childNode);
            childNode.childNodes.length = 0;
          }
        }

        for (var key in doc) {
          if (doc.hasOwnProperty(key) && !DOC_KEY_KEEPERS.has(key)) {
            delete doc[key];
          }
        }

        try {
          doc.nodeName = "#document"
          /* DOCUMENT_NODE */
          ;
        } catch (e) {}

        try {
          doc.nodeType = 9
          /* DOCUMENT_NODE */
          ;
        } catch (e) {}

        try {
          doc.cookie = '';
        } catch (e) {}

        try {
          doc.referrer = '';
        } catch (e) {}
      }
    }

    var DOC_KEY_KEEPERS = new Set(['nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentNode', 'childNodes', '_shadowRoot']);

    function _getElementById(elm, id) {
      var children = elm.children;

      for (var i = 0, ii = children.length; i < ii; i++) {
        var childElm = children[i];

        if (childElm.id === id) {
          return childElm;
        }

        var childElmFound = _getElementById(childElm, id);

        if (childElmFound != null) {
          return childElmFound;
        }
      }

      return null;
    }

    function _getElementsByName(elm, elmName) {
      var foundElms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var children = elm.children;

      for (var i = 0, ii = children.length; i < ii; i++) {
        var childElm = children[i];

        if (childElm.name && childElm.name.toLowerCase() === elmName) {
          foundElms.push(childElm);
        }

        _getElementsByName(childElm, elmName, foundElms);
      }

      return foundElms;
    }

    function setOwnerDocument(elm, ownerDocument) {
      for (var i = 0, ii = elm.childNodes.length; i < ii; i++) {
        elm.childNodes[i].ownerDocument = ownerDocument;

        if (elm.childNodes[i].nodeType === 1
        /* ELEMENT_NODE */
        ) {
            setOwnerDocument(elm.childNodes[i], ownerDocument);
          }
      }
    }

    var sCntFaqSearchCss = ".menu.sc-s-cnt-faq-search{margin:0;padding:0;list-style:none;padding:0 0 0 32px}.menu_item.sc-s-cnt-faq-search{text-transform:uppercase;font-size:13px;font-weight:700;color:#848ab8;padding:0 0 16px;border-bottom:3px solid white}.menu_item.sc-s-cnt-faq-search:empty{width:50px;height:22px;margin-bottom:16px;background-color:#f5f5fa;-webkit-animation:loading 1s infinite ease-in-out}.activeLink.sc-s-cnt-faq-search{border-bottom:3px solid #5468ff;color:#5d6494}.input_section.sc-s-cnt-faq-search{background-color:#f5f5fa;padding:0 32px;height:80px;-webkit-transition:0.5s;transition:0.5s}.input_block.sc-s-cnt-faq-search{outline:none;border:none;background:inherit;font-size:24px;color:#3a416f;padding-left:16px;padding-right:16px;width:100%;height:80px}.input_block.sc-s-cnt-faq-search::-webkit-input-placeholder{color:#848ab8}.input_block.sc-s-cnt-faq-search::-moz-placeholder{color:#848ab8}.input_block.sc-s-cnt-faq-search:-ms-input-placeholder{color:#848ab8}.input_block.sc-s-cnt-faq-search::-ms-input-placeholder{color:#848ab8}.input_block.sc-s-cnt-faq-search::placeholder{color:#848ab8}.search_btn.sc-s-cnt-faq-search{font-size:25px;color:#5468ff}.search_img.sc-s-cnt-faq-search{background-size:cover;background-position:center;background-repeat:no-repeat;height:16px;width:120px}.category.sc-s-cnt-faq-search{margin:16px 0 0;max-width:100%}.category_list.sc-s-cnt-faq-search{padding:0;list-style:none}.hints.sc-s-cnt-faq-search{font-size:12px;padding:8px;text-align:center;background:#f5f5fa;color:#5d6494;border-radius:5px;-webkit-transition:0.2s;transition:0.2s;width:inherit;max-width:100%;margin-left:13px}.hints.sc-s-cnt-faq-search:empty{margin:auto;width:115px;max-width:100%;height:33px;border-radius:5px;background-color:#f5f5fa;-webkit-animation:loading 1s infinite ease-in-out}.category_list.sc-s-cnt-faq-search li.sc-s-cnt-faq-search:first-child .hints.sc-s-cnt-faq-search{margin-left:0}.hints.sc-s-cnt-faq-search:hover{background-color:#d3d3dd}.activeHints.sc-s-cnt-faq-search{background-color:#d3d3dd}.parent_search_hints.sc-s-cnt-faq-search{z-index:5;width:100%;position:relative}.second_hints_parent.sc-s-cnt-faq-search{position:absolute;width:inherit;-webkit-transform-origin:top;transform-origin:top;-webkit-transition:0.5s;transition:0.5s;height:63px}.second_hints_parent_hidden.sc-s-cnt-faq-search{position:absolute;width:inherit;-webkit-transition:0.5s;transition:0.5s;-webkit-transform-origin:top;transform-origin:top;-webkit-transform:scaleY(0);transform:scaleY(0);overflow:hidden}.search_hints.sc-s-cnt-faq-search{height:63.6px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;background-color:#f5f5fa;-webkit-box-shadow:0 2px 4px rgba(0, 0, 0, .2);box-shadow:0 2px 4px rgba(0, 0, 0, .2);width:inherit;-webkit-transform:scale(1.06);transform:scale(1.06);padding:10px 32px 10px 32px;margin-top:3px;-webkit-transition:0.5s;transition:0.5s}.search_hints.sc-s-cnt-faq-search:hover{background-color:#dfdfe1}.search_hints.sc-s-cnt-faq-search:hover .hints_select.sc-s-cnt-faq-search{color:#5468ff}.hints_img.sc-s-cnt-faq-search{width:40px;height:40px;border-radius:5px;background-size:cover;background-position:center}.hints_select.sc-s-cnt-faq-search{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@media only screen and (max-width: 1065px ){.hints.sc-s-cnt-faq-search:empty{margin:auto;width:90px;max-width:100%;height:33px;border-radius:5px;background-color:#f5f5fa;-webkit-animation:loading 1s infinite ease-in-out}}@media only screen and (max-width: 425px ){h1.sc-s-cnt-faq-search{font-weight:400;color:#3A416F;font-size:28px}.hints_text.sc-s-cnt-faq-search{font-size:12px}.hints_img.sc-s-cnt-faq-search{width:25px;height:25px}.search_hints.sc-s-cnt-faq-search{padding:10px 16px 10px 16px}}@media only screen and (max-width: 530px ){.input_block.sc-s-cnt-faq-search{font-size:20px}.hints_img.sc-s-cnt-faq-search{width:30px;height:30px}}@media only screen and (max-width: 645px ){.search_img.sc-s-cnt-faq-search{width:20px !important;overflow-y:hidden;background-size:cover;background-position:-55px;background-repeat:no-repeat}.hints_text.sc-s-cnt-faq-search{font-size:14px}}@media only screen and (max-width: 767px ){.menu.sc-s-cnt-faq-search{padding-left:0;padding-top:10px}.hints_text.sc-s-cnt-faq-search{font-size:15px}}@media only screen and (max-width: 959px ){.category.sc-s-cnt-faq-search{display:none}.menu.sc-s-cnt-faq-search{padding-top:10px}}@-webkit-keyframes loading{0%{background-color:#f5f5fa}50%{background-color:#fefefe}100%{background-color:#f5f5fa}}@keyframes loading{0%{background-color:#f5f5fa}50%{background-color:#fefefe}100%{background-color:#f5f5fa}}";

    var SCntFaqSearch = /*#__PURE__*/function () {
      function SCntFaqSearch(hostRef) {
        var _this37 = this;

        _classCallCheck(this, SCntFaqSearch);

        Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *  Прием данных menu  из массива
         */

        this.menu = [];
        /**
         *  Прием данных о категориях  из массива
         */

        this.category = [];
        /**
         *  Прием данных логотипе  из массива
         */

        this.logo = [];
        /**
         *  Получение данных ссылок меню
         */

        this.getLink = function (props) {
          var item = props.slice(0, 5);
          return item.map(function (item) {
            if (_this37.activeLink !== item.id) {
              item.active = false;
            }

            return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": item.active ? 'menu_item clicked activeLink' : 'menu_item clicked',
              onClick: function onClick() {
                _this37.clickMenu.emit({
                  place: 'Menu',
                  item: item
                });

                _this37.toggleActiveLink(item);
              }
            }, item.name));
          });
        };
        /**
         *  Получение данных о категориях
         */


        this.getCategory = function (props) {
          var item = props.slice(0, 9);
          return item.map(function (item) {
            if (_this37.activeCategory !== item.id) {
              item.active = false;
            }

            return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", {
              "class": "flex-grow-1"
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": item.active ? 'hints clicked activeHints' : 'hints clicked',
              onClick: function onClick() {
                _this37.clickCategory.emit({
                  place: 'Category',
                  item: item
                });

                _this37.toggleActiveHints(item);
              }
            }, item.name));
          });
        };
        /**
         *  Получение данных о logo
         */


        this.getLogo = function (props) {
          var item = props.slice(0, 1);
          return item.map(function (item) {
            return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "search_img",
              onClick: function onClick() {
                return _this37.clickLogo.emit({
                  place: 'logo',
                  item: item
                });
              },
              style: {
                backgroundImage: "url(" + item.link + ")"
              }
            });
          });
        };
        /**
         * Поучение данных о поисковых подсказках
         */


        this.getSearchHints = function (props) {
          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, props.map(function (item) {
            return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "search_hints clicked",
              onClick: function onClick() {
                _this37.clickSearchHint.emit({
                  place: 'Search hint',
                  item: item
                });

                _this37.innerSearchHints = item.header;
              }
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "d-flex align-items-center"
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "hints_img mr-3",
              style: {
                backgroundImage: "url(" + item.img + ")"
              }
            }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "hints_text",
              innerHTML: item.header
            }, "...")), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "hints_select d-flex"
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
              "class": "fas fa-level-down-alt"
            }))));
          }));
        };
        /**
         * Выводится если нет данных для поиска
         */


        this.notDataSearch = function () {
          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "search_hints"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "d-flex align-items-center"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "hints_text text-muted"
          }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null));
        };

        this.clickMenu = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickMenu", 7);
        this.clickSearch = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickSearch", 7);
        this.clickLogo = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickLogo", 7);
        this.clickCategory = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickCategory", 7);
        this.clickSearchHint = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickSearchHint", 7);
        this.inputValueUp = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "inputValueUp", 7);
        this.inputValueDown = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "inputValueDown", 7);
      }
      /**
       * Анимация уменьшения поисковика
       */


      _createClass(SCntFaqSearch, [{
        key: "notScale",
        value: function notScale(event) {
          if (event.target !== this.ourInput) {
            this.ourInputBlock.style.transform = 'scale(1)';
            this.ourInputBlock.style.borderBottom = '';
            this.ourInputBlock.style.boxShadow = '';
            this.searchHintsVisible = false;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this38 = this;

          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "my_container"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "search_block"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", {
            "class": "menu d-flex justify-content-between"
          }, this.menu ? this.getLink(this.menu) : '')))), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            ref: function ref(el) {
              return _this38.ourInputBlock = el;
            },
            "class": "input_section d-flex align-items-center justify-content-between"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "search_btn clicked",
            onClick: function onClick() {
              return _this38.clickSearch.emit('Search');
            }
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-search"
          })), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "flex-grow-1"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            value: parseHtmlToFragment(this.innerSearchHints).innerText,
            ref: function ref(el) {
              return _this38.ourInput = el;
            },
            onFocus: function onFocus(event) {
              return _this38.animationInput(event);
            },
            onKeyDown: function onKeyDown() {
              return _this38.inputValueDown.emit({
                'search': event
              });
            },
            onKeyUp: function onKeyUp() {
              return _this38.inputValueUp.emit({
                'search': event
              });
            },
            "class": "input_block",
            type: "text",
            placeholder: this.placeHolder ? this.placeHolder : ''
          })), this.logo ? this.getLogo(this.logo) : ''), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "parent_search_hints"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.searchHintsVisible ? 'second_hints_parent' : 'second_hints_parent_hidden'
          }, this.searchHints ? this.getSearchHints(this.searchHints) : this.notDataSearch())), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "category"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", {
            "class": "category_list d-flex"
          }, this.category ? this.getCategory(this.category) : '')));
        }
        /**
         * Показ активной ссылки
         */

      }, {
        key: "toggleActiveLink",
        value: function toggleActiveLink(item) {
          this.activeLink = item.id;
          item.active = true;
        }
        /**
         * Показ активной ссылки категорий
         */

      }, {
        key: "toggleActiveHints",
        value: function toggleActiveHints(item) {
          item.active = true;
          this.activeCategory = item.id;
        }
        /**
         * Анимация увеличения поисковика
         */

      }, {
        key: "animationInput",
        value: function animationInput(event) {
          if (event.target === this.ourInput) {
            this.ourInputBlock.style.transform = 'scale(1.06)';
            this.ourInputBlock.style.boxShadow = '0 2px 4px rgba(0, 0, 0, .2)';
            this.ourInputBlock.style.borderBottom = '3px solid #5468ff';
            this.searchHintsVisible = true;
          }
        }
      }]);

      return SCntFaqSearch;
    }();

    SCntFaqSearch.style = sCntFaqSearchCss;
    var sCntFaqSearchPopUpCss = ".main_search{width:100%;height:100%;position:absolute;top:0}.black{z-index:10;width:100%;height:100%;position:fixed;left:0;top:0;background-color:black;opacity:0.3}.input_parent{margin:auto;height:inherit;width:1200px;max-width:100%;display:-ms-flexbox;display:flex;padding:0 15px}.input_search{-webkit-box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);border-radius:5px;background-color:white;padding:0 32px;-webkit-transition:0.5s;transition:0.5s;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;width:70%;top:50%;left:15%;z-index:11;position:fixed;margin:auto;border-bottom:1px solid #ede8e8}.input_form{outline:none;border:none;font-size:24px;color:#3a416f;padding-left:16px;padding-right:16px;width:100%;height:80px}.input_btn{color:grey;font-size:25px}.search_hint_img{min-width:40px;width:40px;height:40px;background-position:center;background-size:cover;border-radius:5px}.search_hint_text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.main_hints{overflow-y:scroll;-ms-overflow-style:none;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:top;transform-origin:top;border-bottom-left-radius:5px;border-bottom-right-radius:5px;top:81px;background-color:white;position:absolute;width:100%;left:0;height:calc(60vh - 70px)}.back_in_anim{display:-ms-flexbox;display:flex;width:inherit;height:inherit;border-radius:inherit;font-size:20px}.backAnim{text-align:center;display:block;position:fixed;bottom:20px;z-index:110;left:50%;-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);width:50px;height:50px;border-radius:50%;color:black;background-color:white;-webkit-box-shadow:0 5px 15px 0 rgba(37,44,97,.15), 0 2px 4px 0 rgba(93,100,148,.2);box-shadow:0 5px 15px 0 rgba(37,44,97,.15), 0 2px 4px 0 rgba(93,100,148,.2);-webkit-transition:0.3s;transition:0.3s}.backAnim:hover{color:grey}.main_hints::-webkit-scrollbar{width:0}.paren_hints{border-radius:5px;width:inherit;height:63px;padding:10px 32px 10px 32px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s;transition:0.3s}.paren_hints:hover{background-color:#f8f8f8}.paren_hints:hover .select{color:grey}.fa-level-down-alt{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.select{width:30px;text-align:center}@-webkit-keyframes scale_hints{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes scale_hints{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes scale_hints_none{0%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes scale_hints_none{0%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes border_bottom{0%{border-bottom-right-radius:5px;border-bottom-left-radius:5px}100%{border-bottom-right-radius:0px;border-bottom-left-radius:0px}}@keyframes border_bottom{0%{border-bottom-right-radius:5px;border-bottom-left-radius:5px}100%{border-bottom-right-radius:0px;border-bottom-left-radius:0px}}@-webkit-keyframes border_bottom_none{0%{border-bottom-right-radius:0px;border-bottom-left-radius:0px}100%{border-bottom-right-radius:5px;border-bottom-left-radius:5px}}@keyframes border_bottom_none{0%{border-bottom-right-radius:0px;border-bottom-left-radius:0px}100%{border-bottom-right-radius:5px;border-bottom-left-radius:5px}}@-webkit-keyframes translate{0%{top:50%}100%{top:10%}}@keyframes translate{0%{top:50%}100%{top:10%}}@-webkit-keyframes translate_none{0%{top:20%}100%{top:50%}}@keyframes translate_none{0%{top:20%}100%{top:50%}}@media only screen and (min-width: 590px){@-webkit-keyframes scale{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(1.3);transform:scale(1.3)}}@keyframes scale{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(1.3);transform:scale(1.3)}}@-webkit-keyframes scale_none{0%{-webkit-transform:scale(1.3);transform:scale(1.3)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale_none{0%{-webkit-transform:scale(1.3);transform:scale(1.3)}100%{-webkit-transform:scale(1);transform:scale(1)}}}@media only screen and (max-width: 590px){.input_search{-webkit-transform:scale(1.3);transform:scale(1.3);width:75%;left:12.5%}.input_form{font-size:20px}.input_btn{font-size:20px}.main_hints{height:calc(65vh - 60px)}@-webkit-keyframes translate{0%{top:50%}100%{top:2.5%}}@keyframes translate{0%{top:50%}100%{top:2.5%}}}@media only screen and (max-width: 374px){.main_hints{height:calc(62vh - 60px)}}";

    var SCntFaqSearchPopUp = /*#__PURE__*/function () {
      function SCntFaqSearchPopUp(hostRef) {
        var _this39 = this;

        _classCallCheck(this, SCntFaqSearchPopUp);

        Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Прием данных из массива
         */

        this.searchHintsData = [];
        /**
         * Содержимое placeholder
         */

        this.searchPlace = [];
        /**
         * Поучение данных о поисковых подсказках
         */

        this.getSearchHints = function (props) {
          var item = props.slice(0, 12);
          return item.map(function (item) {
            return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              ref: function ref(el) {
                return _this39.ourSearchHintBlock = el;
              },
              onClick: function onClick() {
                _this39.clickHints.emit({
                  place: 'Search hint',
                  item: item
                });

                _this39.searchFormValue = item.header;

                _this39.hideHints();
              },
              "class": "paren_hints clicked"
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "search_hint_img mr-3",
              style: {
                backgroundImage: "url(" + item.img + ")"
              }
            }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "search_hint_text",
              innerHTML: item.header
            }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "select"
            }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
              "class": "fas fa-level-down-alt"
            })));
          });
        };
        /**
         * Поучение данных placeholder
         */


        this.getSearchPlace = function (props) {
          var item = props.slice(0, 1);
          return item.map(function (item) {
            return item.text;
          });
        };
        /**
         * Проверка наличия поисковых данных
         */


        this.checkData = function () {
          if (_this39.searchHintsData.length === 0) {
            return _this39.dataArrayLength = false;
          } else {
            return _this39.dataArrayLength = true;
          }
        };

        this.clickSearchPop = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickSearchPop", 7);
        this.clickBlackBlock = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickBlackBlock", 7);
        this.clickHints = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickHints", 7);
        this.clickBackAnim = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickBackAnim", 7);
        this.searchKeyUp = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchKeyUp", 7);
        this.searchKeyDown = Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchKeyDown", 7);
      }

      _createClass(SCntFaqSearchPopUp, [{
        key: "render",
        value: function render() {
          var _this40 = this;

          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "main_search"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "black",
            onClick: function onClick() {
              return _this40.clickBlackBlock.emit('black block');
            },
            ref: function ref(el) {
              return _this40.ourBlackBlock = el;
            }
          }), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "input_parent"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "input_search",
            ref: function ref(el) {
              return _this40.ourInputFormBlock = el;
            }
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "input_btn clicked",
            onClick: function onClick() {
              return _this40.clickSearchPop.emit('Search');
            }
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-search"
          })), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "flex-grow-1"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            onKeyDown: function onKeyDown() {
              return _this40.searchKeyDown.emit({
                'search': event
              });
            },
            onKeyUp: function onKeyUp() {
              return _this40.searchKeyUp.emit({
                'search': event
              });
            },
            value: parseHtmlToFragment(this.searchFormValue).innerText,
            onFocus: function onFocus() {
              return _this40.animationSearch();
            },
            ref: function ref(el) {
              return _this40.ourInputForm = el;
            },
            "class": "input_form",
            type: "text",
            placeholder: this.searchPlace ? this.getSearchPlace(this.searchPlace) : ''
          })), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "main_hints",
            ref: function ref(el) {
              return _this40.ourHintsBlock = el;
            }
          }, this.checkData() ? this.getSearchHints(this.searchHintsData) : this.notDataSearch()))), Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "backAnim clicked",
            onClick: function onClick() {
              _this40.clickBackAnim.emit('Back');

              _this40.hideHints();
            }
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "back_in_anim"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-auto"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-times"
          })))));
        }
        /**
         * Анимация появления поисковых подсказок
         */

      }, {
        key: "animationSearch",
        value: function animationSearch() {
          this.ourInputFormBlock.style.animationName = 'scale, translate, border_bottom';
          this.ourInputFormBlock.style.animationDuration = '8s, 1s, 1s';
          this.ourInputFormBlock.style.animationFillMode = 'forwards';
          this.ourHintsBlock.style.animationName = 'scale_hints';
          this.ourHintsBlock.style.animationDuration = '0.5s';
          this.ourHintsBlock.style.animationFillMode = 'forwards';
        }
        /**
         * Анимация скрытия поисковых подсказок
         */

      }, {
        key: "hideHints",
        value: function hideHints() {
          this.ourHintsBlock.style.animationName = 'scale_hints_none';
          this.ourInputFormBlock.style.animationName = 'scale_none, translate_none, border_bottom_none';
          this.ourInputFormBlock.style.animationDuration = '1s, 1s, 1s';
        }
        /**
         * Текст для вывода когда нет данных
         */

      }, {
        key: "notDataSearch",
        value: function notDataSearch() {
          var _this41 = this;

          return Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "paren_hints clicked",
            onClick: function onClick() {
              return _this41.hideHints();
            }
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "d-flex align-items-center"
          }, Object(_index_6c3a0dc7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "search_hint_text"
          }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")));
        }
      }]);

      return SCntFaqSearchPopUp;
    }();

    SCntFaqSearchPopUp.style = sCntFaqSearchPopUpCss;
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/amd-options.js":
  /*!****************************************!*\
    !*** (webpack)/buildin/amd-options.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinAmdOptionsJs(module, exports) {
    /* WEBPACK VAR INJECTION */
    (function (__webpack_amd_options__) {
      /* globals __webpack_amd_options__ */
      module.exports = __webpack_amd_options__;
      /* WEBPACK VAR INJECTION */
    }).call(this, {});
    /***/
  }
}]);
//# sourceMappingURL=stencil-first-page_6-entry-js-es5.js.map
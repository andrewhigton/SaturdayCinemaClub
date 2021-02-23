webpackHotUpdate("main",{

/***/ "./src/components/dashboard/Dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/Dashboard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _films_Film__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../films/Film */ "./src/components/films/Film.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");
/* harmony import */ var _ticket_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ticket/Ticket */ "./src/components/ticket/Ticket.js");
/* harmony import */ var _actions_film__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/film */ "./src/actions/film.js");
/* harmony import */ var _Dashboard_Tickets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dashboard-Tickets */ "./src/components/dashboard/Dashboard-Tickets.js");
/* harmony import */ var _Dashboard_Films__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dashboard-Films */ "./src/components/dashboard/Dashboard-Films.js");
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/dashboard/Dashboard.js";











;

const Dashboard = ({
  auth: {
    user,
    loading
  },
  film: {
    films
  },
  loadFilms,
  history
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    loadFilms();
  }, [loadFilms]); // console.log(user);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "welcome-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Welcome ", user && user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/create-film",
    className: "welcome-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Create a new screening")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "welcome-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Your tickets and screenings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_Tickets__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: user,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dashboard_Films__WEBPACK_IMPORTED_MODULE_9__["default"], {
    user: user,
    films: films,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/create-film",
    className: "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Click to create a movie showing")));
};

Dashboard.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  loadFilms: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  film: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  film: state.film
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  loadFilms: _actions_film__WEBPACK_IMPORTED_MODULE_7__["loadFilms"]
})(Dashboard));

/***/ })

})
//# sourceMappingURL=main.6a51c133f027fc1eff18.hot-update.js.map
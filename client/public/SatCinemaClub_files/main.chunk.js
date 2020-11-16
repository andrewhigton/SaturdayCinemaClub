(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/App.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\n  --primary-color: #17a2b8;\n  --dark-color: #343a40;\n  --light-color: #f4f4f4;\n  --danger-color: #dc3545;\n  --success-color: #28a745; }\n\n* {\n  box-sizing: border-box;\n  /*margin: 0;*/\n  padding: 0;\n  /*width: 102vw;*/\n  max-width: 102vw; }\n\nbody {\n  font-family: 'Raleway', sans-serif;\n  /*font-size: 5em;*/\n  line-height: 1.6;\n  background-color: #fff;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.4);\n  max-width: 97%;\n  /*position: relative;*/\n  /*width: 100%;*/\n  height: 100%;\n  -webkit-text-size-adjust: none;\n  overflow-x: hidden; }\n\na {\n  color: #864747; }\n\nh1 {\n  /*font-size: 1em;*/\n  /*display: flex;\n  flex-wrap: wrap;*/ }\n\n/*.arrows {\n  position: absolute;\n  z-index: 2;\n  font-size: 35px;\n  margin: auto;\n  text-align: center;\n  color: white;\n  top: 550px;\n  width: 200px;\n  height: 200px;\n  display: inline-flex;\n  position: relative;\n  left: 600px;\n}\n\n.slide-arrow-prev {  \n  margin-right: 70px;\n}\n*/\n/*.image-slide {\n    width: 100%;\n    position: absolute;\n    top: -80px;\n    left: 0px;\n    height: 780px;\n    padding: 0.7rem 2rem;\n    z-index: 0;\n}\n*/\n/*.inset-text {\n  font-family: 'Raleway', sans-serif;\n  position: absolute;\n  font-size: 2em;\n  color: white;\n  left: 30px;\n  top: 575px;\n}*/\n/*xy*/\n.welcome-message {\n  font-size: 1.7em;\n  margin-left: 15px;\n  margin-bottom: 2vh;\n  font-family: 'Raleway', sans-serif; }\n\n/*//older media queires*/\n@media screen and (max-width: 1200px) {\n  body .inset-text {\n    top: 530px; }\n  .hamburgerDiv {\n    display: none;\n    margin-top: -7vh; }\n  .hamburgDiv-loggedin {\n    display: none; }\n  .dropdown {\n    display: block; } }\n\n@media screen and (max-width: 1100px) {\n  body .all-screenings {\n    /*margin-top: 520px;*/ }\n  .top-row {\n    display: none; }\n  .dropdown {\n    display: inline-block;\n    font-family: 'Raleway', sans-serif;\n    font-size: 0.8em;\n    position: absolute !important;\n    background-color: white;\n    width: 100%;\n    left: 1vw;\n    top: 6vh;\n    margin-left: -1vw;\n    margin-top: 0vh;\n    /*box-shadow: 0px 8px 0px 0px #864747;*/\n    z-index: 1;\n    /*height: 5vh;*/ }\n  .hamburgerDiv {\n    display: block;\n    margin-top: -7vh; }\n  .hamburgDiv-loggedin {\n    display: block; } }\n\n@media screen and (max-width: 999px) {\n  body .inset-text {\n    font-size: 15px;\n    top: 510px; } }\n\n@media screen and (max-width: 900px) {\n  body .inset-text {\n    font-size: 14px;\n    top: 500px; }\n  .arrows {\n    font-size: 30px;\n    top: 450px;\n    left: 340px; }\n  body .all-screenings {\n    /*margin-top: 440px;*/ }\n  .reg-dropdown {\n    margin-left: 0.5vw; } }\n\n@media screen and (max-width: 770px) {\n  /*.navbar {\n    float: none;\n    width: 100%;\n  }\n */\n  body .inset-text {\n    font-size: 15px;\n    top: 440px; }\n  body h1 {\n    /*font-size: 32px;*/ }\n  .all-screenings {\n    /*max-width: 770px;*/ }\n  .register, .login, .howitworks {\n    display: none; }\n  .reg-dropdown {\n    margin-left: 1vw; }\n  .how-loggedin, .films-tickets-link, .logout {\n    display: none; }\n  /**/\n  body .image-slide {\n    top: -150px; }\n  body .all-screenings {\n    /*margin-top: 370px;*/ } }\n\n@media screen and (max-width: 680px) {\n  body .image-slide {\n    top: -180px; }\n  body .all-screenings {\n    /*margin-top: 300px;*/ }\n  body .inset-text {\n    font-size: 15px;\n    top: 410px; }\n  body .hamburger {\n    display: block; }\n  body h1 {\n    font-size: 2.3rem; } }\n\n@media screen and (max-width: 562px) {\n  body .inset-text {\n    font-size: 11px;\n    top: 410px; }\n  body .all-screenings {\n    /*margin-top: 220px;*/ }\n  body .navbar {\n    height: 3vh;\n    margin-top: 30px; }\n  body h1 {\n    font-size: 0.85em;\n    margin-top: -1.2vh; }\n  .reg-dropdown {\n    margin-left: 1vw; }\n  .contacts-link {\n    display: none; }\n  body .main-title-subdeck {\n    display: none; }\n  body .image-slide {\n    top: -220px; }\n  body .hamburgerDiv {\n    margin-top: -11vh; }\n  .hamburgDiv-loggedin {\n    margin-top: -7vh; }\n  .hamburger {\n    width: 22px;\n    height: 3px;\n    margin: 3px; }\n  .dropdown {\n    top: 1vh; }\n  .navbar {\n    height: 50px; }\n  .navbar-left {\n    margin-top: -8vh; }\n  .reg-dropdown, .log-dropdown, .how-dropdown, .buy-dropdown, .buytickets-dropdown {\n    font-size: 0.8em;\n    margin-right: 0.1vw; } }\n\n@media screen and (max-width: 410px) {\n  body .inset-text {\n    left: 18px;\n    font-size: 9px;\n    top: 400px; }\n  body .all-screenings {\n    /*margin-top: 160px;*/ }\n  .navbar {\n    max-height: 50px;\n    width: 90%; }\n  .main-title {\n    font-size: 28px; }\n  .navbar-left {\n    width: 95%; }\n  body .hamburgerDiv {\n    margin-top: -10vh;\n    margin-right: -3.5em; }\n  body .hamburgDiv-loggedin {\n    margin-top: -9.5vh;\n    margin-left: 80vw; }\n  body h1 {\n    font-size: 0.7em;\n    margin-top: -1.2vh; }\n  .dropdown {\n    top: 0vh;\n    font-size: 0.6em;\n    /*    height: 3vh;*/ }\n  /*  .how-auth-dropdown, .logout-dropdown, .films-dropdown {\n    font-size: 15px; \n  }\n*/\n  body .films-dropdown {\n    left: 18px;\n    top: 30px; }\n  .logout-dropdown {\n    left: 160px;\n    top: 30px; }\n  .how-auth-dropdown {\n    display: none; }\n  /*.reg-dropdown, .log-dropdown, .how-dropdown {\n  font-size: 5px; \n  }\n  */\n  /*.reg-dropdown { \n  top: 30px;\n  }*/\n  .log-dropdown {\n    margin-left: -1.4em; }\n  /* .how-dropdown {\n  top: 30px;\n  left: 130px;\n  }*/\n  body .image-slide {\n    top: -250px; } }\n\n@media screen and (max-width: 362px) {\n  body .inset-text {\n    left: 16px;\n    top: 400px; }\n  .reg-dropdown {\n    margin-right: -3vw; }\n  .log-dropdown, .buy-dropdown, .how-dropdown, .buytickets-dropdown {\n    margin-right: -5vw; }\n  body .all-screenings {\n    /*margin-top: 110px;*/ }\n  body .all-screenings-title {\n    font-size: 25px; }\n  .navbar {\n    height: 2vh; }\n  .logout-dropdown {\n    left: 140px;\n    top: 30px; }\n  .navbar-left {\n    width: 90%; }\n  .navbar-right {\n    width: 10%; }\n  body h1 {\n    font-size: 0.6em;\n    margin-top: -1vh; }\n  body .image-slide {\n    top: -270px; }\n  body .hamburgerDiv {\n    margin-top: -10vh;\n    margin-right: -3em; }\n  body .hamburgDiv-loggedin {\n    margin-top: -9.5vh;\n    margin-left: 80vw; }\n  .hamburger {\n    width: 22px;\n    height: 3px;\n    margin: 3px; }\n  .dropdown {\n    margin-right: 0vw; } }\n\n@media screen and (max-width: 335px) {\n  body .inset-text {\n    left: 16px;\n    font-size: 8px;\n    top: 400px; }\n  /*body .hamburgerDiv {\n    margin-top: 1px\n  }*/\n  body .all-screenings {\n    /*margin-top: 110px;*/ }\n  body .all-screenings-title {\n    /*font-size: 25px;*/ }\n  .navbar {\n    height: 2vh; }\n  .logout-dropdown {\n    left: 140px;\n    top: 30px; }\n  .navbar-left {\n    width: 90%; }\n  .navbar-right {\n    width: 10%; }\n  .main-title {\n    margin-top: 2vh; }\n  body h1 {\n    font-size: 0.5em; }\n  .dropdown {\n    font-size: 0.6em; }\n  .hamburgDiv-loggedin {\n    margin-top: -8vh;\n    margin-left: 12vw; } }\n\n@media screen and (max-width: 290px) {\n  body .inset-text {\n    left: 14px;\n    /*font-size: 8px;*/\n    top: 390px; }\n  .all-screenings {\n    /*margin-top: 70px;*/ }\n  .navbar {\n    max-height: 30px; }\n  .navbar-left {\n    width: 90%; }\n  .navbar-right {\n    width: 10%; }\n  h1 {\n    font-size: 0.45em;\n    line-height: 1.1;\n    margin-top: 16px; }\n  body .image-slide {\n    top: -300px; }\n  body .hamburgerDiv {\n    margin-top: -12vh;\n    margin-right: -2.5em; } }\n\n@media screen and (max-width: 290px) {\n  .navbar-left {\n    width: 100%; } }\n\n/*ends media screens*/\n.landing {\n  height: 100%;\n  width: 100%; }\n\n.films-link {\n  font-size: 22px; }\n\n/*.img {\n  height: 100px;\n  width: 100%;\n}*/\n.landing-page-titles {\n  color: #fff;\n  margin: auto;\n  display: flex;\n  float: left;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center; }\n\n.guide-link {\n  position: fixed;\n  margin-top: 35px; }\n\nul {\n  list-style: none; }\n\n/*.btn {\n  display: inline-block;\n  background: var(--light-color);\n  color: #333;\n  padding: 0.4rem 1.3rem;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  margin-left: 1.4rem;\n  margin-top: 1.7rem;\n  width: auto;\n  margin-right: 0.5rem;\n  transition: opacity 0.2s ease-in;\n  outline: none;\n}*/\n.no-account {\n  font-size: 25px;\n  margin-left: 1.3rem;\n  margin-top: 1.7rem; }\n\n.reg {\n  color: white; }\n\nimg {\n  width: 264px;\n  object-fit: cover;\n  max-height: 148px; }\n\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  margin-top: -22px;\n  padding: 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  -webkit-user-select: none;\n          user-select: none; }\n\n/*//from here*/\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px; }\n\n.dark-overlay {\n  /*  background-color: rgba(0, 0, 0, 0.7);\n  position: relative;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  margin-top: -100px;\n*/ }\n\n.dashboard-display {\n  display: inline-flex;\n  flex-wrap: wrap;\n  margin-top: 0vh; }\n\n.checkout-page {\n  margin-left: 20px;\n  font-size: 25px;\n  margin-top: 100px; }\n\n.btn-back {\n  margin-left: 0px; }\n\n/* On hover, add a black background color with a little bit see-through \n.prev:hover, .next:hover {\n  background-color: rgba(0,0,0,0.8);\n}\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n/* Fading animation */\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s; }\n\n@keyframes fade {\n  from {\n    opacity: .4; }\n  to {\n    opacity: 1; } }\n\n/*newer mediascreens*/\n@media (min-width: 320px) {\n  /* smartphones, iPhone, portrait 480x320 phones */\n  /*body .film {\n    width: 9em;\n    margin-left: 0.5vw;\n    margin-right: 0.5vw;\n    padding: 1vw;\n  }*/ }\n\n@media (min-width: 481px) {\n  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */\n  /*body .film {\n    width: 12em;\n    margin-left: 0.5vw;\n    margin-right: 0.5vw;\n    padding: 1vw;\n  }*/ }\n\n@media (min-width: 641px) {\n  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */\n  /*body .film {\n    width: 15em;\n    margin-left: 0.5vw;\n    margin-right: 0.5vw;\n    padding: 2vw;\n  }*/\n  body .all-screenings-title {\n    margin-left: 3vh; } }\n\n@media (min-width: 961px) {\n  /* tablet, landscape iPad, lo-res laptops ands desktops */\n  /*  body .film {\n    width: 14em;\n    margin-left: 0.5vw;\n    margin-right: 0.5vw;\n    padding: 1vw;\n}\n*/\n  body .all-screenings-title {\n    margin-left: 3vh; } }\n\n@media (min-width: 1025px) {\n  /* big landscape tablets, laptops, and desktops */\n  /*body .film {\n    width: 14em;\n    margin-left: 0.3vw;\n    margin-right: 0.3vw;\n    padding: 1vw;\n  }\n*/\n  body .all-screenings-title {\n    margin-left: 0vh; } }\n\n@media (min-width: 1281px) {\n  body .all-screenings-title {\n    font-size: 30px;\n    /*font-family: 'Open Sans Condensed';*/\n    color: #864747;\n    margin-bottom: 5vh;\n    margin-left: 0vh; }\n  /* hi-res laptops and desktops */ }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/auth/auth.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/auth/auth.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".auth {\n  font-size: 24px;\n  margin-top: 65px;\n  float: right;\n  font-family: 'Raleway', sans-serif; }\n\n.lead {\n  margin-top: 20px;\n  font-size: 25px !important;\n  margin-left: 25px;\n  color: #864747; }\n\n.form .form-group {\n  margin-top: 30px;\n  margin: 1.2rem 0;\n  padding-left: 20px; }\n\n.form .form-text {\n  display: block;\n  margin-top: 0.5rem;\n  color: #888; }\n\n.form input[type='text'],\n.form input[type='number'],\n.form input[type='email'],\n.form input[type='password'],\n.form input[type='date'],\n.form input[type='time'],\n.form select,\n.form textarea {\n  display: block;\n  width: 95%;\n  padding: 1rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n  margin-bottom: 10px; }\n\n.form-ticket {\n  width: 50%;\n  margin-top: 10px; }\n\n.form input[type='submit'],\nbutton {\n  font: inherit; }\n\n.form .social-input {\n  display: flex; }\n\n.btn {\n  display: inline-block;\n  /*background: var(--light-color);*/\n  background-color: #864747 !important;\n  padding: 0.4rem 1.3rem;\n  font-size: 1rem;\n  border: none !important;\n  cursor: pointer;\n  margin-left: 1.4rem;\n  margin-top: 1.7rem;\n  width: auto;\n  /*margin-left: 20px;*/\n  margin-right: 0.5rem;\n  transition: opacity 0.2s ease-in;\n  outline: none; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/carousel/carousel.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/carousel/carousel.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".img-slide {\n  width: 100%;\n  max-height: 500px; }\n\n.carousel {\n  font-family: 'Raleway', sans-serif;\n  font-weight: bold;\n  width: 100%;\n  /*left: 19vw;*/\n  margin-left: 0.5vw;\n  /*margin-right: -20vw;*/ }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/films/Films.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/films/Films.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.all-screenings {\n  width: 98%;\n  margin-top: 6vh;\n  /*border: 1px solid black;*/\n  justify-content: center; }\n\n/*//sort these two next*/\n.all-screenings-title {\n  text-transform: uppercase;\n  font-size: 1.5em;\n  font-family: 'Raleway', sans-serif;\n  color: #864747;\n  /*margin-bottom: 5vh;*/\n  margin-left: 5vw;\n  margin-right: auto;\n  text-align: center; }\n\n.view-all-link {\n  /*top: -10vh;*/\n  margin-top: -2vh;\n  margin-left: 70vw;\n  text-transform: uppercase;\n  font-size: 2em;\n  font-family: 'Raleway', sans-serif;\n  color: #864747; }\n\n.films-list {\n  width: 100%;\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: 12vw;\n  /*margin-bottom: 15vh;*/ }\n\n.film {\n  font-family: 'Limelight', cursive;\n  text-align: center;\n  width: 280px;\n  height: 69vh;\n  min-width: 280px;\n  margin-right: 2vw;\n  color: white;\n  margin-top: -3.5vh;\n  margin-bottom: 7vh;\n  padding: 2vw;\n  padding-top: 5x§vw; }\n\n.small-film-pic {\n  width: 240px;\n  height: 150px;\n  margin-top: 1vh;\n  margin-bottom: 3vh;\n  position: relative; }\n\n.your-films {\n  display: block;\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 50px;\n  /*margin-left: 18vw;*/ }\n\n.your-film-header {\n  margin-bottom: -20px;\n  margin-top: 30px;\n  margin-left: 5px; }\n\n.custom-button {\n  max-width: 80%;\n  /*  width: auto;*/\n  height: 6vh;\n  color: white;\n  letter-spacing: 0.5px;\n  /*line-height: 50px;*/\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  background-color: #864747;\n  margin-bottom: 3vh;\n  text-transform: uppercase;\n  font-family: 'Raleway', sans-serif;\n  font-weight: bolder;\n  /*border: none;*/\n  cursor: pointer;\n  /*display: flex;*/\n  justify-content: center;\n  /*margin-top: 20px;*/ }\n  .custom-button:hover {\n    background-color: #511000;\n    color: white;\n    border: 1px solid black; }\n\n.inset-text {\n  font-family: 'Raleway', sans-serif;\n  position: absolute;\n  font-size: 2em;\n  color: #864747;\n  /*position: relative;*/\n  left: 30px;\n  top: 575px; }\n\n.film-border {\n  /*position: relative;*/\n  top: 200px;\n  left: 50%;\n  transform: translate(-50%);\n  /*width: 300px;\n  height: 100px;*/\n  background: #111111;\n  overflow: hidden; }\n\n.film-border::before {\n  content: \"\";\n  position: absolute;\n  top: 4px;\n  left: 0px;\n  width: 8px;\n  height: 8px;\n  background: white;\n  box-shadow: 14px 0px 0px white, 28px 0px 0px white, 42px 0px 0px white, 56px 0px 0px white, 70px 0px 0px white, 84px 0px 0px white, 98px 0px 0px white, 112px 0px 0px white, 126px 0px 0px white, 140px 0px 0px white, 154px 0px 0px white, 168px 0px 0px white, 182px 0px 0px white, 196px 0px 0px white, 210px 0px 0px white, 224px 0px 0px white, 238px 0px 0px white, 252px 0px 0px white, 266px 0px 0px white, 280px 0px 0px white, 294px 0px 0px white, 308px 0px 0px white; }\n\n.film-border::after {\n  content: \"\";\n  position: absolute;\n  bottom: 4px;\n  left: 0px;\n  width: 8px;\n  height: 8px;\n  background: white;\n  box-shadow: 4px 0px 0px white, 28px 0px 0px white, 42px 0px 0px white, 56px 0px 0px white, 70px 0px 0px white, 84px 0px 0px white, 98px 0px 0px white, 112px 0px 0px white, 126px 0px 0px white, 140px 0px 0px white, 154px 0px 0px white, 168px 0px 0px white, 182px 0px 0px white, 196px 0px 0px white, 210px 0px 0px white, 224px 0px 0px white, 238px 0px 0px white, 252px 0px 0px white, 266px 0px 0px white, 280px 0px 0px white, 294px 0px 0px white, 308px 0px 0px white; }\n\n.film-border div {\n  width: 90px;\n  height: 60%;\n  top: 50%;\n  transform: translate(0%, -50%);\n  margin-left: 4px;\n  box-shadow: inset 0px 0px 10px 0px #b7410e;\n  display: inline-block;\n  margin-top: 50px; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/footer/Footer.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/footer/Footer.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".footer {\n  position: fixed;\n  display: inline-block;\n  left: 0;\n  height: 8vh;\n  bottom: 0;\n  width: 100%;\n  background-color: #864747;\n  color: white;\n  text-align: center; }\n\n.footer-link {\n  float: left;\n  margin-left: 2vw;\n  margin-top: 2vh; }\n\n.contacts-link {\n  color: white !important;\n  margin-left: 2vw;\n  margin-top: 2vh; }\n\n.social-links {\n  float: right;\n  margin-right: -2vw;\n  margin-top: 1vh; }\n\n.fa {\n  padding: 8px;\n  display: table-cell;\n  font-size: 30px;\n  width: 50px;\n  height: 45px;\n  text-align: center;\n  text-decoration: none;\n  margin-top: 1vh; }\n\n.fa:hover {\n  opacity: 0.7; }\n\n/* Facebook */\n.fa-facebook {\n  background: #3B5998;\n  color: white; }\n\n/* Twitter */\n.fa-twitter {\n  background: #55ACEE;\n  color: white; }\n\n.fa-youtube {\n  background: red;\n  color: white; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/navbar/Navbar.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/navbar/Navbar.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".navbar {\n  height: 100px;\n  font-family: 'Limelight', cursive;\n  margin-top: 1vh;\n  /*margin-left: 6vw;*/\n  /*color: #864747 ;*/ }\n\n.navbar-left {\n  display: block;\n  float: left;\n  margin-top: -60px; }\n\n.navbar-right {\n  /*font-size: 1.2em;*/\n  margin-top: 3vh;\n  /*display: inline-flex;*/\n  font-size: 1.2em;\n  font-family: 'Raleway', sans-serif; }\n\n.top-row {\n  margin-top: 1vh;\n  margin-right: -3vw;\n  display: flex; }\n\n.navbar a {\n  padding: 0.45rem;\n  margin: 0 0.25rem;\n  /*font-size: 19px;*/ }\n\n.navbar a:hover {\n  /*color: var(--primary-color);*/ }\n\n.main-title {\n  font-size: 30px;\n  color: #864747; }\n\n.main-title-subdeck {\n  font-size: 1.6em;\n  margin-top: -50px; }\n\na {\n  color: #864747 !important; }\n\n.dropdown {\n  margin-top: -7.8vh;\n  font-size: 1em;\n  font-family: 'Raleway', sans-serif; }\n\n.register, .login, .howitworks, .buy-tickets-link, .buytickets-dropdown {\n  margin-right: 0.1vw;\n  display: inline-flex;\n  margin-top: -7.8vh;\n  font-size: 1em;\n  font-family: 'Raleway', sans-serif;\n  /*display: none;*/ }\n\n.reg-dropdown, .log-dropdown, .buy-dropdown, .how-dropdown, .buytickets-dropdown {\n  margin-right: 0.1vw;\n  display: inline-flex;\n  margin-top: -7.8vh;\n  font-size: 1em;\n  font-family: 'Raleway', sans-serif; }\n\n.register {\n  margin-right: -1.5vw; }\n\n.login {\n  /*margin-right: 15vw;*/ }\n\n.howitworks {\n  margin-top: -7.7vh;\n  margin-left: 1vw; }\n\n.buy-tickets {\n  margin-top: -7.7vh; }\n\n.films-tickets-link {\n  margin-top: -5vh;\n  margin-right: -14px; }\n\n.buy-tickets-link {\n  margin-top: -6vh;\n  margin-right: -8px;\n  margin-left: 1vw; }\n\n.buytickets-loggedout {\n  margin-top: -6.8vh;\n  margin-right: -8px;\n  margin-left: 1vw; }\n\n.howitworks-loggedin {\n  margin-top: -5vh; }\n\n.logout {\n  margin-top: -5vh; }\n\n.hamburgerDiv {\n  display: none;\n  margin-top: -7vh;\n  margin-right: -1em; }\n\n.hamburger {\n  width: 30px;\n  height: 4px;\n  background-color: black;\n  margin: 5px 0;\n  display: flex; }\n\n/*  .reg-dropdown, .log-dropdown, .how-dropdown, .buy-dropdown {\n  display: inline-flex;\n  top: 3px;\n  font-size: 3em;\n  }\n*/\n.reg-dropdown {\n  margin-left: 1vw;\n  margin-right: 0.5em; }\n\n.log-dropdown {\n  margin-left: -1.4em; }\n\n.buytickets-dropdown {\n  margin-left: -0.9em; }\n\n.logout {\n  margin-top: -4.8vh; }\n\n.how-dropdown {\n  left: 6.5em; }\n\n.buy-dropdown {\n  left: 13em; }\n\n.how-auth-dropdown {\n  display: inline-flex;\n  position: absolute;\n  left: 105px;\n  top: 72px;\n  /*color: white;*/\n  text-align: left;\n  z-index: 2; }\n\n.logout-dropdown {\n  display: inline-flex;\n  position: absolute;\n  left: 320px;\n  top: 40px;\n  /*color: white;*/\n  text-align: left;\n  z-index: 2; }\n\nh1 {\n  font-size: 1vw;\n  flex-wrap: wrap; }\n\n.logged-in-nav {\n  font-family: 'Raleway', sans-serif;\n  margin-top: 3px;\n  font-size: 1.2em; }\n\n.films-dropdown {\n  left: 20px;\n  top: 40px; }\n\n.logout-dropdown {\n  margin-top: 0px; }\n\n.how-auth-dropdown {\n  margin-top: -1.6em;\n  margin-left: 4em; }\n\n.how-loggedin {\n  margin-top: -2em;\n  /*margin-left: 4em;*/ }\n\n.hamburgDiv-loggedin {\n  display: none;\n  margin-top: -6vh; }\n\n/*.navbar {\n  display: inline;  \n  height: 100px;\n  padding: 0.7rem 2rem;\n  position: fixed;\n  top: 0; \n  width: 100%;\n  border-bottom: solid 1px var(--primary-color);\n  z-index: 3;\n}\n*/\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ticket/Tickets.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/components/ticket/Tickets.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*,\n*::after {\n  box-sizing: border-box;\n  margin: 0; }\n\n.tickets {\n  display: flex;\n  align-items: center;\n  /*justify-content: center;\n  min-height: 100vh;*/\n  color: #454f54;\n  background-color: white;\n  background-image: linear-gradient(to bottom left, #abb5ba, #d5dadd); }\n\n.ticket {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  max-width: 24rem;\n  /*&__section {\n    & > * + * {\n      margin-top: 0.25rem;\n    }\n    & > h3 {\n      font-size: 1.125rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n  &__header,\n  &__footer {\n    font-weight: bold;\n    font-size: 1.25rem;\n    display: flex;\n    justify-content: space-between;\n  }\n  &__footer {\n    border-top: 2px dashed $divider;\n    border-radius: 0 0 0.325rem 0.325rem;\n  }*/ }\n  .ticket__header, .ticket__body, .ticket__footer {\n    padding: 1.25rem;\n    background-color: white;\n    border: 1px solid #abb5ba;\n    box-shadow: 0 2px 4px rgba(41, 54, 61, 0.25); }\n  .ticket__header {\n    font-size: 1.5rem;\n    border-top: 0.25rem solid #dc143c;\n    border-bottom: none;\n    box-shadow: none;\n    height: 12vh; }\n  .ticket__wrapper {\n    box-shadow: 0 2px 4px rgba(41, 54, 61, 0.25);\n    border-radius: 0.375em 0.375em 0 0;\n    overflow: hidden; }\n  .ticket__divider {\n    position: relative;\n    height: 1rem;\n    background-color: white;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem; }\n    .ticket__divider::after {\n      content: '';\n      position: absolute;\n      height: 50%;\n      width: 100%;\n      top: 0;\n      border-bottom: 2px dashed #e9ebed; }\n  .ticket__notch {\n    position: absolute;\n    left: -0.5rem;\n    width: 1rem;\n    height: 1rem;\n    overflow: hidden; }\n    .ticket__notch::after {\n      content: '';\n      position: relative;\n      display: block;\n      width: 2rem;\n      height: 2rem;\n      right: 100%;\n      top: -50%;\n      border: 0.5rem solid white;\n      border-radius: 50%;\n      box-shadow: inset 0 2px 4px rgba(41, 54, 61, 0.25); }\n    .ticket__notch--right {\n      left: auto;\n      right: -0.5rem; }\n      .ticket__notch--right::after {\n        right: 0; }\n  .ticket__body {\n    border-bottom: none;\n    border-top: none; }\n    .ticket__body > * + * {\n      margin-top: 1.5rem;\n      padding-top: 1.5rem;\n      border-top: 1px solid #e9ebed; }\n\n.ticket-stub {\n  margin-top: -1vh;\n  height: 70px;\n  width: auto; }\n\n.singleTicket {\n  min-width: 270px;\n  margin-left: 12px;\n  margin-bottom: 20px;\n  /*margin-right: 15px;*/ }\n\n.displayHeader {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: 30px; }\n\n.your-tickets {\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 170px; }\n", ""]);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/Register */ "./src/components/auth/Register.js");
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/Login */ "./src/components/auth/Login.js");
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/Navbar */ "./src/components/navbar/Navbar.js");
/* harmony import */ var _components_layout_Landing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Landing */ "./src/components/layout/Landing.js");
/* harmony import */ var _components_howitworks_HowItWorks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/howitworks/HowItWorks */ "./src/components/howitworks/HowItWorks.js");
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/Dashboard */ "./src/components/dashboard/Dashboard.js");
/* harmony import */ var _components_create_film_CreateFilm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create-film/CreateFilm */ "./src/components/create-film/CreateFilm.js");
/* harmony import */ var _components_layout_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout/Alert */ "./src/components/layout/Alert.js");
/* harmony import */ var _components_booking_page_BookingPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/booking-page/BookingPage */ "./src/components/booking-page/BookingPage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/auth */ "./src/actions/auth.js");
/* harmony import */ var _actions_film__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions/film */ "./src/actions/film.js");
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/setAuthToken */ "./src/utils/setAuthToken.js");
/* harmony import */ var _components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/routing/PrivateRoute */ "./src/components/routing/PrivateRoute.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/App.js";



















if (localStorage.token) {
  Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_15__["default"])(localStorage.token);
}

const App = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _components_layout_Landing__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "dark-overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/register",
    component: _components_auth_Register__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/login",
    component: _components_auth_Login__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/howitworks",
    component: _components_howitworks_HowItWorks__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_16__["default"], {
    exact: true,
    path: "/api/film/:id",
    component: _components_booking_page_BookingPage__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_16__["default"], {
    exact: true,
    path: "/film/dashboard",
    component: _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_16__["default"], {
    exact: true,
    path: "/create-film",
    component: _components_create_film_CreateFilm__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), "/>"))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/actions/alert.js":
/*!******************************!*\
  !*** ./src/actions/alert.js ***!
  \******************************/
/*! exports provided: setAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAlert", function() { return setAlert; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");


const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4();
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_ALERT"],
    payload: {
      msg,
      alertType,
      id
    }
  });
  setTimeout(() => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ALERT"],
    payload: id
  }), timeout);
};

/***/ }),

/***/ "./src/actions/auth.js":
/*!*****************************!*\
  !*** ./src/actions/auth.js ***!
  \*****************************/
/*! exports provided: loadUser, register, login, updateUserTickets, deleteTickets, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserTickets", function() { return updateUserTickets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTickets", function() { return deleteTickets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "./src/actions/alert.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/setAuthToken */ "./src/utils/setAuthToken.js");



 // Load User

const loadUser = () => async dispatch => {
  if (localStorage.token) {
    Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_3__["default"])(localStorage.token);
  }

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/auth'); // console.log(res);  

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["USER_LOADED"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["USER_ERROR"]
    });
  }
}; // Register User

const register = ({
  name,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    name,
    email,
    password
  });

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users', body, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["REGISTER_SUCCESS"],
      payload: res.data
    });
    dispatch(loadUser()); // dispatch(createProfile());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])(error.msg, 'danger')));
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["REGISTER_FAIL"]
    });
  }
}; //Login User

const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    email,
    password
  });

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/auth', body, config); // console.log(res.data)
    // console.log('calling loaduser')

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_SUCCESS"],
      payload: res.data
    }); //this isn't being called
    //because try is throwing an exception. what is it?

    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors; //check this next
    // console.log(errors)

    if (errors) {
      errors.forEach(error => dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])(error.msg, 'danger')));
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_FAIL"]
    });
  }
}; // Add Tickets

const updateUserTickets = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/ticket', formData, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER"],
      payload: res.data
    }); //also need to do this after payment has completed
    //dispatch(setAlert('Tickets Added', 'success'));
    //history.push('/film/dashboard');
  } catch (err) {
    //console.log('error')
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])(error.msg, 'danger')));
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["USER_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const deleteTickets = id => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/api/tickets/${id}`);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER"],
      payload: res.data
    });
    dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])('Tickets Removed', 'success'));
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["USER_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; //Logout / Clear Profile

const logout = () => dispatch => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"]
  });
};

/***/ }),

/***/ "./src/actions/film.js":
/*!*****************************!*\
  !*** ./src/actions/film.js ***!
  \*****************************/
/*! exports provided: loadFilms, getFilmById, createFilm, updateFilm, deleteFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFilms", function() { return loadFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilmById", function() { return getFilmById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilm", function() { return createFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilm", function() { return updateFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFilm", function() { return deleteFilm; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "./src/actions/alert.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");


 //import setAuthToken from '../utils/setAuthToken';
// Get all Films

const loadFilms = () => async dispatch => {
  //dispatch({ type: CLEAR_FILM });
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/film');
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_FILMS"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["FILM_ERROR"] //payload: { msg: err.response.statusText, status: err.response.status }

    });
  }
}; // Get all Films
// export const getCurrentFilm = title => async dispatch => {
//   //dispatch({ type: CLEAR_FILM });
//   try {
//     const res = await axios.get(`/api/film/current/${title}`);
//     dispatch({
//       type: GET_FILM,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: FILM_ERROR,
//       //payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
//   };
//Get profile by ID

const getFilmById = film_id => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["CLEAR_FILM"]
  });

  try {
    //this is the next problem. it's not returning anything. why?
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/film/${film_id}`); // .populate('film', ['title', 'cinema']);

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_FILM"],
      // payload: { msg: res.data }
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["FILM_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // create film

const createFilm = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/film/create-film', formData, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_FILM"],
      payload: res.data
    });
    history.push('/film/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])(error.msg, 'danger')));
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["FILM_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const updateFilm = (formData, history) => async dispatch => {
  //console.log(formData)
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_2__["CLEAR_FILM"]
  });

  try {
    //console.log(formData)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }; // const res = await axios.put('/api/profile/booking', formData, config);

    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put('/api/film/booking', formData, config); //console.log(res);

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_FILM"],
      payload: res.data
    }); //history.push(dispatch(getFilmById(`/api/film/booking/${film_id}`)))

    dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])('Thanks for your booking', 'success')); //still doesn't work, first time
    //history.push(getFilmById(`/api/film/booking/${film_id}`));
    //if you canget this to work after payment is succesful?? ideal
    //history.push('/');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])(error.msg, 'danger')));
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["FILM_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const deleteFilm = id => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/api/profile/tickets/${id}`);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["DELETE_FILM"],
      payload: res.data
    });
    dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])('Tickets Removed', 'success'));
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["FILM_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // export const getFilms = () => async dispatch => {
//   dispatch({ type: CLEAR_FILM });
//   try {
//     const res = await axios.get('/api/film');
//     dispatch({
//       type: GET_PROFILES,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
// // Register User
// export const register = ({ name, email, password }) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
//   const body = JSON.stringify({ name, email, password });
//   try {
//     const res = await axios.post('/api/users', body, config);
//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data
//     });
//     dispatch(loadUser());
//   } catch (err) {
//     const errors = err.response.data.errors;
//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }
//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };
// //Login User
// export const login = (email, password) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
//   const body = JSON.stringify({ email, password });
//   try {
//     const res = await axios.post('/api/auth', body, config);
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data
//     });
//     dispatch(loadUser());
//   } catch (err) {
//     const errors = err.response.data.errors;
//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }
//     dispatch({
//       type: LOGIN_FAIL
//     });
//   }
// };
// //Logout / Clear Profile
// export const logout = () => dispatch => {
//   // dispatch({ type: CLEAR_PROFILE });
//   dispatch({ type: LOGOUT });
// };

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: SET_ALERT, REMOVE_ALERT, REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_PROFILE, PROFILE_ERROR, GET_PROFILES, GET_REPOS, UPDATE_FILM, UPDATE_PROFILE, CLEAR_PROFILE, CLEAR_FILM, ACCOUNT_DELETED, GET_FILM, GET_FILMS, DELETE_FILM, FILM_ERROR, UPDATE_USER, USER_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALERT", function() { return SET_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALERT", function() { return REMOVE_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return REGISTER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADED", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_ERROR", function() { return PROFILE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILES", function() { return GET_PROFILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REPOS", function() { return GET_REPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILM", function() { return UPDATE_FILM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE", function() { return UPDATE_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PROFILE", function() { return CLEAR_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_FILM", function() { return CLEAR_FILM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_DELETED", function() { return ACCOUNT_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILM", function() { return GET_FILM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILMS", function() { return GET_FILMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FILM", function() { return DELETE_FILM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILM_ERROR", function() { return FILM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ERROR", function() { return USER_ERROR; });
const SET_ALERT = 'SET_ALERT';
const REMOVE_ALERT = 'REMOVE_ALERT';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';
const USER_LOADED = 'USER_LOADED';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';
const GET_PROFILE = 'GET_PROFILE';
const PROFILE_ERROR = 'PROFILE_ERROR';
const GET_PROFILES = 'GET_PROFILES';
const GET_REPOS = 'GET_REPOS';
const UPDATE_FILM = 'UPDATE_FILM';
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const CLEAR_PROFILE = 'CLEAR_PROFILE';
const CLEAR_FILM = 'CLEAR_FILM';
const ACCOUNT_DELETED = 'ACCOUNT_DELETED';
const GET_FILM = 'GET_FILM';
const GET_FILMS = 'GET_FILMS';
const DELETE_FILM = 'DELETE_FILM';
const FILM_ERROR = 'FILM_ERROR';
const UPDATE_USER = 'UPDATE_USER';
const USER_ERROR = 'USER_ERROR'; // export const GET_POSTS = 'GET_POSTS';
// export const GET_POST = 'GET_POST';
// export const POST_ERROR = 'POST_ERROR';
// export const UPDATE_LIKES = 'UPDATE_LIKES';
// export const DELETE_POST = 'DELETE_POST';
// export const ADD_POST = 'ADD_POST';
// export const ADD_COMMENT = 'ADD_COMMENT';
// export const REMOVE_COMMENT = 'REMOVE_COMMENT';

/***/ }),

/***/ "./src/components/auth/Login.js":
/*!**************************************!*\
  !*** ./src/components/auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/auth */ "./src/actions/auth.js");
/* harmony import */ var _auth_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.scss */ "./src/components/auth/auth.scss");
/* harmony import */ var _auth_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_auth_scss__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/auth/Login.js";







const Login = ({
  login,
  isAuthenticated
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: '',
    password: ''
  }),
        _useState2 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const email = formData.email,
        password = formData.password;

  const onChange = e => setFormData(Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData, {
    [e.target.name]: e.target.value
  }));

  const onSubmit = async e => {
    e.preventDefault(); //console.log('Success');

    login(email, password); //this fires login/actions
    //gets body in actions, sends data to the link
    //dispatches login success in reducers 
  };

  if (isAuthenticated) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/film/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Sign in to your account"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "form",
    action: "create-profile.html",
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "email",
    placeholder: "Email Address",
    name: "email",
    value: email,
    onChange: e => onChange(e),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: e => onChange(e),
    minLength: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "submit",
    className: "btn btn-primary",
    value: "Login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Don't have an account? ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "reg",
    to: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Sign Up")));
};

Login.propTypes = {
  login: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  login: _actions_auth__WEBPACK_IMPORTED_MODULE_6__["login"]
})(Login));

/***/ }),

/***/ "./src/components/auth/Register.js":
/*!*****************************************!*\
  !*** ./src/components/auth/Register.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/alert */ "./src/actions/alert.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/auth */ "./src/actions/auth.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _auth_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.scss */ "./src/components/auth/auth.scss");
/* harmony import */ var _auth_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_auth_scss__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/auth/Register.js";








const Register = ({
  setAlert,
  register,
  isAuthenticated,
  history
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: '',
    email: '',
    password: '',
    password2: ''
  }),
        _useState2 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const name = formData.name,
        email = formData.email,
        password = formData.password,
        password2 = formData.password2;

  const onChange = e => setFormData(Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData, {
    [e.target.name]: e.target.value
  }));

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  if (isAuthenticated) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
      to: "/film/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Create Your Account"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "form",
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "email",
    placeholder: "Email Address",
    name: "email",
    value: email,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "password",
    placeholder: "Confirm Password",
    name: "password2",
    value: password2,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "submit",
    className: "btn btn-primary",
    value: "Register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Already have an account? ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    className: "reg",
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Sign In")));
};

Register.propTypes = {
  setAlert: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  register: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  setAlert: _actions_alert__WEBPACK_IMPORTED_MODULE_5__["setAlert"],
  register: _actions_auth__WEBPACK_IMPORTED_MODULE_6__["register"]
})(Register));

/***/ }),

/***/ "./src/components/auth/auth.scss":
/*!***************************************!*\
  !*** ./src/components/auth/auth.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./auth.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/auth/auth.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./auth.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/auth/auth.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./auth.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/auth/auth.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/booking-page/BookingPage.js":
/*!****************************************************!*\
  !*** ./src/components/booking-page/BookingPage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_film__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/film */ "./src/actions/film.js");
/* harmony import */ var _checkout_film_Checkout_Film__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../checkout-film/Checkout-Film */ "./src/components/checkout-film/Checkout-Film.js");
/* harmony import */ var _components_stripe_button_stripe_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/stripe-button/stripe-button */ "./src/components/stripe-button/stripe-button.js");

var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/booking-page/BookingPage.js";





 //import { updateFilm } from '../../actions/film';





const FilmPage = ({
  updateFilm,
  getFilmById,
  film: {
    film,
    loading
  },
  match,
  history
}) => {
  // useEffect(() => {
  // 	getFilmById(match.params._id);
  //  	}, [getFilmById]);
  //console.log(film)
  //this creates the state
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    _id: '',
    user: '',
    title: '',
    date: '',
    cinema: '',
    image: '',
    ticketPrice: '',
    crowdfundTarget: '',
    totalsoFar: ''
  }),
        _useState2 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1]; // 	//set's the values of the state


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getFilmById(match.params.id);

    if (!loading && film) {
      setFormData({
        _id: film._id,
        user: film.user,
        title: film.title,
        cinema: film.cinema,
        date: film.date,
        image: film.image,
        ticketPrice: film.ticketPrice,
        crowdfundTarget: film.crowdfundTarget,
        totalsoFar: film.totalsoFar
      });
    }
  }, []);
  const _id = formData._id,
        user = formData.user,
        title = formData.title,
        date = formData.date,
        cinema = formData.cinema,
        image = formData.image,
        ticketPrice = formData.ticketPrice,
        crowdfundTarget = formData.crowdfundTarget,
        totalsoFar = formData.totalsoFar; //the pattern is this.
  // 1 initiate consts with above		
  // 2 onchange calls setformdata with values attached
  // 3 when is setformdata called, interms of being wrapped in useEffect(fetches current film)?
  // 4 setFormData sets initial state to values.  
  // 5 so state values are either '', or the value attached to film. which is there. but not getting them 
  // 6 are we reloading film. is that the problem? 

  if (film === null) return null;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_checkout_film_Checkout_Film__WEBPACK_IMPORTED_MODULE_8__["default"], {
    film: film,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "checkout-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "* Please use the following test credit card for payments", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), "4242 4242 4242 4242 - Exp 01/21 - CVV: 123"));
};

FilmPage.propTypes = {
  updateFilm: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  // getCurrentProfile: PropTypes.func.isRequired,
  getFilmById: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  film: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired //profile: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
  //profile: state.profile,
  film: state.film
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  updateFilm: _actions_film__WEBPACK_IMPORTED_MODULE_7__["updateFilm"],
  getFilmById: _actions_film__WEBPACK_IMPORTED_MODULE_7__["getFilmById"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(FilmPage)));

/***/ }),

/***/ "./src/components/carousel/Carousel.js":
/*!*********************************************!*\
  !*** ./src/components/carousel/Carousel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel.scss */ "./src/components/carousel/carousel.scss");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_carousel_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/carousel/Carousel.js";
//import React, { Fragment, useState, useEffect, useRef } from 'react';

 // import Carousel from 'react-bootstrap/Carousel'
// import PropTypes from 'prop-types';

 // import ImageSlide from './ImageSlide';
// import Spinner from '../layout/Spinner';
// import Arrow from './Arrow'; 
//import '../../App.scss';


const items = [{
  src: 'https://i1.wp.com/www.thepankou.com/wp-content/uploads/2017/02/Qipao-12-final-Orange-flower-2.jpg',
  altText: 'In The Mood For Love',
  caption: 'In The Mood For Love',
  location: 'Picturehouse Liverpool, May 20 2021'
}, {
  src: 'https://images2.alphacoders.com/870/thumb-1920-870886.jpg',
  altText: 'Blade Runner 2049',
  caption: 'Blade Runner 2049',
  location: 'Curzon Bloomsbury London, Dec 5 2020'
}, {
  src: 'https://vistapointe.net/images/spinal-tap-7.jpg',
  altText: 'Spinal Tap',
  caption: 'Spinal Tap',
  location: 'Genesis Cinema, London, Jan 2 2021'
}, {
  src: 'https://cdn.hipwallpaper.com/i/63/10/rRPDQ9.png',
  altText: 'The Thin Red Line',
  caption: 'The Thin Red Line',
  location: 'Chester Storyhouse , Nov 4 2020'
}, {
  src: 'https://wallup.net/wp-content/uploads/2017/03/29/476520-HAL_9000-movies-2001_A_Space_Odyssey.jpg',
  altText: '2001: A Space Odyssey',
  caption: '2001: A Space Odyssey',
  location: 'Picturehouse Bristol, Apr 3 2021'
}];

const FilmCarousel = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
        _useState2 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        activeIndex = _useState2[0],
        setActiveIndex = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState4 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        animating = _useState4[0],
        setAnimating = _useState4[1];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselItem"], {
      className: "carousel",
      onExiting: () => setAnimating(true),
      onExited: () => setAnimating(false),
      key: item.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img-slide",
      src: item.src,
      alt: item.altText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselCaption"], {
      className: "carousel",
      captionText: item.location,
      captionHeader: item.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    className: "carousel",
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselIndicators"], {
    items: items,
    activeIndex: activeIndex,
    onClickHandler: goToIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), slides, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FilmCarousel);

/***/ }),

/***/ "./src/components/carousel/carousel.scss":
/*!***********************************************!*\
  !*** ./src/components/carousel/carousel.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./carousel.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/carousel/carousel.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./carousel.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/carousel/carousel.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./carousel.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/carousel/carousel.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/checkout-film/Checkout-Film.js":
/*!*******************************************************!*\
  !*** ./src/components/checkout-film/Checkout-Film.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_stripe_button_stripe_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/stripe-button/stripe-button */ "./src/components/stripe-button/stripe-button.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/auth */ "./src/actions/auth.js");


var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/checkout-film/Checkout-Film.js";







 // import { updateFilm } from '../../actions/film';;
//import './checkout-item.styles.scss';

const CheckoutFilm = ({
  film: {
    film,
    loading
  },
  match,
  // getFilmById, 
  // updateFilm, 
  updateUserTickets,
  history
}) => {
  // let bookingTotal = 0;
  //console.log(match)
  //console.log(film)
  //console.log('checkoutpage')
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    _id: film._id,
    user: film.user,
    title: film.title,
    date: film.date,
    cinema: film.cinema,
    image: film.image,
    ticketPrice: film.ticketPrice,
    crowdfundTarget: film.crowdfundTarget,
    totalsoFar: film.totalsoFar
  }),
        _useState2 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        filmData = _useState2[0],
        setFilmData = _useState2[1];

  let _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      bookingCost = _useState4[0],
      setBookingCost = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: film.title,
    ticketPrice: film.ticketPrice,
    date: film.date,
    cinema: film.cinema,
    crowdfundTarget: film.crowdfundTarget,
    totalsoFar: film.totalsoFar,
    numberOfTickets: 0,
    cost: 0
  }),
        _useState6 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        ticketData = _useState6[0],
        setTicketData = _useState6[1];

  const onChange = e => {
    let ticketsTotal = parseInt(e.target.value);
    let bookingTotal = parseInt(film.ticketPrice) * parseInt(e.target.value);
    let totalTicketsBooked = film.totalsoFar + parseInt(e.target.value);
    setBookingCost(bookingTotal);
    setTotalSoFar(totalTicketsBooked);
    setTicketTotalSoFar(totalTicketsBooked, bookingTotal, ticketsTotal);
  };

  const setTotalSoFar = totalTicketsBooked => {
    setFilmData(Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, filmData, {
      totalsoFar: totalTicketsBooked
    }));
  };

  const setTicketTotalSoFar = (totalTicketsBooked, bookingTotal, ticketsTotal) => {
    setTicketData(Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ticketData, {
      totalsoFar: totalTicketsBooked,
      cost: bookingTotal,
      numberOfTickets: ticketsTotal
    }));
  }; // if (film === null) return null;


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "checkout-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Film: ", film.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Date: ", film.date, " ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "header-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Price: \xA3", film.ticketPrice, " ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "header-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Crowdfunding Target: ", film.crowdfundTarget, " ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "header-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Tickets sold: ", film.totalsoFar)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: " form-ticket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "number",
    placeholder: "Enter number of tickets",
    name: "tickets",
    onChange: e => onChange(e),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Basket total: \xA3", bookingCost)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_stripe_button_stripe_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    filmData: filmData,
    ticketData: ticketData,
    price: bookingCost,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    className: "btn btn-back",
    to: "/film/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Go Back")))));
};

CheckoutFilm.propTypes = {
  updateUserTickets: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  film: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};

const mapStateToProps = state => ({
  film: state.film
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  updateUserTickets: _actions_auth__WEBPACK_IMPORTED_MODULE_8__["updateUserTickets"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(CheckoutFilm)));

/***/ }),

/***/ "./src/components/create-film/CreateFilm.js":
/*!**************************************************!*\
  !*** ./src/components/create-film/CreateFilm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_film__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/film */ "./src/actions/film.js");


var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/create-film/CreateFilm.js";






const CreateFilm = ({
  createFilm,
  history
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    user: '',
    title: '',
    date: '',
    filmtime: '15:00',
    cinema: '',
    image: '',
    ticketPrice: 8,
    crowdfundTarget: 90,
    totalsoFar: 56
  }),
        _useState2 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        displaySocialInputs = _useState4[0],
        toggleSocialInputs = _useState4[1];

  const user = formData.user,
        title = formData.title,
        cinema = formData.cinema,
        date = formData.date,
        filmtime = formData.filmtime,
        image = formData.image;

  const onChange = e => setFormData(Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData, {
    [e.target.name]: e.target.value
  }));

  const onSubmit = e => {
    e.preventDefault();
    createFilm(formData, history);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Create a film request"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "* = required field"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "form",
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Film"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    placeholder: "Enter film title",
    name: "title",
    value: title,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Cinema"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    placeholder: "Enter location, or cinema",
    name: "cinema",
    value: cinema,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Date"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "date",
    name: "date",
    placeholder: "Enter a date",
    value: date,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Time"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "time",
    name: "filmtime",
    placeholder: "Enter a time",
    value: filmtime,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Image"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    placeholder: "Enter a url for your movie image",
    name: "image",
    value: image,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "submit",
    className: "btn btn-primary my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "btn btn-light my-1",
    to: "/film/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "Go Back")));
};

CreateFilm.propTypes = {
  createFilm: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};

const mapStateToProps = state => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  createFilm: _actions_film__WEBPACK_IMPORTED_MODULE_6__["createFilm"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(CreateFilm)));

/***/ }),

/***/ "./src/components/custom-button/CustomButton.js":
/*!******************************************************!*\
  !*** ./src/components/custom-button/CustomButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/custom-button/CustomButton.js";



const CustomButton = ({
  film
}) => {
  //check you get id here
  // const id = film._id;
  return (// <Link to={`/booking/${id}`}>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/booking",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "custom-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, "Book now"))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (CustomButton);

/***/ }),

/***/ "./src/components/dashboard/Dashboard-Films.js":
/*!*****************************************************!*\
  !*** ./src/components/dashboard/Dashboard-Films.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");
/* harmony import */ var _films_Film__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../films/Film */ "./src/components/films/Film.js");
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/dashboard/Dashboard-Films.js";





const DashboardFilms = ({
  films,
  user,
  loading
}) => {
  // console.log(films)
  // console.log(loading)
  return loading && films === null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "your-films",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, films.map(item => item.user === user._id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: item._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_films_Film__WEBPACK_IMPORTED_MODULE_3__["default"], {
    film: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardFilms); // <h2 className="your-film-header">Your films</h2>

/***/ }),

/***/ "./src/components/dashboard/Dashboard-Tickets.js":
/*!*******************************************************!*\
  !*** ./src/components/dashboard/Dashboard-Tickets.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");
/* harmony import */ var _ticket_Ticket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ticket/Ticket */ "./src/components/ticket/Ticket.js");
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/dashboard/Dashboard-Tickets.js";





const DashboardTickets = ({
  user,
  loading
}) => {
  return loading && user === null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), user.tickets.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "welcome-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Your tickets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "You haven't bought any tickets yet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "films-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Search films"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "your-tickets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, user.tickets.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "singleTicket",
    key: item._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ticket_Ticket__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ticket: item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardTickets);

/***/ }),

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

/***/ }),

/***/ "./src/components/films/Film.js":
/*!**************************************!*\
  !*** ./src/components/films/Film.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom_button_CustomButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-button/CustomButton */ "./src/components/custom-button/CustomButton.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Films_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Films.scss */ "./src/components/films/Films.scss");
/* harmony import */ var _Films_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Films_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/films/Film.js";







const moment = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js"); //import { loadFilms } from '../../actions/film';
//import ImageSlide from '../carousel/ImageSlide';


const Film = ({
  film
}) => {
  const _id = film._id,
        title = film.title,
        date = film.date,
        filmtime = film.filmtime,
        cinema = film.cinema,
        image = film.image,
        ticketPrice = film.ticketPrice,
        crowdfundTarget = film.crowdfundTarget,
        totalsoFar = film.totalsoFar;
  const time = moment(date);
  const formattedDate = time.format('D MMMM YYYY'); // const handleClick = (e) => {
  //   }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "film film-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    className: "small-film-pic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, cinema), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, formattedDate, " ", filmtime), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Ticket Price \xA3", ticketPrice), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Ticket Target ", crowdfundTarget), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Tickets sold ", totalsoFar), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: `/api/film/${_id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "custom-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Buy tickets")));
};

/* harmony default export */ __webpack_exports__["default"] = (Film); // <div className="film film-border">
//   <img src={image} className="small-film-pic" />
//   <p>{title}</p>
//     <Link to={`/api/film/${_id}`}>    
//       <button className='custom-button'>
//       Buy tickets
//       </button>
//       </Link>
// </div>

/***/ }),

/***/ "./src/components/films/Films.js":
/*!***************************************!*\
  !*** ./src/components/films/Films.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Film__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Film */ "./src/components/films/Film.js");
/* harmony import */ var _Films_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Films.scss */ "./src/components/films/Films.scss");
/* harmony import */ var _Films_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Films_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/films/Films.js";





 // import { loadFilms } from '../../actions/film';
//import { loadFilms } from '../../actions/film';




const Films = ({
  // loadFilms,
  film: {
    films,
    loading
  }
}) => {
  if (films === null) return null; //console.log(films)

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "all-screenings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "all-screenings-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Latest films"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "films-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, films.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Film__WEBPACK_IMPORTED_MODULE_6__["default"], {
    film: item,
    key: item._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "view-all-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/film/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "View all >>")));
};

Films.propTypes = {
  film: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

const mapStateToProps = state => ({
  film: state.film
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Films));

/***/ }),

/***/ "./src/components/films/Films.scss":
/*!*****************************************!*\
  !*** ./src/components/films/Films.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Films.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/films/Films.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Films.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/films/Films.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Films.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/films/Films.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.scss */ "./src/components/footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/footer/Footer.js";
 // import { Link, Redirect } from 'react-router-dom';



const Footer = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "contacts-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "About Saturday Cinema Club"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "contacts-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Contact us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "facebook.com",
    class: "fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "twitter.com",
    class: "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "youtube.com",
    class: "fa fa-youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "instagram.com",
    class: "fa fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/footer/Footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/Footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/footer/Footer.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/footer/Footer.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/footer/Footer.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/howitworks/HowItWorks.js":
/*!*************************************************!*\
  !*** ./src/components/howitworks/HowItWorks.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/howitworks/HowItWorks.js";




const HowItWorks = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "landing dark-overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "how-it-works",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Saturday Cinema Club"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "How crowdfunded cinema works"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "ourscreen allows film fans to watch the films they love at their local cinema, whether that\u2019s a cult classic, foreign thriller or modern masterpiece. Fans can start by creating their own screening, or by booking tickets to screenings hosted by others. Our crowdsourced model means that as long as enough people book tickets, the screening will go ahead. For first-time hosts or first-time ticket buyers, this page is designed to help you navigate the waters to creating a screening and booking a ticket. Our hosts held over 500 screenings last year, but it always helps to have Hooper driving the boat.")));
};

/* harmony default export */ __webpack_exports__["default"] = (HowItWorks);

/***/ }),

/***/ "./src/components/layout/Alert.js":
/*!****************************************!*\
  !*** ./src/components/layout/Alert.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/layout/Alert.js";




const Alert = ({
  alerts
}) => alerts !== null && alerts.length > 0 && alerts.map(alert => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  key: alert.id,
  className: `alert alert-${alert.alertType}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, alert.msg));

Alert.propTypes = {
  alerts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Alert));

/***/ }),

/***/ "./src/components/layout/Landing.js":
/*!******************************************!*\
  !*** ./src/components/layout/Landing.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");
/* harmony import */ var _films_Films__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../films/Films */ "./src/components/films/Films.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _actions_film__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/film */ "./src/actions/film.js");
/* harmony import */ var _carousel_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../carousel/Carousel */ "./src/components/carousel/Carousel.js");
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/layout/Landing.js";











const Landing = ({
  isAuthenticated,
  loadFilms,
  film: {
    films
  }
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    loadFilms();
  }, [loadFilms]); // if (isAuthenticated) {
  //    return <Redirect to='/film/dashboard'/>;
  //  	}
  //console.log(films)

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_films_Films__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }));
};

Landing.propTypes = {
  loadFilms: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  film: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  film: state.film
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  loadFilms: _actions_film__WEBPACK_IMPORTED_MODULE_7__["loadFilms"]
})(Landing)); // return (
// 		<section className="landing dark-overlay">
// 	      <div className="carousel">
// 		    <filmCarousel/>	          
// 	       </div>
// 	       <div>
// 			<Films/>	       	
// 	       </div>
// 	    </section>
// 		)

/***/ }),

/***/ "./src/components/layout/Spinner.js":
/*!******************************************!*\
  !*** ./src/components/layout/Spinner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.gif */ "./src/components/layout/spinner.gif");
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/layout/Spinner.js";


/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
  style: {
    width: '200px',
    margin: 'auto',
    display: 'block'
  },
  alt: "Loading...",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})));

/***/ }),

/***/ "./src/components/layout/spinner.gif":
/*!*******************************************!*\
  !*** ./src/components/layout/spinner.gif ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./src/components/navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/auth */ "./src/actions/auth.js");
/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar.scss */ "./src/components/navbar/Navbar.scss");
/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navbar_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/navbar/Navbar.js";








const Navbar = ({
  auth: {
    isAuthenticated,
    loading
  },
  logout,
  params
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        dropdownActive = _useState2[0],
        setDropdownActive = _useState2[1];

  const authLinks = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logged-in-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: `${dropdownActive ? "dropdown" : "top-row"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: `${dropdownActive ? "reg-dropdown" : "films-tickets-link"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/film/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Films and tickets"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: `${dropdownActive ? "buytickets-dropdown" : "buy-tickets-link"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/film/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Buy tickets")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: `${dropdownActive ? "how-dropdown" : "howitworks-loggedin"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/howitworks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "How it works")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: logout,
    className: `${dropdownActive ? "buy-dropdown" : "logout"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "Logout"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: `${dropdownActive ? "dropdown" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "hamburgDiv-loggedin",
    onClick: () => setDropdownActive(!dropdownActive),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })));
  const guestLinks = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navbar-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: `${dropdownActive ? "dropdown" : "top-row"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: `${dropdownActive ? "reg-dropdown" : "register"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Register")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: `${dropdownActive ? "log-dropdown" : "login"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "/ Login")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: `${dropdownActive ? "buy-dropdown" : "buytickets-loggedout"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/film/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Buy tickets")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: `${dropdownActive ? "how-dropdown" : "howitworks"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/howitworks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Create screening")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "hamburgerDiv",
    onClick: () => setDropdownActive(!dropdownActive),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "hamburger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navbar-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "SATURDAY CINEMA CLUB")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "main-title-subdeck",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Your film, your screen")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, isAuthenticated ? authLinks : guestLinks));
};

Navbar.propTypes = {
  logout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  logout: _actions_auth__WEBPACK_IMPORTED_MODULE_5__["logout"]
})(Navbar))); // const guestLinks = (
// 		<div className="auth">
// 		<ul className="navbar-right">
// 	        <li className={`${dropdownActive ? "dropdown reg-dropdown" : "display register"}`}>
// 		        <Link to="/register">Register</Link>
// 	        </li>
// 	        <li className={`${dropdownActive ? "dropdown log-dropdown" : "display login"}`}>
// 	    	    <Link to="/login">/ Login</Link>
// 	        </li>
// 	        <li className={`${dropdownActive ? "dropdown buy-dropdown" : "display buy-tickets-link"}`}>
// 		        <Link to='/film/dashboard'>
// 		        Buy tickets
// 		        </Link>
// 	        </li>
// 	        <li className={`${dropdownActive ? "dropdown how-dropdown" : "display howitworks"}`}>
// 		        <Link to='/howitworks'>
// 		        Create screening
// 		        </Link>
// 	        </li>
// 	      </ul>
// 	       <div 
// 		      className="hamburgerDiv"
// 		      onClick={() => setDropdownActive(!dropdownActive)}
// 		      >
// 		        <p className="hamburger"></p>
// 				<p className="hamburger"></p>
// 				<p className="hamburger"></p>
// 		   </div>
// 	     </div> 
// <ul className={`${dropdownActive ? "dropdown" : "navbar-right"}`}>
//<div className={`${dropdownActive ? "dropdown" : ""}`}></div> 	
// <nav className="navbar">
// 	      <div className="navbar-left">
// 			<Link className="main-title" to="/">
// 	        	<h1>Saturday Cinema Club</h1> 
// 	        </Link>
// 	      <h2 className="main-title-subdeck">
// 	            Your favourite films on the big screen  
// 	      </h2>
//  	      </div>
// 	      {(
// 	      	<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>
// 	      )}
// </nav>

/***/ }),

/***/ "./src/components/navbar/Navbar.scss":
/*!*******************************************!*\
  !*** ./src/components/navbar/Navbar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Navbar.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/navbar/Navbar.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Navbar.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/navbar/Navbar.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Navbar.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/navbar/Navbar.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/routing/PrivateRoute.js":
/*!************************************************!*\
  !*** ./src/components/routing/PrivateRoute.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/routing/PrivateRoute.js";





const PrivateRoute = (_ref) => {
  let Component = _ref.component,
      _ref$auth = _ref.auth,
      isAuthenticated = _ref$auth.isAuthenticated,
      loading = _ref$auth.loading,
      rest = Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "auth"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: props => !isAuthenticated && !loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

PrivateRoute.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(PrivateRoute));

/***/ }),

/***/ "./src/components/stripe-button/stripe-button.js":
/*!*******************************************************!*\
  !*** ./src/components/stripe-button/stripe-button.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stripe-checkout */ "../node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_film__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/film */ "./src/actions/film.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/auth */ "./src/actions/auth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/stripe-button/stripe-button.js";



 //import { Redirect } from 'react-router-dom';



 //next 
// 2 now, how to update the film when booking complete
// 3 sort out this fucking component update 

const StripeCheckoutButton = ({
  price,
  filmData,
  ticketData,
  updateFilm,
  updateUserTickets,
  history
}) => {
  // console.log(filmData)
  // console.log(ticketData)
  //let [ticket, setTicket] = useState(false);
  //console.log(ticket)
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_GxoLwpaJRAn1kdTQGlL8EwZa00qqtVHbM3';

  const onToken = token => {
    axios__WEBPACK_IMPORTED_MODULE_6___default()({
      url: '/api/film/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }, onPayment()).then(response => {
      alert('Payment succesful. We have sent your tickets to your email address and will notify when the film has been booked');
      window.location.replace('http://localhost:3000/film/dashboard'); //this.onPayment()
      // updateFilm(filmData, history);
      // 			updateUserTickets(ticketData, history);
      // setTicket(true)
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('Payment error. Please use the provided credit card details');
    });
  }; // const onSubmit = (e) => {
  //   //console.log(filmData)
  //   e.preventDefault();
  //   updateFilm(filmData, history);
  //   updateUserTickets(ticketData, history);
  // };


  const onPayment = () => {
    console.log('called'); //e.preventDefault();

    updateFilm(filmData, history);
    updateUserTickets(ticketData, history);
  }; // 	useEffect(() => {
  // 	// if(ticket) {
  // 	updateFilm(filmData, history);
  //     updateUserTickets(ticketData, history);
  // 	// };
  // },[updateFilm, updateUserTickets])
  // const onSubmit = e => {
  // 	e.preventDefault();
  // 	createFilm(formData, history);
  // };


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "how-it-works" //onClick={e => onSubmit(e)}
    // onSubmit={handleSubmit}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    label: "Pay now",
    name: "Crown Clothing",
    billingAddress: true,
    shippingAddress: true,
    image: "https://sendeyo.com/up/d/f3eb2117da",
    description: `Your total is £{price}`,
    amount: priceForStripe // amount={priceForStripe}
    ,
    panelLabel: "Pay now",
    token: onToken,
    stripeKey: publishableKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }));
}; // export default StripeCheckoutButton;


const mapStateToProps = state => ({
  film: state.film,
  auth: state.auth
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  updateFilm: _actions_film__WEBPACK_IMPORTED_MODULE_4__["updateFilm"],
  updateUserTickets: _actions_auth__WEBPACK_IMPORTED_MODULE_5__["updateUserTickets"]
})(StripeCheckoutButton)); // const priceForStripe = price * 100;
// 	const publishableKey = 'pk_test_uccgS5cz3BgmQJF5Jpfi3zhe';
// 	const onToken = token => {
// 		console.log(token);
// 		alert('Payment succesful');
// 	}
// <StripeCheckout
// 		label='Pay Now'
// 		name='Crown Clothing'
// 		billingAddress
// 		shippingAddress
// 		image='https://sendeyo.com/up/d/f3eb2117da'
// 		description={`Your total is ${price}`}
// 		amount={priceForStripe}
// 		panelLabel='Pay now'
// 		token={onToken}
// 		stripeKey={publishableKey}
// 		/>

/***/ }),

/***/ "./src/components/ticket/Ticket.js":
/*!*****************************************!*\
  !*** ./src/components/ticket/Ticket.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tickets_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tickets.scss */ "./src/components/ticket/Tickets.scss");
/* harmony import */ var _Tickets_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tickets_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/components/ticket/Ticket.js";



const Ticket = ({
  ticket
}) => {
  const title = ticket.title,
        ticketPrice = ticket.ticketPrice,
        numberOfTickets = ticket.numberOfTickets,
        date = ticket.date,
        cost = ticket.cost,
        cinema = ticket.cinema,
        crowdfundTarget = ticket.crowdfundTarget,
        totalsoFar = ticket.totalsoFar;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tickets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "ticket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "ticket__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticket__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/cine-ticket.jpeg",
    className: "ticket-stub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticket__divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticket__notch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticket__notch ticket__notch--right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticket__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ticket__section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Film: ", title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Date: ", date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Cinema: ", cinema)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ticket__section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, " Crowdfund target"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Number sold: ", totalsoFar), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Needed: ", crowdfundTarget), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Number of tickets: ", numberOfTickets))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "ticket__footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Total: \xA3", cost), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Ticket);

/***/ }),

/***/ "./src/components/ticket/Tickets.scss":
/*!********************************************!*\
  !*** ./src/components/ticket/Tickets.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Tickets.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ticket/Tickets.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Tickets.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ticket/Tickets.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Tickets.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/ticket/Tickets.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/index.js";




 //import '../node_modules/bootstrap/dist/css/bootstrap.css'




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_5__["store"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__["PersistGate"], {
  persistor: _store__WEBPACK_IMPORTED_MODULE_5__["persistor"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}))), document.getElementById('root')); // <PersistGate persistor={persistor}>
// <App />
// </PersistGate>

/***/ }),

/***/ "./src/reducers/alert.js":
/*!*******************************!*\
  !*** ./src/reducers/alert.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");

const initialState = [];
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_ALERT"]:
      return [...state, payload];

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ALERT"]:
      return state.filter(alert => alert.id !== payload);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/auth.js":
/*!******************************!*\
  !*** ./src/reducers/auth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["USER_LOADED"]:
      return Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialState, {
        isAuthenticated: true,
        loading: false,
        user: payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
      localStorage.setItem('token', payload.token);
      return Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {}, payload, {
        isAuthenticated: true,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER"]:
      return Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        user: payload,
        loading: false,
        //...state,
        // user: payload, 
        isAuthenticated: true // loading: false,      

      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
      // case ACCOUNT_DELETED:
      localStorage.removeItem('token');
      return Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        token: null,
        isAuthenticated: false,
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/film.js":
/*!******************************!*\
  !*** ./src/reducers/film.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


const initialState = {
  film: null,
  films: [],
  loading: true,
  error: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_FILM"]:
      // case UPDATE_FILM:
      return Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        film: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_FILMS"]:
      return Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        films: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FILM"]:
      return Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        film: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["FILM_ERROR"]:
      return Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: payload,
        loading: false
      });
    //this needed?

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_FILM"]:
      return Object(_Users_andrewhigton_Documents_mern_SatCinemaClub_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        film: null,
        films: [],
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert */ "./src/reducers/alert.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ "./src/reducers/auth.js");
/* harmony import */ var _film__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./film */ "./src/reducers/film.js");






const persistConfig = {
  key: 'root',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default()),
  whitelist: ['auth', 'film']
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  alert: _alert__WEBPACK_IMPORTED_MODULE_3__["default"],
  auth: _auth__WEBPACK_IMPORTED_MODULE_4__["default"],
  film: _film__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistConfig, rootReducer)); // export default combineReducers({
// 	alert,
// 	auth,
// 	film,
// 	profile
// });

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: store, persistor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistor", function() { return persistor; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
// const initialState = {};
// const middleware = [thunk];
// const store = createStore(
// 					rootReducer, 
// 					initialState, 
// 					composeWithDevTools(applyMiddleware(...middleware))
// 					); 
// export default store;






const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"]];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistStore"])(store);
/* harmony default export */ __webpack_exports__["default"] = ({
  store,
  persistor
});

/***/ }),

/***/ "./src/utils/setAuthToken.js":
/*!***********************************!*\
  !*** ./src/utils/setAuthToken.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const setAuthToken = token => {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['x-auth-token'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/andrewhigton/Documents/mern/SatCinemaClub/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/andrewhigton/Documents/mern/SatCinemaClub/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/andrewhigton/Documents/mern/SatCinemaClub/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map
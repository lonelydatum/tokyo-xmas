(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

console.log(bannerSize.h / 100);
gsap.defaults({
	ease: "power.out"
});

function init() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	return tl;
}

function v1() {
	var tl = init();
	tl.from([".cta", ".legal"], { opacity: 0, duration: .5 }, 2);
	TweenLite.from(".glow", { duration: 2, opacity: 0, delay: .5, yoyo: true, repeat: 4 });
}

function v3() {
	var tag = arguments.length <= 0 || arguments[0] === undefined ? 70 : arguments[0];

	var tl = init();
	// tl.from(".tag", {opacity:0, duration:.7, y:`-=${tag}`, ease:Elastic.easeOut}, .5)	
	tl.from(".title", { opacity: 0, duration: .3 });
	tl.from(".cta", { opacity: 0, duration: .3 }, "+=1.3");

	var snow = new TimelineMax();
	snow.from(".snow-1", { x: "-=50", duration: 3, ease: Power1.easeOut }, 0);
	snow.from(".snow-2", { x: "-=50", duration: 2, ease: Power1.easeOut }, 0);
	snow.from(".snow-3", { x: "-=50", duration: 4, ease: Power1.easeOut }, 0);
	snow.from(".snow-4", { x: "-=30", duration: 6, ease: Power1.easeOut }, 0);
	snow.to(".flake", { y: "+=" + bannerSize.h, duration: Math.max(bannerSize.h / 100, 1.7), opacity: 0, ease: Power1.easeOut, repeat: 1 }, 0);
}

exports.init = init;
exports.v1 = v1;
exports.v3 = v3;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.v1)();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map

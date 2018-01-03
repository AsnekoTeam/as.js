const jsdom = require("jsdom");
const fs = require('fs');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>TEST</p>');
const { window } = dom;
const { document } = window;
var $ = require("jquery")(window);
console.log($('p').text());
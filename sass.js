'use strict';

var cssPlugin = require('css');
var sass = require('node-sass');

cssPlugin.translate = function(load) {
  console.log(load)
  var output = sass.renderSync({data: load.source, sourceMap: true});
  load.source = output.css;
  load.metadata.sourceMap = output.map;
};

module.exports = cssPlugin;
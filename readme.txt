This scaffolding will contain Backbone (with underscore, jquery), RequireJS for AMD, Handlebars
for templating, SASS (CSS preprocessiong), and Jasmine for frontend testing.

Jasmine installed is most recent version at the time of creating the scaffolding (i.e. 2.1.3)
It was manually put into the lib/ folder and npm and bower were not used because npm did not have
the front-end browser version. This may change in the future.

All remaining dependencies will reside within the node_modules folder


RequireJS Notes

- baseURL for script (where requirejs will begin loading modules)
  is in src/index.js since data-main is src/index.js in main index.html file
- shim: To convert non-AMD modules into AMD. Will load dependencies prior to loading
  module. The exports property is the Global object the particular module creates
  when it is loaded (i.e., loading underscore puts a global _ on the Window (this) global object)

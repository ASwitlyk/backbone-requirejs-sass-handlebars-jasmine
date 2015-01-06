/**************  RequireJS configuration   ************/

// requirejs.config({
//
//   // default baseUrl will be src/ since data-main entry point
//   // is src/index.js
//   // baseUrl: 'src/',
//
//   // shim configurations here
//   shim: {
//     'backbone': {
//       // these script dependencies should be loaded before
//       // loading backbone.js
//       deps: ['underscore', 'jquery'],
//       // Once loaded, use the global 'Backbone' as the
//       // module value
//       exports: 'Backbone'
//     },
//     'underscore': {
//       exports: '_'
//     },
//     'jquery': {
//       deps: [],
//       exports: '$'
//     },
//     'template': {
//       deps: ['handlebars']
//     }
//   },
//
//
//   paths: {
//     jquery: '../node_modules/jquery/dist/jquery',
//     underscore: '../node_modules/underscore/underscore',
//     backbone: '../node_modules/backbone/backbone',
//     handlebars: '../node_modules/handlebars/dist/handlebars',
//     'handlebars.runtime': '../node_modules/handlebars/dist/handlebars.runtime',
//     template: './compiledTemplates/template'
//   }
//
// });

define(['jquery', 'underscore', 'backbone', 'template'], function($, _, backbone, template) {

  console.log('template is :', template['test3']({data3:"hello"}));

});

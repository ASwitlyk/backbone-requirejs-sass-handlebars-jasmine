define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['test'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div>"
    + escapeExpression(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"useData":true});
templates['test2'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h2>"
    + escapeExpression(((helper = (helper = helpers.data2 || (depth0 != null ? depth0.data2 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data2","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"useData":true});
templates['test3'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h2>"
    + escapeExpression(((helper = (helper = helpers.data3 || (depth0 != null ? depth0.data3 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data3","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"useData":true});
return templates;
});
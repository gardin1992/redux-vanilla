define(function(require,exports,module){module.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{view:""},t=arguments[1];switch(t.type){case"BLOG_VIEW":return Object.assign({},e,{view:t.payload});default:return e}}});
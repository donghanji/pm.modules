/*
 * @name ajaxfileupload Module

 * @desc
    ajaxfileupload as a module.

        to see:


 */
(function(global,undefined){
  if(module.declare === undefined){

      throw 'There is no global module.declare method!';
  }
  var $global=module.globals('$');
  //define ajaxfileupload.module
  module.declare('jquery.flexslider.module',[$global],function(require){
      var jQuery=require($global);

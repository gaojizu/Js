/*create  by wlm 
 * 主要是用来获取到URL传递过来的参数
 * 2018/3/02
 * */
(function ($) {
  $.getUrlParam = function (name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
   var r = window.location.search.substr(1).match(reg);
   if (r != null) return unescape(r[2]); return null;
  }
 })(jQuery);
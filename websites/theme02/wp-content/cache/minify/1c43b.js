(function($){"use strict";function customAttribute(){$('.nano-custom-attribute > li').live('click',function(e){e.preventDefault();var variation_value=$(this).data('value'),selectId=$(this).parent().data('attribute'),select=$('select#'+selectId);$(this).addClass('selected').siblings().removeClass('selected');select.val(variation_value).trigger('change');});$('.variations_form').live('change','select[data-attribute_name]',function(){setTimeout(function(){$('.variations_form select[data-attribute_name]').each(function(i,e){if($(e).val()==''&&$(e).children('[value!=""]').length==1){$(e).val($(e).children('[value!=""]').attr('value')).trigger('change');}});},50);$('.nano-custom-attribute[data-attribute]').each(function(i,e){(function(e){setTimeout(function(){var option=$(e).attr('data-attribute'),select=$('#'+option);$(e).children().each(function(i2,e2){if(select.children('[value="'+$(e2).attr('data-value')+'"]').length==1){$(e2).show();}else{$(e2).hide();}});},50);})(e);});});$('a.reset_variations').live('click',function(){$('.nano-custom-attribute').each(function(i,e){$(e).find('li.selected').removeClass('selected');})});}
$(document).ready(function(){customAttribute();var paged=1;jQuery('.type-loadMore').each(function(){var loadMore_button=jQuery('.wrapper-posts').find('#loadMore');loadMore_button.live('click',function(){paged++;var wrapper=$('.wrapper-posts'),number=parseInt(wrapper.data('number')),cat=wrapper.data('cat'),col=wrapper.data('col'),ads=wrapper.data('ads'),pages=wrapper.data('paged'),layout=wrapper.data('layout');$.ajax({url:NaScript.ajax_url,dataType:'html',type:'POST',data:{action:'load_more_post',number:number,cat:cat,paged:paged,col:col,ads:ads,layout:layout},beforeSend:function(){loadMore_button.addClass('loading');},success:function(data){var val=$(data);var $container=$('.wrapper-posts').find('.products-block').isotope();$container.append(val).isotope('appended',val);$("img.lazy").lazyload();setTimeout(function(){$container.imagesLoaded().progress(function(){$container.isotope('layout');});},100)
loadMore_button.removeClass('loading');if(paged==pages){loadMore_button.addClass('hidden');}},error:function(data){console.log(data);},});return false;});});$('.type-infiniteScroll').each(function(){var win=$(window);var nextPage=$('.wrapper-posts').find('#nextPage');function bindScroll(){if($(window).scrollTop()+$(window).innerHeight()>$(document).height()-250){$(window).unbind('scroll');loadMore();}}
function loadMore()
{paged++;var wrapper=$('.wrapper-posts'),number=parseInt(wrapper.data('number')),cat=wrapper.data('cat'),col=wrapper.data('col'),pages=wrapper.data('paged'),ads=wrapper.data('ads'),layout=wrapper.data('layout');$.ajax({url:NaScript.ajax_url,dataType:'html',type:'POST',data:{action:'load_more_post',number:number,cat:cat,paged:paged,col:col,ads:ads,layout:layout},beforeSend:function(){nextPage.addClass('loading');},success:function(data){var val=$(data);var $container=$('.wrapper-posts').find('.products-block').isotope();$container.append(val).isotope('appended',val);$("img.lazy").lazyload();setTimeout(function(){$container.imagesLoaded().progress(function(){$container.isotope('layout');});},100)
nextPage.removeClass('loading');$(window).bind('scroll',bindScroll);if(paged==pages){nextPage.addClass('hidden');}},error:function(data){console.log(data);},});}
$(window).scroll(bindScroll);});jQuery('.wrapper-filter .cat-item').each(function(){var loadMoreCat_button=$('.wrapper-posts').find('#loadMoreCat');var loadMore_button=$('.wrapper-posts').find('#loadMore');var $wrapper=$('.wrapper-posts').find('.tab-content');jQuery(this).live('click',function(){var wrapper=$('.wrapper-posts'),agr=$('.wrapper-posts').find('.agr-loading'),archive=$('.wrapper-posts').find('.archive-blog'),cat=$(this).data('catfilter'),number=parseInt(wrapper.data('number')),col=wrapper.data('col'),ads=wrapper.data('ads'),layout=wrapper.data('layout');jQuery('.wrapper-filter .cat-item').parent().removeClass('active');jQuery(this).parent().addClass('active');var requestData={action:'load_more_category',number:number,cat:cat,col:col,ads:ads,layout:layout};if(!jQuery(this).hasClass('loaded')){$.ajax({url:NaScript.ajax_url,dataType:'html',type:'POST',data:requestData,beforeSend:function(){agr.addClass('post-loading');archive.addClass('archive-affect');return true;},success:function(data){agr.removeClass('post-loading');archive.removeClass('archive-affect');ajaxResponse(data);},error:function(data){console.log(data);}});}
jQuery(this).not('.loaded').addClass('loaded');var $activeContent='allCat';if(jQuery(this).parent().hasClass('active')){$activeContent=jQuery(this).data('catfilter');}
$wrapper.find('.archive-blog').removeClass('active');$wrapper.find('.archive-blog').removeClass('products-block');$wrapper.find('#'+$activeContent).addClass('active').addClass('products-block');;jQuery('.wrapper-posts').find('.products-block').isotope({transitionDuration:'0.4s',masonry:{columnWidth:'.col-item'},fitWidth:true,});});function ajaxResponse(data){var val=$(data);var $container=$('.wrapper-posts').find('.products-block').isotope({transitionDuration:'0.4s',masonry:{columnWidth:'.col-item'},fitWidth:true,});loadMore_button.addClass('hidden');loadMoreCat_button.removeClass('hidden');$wrapper.append(val).find('.products-block').isotope({transitionDuration:'0.4s',masonry:{columnWidth:'.col-item'},fitWidth:true,});$wrapper.find("img.lazy").lazyload({threshold:500});setTimeout(function(){$container.imagesLoaded().progress(function(){$container.isotope('layout');});$("img.lazy").lazyload({threshold:500});},100)}});jQuery('.wrapper-filter').each(function(){var loadMoreCat_button=$('.wrapper-posts').find('#loadMoreCat');var paged=1;loadMoreCat_button.on('click',function(){jQuery('.wrapper-filter .cat-item').on('click',function(){return paged=1;});paged++;var pages=1,cat='',number='9',col='',ads='',layout='',wrapperActive=jQuery('.wrapper-posts').find('.archive-blog.active');if(jQuery('.wrapper-posts').find('.archive-blog').hasClass('active')){pages=parseInt(wrapperActive.find('#filterPages').data('filter-pages')),cat=wrapperActive.find('#filterPages').data('filter-cat'),number=wrapperActive.find('#filterPages').data('filter-number'),col=jQuery('.wrapper-posts').data('col'),ads=jQuery('.wrapper-posts').data('ads'),layout=jQuery('.wrapper-posts').data('layout');}
if(paged<=pages){$.ajax({url:NaScript.ajax_url,dataType:'html',type:'POST',data:{action:'load_more_post',number:number,cat:cat,paged:paged,col:col,ads:ads,layout:layout},beforeSend:function(){loadMoreCat_button.addClass('loading');},success:function(response){var val2=$(response);var $container=$('.wrapper-posts').find('.products-block').isotope({transitionDuration:'0.4s',masonry:{columnWidth:'.col-item'},fitWidth:true,});$container.append(val2).isotope('appended',val2);$("img.lazy").lazy({threshold:5000,});setTimeout(function(){$container.imagesLoaded().progress(function(){$container.isotope('layout');});},100)
loadMoreCat_button.removeClass('loading');if(paged==pages){loadMoreCat_button.addClass('hidden');}},error:function(data){console.log(data);},});return false;}
if(pages=='1'){loadMoreCat_button.addClass('hidden');}});});function updateUrlParameter(uri,key,value){var i=uri.indexOf('#');var hash=i===-1?'':uri.substr(i);uri=i===-1?uri:uri.substr(0,i);var re=new RegExp("([?&])"+key+"=.*?(&|$)","i");var separator=uri.indexOf('?')!==-1?"&":"?";if(uri.match(re)){uri=uri.replace(re,'$1'+key+"="+value+'$2');}else{uri=uri+separator+key+"="+value;}
return uri+hash;}
jQuery('.type-loadShop').each(function(){var self=this;function resizeLayout(){var col=jQuery('.products-block').data('col');var w_warp_product=jQuery('.products-block').outerWidth();if(w_warp_product>768){var w_width=Math.floor(w_warp_product/col);}
if(w_warp_product<=768){var w_width=Math.floor(w_warp_product/2);}
jQuery('.products-block .col-item').css({"width":(w_width-1)+"px"});}
var loadShop_button=jQuery('.type-loadShop').find('#loadShop');var loadShop_loaded=jQuery('.type-loadShop').find('.infload-to-top');var pages=1;var $nextPageLink=jQuery('.main-content').children('.infload-link').find('a'),$infloadControls=jQuery('.main-content').children('.infload-controls'),nextPageUrl=$nextPageLink.attr('href');if(nextPageUrl){nextPageUrl=updateUrlParameter(nextPageUrl,'shop_load','products');loadShop_button.live('click',function(){pages++;var wrapper=$('.products-block'),productsPerPage=parseInt(wrapper.data('products-per-page')),col=wrapper.data('col'),paged=wrapper.data('paged');$.ajax({url:nextPageUrl,dataType:'html',type:'GET',beforeSend:function(){loadShop_button.addClass('loading');},success:function(response){var $response=$('<div>'+response+'</div>'),$newElements=$response.find('.products-block').children('li');var val=$newElements;var $container=$('.type-loadShop').find('.products-block').isotope({transitionDuration:'0.4s',masonry:{columnWidth:'.col-item'},fitWidth:true,});$container.append(val).isotope('appended',val);resizeLayout();$("img.lazy").lazy({threshold:9000,effect:'fadeIn',}).removeClass('lazy').addClass('lazyloaded');setTimeout(function(){$container.imagesLoaded().progress(function(){$container.isotope('layout');});},100)
loadShop_button.removeClass('loading');nextPageUrl=$response.find('.infload-link').children('a').attr('href');if(nextPageUrl){$nextPageLink.attr('href',nextPageUrl);}else{$nextPageLink.removeAttr('href');}
if(pages==paged){loadShop_button.addClass('hidden');loadShop_loaded.removeClass('hidden');}},error:function(response){console.log(response);},});return false;})}});jQuery('.type-tabShop').each(function(){var self=this;var warp_product=jQuery(this).find('.products-block');var pages=jQuery(this).find('.products-block').data('pages');function resizeLayout(){var col=jQuery(self).find('.products-block').data('col');var w_warp_product=jQuery(self).find('.products-block').outerWidth();if(w_warp_product>768){var w_width=Math.floor(w_warp_product/col);}
if(w_warp_product<=768){var w_width=Math.floor(w_warp_product/2);}
jQuery(self).find('.products-block .col-item').css({"width":(w_width-1)+"px"});}
var loadShop_button=jQuery(this).find('#loadShop');var loadShop_loaded=jQuery(this).find('.infload-to-top');var paged=1;var $nextPageLink=jQuery(this).children('.infload-link').find('a'),nextPageUrl=$nextPageLink.attr('href');if(nextPageUrl){nextPageUrl=updateUrlParameter(nextPageUrl,'shop_load','products');loadShop_button.live('click',function(){paged++;$.ajax({url:nextPageUrl,dataType:'html',type:'GET',beforeSend:function(){loadShop_button.addClass('loading');},success:function(response){var $response=$('<div>'+response+'</div>'),$newElements=$response.find('.products-block').children('li');var val=$newElements;var $container=warp_product.isotope({transitionDuration:'0.4s',masonry:{columnWidth:'.col-item'},layoutMode:'fitRows',});$container.append(val).isotope('appended',val);resizeLayout();$("img.lazy").lazy({threshold:900,effect:'fadeIn',}).removeClass('lazy').addClass('lazyloaded');setTimeout(function(){$container.imagesLoaded().progress(function(){$container.isotope('layout');});},100)
loadShop_button.removeClass('loading');nextPageUrl=$response.find('.infload-link').children('a').attr('href');if(nextPageUrl){$nextPageLink.attr('href',nextPageUrl);}else{$nextPageLink.removeAttr('href');}
if(paged==pages){loadShop_button.addClass('hidden');loadShop_loaded.removeClass('hidden');}},error:function(response){console.log(response);},});return false;})}});jQuery('.nano-video').each(function(){var self=jQuery(this);jQuery('#nano-video').videoController();var play_button=self.find('.btn-play');play_button.live('click',function(){self.find('.image-embed').addClass('hidden');self.find('.embed-responsive').removeClass('hidden');playVideo();});});jQuery('.category-tabs,.product-tabs').each(function(){var self=this;var nav_tabs=jQuery(self).find('.nav-tabs li')
nav_tabs.on('click',function(){tinyScroll();});});});function playVideo(){jQuery('#nano-video').videoController('play');}
function tinyScroll(){window.scrollBy(0,1);}})(jQuery);
;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
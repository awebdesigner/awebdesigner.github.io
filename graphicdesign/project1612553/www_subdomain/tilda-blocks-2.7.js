function t121_setHeight(recid){var rec=$('#rec'+recid);var div=$("#youtubeiframe"+recid);var height=div.width()*0.5625;div.height(height);div.parent().height(height);var videoLazy=rec.find('.t-video-lazyload');var iframeLazy=videoLazy.find('iframe');if(videoLazy!=undefined){var heightLazy=videoLazy.width()*0.5625;videoLazy.height(heightLazy);iframeLazy.height(heightLazy)}}
function t453_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t453__item a[href='"+url+"']").addClass("t-active");$(".t453__item a[href='"+url+"/']").addClass("t-active");$(".t453__item a[href='"+pathname+"']").addClass("t-active");$(".t453__item a[href='/"+pathname+"']").addClass("t-active");$(".t453__item a[href='"+pathname+"/']").addClass("t-active");$(".t453__item a[href='/"+pathname+"/']").addClass("t-active")}
function t453_checkAnchorLinks(recid){if($(window).width()>=960){var t453_navLinks=$("#rec"+recid+" .t453__item a:not(.tooltipstered)[href*='#']");if(t453_navLinks.length>0){t453_catchScroll(t453_navLinks)}}}
function t453_catchScroll(t453_navLinks){var t453_clickedSectionId=null,t453_sections=new Array(),t453_sectionIdTonavigationLink={},t453_interval=100,t453_lastCall,t453_timeoutId,t453_offsetTop=$(".t453").attr("data-offset-top");if(typeof t453_offsetTop=="undefined"){t453_offsetTop=0}
t453_navLinks.each(function(){var t453_cursection=t453_getSectionByHref($(this));if(typeof t453_cursection.attr("id")!="undefined"){t453_sections.push(t453_cursection)}
t453_sectionIdTonavigationLink[t453_cursection.attr("id")]=$(this)});t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,t453_offsetTop);t453_navLinks.click(function(){if(!$(this).hasClass("tooltipstered")){t453_navLinks.removeClass('t-active');t453_sectionIdTonavigationLink[t453_getSectionByHref($(this)).attr("id")].addClass('t-active');t453_clickedSectionId=t453_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t453_now=new Date().getTime();if(t453_lastCall&&t453_now<(t453_lastCall+t453_interval)){clearTimeout(t453_timeoutId);t453_timeoutId=setTimeout(function(){t453_lastCall=t453_now;t453_clickedSectionId=t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,t453_offsetTop)},t453_interval-(t453_now-t453_lastCall))}else{t453_lastCall=t453_now;t453_clickedSectionId=t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,t453_offsetTop)}})}
function t453_getSectionByHref(curlink){if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curlink.attr("href").substring(1)+"']")}
else{return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']")}}
function t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,offsetTop){var t453_scrollPosition=$(window).scrollTop(),t453_valueToReturn=t453_clickedSectionId;$(t453_sections).each(function(e){var t453_curSection=$(this),t453_sectionTop=t453_curSection.offset().top,t453_id=t453_curSection.attr('id'),t453_navLink=t453_sectionIdTonavigationLink[t453_id];if(t453_scrollPosition>=(t453_sectionTop-offsetTop)||(t453_sections[0].attr("id")==t453_id&&$(window).scrollTop()>=$(document).height()-$(window).height())){if(t453_clickedSectionId==null&&!t453_navLink.hasClass('t-active')){t453_navLinks.removeClass('t-active');t453_navLink.addClass('t-active');t453_valueToReturn=null}else{if(t453_clickedSectionId!=null&&t453_id==t453_clickedSectionId){t453_valueToReturn=null}}
return!1}});return t453_valueToReturn}
function t453_appearMenu(recid){var window_width=$(window).width();var record=$("#rec"+recid);record.find(".t453").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");console.log(appearoffset)
if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.hasClass('t453__beforeready')){el.removeClass('t453__beforeready')}}else{el.addClass('t453__beforeready')}}})}
function t604_init(recid){t604_imageHeight(recid);t604_arrowWidth(recid);t604_show(recid);t604_hide(recid);$(window).bind('resize',t_throttle(function(){t604_arrowWidth(recid)},200))}
function t604_show(recid){var el=$("#rec"+recid),play=el.find('.t604__play');play.click(function(){if($(this).attr('data-slider-video-type')=='youtube'){var url=$(this).attr('data-slider-video-url');$(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")}
if($(this).attr('data-slider-video-type')=='vimeo'){var url=$(this).attr('data-slider-video-url');$(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")}
$(this).next().css('z-index','3')})}
function t604_hide(recid){var el=$("#rec"+recid),body=el.find('.t604__frame');el.on('updateSlider',function(){body.html('').css('z-index','')})}
function t604_imageHeight(recid){var el=$("#rec"+recid);var image=el.find(".t604__separator");image.each(function(){var width=$(this).attr("data-slider-image-width");var height=$(this).attr("data-slider-image-height");var ratio=height/width;var padding=ratio*100;$(this).css("padding-bottom",padding+"%")})}
function t604_arrowWidth(recid){var el=$("#rec"+recid),arrow=el.find('.t-slds__arrow_wrapper'),slideWidth=el.find('.t-slds__wrapper').width(),windowWidth=$(window).width(),arrowWidth=windowWidth-slideWidth;if(windowWidth>960){arrow.css('width',arrowWidth/2)}else{arrow.css('width','')}}
function t608_setHeight(recid){var el=$("#rec"+recid);var image=el.find(".t608__bgimg");image.each(function(){var width=$(this).attr("data-image-width");var height=$(this).attr("data-image-height");var ratio=height/width;var padding=ratio*100;$(this).css("padding-bottom",padding+"%")})}
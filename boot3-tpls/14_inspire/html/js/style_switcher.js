window.jQuery = window.$ = jQuery;

/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);

jQuery(document).ready(function(){

	//Start Control Panel Script
	jQuery('body').append('<div id="style-switcher"><div class="swtch-opener"><span class="glyphicon glyphicon-cog"></span></div><div class="swtch-header"><h4>STYLE SWITCHER</h4></div><div class="styleswtch"></div>');
	
	demo_panel = jQuery('body').find('.styleswtch');
	
	
	//Colors Panel
	demo_panel.append('<ul class="ul-colors clearfix"><h5>COLORS</h5><li id="color1"></li><li id="color2"></li><li id="color3"></li><li id="color4"></li><li id="color5"></li></ul>');
	
	if($.cookie("css")) {
		$('link[id="colors"]').attr("href",$.cookie("css"));
	}
	
	//Colors Style	
	$('.ul-colors li').click(function(){
		color=($(this).attr('id'));
		if(color=='color1')	{	
			$('link[id="colors"]').attr('href','css/colors/color1.css');
			$.cookie('css', 'css/colors/color1.css', { expires: 1 });
		} else if(color=='color2') {
			$('link[id="colors"]').attr('href','css/colors/color2.css');
			$.cookie('css', 'css/colors/color2.css', { expires: 1 });
		} else if(color=='color3') {
			$('link[id="colors"]').attr('href','css/colors/color3.css');
			$.cookie('css', 'css/colors/color3.css', { expires: 1 });
		} else if(color=='color4') {
			$('link[id="colors"]').attr('href','css/colors/color4.css');
			$.cookie('css', 'css/colors/color4.css', { expires: 1 });
		} else if(color=='color5') {
			$('link[id="colors"]').attr('href','css/colors/color5.css');
			$.cookie('css', 'css/colors/color5.css', { expires: 1 });
		} else if(color=='color6') {
			$('link[id="colors"]').attr('href','css/colors/color6.css');
			$.cookie('css', 'css/colors/color6.css', { expires: 1 });
		}
	});
	
	
	//Patterns Panel
	demo_panel.append('<ul class="ul-pattern clearfix"><h5>PATTERNS</h5><a id="pattern1" href="javascript:void(0)" rel="patterns_type1"></a><a id="pattern2" href="javascript:void(0)" rel="patterns_type2"></a><a id="pattern3" href="javascript:void(0)" rel="patterns_type3"></a><a id="pattern4" href="javascript:void(0)" rel="patterns_type4"></a><a id="pattern5" href="javascript:void(0)" rel="patterns_type5"></a><a id="pattern6" href="javascript:void(0)" rel="patterns_type6"></a><a id="pattern7" href="javascript:void(0)" rel="patterns_type7"></a><a id="pattern8" href="javascript:void(0)" rel="patterns_type8"></a><a id="pattern9" href="javascript:void(0)" rel="patterns_type9"></a><a id="pattern10" href="javascript:void(0)" rel="patterns_type10"></a><a id="pattern11" href="javascript:void(0)" rel="patterns_type11"></a><a id="pattern12" href="javascript:void(0)" rel="patterns_type12"></a></ul>');
	
	if($.cookie("pattern")) {
		$('#page').addClass($.cookie("pattern"));
	}
	
	//Patterns style	
	$('.ul-pattern a').click(function(){								   
		changePattern=($(this).attr('id'));	
		$('#page').removeClass();
		$('#page').addClass(changePattern);
		$.cookie('pattern', $(this).attr('id'), { expires: 1 });
	});
	
	
	//BACKGROUNDS
	demo_panel.append('<ul class="ul-background clearfix"><h5>BACKGROUNDS</h5><a id="background1" href="javascript:void(0)" rel="background_type1"></a><a id="background2" href="javascript:void(0)" rel="background_type2"></a><a id="background3" href="javascript:void(0)" rel="background_type3"></a><a id="background4" href="javascript:void(0)" rel="background_type4"></a><a id="background5" href="javascript:void(0)" rel="background_type5"></a></ul>');
	
	//BACKGROUNDS
	$('.ul-background a').click(function(){								   
		changeBackground=($(this).attr('id'));	
		$('#page').removeClass();
		$('#page').addClass(changeBackground);
		$.cookie('pattern', $(this).attr('id'), { expires: 1 });
	});
	
	
	//Reset Button
	demo_panel.append('<p><a class="stylereset" href="javascript:void(0);">RESET STYLES</a></p>');
	
	//Reset Styles
	$('.stylereset').click(function(e){
		$.cookie('css', null);
		$.cookie('pattern', null);
		$('link[id="colors"]').attr('href','css/colors/');
		$('#page').removeClass();
	});
	
	
	//Style Switcher Left/Right
	jQuery('#style-switcher').css({left: '-160px'});
	
	jQuery('.swtch-opener').click(function(){
		jQuery('#style-switcher').toggleClass('panel_open');
	});	
	
	jQuery('.swtch-opener').click(function(){
		var sidebar = jQuery('#style-switcher');
		if (sidebar.css('left') === '-160px') {
			jQuery('#style-switcher').animate({left: '0px'});
		} else {
			jQuery('#style-switcher').animate({left: '-160px'});
		}	
	});
	

});
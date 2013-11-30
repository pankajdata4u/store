(function($){
  $(document).ready(function(){
	deals_city = $.cookie('deals_city');
	if(deals_city!='' && deals_city!=null){
		parts = deals_city.split('::');
		deals_city = parts[1];
		deals_city = escape(deals_city);
		$('.view-cities-list select option').removeAttr('selected');
    $('.view-cities-list select option[value*="'+deals_city+'"]').attr('selected','selected');
	}

	$('.view-cities-list select').unbind().bind('change', function(){
		customvalue = unescape(this.value);
	  $.cookie('deals_city', customvalue, { expires: 30, path: Drupal.settings.basePath});
	  window.location.reload();
	  return false;
	});
  });
})(jQuery);
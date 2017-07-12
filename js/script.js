$('document').ready(function(){
	$('.j-iframe').hide();
});


$('.j-btn').on('click', function(){
	var btnId = $(this).attr('id');

	var iframeId = 'iframe-' + btnId[btnId.length -1];

	if($(this).hasClass('btn-default')){
	 	$(this).removeClass('btn-default').addClass('btn-active');
	 	$('#' + iframeId).show();

	} else {
	 	$(this).addClass('btn-default').removeClass('btn-active');
	 	$('#' + iframeId).hide();
	}
});
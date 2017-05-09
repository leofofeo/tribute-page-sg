$('document').ready(function(){
	
});


$('button').on('click', function(){
	btnId = $(this).attr('id');
	vidId = '#video' + btnId[btnId.length - 1]; 
	if($(vidId).hasClass('hidden')){
		$(vidId).removeClass('hidden').addClass('show');
		$('#' + btnId).addClass('btn-primary');
	} else {
		$(vidId).removeClass('show').addClass('hidden');
		$('#' + btnId).removeClass('btn-primary');
	}
});
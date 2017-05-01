$('document').ready(function(){
	alert('READY');
});


$('button').on('click', function(){
	btnId = $(this).attr('id');
	vidId = '#video' + btnId[btnId.length - 1]; 
	if($(vidId).hasClass('hidden')){
		$(vidId).removeClass('hidden').addClass('show');
	} else {
		$(vidId).removeClass('show').addClass('hidden');
	}
});
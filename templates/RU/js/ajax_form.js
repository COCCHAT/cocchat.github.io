var ajax_form_index = 0;
function ajaxFormInfo(title,error){
	HideLoading();
	DLEalert(error,title);
	return false;
}
$.fn.ajaxForm = function(){
	if(!this.length) return false;
	var url = this.attr('action');
	if(!url) url = window.location.href;
	this.attr('target','ajaxForm_'+ajax_form_index);
	this.append('<input type="hidden" name="ajaxForm" value="1" />');
	$('body').append('<iframe src="'+url+'" name="ajaxForm_'+ajax_form_index+'" style="display: none;"></iframe>');
	this.on('submit',ShowLoading);
	ajax_form_index++;
}
$(function(){
	$(".ajax_form_parent").closest('form').ajaxForm();
	$(".ajaxForm").ajaxForm();
})

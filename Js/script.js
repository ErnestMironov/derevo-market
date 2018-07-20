/*----------SIDEBAR-----------*/
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

/*------------SHOW MOBILE MENU-----------*/
if(document.documentElement.clientWidth < 769) {
$('.fa-bars').click(function(){
	$('.sidebar').slideToggle();
})

$(document).mouseup(function (e) {
    var container = $(".sidebar");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});
}
/*----------------TABS---------------*/
$(function(){

	$("#wr-tabs").on("click", ".tab", function(){

		var tabs = $("#wr-tabs .tab"),
		    cont = $("#wr-tabs .tab-cont");

		// Удаляем классы active
		tabs.removeClass("active");
		cont.removeClass("active");
		// Добавляем классы active
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");

		return false;
	});
});

/*-------FANCYBOX------------*/

$('[data-fancybox="images"]').fancybox({

});

$(".modalbox").fancybox();
    $("#f_contact").submit(function(){ return false; });
    $("#f_send").on("click", function(){
         
        // тут дальнейшие действия по обработке формы
        // закрываем окно, как правило делать это нужно после обработки данных
        $("#f_contact").fadeOut("fast", function(){
            $(this).before("<p><strong>Ваше сообщение отправлено!</strong></p>");
            setTimeout("$.fancybox.close()", 1000);
        });
    });

/*--------------MASKED_INPUT--------------*/

 $(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("8(999) 999-9999");
});
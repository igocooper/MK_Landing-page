$(function(){
	$('.click').on('click',function (e) {
	    e.preventDefault();
        alert('bah bha');
        });

	$('.clickp').on('click',function (e){
	    e.preventDefault();
	   $(this).hide();
	   
	    });
});



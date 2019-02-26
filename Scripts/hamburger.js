 jQuery(function($){
    	     $( '.menu-btn' ).on('click touch', function(){
			 $('#music-header').hide()
			 $('#gigs-header').hide()
			 $('#contacts-header').hide()
			 $('#gallery-header').hide()
			 $('#bookme-header').hide()     	     	
    	     $('.responsive-menu').toggleClass('expand')
    	     });

    	     
})
    
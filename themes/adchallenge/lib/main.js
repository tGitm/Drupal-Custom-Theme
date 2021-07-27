document.addEventListener('DOMContentLoaded', function() {
    
    jQuery('a[href^="#"]').click(function(e) {   
        e.preventDefault();   
        var dest = jQuery(this).attr('href');   
        //console.log(dest);   
        //jQuery(menu-item).addClass("active-link");
        jQuery('html,body').animate({ scrollTop: jQuery(dest).offset().top }, 'slow'); 
    });


    jQuery('.menu-item').on("click", function(){
        //console.log(jQuery(this));        
        jQuery('.menu-item').removeClass('active-link');
        jQuery(this).addClass('active-link');
    });
});
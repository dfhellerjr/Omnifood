// script.js

// jQuery functions
$(document).ready(function() 
{
    /* -------------------------------------------------- */
    /* Sticky Navigation                                  */
    /* -------------------------------------------------- */
    $('.js--section-features').waypoint(function(direction) 
    {
        if (direction == "down") 
        {
            $('nav').addClass('sticky');
        }
        else 
        {
            $('nav').removeClass('sticky');
        }
    },
    /* set offset point */                              
    {        
        offset: '60px;'
    });
        
    /* -------------------------------------------------- */
    /* Scroll on buttons                                  */
    /* -------------------------------------------------- */ 
    $('.js--scroll-to-plans').click(function ()                                    
    {
        $('html, body').animate(
        {
            scrollTop: $('.js--section-plans').offset().top
        }, 
        1000); 
    });
    
    $('.js--scroll-to-features').click(function () 
    {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
        
    /* -------------------------------------------------- */
    /* Navigation scroll                                  */
    /* -------------------------------------------------- */
    $(function() 
    {
        $('.main-nav-link').click(function() 
        {      
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                && location.hostname == this.hostname) 
          {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) 
            {
                $('html,body').animate(
                {
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
          }      
        });
    });   
    
    /* -------------------------------------------------- */
    /* Animations on scroll                               */
    /* -------------------------------------------------- */
    /* fade in features*/
    $('.js--wp-1').waypoint(function(direction) 
    {
        $('.js--wp-1').addClass('animated fadeIn');
    }, 
    {
        offset: '50%'
    });
    
    /* fade in and up for how it works */
    $('.js--wp-2').waypoint(function(direction) 
    {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, 
    {
        offset: '50%'
    });
    
    /* fade in for cities */
    $('.js--wp-3').waypoint(function(direction) 
    {
        $('.js--wp-3').addClass('animated fadeIn');
    }, 
    {
        offset: '50%'
    });
    
    /* pulse for plans */
    $('.js--wp-4').waypoint(function(direction) 
    {
        $('.js--wp-4').addClass('animated pulse');
    }, 
    {
        offset: '50%'
    });
    
    /* -------------------------------------------------- */
    /* Mobile Navigation                                  */
    /* -------------------------------------------------- */                                         
    $('.js--nav-icon').click(function() 
    {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
                
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) 
        {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } 
        else 
        {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }                        
    });
    
    /* -------------------------------------------------- */
    /* Map Section                                        */
    /* Note: Not used in this version                     */
    /* The embed-map.org iframe was used instead          */
    /* -------------------------------------------------- */
    /*    
    var map = new GMaps(
    {
        div: '.map',
        lat: 37.7779,
        lng: -122.35,
        zoom: 12       
    });
    
    map.addMarker(
    {
        lat: 37.774907,
        lng: -122.4,
        title: 'San Franscisco',
        infoWindow:
        {
            content: '<p>Omnifood HQ</p>'   
        }        
     });
     */          
});
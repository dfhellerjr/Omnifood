// ---------------------------------------------------------
// script.js 
// Create the breakpoints and settings for the slick slider
// ---------------------------------------------------------
$(document).ready(function()
{   
    $('.responsive').slick(
    {
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: 
            {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, 
        {
            breakpoint: 600,
            settings:
            {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, 
        {
            breakpoint: 480,
            settings: 
            {
                slidesToShow: 1,
                slidesToScroll: 1,  
                dots: false
            }
        }]
    }); 
});
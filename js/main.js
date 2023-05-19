$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

$(document).ready(function(){
    $('.navbar a').on('click', function(e){
        if(this.hash !== ''){
            e.preventDefault();

            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, "slow");
        }
    }) 
// $("#back2Top").click(function(event) {
//     event.preventDefault();
//     $("html, body").animate({ 
//         scrollTop: 0 }, "slow");
//     return false;
// });

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#navbar-example'
//   })
  

});
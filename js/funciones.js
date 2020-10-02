// Owl Carrousel //
$(".owl-carousel").owlCarousel({
margin:10,
loop:true,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
});
$('.play').on('click',function(){
owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
owl.trigger('stop.owl.autoplay')
}) 


// Counter Up //
jQuery(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/* Defer parsing of JS YouTube (ayudawp.com) */
function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i=0; i<vidDefer.length; i++) {
    if(vidDefer[i].getAttribute('data-src')) {
    vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
    } } }
    window.onload = init;

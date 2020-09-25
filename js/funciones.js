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

// Modal Formulario de contacto //
$('#myModal').on('shown.bs.modal', function () {
$('#myInput').trigger('focus')
})
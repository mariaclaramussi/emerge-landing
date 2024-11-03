$( document ).ready(function() {
    $('.owl-carousel.owl-brands-edge').owlCarousel({
        loop:true,
        margin:100,
        nav:false,
        stagePadding: 180,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive:{
            0:{
                items: 1,
                stagePadding: 140,
            },
            600:{
                items: 1
            },
            1000:{
                items: 5
            }
        }
    })
})

$(".btn-collapse").on('click', function() {
    var plus = this.find('.plus-icon')
    console.log(plus)
});
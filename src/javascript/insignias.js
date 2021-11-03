
const insignias = {
    sliderGrid: ()=> {
        var swiper = new Swiper(".insignias .swiper", {
            slidesPerView: 1,

            pagination: {
              el: ".insignias .swiper-pagination",
              clickable: true,
            },
        });
        
    },
    init: function () {
        this.sliderGrid();
    }
}

insignias.init();
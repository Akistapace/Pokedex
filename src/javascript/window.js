let btnOn = document.querySelector('.btnOn')

btnOn.addEventListener('click', ()=> {
  document.querySelector('.window > .inner').classList.toggle('window-on')
  document.body.classList.toggle('app-off')
})


var horizontal = new Swiper(".window .mySwiper", {
  spaceBetween: 50,
  allowTouchMove: false,
  pagination: {
    el: ".window .pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
var vertical = new Swiper(".mySwiper2", {
  direction: "vertical",
  spaceBetween: 50,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: [0, "100%", 0],
    },
  },
});

let controlNext = document.querySelector('.btn.-right')
let controlPrev = document.querySelector('.btn.-left')

let controlUp = document.querySelector('.btn.-top')
let controlDown = document.querySelector('.btn.-bottom')


horizontal.on('slideChange', function () {
  var arrow = document.querySelector('.window_green img')

  if (horizontal.isEnd) {
      // arrow.style.transform = "rotate(90deg)";

      // setTimeout(() => {
      //   controlNext.classList.add('ended')
      // }, 1000);

      // controlUp.classList.remove('disabled')
      // controlDown.classList.remove('disabled')
      
  } else {
    arrow.style.transform = "rotate(0deg)";

    controlNext.classList.remove('ended')

    controlUp.classList.add('disabled')
    controlDown.classList.add('disabled')
    
  }


});

vertical.on('slideChange', function () {
  console.log(vertical.realIndex);
  if (vertical.realIndex >= 1 ) {
    controlUp.classList.remove('disabled')
    controlDown.classList.remove('disabled')

    controlNext.classList.add('disabled')
    controlPrev.classList.add('disabled')
  } else {
    controlNext.classList.remove('disabled')
    controlPrev.classList.remove('disabled')
  }
});



document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
      case 37:
        console.log('left');


        break;
      case 38:
         console.log('up');


        break;
      case 39:
          console.log('right');

        break;
      case 40:
          console.log('down');


        break;
  }
});

controlNext.addEventListener('click', ()=> {
  horizontal.slideNext(500)
  
  var x = document.querySelector('.btn.-right')

  if (x.classList.contains('ended')) {
    console.log('tem ended');
    document.body.classList.add('alertlights')
    setTimeout(() => {
      document.body.classList.remove('alertlights')
    }, 1000);
  }
})

controlPrev.addEventListener('click', (event)=> {
  horizontal.slidePrev(500)
  
})

controlUp.addEventListener('click', ()=> {
  vertical.slidePrev(500)
  var x = document.querySelector('.btn.-right')

  if (x.classList.contains('ended')) {
    console.log('tem ended');
    document.body.classList.add('alertlights')
    setTimeout(() => {
      document.body.classList.remove('alertlights')
    }, 1000);
  }
})

controlDown.addEventListener('click', ()=> {
  vertical.slideNext(500)
})


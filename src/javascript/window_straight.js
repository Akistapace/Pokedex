
const windowStraight = {
    clickView: function() {
       let insignias = document.querySelectorAll('.insignias .item'),
           content = document.querySelectorAll('.window_straight .content'),
           n = 0
      
       insignias.forEach(e => {
         e.addEventListener('click', ()=> {
            n += 1

            if (n > 0) {
              document.querySelector('.window_straight ').classList.add('window-on')
            }

            content.forEach(el => {

              el.classList.remove('active') 

              if (e.getAttribute('data-index') == el.getAttribute('data-index') ) {

                  el.classList.add('active') 
              }  
            });
         })
       });
    },
    init:function() {
        this.clickView();

        console.log(this)
    }
}


windowStraight.init()
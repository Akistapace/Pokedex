
const windowStraight = {
    clickView: function() {
       let insignias = document.querySelectorAll('.insignias .item'),
       content = document.querySelectorAll('.window_straight .content')
      
       insignias.forEach(e => {
         e.addEventListener('click', ()=> {
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
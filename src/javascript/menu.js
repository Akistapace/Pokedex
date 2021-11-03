const menu = {
    menuToggle: ()=> {
        let _Menu = document.querySelector('.menu'),
        btnmenu = document.querySelector('.btnmenu')
       
        btnmenu.addEventListener('click', ()=> {
            _Menu.classList.toggle('active')
        })

    },
    init: function() {
        this.menuToggle();
        console.log(this)
    }
}
menu.init()
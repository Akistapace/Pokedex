const menu = {
    menuToggle: ()=> {
        let _Menu = document.querySelector('.menu'),
        btnmenu = document.querySelector('.btnmenu')
       
        btnmenu.addEventListener('click', ()=> {
            _Menu.classList.toggle('active')
        })

    },
    focusItens: ()=> {
        let menuitems = document.querySelectorAll('.menu .item')

        menuitems.forEach(e => {
            e.addEventListener('click', ()=> {
                if (e.getAttribute('data-menu') == 'about') {
                  
                    document.querySelector('.menu').classList.remove('active')

                    document.querySelector('.window .swiper').classList.add('lightining')

                    setTimeout(() => {
                        document.querySelector('.window .swiper').classList.remove('lightining')
                    }, 1000);


                } else if (e.getAttribute('data-menu') == 'badge') {
                    document.querySelector('.insignias').classList.add('lightining')

                    setTimeout(() => {
                        document.querySelector('.insignias').classList.remove('lightining')
                    }, 1000);

                } else if (e.getAttribute('data-menu') == 'projects') {
                    document.querySelector('.btnsbottom > .btn-black').classList.add('lightining')

                    setTimeout(() => {
                        document.querySelector('.btnsbottom > .btn-black').classList.remove('lightining')
                    }, 1000);

                } else if (e.getAttribute('data-menu') == 'contact') {
                    document.querySelector('.btns_socials').classList.add('lightining')
                    
                    setTimeout(() => {
                        document.querySelector('.btns_socials').classList.remove('lightining')
                    }, 1000);
                }
            } )
        });
    },
    init: function() {
        this.menuToggle();
        this.focusItens();
    }
}
menu.init()
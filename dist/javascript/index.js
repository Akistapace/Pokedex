const insignias={sliderGrid:()=>{new Swiper(".insignias .swiper",{slidesPerView:1,pagination:{el:".insignias .swiper-pagination",clickable:!0}})},init:function(){this.sliderGrid()}};insignias.init();const menu={menuToggle:()=>{let e=document.querySelector(".menu"),t=document.querySelector(".btnmenu");t.addEventListener("click",()=>{e.classList.toggle("active")})},init:function(){this.menuToggle(),console.log(this)}};menu.init();var horizontal=new Swiper(".window .mySwiper",{spaceBetween:50,pagination:{el:".window .pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1}}),vertical=new Swiper(".mySwiper2",{direction:"vertical",spaceBetween:50,pagination:{el:".swiper-pagination",clickable:!0}});let controlNext=document.querySelector(".btn.-right"),controlPrev=document.querySelector(".btn.-left"),controlUp=document.querySelector(".btn.-top"),controlDown=document.querySelector(".btn.-bottom");horizontal.on("slideChange",function(){var e=document.querySelector(".window_green img");horizontal.isEnd?(e.style.transform="rotate(90deg)",setTimeout(()=>{controlNext.classList.add("ended")},1e3),controlUp.classList.remove("disabled"),controlDown.classList.remove("disabled")):(e.style.transform="rotate(0deg)",controlNext.classList.remove("ended"),controlUp.classList.add("disabled"),controlDown.classList.add("disabled"))}),vertical.on("slideChange",function(){console.log(vertical.realIndex),1<=vertical.realIndex?(controlUp.classList.remove("disabled"),controlDown.classList.remove("disabled"),controlNext.classList.add("disabled"),controlPrev.classList.add("disabled")):(controlNext.classList.remove("disabled"),controlPrev.classList.remove("disabled"))}),document.addEventListener("keydown",function(e){switch(e.keyCode){case 37:console.log("left");break;case 38:console.log("up");break;case 39:console.log("right");break;case 40:console.log("down")}}),controlNext.addEventListener("click",()=>{horizontal.slideNext(500),document.querySelector(".btn.-right").classList.contains("ended")&&(console.log("tem ended"),document.body.classList.add("alertlights"),setTimeout(()=>{document.body.classList.remove("alertlights")},1e3))}),controlPrev.addEventListener("click",e=>{horizontal.slidePrev(500)}),controlUp.addEventListener("click",()=>{vertical.slidePrev(500),document.querySelector(".btn.-right").classList.contains("ended")&&(console.log("tem ended"),document.body.classList.add("alertlights"),setTimeout(()=>{document.body.classList.remove("alertlights")},1e3))}),controlDown.addEventListener("click",()=>{vertical.slideNext(500)});const windowStraight={clickView:function(){let e=document.querySelectorAll(".insignias .item"),i=document.querySelectorAll(".window_straight .content");e.forEach(t=>{t.addEventListener("click",()=>{i.forEach(e=>{e.classList.remove("active"),t.getAttribute("data-index")==e.getAttribute("data-index")&&e.classList.add("active")})})})},init:function(){this.clickView(),console.log(this)}};windowStraight.init();
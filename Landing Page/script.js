var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
    pagination: {
      el: ".swiper-pagination",
    },
  });

//   Next

var sidenav = document.getElementById("sidenav");
        var menubar = document.getElementById("menubar");
        sidenav.style.width="0px";
        menubar.onclick= function(){
                if(sidenav.style.width=="0px"){
                    sidenav.style.width="350px";
                }
                else{
                    sidenav.style.width="0px";
                }
        }
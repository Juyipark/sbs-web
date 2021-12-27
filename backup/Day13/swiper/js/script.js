
$(function() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        direction: 'horizontal', // 슬라이드방향 : vertical, horizontal
        loop: true,               // 반복여부
        autoplay: {             // 자동재생
          delay: 1000,          // 슬라이드 당 지연시 ms
          pauseOnMouseEnter: true, //슬라이드에 마우스 올려두면 자동재생 멈춤
          disableOnInterraction: true, //인터랙션 
          stopOnlastSlide: false, //마지막 슬라이드에서 자동재생 멈춤 여부
        },
      
        /* 이펙트 */
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },

        effect:'coverflow',
        slidesPerView: 3,    // 보여지는 슬라이드 개수
        spaceBetween: 100,   // 슬라이드 간 여백
        coverflowEffect: {
          rotate: 30,
          slideShdows: false,
        },


        // If we need pagination
        pagination: {
          el: '.swiper-pagination',  // 페이지네이션이 적용될 요소(선택자)
          type: 'bullets'  //bullets : ㅇㅇㅇ, fraction : 현재번호, progressbar : 진행률
          
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true, //스크롤바 숨김
          draggable: true, //스크롤바 드래그 가능 여부
          snapOnRelease: false, //스크롤바 놓을때, 슬라이드를 정위치로 맞춤
        },

      });
      
      
      

})
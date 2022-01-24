const content = "안녕하세요!\n겸손한 자세로 일하며 고객의 니즈에 맞춰 서비스하려 하는\n예비 프론트엔드 개발자 장세영입니다.";
const text = document.querySelector('.title-comment');
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt=== "\n"? "<br/>": txt;
  if(i > content.length){
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 200)


//new Swiper(선택자, 옵션)
new Swiper('.promotion .swiper-container' ,{
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복재생 여부
  autoplay: {
    delay: 3000 //3초 - millisecond단위
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


//JQuery 스크롤 특정 위치 이벤트
$(document).ready(function($) {
  $(".scroll").click(function(event){            
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
});


//JQuery 헤더 메뉴 스크롤 이벤트
let $window = $(window),
  $mainHeader = $('#main-header'),
  $defaultLogo = 'https://user-images.githubusercontent.com/92082361/147901179-e0800b48-3355-446e-be5b-75f680f443dc.png',
  $smallLogo = 'https://user-images.githubusercontent.com/92082361/147901219-fc401be5-9aa0-49a7-bef3-8bf0df9e172b.png'; 

  $window.scroll(function() {
    if($(this).scrollTop() > 100) {
      if(!$mainHeader.hasClass('shrink')) {
          $mainHeader.addClass('shrink');
          switchImages($smallLogo);
          $('.title').css("display", "none");
      }
    }else {
      if($mainHeader.hasClass('shrink')) {
          $mainHeader.removeClass('shrink');
          switchImages($defaultLogo);
          $('.title').css("display", "block");  
      }
    }
  });


  //switchImages함수
  function switchImages(newPath) {
    let $logo = $('#logo');
    $logo.fadeOut(300, function() {
      // let c = A.attr('src');
      // A.attr('src', 'c');
      $logo.attr('src', newPath);
      $logo.fadeIn(300);
    }); //jquery fadeout
  }




    
    
    

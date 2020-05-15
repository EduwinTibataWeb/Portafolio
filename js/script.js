var getpreLoader = $('#preloader');
var tloader = new TimelineMax();
tloader.to(getpreLoader, 4,{
  autoAlpha: 0, 
  ease: Expo.easeInOut,
  scale: 1.2
});
$(document).ready(function(){
  var slider = new Swiper(".swiper-container", {
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,
    mousewheel: true
  })
  slider.on('slideChange', function () {
    TweenMax.to('.slide-text span', .2, {
      y: '-100px',
    })
    TweenMax.to('.slide-number span', .2, {
      x: '-100px',
    })
    TweenMax.to('.swiper-slide-active', .5, {
      scale: .85,
    })
  });
  slider.on('slideChangeTransitionEnd', function () {
  
    TweenMax.to('.slide-text span', .2, {
      y: 0,
      delay: .5
    })
    TweenMax.to('.slide-text span', 0, {
      y: '100px',
    })
  
    TweenMax.to('.slide-number span', .2, {
      x: 0,
      delay: .7
    })
    TweenMax.to('.slide-number span', 0, {
      x: '100px',
    })
  
    TweenMax.to('.swiper-slide-active', .5, {
      scale: 1,
      ease: Power4.easeOut,
    })
  
    TweenMax.to('.swiper-slide-active .slide-text', 0, {
      autoAlpha: 1
    })
    TweenMax.to('.swiper-slide-active .slide-number', 0, {
      autoAlpha: 1
    })
  
    TweenMax.to('.swiper-slide-next .slide-text', 0, {
      autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-text', 0, {
      autoAlpha: 0
    })
  
    TweenMax.to('.swiper-slide-next .slide-number', 0, {
      autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-number', 0, {
      autoAlpha: 0
    })
  })
  
  TweenMax.to('.swiper-slide-next .slide-text', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-text', 0, {
    autoAlpha: 0
  })
  
  TweenMax.to('.swiper-slide-next .slide-number', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-number', 0, {
    autoAlpha: 0
  })
  
  TweenMax.to('.swiper-slide', 0, {
    scale: .85,
  })
  TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
  });
});
$(document).ready(function(){
   let alturaHablidades = $('#ver_mas').offset().top;
   let alturaEstudio = $('#estudios').offset().top;
   let alturaLogros = $('#logros').offset().top;
   $(window).on('scroll', function(){
     if($(window).scrollTop() > alturaHablidades){
      $('.indicadores_yo').addClass('menu_pegado');
        if($(window).scrollTop() > alturaHablidades && $(window).scrollTop() < alturaEstudio){
          $('.indicadores_yo ul').addClass('borde1');
          $('.indicadores_yo ul').removeClass('borde2');
        }else if($(window).scrollTop() >= alturaEstudio && $(window).scrollTop() <= alturaLogros){
          $('.indicadores_yo ul').removeClass('borde1');
          $('.indicadores_yo ul').removeClass('borde3');
          $('.indicadores_yo ul').addClass('borde2');
        }else{
          $('.indicadores_yo ul').removeClass('borde2');
          $('.indicadores_yo ul').addClass('borde3');
        }
     }else{
      $('.indicadores_yo').removeClass('menu_pegado');
      $('.indicadores_yo ul').addClass('borde1');
    }
   });
   $('a[href^="#"]').click(function(event){
    event.preventDefault();
    var elem=$(this).attr("href");
    $("html, body").animate({
      scrollTop: $(elem).offset().top
    },500);
  });
  var imgItems = $('.slider_principal li').length;
	var imgPos = 1;
	//var i
	for(var i = 1; i <= imgItems; i++){
		$('.pagination').append('<li></li>');
	}
	$('.slider_habilidades li').hide();
	$('.slider_habilidades li:first-child').show();
	$('.pagination li:first').css({'background-color': '#333'});
	$('.pagination li').click(pagination);
	$('.right').click(nextSlider);
	$('.left').click(prevSlider);
	function pagination(){
		var numeroPagina = $(this).index() + 1;
    $('.slider_habilidades li').css({'transform': 'translateY(-50px)', 'opacity': '0'})
		function hideProduct1(){
			$('.slider_habilidades li').hide();
		} setTimeout(hideProduct1,400);
    function showProduct1(){
			$('.slider_habilidades li:nth-child('+ numeroPagina +')').show();
      $('.slider_habilidades li:nth-child('+ numeroPagina +')').css({'transform': 'translateY(0)', 'opacity': '1'})
		} setTimeout(showProduct1,400);
		$('.pagination li').css({'background-color': '#EBEBEB'});
		$(this).css({'background-color': '#333'});
		imgPos = numeroPagina;
  }
	function nextSlider(){
		if(imgPos >= imgItems){
			imgPos = 1;
		}else{
			imgPos++;
		}
		$('.pagination li').css({'background-color': '#EBEBEB'});
		$('.pagination li:nth-child('+ imgPos +')').css({'background-color': '#333'});
    $('.slider_habilidades li').css({'transform': 'translateY(-50px)', 'opacity': '0'})
		function hideProduct1(){
			$('.slider_habilidades li').hide();
		} setTimeout(hideProduct1,400);
    function showProduct1(){
			$('.slider_habilidades li:nth-child('+ imgPos +')').show();
      $('.slider_habilidades li:nth-child('+ imgPos +')').css({'transform': 'translateY(0)', 'opacity': '1'})
		} setTimeout(showProduct1,400);
	}
	function prevSlider(){
		if(imgPos <= 1){imgPos = imgItems;}
		else{imgPos--;}
		$('.pagination li').css({'background-color': '#EBEBEB'});
    $('.pagination li:nth-child('+ imgPos +')').css({'background-color': '#333'});
    $('.slider_habilidades li').css({'transform': 'translateY(-50px)', 'opacity': '0'})
    function hideProduct1(){
			$('.slider_habilidades li').hide();
		} setTimeout(hideProduct1,400);
    function showProduct1(){
			$('.slider_habilidades li:nth-child('+ imgPos +')').show();
      $('.slider_habilidades li:nth-child('+ imgPos +')').css({'transform': 'translateY(0)', 'opacity': '1'})
		} setTimeout(showProduct1,400);
	}
});
$(document).ready(function(){
    "use strict";
    var card = $('.cont-nombre');
    var card2 = $('.efecto-fondo img:first-child');
    var card3 = $('.efecto-fondo img:last-child');
    $(document).on('mousemove', function (e) {
        var ax = -($(window).innerWidth() / 2 - e.pageX) / 200;
        var ay = ($(window).innerHeight() / 2 - e.pageY) / 200;
        var ax2 = -($(window).innerWidth() / 2 - e.pageX) / 100;
        var ay2 = ($(window).innerHeight() / 2 - e.pageY) / 100;
        card.attr('style', "transform: rotateY(" + ax + "deg) rotateX("+ ay +"deg)");
        card2.attr('style', "transform: translateX(" + ax2 + "px) translateY("+ ay2 +"px) scale(1.2)");
        card3.attr('style', "transform: translateX("+ - + ax2 + "px) translateY("+ - + ay2 +"px) scale(1.2)");
    });
    var i = 0;
    var texto = "Portafolio By Eduwin Tibatá";
    var getTexto = document.getElementById('paraTexto');
    function typing(){
        if(i<texto.length){
            getTexto.innerHTML += texto.charAt(i);
            i++;
            setTimeout(typing,70);
        }
    }
    typing();
    $('.category_item[category="all"]').addClass('ct_item-active');
	  $('.category_item').click(function(){
		  var catProduct = $(this).attr('category');
		  //agregando clase active selectionado
		  $('.category_item').removeClass('ct_item-active');
	  	$(this).addClass('ct_item-active');
		  // OCULTANDO PRODUCTOS =========================
	  	$('.product-imte').css('transform', 'scale(0)');
      function hideProduct(){
        $('.product-imte').hide();
      } setTimeout(hideProduct,400);
      // MOSTRANDO PRODUCTOS =========================
      function showProduct(){
        $('.product-imte[category="'+catProduct+'"]').show();
        $('.product-imte[category="'+catProduct+'"]').css('transform', 'scale(1)');
      } setTimeout(showProduct,400);
  	});
	// MOSTRANDO TODOS LOS PRODUCTOS =======================
	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-imte').show();
			$('.product-imte').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
  });
  $('.product-imte').on('click', function(){
    var catItem = $(this).attr('modalmio');
    function mostrarMiModal(){
      $('.modal[modalmio="'+catItem+'"]').css('display', 'block');
    } setTimeout(mostrarMiModal, 100);
  });
  $('.close').on('click', function(){
    CloseMiModal();
  });
  var flex = document.querySelector('.flex');
  window.addEventListener('click', function(e){
		if(e.target === flex){
			CloseMiModal();
		}
  });
  function CloseMiModal(){
    var catItemClose = $(".modal");
    catItemClose.css('display', 'none');
  }
    if ($(window).width() >= 800){
        var $cursor = $(".cursor"),
            $overlay = $(".project-overlay");
    
          function moveCircle(e) {
            TweenLite.to($cursor, 0.5, {
              css: {
                left: e.pageX,
                top: e.pageY
              },
              delay: 0.03
            });
          }
          $(".p-1").hover(function() {
            $(".cursor").css({ "background-image": "url(assets/img/img15.gif)" });
          });
          $(".p-2").hover(function() {
            $(".cursor").css({ "background-image": "url('assets/img/img14.gif')" });
          });
          $(".p-3").hover(function() {
            $(".cursor").css({ "background-image": "url('assets/img/img16.gif')" });
          });
          $(".p-4").hover(function() {
            $(".cursor").css({ "background-image": "url('assets/img/img17.gif')" });
          });
          $(".p-5").hover(function() {
            $(".cursor").css({ "background-image": "url('assets/img/img13.gif')" });
          });
          var flag = false;
          $($overlay).mousemove(function() {
            flag = true;
            TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
            $($overlay).on("mousemove", moveCircle);
          });
    
          $($overlay).mouseout(function() {
            flag = false;
            TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
          });   
    };
});
$(document).ready(function(){
  if ($(window).width() <= 1000) {  
    var t1 = new TimelineMax({paused: true});
    t1.to(".dos", 0.8, {
        width: 0,
        ease: Expo.easeInOut,
        delay: -0.8,
        opacity: 0,
    });
    t1.to(".uno", 0.8, {
        width: '100%',
        position: 'absolute',
        top: '50%',
        rotation: 45,
        ease: Expo.easeInOut
    });
    t1.to(".tres", 0.8, {
        position: 'absolute',
        width: '100%',
        top: '50%',
        rotation: -45,
        ease: Expo.easeInOut,
        delay: -0.8,
    });
    t1.to(".menu", 2, {
        top: "0%",
        ease: Expo.easeInOut,
        delay: -2
    });
    t1.staggerFrom(".logo-menu", 1, {opacity: 0, ease:Expo.easeOut}, 0.3);
    t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);
    t1.staggerFrom(".redes-sociales", 2, {y: 50, opacity: 0, ease:Expo.easeOut}, 0.3);
    t1.reverse();
    $(document).on("click", ".icon-menu", function() {
        t1.reversed(!t1.reversed());
    });
    $(document).on("click", ".menu a", function() {
        t1.reversed(!t1.reversed());
    });
  }else{
    TweenMax.from(".logo-menu", 2, {
        delay: 2,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut
    });
    TweenMax.staggerFrom(".menu ul li", 2, {
        delay: 2.2,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut
    }, 0.1);
    TweenMax.staggerFrom(".redes-sociales a", 2, {
        delay: 2.4,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut
    }, 0.1);
  };
});
var imgIndex = $('.cont-nombre img');
  var oneSpan = $('.titulo span:first-child');
  var twoSpan = $('.titulo span:last-child');
  var titulo = $('.titulo2');
  var oneSpan2 = $('.cont-nombre h2 span:first-child');
  var twoSpan2 = $('.cont-nombre h2 span:last-child');
  var titulo3 = $('.conticle h1');
  TweenMax.from(imgIndex, 2, {
      autoAlpha: 0, 
      ease: Expo.easeInOut, 
      delay: 2
  });
  TweenMax.from(oneSpan, 2, {
      x: -15, 
      autoAlpha: 0, 
      ease: Expo.easeInOut, 
      delay: 1
  });
  TweenMax.from(twoSpan, 2, {
      x: 15, 
      autoAlpha: 0, 
      ease: Expo.easeInOut, 
      delay: 2.5
  });
  TweenMax.from(oneSpan2, 2, {
      x: -15, 
      autoAlpha: 0, 
      ease: Expo.easeInOut, 
      delay: 3
  });
  TweenMax.from(twoSpan2, 2, {
      x: 15, 
      autoAlpha: 0, 
      ease: Expo.easeInOut, 
      delay: 3.5
  });
  TweenMax.from(titulo, 2, {
      x: 15, 
      autoAlpha: 0, 
      ease: Expo.easeInOut, 
      delay: 1
  });
  TweenMax.from(titulo3, 2, {
      x: 15, 
      autoAlpha: 0, 
      ease: Expo.easeInOut, 
      delay: 1,
  });

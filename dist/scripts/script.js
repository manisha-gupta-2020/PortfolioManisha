$(document).ready(function(){
// window.document.write('in js file');
    let $btns=$('.project-area .button-group button');
    $btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({filter:selector});
    return false;
    });
    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        // other options
        gallery:{enabled:true}
      });

      //owl carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{items:1},
            544:{items:2}
        }
    })

    //sticky navigation menu
    let nav_offset_top = $('.header-area').height() + 50;
    function navbarFixed(){
        if($('.header-area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header-area .main-menu').addClass('navbar_fixed');
                }else {
                    $('.header-area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
    //closing navbar collapse on clicking. was giving error
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });

    //hide section more about me, show if user clicks
    $('#idMoreAboutMe').hide();
    $('#readMore a').click(function(e){
        e.preventDefault();
        if($('#idMoreAboutMe').is(':visible')){
            $('#idMoreAboutMe').hide();
            $('#readMore a').html('Read it again');
        } else {
            $('#idMoreAboutMe').show();
            $('#readMore a').html('Close');
        }
    });

    // stop default behavior on button clicks

    $('#idAnime1 a').click(function(e){
        e.preventDefault();
    });
    $('#idTicTacToe a').click(function(e){
        e.preventDefault();
    });
    $('#idCoinToss a').click(function(e){
        e.preventDefault();
    });

    $('#idContact').click(function(e){
        e.preventDefault();
    });
    $('#idSubmitContact').click(function(e){
        e.preventDefault();
    });

    //disabling footer links
    $('#idFLogo a').click(function(e){   e.preventDefault();  });
    $('#idFB').click(function(e){   e.preventDefault();  });    
    $('#idLN').click(function(e){   e.preventDefault();  });
    $('#idGH').click(function(e){   e.preventDefault();  });
    $('#idIN').click(function(e){   e.preventDefault();  });


    // //animation on jumbotron words
    // $('#idFast')
    // .css({right: '400px'})
    // .delay(1000)
    // .animate({left})
});
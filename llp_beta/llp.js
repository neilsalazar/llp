//llp js
/*jshint esversion: 6 */

//mobile navigation
jQuery(window).on('load',function() {

  const mobNav = $('nav');
  $('.logoWrapper').click( () => {
    if(mobNav.css('height') == '0px') {
      mobNav.css('height','100vh');
    } else {
      mobNav.css('height','0px');
    }
  });
  $('.mobNav li a').click( () => {
    // console.info('clicked');
    if($(window).width() < 1024 && mobNav.css('height') > '0px') {
      // console.info('true');
      mobNav.css('height','0px');
    }
  });

  //sticky sections
  const aboutStick = $('.aboutSect .leftCol');
  const aboutStickPos = aboutStick.offset().top;
  const galleryNavStick = $('.deskGalleryNav');
  const galleryNavStickPos = galleryNavStick.offset().top;
  const weddingStick = $('.weddingCol');
  const weddingStickPos = weddingStick.offset().top;
  const engagementStick = $('.engagementCol');
  const engagementStickPos = engagementStick.offset().top;
  const portraitStick = $('.portraitCol');
  const portraitStickPos = portraitStick.offset().top;

  const pricingStick = $('.pricingSect .mainCol');
  const pricingStickPos = pricingStick.offset().top;

  const pricingLeftNav = $('.pricingSect .leftCol');

  const galleryLinks = $('.deskGalleryNav .galNav li a');

  $(window).scroll( () => {
    let windowScrollPos = $(window).scrollTop();

    // console.info(`windowScrollPos: ${windowScrollPos}, weddingStickPos: ${weddingStickPos}, engagementStickPos: ${engagementStickPos}, portraitStickPos: ${portraitStickPos} `);
    if(galleryNavStickPos <= windowScrollPos) {
      galleryNavStick.addClass('stickIt');
    } else {
      galleryNavStick.removeClass('stickIt');
    }

    if(aboutStickPos <= windowScrollPos) {
      aboutStick.addClass('stickIt');
    } else {
      aboutStick.removeClass('stickIt');
    }

    if(weddingStickPos <= windowScrollPos) {
      weddingStick.addClass('stickIt');
      if(engagementStickPos > windowScrollPos) {
        $('.weddingLink').addClass('selectedGal');
      } else {
        $('.weddingLink').removeClass('selectedGal');
      }
    } else {
      weddingStick.removeClass('stickIt');
      $('.weddingLink').removeClass('selectedGal');
    }

    if(engagementStickPos <= windowScrollPos) {
      engagementStick.addClass('stickIt');
      if(portraitStickPos > windowScrollPos) {
        $('.engagementLink').addClass('selectedGal');
      } else {
        $('.engagementLink').removeClass('selectedGal');
      }
    } else {
      engagementStick.removeClass('stickIt');
      $('.engagementLink').removeClass('selectedGal');
    }

    if(portraitStickPos <= windowScrollPos -1 ) {
      $('.portraitLink').addClass('selectedGal');
      portraitStick.addClass('stickIt');
    } else {
      portraitStick.removeClass('stickIt');
      $('.portraitLink').removeClass('selectedGal');
    }

    if(pricingStickPos <= windowScrollPos) {
      pricingStick.addClass('stickItRight');
      aboutStick.add(galleryNavStick).add(weddingStick).add(engagementStick).removeClass('stickIt');
      if($(window).width() < 1024) {
        $('.pricingSect').css('height','auto');
      }
      portraitStick.removeClass('stickIt');
      curtainFunc();
    } else {
      pricingStick.removeClass('stickItRight');
      $('.pricingSect').css('height','100vh');
      // portraitStick.removeClass('stickIt');
    }
  });

  // $('.galLink').click(function(){
  //   console.info($(this));
  //   let thisLink = $(this);
  //   setTimeout(function() {
  //     galleryLinks.removeClass('selectedGal');
  //     thisLink.addClass('selectedGal');
  //   },100);
  // });
  $('.galLink').click( () => {
    let thisLink = $(event.currentTarget);
    setTimeout(() => {
      galleryLinks.removeClass('selectedGal');
      thisLink.addClass('selectedGal');
    }, 100);
  });

  const curtainFunc = function() {
    if($('.pricingSect .mainCol').css('position') == 'fixed') {
      if($(window).scrollTop() >= pricingLeftNav.offset().top + pricingLeftNav.outerHeight() - window.innerHeight) {
        // console.info('end reached');
        portraitStick.removeClass('stickIt');
        $('.pricingSect .mainCol').addClass('curtainCall');
      } else {
        if($('.pricingSect .mainCol').css('position') == 'absolute') {
        }
      }
    } else if($('.pricingSect .mainCol').css('position') == 'absolute' && $(window).scrollTop() <= pricingLeftNav.offset().top + pricingLeftNav.outerHeight() - window.innerHeight) {
      $('.pricingSect .mainCol').removeClass('curtainCall');
    }
  };

    $('.mainCol img').click(function() {
      window.open($(this).attr('src'));
    });

});

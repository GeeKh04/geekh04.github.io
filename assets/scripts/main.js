// Variables for responsive and page scrolling
var winHeight, winWidth,
  isMobile = false,
  isTablet = false,
  frameIndex = 1,
  pageScrolling = false,
  slider = $('.usp-copy-slider'),
  scrollPosArr = [],
  sectionPositionsCalculated = false;

$(document).ready(function () {
  load();
  checkResponsive();
  generateWaves();
  qualitiesHover();
  qualitiesHover2();
  initAccordion();
  initHome();
  fileUploadHandler();
  aboutGifMovement();
  sliderButton();
  //showModal();
  closeModal();

  // Fancybox
  $("[data-fancybox]").fancybox({});
  // WOW ANIMATION
  var wow = new WOW({
    mobile: false  // trigger animations on mobile devices (default is true)
  });
  wow.init();
});

function load(){
  var translate = new Translate();
  var currentLng = 'en';//'fr'
  var attributeName = 'data-lang';
  translate.init(attributeName, currentLng);
  translate.process(); 
}

function checkResponsive() {
  winHeight = $(window).height();
  winWidth = $(window).width();
  if (winWidth < 800) {
    isMobile = true;
    initSectionPositions();
    setTimeout(function () {
      labCopyAnimation();
    }, 3500);
    mobileHeaderEvent();
  } else
    isMobile = false;

  if (winWidth > 800 && winWidth < 1024) {
    isTablet = true;
    initSectionPositions();
    labCopyAnimation();
  } else
    isTablet = false;
}

function mobileHeaderEvent() {
  var scrollTop;
  if ($('.body').hasClass('home-page'))
    $(window).scroll(function (e) {
      scrollTop = $(window).scrollTop();
      if (scrollTop > winHeight)
        showWhiteLogo();
      else
        hideWhiteLogo();
    })
}
// Function to detect desktop or mobile and control waves accordingly
function generateWaves() {
  var bones = 17;

  $(".waves-wrapper").each(function () {
    var wavesColor = $(this).attr('data-waves-color');
    if (isMobile == true) {
      bones = 7;
    }
    var current = $(this).parent().prop('className');
    $('.' + current + ' .waves-wrapper .waves').wavify({
      height: 100,
      bones: bones,
      amplitude: 30,
      color: wavesColor,
      speed: .15
    });
  });

}

function initHome() {
  initOwlCarousel();
  detectMouseWheel();
}

function initSectionPositions() {
  if (sectionPositionsCalculated == false) {
    var eleScrollPos, eleDataID, ele;
    $('.section-animate').each(function () {
      ele = $(this);
      eleScrollPos = ele.offset().top;
      eleDataID = ele.attr('data-id');
      scrollPosArr.push([eleDataID, eleScrollPos - $(window).height() * 1.4]);
    });

    detectSectionPosition();
    sectionPositionsCalculated = true;
  }
}

function detectSectionPosition() {
  var windowScrollTop;
  $(window).scroll(function () {
    windowScrollTop = $(window).scrollTop();
    for (var i = 0; i < scrollPosArr.length; i++) {
      if ((i + 1) == scrollPosArr.length && windowScrollTop > scrollPosArr[i][1])
        $('[data-id="' + scrollPosArr[i][0] + '"]').addClass('animate');
      else if (windowScrollTop >= scrollPosArr[i][1] && windowScrollTop <= scrollPosArr[i + 1][1]) {
        $('[data-id="' + scrollPosArr[i][0] + '"]').addClass('animate');
      }
    }
  });
}

function detectMouseWheel() {
  $('body').on('mousewheel DOMMouseScroll', function (e) {
    // ScrollDown
    if (e.originalEvent.wheelDelta / 120 < 0 || e.originalEvent.detail > 0) {
      if ($(window).scrollTop() == 0 && $('body').hasClass('no-scroll')){
        toggleHero();
      }
    } 
    // ScrollUp
    else {
      if ($(window).scrollTop() == 0 && $('body').hasClass('hide-hero')){
        $('body').removeClass('hide-hero');
        $('body').addClass('no-scroll');
        ///toggleHero();
      }
    }
    if (isMobile == false) {
      changeHeaderLogo();
    } else {
      $('.header-wrapper').addClass('white-bg');
    }
  });
}

function toggleHero() {
  //if (pageScrolling == false) {
    initSectionPositions();
    //pageScrolling = true;
    $('body').addClass('hide-hero');
    setTimeout(function () {
      $('body').removeClass('no-scroll');
      labCopyAnimation();
    }, 500);
  //}
}

// Function for middle frame's copy animations
function labCopyAnimation() {
  $('.lab-copy').removeClass('hide').addClass('animate');
  setTimeout(function () {
    pageScrolling = false;
  }, 3000);
}

// Variables declared to add source to gif images when Swiggyit slider button is made active
var srcMan = 'assets/images/geekh-guy.gif',
  srcArm = 'assets/images/geekh-arm.gif';

// Slider button function
function sliderButton() {
  $('.slider .drag').draggable({
    axis: 'x',
    containment: 'parent',
    drag: function (e, ui) {
      var slider = $(this).parent();
      var toggleHover = (slider.hasClass('enabled')) ? (ui.position.left <= $(this).outerWidth()) : (ui.position.left >= (slider.outerWidth() - $(this).outerWidth() * 2));
      slider.addClass('active');
      slider.toggleClass('hover', toggleHover);
    },
    stop: function (e, ui) {
      var slider = $(this).parent();
      if (slider.hasClass('enabled')) {
        if (ui.position.left > $(this).outerWidth()) {
          $(this).animate({
            left: (slider.outerWidth() - $(this).outerWidth())
          });
          slider.removeClass('hover');
          slider.removeClass('active');
  
        } else {
          $(this).animate({
            left: 0
          });
          slider.removeClass();
        }
      } else {
        if (ui.position.left < (slider.outerWidth() - $(this).outerWidth() * 2)) {
          $(this).animate({
            left: 0
          });
          slider.removeClass('hover');
          slider.removeClass('active');
        } else {
          $(this).animate({
            left: 0
          });
          slider.removeClass().addClass('enabled');
          $('.slider').addClass('enabled');
          $('.slider .drag').draggable('disable');
          if (isMobile == true) {
            resetImages();
            mobileAnimations();
            setTimeout(function () {
              $('.slider .drag').draggable('enable');
              slider.removeClass();
              $('.slider').removeClass('enabled');
              setTimeout(function () {
                $('.notifications').removeClass('notify-1');
              }, 1000);
            }, 6500);
          } else {
            resetImages();
            webAnimations();
            setTimeout(function () {
              $('.slider .drag').draggable('enable');
              slider.removeClass();
              $('.slider').removeClass('enabled');
            }, 8500);
          }
        }
      }
    }
  });
}

function resetImages() {
  $('.drone-wrapper').removeClass('drone-animation drone-animation-mob');
  $('.cup').removeClass('cup-disappear cup-disappear-mob');

  $('.geekh-man').removeClass('arrive').addClass('disappear');
  $('.geekh-man').attr('src', '');

  $('.geekh-arm').removeClass('arrive').addClass('disappear');
  $('.geekh-arm').attr('src', '');

  $('.cup-with-shadow').removeClass('cup-appear cup-appear-mob');
  $('.notifications').removeClass('notify-1 notify-2 notify-3');
  $('.block-1').removeClass('notification-disappear');
}

// Function to reveal all animations in the first frame when desktop is detected
function webAnimations() {
  setTimeout(function () {
    $('.drone-wrapper').addClass('drone-animation');
    $('.geekh-man').removeClass('disappear').addClass('arrive');
    $('.geekh-man').attr('src', srcMan);
    setTimeout(function () {
      $('.notifications').addClass('notify-1');
      $('.block-1').addClass('notification-appear');
      // Download CV
      var link=document.createElement('a');
      document.body.appendChild(link);
      link.href="./docs/rida_khouna_cv.pdf";
      link.download="rida_khouna_cv";
      link.click();
      document.body.removeChild(link);
    }, 500);

    setTimeout(function () {
      $('.geekh-arm').removeClass('disappear').addClass('arrive');
      $('.geekh-arm').attr('src', srcArm);
    }, 1500);

    $('.cup').addClass('cup-disappear');
    $('.cup-with-shadow').removeClass('disappear').addClass('cup-appear');

    setTimeout(function () {
      $('.block-1').removeClass('notification-appear').addClass('notification-disappear');
    }, 3000);

  }, 500);
}

// Function to reveal all animations in the first frame when mobile is detected
function mobileAnimations() {
  setTimeout(function () {
    $('.drone-wrapper').addClass('drone-animation-mob');
    $('.cup').addClass('cup-disappear-mob');
    $('.cup-with-shadow').removeClass('disappear').addClass('cup-appear-mob');

    $('.geekh-man').removeClass('disappear').addClass('arrive');
    $('.geekh-man').attr('src', srcMan);

    setTimeout(function () {
      $('.geekh-arm').removeClass('disappear').addClass('arrive');
      $('.geekh-arm').attr('src', srcArm);

    }, 1500);

    $('.notifications').addClass('notify-1');
    $('.block-1').addClass('notification-appear');

    setTimeout(function () {
      $('.block-1').removeClass('notification-appear').addClass('notification-disappear');
    }, 3000);

  }, 500);
}

// Function to reveal or hide menu when hamburger button clicked
function toggleMenu() {
  var navLength;

  $('header').toggleClass('show');
  if ($('header').hasClass('show')) {
    navLength = $('.nav-item').length;
    var menuItemIndex = 1;
    var menuItemVar = setInterval(function () {
      $('.nav-item:nth-child(' + menuItemIndex + ')').addClass('show');
      if (menuItemIndex == navLength)
        clearInterval(menuItemVar);
      menuItemIndex++;
    }, 150);
  } else {
    $('.nav-item').removeClass('show');
  }
  if (isMobile == true) {
    $('.logo').toggleClass('logo-active');
    $('.logo-white').toggleClass('logo-active');
  }
}

// Function to change the header logo and menu to white based on the section background
function changeHeaderLogo() {
  if ($('body').hasClass('hide-hero')) {
    $('.logo').removeClass('logo-active');
    $('.logo-white').addClass('logo-active');
  } else {
    $('.logo-white').removeClass('logo-active');
    $('.logo').addClass('logo-active');
  }
}

function showWhiteLogo() {
  $('.logo').removeClass('logo-active');
  $('.logo-white').addClass('logo-active');
  $('.hamburger-box').addClass('white');
}

function hideWhiteLogo() {
  $('.logo-white').removeClass('logo-active');
  $('.logo').addClass('logo-active');
  $('.hamburger-box').removeClass('white');
}

// Function to initialize owl carousel
function initOwlCarousel() {
  slider.owlCarousel({
    loop: true,
    autoWidth: true,
    items: 3,
    center: true,
    margin: 100,
    dots: true,
    dotsEach: true,
    dotsSpeed: 700,
    autoplay: false,
    touchDrag: true,
    responsive: {
      750: {
        items: 1
      }
    }
  });

  slider.on('initialized.owl.carousel changed.owl.carousel', function (e) {
    var totalItems = $('.owl-dot').length;
    var currentItem = $('.owl-dots .active').index() + 1;
    if (currentItem <= totalItems) {
      $('.slider-current').html(currentItem);
      $('.slider-total').html('/ ' + totalItems);
    } else {
      $('.slider-current').html(1);
      $('.slider-total').html('/ ' + totalItems);
    }
  });
}

// Function to activate the list item on hover and change corresponding image in the Qualities section
function qualitiesHover() {
  var list = $('.qualities .quality');

  list.hover(function () {
    list.removeClass('active');
    $(this).addClass('active');

    var qualityName = ($('.active .qib1 span').attr('id'));
    $('.qualities-image-list-wrapper .work-copy2').removeClass('show');
    $('.qualities-image-list-wrapper .' + qualityName).addClass('show');
  });
}

function qualitiesHover2() {
  var $container = $('.portfolioContainer');
  $container.isotope({
    filter: '*',
    animationOptions: {
      queue: true
    }
  });

  /*$('.portfolio-nav1 li').mouseover(function () {
    $('.portfolio-nav1 .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        queue: true
      }
    });
    return false;
  });*/


  var list = $('.qualities1 .quality');

  list.hover(function () {
    list.removeClass('active');
    $(this).addClass('active');

    /*var qualityName = ($('.active .qib2 span').attr('id'));
    if(qualityName=='all'){
      $('.qualities-image-list-wrapper .work-copy1').addClass('show');
    } else{
      $('.qualities-image-list-wrapper .work-copy1').removeClass('show');
      $('.qualities-image-list-wrapper .' + qualityName).addClass('show');
    }*/
    
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        queue: true
      }
    });
  });
}

// Job And Education
function initAccordion() {
  $('.job-accordion').click(function () {
    $(this).toggleClass('active');
    $(this).find('.fa').toggleClass('turn');
  });
}


//Processing errors in forms
var processingForm = false;

function processForm() {
  if (processingForm == false) {
    processingForm = true;
    //To remove errors from all fields before validating
    $('.form-field').removeClass('form-error');
    //Checking each form-input
    var ele, formInput, inputType, inputRequired, validateResponse, errorFree;
    errorFree = true;
    $('.form-field').each(function () {
      ele = $(this);
      inputType = ele.attr('data-type');
      validateResponse = validateInput(ele, inputType, true);

      if (validateResponse != 'success') {
        //Add the error class for the particular input
        ele.removeClass('form-error').addClass(validateResponse);
        errorFree = false;
      } else
        //Remove all errors it's a successful input
        ele.removeClass('form-error');
    });

    //Check if the form is error free
    if (errorFree) {
      return errorFree;
    } else {
      showStatusMessage('error');
      processingForm = false;
    }
  }

  $('.form-field').on('click', function () {
    $(this).removeClass('form-error');
  });
}

function showStatusMessage(status) {
  $('.site-status-wrapper span').removeClass('show');
  $('.site-status-wrapper').addClass('show');
  $('.' + status + '-message').addClass('show');

  setTimeout(function () {
    removeStatusMessage();
  }, 5000);
}

function removeStatusMessage() {
  $('.site-status-wrapper span').removeClass('show');
  $('.site-status-wrapper').removeClass('show');
}

function clearForm() {
  var ele;
  $('.form-field').each(function () {
    ele = $(this);
    ele.removeClass('form-error');
    ele.val('');
  });
}


//Generic function to check any type of input
function validateInput(formInput, inputType, inputRequired) {
  var inputVal, hasUpdatedVal;
  switch (inputType) {
    case 'text':
    case 'date':
    case 'password':
      inputVal = formInput.val();
      //To check if it's required and empty
      if (inputRequired == true && !inputVal.length) return 'form-error';
      return 'success';
      break;
    case 'email':
      //To check if it's required and empty
      inputVal = formInput.val();
      if (inputRequired == true && !inputVal.length) return 'form-error';
      //Check if email is valid
      var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!filter.test($.trim(inputVal))) return 'form-error';
      return 'success';
      break;
    case 'number':
      //To check if it's required and empty
      inputVal = formInput.val();
      if (inputRequired == true && !inputVal.length) return 'form-error';
      return 'success';
      break;
    case 'mobile-number':
      //To check if it's required and empty
      inputVal = formInput.val();
      if (inputRequired == true && !inputVal.length) return 'form-error';
      //To check if contact number is valid
      if (inputVal.length != 10) return 'form-error';
      return 'success';
      break;
    case 'dropdown':
      //To check if it's required and default value
      hasUpdatedVal = formInput.closest('.form-element').hasClass('selected');
      if (inputRequired == true && hasUpdatedVal == false) return 'form-error';
      return 'success';
      break;
    case 'multi-tag':
      //Check if any tags exist
      if (inputRequired == true && formInput.closest('.custom-multi-tag-input').find('.custom-tag').length == 0) return 'form-error';
      return 'success';
      break;
  }
  return 'success';
}

function fileUploadHandler() {
  $('.upload-btn-wrapper input[type="file"]').on('change', function () {
    $('.upload-btn-wrapper input[type="text"]').val($(this).val().replace(/C:\\fakepath\\/i, ''));
  });
  $('.upload-btn-wrapper span').on('click', function () {
    $('.upload-btn-wrapper input[type="text"]').val($('.upload-btn-wrapper input[type="file"]').val().replace(/C:\\fakepath\\/i, ''));
  });

}

function closeMobileMenu() {
  if (isMobile)
    toggleMenu();
}

function aboutGifMovement() {
  $('.work-copy ol li:nth-child(1)').mouseover(function () {
    $('.work-img-wrapper').removeClass('move-2 move-3').addClass('move-1');
  });
  $('.work-copy ol li:nth-child(2)').mouseover(function () {
    $('.work-img-wrapper').removeClass('move-1 move-3').addClass('move-2');
  });
  $('.work-copy ol li:nth-child(3)').mouseover(function () {
    $('.work-img-wrapper').removeClass('move-2 move-1').addClass('move-3');
  });
}
/***********************************************************************************************/
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
function showModal(id) {
  //disableScroll();
  $("#modal_container"+id).show();
  /*$("#project1_popup").on('click',function () {  // Custom Show button code.
    /*disableScroll();*
    //$("#modal_container").show();
  });*/
}
function closeModal() {
  $(".modal_close").click(function () {  // close button code. 
    let id = $(this).attr('id');
    //enableScroll();
    $("#modal_container"+id).fadeOut("slow");
  });

  $(".mixed-bunch").click(function (e) {  // Close, when click outside of the box
    if (e.target !== this) {
      return;
    }
    else {
      let id = $(this).attr('id');
      enableScroll();
      $("#modal_container"+id).fadeOut("slow");
    }
  });
}

<template>
  <div class="main-container">
    <HeaderForOffCanvas @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" />

    <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <HeroService />

    <div class="flexale-image ptb--150 swiper-custom-arrow swiper-custom-dots ptb-md--80 ptb-sm--60 move-up wow">
      <FlexibleSliderFour />
    </div>
    <CurveShape>
      <template v-slot:bgcolor>
        <path style="fill: #fff;
                    stroke-miterlimit:10;" d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z" />
      </template>
    </CurveShape>

    <EssentialTestimonial1 />

    <!-- <PortfolioItemFilter /> -->

    <div id="about">
      <EssentialService />
    </div>

    <EssentialTestimonial2 />

    <div id="contact">
      <ContactUsThree />
    </div>

    <FooterTwo />

  </div>
</template>
<script>
  import ContactUsThree from '../components/landing/ContactUsThree.vue';
  import CurveShape from '../components/landing/CurveShape.vue';
  import EssentialService from '../components/landing/EssentialService.vue';
  import EssentialTestimonial1 from '../components/landing/EssentialTestimonial1.vue';
  import EssentialTestimonial2 from '../components/landing/EssentialTestimonial2.vue';
  import FooterTwo from '../components/landing/FooterTwo.vue';
  import HeroService from '../components/landing/HeroService.vue';
  import HeaderForOffCanvas from '../components/landing/HeaderForOffCanvas.vue';
  import MobileNavigation from '../components/landing/MobileNavigation.vue';
  import OffcanvasMenu from '../components/landing/OffcanvasMenu.vue';
  import OffCanvasMobileMenu from '../components/landing/OffCanvasMobileMenu.vue';
  import PortfolioItemFilter from '../components/landing/PortfolioItemFilter.vue';
  import FlexibleSliderFour from '../components/landing/FlexibleSliderFour.vue';
  export default {
    components: {
      ContactUsThree,
      CurveShape,
      EssentialService,
      EssentialTestimonial1,
      EssentialTestimonial2,
      PortfolioItemFilter,
      FooterTwo,
      HeaderForOffCanvas,
      HeroService,
      MobileNavigation,
      OffcanvasMenu,
      OffCanvasMobileMenu,
      FlexibleSliderFour
    },

    data() {
      return {
        navOpen: false,
        searchOpen: false,
        fullpageOpen: false,

        swiperOption: {

          loop: true,
          speed: 1000,
          mousewheel: true,
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }

          ,
        }

        ,
      }
    }

    ,

    head() {
      return {
        title: 'Home'
      }
    }

    ,
  }

  ;

</script>
<style>
/* TODO section css */
  .section {
    height: 100vh;
  }

  html {
    scroll-behavior: smooth;
    background-color: #D7D2C9
  }

  p,
  a,
  span,
  input {
    font-family: 'Comfortaa', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  .accent,
  .heading {
    font-family: 'Righteous', sans-serif;
  }

  body {
    background-color: #D7D2C9;
  }

  .neubrutalist {
    -webkit-box-shadow: 20px 20px 3px 5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 20px 20px 3px 5px rgba(0, 0, 0, 0.75);
    box-shadow: 20px 20px 3px 5px rgba(0, 0, 0, 0.75);
    border-radius: 1%;
    border: 1px solid #fff;
  }

  .btn-primary {
    background-color: #000;
    color: #fff;
    border-color: #000;
    border-radius: 1%;
  }

  .btn-primary:hover {
    background-color: #fff;
    border-color: #fff;
    color: #000;
  }

  .form-select {
    background: #fff;
  }

  .single-contact-address .address p {
    color: #000;
  }

  .single-contact-address .address p,
  .single-contact-address .mail-phone p a,
  .single-contact-address .social-share p a {
    color: #000;
  }

  .social-icon.tooltip-layout li a {
    color: #000
  }

  .has-center-content .has-centerinner .content h1.heading::before {
    background-color: #fff;
  }

  .has-center-content .has-centerinner .content .read-more-btn a i {
    color: #000;
  }

  a span {
    color: #5B5B5B;
  }

  a span:hover {
    color: #fff;
  }

  i::before {
    color: #fff;
  }

  .manu-hamber div i::before {
    color: #000;
  }

  .swiper-custom-arrow .swiper-btn:hover {
    background-color: #000;
  }

  .messonry-button button:hover span.filter-text {
    color: #fff;
  }

  .portfolio.portfolio_style--1 .port-overlay-info {
    background-color: #000;
  }

  .contact-form--2 {
    background-color: #D7D2C9;
  }

  body.template-color-1 .contact-form input[type=submit],
  body.template-color-1 .contact-form textarea[type=submit] {
    background-color: #000;
    color: #fff;
    border-color: #000;
    border-radius: 1%;
    font-family: 'Comfortaa', sans-serif;
    font-size: 1rem;
  }

  body.template-color-1 .contact-form input[type=submit]:hover,
  body.template-color-1 .contact-form textarea[type=submit]:hover {
    background-color: #fff;
    color: #000;
    border-color: #fff;
  }

  .page-footer {
    background-color: #5B5B5B;
  }

  .heading-13 {
    font-size: 1.5rem;
  }

  .menu-content {
    background-color: #D7D2C9
  }

  .service.service--1.text-center.mt--30.neubrutalist {
    background: #D7D2C9;
    border: 1px solid #000;
  }

  .service.service--1::before {
    border-color: #000
  }

  body.template-color-1 .service.service--1:hover::before {
    border-color: #fff
  }

  .service>.icons i::before {
    color: #000;
  }

  body.template-font-1 .heading,
  body.template-font-1 h1,
  body.template-font-1 h2,
  body.template-font-1 h3,
  body.template-font-1 h4,
  body.template-font-1 h5,
  body.template-font-1 h6,
  body.template-font-1 .h1,
  body.template-font-1 .h2,
  body.template-font-1 .h3,
  body.template-font-1 .h4,
  body.template-font-1 .h5,
  body.template-font-1 .h6 {
    font-family: 'Righteous', sans-serif;
  }

</style>

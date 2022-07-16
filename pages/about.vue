<template>
  <div class="main-container">

    <HeaderForOffCanvas @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" />

    <OffcanvasMenu :class="{ 'is-visiable': fullpageOpen }" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <AboutBreadcrumbFour />

    <ServiceTwo />

    <WhatWeDoThree />

    <FooterTwo />

  </div>
</template>

<script>
import OffcanvasMenu from '../components/landing/OffcanvasMenu.vue';
import ServiceTwo from '../components/about/ServiceTwo.vue';
import WhatWeDoThree from '../components/about/WhatWeDoThree.vue';

export default {
  components: {
    HeaderForOffCanvas: () => import("@/components/landing/HeaderForOffCanvas"),
    OffCanvasMobileMenu: () => import("@/components/landing/OffCanvasMobileMenu"),
    AboutBreadcrumbFour: () => import("@/components/about/AboutBreadcrumbFour"),
    FooterTwo: () => import("@/components/landing/FooterTwo"),
    OffcanvasMenu,
    ServiceTwo,
    WhatWeDoThree
},

  data() {
    return {
      navOpen: false,
      searchOpen: false,
      fullpageOpen: false,
    }
  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1')
  },

  head() {
    return {
      title: 'About Us'
    }
  },
};
</script>
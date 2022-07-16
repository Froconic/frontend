<template>
  <div class="main-container">

    <HeaderForOffCanvas @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" />

    <OffcanvasMenu :class="{ 'is-visiable': fullpageOpen }" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

    <ContactUsBreadcrumb />

    <ContactUsThree />

    <FooterTwo />

  </div>
</template>

<script>
import ContactUsThree from '../components/landing/ContactUsThree.vue';
import OffcanvasMenu from '../components/landing/OffcanvasMenu.vue';

export default {
  components: {
    HeaderForOffCanvas: () => import("@/components/landing/HeaderForOffCanvas"),
    OffCanvasMobileMenu: () => import("@/components/contact/OffCanvasMobileMenu"),
    ContactUsBreadcrumb: () => import("@/components/contact/ContactUsBreadcrumb"),
    FooterTwo: () => import("@/components/landing/FooterTwo"),
    ContactUsThree,
    OffcanvasMenu
},

  data() {
    return {
      navOpen: false,
      searchOpen: false,
      fullpageOpen: false,
    }
  },

  head() {
    return {
      title: 'Contact'
    }
  },
};
</script>
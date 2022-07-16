<template>

  <div class="main-container">

    <HeaderVerticle @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

    <HeroFullscreen />

  </div>

</template>

<script>
export default {
  components: {
    HeaderVerticle: () => import('@/components/events/HeaderVerticle'),
    OffCanvasMobileMenu: () => import('@/components/events/OffCanvasMobileMenu'),
    HeroFullscreen: () => import('@/components/events/HeroFullscreen')
  },
  data() {
    return {
      navOpen: false
    }
  },
  head() {
    return {
      title: 'Events'
    }
  },
};
</script>
<template>

    <div class="main-container">

        <HeaderVerticle @togglenav="navOpen = !navOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
        
        <HeroFullscreen />

    </div>

</template>

<script>
    export default {
        components: {
            HeaderVerticle: () => import('@/components/HeaderVerticle'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroFullscreen: () => import('@/components/HeroFullscreen')
        },
        data() {
            return {
                navOpen: false
            }
        },
        head() {
            return {
                title: 'Portfolio Fullscreen Slider'
            }
        },
    };
</script>
<template>
    <div class="main-container">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <AboutBreadcrumbThree />

        <WhatWeDoTwo />

        <CounterUpTwo />

        <FlexibleSliderTwo />

        <VideoOne />

        <TestimonialThree addClass="ptb--150 ptb-md--80 ptb-sm--60 bg_color--7" />

        <AccordionOne />

        <BrandLogoCarousel class="pt-0 pb--100 pb_md--80 pb_sm--60" />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            AboutBreadcrumbThree: () => import('@/components/AboutBreadcrumbThree'),
            WhatWeDoTwo: () => import('@/components/WhatWeDoTwo'),
            CounterUpTwo: () => import('@/components/sections/CounterUpTwo'),
            FlexibleSliderTwo: () => import('@/components/FlexibleSliderTwo'),
            VideoOne: () => import('@/components/VideoOne'),
            TestimonialThree: () => import('@/components/sections/TestimonialThree'),
            AccordionOne: () => import('@/components/sections/AccordionOne'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'About Us 03'
            }
        },
    };
</script>
<template>
    <div class="main-container">

        <HeaderAbout @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <AboutBreadcrumb />

        <WhatWeDo />

        <AboutSkill />

        <FlexibleSlider />

        <div class="brook-gradation-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1 basic-thine-line">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bk-title--default text-center">
                            <h5 class="heading heading-h5 theme-color">How We Do</h5>
                            <div class="bkseparator--30"></div>
                            <h3 class="heading heading-h3">Creative Procedure</h3>
                        </div>

                        <GradationOne />
                    </div>
                </div>
            </div>
        </div>

        <TestimonialTwo />

        <BrandLogoCarousel />

        <CallToAction />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            AboutBreadcrumb: () => import('@/components/AboutBreadcrumb'),
            WhatWeDo: () => import('@/components/WhatWeDo'),
            AboutSkill: () => import('@/components/AboutSkill'),
            FlexibleSlider: () => import('@/components/FlexibleSlider'),
            GradationOne: () => import('@/components/GradationOne'),
            TestimonialTwo: () => import('@/components/sections/TestimonialTwo'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            CallToAction: () => import('@/components/CallToAction'),
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
                title: 'About Us 01'
            }
        },
    };
</script>
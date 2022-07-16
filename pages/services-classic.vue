<template>
    <div class="main-container">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <ServiceClassicBreadcrumb />

        <ServiceIconBoxOne />

        <div class="brook-gradation-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-section-title text-center">
                            <h6 class="heading heading-h6 theme-color">HOW WE DO</h6>
                            <div class="bkseparator--35"></div>
                            <h3 class="heading heading-h3">Work process</h3>
                        </div>
                        <GradationOne />
                    </div>
                </div>
            </div>
        </div>

        <CallToAction />

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            ServiceClassicBreadcrumb: () => import('@/components/ServiceClassicBreadcrumb'),
            ServiceIconBoxOne: () => import('@/components/sections/ServiceIconBoxOne'),
            GradationOne: () => import('@/components/GradationOne'),
            CallToAction: () => import('@/components/CallToAction'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
            }
        },

        head() {
            return {
                title: 'Service Classic'
            }
        },
    };
</script>
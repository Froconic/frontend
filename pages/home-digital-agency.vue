<template>
    <div class="main-container">

        <Header @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <HeroDigitalAgency />

        <ServiceCarousel />

        <MotivationalArchive />

        <CallToAction />

        <PortfolioTwo addClass="bg_color--5 ptb--150 ptb-md--80 ptb-sm--80 poss_relative" seperator="true" />

        <ServiceIconBoxWithTitle />

        <div class="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--5 poss_relative">
            <div class="container">
                <TestimonialWithoutCarousel />
            </div>

            <div class="vc_row-separator triangle triangle--top top">
                <svg xmlns="http://www.w3.org/2000/svg"
                    version="1.1" viewBox="0 0 0.156661 0.1">
                    <polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 "></polygon>
                </svg>
            </div>

            <div class="more-testimonials-btn text-center mt--50 wow move-up">
                <n-link to="" class="moredetails-btn font-16">
                    More testimonials 
                    <i class="fa fa-arrow-right"></i>
                </n-link>
            </div>
        </div>

        <BrandLogoCarousel />

        <FooterStyleFour />

    </div>
</template>

<script>

    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroDigitalAgency: () => import('@/components/HeroDigitalAgency'),
            ServiceCarousel: () => import('@/components/sections/ServiceCarousel'),
            MotivationalArchive: () => import('@/components/MotivationalArchive'),
            CallToAction: () => import('@/components/CallToAction'),
            PortfolioTwo: () => import('@/components/sections/PortfolioTwo'),
            ServiceIconBoxWithTitle: () => import('@/components/sections/ServiceIconBoxWithTitle'),
            TestimonialWithoutCarousel: () => import('@/components/sections/TestimonialWithoutCarousel'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            FooterStyleFour: () => import('@/components/FooterStyleFour'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-2')
        },

        head() {
            return {
                title: 'Home Digital Agency'
            }
        },
    };
</script>
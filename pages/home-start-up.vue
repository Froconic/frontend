<template>
    
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <HeroStartUp />

        <FeatureStartUp />

        <WhatWeDo />

        <EffectiveSolution />

        <StartUpStratagy />

        <PortfolioItemFilter />

        <NewsletterCta />

        <FooterTwo />

    </div>

</template>

<script>
    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroStartUp: () => import('@/components/HeroStartUp'),
            FeatureStartUp: () => import('@/components/sections/FeatureStartUp'),
            WhatWeDo: () => import('@/components/WhatWeDo'),
            EffectiveSolution: () => import('@/components/EffectiveSolution'),
            StartUpStratagy: () => import('@/components/sections/StartUpStratagy'),
            PortfolioItemFilter: () => import('@/components/sections/PortfolioItemFilter'),
            NewsletterCta: () => import('@/components/NewsletterCta'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-5', 'template-font-1')
        },

        head() {
            return {
                title: 'Home Start Up'
            }
        },
    };
</script>
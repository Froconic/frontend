<template>
    
    <div class="main-container">

        <Header @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <HeroDesignStudio />

        <OurServiceOne />

        <div class="brook-team-area bg_color--1 ptb--120 ptb-sm--80 ptb-md--80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-section-title text-center mb--80">
                            <h3 class="heading heading-h3 font-large">Teamwork makes the dream works</h3>
                            <div class="bkseparator--25"></div>
                            <div class="title-separator w--80 color-red"></div>
                        </div>
                    </div>
                </div>
            </div>

            <TeamCarouselFull />
        </div>

        <BestService />

        <BrandLogoStyleOne />

        <TestimonialTwo />

        <BlogThree />

        <GoogleMap />

        <FooterAgency />

    </div>

</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroDesignStudio: () => import('@/components/HeroDesignStudio'),
            OurServiceOne: () => import('@/components/sections/OurServiceOne'),
            TeamCarouselFull: () => import('@/components/TeamCarouselFull'),
            BestService: () => import('@/components/BestService'),
            BrandLogoStyleOne: () => import('@/components/BrandLogoStyleOne'),
            TestimonialTwo: () => import('@/components/sections/TestimonialTwo'),
            BlogThree: () => import('@/components/sections/BlogThree'),
            GoogleMap: () => import('@/components/GoogleMap'),
            FooterAgency: () => import('@/components/FooterAgency'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-3', 'template-font-1')
        },

        head() {
            return {
                title: 'Home Design Studio'
            }
        },
    };
</script>
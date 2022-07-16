<template>

    <div class="main-container">

        <HeaderVerticalOffcanvas @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        
        <div class="page-content ml--100 ml_lg--0 ml_md--0 ml_sm--0">

            <HeroMinimalAgency />

            <div class="brook-about-area bg_image--26 ptb--130 ptb-md--80 ptb-sm--60" :style="{backgroundImage: `url('/img/bg/bg-image-26.jpg')`}">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="about-content text-center wow move-up">
                                <h6 class="heading heading-h6 theme-color secondary-font font-blod">ABOUT US</h6>
                                <div class="bkseparator--10"></div>
                                <h2 class="heading heading-h2 playfair-font line-height-1-62 font-400">A small design agency based in New <br> York. We love to find <span class="theme-color">simple solutions</span> to <br> complex challenges.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MinimalMetroGrid class="pb--100 pb_md--80 pb_sm--60" />

            <BrandLogoWithoutCarousel class="minimal-agency-brand-logo pb--100 pb_md--80 pb_sm--60" />

            <FooterStyleThree />
        </div>

    </div>

</template>

<script>

    export default {
        components: {
            HeaderVerticalOffcanvas: () => import('@/components/HeaderVerticalOffcanvas'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroMinimalAgency: () => import('@/components/HeroMinimalAgency'),
            MinimalMetroGrid: () => import('@/components/MinimalMetroGrid'),
            BrandLogoWithoutCarousel: () => import('@/components/BrandLogoWithoutCarousel'),
            FooterStyleThree: () => import('@/components/FooterStyleThree'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
                fullpageOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-19', 'template-font-4')
        },

        head() {
            return {
                title: 'Home Minimal Agency'
            }
        },
    };
</script>
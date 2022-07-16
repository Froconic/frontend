<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="Client Logos" />

        <BrandLogoCarousel />

        <BrandLogoCarouselWithNavigation />

        <div class="bk-brand-area bg_color--1 ptb--150 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brand-wrapper">
                            <BrandLogoWithoutCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            BrandLogoCarouselWithNavigation: () => import('@/components/BrandLogoCarouselWithNavigation'),
            BrandLogoWithoutCarousel: () => import('@/components/BrandLogoWithoutCarousel'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                navOpen: false,
                searchOpen: false,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Element',
                        to: "/"
                    },
                    {
                        text: 'Client Logos',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Client Logos'
            }
        },
    };
</script>
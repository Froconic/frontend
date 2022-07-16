<template>
    <div class="main-wrapper">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <Breadcrumb :items="items" title="Flexible Image Slider" />

        <FlexibleSlider addClass="ptb--150 ptb-md--80 ptb-sm--60" />

        <FlexibleSliderThree />

        <div class="flexale-image bg_color--1 ptb--150 swiper-custom-arrow swiper-custom-dots ptb-md--80 ptb-sm--60 move-up wow">
            <FlexibleSliderFour />
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
            FlexibleSlider: () => import('@/components/FlexibleSlider'),
            FlexibleSliderThree: () => import('@/components/FlexibleSliderThree'),
            FlexibleSliderFour: () => import('@/components/FlexibleSliderFour'),
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
                        text: 'Flexible Image Slider',
                        active: true
                    }
                ]
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Flexible Image Slider'
            }
        },
    };
</script>
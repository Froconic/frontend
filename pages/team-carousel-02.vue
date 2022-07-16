<template>
    <div class="main-container">

        <HeaderAbout @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="brook-breadcrumb-area pt--130 pb--145 bg_color--1 breadcrumb-title-bar">
            <div class="container-fluid plr--150 plr_md--50 plr_sm--20">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1 line-height-1-5">The A-team of <span class="theme-color">awesomeness</span><br> & creative people</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-team-area bg_color--1">
            <TeamCarouselFull />
        </div>

        <div class="brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-12">
                        <div class="call-content vertical-call-toaction text-center">
                            <h3 class="heading heading-h3">Start working together?</h3>
                            <div class="spacing"></div>
                            <div class="call-btn text-center">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-theme text-theme btn-sd-size btn-rounded">Find out more</n-link>
                            </div>
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
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            TeamCarouselFull: () => import('@/components/TeamCarouselFull'),
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
                title: 'Team Carousel 02'
            }
        },
    };
</script>
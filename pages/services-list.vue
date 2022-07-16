<template>
    <div class="main-container">

        <HeaderAbout @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="brook-breadcrumb-area pt--130 pb--170 bg_color--1 breadcrumb-title-bar">
            <div class="container-fluid plr--150 plr_md--50 plr_sm--50">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-left">
                            <h1 class="heading heading-h1 line-height-1-5">We <span class="theme-color">design & build</span><br> brands and digital projects<br> for businesses.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-service-list-area">
            <div class="bk-service-list d-block d-md-flex mb--70 align-items-center wow move-up" v-for="service in data.serviceList" :key="service.i">
                <div class="thumb">
                    <img class="w--100" :src="service.image" :alt="service.alt">
                </div>
                <div class="content plr--130 plr_md--50 plr_sm--40">
                    <h3 class="heading heading-h3">{{ service.title }}</h3>
                    <div class="bkseparator--35"></div>
                    <p class="bk_pra">{{ service.desc }}</p>
                </div>
            </div>
        </div>

        <CallToAction />

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../data/service.json';
    export default {
        components: {
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            CallToAction: () => import('@/components/CallToAction'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data() {
            return {
                data,
                navOpen: false,
                searchOpen: false,
            }
        },

        head() {
            return {
                title: 'Service List'
            }
        },
    };
</script>
<template>
    <div class="main-container">

        <HeaderAbout @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcrumb-area pt--250 pb--340 pt_md--150 pb_md--150 pt_sm--150 pb_sm--150  bg_image--56 breadcrumb-title-bar breadcrumb-title-white" data-black-overlay="2" :style="{ backgroundImage: `url('/img/bg/bg-image-56.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1">Join our team!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-career-area pb--70 space_dec--100 pt_md--70 pt_sm--70">
            <div class="container">
                <div class="row mtn--40">
                    <div class="col-md-6 mt--40" v-for="career in data" :key="career.id">
                        <CareerItem :career="career" />
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../data/career.json'

    export default {
        components: {
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            CareerItem: () => import('@/components/CareerItem'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
            }
        },

        head() {
            return {
                title: 'Career'
            }
        },
    };
</script>
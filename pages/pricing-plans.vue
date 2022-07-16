<template>
    <div class="main-container">

        <HeaderAbout @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcrumb-area pt--210 pt_lg--200 pt_md--50 pt_sm--50 pb--50 bg_image--54 breadcrumb-title-bar breadcrumb-title-white" :style="{ backgroundImage: `url('/img/bg/bg-image-54.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-inner text-center">
                            <h1 class="heading heading-h1">Pricing plans</h1>
                            <div class="breadcrumb-insite mt--140 mt_sm--50">
                                <b-breadcrumb class="core-breadcrumb" :items="items"></b-breadcrumb>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-pricing-table-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--5">
            <div class="container">
                <div class="choose-us-area pb--150 pb_md--80 pb_sm--60">
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="choose-plan-area">
                                <h3 class="heading heading-h3">{{ data.pricingPlanHeading }}</h3>
                                <div class="desc mt--25">
                                    <p class="bk_pra">{{ data.pricingPlanText }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 offset-lg-1 col-sm-6 mt_mobile--40">
                            <div class="plans-about">
                                <h6 class="heading heading-h6 theme-color">{{ data.pricingAboutTitle }}</h6>
                                <div class="desc mt--25">
                                    <p class="bk_pra">{{ data.pricingAboutText }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6 mt_md--40 mt_sm--40">
                            <div class="plans-about">
                                <h6 class="heading heading-h6 theme-color">{{ data.pricingFeaturesTitle }}</h6>
                                <div class="bk-list--2 mt--25 move-up wow">
                                    <div class="list-header with-ckeck" v-for="feature in data.pricingFeatures" :key="feature.i">
                                        <div class="marker"></div>
                                        <div class="title-wrap">
                                            <h6 class="heading heading-h5">{{ feature }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mtn--40">
                    <div class="col-lg-4 col-md-6 mt--40" v-for="pricing in data.pricingItems" :key="pricing.id">
                        <PricingItemStyleOne :pricing="pricing" />
                    </div>
                </div>

            </div>
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
    import data from '../data/pricing.json';
    export default {
        components: {
            HeaderAbout: () => import('@/components/HeaderAbout'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PricingItemStyleOne: () => import('../components/PricingItemStyleOne'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data () {
            return {
                data,
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
                        text: 'Pricing Plans',
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
                title: 'Pricing Plans'
            }
        },
    };
</script>
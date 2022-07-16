<template>
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcaump-area pt--130 pb--50 bg_color--1 breadcaump-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <h1 class="heading heading-h1">Portfolio Grid – Boxed</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="portfolio-grid-metro mesonry-list mt--70">
             <no-ssr>
                <div v-masonry transition-duration="3s" item-selector=".portfolio" class="masonry-hjknk">
                    <!-- Start Single Portfolio -->
                    <div class="portfolio portfolio_style--1 portfolio-25 grid-width-2">
                        <div class="thumb">
                            <img src="/img/portfolio/grid/grid-metro-1.jpg" alt="Portfolio Images">
                        </div>
                        <div class="port-overlay-info">
                            <div class="hover-action">
                                <h3 class="post-overlay-title">
                                    <n-link to="/portfolio/portfolio-details">
                                        The Language of Designs
                                    </n-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio -->
                    <div class="portfolio portfolio_style--1 portfolio-25 grid-width-2">
                        <div class="thumb">
                            <img src="/img/portfolio/grid/grid-metro-2.jpg" alt="Portfolio Images">
                        </div>
                        <div class="port-overlay-info">
                            <div class="hover-action">
                                <h3 class="post-overlay-title">
                                    <n-link to="/portfolio/portfolio-details">
                                        Smart Sound System
                                    </n-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio -->
                    <div class="portfolio portfolio_style--1 portfolio-25">
                        <div class="thumb">
                            <img src="/img/portfolio/grid/grid-metro-3.jpg" alt="Portfolio Images">
                        </div>
                        <div class="port-overlay-info">
                            <div class="hover-action">
                                <h3 class="post-overlay-title">
                                    <n-link to="/portfolio/portfolio-details">
                                        Enchanting Portrait Hacks
                                    </n-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio -->
                    <div class="portfolio portfolio_style--1 portfolio-25">
                        <div class="thumb">
                            <img src="/img/portfolio/grid/grid-metro-4.jpg" alt="Portfolio Images">
                        </div>
                        <div class="port-overlay-info">
                            <div class="hover-action">
                                <h3 class="post-overlay-title">
                                    <n-link to="/portfolio/portfolio-details">
                                        Resize Image Using Photoshop
                                    </n-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio -->
                    <div class="portfolio portfolio_style--1 portfolio-25 grid-width-2">
                        <div class="thumb">
                            <img src="/img/portfolio/grid/grid-metro-5.jpg" alt="Portfolio Images">
                        </div>
                        <div class="port-overlay-info">
                            <div class="hover-action">
                                <h3 class="post-overlay-title">
                                    <n-link to="/portfolio/portfolio-details">
                                        The Language of Designs
                                    </n-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio -->
                    <div class="portfolio portfolio_style--1 portfolio-25 grid-width-2">
                        <div class="thumb">
                            <img src="/img/portfolio/grid/grid-metro-6.jpg" alt="Portfolio Images">
                        </div>
                        <div class="port-overlay-info">
                            <div class="hover-action">
                                <h3 class="post-overlay-title">
                                    <n-link to="/portfolio/portfolio-details">
                                        The Language of Designs
                                    </n-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio -->
                    <div class="portfolio portfolio_style--1 portfolio-25">
                        <div class="thumb">
                            <img src="/img/portfolio/grid/grid-metro-7.jpg" alt="Portfolio Images">
                        </div>
                        <div class="port-overlay-info">
                            <div class="hover-action">
                                <h3 class="post-overlay-title">
                                    <n-link to="/portfolio/portfolio-details">
                                        Resize Image Using Photoshop
                                    </n-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio -->
                    <div class="portfolio portfolio_style--1 portfolio-25">
                        <div class="thumb">
                            <img src="/img/portfolio/grid/grid-metro-8.jpg" alt="Portfolio Images">
                        </div>
                        <div class="port-overlay-info">
                            <div class="hover-action">
                                <h3 class="post-overlay-title">
                                    <n-link to="/portfolio/portfolio-details">
                                        The Language of Designs
                                    </n-link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Portfolio -->
                </div>
             </no-ssr>
            
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../../data/portfolio.json';

    import NoSSR from 'vue-no-ssr'

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PortfolioItemCenterCaption: () => import('@/components/PortfolioItemCenterCaption'),
            FooterTwo: () => import('@/components/FooterTwo'),

            'no-ssr': NoSSR
        },
        
        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')

            if (typeof this.$redrawVueMasonry === 'function') {
                this.$redrawVueMasonry()
            };

            this.onLoad()
        },

        methods:{
            async onLoad(){
                await this.sleep(950)
                this.$redrawVueMasonry()
            },
            sleep(ms){
                return new Promise(resolve => setTimeout(resolve, ms))
            }
        },

        head() {
            return {
                title: 'Portfolio Grid Metro 01'
            }
        },
    };
</script>
<template>
    <div class="main-container">

        <HeaderForOffCanvasBlack @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="hero-monimal-portfolio position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="hero-content">
                            <h3 class="hero-title">A design agency <br> built to build <br> modern brands.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-social">
                <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                <a href="https://www.behance.net/" target="_blank">Behance</a>
                <a href="https://www.instagram.com/" target="_blank">Instagram</a>
            </div>
        </div>

        <div class="brook-portfolio-area bk-masonary-wrapper">
            <div class="portfolio-grid-metro2 mesonry-list">
                <no-ssr>
                    <div v-masonry transition-duration="2s" item-selector=".portfolio" class="masonry-container">
                        <!-- Start Single Portfolio -->
                        <div class="portfolio portfolio_style--1 portfolio-20">
                            <div class="thumb">
                                <img src="/img/portfolio/grid/grid-metro2-1.jpg" alt="Portfolio Images">
                            </div>
                            <div class="port-overlay-info">
                                <div class="hover-action">
                                    <h3 class="post-overlay-title">
                                        <n-link to="/portfolio/portfolio-details">The Language of Designs</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Portfolio -->

                        <!-- Start Single Portfolio -->
                        <div class="portfolio portfolio_style--1 portfolio-20">
                            <div class="thumb">
                                <img src="/img/portfolio/grid/grid-metro2-2.jpg" alt="Portfolio Images">
                            </div>
                            <div class="port-overlay-info">
                                <div class="hover-action">
                                    <h3 class="post-overlay-title">
                                        <n-link to="/portfolio/portfolio-details">B-sharp High-end Audio</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Portfolio -->

                        <!-- Start Single Portfolio -->
                        <div class="portfolio portfolio_style--1 portfolio-20">
                            <div class="thumb">
                                <img src="/img/portfolio/grid/grid-metro2-3.jpg" alt="Portfolio Images">
                            </div>
                            <div class="port-overlay-info">
                                <div class="hover-action">
                                    <h3 class="post-overlay-title">
                                        <n-link to="/portfolio/portfolio-details">Smart Sound System</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Portfolio -->

                        <!-- Start Single Portfolio -->
                        <div class="portfolio portfolio_style--1 portfolio-20">
                            <div class="thumb">
                                <img src="/img/portfolio/grid/grid-metro2-4.jpg" alt="Portfolio Images">
                            </div>
                            <div class="port-overlay-info">
                                <div class="hover-action">
                                    <h3 class="post-overlay-title">
                                        <n-link to="/portfolio/portfolio-details">Awe-inspiring Projects</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Portfolio -->

                        <!-- Start Single Portfolio -->
                        <div class="portfolio portfolio_style--1 portfolio-20">
                            <div class="thumb">
                                <img src="/img/portfolio/grid/grid-metro2-5.jpg" alt="Portfolio Images">
                            </div>
                            <div class="port-overlay-info">
                                <div class="hover-action">
                                    <h3 class="post-overlay-title">
                                        <n-link to="/portfolio/portfolio-details">Gifts for Photography Lovers</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Portfolio -->

                        <!-- Start Single Portfolio -->
                        <div class="portfolio portfolio_style--1 portfolio-20">
                            <div class="thumb">
                                <img src="/img/portfolio/grid/grid-metro2-6.jpg" alt="Portfolio Images">
                            </div>
                            <div class="port-overlay-info">
                                <div class="hover-action">
                                    <h3 class="post-overlay-title">
                                        <n-link to="/portfolio/portfolio-details">Enchanting Portrait Hacks</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Portfolio -->

                        <!-- Start Single Portfolio -->
                        <div class="portfolio portfolio_style--1 portfolio-20 grid-width-2">
                            <div class="thumb">
                                <img src="/img/portfolio/grid/grid-metro2-7.jpg" alt="Portfolio Images">
                            </div>
                            <div class="port-overlay-info">
                                <div class="hover-action">
                                    <h3 class="post-overlay-title">
                                        <n-link to="/portfolio/portfolio-details">Digital Marketing Basics</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Portfolio -->

                        <!-- Start Single Portfolio -->
                        <div class="portfolio portfolio_style--1 portfolio-20">
                            <div class="thumb">
                                <img src="/img/portfolio/grid/grid-metro2-8.jpg" alt="Portfolio Images">
                            </div>
                            <div class="port-overlay-info">
                                <div class="hover-action">
                                    <h3 class="post-overlay-title">
                                        <n-link to="/portfolio/portfolio-details">Measure Digital Progress</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Portfolio -->

                        <!-- Start Single Portfolio -->
                        <div class="portfolio portfolio_style--1 portfolio-20">
                            <div class="thumb">
                                <img src="/img/portfolio/grid/grid-metro2-9.jpg" alt="Portfolio Images">
                            </div>
                            <div class="port-overlay-info">
                                <div class="hover-action">
                                    <h3 class="post-overlay-title">
                                        <n-link to="/portfolio/portfolio-details">Resize Image Using Photoshop</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- End Single Portfolio -->
                    </div>
                </no-ssr>
            </div>
        </div>

        <footer class="page-footer minimal-portfolio-footer pl--135 pr--135 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--20 pr_sm--20 pl_mobile--20 pr_mobile--20">
            <div class="bk-footer-inner pt--170 pb--100 pt_sm--80 pb_sm--40 pt_md--80 pb_md--40">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 d-none d-lg-block">
                        <div class="bk-footer-widget">
                            <div class="bkseparator--65"></div>
                            <div class="basic-dark-line"></div>
                        </div>
                    </div>

                    <div class="col-xl-7 offset-xl-1 col-lg-8">
                        <div class="bk-footer-widget">
                            <h1 class="heading heading-h1 font-80">Work with us?</h1>
                            <div class="bkseparator--60"></div>
                            <div class="row minimal-home-address">
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="mini-address">
                                        <h4 class="heading heading-h4">Visit our studio at</h4>
                                        <div class="bkseparator--10"></div>
                                        <p class="bk_pra font-16 line-height-1-87">Your address goes here, Vacaville 10010, USA</p>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-12 mt_sm--40">
                                    <div class="mini-address">
                                        <h4 class="heading heading-h4">Message us</h4>
                                        <div class="bkseparator--10"></div>
                                        <p class="bk_pra font-16 bk-hover">
                                            <a class="color-dark" href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                                        </p>
                                        <p class="bk_pra font-16 bk-hover">
                                            <a class="color-dark" href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Start Copyright Area -->
            <div class="copyright ptb--50">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="copyright-left text-md-left text-center">
                            <ul class="bk-copyright-menu roboto-font d-flex bk-hover justify-content-center justify-content-md-start flex-wrap flex-sm-nowrap minimal-copyright">
                                <li>
                                    <n-link to="/blog/blog-creative" class="color-dark">Our Blogs</n-link>
                                </li>
                                <li>
                                    <n-link to="/portfolio/portfolio-grid-boxed" class="color-dark">Latest Projects</n-link>
                                </li>
                                <li>
                                    <n-link to="/contact-us-modern" class="color-dark">Contact Us</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="bk-copyright-right text-md-right text-center">
                            <p class="bk_pra font-blod">&copy; 2022 <b>Brook</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/"><b>HasThemes</b></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Copyright Area -->
        </footer>

    </div>
</template>

<script>

    import NoSSR from 'vue-no-ssr'

    export default {
        components: {
            HeaderForOffCanvasBlack: () => import('@/components/HeaderForOffCanvasBlack'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),

            'no-ssr': NoSSR
        },

        data () {
            return {
                navOpen: false,
                searchOpen: false,
                fullpageOpen: false,
                swiperOption: {
                    autoplay: false,
                    loop: true,
                    centeredSlides: true,
                    slidesPerView: 2,
                    spaceBetween: 70,
                    // Responsive breakpoints
                    breakpoints: {
                        992:{
                            slidesPerView : 2
                        },
                        300:{
                            slidesPerView : 1,
                        }
                    }
                }
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
                title: 'Home Minimal Portfolio'
            }
        },
    };
</script>

<style lang="scss" scoped>
    .hero-monimal-portfolio {
        height: 600px;
        display: flex;
        align-items: center;
        // res
        @media #{$md-layout, $sm-layout}{
            height: 450px;
        }
        @media #{$small-mobile}{
            height: 380px;
        }
    }
    .hero-content {
        .hero-title {
            color: #000;
            font-size: 76px;
            font-weight: 700;
            float: right;
            max-width: 665px;
            position: relative;
            &:before {
                left: -490px;
                top: 52px;
                width: 470px;
                height: 2px;
                content: '';
                position: absolute;
                background-color: #000;
            }
            // res
            @media #{$md-layout, $sm-layout}{
                float: left;
                font-size: 50px;
                max-width: 100%;
                &:before {
                    left: 0;
                    top: -20px;
                    width: 100%;
                }
            }
            @media #{$large-mobile}{
                font-size: 38px;
            }
            @media #{$small-mobile}{
                font-size: 30px;
            }
        }
    }
    .hero-social {
        position: absolute;
        right: 60px;
        writing-mode: tb-rl;
        a {
            color: #999999;
            font-size: 16px;
            margin-bottom: 30px;
            &:hover {
                text-decoration: underline;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
        // res
        @media #{$large-mobile}{
            right: 30px;
        }
        @media #{$small-mobile}{
            bottom: 70px;
            left: 15px;
            writing-mode: inherit;
            a {
                margin-bottom: 0;
                margin-right: 15px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
   
</style>
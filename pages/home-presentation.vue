<template>
    <div class="main-container">

        <HeaderForOffCanvasBlack @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="presentation-home">
            <swiper :options="swiperOption">
                <div class="bg-image-1 bg-cover swiper-slide">
                    <div class="presentation-slider-wrapper">
                        <div class="presentation-inner">
                            <div class="inner slider">
                                <h2 class="heading text-white">the innovative <br> technology</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="presentation-slider-wrapper">
                        <div class="presentation-inner">
                            <div class="inner about-inner">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="content">
                                            <h6 class="heading heading-h6 theme-color">PHILOSOPHY</h6>
                                            <div class="title mt--40 mb--50">
                                                <h2 class="heading heading-h2">We design & build brands, campaigns for businesses.</h2>
                                            </div>
                                            <p class="bk_pra">Brook is a multi-purpose WordPress theme for big and small-sized features & responsive layouts. Since its establishment in 2000, Brook Creative has been focusing on project management & implementation through cooperation.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-none d-md-block">
                                        <div class="thumbnail video-with-thumb">
                                            <img src="/img/slider/presentation/home-presentation-image-03.png" alt="multi-purpose">
                                            <!-- Start Single Popup -->
                                            <div class="video-btn position--center">
                                                <a class="play__btn" href="https://www.youtube.com/watch?v=9No-FiEInLA" target="_blank">
                                                    <div class="video-icon third-icon"></div>
                                                </a>
                                            </div>
                                            <!-- End Single Popup -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-image-2 bg-cover swiper-slide">
                    <div class="presentation-slider-wrapper">
                        <div class="presentation-inner">
                            <div class="inner about-service">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 d-none d-md-block">
                                            <div class="thumb">
                                                <img src="/img/slider/presentation/iphone-02.png" alt="Multipurpose">
                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-md-8">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="brook-section-title text-left">
                                                        <h2 class="heading heading-h2 second-font text-white">List of features</h2>
                                                    </div>
                                                </div>

                                                <!-- Start Single Service -->
                                                <div class="col-lg-6 d-none d-md-block mt--50">
                                                    <div class="single-motive-speach">
                                                        <div class="icon">
                                                            <i class="ion-ios-infinite theme-color"></i>
                                                        </div>
                                                        <div class="content text-left">
                                                            <h4 class="text-white">Digital marketing</h4>
                                                            <p class="bk_pra heading-font text-white">We conduct the marketing of  products & services using the market's latest digital technologies.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Single Service -->

                                                <!-- Start Single Service -->
                                                <div class="col-lg-6 d-none d-md-block mt--50">
                                                    <div class="single-motive-speach">
                                                        <div class="icon">
                                                            <i class="ion-ios-baseball-outline theme-color"></i>
                                                        </div>
                                                        <div class="content text-left">
                                                            <h4 class="text-white">SEO marketing</h4>
                                                            <p class="bk_pra heading-font text-white">Our SEO approach is to focus on growing brand visibility in organic search engine results.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Single Service -->

                                                <!-- Start Single Service -->
                                                <div class="col-lg-6 mt--50">
                                                    <div class="single-motive-speach">
                                                        <div class="icon">
                                                            <i class="ion-pinpoint theme-color"></i>
                                                        </div>
                                                        <div class="content text-left">
                                                            <h4 class="text-white">Resource use</h4>
                                                            <p class="bk_pra heading-font text-white">We conduct the marketing of   products & services using latest digital technologies.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Single Service -->

                                                <!-- Start Single Service -->
                                                <div class="col-lg-6 mt--50">
                                                    <div class="single-motive-speach">
                                                        <div class="icon">
                                                            <i class="ion-ios-infinite theme-color"></i>
                                                        </div>
                                                        <div class="content text-left">
                                                            <h4 class="text-white">Digital marketing</h4>
                                                            <p class="bk_pra heading-font text-white">We successfully implemented  numerous UI/UX projects for both global & local clients.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Single Service -->

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="presentation-slider-wrapper">
                        <div class="presentation-inner">
                            <div class="inner skill-area">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-12">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="skill-content">
                                                        <h2 class="heading heading-h2 theme-color">We're always ready for challenges.</h2>
                                                    </div>
                                                </div>
                                                <div class="col-xl-2 d-none d-xl-block">
                                                    <div class="what-do mt--70 mt_lg--30 mt_md--30 mt_sm--20">
                                                        <div class="basic-separator line-3"></div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-none d-md-block">
                                                    <div class="what-do mt--70 mt_lg--30 mt_md--30 mt_sm--20">
                                                        <div class="content">
                                                            <h5 class="heading heading-h5">Fresh ideas</h5>
                                                            <div class="bkseparator--20"></div>
                                                            <p class="bk_pra">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 offset-xl-1">
                                                    <div class="what-do mt--70 mt_lg--30 mt_md--30 mt_sm--20">
                                                        <div class="content">
                                                            <h5 class="heading heading-h5">Unique designs</h5>
                                                            <div class="bkseparator--20"></div>
                                                            <p class="bk_pra">Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher customizability as well as flexibility.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-10 col-xl-10 offset-xl-2 mt--80 mt_md--30 mt_sm--20">
                                                    <div class="brook-skill">
                                                        <!-- Start Single Progress Charts -->
                                                        <div class="progress-charts">
                                                            <h6 class="heading heading-h6">UI/UX</h6>
                                                            <div class="progress">
                                                                <div class="progress-bar fadeInLeft custom-color--2"
                                                                    data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"
                                                                    style="width: 85%" aria-valuenow="85" aria-valuemin="0"
                                                                    aria-valuemax="100"><span class="percent-label">85%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- End Single Progress Charts -->

                                                        <!-- Start Single Progress Charts -->
                                                        <div class="progress-charts mt--45">
                                                            <h6 class="heading heading-h6">Ideas</h6>
                                                            <div class="progress">
                                                                <div class="progress-bar fadeInLeft custom-color--3"
                                                                    data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar"
                                                                    style="width: 85%" aria-valuenow="85" aria-valuemin="0"
                                                                    aria-valuemax="100"><span class="percent-label">85%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- End Single Progress Charts -->

                                                        <!-- Start Single Progress Charts -->
                                                        <div class="progress-charts mt--45">
                                                            <h6 class="heading heading-h6">Marketing</h6>
                                                            <div class="progress">
                                                                <div class="progress-bar fadeInLeft custom-color--4"
                                                                    data-wow-duration="0.8s" data-wow-delay=".8s" role="progressbar"
                                                                    style="width: 90%" aria-valuenow="90" aria-valuemin="0"
                                                                    aria-valuemax="100"><span class="percent-label">90%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- End Single Progress Charts -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-image-3 bg-cover swiper-slide">
                    <div class="presentation-slider-wrapper">
                        <div class="presentation-inner contact-address-wrapper">
                            <div class="inner">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-7 col-md-12 col-12">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="brook-section-title mb--55 mb_sm--30 mb_md--30">
                                                        <h3 class="heading heading-h3 text-white">We collaborate with ambitious  something great together.</h3>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-12">
                                                    <div class="classic-address text-left">
                                                        <h4 class="heading heading-h4 text-white">Visit our studio at</h4>
                                                        <div class="desc mt--15">
                                                            <p class="bk_pra line-height-2-22 text-white">Your address goes here <br> Venaville 10010, USA</p>
                                                        </div>
                                                    </div>

                                                    <div class="classic-address text-left mt--60 mt_sm--30 mt_md--30">
                                                        <h4 class="heading heading-h4 text-white text-white">Message us</h4>
                                                        <div class="desc mt--15">
                                                            <p class="bk_pra line-height-2-22 text-white">info@example.com <br>0123456789</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-12 mt_sm--30 d-none d-md-block">
                                                    <div class="footer-widget text-var--2 menu--about">
                                                        <h2 class="widgettitle text-white">About us</h2>
                                                        <div class="footer-menu">
                                                            <ul class="ft-menu-list bk-hover">
                                                                <li><a href="#">About Us</a></li>
                                                                <li><a href="#">Team</a></li>
                                                                <li><a href="#">Career</a></li>
                                                                <li><a href="#">Services</a></li>
                                                                <li><a href="#">Contact</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-6 d-none d-lg-block">
                                            <!--Google Map Area Start-->
                                            <div class="google-map-area bg_color--1 text-center">
                                                <div class="brook-section-title">
                                                    <h3 class="heading heading-h3">Default Style</h3>
                                                </div>
                                                <GmapMap
                                                    :center="{lat:52.482900, lng:-1.893460}"
                                                    :zoom="15"
                                                    map-type-id="terrain"
                                                >
                                                </GmapMap>
                                            </div>
                                            <!--Google Map Area Start-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>

            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            HeaderForOffCanvasBlack: () => import('@/components/HeaderForOffCanvasBlack'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false,
                fullpageOpen: false,
                
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    mousewheel: true,
                    direction: 'vertical',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
            }
        },

        head() {
            return {
                title: 'Home Presentation'
            }
        },
    };
</script>

<style lang="scss">
    .presentation-home {
        .swiper-wrapper {
            max-height: 100vh;
        }
    }

    .vue-map-container {
        height: 500px;
        // res
        @media #{$sm-layout}{
            height: 350px;
        }
    }
</style>
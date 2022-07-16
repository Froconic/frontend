<template>
    <div class="main-container">

        <HeaderElement @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <HeroService />

        <!-- Start Home Service Area -->
        <div class="home-service-area bg_color--18 pt_sm--80 pt_md--80">
            <div class="container">
                <div class="row align-items-lg-end align-items-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="service-thumbnail space_dec--110 space_dec--none wow move-up">
                            <img class="w-100" src="/img/about/home-service-image-02.jpg" alt="Multipurpose">
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1 col-md-6 mt_sm--40">
                        <div class="home-service-inner">
                            <div class="content">
                                <h3 class="heading heading-h3 text-white wow move-up">plan. create. grow.</h3>
                                <div class="desc mt--20 wow move-up">
                                    <p class="bk_pra font-18 line-height-1-87 text-white">Since its establishment in 2000, Brook Creative has been focusing on project management & implementation through cooperation. In total, Brook Creative has created more than 2000 projects related to constructional designing and landscaping industries worldwide.</p>
                                </div>
                                <div class="home-service-btn mt--60 wow move-up">
                                    <n-link to="" class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between">Shop Collection</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Home Service Area -->

        <!-- Start Skill Area -->
        <div class="home-service-skill pt--150 pt_sm--80 pt_md--80 pb_sm--80 pb_md--80 bg_color--18">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xl-4 col-12">
                        <div class="service-skill-inner">
                            <div class="content">
                                <h6 class="heading heading-h6 text-white wow move-up">OUR SKILLS</h6>
                                <div class="title mt--55 wow move-up">
                                    <h3 class="heading heading-h3 text-white line-height-1-42">We design & build brands, campaigns and digital projects for businesses.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-7 offset-xl-1 col-12 mt_md--40 mt_sm--40">
                        <div class="service-skill-slider wow move-up">
                            <!-- Start Single Image -->
                            <div class="flexale-image">
                                <div class="thumb">
                                    <img src="/img/flexable-image-slide/flexable-3/flexable-3.jpg" alt="image">
                                </div>
                            </div>
                            <!-- End Single Image -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Skill Area -->

        <!-- Start Progress Area -->
        <div class="home-service-progress bg_color--1 pt--180 pt_sm--80 pt_md--80 space_dec--100 space_dec--none">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="progress-thumbnail wow move-up text-lg-left text-center">
                            <img src="/img/about/home-service-image-01.jpg" alt="Multipurpose">
                        </div>
                    </div>
                    <div class="col-lg-7 offset-lg-1 mt_md--40 mt_sm--40 plr_md--50 plr_sm--50">
                        <div class="service-progress-inner">
                            <!-- Start Progress Bar    -->
                            <div class="progress-wrapper wow move-up">
                                <!-- Start Single Progress Charts -->
                                <div class="progress-charts">
                                    <h6 class="heading heading-h6">UI/UX</h6>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.5s"
                                            data-wow-delay=".3s" role="progressbar" style="width: 85%"
                                            aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">85%</span></div>
                                    </div>
                                </div>
                                <!-- End Single Progress Charts -->

                                <!-- Start Single Progress Charts -->
                                <div class="progress-charts mt--45">
                                    <h6 class="heading heading-h6">Ideas</h6>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.7s"
                                            data-wow-delay=".5s" role="progressbar" style="width: 85%"
                                            aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">85%</span></div>
                                    </div>
                                </div>
                                <!-- End Single Progress Charts -->

                                <!-- Start Single Progress Charts -->
                                <div class="progress-charts mt--45">
                                    <h6 class="heading heading-h6">Marketing</h6>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.8s"
                                            data-wow-delay=".8s" role="progressbar" style="width: 70%"
                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">70%</span></div>
                                    </div>
                                </div>
                                <!-- End Single Progress Charts -->
                            </div>
                            <!-- End Progress Bar    -->

                            <div class="row mt--120 mt_md--40 mt_sm--40">
                                <!-- Start CounterUp Area -->
                                <div class="col-lg-6 col-sm-6 wow move-up">
                                    <div class="brook-counter text-left">
                                        <div class="icon">
                                            <i class="ion-ios-people-outline"></i>
                                        </div>
                                        <div class="content">
                                            <span class="count">2034</span>
                                            <h6 class="heading heading-h6">Satisfied clients</h6>
                                        </div>
                                    </div>
                                </div>
                                <!-- End CounterUp Area -->

                                <!-- Start CounterUp Area -->
                                <div class="col-lg-6 col-sm-6 wow move-up">
                                    <div class="brook-counter text-left">
                                        <div class="icon">
                                            <i class="ion-ios-eye-outline"></i>
                                        </div>
                                        <div class="content">
                                            <span class="count">2034</span>
                                            <h6 class="heading heading-h6">Unique designs</h6>
                                        </div>
                                    </div>
                                </div>
                                <!-- End CounterUp Area -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Progress Area -->

        <!-- Start Feature Area -->
        <FeaturesOne class="pt--150 pt_md--80 pt_sm--60" />
        <!-- End Feature Area -->

        <!-- Start Newsletter Area -->
        <div class="brook-newsletter-area bg_image--5 ptb--150 ptb-md--80 ptb-sm--80" :style="{ backgroundImage: `url('/img/bg/bg-image-5.jpg')` }">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="contact-form bg_color--1 contact-form--2">
                            <h4 class="heading heading-h4">Newsletter sign-up</h4>
                            <form>
                                <div class="row">
                                    <div class="col-12">
                                        <input type="text" placeholder="Your name">
                                    </div>

                                    <div class="col-12 mt--30">
                                        <input type="email" placeholder="Your e-mail">
                                    </div>

                                    <div class="col-12">
                                        <div class="form-desc"> Sign up to our newsletter for regular updates and more.</div>
                                    </div>
                                    <div class="col-12 mt--30">
                                        <input type="Submit" placeholder="Subscribe">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 mt_md--40 mt_sm--40">
                        <div class="home-service-newsletter pl--40 pl_sm--0 pl_md--0">
                            <div class="content">
                                <h3 class="heading heading-h3 text-white wow move-up">Bringing the best experiences</h3>
                                <div class="desc mt--20 wow move-up">
                                    <p class="bk_pra font-18 line-height-1-87 text-white">We work with clients from all over the world. We had worked with and serving over 2000 customers and 1000 global companies across 13 countries with over 90% satisfaction rate
                                    achieved.</p>
                                </div>
                                <div class="newsletter-btn mt--45 wow move-up">
                                    <button class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between">Purchase Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Newsletter Area -->

        <FooterTwo />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderElement: () => import('@/components/HeaderElement'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroService: () => import('@/components/HeroService'),
            FeaturesOne: () => import('@/components/sections/FeaturesOne'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },

        data() {
            return {
                navOpen: false,
                searchOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-1', 'template-font-1')
        },

        head() {
            return {
                title: 'Home Service'
            }
        },
    };
</script>

<style lang="scss" scoped>
    .home-service-area {
        .service-thumbnail {
            position: relative;
            z-index: 1;
        }
    }
</style>
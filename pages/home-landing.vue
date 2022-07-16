<template>
    <div class="main-container">

        <HeaderTransparentWithSocial @togglenav="navOpen = !navOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <HeroLanding />

        <div class="flexale-image swiper-custom-arrow swiper-custom-dots space_dec--70">
            <FlexibleSliderFive />
        </div>

        <!-- Start Awesome Area -->
        <div class="brook-awesome-area ptb--150 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-12">
                        <div class="awesome-landing-content">
                            <div class="content">
                                <h2 class="heading heading-h2">Awesome landing <span class="theme-color">page design.</span></h2>
                                <div class="content mt--25">
                                    <p class="bk_pra font-18 line-height-1-63">We learn from landing page's best practices and great landing pages in order to create a clear, crisp design that suits all your needs for a responsive landing site.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 offset-lg-1 col-12 mt_md--40 mt_sm--40">
                        <div class="awesome-landing-content">
                            <!-- Strat Single Speach -->
                            <div class="single-motive-speach">
                                <div class="icon">
                                    <i class="icon-basic-globe"></i>
                                </div>
                                <div class="content">
                                    <h4>Successful projects</h4>
                                    <p>Since its establishment in 2000, Brook Creative has been focusing on project management & implementation through cooperation.</p>
                                </div>
                            </div>
                            <!-- End Single Speach -->

                            <!-- Strat Single Speach -->
                            <div class="single-motive-speach mt--35">
                                <div class="icon">
                                    <i class="ion-monitor"></i>
                                </div>
                                <div class="content">
                                    <h4>Unique designs</h4>
                                    <p>In total, Brook Creative has created more than 2000 projects related to constructional designing and landscaping industries worldwide.</p>
                                </div>
                            </div>
                            <!-- End Single Speach -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Awesome Area -->

        <!-- Start Boxes Area -->
        <div class="bk-info-boxes">
            <!-- Start Single Box -->
            <div class="info-grid-box has-image" :style="{ backgroundImage: `url('/img/grid-box/grid-box-1.jpg')` }">
            </div>
            <!-- End Single Box -->

            <!-- Start Single Box -->
            <div class="info-grid-box bg_color--7">
                <div class="box-content">
                    <div class="box-content-inner">
                        <div class="box-info">
                            <h4 class="heading heading-h4 text-white">Unlimited power & customization possibilities</h4>
                            <div class="content mt--25">
                                <p class="bk_pra">Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities. </p>
                            </div>
                            <div class="box-btn mt--100 mt_sm--30">
                                <n-link to="/services-classic" class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between">Learn More</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Single Box -->

            <!-- Start Single Box -->
            <div class="info-grid-box has-image" :style="{ backgroundImage: `url('/img/grid-box/grid-box-2.jpg')` }">
            </div>
            <!-- End Single Box -->

            <!-- Start Single Box -->
            <div class="info-grid-box bg_color--17">
                <div class="box-content">
                    <div class="box-content-inner">
                        <div class="box-info">
                            <h4 class="heading heading-h4 text-white">Pixel perfect design and clear code delivered to you</h4>
                            <div class="content mt--25">
                                <p class="bk_pra">Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher custom ability, adaptability as well as flexibility.</p>
                            </div>
                            <div class="box-btn mt--100 mt_sm--30">
                                <n-link to="/services-classic" class="brook-btn bk-btn-white btn-sd-size btn-rounded space-between">Learn More</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Single Box -->
        </div>
        <!-- End Boxes Area -->

        <!-- Start Professonal Design -->
        <div class="brook-professonal-design bg_color--1 pt--130 pb--80 pt_md--80 pt_sm--80">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="thumbnail">
                            <img src="/img/about/home-landing-image-04.png" alt="multipurpose">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="professonal-design-content pl--90 pl_lg--70 pl_md--30 pl_sm--30">
                            <h2 class="heading heading-h2">Professional design</h2>
                            <div class="content mt--35 mb--65">
                                <p class="bk_pra font-18 line-height-1-63">Finding design inspiration for your next landing page can be tough. We've selected the best pages and offered a wide range of predefined elements.</p>
                            </div>
                            <div class="profesonal_btn">
                                <button class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between">Download Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Professonal Design -->

        <!-- Start Testimonial Area -->
        <CurveShape>
            <template v-slot:bgcolor>
                <path style="fill: #ecf3ff;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <div class="bk-testimonial-area pb--130 pt--80 pb--80 pb_md--80 pb_sm--80  bg_color--6 poss_relative">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brook-section-title text-center">
                            <h2 class="heading heading-h2">Client’s Feedback</h2>
                        </div>
                    </div>
                </div>
                <div class="row mt--85">
                    <TestimonialWithoutCarousel />
                </div>
            </div>
        </div>
        <!-- End Testimonial Area -->

        <Footer />

    </div>
</template>

<script>

    export default {
        components: {
            HeaderTransparentWithSocial: () => import('@/components/HeaderTransparentWithSocial'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroLanding: () => import('@/components/HeroLanding'),
            FlexibleSliderFive: () => import('@/components/FlexibleSliderFive'),
            CurveShape: () => import('@/components/CurveShape'),
            TestimonialWithoutCarousel: () => import('@/components/sections/TestimonialWithoutCarousel'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                navOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-11', 'template-font-1')
        },

        head() {
            return {
                title: 'Home Landing'
            }
        },
    };
</script>

<style lang="scss" scoped>
    .box-content-inner {
        .bk_pra {
            color: $white;
        }
    }
</style>
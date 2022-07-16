<template>
    <div class="main-container">

        <HeaderBlackTransparentWithSocial @togglenav="navOpen = !navOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <HeroProductLanding />
        
        <!-- Start Home Decoration Area -->
        <div class="home-decoration-area ptb--50 bg_color--1">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="thumbnail space_decLeft--170">
                            <img src="/img/about/home-product-landing-image-01.jpg" alt="Multipurpose">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="home-decoration-inner">
                            <div class="content">
                                <div class="icon mb--60 wow move-up">
                                    <img src="/img/about/landing-icon.png" alt="Multipurpose">
                                </div>
                                <h3 class="heading heading-h3 wow move-up">Home decoration.</h3>
                                <div class="content mt--20 mb--65">
                                    <p class="bk_pra font-18 line-height-1-87 wow move-up">Add an extra-special touch to décor with this charming lantern that features sleek angles and a modern-edge design. A must-have for your house this holiday. Buy now to get a special discount for early bird order.</p>
                                </div>
                            </div>
                            <div class="basic-thine-line"></div>

                            <!-- Accordion Area -->
                            <div class="bk-accordion-style--2 mt--55 wow move-up">
                                <AccordionStyleOne />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Home Decoration Area -->

        <!-- Start Metallic Area -->
        <div class="home-metallic-area bg_color--15 ptb--160 ptb-lg--100 ptb-md--80 ptb-sm--80">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="metarial-inner">
                            <div class="content">
                                <h3 class="heading heading-h3 wow move-up">The metallic gold vase</h3>
                                <div class="desc mt--20 mb--65">
                                    <p class="bk_pra font-18 line-height-1-87 wow move-up">Bring a touch of contemporary style to your abode with this gold-plated table lamp set. A gold-finished metal base down below offers a touch of glamour, while the white light brings harmony and comfort to your eyes.</p>
                                </div>
                            </div>

                            <div class="row">
                                <!-- Start Counter Up -->
                                <div class="col-lg-6 col-sm-6 col-12 wow move-up">
                                    <div class="brook-counter text-center text-sm-left product-count">
                                        <div class="icon">
                                            <i class="ion-ios-people-outline"></i>
                                        </div>
                                        <div class="content">
                                            <span class="count">2135</span>
                                            <h6 class="heading heading-h6">Satisfied Clients</h6>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Counter Up -->

                                <!-- Start Counter Up -->
                                <div class="col-lg-6 col-sm-6 col-12 wow move-up">
                                    <div class="brook-counter text-center text-sm-left product-count">
                                        <div class="icon">
                                            <i class="ion-ios-eye-outline"></i>
                                        </div>
                                        <div class="content">
                                            <span class="count">2034</span>
                                            <h6 class="heading heading-h6">Unique Designs</h6>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Counter Up -->

                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 mt_sm--40">
                        <div class="thumbnail text-center text-md-right wow move-up">
                            <img src="/img/about/home-product-landing-image-02.jpg" alt="Multipurpose">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Metallic Area -->

        <!-- Start Cube Lanter Area -->
        <div class="bk-cube-lanter-area ptb--100 ptb-md--80 ptb-sm--80 bg_color--1">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="thumbnail wow move-up">
                            <img src="/img/about/home-product-landing-image-03.jpg" alt="Multipurpose">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="cube-lanterinner">
                            <div class="content wow move-up">
                                <h3 class="heading heading-h3">Cube lantern set.</h3>
                                <div class="desc mt--20">
                                    <p class="bk_pra font-18 line-height-1-87">Add some life to your bedroom with this beautiful set of 10 cube golden lantern string solar lights. The lights turn on as darkness falls to add atmosphere and ambiance to your room.</p>
                                </div>
                            </div>
                            <div class="cube-feature mt--90 mt_md--40 mt_sm--40">
                                <div class="row">

                                    <!-- Start Feature Area -->
                                    <div class="col-lg-6 col-12 wow move-up">
                                        <div class="cube-feature">
                                            <h5 class="heading heading-h5">Feature one</h5>
                                            <div class="desc mt--15">
                                                <p class="bk_pra">A great attraction at any outdoor dining event, handy to light pathways and garden ornaments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Feature Area -->

                                    <!-- Start Feature Area -->
                                    <div class="col-lg-6 col-12 mt_md--30 mt_sm--30 wow move-up">
                                        <div class="cube-feature">
                                            <h5 class="heading heading-h5">Feature two</h5>
                                            <div class="desc mt--15">
                                                <p class="bk_pra">The solar panels absorb the sun in the daytime, powered the lights at night, can work for about 8 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Feature Area -->

                                </div>
                                <div class="cube-btn mt--70">
                                    <n-link to="" class="brook-btn bk-btn-theme with-no-shadow btn-sd-size btn-bullet space-between">Shop collection</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Cube Lanter Area -->

        <!-- Start Newsletter Area -->
        <div class="bk-newsletter-area bg_image--35 ptb--150 ptb-lg--100 ptb-md--80 ptb-sm--80" :style="{ backgroundImage: `url('/img/bg/bg-image-35.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                        <!-- Start Newsletter Area -->
                        <div class="contact-form bg_color--1 contact-form--2 wow move-up">
                            <h4 class="heading heading-h4">Newsletter sign-up</h4>
                            <form>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <input type="text" placeholder="Your name">
                                    </div>
                                    <div class="col-lg-12 mt--30">
                                        <input type="email" placeholder="Your e-mail">
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-desc "> Sign up to our newsletter for regular updates and more.</div>
                                    </div>
                                    <div class="col-lg-12 mt--30">
                                        <div class="submit-btn">
                                            <button class="brook-btn bk-btn-theme with-no-shadow btn-sd-size btn-bullet space-between">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- End Newsletter Area -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Newsletter Area -->

        <Footer />

    </div>
</template>

<script>

    export default {
        components: {
            HeaderBlackTransparentWithSocial: () => import('@/components/HeaderBlackTransparentWithSocial'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroProductLanding: () => import('@/components/HeroProductLanding'),
            AccordionStyleOne: () => import('@/components/AccordionStyleOne'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                navOpen: false
            }
        },

        mounted () {
            document.body.classList.add('template-color-12', 'template-font-1')
        },

        head() {
            return {
                title: 'Home Product Landing'
            }
        },
    };
</script>
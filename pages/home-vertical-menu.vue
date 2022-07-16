<template>

    <div class="main-container">

        <HeaderVerticalOffcanvas @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />
        
        <div class="page-content ml--100 ml_lg--0 ml_md--0 ml_sm--0">
            <!-- Start Verical Slider Area -->
            <HeroVertical />
            <!-- End Verical Slider Area -->

            <!-- Start What We Do Area -->
            <div class="brook-what-we-do-area vertical-what-do-area bg_image--49" :style="{ backgroundImage: `url('/img/bg/bg-image-49.jpg')` }">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="creative-what-do-inner">
                            <div class="inner">
                                <h1 class="heading heading-h1 font-60 line-height-1-39">
                                    We’re always ready for <span class="theme-color">challenges.</span>
                                </h1>
                                <div class="about-button mt--55">
                                    <n-link to="/about-us-01" class="brook-btn red-color-2 btn-sd-size btn-rounded space-between">Find out more</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12 mt_md--40 mt_sm--40">
                        <div class="creative-what-do-text">
                            <div class="brook-section-title mb--50">
                                <h5 class="heading heading-h5 red-color-2">What we do</h5>
                                <div class="bkseparator--30"></div>
                                <h3 class="heading heading-h3">Fresh ideas & unique designs</h3>
                            </div>
                        </div>
                        <div class="creative-service-inner">
                            <div class="row">

                                <!-- Start Single Service -->
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="icon-box text-left no-border bg-transparant">
                                        <div class="inner">
                                            <div class="icon">
                                                <img src="/img/service/icon-box/home-vertical-menu-box-icon-image-01.png" alt="image">
                                            </div>
                                            <div class="content mt--35">
                                                <h5 class="heading heading-h5">Original Ideas</h5>
                                                <p class="bk_pra">Our quality of service assessment involves controlling and managing resources by setting priorities for specific types of clients and projects on the system.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Service -->

                                <!-- Start Single Service -->
                                <div class="col-lg-6 col-md-6 col-12 mt_sm--30">
                                    <div class="icon-box text-left no-border bg-transparant">
                                        <div class="inner">
                                            <div class="icon">
                                                <img src="/img/service/icon-box/home-vertical-menu-box-icon-image-02.png" alt="image">
                                            </div>
                                            <div class="content mt--35">
                                                <h5 class="heading heading-h5">Graphic designs</h5>
                                                <p class="bk_pra">We work with clients from all over the world. We had worked with and serving over 2000 customers and 1000 global companies across 13 countries in the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Service -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End What We Do Area -->

            <!-- Start Creative People Area -->
            <div class="creative-people-area bg_image--50 ptb--200 ptb-md--80 ptb-sm--80" :style="{backgroundImage: `url('/img/bg/bg-image-50.jpg')`}">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="creative-people-inner text-center">
                                <h2 class="heading">A group of <span class="theme-color">creative people.</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Creative People Area -->

            <!-- Start Progress Charts Area -->
            <div class="brook-progress-charts-area ptb--150 ptb-md--80 ptb-sm--80 bg_color--1">
                <div class="container">
                    <div class="row plr_sm--30">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="brook-section-title pr--70 pr_md--5 pr_sm--5 pr_lg--5">
                                <h5 class="heading heading-h5 red-color-2">Our Skills</h5>
                                <div class="bkseparator--30"></div>
                                <h3 class="heading heading-h3 line-height-1-42">We design & build brands, campaigns and
                                    <span class="theme-color">digital projects</span> for businesses large & small.</h3>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="progress-wrapper mt_sm--40">
                                <!-- Start Single Progress Charts -->
                                <div class="progress-charts">
                                    <h6 class="heading heading-h6">UI/UX <span class="percent-label float-right">85%</span></h6>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft custom-color--2" data-wow-duration="0.5s"
                                            data-wow-delay=".3s" role="progressbar" style="width: 85%" aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <!-- End Single Progress Charts -->

                                <!-- Start Single Progress Charts -->
                                <div class="progress-charts mt--40">
                                    <h6 class="heading heading-h6">Ideas <span class="percent-label float-right">85%</span></h6>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft custom-color--3" data-wow-duration="0.7s"
                                            data-wow-delay=".5s" role="progressbar" style="width: 85%" aria-valuenow="85"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <!-- End Single Progress Charts -->

                                <!-- Start Single Progress Charts -->
                                <div class="progress-charts mt--40">
                                    <h6 class="heading heading-h6">Marketing <span class="percent-label float-right">70%</span></h6>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft custom-color--4" data-wow-duration="0.8s"
                                            data-wow-delay=".6s" role="progressbar" style="width: 70%" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <!-- End Single Progress Charts -->

                                <!-- Start Single Progress Charts -->
                                <div class="progress-charts mt--40">
                                    <h6 class="heading heading-h6">Consulting <span class="percent-label float-right">90%</span></h6>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.6s"
                                            data-wow-delay=".7s" role="progressbar" style="width: 90%" aria-valuenow="90"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <!-- End Single Progress Charts -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Progress Charts Area -->

            <!-- Start Testimonial Area -->
            <div class="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--80 bg_image--51" :style="{backgroundImage: `url('/img/bg/bg-image-51.jpg')`}">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="brook-section-title text-center mb--65">
                                <h3 class="heading heading-h3 text-white">Testimonials</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <TestimonialThree />
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Testimonial Area -->

            <!-- Start Brand Area -->
            <div class="bk-brand-area bg_color--1 ptb--150 ptb-md--80 ptb-sm--60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="brook-section-title text-center mb--65">
                                <h3 class="heading heading-h3">Some of our clients</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <BrandLogoWithoutCarousel />
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Brand Area -->

            <!-- Start Blog Grid Area -->
            <div class="bk-blog-grid-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="brook-section-title text-center mb--30">
                                <h3 class="heading heading-h3">Our blog</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-6 move-up wow mt--30" v-for="blog in blogData.blogs.slice(3, 11)" :key="blog.id">
                            <div class="blog-grid">
                                <div class="post-thumb">
                                    <n-link :to="`/blog/${blog.slug}`">
                                        <img :src="blog.image" :alt="blog.alt">
                                    </n-link>
                                </div>
                                <div class="post-content">
                                    <div class="post-inner">
                                        <h5 class="heading heading-h5">
                                            <n-link :to="`/blog/${blog.slug}`">{{ blog.title }}</n-link>
                                        </h5>
                                        <div class="post-meta">
                                            <div class="post-date">{{ blog.date }}</div>
                                            <div class="post-category">
                                                <n-link :to="`/blog/${blog.slug}`">{{ blog.category }}</n-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Blog Grid Area -->
            
            <!-- Start Call To Action -->
            <div class="brook-call-to-action bg_color--19 ptb--70">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-sm-6 col-12">
                            <div class="call-content text-center text-sm-left">
                                <h3 class="heading heading-h3 text-white">Feeling inspired?</h3>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-12">
                            <div class="call-btn text-center text-sm-right mt_mobile--20">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded">Find out more</n-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Call To Action -->

            <!-- Start Footer Area -->
            <FooterStyleThree />
            <!-- End Footer Area -->
        </div>

    </div>

</template>

<script>
    import blogData from '../data/blog.json'

    export default {
        components: {
            HeaderVerticalOffcanvas: () => import('@/components/HeaderVerticalOffcanvas'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroVertical: () => import('@/components/HeroVertical'),
            TestimonialThree: () => import('@/components/sections/TestimonialThree'),
            BrandLogoWithoutCarousel: () => import('@/components/BrandLogoWithoutCarousel'),
            FooterStyleThree: () => import('@/components/FooterStyleThree'),
        },

        data() {
            return {
                blogData,
                navOpen: false,
                searchOpen: false,
                fullpageOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-15', 'template-font-1')
        },

        head() {
            return {
                title: 'Home Vertical Menu'
            }
        }
    };
</script>
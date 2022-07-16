<template>
    <div class="main-container">

        <HeaderOnepage @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <HeroOnepage />

        <CurveShape>
            <template v-slot:bgcolor>
                <path style="fill: #f4efff;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <MusicianIconBox />

        <MusicianPortfolioGallery />

        <OnepageTeammember />

        <TestimonialSix />

        <div class="brook-call-to-action bg_image--33 ptb--70 ptb-md--80 ptb-sm--80" :style="{backgroundImage: `url('/img/bg/bg-image-33.jpg')`}">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12">
                        <div class="call-content text-center">
                            <h3 class="heading heading-h3 text-white">Be our client. <span class="tarkis-color">Create a project</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <MusicianCounterup />

        <div class="bk-blog-grid-area ptb--120 ptb-md--80 ptb-sm--80 bg_color--10">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 move-up wow mt--40" v-for="blog in data.blogs.slice(4, 7)" :key="blog.id">
                        <BlogPostThree :blog="blog" addClass="grid-simple" />
                    </div>
                </div>
            </div>
        </div>

        <BrandLogoCarousel />

        <div class="bg_image--34 ptb--130 ptb-md--80 ptb-sm--80" :style="{backgroundImage: `url('/img/bg/bg-image-34.jpg')`}">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-12 col-12">
                        <div class="on-page-call-content">
                            <div class="call-content text-center text-sm-left">
                                <h2 class="heading heading-h2 text-white">Start a new <br> project ?</h2>
                            </div>
                            <div class="call-btn mt--60 mt_md--40 mt_sm--40">
                                <n-link to="/contact-us-modern" class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded">Contact now</n-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-12 mt_md--40 mt_sm--40">
                        <div class="onepage-contact-inner bg_color--1">
                            <div class="page-address-inner">

                                <!-- Start Single Address -->
                                <div class="address-content">
                                    <h5 class="heading heading-h5 font-20">Visit our studio at</h5>
                                    <div class="address mt--10">
                                        <p class="bk_pra font-16 line-height-1-87">2005 Stokes Isle Apt. 896, <br> Vacaville 10010, USA</p>
                                    </div>
                                </div>

                                <!-- Start Single Address -->
                                <div class="address-content bk-hover mt--50 mt_lg--20">
                                    <h5 class="heading heading-h5 font-20">Message us</h5>
                                    <div class="address mt--10">
                                        <p class="bk_pra font-16 line-height-1-87">
                                            <a class="color-dark" href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                                        </p>
                                        <p class="bk_pra font-16 line-height-1-87">
                                            <a class="color-dark" href="tel:(+68)120034509">(+68) 120034509</a>
                                        </p>
                                    </div>
                                </div>

                                <!-- Start Single Address -->
                                <div class="address-content mt--50 mt_lg--20">
                                    <div class="social-share social--transparent">
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="https://dribbble.com/" target="_blank">
                                            <i class="fab fa-dribbble"></i>
                                        </a>
                                        <a href="https://www.pinterest.com/" target="_blank">
                                            <i class="fab fa-pinterest"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="googlemap">
                                <GoogleMap />
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
    import data from '~/data/blog.json';

    export default {
        components: {
            HeaderOnepage: () => import('@/components/HeaderOnepage'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroOnepage: () => import('@/components/HeroOnepage'),
            MusicianIconBox: () => import('@/components/MusicianIconBox'),
            MusicianPortfolioGallery: () => import('@/components/MusicianPortfolioGallery'),
            OnepageTeammember: () => import('@/components/OnepageTeammember'),
            TestimonialSix: () => import('@/components/TestimonialSix'),
            MusicianCounterup: () => import('@/components/MusicianCounterup'),
            BlogPostThree: () => import('@/components/BlogPostThree'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            GoogleMap: () => import('@/components/GoogleMap'),
            FooterTwo: () => import('@/components/FooterTwo'),
            CurveShape: () => import('@/components/CurveShape'),
        },  

        data () {
            return {
                data,
                fullpageOpen: false,
                navOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-10', 'template-font-3')
        },

        head() {
            return {
                title: 'Home Onepage'
            }
        },
    };
</script>
<template>
    <div class="main-container">

        <HeaderForOffCanvas @toggleFullpageMenu="fullpageOpen = !fullpageOpen" @togglenav="navOpen = !navOpen" />

        <OffcanvasMenu :class="{'is-visiable' : fullpageOpen}" @toggleFullpageMenu="fullpageOpen = !fullpageOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <div class="hero-creative-portfolio bg_color--3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="hero-content">
                            <h2 v-html="heroContent.heading"></h2>
                            <div class="hero-content--right">
                                <h3>{{ heroContent.title }}</h3>
                                <p>{{ heroContent.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bk-portfolio-area bg_color--3 swiper-custom-arrow swiper-arrow-hover">
            <div class="has-portfolio-wrapper">
                <div class="brook-element-carousel">
                    <swiper :options="swiperOption">
                        <div class="swiper-slide" v-for="slide in sliders" :key="slide.id">
                            <div class="has-center-content">
                                <div class="has-centerinner">
                                    <div class="thumb">
                                        <img :src="slide.image" :alt="slide.alt">
                                    </div>
                                    <div class="content">
                                        <h6 class="heading heading-h6 roboto-font third-color">{{ slide.category }}</h6>
                                        <div class="bkseparator--30"></div>
                                        <h1 class="heading heading-h1 playfair-font line-height-1-39">
                                            <n-link to="/portfolio/portfolio-details" class="text-white">
                                                {{ slide.heading }}
                                            </n-link>
                                        </h1>
                                        <div class="bkseparator--55"></div>
                                        <div class="read-more-btn">
                                            <n-link to="/portfolio/portfolio-details">
                                                <span>Project details</span> 
                                                <i class="fa fa-arrow-right"></i>
                                            </n-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper>

                    <!-- Add Arrows -->
                    <button class="swiper-btn swiper-btn-prev">
                        <i class="ion ion-ios-arrow-back"></i>
                    </button>
                    <button class="swiper-btn swiper-btn-next">
                        <i class="ion ion-ios-arrow-forward"></i>
                    </button>
                </div>
            </div>
        </div>

        <FooterStyleFour />

    </div>
</template>

<script>

    export default {
        components: {
            HeaderForOffCanvas: () => import('@/components/HeaderForOffCanvas'),
            OffcanvasMenu: () => import('@/components/OffcanvasMenu'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            FooterStyleFour: () => import('@/components/FooterStyleFour'),
        },

        data () {
            return {
                swiperOption: {
                    autoplay: {
                        delay: 5000
                    },
                    loop: true,
                    centeredSlides: true,
                    slidesPerView: 2,
                    spaceBetween: 50,
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev',
                        clickable: true,
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        992:{
                            slidesPerView : 2
                        },
                        300:{
                            slidesPerView : 1,
                        }
                    }
                },

                sliders: [
                    {
                        id: 1,
                        image: "/img/portfolio/grid/has-center-1.jpg",
                        alt: "portfolio image",
                        category: "Digital",
                        heading: "B-sharp High-end Audio"
                    },
                    {
                        id: 2,
                        image: "/img/portfolio/grid/has-center-2.jpg",
                        alt: "portfolio image",
                        category: "Digital",
                        heading: "B-sharp High-end Audio"
                    },
                    {
                        id: 3,
                        image: "/img/portfolio/grid/has-center-3.jpg",
                        alt: "portfolio image",
                        category: "Digital",
                        heading: "B-sharp High-end Audio"
                    },
                    {
                        id: 4,
                        image: "/img/portfolio/grid/has-center-4.jpg",
                        alt: "portfolio image",
                        category: "Digital",
                        heading: "B-sharp High-end Audio"
                    }
                ],
                heroContent: {
                    heading: "We love finding <span>simple solutions</span> to complex challenges.",
                    title: "Plan, create and grow",
                    text: "Rather than wandering aimlessly through life, you should define a destination then create a path in front of you in order to move towards your goals."
                },

                fullpageOpen: false,
                navOpen: false,
            }
        },

        mounted () {
            document.body.classList.add('template-color-7', 'template-font-4')
        },

        head() {
            return {
                title: 'Brook || Home Creative Portfolio'
            }
        },
    };
</script>

<style lang="scss" scoped>
    .hero-creative-portfolio {
        padding: 250px 0 150px;
        // res
        @media #{$md-layout, $sm-layout}{
            padding: 200px 0 110px;
        }
        .hero-content {
            display: flex;
            // res
            @media #{$md-layout, $sm-layout}{
                display: block;
            }

            h2 {
                color: $white;
                font-size: 38px;
                font-weight: 900;
                line-height: 1.8;
                max-width: 550px;
                // res
                @media #{$md-layout, $sm-layout}{
                    line-height: 1.4;
                }
                @media #{$large-mobile}{
                    font-size: 28px;
                }
                span {
                    color: $color-7;
                    font-style: italic;
                }
            }
            &--right {
                max-width: 380px;
                // res
                @media #{$md-layout, $sm-layout}{
                    margin-top: 50px;
                }
                h3 {
                    color: $color-7;
                    font-size: 30px;
                    font-family: $roboto;
                    margin-bottom: 50px;
                    // res
                    @media #{$md-layout, $sm-layout}{
                        margin-bottom: 25px;
                    }
                    @media #{$large-mobile}{
                        font-size: 26px;
                    }
                }
                p {
                    color: $white;
                    font-size: 17px;
                    line-height: 1.8;
                }
            }
        }
    }
</style>
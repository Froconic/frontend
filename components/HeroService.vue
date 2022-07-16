<template>
    <div class="hero-service-area swiper-arrow-hover bg-cover" :style="{ backgroundImage: `url('/img/slider/home-service-slide.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <swiper :options="swiperOption">
                        <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                            <div class="hero-content text-center">
                                <h1 class="title">{{ slider.heading }}</h1>
                                <h3 class="sub-title">{{ slider.subHeading }}</h3>
                            </div>
                        </div>
                    </swiper>

                    <!-- slider arrow navigation -->
                    <div class="ht-swiper-button ht-swiper-button-prev">
                        <i class="ion ion-ios-arrow-back"></i>
                    </div>
                    <div class="ht-swiper-button ht-swiper-button-next">
                        <i class="ion ion-ios-arrow-forward"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 5000
                    },
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                },

                sliders: [
                    {
                        id: 1,
                        heading: "Design & build Brands",
                        subHeading: "Bringing the best experiences"
                    },
                    {
                        id: 2,
                        heading: "Fresh ideas & designs",
                        subHeading: "Bringing the best experiences"
                    },
                    {
                        id: 3,
                        heading: "A full & service",
                        subHeading: "Bringing the best experiences"
                    }
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>
    .hero-service-area {
        width: 100%;
        height: 100vh;
        align-items: center;
        display: flex !important;
        justify-content: center;
        z-index: 1;
        // res
        @media #{$lg-layout}{
            height: 650px;
        }
        @media #{$md-layout}{
            height: 500px;
        }
        @media #{$sm-layout}{
            height: 450px;
        }
        .hero-content {
            // res
            @media #{$md-layout, $sm-layout}{
                margin-top: 80px;
            }
            .title {
                color: $white;
                font-size: 90px;
                font-weight: 600;
                margin-bottom: 30px;
                // res
                @media #{$lg-layout}{
                    font-size: 70px;
                }
                @media #{$md-layout}{
                    font-size: 55px;
                }
                @media #{$sm-layout}{
                    font-size: 42px;
                }
                @media #{$large-mobile}{
                    font-size: 32px;
                }
            }
            .sub-title {
                color: $white;
                font-size: 36px;
                font-weight: 600;
                // res
                @media #{$md-layout}{
                    font-size: 28px;
                }
                @media #{$sm-layout}{
                    font-size: 24px;
                }
                @media #{$large-mobile}{
                    font-size: 20px;
                    font-weight: 500;
                }
            }
        }
        .ht-swiper-button {
            color: $white;
            font-size: 50px;
        }
    }
</style>
<template>
    <div class="hero-essential-area swiper-arrow-hover">
        <swiper :options="swiperOption">
            <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                <div class="hero-essential-slide bg-cover" :style="{backgroundImage: `url(${slider.bgImage})`}">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-content hero-essential">
                                    <h2 class="hero-title" v-html="slider.heading"></h2>
                                    <h5>{{ slider.subHeading }}</h5>
                                    <n-link to="/about-us-01" class="btn-essential">Explore Now</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
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
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    autoplay: true,
                    effect: "fade",
                    fadeEffect: { 
                        crossFade: true 
                    },
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                },
                sliders: [
                    {
                        id: 1,
                        heading: "We're here to level <br> up your online <br> presence.",
                        subHeading: "A Creative Agency like no other.",
                        bgImage: "/img/slider/essential-1.jpg"
                    },
                    {
                        id: 2,
                        heading: "We're here to level <br> up your online <br> presence.",
                        subHeading: "A Creative Agency like no other.",
                        bgImage: "/img/slider/essential-2.jpg"
                    }
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>
    .hero-essential-slide {
        height: 650px;
        display: flex;
        align-items: center;
        position: relative;
        // res
        @media #{$md-layout}{
            height: 600px;
        }
        @media #{$sm-layout}{
            height: 550px;
        }
        @media #{$small-mobile}{
            height: 450px;
        }
        .hero-content {
            max-width: 500px;
            .hero-title {
                font-size: 48px;
                font-weight: 300;
                // res
                @media #{$sm-layout}{
                    font-size: 40px;
                }
                @media #{$small-mobile}{
                    font-size: 32px;
                }
            }
            h5 {
                color: #777;
                font-size: 20px;
                font-weight: 300;
                line-height: 1.2;
                margin-bottom: 40px;
                // res
                @media #{$sm-layout}{
                    color: #444;
                }
                @media #{$small-mobile}{
                    margin-top: 15px;
                    line-height: 1.5;
                }
            }
        }
    }
    .hero-essential-area {
        .ht-swiper-button {
            color: $black;
            font-size: 30px;
            left: 70px;
            width: 68px;
            height: 68px;
            line-height: 68px;
            border-radius: 50%;
            text-align: center;
            background-color: $white;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.01);
            &-next {
                right: 70px;
                left: auto;
            }
        }
    }
</style>
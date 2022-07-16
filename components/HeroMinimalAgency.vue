<template>
    <div class="hero-minimal-agency">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 number-dot">
                    <swiper :options="swiperOption">
                        <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
                            <div class="hero-content">
                                <div class="hero-content__image text-center">
                                    <img :src="slider.image" :alt="slider.alt" class="animation_images">
                                </div>
                                <div class="hero-content__text">
                                    <h6 class="sub-heading">{{ slider.subHeading }}</h6>
                                    <h1 class="heading">{{ slider.heading }}</h1>
                                </div>
                            </div>
                        </div>
                    </swiper>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination minimal-agency"></div>
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
                    effect: "fade",
                    fadeEffect: { 
                        crossFade: true 
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        },
                    },
                },

                sliders: [
                    {
                        id: 1,
                        subHeading: "art direction",
                        heading: "Nouvelle Histories",
                        image: "/img/slider/minimal-agency-slide-01.jpg",
                        alt: "slider image"
                    },
                    {
                        id: 2,
                        subHeading: "art direction",
                        heading: "Isometric building",
                        image: "/img/slider/minimal-agency-slide-02.jpg",
                        alt: "slider image"
                    },
                    {
                        id: 3,
                        subHeading: "art direction",
                        heading: "Lighting",
                        image: "/img/slider/minimal-agency-slide-03.jpg",
                        alt: "slider image"
                    }
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>
    .hero-minimal-agency {
        height: 835px;
        display: flex;
        align-items: center;
        // res
        @media #{$sm-layout}{
            height: 480px;
        }
        @media #{$large-mobile}{
            height: 350px;
        }
    }
    .hero-content {
        position: relative;
        &__image {
            img {
                width: 60%;
                // res
                @media #{$sm-layout}{
                    width: 80%;
                }
            }
        }

        &__text {
            top: 50%;
            left: 0;
            position: absolute;
            transform: translateY(-50%);
            .sub-heading {
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 1px;
                text-transform: uppercase;
                font-family: $secondary-font;
            }
            .heading {
                font-size: 125px;
                font-weight: 700;
                // res
                @media #{$md-layout}{
                    font-size: 70px;
                }
                @media #{$sm-layout}{
                    font-size: 40px;
                }
                @media #{$small-mobile}{
                    font-size: 32px;
                }
            }
        }
    }
</style>
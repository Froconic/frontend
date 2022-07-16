<template>
    <div class="bk-brand-area ptb--150 section-separator-with--border ptb-md--80 ptb-sm--60 swiper-arrow-hover">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-wrapper">
                        <div class="brand__list brand-default brand-style--1">
                            <swiper :options="swiperOption">
                                <div class="brand swiper-slide" v-for="brand in data" :key="brand.id">
                                    <n-link to="">
                                        <img :src="brand.logo" alt="logo image">
                                    </n-link>
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
        </div>
    </div>
</template>

<script>
    import data from '../data/brandLogo.json';
    export default {
        data () {
            return {
                data,
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000,
                    },
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        1200:{
                            slidesPerView : 5
                        },

                        768:{
                            slidesPerView : 3

                        },

                        480:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        }
    };
</script>
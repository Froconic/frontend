<template>
    <div class="flexale-image ptb--150 section-separator-with--border ptb-md--80 ptb-sm--60 swiper-arrow-hover">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-element-carousel flexable-arrow flexable-dots">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide">
                                <div class="flexale-image">
                                    <div class="thumb">
                                        <img src="/img/flexable-image-slide/flexale-1/flexable-small--image-5.jpg" alt="image">
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="flexale-image">
                                    <div class="thumb">
                                        <img src="/img/flexable-image-slide/flexale-1/flexable-small--image-1.jpg" alt="image">
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="flexale-image">
                                    <div class="thumb">
                                        <img src="/img/flexable-image-slide/flexale-1/flexable-small--image-2.jpg" alt="image">
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="flexale-image">
                                    <div class="thumb">
                                        <img src="/img/flexable-image-slide/flexale-1/flexable-small--image-3.jpg" alt="image">
                                    </div>
                                </div>
                            </div>
                        </swiper>

                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-dots-bottom"></div>

                        <!-- slider arrow navigation -->
                        <div class="ht-swiper-button ht-swiper-button-prev swiper-arrow-center">
                            <i class="fas fa-angle-left"></i>
                        </div>
                        <div class="ht-swiper-button ht-swiper-button-next swiper-arrow-center">
                            <i class="fas fa-angle-right"></i>
                        </div>
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
                    spaceBetween: 30,
                    autoplay: {
                        delay: 3000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        768:{
                            slidesPerView : 3
                        },

                        480:{
                            slidesPerView : 2
                        },
                        300:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    };
</script>
<template>
    <div class="bk-carousel-slider ptb--150 ptb-md--80 ptb-sm--60 swiper-arrow-hover">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-element-carousel">
                        <swiper :options="swiperOption">
                            <!-- Start Single Carousel -->
                            <div class="carousle-slider swiper-slide">
                                <div class="thumb">
                                    <img src="/img/carousel/carousel-md-1.jpg" alt="Carousel Image">
                                </div>
                                <div class="content">
                                    <div class="spacing"></div>
                                    <h5>Text & image</h5>
                                    <p>Brook embraces a modern look with various enhanced pre-defined page elements.</p>
                                </div>
                            </div>
                            <!-- End Single Carousel -->

                            <!-- Start Single Carousel -->
                            <div class="carousle-slider swiper-slide">
                                <div class="thumb">
                                    <img src="/img/carousel/carousel-md-2.jpg" alt="Carousel Image">
                                </div>
                                <div class="content">
                                    <div class="spacing"></div>
                                    <h5>Text & image</h5>
                                    <p>Brook embraces a modern look with various enhanced pre-defined page elements.</p>
                                </div>
                            </div>
                            <!-- End Single Carousel -->

                            <!-- Start Single Carousel -->
                            <div class="carousle-slider swiper-slide">
                                <div class="thumb">
                                    <img src="/img/carousel/carousel-md-3.jpg" alt="Carousel Image">
                                </div>
                                <div class="content">
                                    <div class="spacing"></div>
                                    <h5>Text & image</h5>
                                    <p>Brook embraces a modern look with various enhanced pre-defined page elements.</p>
                                </div>
                            </div>
                            <!-- End Single Carousel -->

                            <!-- Start Single Carousel -->
                            <div class="carousle-slider swiper-slide">
                                <div class="thumb">
                                    <img src="/img/carousel/carousel-md-4.jpg" alt="Carousel Image">
                                </div>
                                <div class="content">
                                    <div class="spacing"></div>
                                    <h5>Text & image</h5>
                                    <p>Brook embraces a modern look with various enhanced pre-defined page elements.</p>
                                </div>
                            </div>
                            <!-- End Single Carousel -->
                        </swiper>

                        <!-- Add Pagination -->
                        <div class="swiper-pagination fff swiper-dots-bottom"></div>

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
                    pagination: {
                        el: '.fff',
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
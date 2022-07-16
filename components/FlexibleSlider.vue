<template>
    <div class="flexale-image bg_color--1" :class="addClass">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-element-carousel flexable-arrow flexable-dots">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide">
                                <div class="flexale-image">
                                    <div class="thumb">
                                        <img src="/img/flexable-image-slide/flexale-1/flexable-image-4.jpg" alt="image">
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="flexale-image">
                                    <div class="thumb">
                                        <img src="/img/flexable-image-slide/flexale-1/flexable-image-5.jpg" alt="image">
                                    </div>
                                </div>
                            </div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["addClass"],
        
        data () {
            return {
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    spaceBetween: 30,
                    autoplay: true,
                    effect: "fade",
                    fadeEffect: { crossFade: true },
                }
            }
        }
    };
</script>
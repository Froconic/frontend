<template>
    <div class="brook-hero-number-slider-area position-relative">
        <div class="brook-element-carousel number-dot">
            <swiper :options="swiperOption">
                <div class="swiper-slide" v-for="slide in sliders" :key="slide.id">
                    <div class="hero-item bg-image" :style="{backgroundImage:`url(${slide.bgImage})`}">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hero-content-2 center">
                                        <h6>{{ slide.subHeading }}</h6>
                                        <h3>{{ slide.heading }}</h3>
                                        <n-link to="/about-us-01" class="brook-btn bk-btn-white btn-sd-size btn-rounded space-between">Explore Now</n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    spaceBetween: 20,
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
                        heading: "revolutionary creations and exquisite designs.",
                        subHeading: "WE WORK SMART, WE PLAY HARD",
                        bgImage: "/img/slider/authentic-studio-slide-01.jpg"
                    },
                    {
                        id: 2,
                        heading: "revolutionary creations and exquisite designs.",
                        subHeading: "WE WORK SMART, WE PLAY HARD",
                        bgImage: "/img/slider/authentic-studio-slide-02.jpg"
                    },
                    {
                        id: 3,
                        heading: "revolutionary creations and exquisite designs.",
                        subHeading: "WE WORK SMART, WE PLAY HARD",
                        bgImage: "/img/slider/authentic-studio-slide-03.jpg"
                    }
                ]
            }
        }
    };
</script>
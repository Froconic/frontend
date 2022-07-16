<template>
    <div class="brook-testimonial-area bg_color--7 swiper-custom-arrow swiper-arrow-hover">
        <div class="row row--0 align-items-center">
            <div class="col-lg-3 col-xl-5 text-center ptb-md--80 ptb-sm--80">
                <div class="brook-section-title text-left title-max-width plr_sm--30 plr_md--40">
                    <h3 class="heading heading-h3 text-white">What <br>people say<br> about us</h3>
                </div>
            </div>

            <div class="col-lg-9 col-xl-7">
                <div class="brook-element-carousel testimonial-space-right testimonial-color-variation">
                    <swiper :options="swiperOption">
                        <div class="swiper-slide" v-for="testimonial in data.testimonials" :key="testimonial.id">
                            <div class="testimonial testimonial_style--1 hover-transparent space-large--topbottom bg-dark">
                                <div class="content">
                                    <p class="bk_pra" v-html="testimonial.text"></p>
                                    <div class="testimonial-info">
                                        <div class="post-thumbnail">
                                            <img :src="testimonial.thumb" :alt="testimonial.alt">
                                        </div>
                                        <div class="clint-info">
                                            <h6>{{ testimonial.name }}</h6>
                                            <span>{{ testimonial.position }}</span>
                                        </div>
                                    </div>
                                    <div class="testimonial-quote">
                                        <span class="fa fa-quote-right"></span>
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
    </div>
</template>

<script>
    import data from '../../data/testimonial.json';

    export default {
        data () {
            return {
                data,
                swiperOption: {
                    loop: true,
                    arrows: true,
                    centeredSlides: true,
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev',
                        clickable: true,
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        768:{
                            slidesPerView : 3
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
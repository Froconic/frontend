<template>
    <div class="brook-testimonial-area ptb--130 ptb-md--80 ptb-sm--80 bg_color--16">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-section-title text-center mb--80 mb_sm--40">
                        <h3 class="heading heading-h3 font-large">What clients talk about us</h3>
                        <div class="thumb mt--35 mt_sm--20">
                            <img src="/img/service/icon-box/wavy-icon.png" alt="Multipurpose">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 pb--60">
                    <div class="brook-element-carousel">
                        <swiper :options="swiperOption">
                            <!-- Start Single Testimonial -->
                            <div class="swiper-slide testimonial testimonial_style--2">
                                <div class="content">
                                    <h4 class="heading heading-h4">Best product ever !</h4>
                                    <ul class="rating d-flex">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <p class="bk_pra">You can’t succeed if you just do what others do and follow
                                        the well-worn path. You need to create a new and original path for
                                        yourself.</p>
                                    <div class="testimonial-info">
                                        <div class="post-thumbnail">
                                            <img src="/img/testimonial/clint-1/clint-1.jpg" alt="clint image">
                                        </div>
                                        <div class="clint-info">
                                            <h6>Harley Mills</h6>
                                            <span>PR Officer</span>
                                        </div>
                                        <div class="testimonial-quote">
                                            <span class="fa fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Testimonial -->

                            <!-- Start Single Testimonial -->
                            <div class="swiper-slide testimonial testimonial_style--2">
                                <div class="content">
                                    <h4 class="heading heading-h4">Best product ever !</h4>
                                    <ul class="rating d-flex">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <p class="bk_pra">You can’t succeed if you just do what others do and follow
                                        the well-worn path. You need to create a new and original path for
                                        yourself.</p>
                                    <div class="testimonial-info">
                                        <div class="post-thumbnail">
                                            <img src="/img/testimonial/clint-1/clint-2.jpg" alt="clint image">
                                        </div>
                                        <div class="clint-info">
                                            <h6>Harley Mills</h6>
                                            <span>PR Officer</span>
                                        </div>
                                        <div class="testimonial-quote">
                                            <span class="fa fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Testimonial -->

                            <!-- Start Single Testimonial -->
                            <div class="swiper-slide testimonial testimonial_style--2">
                                <div class="content">
                                    <h4 class="heading heading-h4">Best product ever !</h4>
                                    <ul class="rating d-flex">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                    <p class="bk_pra">You can’t succeed if you just do what others do and follow
                                        the well-worn path. You need to create a new and original path for
                                        yourself.</p>
                                    <div class="testimonial-info">
                                        <div class="post-thumbnail">
                                            <img src="/img/testimonial/clint-1/clint-3.jpg" alt="clint image">
                                        </div>
                                        <div class="clint-info">
                                            <h6>Harley Mills</h6>
                                            <span>PR Officer</span>
                                        </div>
                                        <div class="testimonial-quote">
                                            <span class="fa fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Testimonial -->
                        </swiper>

                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-dots-bottom"></div>
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
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        992:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2
                        },

                        300:{
                            slidesPerView : 1
                        }
                    }
                },
            }
        },
    };
</script>
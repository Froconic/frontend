<template>
    <div class="brook-testimonial-area ptb--100 ptb-md--80 ptb-sm--60 bg_image--5" :style="{ backgroundImage: `url('/img/bg/bg-image-5.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="testimonial-wrapper testimonial-active--single--arrow wow move-up">
                        <div class="testimonial-container pb--30">
                            <!-- Start Single Testimonial -->
                            <div class="testimonial testimonial--creative">

                                <div class="brook-element-carousel nav-thumb testimonial-fixed-width testimonial-nav-style">
                                    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                                        <!-- Start Single Thumb -->
                                        <div class="clint-thumb swiper-slide">
                                            <img src="/img/testimonial/clint-3/avata-01.png" alt="testimonial images">
                                        </div>

                                        <!-- Start Single Thumb -->
                                        <div class="clint-thumb swiper-slide">
                                            <img src="/img/testimonial/clint-3/avata-02.png" alt="testimonial images">
                                        </div>

                                        <!-- Start Single Thumb -->
                                        <div class="clint-thumb swiper-slide">
                                            <img src="/img/testimonial/clint-3/avata-03.png" alt="testimonial images">
                                        </div>

                                        <!-- Start Single Thumb -->
                                        <div class="clint-thumb swiper-slide">
                                            <img src="/img/testimonial/clint-3/avata-01.png" alt="testimonial images">
                                        </div>
                                    </swiper>
                                </div>

                                <div class="brook-element-carousel nav-content testimonial-nav-content">
                                    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                                        <!-- Start Single COntent -->
                                        <div class="testimonial-nav swiper-slide">
                                            <div class="content">
                                                <p>You can’t succeed if you just do what others do and follow the well-worn path. You need to create a new and original path for yourself.</p>
                                                <ul class="rating d-flex justify-content-center">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                </ul>
                                                <div class="testimonial-info">
                                                    <div class="clint-info">
                                                        <h6>Harley Mills</h6>
                                                        <span>- MMs Agency</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single COntent -->

                                        <!-- Start Single COntent -->
                                        <div class="testimonial-nav swiper-slide">
                                            <div class="content">
                                                <p>Nipa You can’t succeed if you just do what others do and follow the well-worn path. You need tocreate a new and original path for yourself.</p>
                                                <ul class="rating d-flex justify-content-center">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                </ul>
                                                <div class="testimonial-info">
                                                    <div class="clint-info">
                                                        <h6>Harley Mills</h6>
                                                        <span>- PR Officer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single COntent -->

                                        <!-- Start Single COntent -->
                                        <div class="testimonial-nav swiper-slide">
                                            <div class="content">
                                                <p>Designing is not intended for talented people. It’s for everyone. What you need to do is just to open up your mind to all possibilities.</p>
                                                <ul class="rating d-flex justify-content-center">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                </ul>
                                                <div class="testimonial-info">
                                                    <div class="clint-info">
                                                        <h6>Harley Mills</h6>
                                                        <span>- PR Officer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single COntent -->

                                        <!-- Start Single COntent -->
                                        <div class="testimonial-nav swiper-slide">
                                            <div class="content">
                                                <p>Never stop learning. Consider yourself as a life-long learner and try your best to learn as much as you can, you definitely will succeed.</p>
                                                <ul class="rating d-flex justify-content-center">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                </ul>
                                                <div class="testimonial-info">
                                                    <div class="clint-info">
                                                        <h6>Harley Mills</h6>
                                                        <span>- PR Officer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Single COntent -->
                                    </swiper>
                                </div>

                            </div>
                            <!-- End Single Testimonial -->
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
                swiperOptionTop: {
                    slidesPerView : 1,
                    spaceBetween: 10,
                    loopedSlides:3
                },

                swiperOptionThumbs: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                    freeMode: true,
                    slideToClickedSlide: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    loopedSlides:3
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper
                const swiperThumbs = this.$refs.swiperThumbs.$swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
        }
    };
</script>
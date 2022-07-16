<template>
    <div class="brook-testimonial-area ptb--150 ptb-md--80 ptb-sm--60 bg_image--60" :style="{ backgroundImage:`url('/img/bg/bg-image-60.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="brook-section-title text-center mb--70">
                        <h6 class="heading-13 theme-color text-uppercase fw-500">TESTIMONIALS</h6>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="testimonial-wrapper">
                        <div class="testimonial-container pb--30">
                            <div class="testimonial testimonial--creative">
                                <div class="brook-element-carousel nav-content">
                                    <swiper :options="swiperOption">
                                        <div class="swiper-slide testimonial testimonial_style--4" v-for="testimonial in testimonials" :key="testimonial.id">
                                            <div class="content">
                                                <p>{{ testimonial.text }}</p>
                                                <div class="testimonial-info">
                                                    <div class="post-thumbnail">
                                                        <img :src="testimonial.thumb" :alt="testimonial.alt">
                                                    </div>
                                                    <div class="clint-info">
                                                        <h6>{{ testimonial.name }}</h6>
                                                        <span>{{ testimonial.position }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper>
                                    <!-- add pagination -->
                                    <div class="swiper-pagination swiper-dots-bottom"></div>
                                </div>
                            </div>
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
                    autoplay: true,
                    speed: 1000,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },

                testimonials: [
                    {
                        "id": 1,
                        "name": "Uzzal Hossain",
                        "position": "PR Officer",
                        "thumb": "/img/testimonial/clint-1/clint-3.jpg",
                        "alt": "client image",
                        "text": "Designing is not intended for talented people. It’s for everyone. What you need to do is just to open up your mind to all possibilities."
                    },
                    {
                        "id": 2,
                        "name": "Yeasin Rony",
                        "position": "PR Officer",
                        "thumb": "/img/testimonial/clint-1/clint-3.jpg",
                        "alt": "client image",
                        "text": "Never stop learning. Consider yourself as a life-long learner and try your best to learn as much as you can, you definitely will succeed."
                    },
                    {
                        "id": 3,
                        "name": "Raju Ahammad",
                        "position": "PR Officer",
                        "thumb": "/img/testimonial/clint-1/clint-3.jpg",
                        "alt": "client image",
                        "text": "You can’t succeed if you just do what others do and follow the well-worn path. You need to create a new and original path for yourself."
                    }
                ]
            }
        }
    };
</script>
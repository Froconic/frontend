<template>
    <div class="flexableimage__wrapper">
        <swiper :options="swiperOption">
            <div class="swiper-slide" v-for="slide in sliders" :key="slide.id">
                <div class="flexale-image">
                    <div class="thumb">
                        <img :src="slide.image" alt="image">
                    </div>
                </div>
            </div>
        </swiper>

        <!-- Add Arrows -->
        <button class="swiper-btn swiper-btn-prev">
            <i class="fas fa-angle-left"></i>
        </button>
        <button class="swiper-btn swiper-btn-next">
            <i class="fas fa-angle-right"></i>
        </button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    speed: 1500,
                    slidesPerView: 2,
                    spaceBetween: 15,
                    loop: true,
                    centeredSlides: true,
                    autoplay: true,
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev'
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        992:{
                            slidesPerView: 2,
                            centeredSlides: true,
                        },

                        768:{
                            centeredSlides: false,
                        },

                        576:{
                            slidesPerView : 2,
                            centeredSlides: false,
                        },
                        300:{
                            slidesPerView : 1,
                            centeredSlides: false,
                        }
                    }
                },
                sliders: [
                    {
                        id: 1,
                        image: "/img/flexable-image-slide/flexable-2/flexable-1.png"
                    },
                    {
                        id: 2,
                        image: "/img/flexable-image-slide/flexable-2/flexable-2.png"
                    },
                    {
                        id: 3,
                        image: "/img/flexable-image-slide/flexable-2/flexable-3.png"
                    }
                ]
            }
        }
    };
</script>
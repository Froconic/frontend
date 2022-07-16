<template>
    <div class="brook-portfolio-slide">
        <div class="portfolio-slide-activation swiper-dot-vertical-center">
            <swiper :options="swiperOption">
                <div class="swiper-slide single-portfolio-slide pl--100 plr_sm--10 pl_md--50" v-for="slide in sliders" :key="slide.id">
                    <div class="fullscreen d-flex align-items-center bg_image--45" :style="{ backgroundImage: `url(${slide.coverImage})` }">
                        <div class="inner">
                            <div class="info">
                                <h3 class="heading heading-h3 text-white">
                                    <n-link to="/portfolio/portfolio-details">
                                        {{ slide.title }}
                                    </n-link>
                                </h3>
                                <div class="category">
                                    <n-link to="/portfolio/portfolio-details">{{ slide.category }}</n-link>
                                </div>
                                <div class="slide-btn">
                                    <n-link to="/portfolio/portfolio-details">View Project</n-link>
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
                    autoplay: true,
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
                    },
                },

                sliders:[
                    {
                        id: 1,
                        title: "B-sharp High-end Audio",
                        category: "Design",
                        coverImage: "/img/bg/bg-image-45.jpg"
                    },
                    {
                        id: 2,
                        title: "Enchanting Portrait Hacks",
                        category: "Digital",
                        coverImage: "/img/bg/bg-image-46.jpg"
                    },
                    {
                        id: 3,
                        title: "Digital Marketing Basics",
                        category: "Design",
                        coverImage: "/img/bg/bg-image-47.jpg"
                    },
                    {
                        id: 4,
                        title: "Measure Digital Progress",
                        category: "Life Style",
                        coverImage: "/img/bg/bg-image-48.jpg"
                    },
                    {
                        id: 5,
                        title: "Graphic Design Decoding",
                        category: "Digital",
                        coverImage: "/img/bg/bg-image-46.jpg"
                    },
                ]
            }
        },
    };
</script>
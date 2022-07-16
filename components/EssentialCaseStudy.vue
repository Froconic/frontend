<template>
    <div class="case-studis-area pt--120 pt-md--80 pt-sm--60">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="brook-section-title text-center mb--45">
                        <h6 class="heading-13 theme-color text-uppercase fw-500">Our case studies</h6>
                        <div class="bkseparator--25"></div>
                        <h2 class="heading-40 fw-200">Our projects make us proud</h2>
                    </div>
                </div>
            </div>
            <div class="brook-element-carousel">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" v-for="post in caseLists" :key="post.id">
                        <div class="row mt--30">
                            <div class="col-xl-5 col-lg-6">
                                <div class="case-slider-content">
                                    <div class="post-count">{{ post.count }}</div>
                                    <h6 class="heading headin-h6 theme-color wow move-up animate">{{ post.category }}</h6>
                                    <h3 class="heading-font line-height-1-5 wow move-up animate">{{ post.heading }}</h3>
                                    <p class="text">{{ post.text }}</p>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-6">
                                <div class="image-wrap">
                                    <div class="image">
                                        <div class="image">
                                            <img :src="post.image" alt="image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper>
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
                    spaceBetween: 30
                },

                caseLists: [
                    {
                        id: 1,
                        count: "01",
                        category: "Web Design",
                        heading: "Open lane - Modern dashboard from Brook",
                        text: "The key to this brook dashboard is that it clearly shows progress towards daily and monthly goals using bullet charts.",
                        image: "/img/case-study/home-essential-case-study-image-01.png"
                    },
                    {
                        id: 2,
                        count: "02",
                        category: "Web Development",
                        heading: "Brook Analyze",
                        text: "Measure your social network performance, create brilliant reports in a few clicks, and get suggestions to improve your strategy.",
                        image: "/img/case-study/home-essential-case-study-image-02.png"
                    },
                    {
                        id: 3,
                        count: "03",
                        category: "Digital Marketing",
                        heading: "Marketing Automation Platform",
                        text: "Our tool help marketers capture leads, nurture them further down the funnel, and analyze lead behavior and campaign performance.",
                        image: "/img/case-study/home-essential-case-study-image-03.png"
                    }
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>
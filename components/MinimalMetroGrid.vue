<template>
    <div class="brook-portfolio-area bg_color--1 bk-masonary-wrapper">
        <div class="portfolio-grid-metro3 mesonry-list">
            <masonry
                :cols="{default: 2, 575: 1}"
                :gutter="30"
                >
                <div class="portfolio portfolio_style--1 mt--30" v-for="portfolio in portfolios" :key="portfolio.id">
                    <div class="poss_relative">
                        <div class="thumb">
                            <img :src="portfolio.image" :alt="portfolio.heading">
                        </div>
                        <div class="port-overlay-info with-caption position-left">
                            <div class="hover-action">
                                <h3 class="post-overlay-title font-24">
                                    <n-link to="/portfolio/portfolio-details">{{portfolio.heading}}</n-link>
                                </h3>
                                <div class="category">{{ portfolio.category }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </masonry>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                portfolios: [
                    {
                        id: 1,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-1.jpg"
                    },
                    {
                        id: 2,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-2.jpg"
                    },
                    {
                        id: 3,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-3.jpg"
                    },
                    {
                        id: 4,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-4.jpg"
                    },
                    {
                        id: 5,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-5.jpg"
                    },
                    {
                        id: 6,
                        heading: "B-sharp High-end Audio",
                        category: "Design",
                        image: "/img/portfolio/grid/metro3-6.jpg"
                    }
                ]
            }
        }
    };
</script>
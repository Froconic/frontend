<template>
    <div class="bk-portfolio-with-caption-area pt--150 pt_md--80 pt_sm--60 pb--150 pb_md--80 pb_sm--60 poss_relative bk-masonary-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brook-section-title text-center mb--60">
                        <h3 class="heading heading-h3">Recent Artists</h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="controls messonry-button text-center w-100 mb--70">
                    <button data-filter="all"><span class="filter-text">All</span>
                    <!-- <span class="filter-counter">6</span> -->
                    </button>
                    <button data-filter=".two-d"><span class="filter-text">2D</span> 
                    <!-- <span class="filter-counter">3</span> -->
                    </button>
                    <button data-filter=".digital"><span class="filter-text">Digital</span>
                     <!-- <span class="filter-counter">2</span> -->
                     </button>
                    <button data-filter=".music"><span class="filter-text">Music</span>
                     <!-- <span class="filter-counter">2</span> -->
                     </button>
                    <button data-filter=".photography"><span class="filter-text">Photography</span> 
                    <!-- <span class="filter-counter">2</span> -->
                    </button>
                </div>
            </div>

            <div class="row mtn--30 box">
                <div class="col-lg-4 col-sm-6 move-up wow mt--30 mix" v-for="portfolio in portfolioItems.slice(0, 6)" :key="portfolio.id" :class="portfolio.filterClass">
                    <PortfolioItemCenterCaption :portfolio="portfolio" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/portfolio.json';

    export default {
        components: {
            PortfolioItemCenterCaption: () => import('@/components/landing/PortfolioItemCenterCaption'),
        },
        
        data () {
            return {
              portfolioItems: [
                {
                  id: 1,
                  image: "/img/portfolio/portfolio-2/portfolio-01.jpg",
                  alt: "Portfolio Image",
                  heading: "Person 1",
                  category: "Digital",
                  slug: "the-language-of-designs-1",
                  filterClass: "two-d digital"
                },
                {
                  id: 2,
                  image: "/img/portfolio/portfolio-2/portfolio-01.jpg",
                  alt: "Portfolio Image",
                  heading: "Digital Marketing Basics",
                  category: "Digital",
                  slug: "the-language-of-designs-1",
                  filterClass: "creative digital"
                },
                {
                  id: 3,
                  image: "/img/portfolio/portfolio-2/portfolio-01.jpg",
                  alt: "Portfolio Image",
                  heading: "Digital Marketing Basics",
                  category: "Digital",
                  slug: "the-language-of-designs-1",
                  filterClass: "creative digital"
                },
                {
                  id: 4,
                  image: "/img/portfolio/portfolio-2/portfolio-01.jpg",
                  alt: "Portfolio Image",
                  heading: "Digital Marketing Basics",
                  category: "Digital",
                  slug: "the-language-of-designs-1",
                  filterClass: "creative digital"
                },
                {
                  id: 5,
                  image: "/img/portfolio/portfolio-2/portfolio-01.jpg",
                  alt: "Portfolio Image",
                  heading: "Digital Marketing Basics",
                  category: "Digital",
                  slug: "the-language-of-designs-1",
                  filterClass: "creative digital"
                },
                {
                  id: 6,
                  image: "/img/portfolio/portfolio-2/portfolio-01.jpg",
                  alt: "Portfolio Image",
                  heading: "Digital Marketing Basics",
                  category: "Digital",
                  slug: "the-language-of-designs-1",
                  filterClass: "creative digital"
                },
              ],
                data,
                mixer: null
            }
        },

        mounted () {
            this.$nextTick(() => {
                const containerEl = document.querySelector('.box')
                this.mixer = new this.mixitup(containerEl, {
                    
                })
            })
        },
    };
</script>

<style lang="scss">
    .box:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
</style>
<template>
    <div class="main-container">

        <HeaderBlack @togglenav="navOpen = !navOpen" @toggleSearch="searchOpen = !searchOpen" />

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <SearchPopup :class="{'search-popup-open' : searchOpen}" @toggleSearch="searchOpen = !searchOpen" />

        <div class="breadcaump-area pt--130 pb--50 bg_color--1 breadcaump-title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcaump-inner text-center">
                            <h1 class="heading heading-h1">Portfolio Grid Fltering</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="brook-portfolio-area ptb--100 ptb-md--80 ptb-sm--60">
            <div class="container">
                <div class="row">
                    <div class="controls messonry-button text-center w-100 mb--70">
                        <button data-filter="all"><span class="filter-text">All</span> <span class="filter-counter">6</span></button>
                        <button data-filter=".creative"><span class="filter-text">Creative</span> <span class="filter-counter">3</span></button>
                        <button data-filter=".design"><span class="filter-text">Design</span> <span class="filter-counter">2</span></button>
                        <button data-filter=".digital"><span class="filter-text">Digital</span> <span class="filter-counter">2</span></button>
                        <button data-filter=".photography"><span class="filter-text">Photography</span> <span class="filter-counter">2</span></button>
                    </div>
                </div>
                <div class="row mtn--30 box">
                    <div class="col-lg-4 col-sm-6 move-up wow mt--30 mix" v-for="portfolio in data.portfolioItems.slice(0, 6)" :key="portfolio.id" :class="portfolio.filterClass">
                        <PortfolioItemCenterCaption :portfolio="portfolio" />
                    </div>
                </div>
            </div>
        </div>

        <FooterTwo />

    </div>
</template>

<script>
    import data from '../../data/portfolio.json';

    export default {
        components: {
            HeaderBlack: () => import('@/components/HeaderBlack'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PortfolioItemCenterCaption: () => import('@/components/PortfolioItemCenterCaption'),
            FooterTwo: () => import('@/components/FooterTwo'),
        },
        
        data () {
            return {
                data,
                navOpen: false,
                searchOpen: false,
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

        head() {
            return {
                title: 'Portfolio Grid – Filter'
            }
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